// content/about.ts
//
// About page copy. All text here so the component stays clean.

export const about = {
  heading: "About UROR",
  subheading: "Where Ancient Stories Live Again",

  opening: [
    "UROR is a Reykjav\u00EDk-born musical project built around three voices and three enduring ideals: Beauty, Strength, and Wisdom.",
    "Drawing inspiration from Norse mythology, Icelandic storytelling traditions, and the landscapes and history of the North, Liv, Megin, and Eira create beautiful songs that bring ancient stories into a modern cinematic world. Layered female vocals meet primal percussion, haunting harmonies, bowed strings, and atmospheric soundscapes\u2014UROR\u2019s music is shaped by the past without attempting to remain within it.",
    "At the heart of UROR is a belief that mythology endures because the human experiences within it endure. Beneath stories of gods, giants, seers, warriors, sacrifice, fate, and creation are questions that remain familiar: What is worth pursuing? What gives us the strength to endure? What can the past teach us about the life before us?",
  ],

  concertImage: "/images/about/uror-concert.jpg",
  concertAlt: "UROR performing live",

  transitionLine:
    "Each of UROR\u2019s three voices approaches those questions differently.",

  columns: [
    {
      label: "Liv is Beauty",
      text: "Longing, love, hope, renewal, and the light that gives us something worth reaching toward.",
    },
    {
      label: "Megin is Strength",
      text: "Courage, sacrifice, duty, perseverance, and the resolve to stand when standing carries a cost.",
    },
    {
      label: "Eira is Wisdom",
      text: "Memory, fate, understanding, and the search for meaning within stories whose questions have survived for centuries.",
    },
  ] as const,

  unityLine:
    "Together, their voices become something larger than any one of them imagined and recreate an ethereal, mythical world that combines past traditions with modern influences.",

  closingPhilosophy:
    "UROR does not seek to recreate the ancient world. It seeks to listen to it\u2014to find within its stories something that still touches the history that binds us all, and gives those stories a new voice.",

  tagline:
    "Ancient stories. Modern voices. Beauty, Strength, and Wisdom woven together beneath the branches of the World Tree.",
} as const;
