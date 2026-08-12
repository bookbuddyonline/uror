"use client";

import Link from "next/link";
import { site } from "@/content/site";
import { motion, AnimatePresence } from "motion/react";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] bg-ivory/95 backdrop-blur-sm flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            className="absolute top-5 right-6 p-2 text-warm-gray"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          </button>

          <nav>
            <ul className="flex flex-col items-center gap-8">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-serif text-2xl tracking-widest text-charcoal hover:text-champagne-deep transition-colors duration-300"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
