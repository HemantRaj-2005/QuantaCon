"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function Particles() {
  const [particles, setParticles] = React.useState<
    {
      x: number;
      y: number;
      scale: number;
      duration: number;
      size: number;
      targetY: number;
    }[]
  >([]);

  React.useEffect(() => {
    // Increased count for full page coverage
    const newParticles = Array.from({ length: 150 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 20 + 10, // Slower for background
      size: Math.random() * 4 + 2,
      targetY: Math.random() * -100, // Move upwards
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-dune-sand dark:bg-dune-sand/30 blur-[1px]"
          initial={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            scale: p.scale,
          }}
          animate={{
            top: [null, `${p.targetY}%`],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
        />
      ))}
    </div>
  );
}
