'use client';
import { useRef, useEffect, useState } from 'react';

export function useTicker(speed = 40) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const posRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTimestamp = useRef<number | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const animate = (timestamp: number) => {
      if (!lastTimestamp.current) lastTimestamp.current = timestamp;
      const delta = timestamp - lastTimestamp.current;
      lastTimestamp.current = timestamp;

      if (!paused) {
        posRef.current -= (speed * delta) / 1000;
        const totalWidth = el.scrollWidth / 2;
        if (Math.abs(posRef.current) >= totalWidth) {
          posRef.current = 0;
        }
        el.style.transform = `translateX(${posRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [paused, speed]);

  return { containerRef, paused, setPaused };
}
