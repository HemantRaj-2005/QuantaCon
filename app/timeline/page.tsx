"use client";

import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import { Calendar, Flag, Rocket, Swords, Trophy, Clock } from "lucide-react";

const TIMELINE_EVENTS = [
  {
    date: "12th Jan 2026",
    time: "11:59 PM",
    title: "Registration Opens",
    description:
      "The gateways to Arrakis open. Gather your team and prepare for the trials ahead.",
    icon: Flag,
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    date: "15th Jan 2026",
    time: "11:59 PM",
    title: "Registration Closes & Hacking Begins",
    description:
      "The storm approaches. Project submission portals open. The building phase commences immediately.",
    icon: Rocket,
    color: "text-dune-spice",
    bg: "bg-dune-spice/10",
    border: "border-dune-spice/20",
  },
  {
    date: "15th - 29th Jan 2026",
    time: "2 Weeks",
    title: "Project Development Phase",
    description:
      "Two weeks of intense innovation. Build, test, and iterate on your solutions.",
    icon: Calendar,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    date: "23rd - 24th Jan 2026",
    time: "All Day",
    title: "Mid-Evaluation",
    description:
      "Checkpoint. Present your progress to the mentors for feedback and course correction.",
    icon: Swords,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },
  {
    date: "31st Jan 2026",
    time: "10:00 AM",
    title: "Final Evaluation & Closing",
    description:
      "The final judgment. Demo your projects to the High Council. Winners will be crowned.",
    icon: Trophy,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
];

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />

      <div className="pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-dune-spice/10 mb-4">
            <Clock className="w-8 h-8 text-dune-spice" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Mission Timeline
          </h1>
          <p className="text-muted-foreground text-lg">
            Every moment counts in the desert. Stay on schedule to survive.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {TIMELINE_EVENTS.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-foreground z-10 mt-6 md:mt-8">
                    <div
                      className={`w-full h-full rounded-full animate-pulse ${event.color.replace(
                        "text-",
                        "bg-"
                      )}`}
                    />
                  </div>

                  {/* Content Card */}
                  <div className="pl-16 md:pl-0 md:w-1/2 md:px-8 w-full">
                    <div
                      className={`p-6 rounded-xl border bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all ${event.border}`}
                    >
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${event.bg}`}
                      >
                        <Icon className={`w-6 h-6 ${event.color}`} />
                      </div>
                      <div className="flex flex-wrap gap-2 items-center mb-2">
                        <span className="font-mono text-sm font-bold text-foreground">
                          {event.date}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                          {event.time}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
