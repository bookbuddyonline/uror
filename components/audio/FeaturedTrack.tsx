"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { getSongBySlug } from "@/content/songs";

export function FeaturedTrack() {
  const song = getSongBySlug(site.featuredTrackSlug);
  if (!song) return null;

  return <TrackBar song={song} label={site.featuredTrackLabel} />;
}

function TrackBar({
  song,
  label,
}: {
  song: { title: string; audioPreview: string; purchaseLinks?: Record<string, string | undefined> };
  label: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  }, [playing]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => {
      setPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };
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

  const formatTime = (s: number) => {
    if (!s || !isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <section
      className="w-full bg-ivory/70 backdrop-blur-md border-t border-champagne/15"
      aria-label="Featured track"
    >
      {/* Desktop bar */}
      <div className="hidden md:flex items-center gap-6 px-8 py-3 max-w-[1400px] mx-auto">
        {/* Left: cover thumb + title */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded bg-stone/30 flex items-center justify-center">
            <svg className="w-5 h-5 text-champagne-deep/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="12" cy="12" r="1" />
            </svg>
          </div>
          <div>
            <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-charcoal font-medium leading-tight">
              {song.title}
            </p>
            <p className="font-sans text-[9px] tracking-[0.15em] uppercase text-silver mt-0.5">
              {label}
            </p>
          </div>
        </div>

        {/* Play + progress */}
        <div className="flex items-center gap-3 min-w-0 w-56 shrink-0">
          <button
            onClick={toggle}
            className="shrink-0 w-8 h-8 rounded-full border border-champagne/30 flex items-center justify-center text-champagne-deep hover:bg-champagne/10 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? (
              <svg width="10" height="10" viewBox="0 0 14 14" fill="currentColor">
                <rect x="2" y="1" width="3.5" height="12" rx="1" />
                <rect x="8.5" y="1" width="3.5" height="12" rx="1" />
              </svg>
            ) : (
              <svg width="10" height="10" viewBox="0 0 14 14" fill="currentColor">
                <polygon points="3,1 13,7 3,13" />
              </svg>
            )}
          </button>

          <div className="flex-1 flex flex-col gap-0.5">
            <div
              ref={progressRef}
              className="relative h-1 bg-stone/40 rounded-full cursor-pointer group"
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
            <div className="flex justify-between text-[9px] text-silver font-sans">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>

        {/* Center: quote with gold rules */}
        <div className="flex-1 flex items-center justify-center gap-3 min-w-0">
          <span className="block w-12 h-[1px] bg-champagne/40 shrink-0" />
          <span className="text-champagne text-[8px]">&#9830;</span>
          <p className="font-serif text-sm italic text-warm-gray truncate">
            Three Voices. One World Tree.
          </p>
          <span className="text-champagne text-[8px]">&#9830;</span>
          <span className="block w-12 h-[1px] bg-champagne/40 shrink-0" />
        </div>

        {/* Right: View Album pill */}
        <Link
          href="/album"
          className="shrink-0 font-sans text-[10px] tracking-[0.15em] uppercase border border-champagne-deep/40 text-champagne-deep rounded-full px-5 py-1.5 hover:bg-champagne-deep/10 transition-colors duration-300"
        >
          View Album &rarr;
        </Link>
      </div>

      {/* Mobile bar — compact two-row */}
      <div className="md:hidden px-5 py-3">
        <div className="flex items-center gap-3">
          {/* Play button */}
          <button
            onClick={toggle}
            className="shrink-0 w-9 h-9 rounded-full border border-champagne/30 flex items-center justify-center text-champagne-deep hover:bg-champagne/10 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? (
              <svg width="10" height="10" viewBox="0 0 14 14" fill="currentColor">
                <rect x="2" y="1" width="3.5" height="12" rx="1" />
                <rect x="8.5" y="1" width="3.5" height="12" rx="1" />
              </svg>
            ) : (
              <svg width="10" height="10" viewBox="0 0 14 14" fill="currentColor">
                <polygon points="3,1 13,7 3,13" />
              </svg>
            )}
          </button>

          {/* Title + label */}
          <div className="flex-1 min-w-0">
            <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-charcoal font-medium truncate">
              {song.title}
            </p>
            <p className="font-sans text-[9px] tracking-[0.1em] uppercase text-silver mt-0.5">
              {label}
            </p>
          </div>

          {/* View Album */}
          <Link
            href="/album"
            className="shrink-0 font-sans text-[9px] tracking-[0.1em] uppercase border border-champagne-deep/40 text-champagne-deep rounded-full px-3 py-1 hover:bg-champagne-deep/10 transition-colors duration-300"
          >
            Album &rarr;
          </Link>
        </div>

        {/* Progress bar */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-[9px] text-silver font-sans w-8 text-right">{formatTime(currentTime)}</span>
          <div
            ref={(el) => { if (el) progressRef.current = el; }}
            className="flex-1 relative h-1 bg-stone/40 rounded-full cursor-pointer group"
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
          </div>
          <span className="text-[9px] text-silver font-sans w-8">{formatTime(duration)}</span>
        </div>
      </div>

      <audio ref={audioRef} src={song.audioPreview} preload="metadata" />
    </section>
  );
}
