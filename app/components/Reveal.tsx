"use client";
import { useEffect } from "react";
import { useAnimate, useInView, useReducedMotion } from "motion/react";

// Content is visible in the server HTML, including when JavaScript is unavailable.
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [scope, animate] = useAnimate();
  const visible = useInView(scope, { once: true, amount: 0.12 });
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!visible || reduced !== false) return;
    const animation = animate(
      scope.current,
      { opacity: [0, 1], y: [18, 0] },
      { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
    );
    return () => {
      animation.stop();
    };
  }, [visible, reduced, animate, scope, delay]);
  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}

export function HeroTitle() {
  const [scope, animate] = useAnimate();
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced !== false) return;
    const animation = animate(
      ".title-line",
      { opacity: [0, 1], y: [24, 0] },
      {
        duration: 0.8,
        delay: (index) => 0.12 + index * 0.14,
        ease: [0.22, 1, 0.36, 1],
      },
    );
    return () => {
      animation.stop();
    };
  }, [reduced, animate]);
  return (
    <h1 ref={scope} id="hero-title">
      <span className="title-line">Olá, sou</span>
      <span className="title-line name">
        João Santos<span className="title-period">.</span>
      </span>
    </h1>
  );
}
