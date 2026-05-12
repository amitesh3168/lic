"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type AnimationType = "fade-up" | "fade-left" | "fade-right" | "fade-in" | "zoom-in" | "slide-up";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number; // delay in ms
  duration?: number; // duration in ms
  className?: string;
}

const animationStyles: Record<AnimationType, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    hidden: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    hidden: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "fade-in": {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
  "zoom-in": {
    hidden: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
  "slide-up": {
    hidden: "opacity-0 translate-y-12",
    visible: "opacity-100 translate-y-0",
  },
};

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation();
  const styles = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${isVisible ? styles.visible : styles.hidden} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
