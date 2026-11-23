import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  z: number;
  found: boolean;
}

/**
 * Vantage point cloud canvas: measured terrain points on dark ground,
 * slow rotation, periodic sweep plane, and lime signal on found points.
 * Pauses off-screen and collapses to a static frame under reduced motion.
 */
const VantageCloud: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const points: Point[] = [];
    const cols = 58;
    const rows = 42;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const nx = (i / (cols - 1) - 0.5) * 2;
        const nz = (j / (rows - 1) - 0.5) * 2;
        const ridge =
          Math.sin(nx * 3.1) * Math.cos(nz * 2.4) * 0.24 +
          Math.exp(-((nx - 0.25) ** 2 + (nz + 0.15) ** 2) * 7) * 0.38;
        const found = (nx - 0.25) ** 2 + (nz + 0.15) ** 2 < 0.045;
        points.push({ x: nx, y: ridge, z: nz, found });
      }
    }

    let raf = 0;
    let visible = true;
    const t0 = performance.now();

    const readTokens = () => {
      const cs = getComputedStyle(document.documentElement);
      return {
        lo: cs.getPropertyValue('--point-lo').trim() || 'oklch(42% 0.04 245)',
        mid: cs.getPropertyValue('--point-mid').trim() || 'oklch(70% 0.04 232)',
        hi: cs.getPropertyValue('--point-hi').trim() || 'oklch(96% 0.02 215)',
        accent: cs.getPropertyValue('--color-accent').trim() || 'oklch(89% 0.19 126)',
      };
    };

    let colors = readTokens();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    io.observe(canvas);

    const draw = (now: number) => {
      if (visible) {
        const rect = canvas.getBoundingClientRect();
        const w = rect.width;
        const h = rect.height;
        ctx.clearRect(0, 0, w, h);

        const elapsed = reducedMotion ? 2400 : now - t0;
        const angle = (elapsed / 120000) * Math.PI * 2;
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const sweepPhase = ((elapsed % 7000) / 7000) * 2.4 - 1.2;

        for (let i = 0; i < points.length; i++) {
          const p = points[i];
          const rx = p.x * cosA - p.z * sinA;
          const rz = p.x * sinA + p.z * cosA;
          const depth = rz + 2.4;
          const scale = 1.65 / depth;
          const sx = w * 0.5 + rx * w * 0.42 * scale;
          const sy = h * 0.54 - p.y * h * 0.48 * scale + rz * h * 0.16 * scale;

          const sweepDist = Math.abs(rx - sweepPhase);
          const inSweep = sweepDist < 0.09;
          const alpha = Math.max(0.15, Math.min(0.95, 1.15 - depth * 0.28));

          ctx.globalAlpha = inSweep ? 0.98 : alpha;
          if (p.found) {
            ctx.fillStyle = colors.accent;
          } else if (inSweep) {
            ctx.fillStyle = colors.hi;
          } else if (p.y > 0.12) {
            ctx.fillStyle = colors.mid;
          } else {
            ctx.fillStyle = colors.lo;
          }

          const size = p.found ? 2.1 : inSweep ? 1.8 : Math.max(1, 1.7 * scale);
          ctx.fillRect(sx, sy, size, size);
        }
        ctx.globalAlpha = 1;
      }

      if (!reducedMotion) {
        raf = requestAnimationFrame(draw);
      }
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
};

export default VantageCloud;
