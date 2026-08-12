"use client";

import Link from "next/link";
import { site } from "@/content/site";

export function CallToAction() {
  return (
    <Link
      href={site.cta.href}
      className="group flex flex-col items-center gap-2 text-center"
    >
      <span className="font-sans text-sm tracking-[0.2em] uppercase text-warm-gray group-hover:text-champagne-deep transition-colors duration-500">
        {site.cta.label}
      </span>
      <svg
        className="w-4 h-4 text-champagne group-hover:translate-y-1 transition-transform duration-500"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M4 6 L8 10 L12 6" />
      </svg>
    </Link>
  );
}
