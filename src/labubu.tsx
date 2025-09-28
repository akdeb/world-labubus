// src/labubu.tsx
import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { getToday, claim, isClaimed } from "./fn";

const LABUBU_ID = "labubu-renderer";
const SIZE = 160;

function ensureLabubuContainer(): HTMLDivElement {
  let el = document.getElementById(LABUBU_ID) as HTMLDivElement | null;
  if (!el) {
    el = document.createElement("div");
    el.id = LABUBU_ID;
    el.style.position = "fixed";
    el.style.top = "50%";
    el.style.left = "50%";
    el.style.transform = "translate(-50%, -50%)";
    el.style.zIndex = "2147483646";
    el.style.pointerEvents = "auto"; // clickable container
    el.style.width = `${SIZE}px`;
    el.style.height = `${SIZE}px`;
    el.style.display = "none"; // start hidden
    (document.body ?? document.documentElement).appendChild(el);
    new MutationObserver(() => {
      if (!document.getElementById(LABUBU_ID)) {
        (document.body ?? document.documentElement).appendChild(el!);
      }
    }).observe(document.documentElement, { childList: true, subtree: true });
  }
  return el;
}

function getCurrentWorldId(): string | null {
  try {
    const m = location.pathname.match(/\/world\/([0-9a-fA-F-]{36})/);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}

// stable player id (same logic as HUD)
async function getOrCreatePlayerId(): Promise<string> {
  try {
    // @ts-ignore
    if (chrome?.storage?.sync) {
      const { player_id } = await chrome.storage.sync.get(["player_id"]);
      if (player_id) return player_id as string;
      const pid = crypto.randomUUID();
      await chrome.storage.sync.set({ player_id: pid });
      return pid;
    }
  } catch {}
  try {
    const key = "__player_id";
    let pid = localStorage.getItem(key);
    if (!pid) { pid = crypto.randomUUID(); localStorage.setItem(key, pid); }
    return pid;
  } catch {
    return crypto.randomUUID();
  }
}

function LabubuThree() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  // dynamic hunt data
  const targetRef = useRef<THREE.Vector3 | null>(null);
  const radiusRef = useRef<number>(2.0);
  const labubuIdRef = useRef<string | null>(null);
  const claimedRef = useRef<boolean>(false);
  const modelRef = useRef<THREE.Object3D | null>(null);

  // helper to update material based on claimed state
  const applyClaimedLook = (claimed: boolean) => {
    const root = modelRef.current;
    if (!root) return;
    root.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (mesh.isMesh && mesh.material) {
        const mat = mesh.material as THREE.MeshStandardMaterial;
        if (claimed) {
          mat.color.setHex(0x66cc66);
          mat.emissive.setHex(0x224422);
          mat.emissiveIntensity = 0.3;
        } else {
          mat.color.setHex(0xffffff);
          mat.emissive.setHex(0xffffff);
          mat.emissiveIntensity = 0.7;
        }
        mat.needsUpdate = true;
      }
    });
  };

  // Load today's Labubu once
  useEffect(() => {
    let dead = false;
    (async () => {
      try {
        const t: any = await getToday();
        console.log("[Labubu] getToday() result:", t); // 🔊 see what fields exist
        if (dead || !t) return;

        // Gate by world_id
        const currentWorldId = getCurrentWorldId();
        const todaysWorldId: string | null = t.world_id ?? null;
        if (!currentWorldId || !todaysWorldId || currentWorldId !== todaysWorldId) {
          console.log("[Labubu] Skipping render: world_id mismatch", { currentWorldId, todaysWorldId });
          labubuIdRef.current = null;
          targetRef.current = null;
          const container = document.getElementById(LABUBU_ID) as HTMLDivElement | null;
          if (container) container.style.display = "none";
          return;
        }

        // id can be labubu_id (your schema) or id (older code)
        const lbId: string | null = t.labubu_id ?? t.id ?? null;
        labubuIdRef.current = lbId;

        // radius if you add it later; default 2m
        radiusRef.current = Math.max(0.1, Number(t.radius_m ?? 2.0));

        // pos comes as JSONB { x, y, z }
        const p = t.pos ?? {};
        const tx = Number(p.x ?? 0), ty = Number(p.y ?? 0), tz = Number(p.z ?? 0);
        targetRef.current = new THREE.Vector3(tx, ty, tz);

        console.log("[Labubu] Loaded today:", {
          labubu_id: labubuIdRef.current,
          radius_m: radiusRef.current,
          target: targetRef.current.toArray(),
        });

        // determine if already claimed for this user
        try {
          if (labubuIdRef.current) {
            const pid = await getOrCreatePlayerId();
            const claimed = await isClaimed(pid, labubuIdRef.current);
            claimedRef.current = !!claimed;
            applyClaimedLook(claimedRef.current);
          }
        } catch (e) {
          console.warn("[Labubu] isClaimed failed", e);
        }
      } catch (e) {
        console.warn("[Labubu] Failed to load today", e);
      }
    })();
    return () => { dead = true; };
  }, []);

  // 🛰️ Listen for coords -> show/hide
  useEffect(() => {
    let lastNear = false;
    const onMsg = (ev: MessageEvent) => {
      const d = ev?.data;
      if (!d || !d.__mt) return;
      if (d.type === "MT_COORDS") {
        const pos = new THREE.Vector3(Number(d.x)||0, Number(d.y)||0, Number(d.z)||0);
        const tgt = targetRef.current;
        const radius = radiusRef.current || 0;
        let shouldShow = false;
        let dist = NaN;
        if (tgt) {
          dist = pos.distanceTo(tgt);
          shouldShow = isFinite(radius) && radius > 0 ? dist <= radius : false;
        }

        console.log(
          `[Labubu] Coords: pos=(${pos.x.toFixed(2)}, ${pos.y.toFixed(2)}, ${pos.z.toFixed(2)}) ` +
          `tgt=${tgt ? tgt.toArray().map(n=>n.toFixed(2)).join(",") : "n/a"} radius=${radius.toFixed(2)} ` +
          `dist=${isNaN(dist) ? "?" : dist.toFixed(2)} -> ${shouldShow ? "SHOW" : "HIDE"} ` +
          `(labubu_id=${labubuIdRef.current ?? "null"})`
        );

        const container = document.getElementById(LABUBU_ID) as HTMLDivElement | null;
        if (container) {
          const isClaimed = claimedRef.current === true;
          container.style.display = shouldShow ? "block" : "none";
          container.style.cursor = shouldShow && !isClaimed ? "pointer" : "default";
        }

        if (shouldShow !== lastNear) {
          lastNear = shouldShow;
          try {
            window.dispatchEvent(new CustomEvent("LABUBU_PROXIMITY", { detail: { near: shouldShow } }));
          } catch {}
        }
      }
    };
    window.addEventListener("message", onMsg, true);
    return () => window.removeEventListener("message", onMsg, true);
  }, []);

  // 🎨 Three.js renderer
  useEffect(() => {
    const mount = mountRef.current!;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.pointerEvents = "none"; // keep canvas click-through
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0.6, 1.0, 2.2);

    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const dir = new THREE.DirectionalLight(0xffffff, 1.2);
    dir.position.set(2, 4, 3);
    scene.add(dir);

    const onResize = () => {
      const w = mount.clientWidth || SIZE;
      const h = mount.clientHeight || SIZE;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    const url = chrome?.runtime?.getURL ? chrome.runtime.getURL("labubu.glb") : "labubu.glb";
    const loader = new GLTFLoader();
    let model: THREE.Object3D | null = null;

    loader.load(
      url,
      (gltf) => {
        model = gltf.scene;
        modelRef.current = model;
        model.scale.set(0.5, 0.5, 0.5);
        model.traverse((child) => {
          const mesh = child as THREE.Mesh;
          if (mesh.isMesh && mesh.material) {
            const material = mesh.material as THREE.MeshStandardMaterial;
            material.color.setHex(0xffffff);
            material.metalness = 0.25;
            material.roughness = 0.15;
            material.emissive.setHex(0xffffff);
            material.emissiveIntensity = 0.7;
            material.needsUpdate = true;
          }
        });
        scene.add(model);

        // If already claimed, immediately apply claimed style
        if (claimedRef.current) {
          applyClaimedLook(true);
        }

        // fit camera
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
        cameraZ *= 1.5;
        camera.position.set(center.x, center.y, cameraZ);
        camera.lookAt(center);
        camera.updateProjectionMatrix();
      },
      undefined,
      (err) => {
        console.error("[Labubu] GLB load error:", err);
        const geo = new THREE.BoxGeometry(1, 1, 1);
        const mat = new THREE.MeshNormalMaterial();
        const cube = new THREE.Mesh(geo, mat);
        scene.add(cube);
      }
    );

    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      if (model) model.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.dispose();
      scene.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        if (mesh.isMesh) {
          mesh.geometry?.dispose?.();
          const mat = mesh.material as THREE.Material | THREE.Material[];
          if (Array.isArray(mat)) mat.forEach((m) => m.dispose?.());
          else mat?.dispose?.();
        }
      });
      mount.removeChild(renderer.domElement);
    };
  }, []);

  // no HUD event coupling; appearance handled locally via claimedRef + applyClaimedLook

  // 🖱️ Click-to-claim (only when visible & id present)
  useEffect(() => {
    const container = document.getElementById(LABUBU_ID) as HTMLDivElement | null;
    if (!container) return;
    let busy = false;
    const onClick = async () => {
      try {
        if (busy) return; busy = true;
        if (container.style.display === "none") return;

        // If already claimed, do nothing
        if (claimedRef.current) return;

        const labubuId = labubuIdRef.current;
        if (!labubuId) {
          console.warn("[Labubu] No active Labubu id available to claim");
          return;
        }

        const playerId = await getOrCreatePlayerId();
        console.log("[Labubu] Claiming…", { playerId, labubuId });

        const res = await claim(playerId, labubuId, 1);
        if (!res.ok) {
          console.warn("[Labubu] Claim failed:", res);
        } else if (res.already_found) {
          console.log("[Labubu] Already claimed today. Score:", res.user_score);
          claimedRef.current = true;
          applyClaimedLook(true);
        } else {
          console.log("[Labubu] Claimed! New score:", res.user_score);
          claimedRef.current = true;
          applyClaimedLook(true);
          try { window.dispatchEvent(new CustomEvent("LABUBU_CLAIMED")); } catch {}
        }
      } catch (e) {
        console.error("[Labubu] Claim error", e);
      } finally {
        busy = false;
      }
    };
    container.addEventListener("click", onClick, true);
    return () => container.removeEventListener("click", onClick, true);
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%", background: "transparent" }} />;
}

function LabubuRoot() { return <LabubuThree />; }

try {
  const rootEl = ensureLabubuContainer();
  createRoot(rootEl).render(<LabubuRoot />);
  console.log("[Labubu] Mounted (three.js)");
} catch (e) {
  console.error("[Labubu] Failed to mount:", e);
}
