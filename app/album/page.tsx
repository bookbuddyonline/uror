"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Header } from "@/components/navigation/Header";
import { primaryAlbum } from "@/content/album";
import { songs } from "@/content/songs";
import { getArchetype } from "@/content/archetypes";

/* ── Album hero with reveal video + fade-in title ──────────────────────────── */

function AlbumHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    if (mq.matches) setShowTitle(true);
    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) setShowTitle(true);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;
    const onEnded = () => setShowTitle(true);
    video.addEventListener("ended", onEnded);
    return () => video.removeEventListener("ended", onEnded);
  }, [prefersReducedMotion]);

  return (
    <section className="relative w-full aspect-video max-h-[80vh] overflow-hidden bg-charcoal">
      {/* Video or poster */}
      {prefersReducedMotion ? (
        <img
          src="/images/album/yggdrasil-reveal-poster.jpg"
          alt={`${primaryAlbum.title} album artwork`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={primaryAlbum.coverAnimation}
          poster="/images/album/yggdrasil-reveal-poster.jpg"
          autoPlay
          muted
          playsInline
          preload="auto"
        />
      )}

      {/* Soft ivory glow behind text — visible when title appears */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-[2000ms] ease-out"
        style={{
          opacity: showTitle ? 1 : 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(250,248,245,0.55) 0%, rgba(250,248,245,0.2) 50%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      {/* Text overlay — fades in after video ends */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-opacity duration-[2000ms] ease-out"
        style={{ opacity: showTitle ? 1 : 0 }}
      >
        <h1
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-light tracking-[0.25em] text-champagne-deep"
          style={{
            textShadow:
              "0 2px 16px rgba(250,248,245,0.7), 0 1px 4px rgba(250,248,245,0.5)",
          }}
        >
          {primaryAlbum.title}
        </h1>

        <p
          className="mt-2 font-serif text-lg sm:text-xl md:text-2xl tracking-[0.15em] text-charcoal/80"
          style={{
            textShadow:
              "0 1px 8px rgba(250,248,245,0.6), 0 1px 2px rgba(250,248,245,0.4)",
          }}
        >
          {primaryAlbum.subtitle}
        </p>

        {/* Divider */}
        <div className="mt-4 flex items-center gap-3">
          <span className="block w-8 h-[1px] bg-champagne/60" />
          <span className="text-champagne text-xs">&#9830;</span>
          <span className="block w-8 h-[1px] bg-champagne/60" />
        </div>

        <p
          className="mt-3 font-sans text-sm md:text-base tracking-[0.2em] uppercase text-warm-gray"
          style={{
            textShadow: "0 1px 6px rgba(250,248,245,0.6)",
          }}
        >
          {primaryAlbum.tagline}
        </p>
      </div>
    </section>
  );
}

/* ── Album concept — cover + story paired layout ───────────────────────────── */

function formatConceptParagraph(text: string) {
  const boldPhrase = "Beauty, Strength, and Wisdom";
  const idx = text.indexOf(boldPhrase);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <strong className="font-semibold">{boldPhrase}</strong>
      {text.slice(idx + boldPhrase.length)}
    </>
  );
}

function AlbumConcept() {
  const concept = primaryAlbum.concept;

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-14">
        {/* Left: album cover */}
        <div className="w-full md:w-[340px] shrink-0 mx-auto md:mx-0">
          <div className="relative">
            <img
              src={primaryAlbum.cover}
              alt={`${primaryAlbum.fullTitle} album cover`}
              className="w-full aspect-square object-cover rounded-sm"
              style={{
                boxShadow:
                  "0 4px 24px rgba(44,42,39,0.08), 0 1px 6px rgba(44,42,39,0.04)",
              }}
            />
            {/* Subtle champagne border accent */}
            <div
              className="absolute inset-0 rounded-sm pointer-events-none"
              style={{ border: "1px solid rgba(197,165,90,0.15)" }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Right: heading + concept text */}
        <div className="flex-1 md:pt-4">
          <h2 className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-champagne-deep">
            The Album
          </h2>

          {/* Divider under "The Album" */}
          <div className="mt-3 flex items-center gap-3">
            <span className="block w-8 h-[1px] bg-champagne/40" />
            <span className="text-champagne text-[8px]">&#9830;</span>
            <span className="block w-8 h-[1px] bg-champagne/40" />
          </div>

          {concept && (
            <>
              {/* Concept heading */}
              <h3
                className="mt-5 font-serif font-medium max-w-[620px]"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  color: "#A9874D",
                }}
              >
                {concept.heading}
              </h3>

              {/* Divider under concept heading */}
              <div className="mt-4 flex items-center gap-3">
                <span className="block w-8 h-[1px] bg-champagne/40" />
                <span className="text-champagne text-[8px]">&#9830;</span>
                <span className="block w-8 h-[1px] bg-champagne/40" />
              </div>

              {/* Body paragraphs */}
              <div className="mt-5 max-w-[650px] space-y-[20px]">
                {concept.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="font-serif"
                    style={{
                      fontSize: "clamp(16px, 1.8vw, 18px)",
                      lineHeight: 1.6,
                      color: "#2F2B27",
                    }}
                  >
                    {i === 0 ? (
                      <>
                        <em>{primaryAlbum.fullTitle}</em>
                        {p.slice(primaryAlbum.fullTitle.length)}
                      </>
                    ) : (
                      formatConceptParagraph(p)
                    )}
                  </p>
                ))}
              </div>

              {/* Closing line */}
              <p
                className="mt-[22px] font-serif italic max-w-[650px]"
                style={{
                  fontSize: "clamp(16px, 1.7vw, 17px)",
                  lineHeight: 1.45,
                  color: "#8C6D3F",
                }}
              >
                {concept.closing}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── Track listing ─────────────────────────────────────────────────────────── */

function TrackListing() {
  const albumSongs = primaryAlbum.trackSlugs
    .map((slug) => songs.find((s) => s.slug === slug))
    .filter(Boolean) as (typeof songs)[number][];

  const audioRef = useRef<HTMLAudioElement>(null);
  const [playingSlug, setPlayingSlug] = useState<string | null>(null);

  const toggle = useCallback(
    (slug: string, src: string) => {
      const audio = audioRef.current;
      if (!audio) return;

      if (playingSlug === slug) {
        audio.pause();
        setPlayingSlug(null);
        return;
      }

      audio.src = src;
      audio.play();
      setPlayingSlug(slug);
    },
    [playingSlug],
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onEnded = () => setPlayingSlug(null);
    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, []);

  return (
    <section className="w-full max-w-3xl mx-auto px-6 pb-16 md:pb-24">
      <h2 className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-champagne-deep text-center">
        Track Listing
      </h2>

      <div className="mt-3 mb-10 flex items-center justify-center gap-3">
        <span className="block w-8 h-[1px] bg-champagne/40" />
        <span className="text-champagne text-[8px]">&#9830;</span>
        <span className="block w-8 h-[1px] bg-champagne/40" />
      </div>

      <ol className="space-y-0">
        {albumSongs.map((song) => {
          const isPlaying = playingSlug === song.slug;
          return (
            <li
              key={song.slug}
              className={`flex items-center gap-4 py-3.5 border-b border-stone/50 px-2 -mx-2 rounded-sm transition-colors duration-300 ${
                isPlaying ? "bg-pearl/50" : ""
              }`}
            >
              {/* Track number */}
              <span className="font-sans text-xs tracking-wider text-silver w-6 text-right shrink-0">
                {String(song.trackNumber).padStart(2, "0")}
              </span>

              {/* Play / pause button */}
              <button
                onClick={() => toggle(song.slug, song.audioPreview)}
                className="shrink-0 w-7 h-7 rounded-full border border-champagne/30 flex items-center justify-center text-champagne-deep hover:bg-champagne/10 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                aria-label={isPlaying ? `Pause ${song.title}` : `Play ${song.title}`}
              >
                {isPlaying ? (
                  <svg width="9" height="9" viewBox="0 0 14 14" fill="currentColor">
                    <rect x="2" y="1" width="3.5" height="12" rx="1" />
                    <rect x="8.5" y="1" width="3.5" height="12" rx="1" />
                  </svg>
                ) : (
                  <svg width="9" height="9" viewBox="0 0 14 14" fill="currentColor">
                    <polygon points="3,1 13,7 3,13" />
                  </svg>
                )}
              </button>

              {/* Title */}
              <span
                className={`font-serif text-base md:text-lg flex-1 transition-colors duration-300 ${
                  isPlaying ? "text-champagne-deep" : "text-charcoal"
                }`}
              >
                {song.title}
              </span>

              {/* The Story link */}
              <Link
                href={`/songs/${song.slug}`}
                className="shrink-0 font-sans text-[10px] tracking-[0.15em] uppercase text-champagne-deep hover:text-champagne transition-colors duration-300"
              >
                The Story
              </Link>
            </li>
          );
        })}
      </ol>

      <audio ref={audioRef} preload="none" />
    </section>
  );
}

/* ── Streaming / purchase row ──────────────────────────────────────────────── */

function StreamingRow() {
  const links = primaryAlbum.isPrimary
    ? songs[0]?.purchaseLinks
    : undefined;

  const hasAnyLink = links && Object.values(links).some((v) => v);

  return (
    <section className="w-full border-t border-stone/40 bg-pearl/30">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-center">
        <h2 className="font-serif text-xl md:text-2xl tracking-[0.15em] text-champagne-deep">
          Listen
        </h2>

        <div className="mt-3 mb-8 flex items-center justify-center gap-3">
          <span className="block w-8 h-[1px] bg-champagne/40" />
          <span className="text-champagne text-[8px]">&#9830;</span>
          <span className="block w-8 h-[1px] bg-champagne/40" />
        </div>

        {hasAnyLink ? (
          <div className="flex flex-wrap items-center justify-center gap-4">
            {links.spotify && (
              <a
                href={links.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-[0.15em] uppercase border border-champagne-deep/40 text-champagne-deep rounded-full px-6 py-2 hover:bg-champagne-deep/10 transition-colors duration-300"
              >
                Spotify
              </a>
            )}
            {links.appleMusic && (
              <a
                href={links.appleMusic}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-[0.15em] uppercase border border-champagne-deep/40 text-champagne-deep rounded-full px-6 py-2 hover:bg-champagne-deep/10 transition-colors duration-300"
              >
                Apple Music
              </a>
            )}
            {links.youtube && (
              <a
                href={links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-[0.15em] uppercase border border-champagne-deep/40 text-champagne-deep rounded-full px-6 py-2 hover:bg-champagne-deep/10 transition-colors duration-300"
              >
                YouTube
              </a>
            )}
            {links.bandcamp && (
              <a
                href={links.bandcamp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-[0.15em] uppercase border border-champagne-deep/40 text-champagne-deep rounded-full px-6 py-2 hover:bg-champagne-deep/10 transition-colors duration-300"
              >
                Bandcamp
              </a>
            )}
          </div>
        ) : (
          <p className="font-sans text-sm tracking-wider text-silver">
            Coming soon on all platforms
          </p>
        )}
      </div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────────────────────────── */

export default function AlbumPage() {
  return (
    <main className="bg-ivory text-charcoal">
      <Header />
      <div className="pt-[60px]">
        <AlbumHero />
        <AlbumConcept />
        <TrackListing />
        <StreamingRow />
      </div>
    </main>
  );
}
