"use client";

import Link from "next/link";
import { archetypes } from "@/content/archetypes";

function Emblem({ type }: { type: "sun" | "mjolnir" | "tree" }) {
  const className = "w-6 h-6 text-champagne-deep";
  switch (type) {
    case "sun":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="2" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="22" />
          <line x1="2" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="22" y2="12" />
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" /><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" /><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
        </svg>
      );
    case "mjolnir":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="7" y="3" width="10" height="8" rx="1" />
          <line x1="12" y1="11" x2="12" y2="21" />
          <line x1="9" y1="21" x2="15" y2="21" />
        </svg>
      );
    case "tree":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <line x1="12" y1="3" x2="12" y2="21" />
          <path d="M12 6 Q8 4 5 7" /><path d="M12 6 Q16 4 19 7" />
          <path d="M12 10 Q7 8 4 11" /><path d="M12 10 Q17 8 20 11" />
          <path d="M12 14 Q8 12 6 15" /><path d="M12 14 Q16 12 18 15" />
          <path d="M12 21 Q9 19 7 21" /><path d="M12 21 Q15 19 17 21" />
        </svg>
      );
  }
}

export function ArchetypeCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 w-full">
      {archetypes.map((a) => (
        <Link
          key={a.slug}
          href={`/${a.slug}`}
          className="group relative flex flex-col items-center text-center px-6 py-5 md:px-4 md:py-4"
        >
          {/* Ivory radial glow halo behind text */}
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background:
                "radial-gradient(ellipse 90% 90% at 50% 30%, rgba(255,253,250,0.7) 0%, rgba(255,253,250,0.35) 45%, transparent 75%)",
            }}
            aria-hidden="true"
          />

          {/* Name — rich gold with strong ivory halo */}
          <h2
            className="relative font-serif text-2xl md:text-3xl tracking-[0.25em] uppercase text-champagne-deep font-semibold"
            style={{ textShadow: "0 0 12px rgba(255,253,250,0.9), 0 0 24px rgba(255,253,250,0.6)" }}
          >
            {a.name}
          </h2>

          {/* Title — solid dark charcoal, medium weight */}
          <p className="relative mt-1 font-serif text-base md:text-lg text-charcoal font-medium">
            {a.title}
          </p>

          {/* Emblem */}
          <div className="relative mt-2.5 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
            <Emblem type={a.emblem} />
          </div>

          {/* Phrase — dark charcoal, medium weight */}
          <p className="relative mt-2.5 font-sans text-xs tracking-[0.15em] uppercase text-charcoal font-medium">
            {a.phrase}
          </p>

          {/* Themes — warm gray, slightly heavier */}
          <p className="relative mt-1.5 font-sans text-xs font-medium text-warm-gray">
            {a.themes.join(" · ")}
          </p>
        </Link>
      ))}
    </div>
  );
}
