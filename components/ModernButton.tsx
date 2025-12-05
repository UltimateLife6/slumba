"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ModernButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  variant?: "primary" | "secondary";
}

export default function ModernButton({ 
  children, 
  onClick, 
  className = "", 
  href,
  variant = "primary"
}: ModernButtonProps) {
  const baseClasses = "px-8 py-4 rounded-xl font-semibold text-base shadow-lg transition-all duration-300";
  
  const variantClasses = variant === "primary"
    ? "bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white hover:shadow-xl hover:shadow-pink-500/50"
    : "bg-white/80 backdrop-blur-sm text-gray-800 border-2 border-gray-200 hover:border-purple-300";

  const motionProps = {
    className: `${baseClasses} ${variantClasses} ${className}`,
    whileHover: { 
      scale: 1.02,
      y: -2,
    },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...motionProps}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}


