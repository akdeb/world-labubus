// src/hud.tsx
import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { getLeaderboard, getMyScore, getToday, joinContest, Labubu, LeaderRow } from "./fn";

const ID = "react-marble-hud";
const Z = 2147483647;
const STORE_KEY = "wl_hud_collapsed";

// ---------- small utils ----------

async function getOrCreatePlayerId(): Promise<string> {
  // Prefer chrome.storage.sync so it roams with the user's Chrome profile
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
  // Fallback to localStorage
  try {
    const key = "__player_id";
    let pid = localStorage.getItem(key);
    if (!pid) {
      pid = crypto.randomUUID();
      localStorage.setItem(key, pid);
    }
    return pid;
  } catch {
    // absolute last resort
    return crypto.randomUUID();
  }
}

async function getUsername(): Promise<string | null> {
  try {
    // @ts-ignore
    if (chrome?.storage?.sync) {
      const { username } = await chrome.storage.sync.get(["username"]);
      return (username as string) || null;
    }
  } catch {}
  try {
    return localStorage.getItem("__username");
  } catch { return null; }
}

async function setUsernameLocal(username: string) {
  try {
    // @ts-ignore
    if (chrome?.storage?.sync) {
      await chrome.storage.sync.set({ username });
      return;
    }
  } catch {}
  try { localStorage.setItem("__username", username); } catch {}
}

type Coords = { x: number; y: number; z: number };

// ---------- UI bits you already had ----------

function ensureHud(): HTMLDivElement {
  let el = document.getElementById(ID) as HTMLDivElement | null;
  if (!el) {
    el = document.createElement("div");
    el.id = ID;
    el.style.position = "fixed";
    el.style.top = "16px";
    el.style.right = "16px";
    el.style.zIndex = String(Z);
    el.style.background = "rgba(18,18,20,.92)";
    el.style.color = "#fff";
    el.style.borderRadius = "14px";
    el.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    el.style.backdropFilter = "blur(8px)";
    el.style.fontFamily = 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial';
    el.style.overflow = "hidden";
    el.style.pointerEvents = "auto";
    el.style.transition = "width .18s ease, height .18s ease, border-radius .18s ease";
    (document.body ?? document.documentElement).appendChild(el);
    new MutationObserver(() => {
      if (!document.getElementById(ID)) {
        (document.body ?? document.documentElement).appendChild(el!);
      }
    }).observe(document.documentElement, { childList: true, subtree: true });
  }
  return el;
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 8, fontSize: 12, opacity: 0.9, paddingTop: 4 }}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
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
  );
}

// ---------- New: SignUp view ----------

function SignUpView({ onDone, defaultUsername }: { onDone: (username: string) => void; defaultUsername?: string | null }) {
  const [username, setUsername] = useState(defaultUsername ?? "");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const canSubmit = username.trim().length >= 3 && !busy;

  return (
    <div style={{ display: "grid", gap: 12, padding: "12px 14px" }}>
      <div style={{ fontSize: 13, opacity: 0.9 }}>
        Pick a username and join the hunt 😈
      </div>
      <input
        placeholder="your-name"
        value={username}
        onChange={e => setUsername(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter" && canSubmit) (e.currentTarget.nextSibling as HTMLButtonElement)?.click(); }}
        style={{
          width: "100%", padding: "10px 12px",
          background: "rgba(255,255,255,.08)",
          border: "1px solid rgba(255,255,255,.12)",
          borderRadius: 10, color: "#fff", fontSize: 14
        }}
      />
      <button
        disabled={!canSubmit}
        onClick={async () => {
          try {
            setBusy(true); setErr(null);
            onDone(username.trim());
          } catch (e: any) {
            setErr(e?.message || "Failed. Try a different name?");
          } finally {
            setBusy(false);
          }
        }}
        style={{
          all: "unset",
          textAlign: "center",
          padding: "10px 12px",
          background: canSubmit ? "#7A5AF8" : "rgba(255,255,255,.12)",
          borderRadius: 10,
          cursor: canSubmit ? "pointer" : "not-allowed",
          fontWeight: 700
        }}
      >
        {busy ? "Joining…" : "Join the Hunt"}
      </button>
      {err && <div style={{ color: "#ff9c9c", fontSize: 12 }}>{err}</div>}
    </div>
  );
}

// ---------- Main Panel ----------

function Panel() {
  const [coords, setCoords] = useState<Coords | null>(null);
  const [collapsed, setCollapsed] = useState<boolean>(() => {
    try { return localStorage.getItem(STORE_KEY) === "1"; } catch { return false; }
  });

  const [playerId, setPlayerId] = useState<string | null>(null);
  const [username, setUsernameState] = useState<string | null>(null);

  const [today, setToday] = useState<Labubu | null>(null);
  const [leaders, setLeaders] = useState<LeaderRow[]>([]);
  const [myScore, setMyScore] = useState<number>(0);
  const [loadErr, setLoadErr] = useState<string | null>(null);

  // mount sizing
  useEffect(() => {
    const el = document.getElementById(ID) as HTMLDivElement | null;
    if (!el) return;
    if (collapsed) {
      el.style.width = "56px"; el.style.height = "56px"; el.style.borderRadius = "12px";
    } else {
      el.style.width = "320px"; el.style.height = "auto"; el.style.borderRadius = "14px";
    }
  }, [collapsed]);

  useEffect(() => { try { localStorage.setItem(STORE_KEY, collapsed ? "1" : "0"); } catch {} }, [collapsed]);

  // coords from page-core
  useEffect(() => {
    const onMsg = (ev: MessageEvent) => {
      const d = ev?.data;
      if (!d || !d.__mt) return;
      if (d.type === "MT_COORDS") {
        setCoords({ x: +d.x || 0, y: +d.y || 0, z: +d.z || 0 });
      }
    };
    window.addEventListener("message", onMsg, true);
    return () => window.removeEventListener("message", onMsg, true);
  }, []);

  // bootstrap identity
  useEffect(() => {
    (async () => {
      const pid = await getOrCreatePlayerId();
      const uname = await getUsername();
      setPlayerId(pid);
      setUsernameState(uname);
    })();
  }, []);

  // load remote data (only if signed up)
  useEffect(() => {
    if (!playerId || !username) return;
    let dead = false;
    (async () => {
      try {
        setLoadErr(null);
        const [t, lb, score] = await Promise.all([
          getToday(),
          getLeaderboard(10),
          getMyScore(playerId),
        ]);
        if (dead) return;
        setToday(t);
        setLeaders(lb);
        setMyScore(score);
      } catch (e: any) {
        if (!dead) setLoadErr(e?.message || "Failed to load data");
      }
    })();
    return () => { dead = true; };
  }, [playerId, username]);

  // collapsed header-only view
  if (collapsed) {
    return (
      <button
        aria-label="Expand Labubus HUD"
        onClick={() => setCollapsed(false)}
        style={{ all: "unset", display: "grid", placeItems: "center", width: 56, height: 56, cursor: "pointer" }}
      >
        <img
          src={chrome?.runtime?.getURL ? chrome.runtime.getURL("logo.png") :
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%237A5AF8'/%3E%3C/svg%3E"}
          alt="Labubus"
          style={{ width: 40, height: 40, borderRadius: 10, display: "block" }}
        />
      </button>
    );
  }

  const header = (
    <div
      onClick={() => setCollapsed(true)}
      title="Click to collapse"
      style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "12px 14px", background: "#7A5AF8",
        cursor: "pointer", userSelect: "none"
      }}
    >
      <img
        src={chrome?.runtime?.getURL ? chrome.runtime.getURL("logo.png") :
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect width='48' height='48' fill='%237A5AF8'/%3E%3C/svg%3E"}
        alt="Labubus"
        style={{ width: 48, height: 48, display: "block", borderRadius: 10 }}
      />
      <div>
        <div style={{ fontWeight: 800, letterSpacing: ".2px" }}>World Labubus</div>
        <div style={{ fontSize: 12, opacity: 0.9 }}>{username ? "Find today's Labubu" : "Join the daily hunt"}</div>
      </div>
    </div>
  );

  // If not signed up, show the signup view first
  if (!username || !playerId) {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {header}
        <SignUpView
          defaultUsername={username}
          onDone={async (uname) => {
            if (!playerId) return;
            const res = await joinContest(playerId, uname);
            if (!res.ok) {
              alert(res.reason ?? "Failed to join");
              return;
            }
            await setUsernameLocal(uname);
            setUsernameState(uname);
          }}
        />
      </div>
    );
  }

  // Main view (signed in)
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {header}

      <div style={{ padding: "12px 14px", display: "grid", gap: 12 }}>
        {/* Hint + your score */}
        <Card title="Today">
          <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
            <span>{today?.hint ?? "Explore more worlds"}</span>
            <span style={{ opacity: 0.9 }}>Score: <b>{myScore}</b></span>
          </div>
          <div style={{ fontSize: 11, opacity: 0.8, paddingTop: 6 }}>
            {today ? `Hunt #${today.day_no}` : "No hunt live right now"}
          </div>
        </Card>

        {/* Leaderboard */}
        <div>
          <div style={{ fontSize: 12, opacity: 0.8, textTransform: "uppercase", marginBottom: 6 }}>
            Leaderboard
          </div>
          <div style={{
            background: "rgba(255,255,255,.06)",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: 10
          }}>
            {leaders.length === 0 ? (
              <div style={{ padding: "10px 12px", fontSize: 14, opacity: 0.8 }}>
                {loadErr ? `Error: ${loadErr}` : "No entries yet — be the first!"}
              </div>
            ) : leaders.map((row, i) => (
              <div key={row.player_id} style={{
                display: "flex", justifyContent: "space-between",
                fontSize: 14, padding: "8px 10px",
                borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,.08)"
              }}>
                <span>{i + 1}. {row.username || row.player_id.slice(0, 6)}</span>
                <span>{row.total_finds}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Camera readout you had */}
        <div style={{
          background: "rgba(255,255,255,.06)",
          border: "1px solid rgba(255,255,255,.08)",
          borderRadius: 10, padding: 10
        }}>
          <Row
            label="Camera"
            value={coords ? `${coords.x.toFixed(2)}, ${coords.y.toFixed(2)}, ${coords.z.toFixed(2)}` : "…"}
          />
          <div style={{ fontSize: 11, opacity: 0.8, paddingTop: 2 }}>
            press <b>C</b> to copy (handled by your page-core)
          </div>
        </div>
      </div>

      <div style={{
        padding: "10px 14px", fontSize: 12, opacity: 0.8,
        display: "flex", justifyContent: "space-between", alignItems: "center"
      }}>
        <span style={{
          padding: "3px 8px", background: "rgba(255,255,255,.12)",
          borderRadius: 999, fontSize: 12
        }}>beta</span>
        <span style={{ maxWidth: 200, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
          {username}
        </span>
      </div>
    </div>
  );
}

// mount React
console.log("[HUD] Starting HUD renderer…");
try {
  const rootEl = ensureHud();
  console.log("[HUD] Container created, mounting React…");
  createRoot(rootEl).render(<Panel />);
  console.log("[HUD] Successfully mounted React component");
} catch (error) {
  console.error("[HUD] Failed to mount:", error);
}
