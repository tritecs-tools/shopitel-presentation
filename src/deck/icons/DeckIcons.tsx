import type { ReactNode } from "react";

const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function IconStopwatch() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common}>
      <path d="M10 2h4" />
      <path d="M12 5v2" />
      <circle cx="12" cy="14" r="8" />
      <path d="M12 10v4l3 2" />
    </svg>
  );
}

export function IconBarcode() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common}>
      <path d="M4 5v14M8 5v14M11 5v14M15 5v14M17.5 5v14M20 5v14" strokeWidth="1.6" />
    </svg>
  );
}

export function IconMobile() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.4" />
      <path d="M11 18.3h2" />
    </svg>
  );
}

export function IconTruck() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common}>
      <path d="M2 7h11v10H2z" />
      <path d="M13 10h4l4 3.2V17h-8z" />
      <circle cx="6.5" cy="18.5" r="1.6" />
      <circle cx="16.5" cy="18.5" r="1.6" />
    </svg>
  );
}

export function IconSmiley() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14c1 1.3 2.2 2 3.5 2s2.5-.7 3.5-2" />
      <path d="M8.5 9.5h.01M15.5 9.5h.01" strokeWidth="2.6" />
    </svg>
  );
}

export function IconBarChart() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common}>
      <path d="M4 20V10M11 20V4M18 20v-7" />
      <path d="M2.5 20h19" />
    </svg>
  );
}

export function IconTarget() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconSpeedometer() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common}>
      <path d="M3.5 15.5a8.5 8.5 0 1 1 17 0" />
      <path d="M12 15.5 16 9" />
    </svg>
  );
}

export function IconPuzzle() {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30" {...common} strokeWidth="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

export function IconWarningTriangle() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common}>
      <path d="M12 3.5 21.5 20h-19Z" />
      <path d="M12 9.5v4.5" />
      <path d="M12 17h.01" strokeWidth="2.6" />
    </svg>
  );
}

export function IconEyeOff() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common}>
      <path d="M3 3l18 18" />
      <path d="M10.6 5.2A10.4 10.4 0 0 1 12 5c5 0 9 4.2 10.5 7-.6 1.1-1.5 2.4-2.7 3.6M6.2 6.8C4 8.1 2.5 10.1 1.5 12c1.5 2.8 5.5 7 10.5 7 1.4 0 2.7-.3 3.9-.9" />
      <path d="M9.9 10a3 3 0 0 0 4.1 4.1" />
    </svg>
  );
}

export function IconClock() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function IconArrowLeft() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...common}>
      <path d="M19 12H5" />
      <path d="M11 6l-6 6 6 6" />
    </svg>
  );
}

export function IconBox() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" {...common}>
      <path d="M3.5 8 12 4l8.5 4-8.5 4-8.5-4Z" />
      <path d="M3.5 8v8L12 20l8.5-4V8" />
      <path d="M12 12v8" />
    </svg>
  );
}

export function IconBadge({
  icon,
  size = 56,
  tone = "brand",
}: {
  icon: ReactNode;
  size?: number;
  tone?: "brand" | "white";
}) {
  const bg = tone === "white" ? "bg-white/15 text-neutral-white" : "bg-brand-100 text-brand-500";
  return (
    <div
      style={{ width: size, height: size }}
      className={`flex shrink-0 items-center justify-center rounded-[18px] ${bg}`}
    >
      {icon}
    </div>
  );
}
