"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

export default function MobileFlowingReveal({ width, height, target }) {
  const [mounted, setMounted] = useState(false);
  const [interactionKey, setInteractionKey] = useState(0);
  const [ripplePosition, setRipplePosition] = useState(null);

  const isAnimatingRef = useRef(false);
  const timeRef = useRef(0);
  const offsetXRef = useRef(0);
  const offsetYRef = useRef(0);

  const x = useMotionValue(width * 0.5);
  const y = useMotionValue(height * 0.75);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let animationFrame;

    const loop = () => {
      if (!isAnimatingRef.current) {
        timeRef.current += 0.008;
        const time = timeRef.current;

        const xBase = width * 0.5;
        const xRange = width * 0.35;
        const newX = xBase + Math.sin(time * 0.8) * xRange + Math.cos(time * 0.5) * (xRange * 0.3);

        const yBase = height * 0.72;
        const yRange = height * 0.18;
        const newY = yBase + Math.sin(time * 0.6) * yRange + Math.cos(time * 0.9) * (yRange * 0.4);

        // Apply offsets to continue from clicked position
        x.set(newX + offsetXRef.current);
        y.set(newY + offsetYRef.current);
      }

      animationFrame = requestAnimationFrame(loop);
    };

    animationFrame = requestAnimationFrame(loop);
    return () => animationFrame && cancelAnimationFrame(animationFrame);
  }, [mounted, width, height, x, y]);

  useEffect(() => {
    if (!target || !mounted) return;

    isAnimatingRef.current = true;
    setInteractionKey((key) => key + 1);
    setRipplePosition({ x: target.x, y: target.y });

    // Get current position
    const currentX = x.get();
    const currentY = y.get();

    // Animate to target
    animate(x, target.x, { duration: 0.8, ease: [0.22, 1, 0.36, 1] });
    animate(y, target.y, { duration: 0.8, ease: [0.22, 1, 0.36, 1] }).then(() => {
      // Calculate offset so movement continues from new position
      const xBase = width * 0.5;
      const xRange = width * 0.35;
      const time = timeRef.current;
      const expectedX = xBase + Math.sin(time * 0.8) * xRange + Math.cos(time * 0.5) * (xRange * 0.3);

      const yBase = height * 0.72;
      const yRange = height * 0.18;
      const expectedY = yBase + Math.sin(time * 0.6) * yRange + Math.cos(time * 0.9) * (yRange * 0.4);

      // Store offset to continue movement from clicked position
      offsetXRef.current = target.x - expectedX;
      offsetYRef.current = target.y - expectedY;

      // Resume organic movement
      isAnimatingRef.current = false;
    });
  }, [target, mounted, x, y, width, height]);

  if (!mounted) return null;

  return (
    <svg
      width={width}
      height={height}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 5 }}
    >
      <defs>
        <filter id="mobileGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
        </filter>

        {/* Clean ripple gradient for smooth reveal */}
        <radialGradient id="rippleGradient">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="30%" stopColor="white" stopOpacity="0.8" />
          <stop offset="60%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>

        <mask id="flowingRevealMask">
          <rect x="0" y="0" width={width} height={height} fill="black" />

          <motion.circle
            cx={x}
            cy={y}
            r="0"
            fill="url(#rippleGradient)"
            initial={{ r: 0 }}
            animate={{ r: [180, 220, 180] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Single clean ripple on click */}
          {ripplePosition && interactionKey > 0 && (
            <motion.circle
              key={`mask-burst-${interactionKey}`}
              cx={ripplePosition.x}
              cy={ripplePosition.y}
              r="0"
              fill="url(#rippleGradient)"
              initial={{ r: 0, opacity: 1 }}
              animate={{ r: 280, opacity: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            />
          )}

          <motion.circle
            cx={x}
            cy={y}
            r="0"
            fill="white"
            filter="url(#mobileGlow)"
            initial={{ r: 0 }}
            animate={{ r: [75, 90, 75] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </mask>
      </defs>

      <image
        href="/images/hero-after.png"
        width={width}
        height={height}
        preserveAspectRatio="xMidYMid slice"
        mask="url(#flowingRevealMask)"
      />

      <motion.circle
        cx={x}
        cy={y}
        r="0"
        fill="rgba(255, 255, 255, 0.12)"
        filter="url(#mobileGlow)"
        initial={{ r: 40 }}
        animate={{ r: [60, 80, 60] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

    </svg>
  );
}
