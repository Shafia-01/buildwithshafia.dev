"use client";

import { useEffect, useRef, useState } from "react";

interface ConnectorState {
  x: number;
  y1: number;
  y2: number;
}

export function PromotionConnector({
  fromId,
  toId,
}: {
  fromId: string;
  toId: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<ConnectorState | null>(null);

  useEffect(() => {
    const measure = () => {
      const fromEl = document.getElementById(fromId);
      const toEl = document.getElementById(toId);
      const container = containerRef.current;
      if (!fromEl || !toEl || !container) return;

      const cRect = container.getBoundingClientRect();
      const fRect = fromEl.getBoundingClientRect();
      const tRect = toEl.getBoundingClientRect();

      // Attach to the LEFT edge of the from-card minus a small gap,
      // so the connector bows outward (away from the timeline center)
      // instead of inward where other cards may sit.
      const x = fRect.left - cRect.left - 12;
      // Vertical midpoints relative to the container
      const y1 = fRect.top + fRect.height / 2 - cRect.top;
      const y2 = tRect.top + tRect.height / 2 - cRect.top;

      setCoords({ x, y1, y2 });
    };

    // Run after paint so layout is settled
    const raf = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [fromId, toId]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none hidden md:block"
      style={{
        position: "absolute",
        inset: 0,
        // Rendered last → paints above all card stacking contexts
        zIndex: 50,
        overflow: "visible",
      }}
    >
      {coords && (() => {
        const { x, y1, y2 } = coords;
        // Bezier control point: bows 48px to the LEFT of the card edge (outward)
        const cx = x - 48;
        const arrowSize = 10;

        return (
          <svg
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              overflow: "visible",
            }}
            fill="none"
          >
            {/* Soft glow behind the curve */}
            <path
              d={`M ${x},${y1} C ${cx},${y1} ${cx},${y2} ${x},${y2}`}
              stroke="var(--brass)"
              strokeWidth="8"
              strokeDasharray="10 7"
              strokeLinecap="round"
              opacity="0.18"
            />
            {/* Main dashed curve */}
            <path
              d={`M ${x},${y1} C ${cx},${y1} ${cx},${y2} ${x},${y2}`}
              stroke="var(--brass)"
              strokeWidth="3"
              strokeDasharray="10 7"
              strokeLinecap="round"
            />
            {/* Arrowhead at the bottom (pointing downward toward target card) */}
            <path
              d={`M ${x - arrowSize},${y2 - arrowSize} L ${x},${y2} L ${x + arrowSize},${y2 - arrowSize}`}
              stroke="var(--brass)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      })()}
    </div>
  );
}

