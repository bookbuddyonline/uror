"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/navigation/Header";
import { songs } from "@/content/songs";
import { getArchetype } from "@/content/archetypes";

type VoiceFilter = "all" | "liv" | "megin" | "eira";

export default function SongsPage() {
  const [filter, setFilter] = useState<VoiceFilter>("all");

  const filtered =
    filter === "all" ? songs : songs.filter((s) => s.archetype === filter);

  const filters: { value: VoiceFilter; label: string }[] = [
    { value: "all", label: "All Songs" },
    { value: "liv", label: "Liv" },
    { value: "megin", label: "Megin" },
    { value: "eira", label: "Eira" },
  ];

  return (
    <main className="bg-ivory text-charcoal min-h-screen">
      <Header />
      <div className="pt-[60px]">
        {/* Heading */}
        <section className="w-full max-w-3xl mx-auto px-6 pt-16 md:pt-24 text-center">
          <h1 className="font-serif text-3xl md:text-4xl tracking-[0.15em] text-champagne-deep">
            Songs
          </h1>
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="block w-8 h-[1px] bg-champagne/40" />
            <span className="text-champagne text-[8px]">&#9830;</span>
            <span className="block w-8 h-[1px] bg-champagne/40" />
          </div>
          <p className="mt-3 font-serif text-base md:text-lg italic text-charcoal/60">
            Twelve songs from Yggdrasil: Songs of the North
          </p>
        </section>

        {/* Voice filter */}
        <section className="w-full max-w-3xl mx-auto px-6 mt-8">
          <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
            {filters.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={`font-sans text-[10px] md:text-[11px] tracking-[0.15em] uppercase rounded-full px-4 py-1.5 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne ${
                  filter === value
                    ? "bg-champagne-deep/10 border border-champagne-deep/50 text-champagne-deep"
                    : "border border-stone/40 text-warm-gray hover:text-champagne-deep hover:border-champagne/40"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        {/* Song list */}
        <section className="w-full max-w-3xl mx-auto px-6 mt-8 pb-16 md:pb-24">
          <ol className="space-y-0">
            {filtered.map((song) => {
              const archetype = getArchetype(song.archetype);
              return (
                <li key={song.slug}>
                  <Link
                    href={`/songs/${song.slug}`}
                    className="group flex items-center gap-4 py-3.5 border-b border-stone/50 hover:bg-pearl/40 transition-colors duration-300 px-2 -mx-2 rounded-sm"
                  >
                    {/* Track number */}
                    <span className="font-sans text-xs tracking-wider text-silver w-6 text-right shrink-0">
                      {String(song.trackNumber).padStart(2, "0")}
                    </span>

                    {/* Title */}
                    <span className="font-serif text-base md:text-lg text-charcoal group-hover:text-champagne-deep transition-colors duration-300 flex-1">
                      {song.title}
                    </span>

                    {/* Voice */}
                    <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-warm-gray shrink-0">
                      {archetype.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    </main>
  );
}
