import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/navigation/Header";
import { archetypes } from "@/content/archetypes";
import { about } from "@/content/about";

/* ── Emblem glyphs (reused from ArchetypeCards) ─────────────────────────────── */

function Emblem({ type }: { type: "sun" | "mjolnir" | "tree" }) {
  const className = "w-8 h-8 text-champagne-deep";
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

/* ── Gold diamond divider ───────────────────────────────────────────────────── */

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="block w-8 h-[1px] bg-champagne/40" />
      <span className="text-champagne text-[8px]">&#9830;</span>
      <span className="block w-8 h-[1px] bg-champagne/40" />
    </div>
  );
}

/* ── Corner frame ───────────────────────────────────────────────────────────── */

function CornerFrame({ children }: { children: React.ReactNode }) {
  const corner = "absolute w-8 h-8 pointer-events-none";
  const borderColor = "rgba(197,165,90,0.35)";

  return (
    <div className="relative mx-4 md:mx-10 my-8 md:my-12 px-6 md:px-16 py-12 md:py-20">
      {/* Top-left */}
      <div
        className={`${corner} top-0 left-0`}
        style={{ borderTop: `1px solid ${borderColor}`, borderLeft: `1px solid ${borderColor}` }}
        aria-hidden="true"
      />
      {/* Top-right */}
      <div
        className={`${corner} top-0 right-0`}
        style={{ borderTop: `1px solid ${borderColor}`, borderRight: `1px solid ${borderColor}` }}
        aria-hidden="true"
      />
      {/* Bottom-left */}
      <div
        className={`${corner} bottom-0 left-0`}
        style={{ borderBottom: `1px solid ${borderColor}`, borderLeft: `1px solid ${borderColor}` }}
        aria-hidden="true"
      />
      {/* Bottom-right */}
      <div
        className={`${corner} bottom-0 right-0`}
        style={{ borderBottom: `1px solid ${borderColor}`, borderRight: `1px solid ${borderColor}` }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

/* ── Opening paragraphs with inline emphasis ────────────────────────────────── */

function OpeningParagraph({ text, index }: { text: string; index: number }) {
  if (index === 0) {
    // Italic-emphasize "Beauty, Strength, and Wisdom"
    const phrase = "Beauty, Strength, and Wisdom";
    const i = text.indexOf(phrase);
    if (i !== -1) {
      return (
        <p className="font-serif text-center" style={{ fontSize: "clamp(16px, 1.8vw, 18px)", lineHeight: 1.7, color: "#2F2B27" }}>
          {text.slice(0, i)}
          <em className="italic">{phrase}</em>
          {text.slice(i + phrase.length)}
        </p>
      );
    }
  }

  if (index === 2) {
    // Italic-emphasize the three questions
    const questions = [
      "What is worth pursuing?",
      "What gives us the strength to endure?",
      "What can the past teach us about the life before us?",
    ];
    const parts: (string | React.ReactElement)[] = [];
    let remaining = text;
    let key = 0;
    for (const q of questions) {
      const qi = remaining.indexOf(q);
      if (qi !== -1) {
        if (qi > 0) parts.push(remaining.slice(0, qi));
        parts.push(<em key={key++} className="italic">{q}</em>);
        remaining = remaining.slice(qi + q.length);
      }
    }
    if (remaining) parts.push(remaining);
    return (
      <p className="font-serif text-center" style={{ fontSize: "clamp(16px, 1.8vw, 18px)", lineHeight: 1.7, color: "#2F2B27" }}>
        {parts}
      </p>
    );
  }

  return (
    <p className="font-serif text-center" style={{ fontSize: "clamp(16px, 1.8vw, 18px)", lineHeight: 1.7, color: "#2F2B27" }}>
      {text}
    </p>
  );
}

/* ── Page ────────────────────────────────────────────────────────────────────── */

export default function AboutPage() {
  const emblems: ("sun" | "mjolnir" | "tree")[] = ["sun", "mjolnir", "tree"];

  return (
    <main className="bg-ivory text-charcoal min-h-screen">
      <Header />
      <div className="pt-[60px]">
        <CornerFrame>
          {/* 1. Heading */}
          <div className="text-center">
            <h1 className="font-serif text-2xl md:text-3xl tracking-[0.3em] uppercase text-champagne-deep">
              {about.heading}
            </h1>
            <div className="mt-3">
              <Divider />
            </div>
          </div>

          {/* 2. Subheading */}
          <h2 className="mt-6 text-center font-serif text-xl md:text-2xl tracking-[0.1em] text-champagne-deep">
            {about.subheading}
          </h2>

          {/* 3. Opening statement */}
          <div className="mt-10 max-w-3xl mx-auto space-y-6">
            {about.opening.map((p, i) => (
              <OpeningParagraph key={i} text={p} index={i} />
            ))}
          </div>

          {/* 4. Concert image */}
          <div className="mt-14 md:mt-20 -mx-6 md:-mx-16">
            <div className="relative">
              <Image
                src={about.concertImage}
                alt={about.concertAlt}
                width={1920}
                height={800}
                className="w-full object-cover rounded-sm"
                style={{
                  boxShadow:
                    "0 4px 24px rgba(44,42,39,0.08), 0 1px 6px rgba(44,42,39,0.04)",
                }}
              />
              <div
                className="absolute inset-0 rounded-sm pointer-events-none"
                style={{ border: "1px solid rgba(197,165,90,0.15)" }}
                aria-hidden="true"
              />
            </div>
          </div>

          {/* 5. Transition line */}
          <p className="mt-14 md:mt-20 text-center font-serif text-lg md:text-xl tracking-[0.05em] text-champagne-deep">
            {about.transitionLine}
          </p>

          {/* 6. Three-column breakdown */}
          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 max-w-4xl mx-auto">
            {about.columns.map((col, i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-center px-6 md:px-8 ${
                  i < about.columns.length - 1
                    ? "border-b md:border-b-0 md:border-r border-champagne/30 pb-10 md:pb-0"
                    : ""
                }`}
              >
                <Emblem type={emblems[i]} />
                <h3 className="mt-4 font-serif text-sm md:text-base tracking-[0.2em] uppercase text-champagne-deep font-medium">
                  {col.label}
                </h3>
                <p
                  className="mt-3 font-serif text-sm md:text-base"
                  style={{ lineHeight: 1.65, color: "#2F2B27" }}
                >
                  {col.text}
                </p>
              </div>
            ))}
          </div>

          {/* 7. Unity line */}
          <p className="mt-14 md:mt-20 text-center font-serif text-lg md:text-xl tracking-[0.05em] text-champagne-deep max-w-3xl mx-auto">
            {about.unityLine}
          </p>

          {/* 8. Closing philosophy */}
          <div className="mt-10 max-w-3xl mx-auto">
            <p
              className="font-serif text-center"
              style={{ fontSize: "clamp(16px, 1.8vw, 18px)", lineHeight: 1.7, color: "#2F2B27" }}
            >
              {about.closingPhilosophy}
            </p>
          </div>

          {/* 9. Final tagline */}
          <div className="mt-12 text-center">
            <Divider />
            <p className="mt-6 font-serif text-sm md:text-base tracking-[0.2em] uppercase text-champagne-deep font-medium max-w-2xl mx-auto leading-relaxed">
              {about.tagline}
            </p>
          </div>

          {/* 10. Voice links */}
          <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {archetypes.map((a) => (
              <Link
                key={a.slug}
                href="/voices"
                className="group flex flex-col items-center text-center py-5 px-4 rounded-sm border border-champagne/20 hover:border-champagne/40 hover:bg-pearl/30 transition-all duration-300"
              >
                <span className="font-serif text-base tracking-[0.15em] uppercase text-champagne-deep">
                  {a.name} — {a.title}
                </span>
                <span className="mt-2 font-sans text-[10px] tracking-[0.2em] uppercase text-warm-gray group-hover:text-champagne-deep transition-colors duration-300">
                  View Bio
                </span>
              </Link>
            ))}
          </div>
        </CornerFrame>
      </div>
    </main>
  );
}
