import { useEffect, useState } from "react";

export function useCountUp(target: number, durationMs = 1200, delayMs = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf: number;
    let start: number | null = null;
    const timeout = setTimeout(() => {
      const tick = (t: number) => {
        if (start === null) start = t;
        const progress = Math.min(1, (t - start) / durationMs);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * target));
        if (progress < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delayMs);
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [target, durationMs, delayMs]);

  return value;
}
