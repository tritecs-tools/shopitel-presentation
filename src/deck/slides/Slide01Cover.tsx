import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ShopitelLogo } from "../Logo";
import { StaticPhone } from "../DemoPlayer";

const PILLS = ["الدفعات", "جمع المنتجات", "التعبئة", "الطلبات المعلقة", "الشحن"];

export function Slide01Cover({ active, hero }: { active: boolean; hero: ReactNode }) {
  return (
    <div className="relative flex h-full w-full items-center overflow-hidden bg-neutral-50 px-[80px]">
      <svg className="pointer-events-none absolute -left-[120px] -top-[160px] opacity-[0.06]" width="520" height="520" viewBox="0 0 24 24">
        <path d="M4 5v14M8 5v14M11 5v14M15 5v14M17.5 5v14M20 5v14" stroke="var(--color-brand-500)" strokeWidth="0.8" />
      </svg>
      <div
        className="pointer-events-none absolute inset-y-0 left-[-10%] w-[55%] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-brand-100), transparent 70%)" }}
      />

      <div className="relative z-10 flex w-[46%] flex-col items-start gap-[28px]">
        <ShopitelLogo size={44} />

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[52px] font-extrabold leading-[1.15] text-neutral-900"
        >
          تطبيق إدارة المتجر
          <br />
          للجوال
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
          className="max-w-[480px] text-[20px] leading-[1.7] text-neutral-600"
        >
          نفّذ طلبات المتجر من داخل المستودع بسرعة أعلى ودقة أفضل، وامنح فريقك تجربة تشغيل أكثر سلاسة.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-[10px] rounded-full border border-brand-300 bg-white px-[14px] py-[10px]"
        >
          {PILLS.map((p, i) => (
            <span key={p} className="flex items-center gap-[10px] text-[14px] font-semibold text-brand-500">
              {p}
              {i < PILLS.length - 1 && <span className="text-brand-300">•</span>}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -30, rotate: -2 }}
        animate={active ? { opacity: 1, x: 0, rotate: -6 } : {}}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="absolute left-[8%] top-1/2 z-10 -translate-y-1/2"
        style={{ transformOrigin: "bottom center" }}
      >
        <StaticPhone scale={0.62}>{hero}</StaticPhone>
      </motion.div>
    </div>
  );
}
