// src/fn.ts
// Wrapper around your Supabase Edge Functions.
// These functions contain *no secrets*. 
// Your service role key stays only in the Edge Function environments.

const BASE = import.meta.env.VITE_FUNCTIONS_URL; 
const ANON = import.meta.env.VITE_SUPABASE_ANON_KEY; // safe to ship; it’s public

// e.g. https://<project-ref>.functions.supabase.co

if (!BASE) {
  console.error("[fn] Missing VITE_FUNCTIONS_URL in .env");
}

export type Labubu = {
  labubu_id: string;
  day_no: number;
  world_id: string;
  hint: string | null;
  pos: { x: number; y: number; z: number };  // ✅ now using jsonb pos
  date: string;
};

export type LeaderRow = { 
  username: string | null; 
  player_id: string; 
  total_finds: number 
};

// Get user's local YYYY-MM-DD reliably
function localYYYYMMDD(): string {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // en-CA gives "YYYY-MM-DD"
  return new Intl.DateTimeFormat("en-CA", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit" })
    .format(new Date());
}

export async function getToday(): Promise<Labubu | null> {
  const d = localYYYYMMDD();
  const r = await fetch(`${BASE}/get-today?date=${encodeURIComponent(d)}`, {
    headers: { authorization: `Bearer ${ANON}` },
  });
  if (!r.ok) return null;
  const j = await r.json();
  return j.labubu as Labubu;
}

// 2) Get leaderboard
export async function getLeaderboard(limit = 10): Promise<LeaderRow[]> {
  const r = await fetch(`${BASE}/get-leaderboard?limit=${limit}`, {
    headers: { "authorization": `Bearer ${ANON}`, },
  });
  if (!r.ok) return [];
  const j = await r.json();
  return j.rows as LeaderRow[];
}

// 3) Get my score
export async function getMyScore(player_id: string): Promise<number> {
  const r = await fetch(`${BASE}/get-my-score?user_id=${encodeURIComponent(player_id)}`, {
    headers: { "authorization": `Bearer ${ANON}`, },
  });
  if (!r.ok) return 0;
  const j = await r.json();
  return (j.score ?? 0) as number;
}

// 4) Join contest (idempotent: creates/updates username)
export async function joinContest(
  player_id: string, 
  username: string
): Promise<{ ok: boolean; reason?: string }> {
  const r = await fetch(`${BASE}/join`, {
    method: "POST",
    headers: { "content-type": "application/json",  "authorization": `Bearer ${ANON}`, },
    body: JSON.stringify({ user_id: player_id, username }),
  });
  if (!r.ok) return { ok: false, reason: await r.text() };
  return { ok: true };
}

// add to your existing src/fn.ts
export async function claim(
    player_id: string,
    labubu_id: string,
    points = 1
  ): Promise<{
    ok: boolean;
    already_found?: boolean;
    partial?: boolean;
    user_score?: number;
    user_update_error?: string | null;
    labubu_update_error?: string | null;
    error?: string;
  }> {
    const r = await fetch(`${BASE}/claim`, {
      method: "POST",
      headers: { "content-type": "application/json",  "authorization": `Bearer ${ANON}`, },
      body: JSON.stringify({ player_id, labubu_id, points }),
    });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) return { ok: false, error: j?.error ?? `${r.status} ${r.statusText}` };
    return j;
  }

  export async function isClaimed(
    player_id: string,
    labubu_id: string
  ): Promise<boolean> {
    const r = await fetch(
      `${BASE}/is-claimed?player_id=${encodeURIComponent(player_id)}&labubu_id=${encodeURIComponent(labubu_id)}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "authorization": `Bearer ${ANON}`
        },
      }
    );
    if (!r.ok) {
      console.warn("[isClaimed] request failed", await r.text());
      return false;
    }
    const j = await r.json();
    return Boolean(j.claimed);
  }