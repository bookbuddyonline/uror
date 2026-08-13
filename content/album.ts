// content/album.ts
//
// Albums are modeled as a list so a second album can be added later with zero
// refactoring. For now only Yggdrasil is present and is the site's focus.

export type AlbumConcept = {
  heading: string;
  paragraphs: string[];
  closing: string;
};

export type Album = {
  slug: string;
  title: string; // "Yggdrasil"
  subtitle: string; // "Songs of the North"
  fullTitle: string; // "Yggdrasil: Songs of the North"
  order: number; // release order in the band's catalog
  isPrimary: boolean; // the album this site focuses on
  tagline: string; // "Beauty · Strength · Wisdom"
  cover: string; // square album artwork
  coverAnimation?: string; // one-time reveal video — plays once, holds final frame
  description: string;
  concept?: AlbumConcept;
  trackSlugs: string[]; // in album order
};

export const albums: Album[] = [
  {
    slug: "yggdrasil",
    title: "Yggdrasil",
    subtitle: "Songs of the North",
    fullTitle: "Yggdrasil: Songs of the North",
    order: 2, // second album released, but the PRIMARY focus of this site
    isPrimary: true,
    tagline: "Beauty · Strength · Wisdom",
    cover: "/images/album/yggdrasil-cover.jpg", // TODO: square album art
    coverAnimation: "/video/yggdrasil-reveal.mp4", // TODO: web-optimized one-time reveal
    description: "", // TODO
    concept: {
      heading: "Where the Old Stories Still Live",
      paragraphs: [
        "Yggdrasil: Songs of the North journeys into the myths, voices, and ancient stories of the Norse world as reflections of the human spirit that endure across the ages.",
        "Through the voices of Liv, Megin, and Eira, the album explores three enduring ideals: Beauty, Strength, and Wisdom. From sacrifice and longing to fate, courage, memory, and renewal, each song draws from Norse mythology and tradition to uncover something timeless within the story.",
      ],
      closing:
        "Ancient tales. Modern voices. The Beauty, Strength and Wisdom beneath the branches of the World Tree.",
    },
    trackSlugs: [
      "roots-of-yggdrasil",
      "baldrs-mistletoe",
      "golden-apple",
      "orlog-weaving",
      "grimnirs-one-eye",
      "one-hand-world",
      "golden-blade",
      "skadi",
      "gunnlods-mead",
      "the-three-who-weave",
      "beyond-the-snow",
      "ginnungagap",
    ],
  },

  // First album — held back for now, may be added later. When ready:
  //   add an entry with order: 1, isPrimary: false, its own trackSlugs,
  //   and set `album: "<its-slug>"` on those songs in content/songs.ts.
];

export const primaryAlbum = albums.find((a) => a.isPrimary)!;
export const getAlbum = (slug: string) => albums.find((a) => a.slug === slug);
