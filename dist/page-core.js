(() => {
	const TAG = "[MarbleHUD]";
	const num = (v) => Number.isFinite(v) ? v.toFixed(2) : "?";
	let lastLog = 0;
  
	// Rotate forward vector (0,0,-1) by quaternion [x,y,z,w]
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
  
	// simple 1st-order smoothing
	const smooth = {
	  pos: null,    // [x,y,z]
	  dir: null,    // [fx,fy,fz]
	  alpha: 0.25,  // smoothing factor
	};
	function lerp(a, b, t) { return a + (b - a) * t; }
	function nrm(x,y,z) {
	  const L = Math.hypot(x,y,z) || 1;
	  return [x/L, y/L, z/L];
	}
  
	function install(glProto) {
	  if (!glProto || glProto.__mh_installed) return;
  
	  const uniformNames = new WeakMap();
	  const origGetUniformLocation = glProto.getUniformLocation;
	  glProto.getUniformLocation = function(program, name) {
		const loc = origGetUniformLocation.call(this, program, name);
		if (loc) uniformNames.set(loc, name || "");
		return loc;
	  };
  
	  const origUM4 = glProto.uniformMatrix4fv;
	  const origU3 = glProto.uniform3f;
	  const origU4 = glProto.uniform4f;
  
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
		return origUM4.call(this, location, transpose, data);
	  };
  
	  glProto.uniform3f = function(location, x, y, z) {
		const name = uniformNames.get(location) || "";
		if (name === "renderToViewPos") {
		  state.pos = [x, y, z];
		}
		return origU3.call(this, location, x, y, z);
	  };
  
	  glProto.uniform4f = function(location, x, y, z, w) {
		const name = uniformNames.get(location) || "";
		if (name === "renderToViewQuat") {
		  state.quat = [x, y, z, w];
		}
		return origU4.call(this, location, x, y, z, w);
	  };
  
	  const origDrawArrays = glProto.drawArrays;
	  const origDrawElements = glProto.drawElements;
  
	  function tick() {
		const now = performance.now();
		if (now - lastLog < 120) return; // ~8fps sampling, reduce spam
		lastLog = now;
  
		// only proceed if both pos & quat available
		if (!state.pos || !state.quat) return;
  
		let px = state.pos[0], py = state.pos[1], pz = state.pos[2];
		const forward = rotateVecByQuat(state.quat, [0, 0, -1]);
		let [fx, fy, fz] = nrm(forward[0], forward[1], forward[2]);
  
		// smoothing
		if (!smooth.pos) smooth.pos = [px, py, pz];
		else smooth.pos = [ lerp(smooth.pos[0], px, smooth.alpha),
							lerp(smooth.pos[1], py, smooth.alpha),
							lerp(smooth.pos[2], pz, smooth.alpha) ];
		if (!smooth.dir) smooth.dir = [fx, fy, fz];
		else smooth.dir = nrm(
		  lerp(smooth.dir[0], fx, smooth.alpha),
		  lerp(smooth.dir[1], fy, smooth.alpha),
		  lerp(smooth.dir[2], fz, smooth.alpha)
		);
  
		px = smooth.pos[0]; py = smooth.pos[1]; pz = smooth.pos[2];
		fx = smooth.dir[0]; fy = smooth.dir[1]; fz = smooth.dir[2];
  
		const yawDeg = Math.atan2(fx, fz) * 180 / Math.PI;
		const pitchDeg = Math.asin(Math.max(-1, Math.min(1, fy))) * 180 / Math.PI;
		const fov = state.fov;
  
		// log
		console.log(
		  `${TAG} Position (x,y,z): ${num(px)}, ${num(py)}, ${num(pz)} | ` +
		  `FOV: ${num(fov)} | ` +
		  `Look Direction (x,y,z): ${num(fx)}, ${num(fy)}, ${num(fz)} | ` +
		  `Angles (yaw, pitch deg): ${num(yawDeg)}, ${num(pitchDeg)}`
		);
  
		// broadcast numeric payload
		try {
		  window.postMessage({
			__mt: true,
			type: "MT_COORDS",
			x: px, y: py, z: pz,
			fx, fy, fz,
			fov,
			yawDeg, pitchDeg
		  }, "*");
		} catch {}
	  }
  
	  glProto.drawArrays   = function() { try { tick(); } catch {} return origDrawArrays.apply(this, arguments); };
	  glProto.drawElements = function() { try { tick(); } catch {} return origDrawElements.apply(this, arguments); };
  
	  glProto.__mh_installed = true;
	}
  
	function tryInstall() {
	  let installed = false;
	  try { if (WebGLRenderingContext?.prototype)  { install(WebGLRenderingContext.prototype);  installed = true; } } catch {}
	  try { if (WebGL2RenderingContext?.prototype) { install(WebGL2RenderingContext.prototype); installed = true; } } catch {}
	  return installed;
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
  })();
  