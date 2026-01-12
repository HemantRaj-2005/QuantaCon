"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, Globe, Zap } from "lucide-react";
import { useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.35, 0.2]);

  return (
    <section
      ref={sectionRef}
      id="events"
      className="relative py-28 px-6 md:px-12 overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <Image
          src="/about_bg.png"
          alt="Desert of Arrakis"
          fill
          className="object-cover object-center opacity-30"
        />
      </motion.div>

      {/* Dark Film Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/90 -z-10" />

      {/* Subtle Spice Bloom */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,200,120,0.08),transparent_65%)] -z-10"
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-24 space-y-6"
        >
          {/* Ritual Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 border border-amber-400/20 bg-black/40 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-amber-300" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-amber-200/80 font-semibold">
              Choose Your Path
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-[0.04em] bg-gradient-to-b from-amber-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
            THE TRIALS
          </h2>

          <p className="text-amber-100/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Two disciplines emerge from the sands. One forged in circuits and
            silicon. The other in code and cloud. Only mastery endures.
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-amber-400/40" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-400/40" />
          </div>
        </motion.div>

        {/* ================= EVENTS ================= */}
        <div className="grid md:grid-cols-2 gap-14">
          {/* ================= AVALANCHE ================= */}
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            whileHover={{ y: -6 }}
            className="relative group"
          >
            {/* Sigil Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/30 to-transparent" />

            {/* Slab */}
            <div className="relative pl-10 pr-8 py-10 min-h-[500px] border border-white/10 bg-black/65 backdrop-blur-md transition-all duration-500 hover:border-white/20">
              {/* Dust Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />

              <Cpu className="w-10 h-10 text-amber-300 mb-6" />

              <h3 className="text-3xl md:text-4xl font-bold tracking-[0.18em] text-amber-200 mb-6">
                AVALANCHE
              </h3>

              <p className="text-amber-100/65 leading-relaxed mb-8 text-sm md:text-base">
                The hardware crucible. Design resilient circuits, command
                microcontrollers, and optimize systems under relentless
                constraints.
              </p>

              <div className="space-y-3 text-sm text-amber-100/55">
                <div>— Circuit Design & Analysis</div>
                <div>— Microcontroller Programming</div>
                <div>— Signal Processing</div>
                <div>— Real-time System Debugging</div>
              </div>

              <a
                href="/avalanche"
                className="inline-block mt-10 text-xs tracking-[0.3em] uppercase font-semibold text-amber-300 hover:text-amber-200 transition"
              >
                Enter the Trial →
              </a>
            </div>
          </motion.article>

          {/* ================= WEBSPRINT ================= */}
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="relative group"
          >
            {/* Sigil Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/30 to-transparent" />

            {/* Slab */}
            <div className="relative pl-10 pr-8 py-10 min-h-[500px] border border-white/10 bg-black/65 backdrop-blur-md transition-all duration-500 hover:border-white/20">
              {/* Dust Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />

              <Globe className="w-10 h-10 text-indigo-300 mb-6" />

              <h3 className="text-3xl md:text-4xl font-bold tracking-[0.18em] text-indigo-200 mb-6">
                WEBSPRINT
              </h3>

              <p className="text-indigo-100/65 leading-relaxed mb-8 text-sm md:text-base">
                The digital arena. Architect scalable systems, craft interfaces,
                and deploy resilient experiences at speed.
              </p>

              <div className="space-y-3 text-sm text-indigo-100/55">
                <div>— Frontend Engineering</div>
                <div>— Backend Systems</div>
                <div>— UI / UX Design</div>
                <div>— Performance Optimisation</div>
                <div>— Cloud Deployment & Hosting</div>
              </div>

              <a
                href="/websprint"
                className="inline-block mt-10 text-xs tracking-[0.3em] uppercase font-semibold text-indigo-300 hover:text-indigo-200 transition"
              >
                Enter the Race →
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
