import type { ReactNode } from "react";

export function SlideBase({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "tint" | "dark";
  className?: string;
}) {
  const bg =
    tone === "dark"
      ? "bg-brand-600 text-neutral-white"
      : tone === "tint"
        ? "bg-brand-100"
        : "bg-neutral-50";
  return (
    <div className={`relative flex h-full w-full items-center justify-center overflow-hidden px-[64px] py-[56px] ${bg} ${className}`}>
      {children}
    </div>
  );
}

export function SlideEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-100 px-[16px] py-[6px] text-[14px] font-bold text-brand-500">
      {children}
    </span>
  );
}

export function SlideBadgeNumber({ n }: { n: number }) {
  return (
    <span className="flex size-[28px] shrink-0 items-center justify-center rounded-full bg-brand-500 text-[14px] font-bold text-neutral-white">
      {n}
    </span>
  );
}
