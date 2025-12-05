"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StickerProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Sticker({ children, delay = 0, className = "", size = "md" }: StickerProps) {
  const sizeClasses = {
    sm: "w-12 h-12 text-xl",
    md: "w-16 h-16 text-2xl",
    lg: "w-24 h-24 text-4xl",
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className} flex items-center justify-center`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 2,
        delay,
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      {children}
    </motion.div>
  );
}


