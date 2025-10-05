import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
}

export function Counter({ from = 0, to, duration = 2, className = "" }: CounterProps) {
  const [value, setValue] = useState(from);
  const { ref, inView } = useInView({
    triggerOnce: false, // 👈 allow triggering multiple times
    threshold: 0.4,     // triggers when 40% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / (duration * 1000), 1);
        const current = Math.floor(from + (to - from) * progress);
        setValue(current);
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      // 🧹 Cleanup when leaving view
      return () => {
        cancelAnimationFrame(animationFrame);
        setValue(from); // reset back to start when leaving view
      };
    }
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className={`inline-block font-bold ${className}`}>
      {value}
    </span>
  );
}
