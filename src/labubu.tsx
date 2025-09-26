// src/labubu.tsx
import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

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


        el.style.pointerEvents = "none"; // click-through

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
    const [showLabubu, setShowLabubu] = React.useState(false);

    useEffect(() => {
        const mount = mountRef.current!;
        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.domElement.style.display = "block";
        renderer.domElement.style.pointerEvents = "none"; // keep click-through
        mount.appendChild(renderer.domElement);

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(
            45,
            mount.clientWidth / mount.clientHeight,
            0.1,
            100
        );
        camera.position.set(0.6, 1.0, 2.2);

        // Lights
        scene.add(new THREE.AmbientLight(0xffffff, 0.8));
        const dir = new THREE.DirectionalLight(0xffffff, 1.0);
        dir.position.set(2, 4, 3);
        scene.add(dir);

        // Resize
        const onResize = () => {
            const w = mount.clientWidth || SIZE;
            const h = mount.clientHeight || SIZE;
            renderer.setSize(w, h);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        };
        const ro = new ResizeObserver(onResize);
        ro.observe(mount);

        // Load model
        const url = chrome?.runtime?.getURL ? chrome.runtime.getURL("labubu.glb") : "labubu.glb";
        const loader = new GLTFLoader();
        let model: THREE.Object3D | null = null;

        loader.load(
            url,
            (gltf) => {
                model = gltf.scene
                model.scale.set(0.5, 0.5, 0.5) // keep it smaller
                model.traverse((child) => {
                    const mesh = child as THREE.Mesh
                    if (mesh.isMesh && mesh.material) {
                        // Keep existing texture but make it shiny purple
                        const material = mesh.material as THREE.MeshStandardMaterial
                        material.color.setHex(0xFFFFFF) // Pure white
                        material.metalness = 0.1 // Slight metallic
                        material.roughness = 0.3 // Soft surface
                        material.emissive.setHex(0xFFFFFF) // White glow
                        material.emissiveIntensity = 0.4 // Heavenly glow intensity
                        material.needsUpdate = true
                    }
                })
                scene.add(model)

                // 🔑 Frame camera to fit model
                const box = new THREE.Box3().setFromObject(model)
                const size = box.getSize(new THREE.Vector3())
                const center = box.getCenter(new THREE.Vector3())

                const maxDim = Math.max(size.x, size.y, size.z)
                const fov = camera.fov * (Math.PI / 180)
                let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2))

                cameraZ *= 1.5 // add some padding
                camera.position.set(center.x, center.y, cameraZ)
                camera.lookAt(center)
                camera.updateProjectionMatrix()
            },
            undefined,
            (err) => {
                console.error("[Labubu] GLB load error:", err)
                const geo = new THREE.BoxGeometry(1, 1, 1)
                const mat = new THREE.MeshNormalMaterial()
                const cube = new THREE.Mesh(geo, mat)
                scene.add(cube)
            }
        )



        // Animate (slow rotation)
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
            // Cleanup scene
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

// mount from content script
try {
    const rootEl = ensureLabubuContainer();
    createRoot(rootEl).render(<LabubuRoot />);
    // eslint-disable-next-line no-console
    console.log("[Labubu] Mounted (three.js)");
} catch (e) {
    console.error("[Labubu] Failed to mount:", e);
}
