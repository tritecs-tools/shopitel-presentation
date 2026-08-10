import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function FeatureSlide({
  active,
  number,
  eyebrow,
  headline,
  caption,
  phone,
  extra,
}: {
  active: boolean;
  number: number;
  eyebrow: string;
  headline: string;
  caption: string;
  phone: ReactNode;
  extra?: ReactNode;
}) {
  return (
    <div className="flex h-full w-full items-center justify-between gap-[40px] bg-neutral-50 px-[80px]">
      <motion.div
        initial={{ opacity: 0, x: -30, rotate: -3 }}
        animate={active ? { opacity: 1, x: 0, rotate: -3 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative shrink-0"
        style={{ transformOrigin: "bottom center" }}
      >
        <div className="absolute inset-0 -z-10 translate-y-[24px] scale-[0.94] rounded-[60px] bg-brand-100 blur-2xl" />
        {phone}
      </motion.div>

      <div className="flex w-[42%] flex-col items-start gap-[20px]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-[10px]"
        >
          <span className="flex size-[30px] items-center justify-center rounded-full bg-brand-500 text-[14px] font-bold text-neutral-white">
            {number}
          </span>
          <span className="text-[14px] font-bold text-brand-500">{eyebrow}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="text-[42px] font-extrabold leading-[1.2] text-neutral-900"
        >
          {headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
          className="max-w-[420px] text-[18px] leading-[1.8] text-neutral-600"
        >
          {caption}
        </motion.p>

        {extra}
      </div>
    </div>
  );
}
