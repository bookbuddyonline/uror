"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base hero image */}
      <Image
        src="/images/hero/hero-base.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        role="presentation"
      />

      {/* Subtle glow behind center (Yggdrasil area) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 50% 40%, rgba(255,248,230,0.3) 0%, transparent 70%)",
          animation: "glow-pulse 8s ease-in-out infinite",
        }}
        aria-hidden="true"
      />

      {/* Mist layer - left */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.6) 0%, transparent 40%)",
          animation: "mist-drift 20s ease-in-out infinite",
        }}
        aria-hidden="true"
      />

      {/* Mist layer - right */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          background:
            "linear-gradient(270deg, rgba(255,255,255,0.5) 0%, transparent 35%)",
          animation: "mist-drift 25s ease-in-out infinite reverse",
        }}
        aria-hidden="true"
      />

      {/* Falling snow */}
      <Snow />

      {/* Bottom fade to ivory (site background blend) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(250,248,245,0.9))",
        }}
        aria-hidden="true"
      />
    </div>
  );
}

function Snow() {
  const [flakes, setFlakes] = useState<
    { id: number; left: string; delay: string; duration: string; size: string; animation: string }[]
  >([]);

  useEffect(() => {
    setFlakes(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 15}s`,
        duration: `${12 + Math.random() * 10}s`,
        size: `${1.5 + Math.random() * 2}px`,
        animation: i % 2 === 0 ? "snowfall" : "snowfall-drift",
      }))
    );
  }, []);

  if (flakes.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {flakes.map((f) => (
        <div
          key={f.id}
          className="absolute rounded-full bg-white/70"
          style={{
            left: f.left,
            width: f.size,
            height: f.size,
            animation: `${f.animation} ${f.duration} ${f.delay} linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
