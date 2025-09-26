// src/labubu.tsx
import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const LABUBU_ID = "labubu-renderer";
const SIZE = 160;
const TARGET = new THREE.Vector3(-1.55, 0.17, 2.78);
const MAX_DISTANCE = 2.0; // how close user must be

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
    el.style.pointerEvents = "none";
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

function LabubuThree() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  // 🛰️ Listen for coords
  useEffect(() => {
    const onMsg = (ev: MessageEvent) => {
      const d = ev?.data;
      if (!d || !d.__mt) return;
      if (d.type === "MT_COORDS") {
        const pos = new THREE.Vector3(d.x, d.y, d.z);
        const dist = pos.distanceTo(TARGET);
        const shouldShow = dist <= MAX_DISTANCE;

        console.log(
          `[Labubu] Got coords: pos=(${d.x?.toFixed(2)}, ${d.y?.toFixed(2)}, ${d.z?.toFixed(2)}) ` +
          `dist=${dist.toFixed(2)} -> ${shouldShow ? "SHOW" : "HIDE"}`
        );

        const container = document.getElementById(LABUBU_ID) as HTMLDivElement | null;
        if (container) container.style.display = shouldShow ? "block" : "none";
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
    renderer.domElement.style.pointerEvents = "none";
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
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

    const url = chrome?.runtime?.getURL
      ? chrome.runtime.getURL("labubu.glb")
      : "labubu.glb";
    const loader = new GLTFLoader();
    let model: THREE.Object3D | null = null;

    loader.load(
      url,
      (gltf) => {
        model = gltf.scene;
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

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
    />
  );
}

function LabubuRoot() {
  return <LabubuThree />;
}

try {
  const rootEl = ensureLabubuContainer();
  createRoot(rootEl).render(<LabubuRoot />);
  console.log("[Labubu] Mounted (three.js)");
} catch (e) {
  console.error("[Labubu] Failed to mount:", e);
}
