import Link from "next/link";
import { getArchetype } from "@/content/archetypes";

export default function LivPage() {
  const a = getArchetype("liv");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-ivory text-charcoal px-6">
      <h1 className="font-serif text-4xl tracking-widest text-champagne-deep">{a.name}</h1>
      <p className="mt-2 font-serif text-lg italic text-warm-gray">{a.phrase}</p>
      <Link
        href="/"
        className="mt-8 font-sans text-xs tracking-widest uppercase text-warm-gray hover:text-champagne-deep transition-colors"
      >
        &larr; Back
      </Link>
    </div>
  );
}
