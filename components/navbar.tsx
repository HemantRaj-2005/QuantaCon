"use client";

import * as React from "react";
import Link from "next/link";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-4 bg-background/60 backdrop-blur-md border-b border-dune-sand/10 shadow-sm"
          : "py-6 bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-dune-spice/20 flex items-center justify-center border border-dune-spice/50 group-hover:bg-dune-spice/40 transition-colors">
            <div className="w-3 h-3 rounded-full bg-dune-spice" />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground group-hover:text-dune-spice transition-colors">
            QUANTA<span className="text-dune-sand">CON</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-foreground/80">
          <Link
            href="/#events"
            className="hover:text-dune-spice transition-colors"
          >
            Events
          </Link>
          <Link
            href="/#mentors"
            className="hover:text-dune-spice transition-colors"
          >
            Mentors
          </Link>
          <Link
            href="/avalanche"
            className="hover:text-dune-spice transition-colors"
          >
            Avalanche
          </Link>
          <Link
            href="/websprint"
            className="hover:text-dune-spice transition-colors"
          >
            WebSprint
          </Link>
          <Link
            href="/timeline"
            className="hover:text-dune-spice transition-colors"
          >
            Timeline
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild className="hidden md:flex">
            <Link href="https://electronics-society.com" target="_blank">
              Electronics Society
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </motion.header>
  );
}
