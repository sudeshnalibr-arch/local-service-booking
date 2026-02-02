"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  target: number;
  duration?: number; // ms
  className?: string;
};

export default function Counter({
  target,
  duration = 2000,
  className = "",
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {

          let start = 0;
          const increment = target / (duration / 16);

          const animate = () => {
            start += increment;
            if (start < target) {
              setCount(Math.floor(start));
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate)
        }

         // 🔴 LEAVE viewport → reset
        else {
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
          }
          setCount(0);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}+
    </span>
  );
}
