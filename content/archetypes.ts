// content/archetypes.ts
//
// The three voices. Copy is verbatim from the mockup. `order` is left→center→right
// in the hero. `emblem` is the small gold glyph beneath each name in the mockup —
// a hint for which icon the component should render.

export type Archetype = {
  slug: "liv" | "megin" | "eira";
  name: string;
  title: string; // Beauty / Strength / Wisdom
  phrase: string; // the supporting line
  themes: string[];
  emblem: "sun" | "mjolnir" | "tree"; // mockup glyph under the name
  order: number;
};

export const archetypes: Archetype[] = [
  {
    slug: "liv",
    name: "Liv",
    title: "Beauty",
    phrase: "The Light That Awakens",
    themes: ["Longing", "Love", "Hope"],
    emblem: "sun", // radiant sun glyph
    order: 1, // left
  },
  {
    slug: "megin",
    name: "Megin",
    title: "Strength",
    phrase: "The Fire That Endures",
    themes: ["Courage", "Will", "Sacrifice"],
    emblem: "mjolnir", // Thor's hammer glyph
    order: 2, // center
  },
  {
    slug: "eira",
    name: "Eira",
    title: "Wisdom",
    phrase: "The Depth That Remembers",
    themes: ["Fate", "Memory", "Understanding"],
    emblem: "tree", // small world-tree glyph
    order: 3, // right
  },
];

export const getArchetype = (slug: "liv" | "megin" | "eira") =>
  archetypes.find((a) => a.slug === slug)!;
