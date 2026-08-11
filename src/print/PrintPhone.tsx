import type { ReactNode } from "react";

const PHONE_W = 402;
const PHONE_H = 874;

/**
 * Print-only phone wrapper. Uses `zoom` (a real layout resize) instead of
 * `transform: scale()` — Chromium's print/PDF pipeline doesn't reliably clip
 * `overflow: hidden` on elements inside a `transform`-scaled ancestor, so the
 * live deck's DemoPlayer/StaticPhone (which use transform) bleed content past
 * the phone frame when printed. `zoom` avoids the transform entirely.
 */
export function PrintPhone({ children, scale = 1 }: { children: ReactNode; scale?: number }) {
  return (
    <div style={{ width: PHONE_W * scale, height: PHONE_H * scale, overflow: "hidden" }} className="relative shrink-0">
      <div style={{ width: PHONE_W, height: PHONE_H, zoom: scale }}>{children}</div>
    </div>
  );
}
