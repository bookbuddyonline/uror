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
  mythImage?: string;
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
    mythSource:
      "At the center of the Norse cosmos stands Yggdrasil, the immense ash whose branches extend across the heavens and whose roots bind together the worlds of gods, giants, humanity, and the dead. More than a tree, Yggdrasil is the living structure of the cosmos\u2014a place where creation, fate, wisdom, decay, and renewal meet.\n\nIn the Prose Edda, three great roots extend from Yggdrasil, each reaching toward a different realm and source of water. Beneath one lies Ur\u00F0arbrunnr, the Well of Ur\u00F0r, where the Norns\u2014Ur\u00F0r, Ver\u00F0andi, and Skuld\u2014shape the fates of gods and humankind and tend the tree with water and sacred clay.\n\nAnother reaches toward M\u00EDmir\u2019s well, a source of wisdom and understanding. Odin desired its knowledge so deeply that he surrendered one of his eyes for a drink from its waters\u2014a sacrifice that made wisdom something purchased, rather than freely given.\n\nThe third root reaches toward the primordial cold of Niflheim and Hvergelmir, where the serpent-dragon N\u00ED\u00F0h\u00F6ggr gnaws at Yggdrasil from below. Other creatures inhabit the tree as well, while an eagle watches from its highest branches.\n\nYggdrasil therefore exists under constant strain. It is nourished and wounded, flourishing and decaying at once. Even at Ragnar\u00F6k, when the established order of the gods collapses, the World Tree remains bound to the mystery of survival and renewal.",
    mythImage: "/images/songs/roots-of-yggdrasil-myth.jpg",
    excerpt: "", // TODO
    lyrics: `Before the stars were carved in frost
Before the fire\u2026 before the lost
One ash arose from silent stone
And held the worlds\u2026 as one\u2026 alone\u2026
Its branches touched the northern light
Its roots drank deep from endless night
And every realm\u2026 from death to sky\u2026
Was born beneath\u2026 its watching eye\u2026

Root below\u2026 branch above\u2026
Stone of fate\u2026 blood of love\u2026
Water deep\u2026 secrets grow\u2026
Only ancient mothers know\u2026

Yggdrasil\u2026 Yggdrasil\u2026
Mother of the nine-fold flame
Through frost and fire\u2026 through life and death\u2026
The worlds all speak your name
Yggdrasil\u2026 Yggdrasil\u2026
Root of all that lives and dies
Drink from fate\u2026 drink from wisdom\u2026
Drink where ancient darkness lies

At one root\u2026 the sisters weave
What kings will hold\u2026 what kings will leave
At one root\u2026 the one-eyed came
And paid in blood\u2026 to learn the name
At one root\u2026 in frozen stone
The dragon feeds\u2026 below\u2026 alone\u2026
Yet still she stands\u2026 through tooth and flame\u2026
Unbroken\u2026 still the same\u2026

Hei-ya\u2026 Hei-ya\u2026
Past and future\u2026 root and bone\u2026
Hei-ya\u2026 Hei-ya\u2026
Nine worlds carved\u2026 in ash and stone\u2026
Hei-ya\u2026 Hei-ya\u2026
Water deep\u2026 the old wells call\u2026
Hei-ya\u2026 Hei-ya\u2026
One tree holds\u2026 the fate of all\u2026

Yggdrasil\u2026 Yggdrasil\u2026
When stars grow dark and kingdoms fall
Through Ragnar\u00F6k\u2026 through ash and flame\u2026
Your roots remember all\u2026.`,
    reflection:
      "Roots of Yggdrasil sees the World Tree as more than the architecture of the Norse cosmos. It becomes an image of existence itself.\n\nIts roots reach simultaneously toward fate, wisdom, and darkness. At one, the Norns weave what will become. At another, knowledge demands sacrifice. At another, destruction never stops gnawing.\n\nAnd still the tree grows.\n\nThat contradiction lies at the heart of the song. Life is not sustained because darkness, loss, or uncertainty have been defeated. Yggdrasil endures while carrying all of them. Its strength comes not from escaping the forces that threaten it, but from remaining rooted while those forces act upon it.\n\nThe three wells also echo the three voices of UROR. Beauty gives life something worth preserving. Strength allows it to endure. Wisdom allows it to understand. None exists entirely alone, just as no single root sustains the World Tree.\n\nPast and future, birth and death, knowledge and mystery all meet beneath its branches.\n\nKingdoms fall. The roots remember.",
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
    mythSource:
      "Baldr, the radiant son of Odin and Frigg, was among the most beloved of the Æsir. His presence was associated with beauty, goodness, and light, and the gods believed few things in all the worlds could compare with him.\n\nBut Baldr began to dream of his own death.\n\nTroubled by the omen, Frigg vowed to protect her son. She traveled through the worlds seeking promises from the things of creation—fire and water, stone and metal, beasts and birds, sickness, weapons, trees and roots—asking each that it would never bring harm to Baldr.\n\nAll gave their oath. Or so it seemed.\n\nWhen the gods discovered that Baldr could no longer be harmed, they made a game of his invulnerability. They gathered in Asgard, laughing as stones, blades, and spear shafts were thrown against him, only to break, turn aside, or fall harmlessly away.\n\nBut Frigg had overlooked one small thing: mistletoe. It seemed too young, too fragile, too insignificant to threaten the shining son of Asgard.\n\nLoki discovered what the others did not know. From the mistletoe he fashioned a weapon and brought it to Baldr\u2019s blind brother, Höðr, who stood apart because he could neither see Baldr nor join the gods in their game. Loki placed the weapon in Höðr\u2019s hand and guided his aim.\n\nThe mistletoe flew. Baldr fell.\n\nAnd with him fell something brighter than any of them knew they could lose. The laughter of Asgard became grief, and an event had been set in motion that even the gods could not undo.\n\nBaldr was carried to his great ship, Hringhorni, and laid upon the funeral pyre. His wife Nanna was placed beside him, and the gods watched as the ship burned beneath the northern sky.\n\nYet the old story leaves one final promise. When Ragnarök has passed and the old world has fallen, Baldr will return from Hel. He will walk again beneath a renewed sky—a reminder that even after the deepest loss, light may return to the world.",
    mythImage: "/images/songs/baldrs-mistletoe-myth.jpg",
    excerpt: "", // TODO
    lyrics: `Before the frost had touched the stone
Before the ravens flew alone
A golden son walked halls of fire
Beloved of gods\u2026 their heart\u2019s desire

No blade could cut
No flame could scar
No shadow reach
His shining star

The roots of worlds\u2026 grew still\u2026 and listened\u2026
When Baldr dreamed\u2026 of death\u2026

Mother of wisdom\u2026 mother of sky\u2026
How do you save\u2026 what must still die\u2026
Frigg walked where the old oaths sleep
And made the stones\u2026 and rivers weep

Baldr\u2026 Baldr\u2026
Light of the northern flame
Why do the stars grow cold tonight
And whisper out your name

Baldr\u2026 Baldr\u2026
Golden son of dawn
When the light fell from Asgard\u2026
The age of peace was gone\u2026

In circles wide the gods all laughed
As iron broke\u2026 and spear shafts snapped
The mighty cheered\u2026 the halls rang bright
For none could touch the child of light

But in the crowd\u2026 one shadow smiled\u2026
One tongue of ash\u2026 one winter child\u2026
Loki walked in borrowed skin
And fed the dark\u2026 from deep within

Hei-ya\u2026 Hei-ya\u2026
Root and branch\u2026 stone and bone\u2026

Hei-ya\u2026 Hei-ya\u2026
Light must walk\u2026 the path alone\u2026

Hei-ya\u2026 Hei-ya\u2026
Mistle grows\u2026 where no one sees\u2026

Hei-ya\u2026 Hei-ya\u2026
Death can hide\u2026 in smallest leaves\u2026

Blind was the hand\u2026
But not the lie\u2026
Höðr stood\u2026 beneath the sky\u2026

One sacred branch\u2026
One whispered aim\u2026

And all the worlds\u2026
Were not the same\u2026

Baldr\u2026 Baldr\u2026
The funeral fires rise
Across the seas of Asgard\u2019s grief
Beneath the northern skies

Baldr\u2026 Baldr\u2026
Though Hel may keep your flame
When Ragnarök breaks open night\u2026
The light shall rise again\u2026

The ship burns on\u2026
The mother cries\u2026

And even gods\u2026
Must say goodbye\u2026`,
    reflection:
      "Baldr\u2019s Mistletoe is a song about the fragility hidden within what appears invulnerable.\n\nFrigg tries to remove every danger from her son\u2019s path. Iron cannot harm him. Fire cannot consume him. Stone cannot break him. The gods become so certain of Baldr\u2019s safety that his invulnerability becomes entertainment.\n\nAnd yet the thing that changes their world is not a sword, a giant, or an army. It is a small branch no one believed important enough to fear.\n\nThere is something deeply human within that idea. We often prepare ourselves for the dangers we can see while overlooking what appears insignificant. Strength, security, love, and even peace can begin to feel permanent—until something unexpected reminds us that they never truly were.\n\nBut Baldr\u2019s story is not solely about death. His promised return after Ragnarök transforms the myth into one of loss, renewal, and hope. The light disappears from Asgard, but it is not extinguished forever.\n\nWithin UROR, Baldr\u2019s story belongs most naturally to Liv and the ideal of Beauty. Not beauty as appearance, but beauty as the presence of something good in the world—something capable of giving warmth, hope, and meaning simply because it exists. The grief of the gods is powerful precisely because they understand the value of that light only when it is gone.\n\nYet all three voices are present within the story. Beauty gives us something worth mourning when it is lost. Strength gives us the courage to endure the loss. Wisdom teaches us that nothing we love is made precious by being permanent.\n\nTogether, they lead toward the final promise within Baldr\u2019s myth: that loss and hope can occupy the same story. What was beautiful can be taken from us, grief can be real, and still the possibility of renewal remains.\n\nFor UROR, that is why Baldr\u2019s death is not a song about darkness. It is a song about the value of light.\n\nEven gods must say goodbye. Yet the light may still return.",
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
    mythSource:
      "Iðunn is the keeper of the apples that preserve the youth of the Norse gods. In the Prose Edda, the giant Þjazi, aided by Loki's deception, succeeds in luring Iðunn away from Asgard and carries her into the realm of the giants.\n\nWithout Iðunn and her apples, something once almost unimaginable begins to happen: the gods grow old. Their youth fades, and they realize that even the mighty Æsir depend upon the quiet gift guarded by one who carries neither sword nor shield.\n\nThe gods compel Loki to bring her home. Borrowing Freyja's falcon shape, he flies into the land of the giants, transforms Iðunn into a nut, and carries her back toward Asgard while Þjazi pursues them in eagle form. The gods prepare a fire at Asgard's walls; Loki crosses safely, but Þjazi is caught in the flames.\n\nIðunn returns—and with her, youth and renewal return to the gods.",
    mythImage: "/images/songs/golden-apple-myth.jpg",
    excerpt: "", // TODO
    lyrics: `In halls of gold where the high gods stood
Beneath the ash of the world-tree wood
She walked in light with the fruit of dawn
While winter slept beyond the lawn
Silver bowls in her gentle hands
Life itself in the sacred lands
No blade she bore No shield of war
Yet all the gods were hers… and more

Golden daughter… keeper of flame
Whispered softly… the secret name
From branch to root
From stone to sky
She held the years… that never die

Iðunn… Iðunn…
Bearer of the golden fire
Keeper of the endless spring
Voice of youth the gods require
Iðunn… Iðunn…
When your light was torn away
Even kings of Asgard wept
As time began… to claim its prey

Loki walked where the frost winds bite
Under feathers in moonless night
The giant watched with eagle eyes
And whispered lies beneath the skies
Through silent woods she stepped alone
Far from the halls she'd always known
And shadows closed
On golden hair
As winter claimed the northern air

Hei-ya… Hei-ya… Blood of root… breath of stone…
Hei-ya… Hei-ya… Bring the golden daughter home…
Hei-ya… Hei-ya… Ash grows old… steel grows weak…
Hei-ya… Hei-ya…
Without her fruit… the gods can't speak…

Wrinkles formed on immortal skin
Fire grew cold in the hearts within
The mighty bowed
The proud turned gray
As centuries came in a single day

Iðunn… Iðunn…
Rise again through falcon skies
Bring the spring to dying gods
Bring the fire to ancient eyes
Iðunn… Iðunn…
Golden fruit and sacred flame
Even gods can turn to dust…
Without the keeper of their name

(Final Outro: whispered choir)
Golden daughter…
Golden flame…
Without your light…
None remain…`,
    reflection:
      "Golden Apple is a song about the quiet things upon which even great strength depends.\n\nIðunn is not remembered as a conqueror. She carries no legendary weapon and commands no army. Yet when she disappears, warriors, kings, and gods discover that their strength cannot sustain itself. What seemed gentle proves indispensable.\n\nHer story becomes a reflection on renewal, beauty, and the sources of life we often notice only when they are gone. Strength may defend what matters, but something must also restore it. Courage can carry us through winter; it cannot make winter into spring.\n\nFor Liv, Iðunn represents Beauty in its deeper sense—not beauty as appearance, but as a life-giving force: the presence that awakens, restores, and reminds us what is worth preserving.\n\nEven the strongest among us must be renewed.",
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
