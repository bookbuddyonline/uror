"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Header } from "@/components/navigation/Header";
import { getSongBySlug } from "@/content/songs";
import { getArchetype } from "@/content/archetypes";
import { primaryAlbum } from "@/content/album";

/* ── Audio player ──────────────────────────────────────────────────────────── */

function SongPlayer({ src, title }: { src: string; title: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) audio.pause();
    else audio.play();
    setPlaying(!playing);
  }, [playing]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100);
    };
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => { setPlaying(false); setProgress(0); setCurrentTime(0); };
    const onPause = () => setPlaying(false);
    const onPlay = () => setPlaying(true);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("play", onPlay);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("play", onPlay);
    };
  }, []);

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const bar = progressRef.current;
    if (!audio || !bar || !audio.duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * audio.duration;
  };

  const fmt = (s: number) => {
    if (!s || !isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <section className="w-full max-w-2xl mx-auto px-6 py-10" aria-label={`Play ${title}`}>
      <div className="bg-pearl/40 border border-stone/30 rounded-lg px-5 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            className="shrink-0 w-10 h-10 rounded-full border border-champagne/30 flex items-center justify-center text-champagne-deep hover:bg-champagne/10 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? (
              <svg width="12" height="12" viewBox="0 0 14 14" fill="currentColor">
                <rect x="2" y="1" width="3.5" height="12" rx="1" />
                <rect x="8.5" y="1" width="3.5" height="12" rx="1" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 14 14" fill="currentColor">
                <polygon points="3,1 13,7 3,13" />
              </svg>
            )}
          </button>

          <div className="flex-1 min-w-0">
            <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-charcoal font-medium truncate">
              {title}
            </p>
            <div className="mt-1.5 flex items-center gap-2">
              <span className="text-[9px] text-silver font-sans w-8 text-right shrink-0">
                {fmt(currentTime)}
              </span>
              <div
                ref={progressRef}
                className="flex-1 relative h-1.5 bg-stone/40 rounded-full cursor-pointer group"
                onClick={seek}
                role="progressbar"
                aria-valuenow={Math.round(progress)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Track progress"
              >
                <div
                  className="absolute inset-y-0 left-0 bg-champagne rounded-full transition-[width] duration-100"
                  style={{ width: `${progress}%` }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-champagne-deep rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ left: `${progress}%`, marginLeft: "-5px" }}
                />
              </div>
              <span className="text-[9px] text-silver font-sans w-8 shrink-0">
                {fmt(duration)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={src} preload="metadata" />
    </section>
  );
}

/* ── Myth section (with optional image) ────────────────────────────────────── */

function MythSection({
  content,
  image,
  songTitle,
}: {
  content: string;
  image?: string;
  songTitle: string;
}) {
  const heading = (
    <>
      <h2 className="font-serif text-xl md:text-2xl tracking-[0.1em] text-champagne-deep">
        The Myth
      </h2>
      <div className="mt-2 flex items-center gap-3">
        <span className="block w-6 h-[1px] bg-champagne/40" />
        <span className="text-champagne text-[7px]">&#9830;</span>
        <span className="block w-6 h-[1px] bg-champagne/40" />
      </div>
    </>
  );

  const paragraphs = content ? content.split("\n\n") : [];
  const text = content ? (
    <div className="mt-4 space-y-4">
      {paragraphs.map((p, i) => (
        <p key={i} className="font-serif text-base md:text-lg leading-relaxed text-charcoal/85">
          {p}
        </p>
      ))}
    </div>
  ) : (
    <p className="mt-4 font-sans text-sm tracking-wider text-silver italic">
      [Myth — to be written]
    </p>
  );

  if (!image) {
    return (
      <div className="py-8 border-b border-stone/30">
        {heading}
        {text}
      </div>
    );
  }

  return (
    <div className="py-8 border-b border-stone/30">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10">
        {/* Image */}
        <div className="w-full md:w-[260px] shrink-0 mx-auto md:mx-0">
          <div className="relative">
            <img
              src={image}
              alt={`Myth illustration for ${songTitle}`}
              className="w-full rounded-sm"
              style={{
                boxShadow:
                  "0 4px 24px rgba(44,42,39,0.1), 0 1px 6px rgba(44,42,39,0.06)",
              }}
            />
            <div
              className="absolute inset-0 rounded-sm pointer-events-none"
              style={{ border: "1px solid rgba(197,165,90,0.15)" }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Heading + text */}
        <div className="flex-1">
          {heading}
          {text}
        </div>
      </div>
    </div>
  );
}

/* ── Content section helper ────────────────────────────────────────────────── */

function ContentSection({
  label,
  content,
  placeholder,
  preserveBreaks,
}: {
  label: string;
  content: string;
  placeholder: string;
  preserveBreaks?: boolean;
}) {
  return (
    <div className="py-8 border-b border-stone/30 last:border-b-0">
      <h2 className="font-serif text-xl md:text-2xl tracking-[0.1em] text-champagne-deep">
        {label}
      </h2>
      <div className="mt-2 flex items-center gap-3">
        <span className="block w-6 h-[1px] bg-champagne/40" />
        <span className="text-champagne text-[7px]">&#9830;</span>
        <span className="block w-6 h-[1px] bg-champagne/40" />
      </div>
      {content ? (
        preserveBreaks ? (
          <pre className="mt-4 font-serif text-base leading-relaxed text-charcoal/85 whitespace-pre-wrap">
            {content}
          </pre>
        ) : (
          <div className="mt-4 space-y-4">
            {content.split("\n\n").map((p, i) => (
              <p key={i} className="font-serif text-base md:text-lg leading-relaxed text-charcoal/85">
                {p}
              </p>
            ))}
          </div>
        )
      ) : (
        <p className="mt-4 font-sans text-sm tracking-wider text-silver italic">
          [{placeholder}]
        </p>
      )}
    </div>
  );
}

/* ── Streaming links ───────────────────────────────────────────────────────── */

function StreamingLinks({ links }: { links?: Record<string, string | undefined> }) {
  const hasAny = links && Object.values(links).some((v) => v);

  const linkEntries: { key: string; label: string }[] = [
    { key: "spotify", label: "Spotify" },
    { key: "appleMusic", label: "Apple Music" },
    { key: "youtube", label: "YouTube" },
    { key: "bandcamp", label: "Bandcamp" },
  ];

  return (
    <div className="py-8">
      <h2 className="font-serif text-xl md:text-2xl tracking-[0.1em] text-champagne-deep">
        Listen
      </h2>
      <div className="mt-2 flex items-center gap-3">
        <span className="block w-6 h-[1px] bg-champagne/40" />
        <span className="text-champagne text-[7px]">&#9830;</span>
        <span className="block w-6 h-[1px] bg-champagne/40" />
      </div>
      {hasAny ? (
        <div className="mt-5 flex flex-wrap gap-3">
          {linkEntries.map(
            ({ key, label }) =>
              links![key] && (
                <a
                  key={key}
                  href={links![key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs tracking-[0.15em] uppercase border border-champagne-deep/40 text-champagne-deep rounded-full px-6 py-2 hover:bg-champagne-deep/10 transition-colors duration-300"
                >
                  {label}
                </a>
              ),
          )}
        </div>
      ) : (
        <p className="mt-5 font-sans text-sm tracking-wider text-silver">
          Coming soon on all platforms
        </p>
      )}
    </div>
  );
}

/* ── Client page ───────────────────────────────────────────────────────────── */

export function SongPageClient({ slug }: { slug: string }) {
  const song = getSongBySlug(slug)!;
  const archetype = getArchetype(song.archetype);

  // Prev / next navigation
  const trackIndex = primaryAlbum.trackSlugs.indexOf(song.slug);
  const prevSlug = trackIndex > 0 ? primaryAlbum.trackSlugs[trackIndex - 1] : null;
  const nextSlug =
    trackIndex < primaryAlbum.trackSlugs.length - 1
      ? primaryAlbum.trackSlugs[trackIndex + 1]
      : null;
  const prevSong = prevSlug ? getSongBySlug(prevSlug) : null;
  const nextSong = nextSlug ? getSongBySlug(nextSlug) : null;

  return (
    <main className="bg-ivory text-charcoal min-h-screen">
      <Header />
      <div className="pt-[60px]">
        {/* ── Song hero ──────────────────────────────────────────────── */}
        <section className="w-full max-w-2xl mx-auto px-6 pt-16 md:pt-24 text-center">
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-silver">
            Track {String(song.trackNumber).padStart(2, "0")}
          </p>

          <h1
            className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.15em] text-champagne-deep"
            style={{
              textShadow: "0 1px 8px rgba(250,248,245,0.5)",
            }}
          >
            {song.title}
          </h1>

          {/* Divider */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="block w-8 h-[1px] bg-champagne/60" />
            <span className="text-champagne text-xs">&#9830;</span>
            <span className="block w-8 h-[1px] bg-champagne/60" />
          </div>

          {/* Archetype / voice context */}
          <p className="mt-4 font-serif text-base md:text-lg italic text-charcoal/70">
            A song of{" "}
            <Link
              href={`/${archetype.slug}`}
              className="text-champagne-deep hover:text-champagne transition-colors duration-300"
            >
              {archetype.name}
            </Link>
            {" — "}
            <span className="text-warm-gray">{archetype.phrase.toLowerCase()}</span>
          </p>

          <p className="mt-1 font-sans text-xs tracking-[0.15em] uppercase text-silver">
            {archetype.title} &middot; {archetype.themes.join(" · ")}
          </p>
        </section>

        {/* ── Audio player ───────────────────────────────────────────── */}
        <SongPlayer src={song.audioPreview} title={song.title} />

        {/* ── Content sections ───────────────────────────────────────── */}
        <section className="w-full max-w-2xl mx-auto px-6 pb-8">
          {song.excerpt && (
            <p className="py-6 font-serif text-lg md:text-xl italic text-charcoal/70 border-b border-stone/30">
              {song.excerpt}
            </p>
          )}

          <MythSection
            content={song.mythSource}
            image={song.mythImage}
            songTitle={song.title}
          />
          <ContentSection
            label="Reflection"
            content={song.reflection}
            placeholder="Reflection — to be written"
          />
          <ContentSection
            label="Lyrics"
            content={song.lyrics}
            placeholder="Lyrics — to be written"
            preserveBreaks
          />
          <StreamingLinks links={song.purchaseLinks as Record<string, string | undefined> | undefined} />
        </section>

        {/* ── Navigation ─────────────────────────────────────────────── */}
        <nav className="w-full max-w-2xl mx-auto px-6 pb-16 md:pb-24">
          <div className="border-t border-stone/40 pt-8 flex items-center justify-between">
            {/* Prev */}
            <div className="w-1/3">
              {prevSong ? (
                <Link
                  href={`/songs/${prevSong.slug}`}
                  className="group inline-flex flex-col"
                >
                  <span className="font-sans text-[9px] tracking-[0.15em] uppercase text-silver group-hover:text-warm-gray transition-colors duration-300">
                    &larr; Previous
                  </span>
                  <span className="font-serif text-sm text-charcoal group-hover:text-champagne-deep transition-colors duration-300 mt-0.5">
                    {prevSong.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
            </div>

            {/* Album link */}
            <div className="w-1/3 text-center">
              <Link
                href="/album"
                className="font-sans text-[10px] tracking-[0.15em] uppercase border border-champagne-deep/40 text-champagne-deep rounded-full px-5 py-1.5 hover:bg-champagne-deep/10 transition-colors duration-300"
              >
                Album
              </Link>
            </div>

            {/* Next */}
            <div className="w-1/3 text-right">
              {nextSong ? (
                <Link
                  href={`/songs/${nextSong.slug}`}
                  className="group inline-flex flex-col items-end"
                >
                  <span className="font-sans text-[9px] tracking-[0.15em] uppercase text-silver group-hover:text-warm-gray transition-colors duration-300">
                    Next &rarr;
                  </span>
                  <span className="font-serif text-sm text-charcoal group-hover:text-champagne-deep transition-colors duration-300 mt-0.5">
                    {nextSong.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
            </div>
          </div>
        </nav>
      </div>
    </main>
  );
}
