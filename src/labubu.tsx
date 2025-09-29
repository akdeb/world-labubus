// src/labubu.tsx (CLEAN VERSION: Simple Distance-Only, No Debug/Extra Visuals)
import React, { useEffect, useRef, useState } from "react";
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
    el.style.pointerEvents = "auto";
    el.style.width = `${SIZE}px`;
    el.style.height = `${SIZE}px`;
    el.style.display = "none";
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
  const [canRender, setCanRender] = useState(false);

  const targetRef = useRef<THREE.Vector3 | null>(null);
  const radiusRef = useRef<number>(0.01);
  const labubuIdRef = useRef<string | null>(null);
  const claimedRef = useRef<boolean>(false);
  const modelRef = useRef<THREE.Object3D | null>(null);
  const todaysWorldIdRef = useRef<string | null>(null);

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
        if (dead || !t) return;

        const currentWorldId = getCurrentWorldId();
        const todaysWorldId = t.world_id ?? null;
        todaysWorldIdRef.current = todaysWorldId;
        if (!currentWorldId || !todaysWorldId || currentWorldId !== todaysWorldId) {
          labubuIdRef.current = null;
          targetRef.current = null;
          const container = document.getElementById(LABUBU_ID) as HTMLDivElement | null;
          if (container) container.style.display = "none";
          setCanRender(false);
          return;
        }

        const lbId = t.labubu_id ?? t.id ?? null;
        labubuIdRef.current = lbId;
        radiusRef.current = Math.max(0.1, Number(t.radius_m ?? 2.0));

        const p = t.pos ?? {};
        const tx = Number(p.x ?? 0), ty = Number(p.y ?? 0), tz = Number(p.z ?? 0);
        targetRef.current = new THREE.Vector3(tx, ty, tz);

        try {
          if (labubuIdRef.current) {
            const pid = await getOrCreatePlayerId();
            const claimed = await isClaimed(pid, labubuIdRef.current);
            claimedRef.current = !!claimed;
            if (modelRef.current) applyClaimedLook(claimedRef.current);
          }
        } catch (e) {
          console.warn("[Labubu] isClaimed failed", e);
        }

        // World id matches and target is set; allow renderer to initialize
        setCanRender(true);
      } catch (e) {
        console.warn("[Labubu] Failed to load today", e);
      }
    })();
    return () => { dead = true; };
  }, []);

  // React to URL/world changes (SPA navigation): ensure we don't render on non-matching world pages
  useEffect(() => {
    let dead = false;
    const check = () => {
      if (dead) return;
      const current = getCurrentWorldId();
      const today = todaysWorldIdRef.current;
      const match = !!current && !!today && current === today;
      if (!match && canRender) {
        // Tear down/hide if we navigated away
        labubuIdRef.current = null;
        targetRef.current = null;
        const container = document.getElementById(LABUBU_ID) as HTMLDivElement | null;
        if (container) container.style.display = "none";
        setCanRender(false);
      } else if (match && !canRender && targetRef.current) {
        // If we navigated back to the correct world and have data, allow render
        setCanRender(true);
      }
    };
    const onPop = () => { try { check(); } catch {} };
    const onHash = () => { try { check(); } catch {} };
    const timer = setInterval(check, 1000);
    window.addEventListener("popstate", onPop);
    window.addEventListener("hashchange", onHash);
    return () => {
      dead = true;
      clearInterval(timer);
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("hashchange", onHash);
    };
  }, [canRender]);

  // Listen for coords -> show/hide (Simple: Distance-only)
  useEffect(() => {
    let lastNear = false;
    const onMsg = (ev: MessageEvent) => {
      const d = ev?.data;
      if (!d || !d.__mt || d.type !== "MT_COORDS") return;
      // Do not show if we are not allowed to render (world mismatch)
      if (!canRender) {
        const container = document.getElementById(LABUBU_ID) as HTMLDivElement | null;
        if (container) container.style.display = "none";
        return;
      }
      const pos = new THREE.Vector3(Number(d.x)||0, Number(d.y)||0, Number(d.z)||0);
      const tgt = targetRef.current;
      const radius = radiusRef.current || 0;
      let shouldShow = false;
      let dist = NaN;
      if (tgt) {
        dist = pos.distanceTo(tgt);
        shouldShow = dist <= radius;
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
        container.style.background = "transparent";  // Clean: No tint
      }

      if (shouldShow !== lastNear) {
        lastNear = shouldShow;
        try {
          window.dispatchEvent(new CustomEvent("LABUBU_PROXIMITY", { detail: { near: shouldShow } }));
        } catch {}
      }
    };
    window.addEventListener("message", onMsg, true);
    return () => window.removeEventListener("message", onMsg, true);
  }, [canRender]);

  // Three.js renderer (clean, white model)
  useEffect(() => {
    // Only initialize renderer when world_id matches today's
    if (!canRender) return;
    const mount = mountRef.current!;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.pointerEvents = "none";
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
    loader.load(
      url,
      (gltf) => {
        const model = gltf.scene;
        modelRef.current = model;
        model.scale.set(0.5, 0.5, 0.5);
        model.traverse((child) => {
          const mesh = child as THREE.Mesh;
          if (mesh.isMesh && mesh.material) {
            const material = mesh.material as THREE.MeshStandardMaterial;
            material.color.setHex(0xffffff);  // White default
            material.metalness = 0.25;
            material.roughness = 0.15;
            material.emissive.setHex(0xffffff);
            material.emissiveIntensity = 0.7;
            material.needsUpdate = true;
          }
        });
        scene.add(model);

        if (claimedRef.current) applyClaimedLook(true);

        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.5;
        camera.position.set(center.x, center.y, cameraZ);
        camera.lookAt(center);
        camera.updateProjectionMatrix();
      },
      undefined,
      (err) => {
        console.error("[Labubu] GLB load error:", err);
        const geo = new THREE.BoxGeometry(1, 1, 1);
        const mat = new THREE.MeshStandardMaterial({ color: 0xffffff });  // White cube fallback
        const cube = new THREE.Mesh(geo, mat);
        modelRef.current = cube;
        cube.scale.set(0.5, 0.5, 0.5);
        scene.add(cube);
      }
    );

    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      if (modelRef.current) modelRef.current.rotation.y += 0.01;
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
  }, [canRender]);

  // Click-to-claim
  useEffect(() => {
    const container = document.getElementById(LABUBU_ID) as HTMLDivElement | null;
    if (!container) return;
    let busy = false;
    const onClick = async () => {
      try {
        if (busy) return; busy = true;
        if (container.style.display === "none") return;
        if (claimedRef.current) return;

        const labubuId = labubuIdRef.current;
        if (!labubuId) return;

        const playerId = await getOrCreatePlayerId();
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
  console.log("[Labubu] Mounted (clean simple mode)");
} catch (e) {
  console.error("[Labubu] Failed to mount:", e);
}