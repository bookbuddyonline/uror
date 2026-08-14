import Image from "next/image";
import { Header } from "@/components/navigation/Header";
import { archetypes } from "@/content/archetypes";

function VoiceSection({
  index,
}: {
  index: number;
}) {
  const voice = archetypes[index];
  const imageLeft = index % 2 === 0;

  const portrait = (
    <div className="w-full md:w-[380px] shrink-0">
      <div className="relative">
        <Image
          src={voice.portrait}
          alt={`${voice.name} — ${voice.subtitle}`}
          width={760}
          height={760}
          className="w-full aspect-square object-cover rounded-sm"
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
  );

  const text = (
    <div className="flex-1 md:pt-2">
      <h2 className="font-serif text-3xl md:text-4xl tracking-[0.15em] text-champagne-deep">
        {voice.name}
      </h2>

      <p className="mt-2 font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-warm-gray">
        {voice.subtitle}
      </p>

      <div className="mt-4 flex items-center gap-3">
        <span className="block w-8 h-[1px] bg-champagne/40" />
        <span className="text-champagne text-[8px]">&#9830;</span>
        <span className="block w-8 h-[1px] bg-champagne/40" />
      </div>

      <div className="mt-5 space-y-[18px]">
        {voice.bio.map((paragraph, i) => (
          <p
            key={i}
            className="font-serif"
            style={{
              fontSize: "clamp(16px, 1.8vw, 18px)",
              lineHeight: 1.65,
              color: "#2F2B27",
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>

      <p
        className="mt-8 font-serif italic"
        style={{
          fontSize: "clamp(17px, 2vw, 20px)",
          lineHeight: 1.5,
          color: "#8C6D3F",
        }}
      >
        {voice.quote}
      </p>
    </div>
  );

  return (
    <section className="w-full max-w-5xl mx-auto px-6">
      <div
        className={`flex flex-col md:flex-row items-start gap-10 md:gap-14 ${
          imageLeft ? "" : "md:flex-row-reverse"
        }`}
      >
        {portrait}
        {text}
      </div>
    </section>
  );
}

export default function VoicesPage() {
  return (
    <main className="bg-ivory text-charcoal">
      <Header />
      <div className="pt-[60px]">
        {/* Page heading */}
        <section className="w-full max-w-3xl mx-auto px-6 pt-16 md:pt-24 pb-12 md:pb-16 text-center">
          <h1 className="font-serif text-3xl md:text-4xl tracking-[0.15em] text-champagne-deep">
            The Voices
          </h1>
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="block w-8 h-[1px] bg-champagne/40" />
            <span className="text-champagne text-[8px]">&#9830;</span>
            <span className="block w-8 h-[1px] bg-champagne/40" />
          </div>
          <p className="mt-4 font-serif text-base md:text-lg italic text-charcoal/60">
            One band, three voices — Beauty, Strength, and Wisdom
          </p>
        </section>

        {/* Voice sections */}
        <div className="space-y-20 md:space-y-28 pb-20 md:pb-32">
          <VoiceSection index={0} />
          <VoiceSection index={1} />
          <VoiceSection index={2} />
        </div>
      </div>
    </main>
  );
}
