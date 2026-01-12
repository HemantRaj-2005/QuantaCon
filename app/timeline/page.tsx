"use client";

import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import Image from "next/image";

const TIMELINE_EVENTS = [
  {
    date: "12 JAN",
    year: "2026",
    time: "23:59",
    title: "Registration Opens",
    description:
      "The gates to the desert trials unlock. Assemble your crew and declare your intent to the High Council.",
    phase: "GENESIS",
  },
  {
    date: "15 JAN",
    year: "2026",
    time: "23:59",
    title: "Registration Closes",
    description:
      "The portals seal. All participants must be registered. The storm begins at midnight.",
    phase: "LOCKDOWN",
  },
  {
    date: "15 JAN",
    year: "2026",
    time: "00:00",
    title: "Hacking Commences",
    description:
      "Submit your project repositories. The two-week crucible begins. Innovation under pressure.",
    phase: "INITIATION",
  },
  {
    date: "23-24 JAN",
    year: "2026",
    time: "ALL DAY",
    title: "Mid-Evaluation",
    description:
      "Present progress to the mentors. Receive guidance, refine strategy, and adapt to the shifting sands.",
    phase: "CHECKPOINT",
  },
  {
    date: "31 JAN",
    year: "2026",
    time: "10:00",
    title: "Final Evaluation",
    description:
      "The final judgment. Demo day. Present your innovation to the council. Champions will be crowned.",
    phase: "CONVERGENCE",
  },
];

export default function TimelinePage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/hero/dune_bg.png"
          alt="Desert background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center space-y-6 mb-24"
        >
          <div className="inline-block px-6 py-2 rounded-full border border-amber-400/30 bg-amber-400/5 backdrop-blur-sm mb-4">
            <span className="text-xs tracking-[0.3em] uppercase text-amber-300/90 font-semibold">
              Mission Chronology
            </span>
          </div>

          <h1
            className="
              text-5xl md:text-7xl font-extrabold tracking-tight
              bg-gradient-to-b from-amber-200 via-amber-400 to-yellow-600
              bg-clip-text text-transparent
              drop-shadow-[0_8px_32px_rgba(255,180,80,0.3)]
            "
          >
            THE PATH FORWARD
          </h1>

          <p className="text-amber-100/70 text-lg md:text-xl max-w-2xl mx-auto tracking-wide">
            Every moment is a grain of sand in the hourglass. Mark these
            milestones on your journey through the trials.
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Desert Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400/0 via-amber-400/40 to-amber-400/0 md:-translate-x-1/2" />

          <div className="space-y-20 md:space-y-32">
            {TIMELINE_EVENTS.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`
                    relative flex flex-col md:flex-row items-start gap-8
                    ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
                  `}
                >
                  {/* Timeline Marker */}
                  <div
                    className="
                      absolute left-8 md:left-1/2 md:-translate-x-1/2 
                      w-4 h-4 rounded-full 
                      bg-gradient-to-br from-amber-300 to-amber-500
                      shadow-[0_0_20px_rgba(251,191,36,0.5)]
                      border-2 border-black
                      z-20
                    "
                  >
                    <div className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-40" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`
                      pl-20 md:pl-0 md:w-[calc(50%-3rem)] 
                      ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}
                    `}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="
                        relative group
                        p-8 rounded-2xl
                        bg-gradient-to-br from-amber-900/10 via-black/70 to-black/90
                        border border-amber-400/20
                        hover:border-amber-400/40
                        backdrop-blur-md
                        shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                        hover:shadow-[0_12px_48px_rgba(251,191,36,0.15)]
                        transition-all duration-500
                      "
                    >
                      {/* Subtle Glow */}
                      <div className="absolute inset-0 rounded-2xl bg-amber-400/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                      {/* Phase Label */}
                      <div
                        className={`
                          inline-block px-3 py-1 mb-4 rounded-md
                          bg-amber-400/10 border border-amber-400/30
                          text-[10px] tracking-[0.25em] uppercase font-bold text-amber-300
                        `}
                      >
                        {event.phase}
                      </div>

                      {/* Date & Time */}
                      <div
                        className={`
                          flex items-baseline gap-3 mb-3
                          ${isEven ? "md:justify-end" : ""}
                        `}
                      >
                        <span className="text-3xl md:text-4xl font-bold tracking-tight text-amber-200">
                          {event.date}
                        </span>
                        <span className="text-sm text-amber-400/60 font-mono">
                          {event.year}
                        </span>
                      </div>

                      <div
                        className={`
                          inline-block px-2 py-1 mb-4 rounded
                          bg-amber-400/5 border border-amber-400/20
                          text-xs font-mono text-amber-300/80
                        `}
                      >
                        {event.time}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-amber-100 mb-3">
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className="text-amber-100/60 leading-relaxed">
                        {event.description}
                      </p>

                      {/* Decorative Corner Accent */}
                      <div
                        className={`
                          absolute ${isEven ? "bottom-4 right-4" : "bottom-4 left-4"}
                          w-12 h-12 opacity-10
                          border-b-2 border-r-2 border-amber-400/40
                        `}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Timeline End Marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="
              relative flex items-center justify-center mt-20
            "
          >
            <div
              className="
                w-16 h-16 rounded-full
                bg-gradient-to-br from-amber-400 to-amber-600
                shadow-[0_0_40px_rgba(251,191,36,0.4)]
                flex items-center justify-center
                border-4 border-black
              "
            >
              <div className="w-8 h-8 rounded-full bg-black/40" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
