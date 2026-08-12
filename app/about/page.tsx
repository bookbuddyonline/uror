import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-ivory text-charcoal px-6">
      <h1 className="font-serif text-4xl tracking-widest text-champagne-deep">About</h1>
      <p className="mt-2 font-sans text-sm tracking-wider text-warm-gray">Coming soon</p>
      <Link
        href="/"
        className="mt-8 font-sans text-xs tracking-widest uppercase text-warm-gray hover:text-champagne-deep transition-colors"
      >
        &larr; Back
      </Link>
    </div>
  );
}
