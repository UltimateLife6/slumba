"use client";

interface WavyBorderProps {
  children: React.ReactNode;
  className?: string;
}

export default function WavyBorder({ children, className = "" }: WavyBorderProps) {
  return (
    <div className={`relative ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
        style={{ zIndex: -1 }}
      >
        <path
          d="M0,50 Q50,20 100,50 T200,50 L200,200 L0,200 Z"
          fill="currentColor"
          opacity="0.1"
        />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

