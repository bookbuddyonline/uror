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
  subtitle: string; // e.g. "Beauty · Voice · Melody"
  bio: string[]; // array of paragraphs
  quote: string; // closing pull-quote
  portrait: string; // path to portrait image
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
    subtitle: "Beauty \u00B7 Voice \u00B7 Melody",
    bio: [
      "Born and raised in Reykjav\u00EDk, Liv grew up surrounded by music and the stories of Iceland\u2019s past. Her earliest musical influences came through choral and traditional Icelandic song, later expanding into classical voice and contemporary composition. She became especially drawn to the haunting simplicity of old melodies\u2014and to the possibility of carrying their emotional character into something entirely new.",
      "Within UROR, Liv is the voice of Beauty. Her songs often explore longing, love, hope, devotion, and renewal, finding within the old Norse stories not distant legends, but reflections of experiences that remain deeply human.",
      "For Liv, beauty is not ornament. It is something with purpose: the light that calls us forward, the thing worth protecting, and sometimes the reason we endure.",
      "Her approach to UROR\u2019s music favors soaring vocal lines, layered female harmonies, and melodies that bring warmth and humanity to the band\u2019s more ancient and cinematic sound.",
      "Drawing inspiration from Icelandic folklore, Norse mythology, and the landscapes of the North, Liv approaches the past not as something to recreate, but as something still capable of speaking to the present.",
    ],
    quote:
      "\u201CBeauty is not what survives untouched. It is what gives us a reason to endure.\u201D",
    portrait: "/images/voices/liv.jpg",
    themes: ["Longing", "Love", "Hope"],
    emblem: "sun", // radiant sun glyph
    order: 1, // left
  },
  {
    slug: "megin",
    name: "Megin",
    title: "Strength",
    phrase: "The Fire That Endures",
    subtitle: "Strength \u00B7 Rhythm \u00B7 Resolve",
    bio: [
      "Born and raised in Reykjav\u00EDk, Megin found her way into music through rhythm. Drawn from an early age to percussion, chant, and the physical power of sound, she became fascinated by the way a simple repeated beat could transform a song\u2014giving it weight, movement, and something almost instinctive.",
      "Her interest eventually led her toward Icelandic musical traditions and the surviving fragments of the older Norse world. Rather than attempting to recreate the music of the Viking Age, Megin became interested in what its stories could become when carried by modern percussion, layered voices, and the scale of cinematic composition.",
      "Within UROR, Megin embodies Strength. But strength, as she understands it, has little to do with anger or conquest. She is drawn instead to stories of courage, sacrifice, duty, perseverance, and the difficult choices made when there is something greater than oneself at stake.",
      "That philosophy shapes her contribution to the band\u2019s most primal music: deep drums, ritualistic rhythms, forceful vocal passages, and arrangements that build gradually from restraint into overwhelming power.",
      "For Megin, the old stories endure because they understood something fundamental\u2014that courage is not the absence of fear, and strength is not measured by how loudly we fight. It is measured by what we are willing to carry, what we choose to protect, and whether we remain standing when the cost becomes ours to bear.",
    ],
    quote:
      "\u201CAnger burns quickly. Strength is what remains when the fire has passed.\u201D",
    portrait: "/images/voices/megin.jpg",
    themes: ["Courage", "Will", "Sacrifice"],
    emblem: "mjolnir", // Thor's hammer glyph
    order: 2, // center
  },
  {
    slug: "eira",
    name: "Eira",
    title: "Wisdom",
    phrase: "The Depth That Remembers",
    subtitle: "Wisdom \u00B7 Story \u00B7 Memory",
    bio: [
      "Born and raised in Reykjav\u00EDk, Eira\u2019s connection to music developed alongside an equally deep fascination with Iceland\u2019s literary and storytelling traditions. From the sagas and r\u00EDmur to Norse mythology and folklore, she was drawn not only to the stories themselves, but to the questions preserved within them\u2014questions of fate, memory, sacrifice, mortality, and the often uncertain boundary between what is known and what must simply be accepted.",
      "Her study of Icelandic literature, folklore, and the Old Norse world became inseparable from her musical life. Within UROR, Eira is often the one who looks beyond the familiar myths, uncovering lesser-known stories and fragments that can become the foundation for a song.",
      "Eira embodies Wisdom\u2014not as certainty, but as the willingness to look more deeply. Her music tends toward UROR\u2019s quieter and more contemplative side: sparse instrumentation, layered vocal drones, bowed strings, restrained percussion, and moments of silence that are allowed to become part of the composition itself.",
      "She is particularly drawn to stories surrounding fate, creation, memory, loss, and the search for understanding. Where ancient myths offer no simple answer, Eira sees no need to invent one. For her, their power often lies in the questions they leave behind.",
      "Her work within UROR reflects a belief that the old stories remain valuable not because they tell us what to think, but because they remind us how long humanity has been asking the same questions.",
    ],
    quote:
      "\u201CWisdom is not knowing every answer. It is learning which questions are worth asking.\u201D",
    portrait: "/images/voices/eira.jpg",
    themes: ["Fate", "Memory", "Understanding"],
    emblem: "tree", // small world-tree glyph
    order: 3, // right
  },
];

export const getArchetype = (slug: "liv" | "megin" | "eira") =>
  archetypes.find((a) => a.slug === slug)!;
