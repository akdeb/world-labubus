(() => {
	const TAG = "[MarbleHUD]";
	const num = (v) => Number.isFinite(v) ? v.toFixed(3) : "?";
	let lastTick = 0;
  
	// --- quat helpers ---
	function quatConjugate([x,y,z,w]) { return [-x,-y,-z,w]; }
	function quatNormalize([x,y,z,w]) {
	  const L = Math.hypot(x,y,z,w) || 1; return [x/L,y/L,z/L,w/L];
	}
	function rotateVecByQuat(q, v) {
	  const [qx,qy,qz,qw] = q, [vx,vy,vz] = v;
	  const tx = 2 * (qy * vz - qz * vy);
	  const ty = 2 * (qz * vx - qx * vz);
	  const tz = 2 * (qx * vy - qy * vx);
	  return [
		vx + tx * qw + (qy * tz - qz * ty),
		vy + ty * qw + (qz * tx - qx * tz),
		vz + tz * qw + (qx * ty - qy * tx)
	  ];
	}
	const state = { proj: null, pos: null, quat: null, fov: null };
  
	// smoothing (optional)
	const smooth = { pos: null, dir: null, alpha: 0.25 };
	const lerp = (a,b,t)=>a+(b-a)*t;
	const nrm = (x,y,z)=>{ const L=Math.hypot(x,y,z)||1; return [x/L,y/L,z/L]; };
  
	function install(glProto) {
	  if (!glProto || glProto.__mh_installed) return;
  
	  const uniformNames = new WeakMap();
	  const gUL = glProto.getUniformLocation;
	  glProto.getUniformLocation = function(program, name) {
		const loc = gUL.call(this, program, name);
		if (loc) uniformNames.set(loc, name || "");
		return loc;
	  };
  
	  const uM4 = glProto.uniformMatrix4fv;
	  const u3f = glProto.uniform3f;
	  const u4f = glProto.uniform4f;
  
	  glProto.uniformMatrix4fv = function(location, transpose, data) {
		if (data && data.length === 16) {
		  const name = uniformNames.get(location) || "";
		  if (name === "projectionMatrix") {
			try {
			  state.proj = new Float32Array(data);
			  const f = state.proj?.[5];
			  state.fov = f ? (2 * Math.atan(1 / f) * 180 / Math.PI) : null;
			} catch {}
		  }
		}
		return uM4.call(this, location, transpose, data);
	  };
  
	  glProto.uniform3f = function(location, x, y, z) {
		const name = uniformNames.get(location) || "";
		if (name === "renderToViewPos") state.pos = [x,y,z];
		return u3f.call(this, location, x, y, z);
	  };
  
	  glProto.uniform4f = function(location, x, y, z, w) {
		const name = uniformNames.get(location) || "";
		if (name === "renderToViewQuat") state.quat = [x,y,z,w];
		return u4f.call(this, location, x, y, z, w);
	  };
  
	  const dA = glProto.drawArrays;
	  const dE = glProto.drawElements;
  
	  function tick() {
		const now = performance.now();
		if (now - lastTick < 120) return;
		lastTick = now;
  
		if (!state.pos || !state.quat) return;
  
		// reconstruct CAMERA WORLD position: C = - R^T * t_view
		const q = quatNormalize(state.quat);
		const qc = quatConjugate(q);
		const tview = state.pos;
		let c = rotateVecByQuat(qc, tview);
		let [cx, cy, cz] = [-c[0], -c[1], -c[2]];
  
		// forward (world) via q (not conjugate)
		let fwd = rotateVecByQuat(q, [0,0,-1]); fwd = nrm(fwd[0], fwd[1], fwd[2]);
		let [fx, fy, fz] = fwd;
  
		// smoothing
		if (!smooth.pos) smooth.pos = [cx,cy,cz];
		else smooth.pos = [ lerp(smooth.pos[0], cx, smooth.alpha),
							lerp(smooth.pos[1], cy, smooth.alpha),
							lerp(smooth.pos[2], cz, smooth.alpha) ];
		if (!smooth.dir) smooth.dir = [fx,fy,fz];
		else {
		  const s = smooth.dir;
		  const tmp = nrm(lerp(s[0],fx,smooth.alpha), lerp(s[1],fy,smooth.alpha), lerp(s[2],fz,smooth.alpha));
		  smooth.dir = tmp;
		}
		[cx,cy,cz] = smooth.pos;
		[fx,fy,fz] = smooth.dir;
  
		const yawDeg = Math.atan2(fx, fz) * 180 / Math.PI;
		const pitchDeg = Math.asin(Math.max(-1, Math.min(1, fy))) * 180 / Math.PI;
		const fov = state.fov;
  
		// Broadcast world-space camera pose
		try {
		  window.postMessage({
			__mt: true,
			type: "MT_COORDS",
			x: cx, y: cy, z: cz,
			fx, fy, fz,
			fov, yawDeg, pitchDeg,
		  }, "*");
		} catch {}
	  }
  
	  glProto.drawArrays   = function(){ try{tick()}catch{} return dA.apply(this, arguments); };
	  glProto.drawElements = function(){ try{tick()}catch{} return dE.apply(this, arguments); };
  
	  glProto.__mh_installed = true;
	}
  
	function tryInstall() {
	  let ok = false;
	  try { if (WebGLRenderingContext?.prototype)  { install(WebGLRenderingContext.prototype);  ok = true; } } catch {}
	  try { if (WebGL2RenderingContext?.prototype) { install(WebGL2RenderingContext.prototype); ok = true; } } catch {}
	  return ok;
	}
  
	const origGetContext = HTMLCanvasElement.prototype.getContext;
	HTMLCanvasElement.prototype.getContext = function(type, opts) {
	  const ctx = origGetContext.call(this, type, opts);
	  if (type && String(type).includes("webgl")) {
		try { install(Object.getPrototypeOf(ctx)); } catch {}
	  }
	  return ctx;
	};
  
	console.log(TAG, "Starting…");
	tryInstall();
	setTimeout(() => tryInstall(), 2000);
  
	// === NEW: hotkey to LOG & COPY the treasure point ===
	// Press "C" to log/copy current world position JSON: { x, y, z }
	window.addEventListener("keydown", (e) => {
	  if (e.key.toLowerCase() !== "c") return;
	  // We rely on last broadcast from MT_COORDS; read from a small cache.
	});
  
	// Cache last pose and print helper
	let lastPose = null;
	window.addEventListener("message", (ev) => {
	  const d = ev?.data;
	  if (!d || !d.__mt || d.type !== "MT_COORDS") return;
	  lastPose = d;
	}, true);
  
	async function copy(text) {
	  try { await navigator.clipboard.writeText(text); } catch {}
	}
  
	window.addEventListener("keydown", (e) => {
	  if (e.key.toLowerCase() !== "c") return;
	  if (!lastPose) { console.warn("[Treasure] no pose yet"); return; }
	  const point = { x: +lastPose.x, y: +lastPose.y, z: +lastPose.z };
	  const json = JSON.stringify(point);
	  console.log("%c[Treasure] Save this pos to DB:", "color:#6cf", point, "(JSON)", json);
	  copy(json);
	});
  })();
  