// content/songs.ts
//
// UROR — song content. Twelve tracks, all from "Yggdrasil: Songs of the North".
//
// ── AUDIO / PHASING ────────────────────────────────────────────────────────────
//   PHASE 1 (family & friends): `audioPreview` points at the FULL song
//     at /audio/<slug>.mp3 (the files in uror-audio-full.zip).
//   PHASE 2 (public, after DistroKid): swap each to /audio/<slug>-preview.mp3
//     (the 45–60s clip) and fill `purchaseLinks` once the release is live.
//   The player code never changes — only these paths and links do.
//
// ── ARCHETYPE (VOICE) ──────────────────────────────────────────────────────────
//   `archetype` = which voice (liv / megin / eira) sings the track. The values
//   below are a FIRST-PASS SUGGESTION — overwrite to match reality. See note at end.
//
// ── TODO ───────────────────────────────────────────────────────────────────────
//   mythSource, excerpt, lyrics, reflection, artwork are stubbed for you to fill.

export type Song = {
  title: string;
  slug: string;
  trackNumber: number;
  album: string; // album slug — "yggdrasil" (see content/album.ts)
  archetype: "liv" | "megin" | "eira";
  virtue: string;
  mythSource: string;
  excerpt: string;
  lyrics: string;
  reflection: string;
  artwork: string;
  audioPreview: string; // PHASE 1: full song. PHASE 2: 45–60s preview clip.
  purchaseLinks?: {
    itunes?: string;
    appleMusic?: string;
    spotify?: string;
    youtube?: string;
    bandcamp?: string;
  };
};

export const songs: Song[] = [
  {
    title: "Roots of Yggdrasil",
    slug: "roots-of-yggdrasil",
    trackNumber: 1,
    album: "yggdrasil",
    archetype: "eira", // suggested — the World Tree, memory, depth
    virtue: "Understanding",
    mythSource: "", // TODO
    excerpt: "", // TODO
    lyrics: "", // TODO
    reflection: "", // TODO
    artwork: "/images/songs/roots-of-yggdrasil.jpg", // TODO
    audioPreview: "/audio/roots-of-yggdrasil.mp3", // PHASE 2 → roots-of-yggdrasil-preview.mp3
  },
  {
    title: "Baldr\u2019s Mistletoe",
    slug: "baldrs-mistletoe",
    trackNumber: 2,
    album: "yggdrasil",
    archetype: "liv", // suggested — coin-flip with eira (fate/doom)
    virtue: "Longing",
    mythSource: "", // TODO
    excerpt: "", // TODO
    lyrics: "", // TODO
    reflection: "", // TODO
    artwork: "/images/songs/baldrs-mistletoe.jpg", // TODO
    audioPreview: "/audio/baldrs-mistletoe.mp3", // PHASE 2 → baldrs-mistletoe-preview.mp3
  },
  {
    title: "Golden Apple",
    slug: "golden-apple",
    trackNumber: 3,
    album: "yggdrasil",
    archetype: "liv", // suggested — Idunn's apples, youth, renewal
    virtue: "Hope",
    mythSource: "", // TODO
    excerpt: "", // TODO
    lyrics: "", // TODO
    reflection: "", // TODO
    artwork: "/images/songs/golden-apple.jpg", // TODO
    audioPreview: "/audio/golden-apple.mp3", // PHASE 2 → golden-apple-preview.mp3
  },
  {
    title: "\u00d8rl\u00f6g Weaving",
    slug: "orlog-weaving",
    trackNumber: 4,
    album: "yggdrasil",
    archetype: "eira", // suggested — ørlög, fate woven by the Norns
    virtue: "Fate",
    mythSource: "", // TODO
    excerpt: "", // TODO
    lyrics: "", // TODO
    reflection: "", // TODO
    artwork: "/images/songs/orlog-weaving.jpg", // TODO
    audioPreview: "/audio/orlog-weaving.mp3", // PHASE 2 → orlog-weaving-preview.mp3
  },
  {
    title: "Grimnir\u2019s One Eye",
    slug: "grimnirs-one-eye",
    trackNumber: 5,
    album: "yggdrasil",
    archetype: "eira", // suggested — Odin's eye given at Mimir's well for wisdom
    virtue: "Understanding",
    mythSource: "", // TODO
    excerpt: "", // TODO
    lyrics: "", // TODO
    reflection: "", // TODO
    artwork: "/images/songs/grimnirs-one-eye.jpg", // TODO
    audioPreview: "/audio/grimnirs-one-eye.mp3", // PHASE 2 → grimnirs-one-eye-preview.mp3
  },
  {
    title: "One Hand World",
    slug: "one-hand-world",
    trackNumber: 6,
    album: "yggdrasil",
    archetype: "megin", // suggested — Tyr's sacrifice binding Fenrir
    virtue: "Sacrifice",
    mythSource: "", // TODO
    excerpt: "", // TODO
    lyrics: "", // TODO
    reflection: "", // TODO
    artwork: "/images/songs/one-hand-world.jpg", // TODO
    audioPreview: "/audio/one-hand-world.mp3", // PHASE 2 → one-hand-world-preview.mp3
  },
  {
    title: "Golden Blade",
    slug: "golden-blade",
    trackNumber: 7,
    album: "yggdrasil",
    archetype: "megin", // suggested — the blade, will, courage
    virtue: "Will",
    mythSource: "", // TODO
    excerpt: "", // TODO
    lyrics: "", // TODO
    reflection: "", // TODO
    artwork: "/images/songs/golden-blade.jpg", // TODO
    audioPreview: "/audio/golden-blade.mp3", // PHASE 2 → golden-blade-preview.mp3
  },
  {
    title: "Skadi",
    slug: "skadi",
    trackNumber: 8,
    album: "yggdrasil",
    archetype: "megin", // suggested — winter huntress, resolve, justice
    virtue: "Will",
    mythSource: "", // TODO
    excerpt: "", // TODO
    lyrics: "", // TODO
    reflection: "", // TODO
    artwork: "/images/songs/skadi.jpg", // TODO
    audioPreview: "/audio/skadi.mp3", // PHASE 2 → skadi-preview.mp3
  },
  {
    title: "Gunnl\u00f6d\u2019s Mead",
    slug: "gunnlods-mead",
    trackNumber: 9,
    album: "yggdrasil",
    archetype: "eira", // suggested — mead of poetry/inspiration; could be liv (longing)
    virtue: "Memory",
    mythSource: "", // TODO
    excerpt: "", // TODO
    lyrics: "", // TODO
    reflection: "", // TODO
    artwork: "/images/songs/gunnlods-mead.jpg", // TODO
    audioPreview: "/audio/gunnlods-mead.mp3", // PHASE 2 → gunnlods-mead-preview.mp3
  },
  {
    title: "The Three Who Weave",
    slug: "the-three-who-weave",
    trackNumber: 10,
    album: "yggdrasil",
    archetype: "eira", // suggested — the Norns (Urðr, Verðandi, Skuld); the namesake
    virtue: "Fate",
    mythSource: "", // TODO
    excerpt: "", // TODO
    lyrics: "", // TODO
    reflection: "", // TODO
    artwork: "/images/songs/the-three-who-weave.jpg", // TODO
    audioPreview: "/audio/the-three-who-weave.mp3", // PHASE 2 → the-three-who-weave-preview.mp3
  },
  {
    title: "Beyond the Snow",
    slug: "beyond-the-snow",
    trackNumber: 11,
    album: "yggdrasil",
    archetype: "liv", // suggested — first light after winter; the FEATURED track
    virtue: "Hope",
    mythSource: "", // TODO
    excerpt: "", // TODO
    lyrics: "", // TODO
    reflection: "", // TODO
    artwork: "/images/songs/beyond-the-snow.jpg", // TODO
    audioPreview: "/audio/beyond-the-snow.mp3", // PHASE 2 → beyond-the-snow-preview.mp3
  },
  {
    title: "The Breath of Ginnungagap",
    slug: "ginnungagap",
    trackNumber: 12,
    album: "yggdrasil",
    archetype: "eira", // suggested — the primordial void, origin, mystery
    virtue: "Memory",
    mythSource: "", // TODO
    excerpt: "", // TODO
    lyrics: "", // TODO
    reflection: "", // TODO
    artwork: "/images/songs/ginnungagap.jpg", // TODO
    audioPreview: "/audio/ginnungagap.mp3", // PHASE 2 → ginnungagap-preview.mp3
  },
];

// ── Convenience selectors (used by the Songs page and archetype pages) ──────────
export const getSongBySlug = (slug: string) =>
  songs.find((s) => s.slug === slug);

export const songsByArchetype = (archetype: "liv" | "megin" | "eira") =>
  songs.filter((s) => s.archetype === archetype);

// ── First-pass archetype distribution (rebalance to taste) ──────────────────────
//   liv:   Baldr's Mistletoe, Golden Apple, Beyond the Snow                    (3)
//   megin: One Hand World, Golden Blade, Skadi                                 (3)
//   eira:  Roots of Yggdrasil, Ørlög Weaving, Grimnir's One Eye,
//          Gunnlöd's Mead, The Three Who Weave, The Breath of Ginnungagap      (6)
//
//   This leans eira-heavy (6/3/3). For a balanced 4/4/4 across the three voices,
//   the easiest moves are: Gunnlöd's Mead → liv (the longing/seduction reading),
//   and one of Roots / Ginnungagap → megin (foundational strength).
//   Whoever actually sings each track wins — this is only a starting point.
