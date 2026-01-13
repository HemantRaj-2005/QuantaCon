"use client";

import * as React from "react";
import Link from "next/link";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { href: "/#events", label: "Events" },
    { href: "/#mentors", label: "Mentors" },
    { href: "/avalanche", label: "Avalanche" },
    { href: "/websprint", label: "WebSprint" },
    { href: "/timeline", label: "Timeline" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
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
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={closeMobileMenu}
          >
            <div className="w-8 h-8 rounded-full bg-dune-spice/20 flex items-center justify-center border border-dune-spice/50 group-hover:bg-dune-spice/40 transition-colors">
              <div className="w-3 h-3 rounded-full bg-dune-spice" />
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground group-hover:text-dune-spice transition-colors">
              QUANTA<span className="text-dune-sand">CON</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-foreground/80">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-dune-spice transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <p
              className="hidden md:flex"
            >
              <Link
                href="https://www.linkedin.com/company/mnnit-electronics-society/posts/?feedView=all"
                target="_blank"
                className="flex items-center gap-4 hover:no-underline"
              >
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-dune-spice/30 shadow-sm">
                  <Image
                    src="/logo.jpg"
                    alt="ES Logo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <span className="text-lg font-semibold">
                  Electronics Society
                </span>
              </Link>
            </p>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <motion.div
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          "bg-background/95 backdrop-blur-lg",
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        onClick={closeMobileMenu}
      >
        {/* Mobile Navigation Menu */}
        <motion.nav
          className="absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-sm px-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: isMobileMenuOpen ? 0 : -20,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col space-y-6 py-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="text-2xl font-semibold text-foreground hover:text-dune-spice transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-8 border-t border-border">
              <p
              className="hidden sm:flex"
            >
              <Link
                href="https://www.linkedin.com/company/mnnit-electronics-society/posts/?feedView=all"
                target="_blank"
                className="flex items-center gap-4 hover:no-underline"
              >
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-dune-spice/30 shadow-sm">
                  <Image
                    src="/logo.jpg"
                    alt="ES Logo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <span className="text-lg font-semibold">
                  Electronics Society
                </span>
              </Link>
            </p>
            </div>
          </div>
        </motion.nav>
      </motion.div>
    </>
  );
}
