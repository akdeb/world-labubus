(() => {
	console.log("[MarbleHUD] Starting...");
	const TAG = "[MarbleHUD]";
	const num = (v) => Number.isFinite(v) ? v.toFixed(2) : "?";
	let lastLog = 0;
  
	// Matrix functions unchanged
	function invert4(m) {
	  // (full code here - same as before)
	}
  
	function fovFromProj(mat) {
	  const f = Array.isArray(mat) ? mat[5] : mat?.[5];
	  return f ? (2 * Math.atan(1 / f) * 180 / Math.PI) : null;
	}
  
	// Quaternion rotate vec3
	function rotateVecByQuat(q, v) {
	  const qx = q[0], qy = q[1], qz = q[2], qw = q[3];
	  const vx = v[0], vy = v[1], vz = v[2];
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
  
	function install(glProto) {
	  if (!glProto || glProto.__mh_installed) return;
	  console.log(TAG, "Installing on", glProto.constructor.name);
  
	  const uniformNames = new WeakMap();
	  const origGetUniformLocation = glProto.getUniformLocation;
	  glProto.getUniformLocation = function(program, name) {
		const loc = origGetUniformLocation.call(this, program, name);
		if (loc) uniformNames.set(loc, name || "");
		return loc;
	  };
  
	  const origUM4 = glProto.uniformMatrix4fv;
	  const origUniform3f = glProto.uniform3f;
	  const origUniform4f = glProto.uniform4f;
  
	  glProto.uniformMatrix4fv = function(location, transpose, data) {
		if (data.length === 16) {
		  const name = uniformNames.get(location) || "";
		  if (name === "projectionMatrix") {
			try {
			  state.proj = new Float32Array(data);
			  state.fov = fovFromProj(state.proj);
			} catch (e) { console.warn(TAG, "Error PROJ:", e); }
		  }
		}
		return origUM4.call(this, location, transpose, data);
	  };
  
	  glProto.uniform3f = function(location, x, y, z) {
		const name = uniformNames.get(location) || "";
		if (name === "renderToViewPos") {
		  state.pos = [x, y, z];
		}
		return origUniform3f.call(this, location, x, y, z);
	  };
  
	  glProto.uniform4f = function(location, x, y, z, w) {
		const name = uniformNames.get(location) || "";
		if (name === "renderToViewQuat") {
		  state.quat = [x, y, z, w];
		}
		return origUniform4f.call(this, location, x, y, z, w);
	  };
  
	  const origDrawArrays = glProto.drawArrays;
	  const origDrawElements = glProto.drawElements;
	  glProto.drawArrays = function() { try { tickLog(); } catch {} return origDrawArrays.apply(this, arguments); };
	  glProto.drawElements = function() { try { tickLog(); } catch {} return origDrawElements.apply(this, arguments); };
  
	  glProto.__mh_installed = true;
	  console.log(TAG, "Installed");
	}
  
	function tickLog() {
	  const now = performance.now();
	  if (now - lastLog < 200) return;
	  lastLog = now;
  
	  let px = "?", py = "?", pz = "?", fx = "?", fy = "?", fz = "?", yawDeg = "?", pitchDeg = "?";
	  let fov = state.fov;
  
	  if (state.pos) {
		px = state.pos[0]; py = state.pos[1]; pz = state.pos[2];
	  }
	  if (state.quat) {
		// Rotate forward vector (0,0,-1) by quaternion for look direction
		const forward = rotateVecByQuat(state.quat, [0, 0, -1]);
		fx = forward[0]; fy = forward[1]; fz = forward[2];
		// Yaw/pitch from forward
		yawDeg = Math.atan2(fx, fz) * (180 / Math.PI);
		pitchDeg = Math.asin(Math.max(-1, Math.min(1, fy))) * (180 / Math.PI);
	  }
  
	  console.log(
		`${TAG} Position (x,y,z): ${num(px)}, ${num(py)}, ${num(pz)} | ` +
		`FOV: ${num(fov)} | ` +
		`Look Direction (x,y,z): ${num(fx)}, ${num(fy)}, ${num(fz)} | ` +
		`Angles (yaw, pitch deg): ${num(yawDeg)}, ${num(pitchDeg)}`
	  );
	}
  
	// Install (same)
	function tryInstall() {
	  let installed = false;
	  try { if (WebGLRenderingContext?.prototype) { install(WebGLRenderingContext.prototype); installed = true; } } catch {}
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
  
	tryInstall();
	setTimeout(() => tryInstall(), 2000);
	console.log(TAG, "Init complete");
  })();