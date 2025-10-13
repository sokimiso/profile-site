"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mood } from "../types";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}

export const Background: React.FC<{ mood: Mood }> = ({ mood }) => {

  // Particle system (for AI now)
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (mood !== "ai") return;

    const initialParticles: Particle[] = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 8 + Math.random() * 18,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
    }));
    setParticles(initialParticles);
  }, [mood]);

  useEffect(() => {
    if (mood !== "ai") return;
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mood]);

  useEffect(() => {
    if (mood !== "ai") return;
    let animationFrame: number;

    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((p) => {
          const dx = p.x - mousePos.x;
          const dy = p.y - mousePos.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const repelRadius = 150;
          const repelStrength = 0.2;
          let offsetX = 0;
          let offsetY = 0;

          if (dist < repelRadius && dist > 0) {
            const factor = (repelRadius - dist) / repelRadius;
            offsetX = (dx / dist) * factor * repelStrength * 40;
            offsetY = (dy / dist) * factor * repelStrength * 40;
          }

          let newX = p.x + p.speedX + offsetX;
          let newY = p.y + p.speedY + offsetY;

          if (newX > window.innerWidth) newX = 0;
          if (newX < 0) newX = window.innerWidth;
          if (newY > window.innerHeight) newY = 0;
          if (newY < 0) newY = window.innerHeight;

          return { ...p, x: newX, y: newY };
        })
      );
      animationFrame = requestAnimationFrame(animateParticles);
    };

    animateParticles();
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePos, mood]);

  // Hiring Manager (simple gradient)
  if (mood === "hiring") {
    return (
      <motion.div
        className="fixed inset-0 z-[-1]"
        animate={{ background: "linear-gradient(to bottom right, #020617, #001133)" }}
        transition={{ duration: 1.2 }}
      />
    );
  }

// Geek (smooth cinematic fade)
if (mood === "geek") {
  return (
    <motion.div
      key="geek-bg"
      className="fixed top-0 left-0 w-full h-full z-[-1]"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        background: "radial-gradient(circle at 40% 60%, #001a1a, #000a0a)",
      }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.8,
        ease: [0.25, 0.1, 0.25, 1], // smooth curve
      }}
    >
      {/* Subtle stars / moving particles for depth */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-yellow-300/10 rounded-full"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            top: Math.random() * window.innerHeight,
            left: Math.random() * window.innerWidth,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6 + Math.random() * 6,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}


  // AI
  if (mood === "ai") {
    return (
      <motion.div
        className="fixed inset-0 z-[-1] overflow-hidden"
        animate={{
          background: "radial-gradient(circle at 30% 30%, #002244, #000)"
        }}
        transition={{ duration: 1.2 }}
      >
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white/20 backdrop-blur-sm"
            style={{
              width: p.size,
              height: p.size,
              top: p.y,
              left: p.x,
            }}
          />
        ))}
      </motion.div>
    );
  }

  // Barbra (simple gradient)
  if (mood === "barbra") {
    return (
      <motion.div
        className="fixed top-0 left-0 w-full h-full z-[-1]"
        animate={{
          background: "radial-gradient(circle at 50% 50%, #4a004a, #1a001a)"
        }}
        transition={{ duration: 1.2 }}
      />
    );
  }

  // Default
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-[-1]"
      animate={{ backgroundColor: "#000" }}
      transition={{ duration: 1.2 }}
    />
  );
};
