// content/site.ts
//
// Global site copy and identity. All strings here match the homepage mockup so
// the build reproduces it faithfully. Change copy HERE, not in components.

export const site = {
  brand: {
    // Plain-text brand + artist name (matches the logo and DistroKid): UROR.
    name: "UROR",

    // The mockup renders the wordmark as spaced gold serif caps with small
    // diamond separators: U · R · O · R. Render `wordmark` and apply the spacing
    // + ornaments in CSS rather than baking dots into the string.
    // (An "URÐR" variant with the eth exists if you ever want it in the logo.)
    wordmark: "UROR",

    // Hero lines — verbatim from the mockup.
    heroLine: "Three Voices. One World Tree.",
    heroDescription: "An album of myth, virtue & the human spirit",
  },

  // Upper-right navigation (mockup order).
  nav: [
    { label: "Album", href: "/album" },
    { label: "Songs", href: "/songs" },
    { label: "The Voices", href: "/voices" },
    { label: "About", href: "/about" },
  ],

  // Primary call to action — quiet and elegant, with the downward chevron.
  // NOT styled like a commercial conversion button.
  cta: { label: "Enter the World", href: "/album" },

  // The song featured in the hero player.
  featuredTrackSlug: "beyond-the-snow",
  featuredTrackLabel: "Listen to a Preview",

  // Social / listen row (mockup bottom-right). Fill as each goes live; render
  // only the ones with a value so empty links never appear.
  social: {
    spotify: "",
    appleMusic: "",
    youtube: "",
    instagram: "",
    email: "", // e.g. "mailto:..." or a newsletter link
  },
} as const;
