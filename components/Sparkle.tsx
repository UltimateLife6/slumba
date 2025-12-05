"use client";

import { motion } from "framer-motion";

interface SparkleProps {
  x: number;
  y: number;
  delay: number;
}

export default function Sparkle({ x, y, delay }: SparkleProps) {
  return (
    <motion.div
      className="absolute w-2 h-2"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        background: "radial-gradient(circle, #FFD700 0%, transparent 70%)",
        borderRadius: "50%",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

