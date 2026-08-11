import type { ReactNode } from "react";

/** Print-only: same look as the live FeatureSlide, but no rotate transform on the
 *  phone wrapper (transforms + overflow-hidden don't reliably clip in Chromium's PDF export). */
export function PrintFeatureSlide({
  number,
  eyebrow,
  headline,
  caption,
  phone,
}: {
  number: number;
  eyebrow: string;
  headline: string;
  caption: string;
  phone: ReactNode;
}) {
  return (
    <div className="flex h-full w-full items-center justify-between gap-[40px] bg-neutral-50 px-[80px]">
      <div className="relative shrink-0">
        <div className="absolute inset-0 -z-10 translate-y-[24px] scale-[0.94] rounded-[60px] bg-brand-100 blur-2xl" />
        {phone}
      </div>

      <div className="flex w-[42%] flex-col items-start gap-[20px]">
        <div className="flex items-center gap-[10px]">
          <span className="flex size-[30px] items-center justify-center rounded-full bg-brand-500 text-[14px] font-bold text-neutral-white">
            {number}
          </span>
          <span className="text-[14px] font-bold text-brand-500">{eyebrow}</span>
        </div>
        <h2 className="text-[42px] font-extrabold leading-[1.2] text-neutral-900">{headline}</h2>
        <p className="max-w-[420px] text-[18px] leading-[1.8] text-neutral-600">{caption}</p>
      </div>
    </div>
  );
}
