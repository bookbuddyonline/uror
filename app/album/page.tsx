import Link from "next/link";
import { primaryAlbum } from "@/content/album";

export default function AlbumPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-ivory text-charcoal px-6">
      <h1 className="font-serif text-4xl tracking-widest text-champagne-deep">
        {primaryAlbum.title}
      </h1>
      <p className="mt-2 font-sans text-sm tracking-wider text-warm-gray uppercase">
        {primaryAlbum.subtitle}
      </p>
      <Link
        href="/"
        className="mt-8 font-sans text-xs tracking-widest uppercase text-warm-gray hover:text-champagne-deep transition-colors"
      >
        &larr; Back
      </Link>
    </div>
  );
}
