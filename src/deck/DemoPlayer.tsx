import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Stage } from "../components/Stage";
import type { Step } from "../demo/steps";

const PHONE_W = 402;
const PHONE_H = 874;

/** Renders a single, non-animated demo frame at a given scale — for hero/decorative use. */
export function StaticPhone({ children, scale = 1 }: { children: ReactNode; scale?: number }) {
  return (
    <div style={{ width: PHONE_W * scale, height: PHONE_H * scale }} className="shrink-0">
      <div style={{ width: PHONE_W, height: PHONE_H, transform: `scale(${scale})`, transformOrigin: "top left" }}>
        {children}
      </div>
    </div>
  );
}

/**
 * Replays a slice of the demo script inside a scaled phone frame.
 * - mode="loop": advances on a timer and loops forever, no pointer events (feels like a GIF).
 * - mode="interactive": advances on tap/click inside the phone, wraps back to the first frame at the end.
 */
export function DemoPlayer({
  steps,
  mode,
  intervalMs = 1500,
  scale = 1,
  active = true,
}: {
  steps: Step[];
  mode: "loop" | "interactive";
  intervalMs?: number;
  scale?: number;
  active?: boolean;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (mode !== "loop" || !active) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % steps.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [mode, active, steps.length, intervalMs]);

  useEffect(() => {
    if (!active) setIndex(0);
  }, [active]);

  const next = () => setIndex((i) => (i + 1) % steps.length);
  const restart = () => setIndex(0);
  const current = steps[Math.min(index, steps.length - 1)];

  return (
    <div style={{ width: PHONE_W * scale, height: PHONE_H * scale }} className="shrink-0">
      <div
        style={{ width: PHONE_W, height: PHONE_H, transform: `scale(${scale})`, transformOrigin: "top left" }}
        className={mode === "loop" ? "pointer-events-none" : undefined}
      >
        <Stage stepKey={index} transition={current.transition} onAdvance={mode === "interactive" ? next : () => {}}>
          {current.render({ next, restart })}
        </Stage>
      </div>
    </div>
  );
}
