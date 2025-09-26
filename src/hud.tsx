import React, { useEffect, useState } from "react"
import { createRoot } from "react-dom/client"

const ID = "react-marble-hud"
const Z = 2147483647
const STORE_KEY = "wl_hud_collapsed"

type Coords = { x: number; y: number; z: number }

function ensureHud(): HTMLDivElement {
  let el = document.getElementById(ID) as HTMLDivElement | null
  if (!el) {
    el = document.createElement("div")
    el.id = ID
    // overlay container (outer shell). Keep styles minimal; width is controlled by React state.
    el.style.position = "fixed"
    el.style.top = "16px"
    el.style.right = "16px"
    el.style.zIndex = String(Z)
    el.style.background = "rgba(18,18,20,.92)"
    el.style.color = "#fff"
    el.style.borderRadius = "14px"
    el.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)"
    el.style.backdropFilter = "blur(8px)"
    el.style.fontFamily =
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial'
    el.style.overflow = "hidden"
    el.style.pointerEvents = "auto"
    el.style.transition = "width .18s ease, height .18s ease, border-radius .18s ease"

    ;(document.body ?? document.documentElement).appendChild(el)

    // self-heal if SPA nukes it
    new MutationObserver(() => {
      if (!document.getElementById(ID)) {
        ;(document.body ?? document.documentElement).appendChild(el!)
      }
    }).observe(document.documentElement, { childList: true, subtree: true })
  }
  return el
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", gap: 8,
      fontSize: 12, opacity: 0.9, paddingTop: 4
    }}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  )
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: "rgba(255,255,255,.06)",
      border: "1px solid rgba(255,255,255,.08)",
      borderRadius: 10,
      padding: 10
    }}>
      <div style={{ fontSize: 12, opacity: 0.8, textTransform: "uppercase" }}>{title}</div>
      <div style={{ fontSize: 14, marginTop: 6 }}>{children}</div>
    </div>
  )
}

function Panel() {
  const [coords, setCoords] = useState<Coords | null>(null)
  const [collapsed, setCollapsed] = useState<boolean>(() => {
    try { return localStorage.getItem(STORE_KEY) === "1" } catch { return false }
  })

  // keep outer shell sized to state
  useEffect(() => {
    const el = document.getElementById(ID) as HTMLDivElement | null
    if (!el) return
    if (collapsed) {
      el.style.width = "56px"
      el.style.height = "56px"
      el.style.borderRadius = "12px"
    } else {
      el.style.width = "320px"
      el.style.height = "auto"
      el.style.borderRadius = "14px"
    }
  }, [collapsed])

  // persist collapsed state
  useEffect(() => {
    try { localStorage.setItem(STORE_KEY, collapsed ? "1" : "0") } catch {}
  }, [collapsed])

  // xyz updates from page-core
  useEffect(() => {
    const onMsg = (ev: MessageEvent) => {
      const d = ev?.data
      if (!d || !d.__mt) return
      if (d.type === "MT_COORDS") {
        setCoords({ x: +d.x || 0, y: +d.y || 0, z: +d.z || 0 })
      }
    }
    window.addEventListener("message", onMsg, true)
    return () => window.removeEventListener("message", onMsg, true)
  }, [])

  // collapsed view (logo-only square)
  if (collapsed) {
    return (
      <button
        aria-label="Expand Labubus HUD"
        onClick={() => setCollapsed(false)}
        style={{
          all: "unset",
          display: "grid",
          placeItems: "center",
          width: 56, height: 56,
          cursor: "pointer"
        }}
      >
        <img
          src={chrome?.runtime?.getURL ? chrome.runtime.getURL("logo.png") : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%23ff6b6b'/%3E%3C/svg%3E"}
          alt="Labubus"
          style={{ width: 40, height: 40, borderRadius: 10, display: "block" }}
        />
      </button>
    )
  }

  // expanded view
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* Header (click to collapse) */}
      <div
        onClick={() => setCollapsed(true)}
        title="Click to collapse"
        style={{
          display: "flex", alignItems: "center", gap: 10,
          padding: "12px 14px",
          background: "#7A5AF8",
          cursor: "pointer",
          userSelect: "none"
        }}
      >
        <img
          src={chrome?.runtime?.getURL ? chrome.runtime.getURL("logo.png") : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect width='48' height='48' fill='%23ff6b6b'/%3E%3C/svg%3E"}
          alt="Labubus"
          style={{ width: 48, height: 48, display: "block", borderRadius: 10 }}
        />
        <div>
          <div style={{ fontWeight: 800, letterSpacing: ".2px" }}>World Labubus</div>
          <div style={{ fontSize: 12, opacity: 0.9 }}>A 100 Labubus live here, catch 'em all</div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "12px 14px", display: "grid", gap: 12 }}>
        <Card title="Hint">Shiny thing near the round window. Look up ☀️</Card>

        <div>
          <div style={{ fontSize: 12, opacity: 0.8, textTransform: "uppercase", marginBottom: 6 }}>
            Leaderboard
          </div>
          <div style={{
            background: "rgba(255,255,255,.06)",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: 10
          }}>
            {[
              ["1. Pong", "42"],
              ["2. Akash", "37"],
              ["3. Nicha", "31"]
            ].map(([name, score], i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between",
                fontSize: 14, padding: "8px 10px",
                borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,.08)"
              }}>
                <span>{name}</span><span>{score}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          background: "rgba(255,255,255,.06)",
          border: "1px solid rgba(255,255,255,.08)",
          borderRadius: 10,
          padding: 10
        }}>
          <Row
            label="Camera"
            value={
              coords
                ? `${coords.x.toFixed(2)}, ${coords.y.toFixed(2)}, ${coords.z.toFixed(2)}`
                : "…"
            }
          />
          <div style={{ fontSize: 11, opacity: 0.8, paddingTop: 2 }}>
            press <b>C</b> to copy (handled by your page-core)
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        padding: "10px 14px",
        fontSize: 12, opacity: 0.8,
        display: "flex", justifyContent: "space-between", alignItems: "center"
      }}>
        <span style={{
          padding: "3px 8px",
          background: "rgba(255,255,255,.12)",
          borderRadius: 999,
          fontSize: 12
        }}>beta</span>
        <span style={{
          maxWidth: 200, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"
        }}></span>
      </div>
    </div>
  )
}

// mount React
console.log('[HUD] Starting HUD renderer...');
try {
  const rootEl = ensureHud()
  console.log('[HUD] Container created, mounting React...');
  createRoot(rootEl).render(<Panel />)
  console.log('[HUD] Successfully mounted React component');
} catch (error) {
  console.error('[HUD] Failed to mount:', error);
}