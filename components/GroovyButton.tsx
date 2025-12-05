"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GroovyButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export default function GroovyButton({ children, onClick, className = "", href }: GroovyButtonProps) {
  const buttonStyle = {
    background: "linear-gradient(135deg, #FF69B4 0%, #9370DB 50%, #40E0D0 100%)",
    color: "white",
  };

  const motionProps = {
    className: `px-8 py-4 rounded-full font-bold text-lg shadow-lg transform transition-all ${className}`,
    style: buttonStyle,
    whileHover: {
      scale: 1.1,
      rotate: [0, -5, 5, -5, 0],
    },
    whileTap: { scale: 0.95 },
    transition: {
      rotate: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
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

