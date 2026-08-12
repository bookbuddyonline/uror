"use client";

import { motion, type Easing } from "motion/react";
import { site } from "@/content/site";
import { HeroBackground } from "./HeroBackground";
import { ArchetypeCards } from "@/components/archetypes/ArchetypeCards";
import { CallToAction } from "@/components/ui/CallToAction";
import { FeaturedTrack } from "@/components/audio/FeaturedTrack";

const ease: Easing = [0.25, 0.1, 0.25, 1];

const fade = {
  hidden: { opacity: 0, y: 12 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, delay, ease },
  }),
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <HeroBackground />

      {/* Content overlay */}
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-between text-center px-4 pt-24 pb-8 md:pt-28 w-full max-w-6xl mx-auto min-h-screen">
        {/* Wordmark */}
        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.3em] md:tracking-[0.4em] text-champagne-deep"
          style={{ textShadow: "0 2px 12px rgba(44,42,39,0.25), 0 1px 3px rgba(44,42,39,0.15)" }}
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          UROR
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-4 font-serif text-lg md:text-xl tracking-[0.2em] text-charcoal/90"
          style={{ textShadow: "0 1px 8px rgba(250,248,245,0.6), 0 1px 2px rgba(250,248,245,0.4)" }}
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={0.6}
        >
          {site.brand.heroLine}
        </motion.p>

        {/* Small decorative divider */}
        <motion.div
          className="mt-4 flex items-center gap-3"
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={0.8}
        >
          <span className="block w-8 h-[1px] bg-champagne/60" />
          <span className="text-champagne text-xs">&#9830;</span>
          <span className="block w-8 h-[1px] bg-champagne/60" />
        </motion.div>

        {/* Description */}
        <motion.p
          className="mt-3 font-sans text-sm md:text-base tracking-wider uppercase text-warm-gray"
          style={{ textShadow: "0 1px 6px rgba(250,248,245,0.6)" }}
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={1.0}
        >
          {site.brand.heroDescription}
        </motion.p>

        {/* Spacer pushes archetypes + CTA to bottom third */}
        <div className="flex-1" />

        {/* Archetype cards — bottom third, over gown/mist area */}
        <motion.div
          className="w-full mb-6"
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={1.4}
        >
          <ArchetypeCards />
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mb-2"
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={1.8}
        >
          <CallToAction />
        </motion.div>
      </div>

      {/* Featured track — slim bottom bar pinned to bottom of hero */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20"
        variants={fade}
        initial="hidden"
        animate="visible"
        custom={2.2}
      >
        <FeaturedTrack />
      </motion.div>
    </section>
  );
}
