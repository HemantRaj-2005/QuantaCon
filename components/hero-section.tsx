"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);



  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden text-white"
    >
      {/* ================= BACKGROUND ================= */}
      <Image
        src="/hero/dune_bg.png"
        alt="Dune background"
        fill
        priority
        className="object-cover"
      />

      {/* ================= DARK OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10" />

      {/* ================= DUST GLOW ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,190,120,0.15),transparent_60%)] z-10" />

      {/* ================= CHARACTER (MOBILE BEHIND TEXT) ================= */}
      <div
        className="
          absolute inset-0 z-10 flex items-center justify-center
          md:hidden pointer-events-none
        "
      >
        <div className="relative w-[260px] h-[380px] opacity-40">
          <Image
            src="/hero/dune_char.png"
            alt="Dune warrior mobile"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 h-full flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 text-center md:text-left">
        {/* TEXT */}
        <div className="max-w-xl space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="block text-xs md:text-sm tracking-[0.4em] uppercase text-amber-300/80 font-semibold"
          >
            Electronics Society Presents
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="
              text-5xl sm:text-6xl md:text-7xl
              font-extrabold tracking-tight
              bg-gradient-to-b from-amber-200 via-amber-400 to-yellow-600
              bg-clip-text text-transparent
              drop-shadow-[0_10px_40px_rgba(255,180,80,0.35)]
              break-words
            "
          >
            QUANTACON
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-amber-100/80 tracking-wide"
          >
            The Sands of Innovation Await
          </motion.p>
        </div>

        {/* ================= CHARACTER (DESKTOP) ================= */}
        <div className="hidden md:block relative w-[420px] h-[600px]">
          <Image
            src="/hero/dune_char.png"
            alt="Dune warrior"
            fill
            className="object-contain drop-shadow-[0_30px_80px_rgba(255,180,80,0.25)]"
          />
        </div>
      </div>

    </section>
  );
}
