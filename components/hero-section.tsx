"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-background text-foreground transition-colors duration-500">
      {/* Background Gradients */}
      {/* Dark Mode: Deep Space Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-dune-space via-dune-deep to-black opacity-100 dark:opacity-100 opacity-0 transition-opacity duration-500" />

      {/* Light Mode: Day Desert Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-amber-100 via-orange-50 to-white dark:opacity-0 opacity-100 transition-opacity duration-500" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-dune-spice tracking-[0.3em] text-sm md:text-base uppercase font-semibold">
            Electronics Society Presents
          </span>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-dune-sand to-dune-spice drop-shadow-lg"
          style={{ y: y1 }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          QUANTA
          <span className="text-foreground dark:text-white transition-colors duration-300">
            CON
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto"
          style={{ y: y2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          The Sands of Innovation Await
        </motion.p>
      </div>

      {/* Dunes Foreground */}
      {/* Light Mode Dune */}
      <div className="absolute bottom-0 w-full h-32 md:h-64 bg-linear-to-t from-orange-200/50 to-transparent z-0 opacity-100 dark:opacity-0 transition-opacity duration-500" />
      {/* Dark Mode Dune */}
      <div className="absolute bottom-0 w-full h-32 md:h-64 bg-linear-to-t from-dune-sand/10 to-transparent z-0 opacity-0 dark:opacity-100 transition-opacity duration-500" />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-dune-sand w-10 h-10" />
      </motion.div>
    </div>
  );
}
