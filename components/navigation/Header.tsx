"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between px-6 md:px-10 py-5">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-serif text-lg md:text-xl tracking-[0.35em] text-champagne-deep drop-shadow-sm"
          aria-label="UROR home"
        >
          U<span className="mx-[0.15em] text-[0.6em] align-middle">&#9830;</span>R<span className="mx-[0.15em] text-[0.6em] align-middle">&#9830;</span>O<span className="mx-[0.15em] text-[0.6em] align-middle">&#9830;</span>R
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-sans text-sm tracking-widest uppercase text-warm-gray hover:text-champagne-deep transition-colors duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-[1.5px] bg-warm-gray" />
          <span className="block w-6 h-[1.5px] bg-warm-gray" />
          <span className="block w-4 h-[1.5px] bg-warm-gray" />
        </button>
      </nav>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
