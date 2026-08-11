import type { ReactNode } from "react";

const DECK_W = 1440;
const DECK_H = 810;

/** One fixed-size, non-scaled page for the printable/PDF deck. */
export function PrintPage({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden font-arabic"
      dir="rtl"
      style={{ width: DECK_W, height: DECK_H, pageBreakAfter: "always", breakAfter: "page" }}
    >
      {children}
    </div>
  );
}
