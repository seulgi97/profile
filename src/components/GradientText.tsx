"use client";

import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
}

export default function GradientText({
  children,
  className,
  gradient = "linear-gradient(135deg, #9333ea 0%, #c084fc 50%, #e879f9 100%)",
}: GradientTextProps) {
  return (
    <span
      className={className}
      style={{
        background: gradient,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </span>
  );
}
