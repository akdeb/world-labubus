import React from "react"
import { createRoot } from "react-dom/client"

console.log('[Labubu] Starting Labubu renderer...');

const LABUBU_ID = "labubu-renderer"

function ensureLabubuContainer(): HTMLDivElement {
    let el = document.getElementById(LABUBU_ID) as HTMLDivElement | null
    if (!el) {
        console.log('[Labubu] Creating container...');
        el = document.createElement("div")
        el.id = LABUBU_ID
        el.style.position = "fixed"
        el.style.top = "50%"
        el.style.left = "50%"
        el.style.transform = "translate(-50%, -50%)"
        el.style.zIndex = "2147483646" // One less than HUD to avoid conflict
        el.style.pointerEvents = "none"

            ; (document.body ?? document.documentElement).appendChild(el)

        // Self-heal if SPA nukes it (same as HUD)
        new MutationObserver(() => {
            if (!document.getElementById(LABUBU_ID)) {
                console.log('[Labubu] Container was removed, re-adding...');
                ; (document.body ?? document.documentElement).appendChild(el!)
            }
        }).observe(document.documentElement, { childList: true, subtree: true })

        console.log('[Labubu] Container created and added to DOM');
    }
    return el
}

function LabubuRenderer() {
    console.log('[Labubu] Rendering component...');
    return (
        <div
            style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'red',
                borderRadius: '8px',
                pointerEvents: 'none'
            }}
        />
    )
}

try {
    // Mount React
    const rootEl = ensureLabubuContainer()
    createRoot(rootEl).render(<LabubuRenderer />)
    console.log('[Labubu] Successfully mounted React component');
} catch (error) {
    console.error('[Labubu] Failed to mount:', error);
}