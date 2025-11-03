"use client";
import { useEffect, useRef, useState } from "react";
import { useSpring } from "framer-motion";

// Note: Named TriangleMask for compatibility, but now renders a four-leaf clover shape
export default function TriangleMask({ width, height }) {
  const containerRef = useRef(null);

  // Smooth springs for cursor position - highly responsive to act as cursor
  const sx = useSpring(0, { stiffness: 300, damping: 30, mass: 0.1 });
  const sy = useSpring(0, { stiffness: 300, damping: 30, mass: 0.1 });

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      sx.set(Math.max(0, Math.min(x, width)));
      sy.set(Math.max(0, Math.min(y, height)));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [width, height, sx, sy]);

  // Size of the clover - refined for more delicate, natural heart-shaped petals
  const PETAL_RADIUS = 85;
  const PETAL_OFFSET = 65; // Distance from center to petal center (brought closer)
  
  // More elongated ellipses for proper heart-shaped petals
  const PETAL_WIDTH = 65;   // Width of heart-shaped petal (reduced)
  const PETAL_HEIGHT = 60;  // Height of heart-shaped petal (more elongated ratio)

  // Convert springs to instantaneous numbers for cursor position
  const [px, setPx] = useState(0);
  const [py, setPy] = useState(0);

  useEffect(() => {
    const unsubX = sx.on("change", setPx);
    const unsubY = sy.on("change", setPy);
    return () => { 
      unsubX(); 
      unsubY(); 
    };
  }, [sx, sy]);

  // Clamp helper
  const clamp = (val, min, max) => Math.max(min, Math.min(val, max));

  // Cursor position (center of clover)
  const cx = clamp(px, 0, width);
  const cy = clamp(py, 0, height);

  // Calculate petal positions at 45-degree angles (rotated from cross pattern)
  const angle45 = Math.PI / 4; // 45 degrees in radians
  const petals = [
    { angle: -angle45, label: "top-right" },      // 315° or -45°
    { angle: angle45, label: "bottom-right" },    // 45°
    { angle: 3 * angle45, label: "bottom-left" }, // 135°
    { angle: 5 * angle45, label: "top-left" }     // 225°
  ];

  return (
    <svg ref={containerRef} width={width} height={height} className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <defs>
        {/* ClipPath: defines the clover area to reveal the "after" image */}
        <clipPath id="triangleClip">
          {/* Center circle - smaller for better petal definition */}
          <circle cx={cx} cy={cy} r={PETAL_RADIUS * 0.4} />
          
          {/* Four petal circles positioned at 45-degree angles (diamond orientation) */}
          {petals.map((petal, i) => {
            const petalX = cx + Math.cos(petal.angle) * PETAL_OFFSET;
            const petalY = cy + Math.sin(petal.angle) * PETAL_OFFSET;
            return (
              <ellipse
                key={i}
                cx={petalX}
                cy={petalY}
                rx={PETAL_WIDTH}
                ry={PETAL_HEIGHT}
                transform={`rotate(${(petal.angle * 180 / Math.PI)}, ${petalX}, ${petalY})`}
              />
            );
          })}
        </clipPath>
      </defs>
    </svg>
  );
}

