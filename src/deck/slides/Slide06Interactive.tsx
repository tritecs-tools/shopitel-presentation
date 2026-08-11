import { useState } from "react";
import { motion } from "framer-motion";
import type { Step } from "../../demo/steps";
import { DemoPlayer } from "../DemoPlayer";

export function Slide06Interactive({ active, steps }: { active: boolean; steps: Step[] }) {
  const [paused, setPaused] = useState(false);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-[12px] bg-neutral-50 px-[80px] py-[18px] pl-[110px]">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={active ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-[6px] text-center"
      >
        <span className="text-[14px] font-bold text-brand-500">تجربة تفاعلية</span>
        <h2 className="text-[32px] font-extrabold text-neutral-900">لمحة عن التطبيق</h2>
        <p className="max-w-[520px] text-[15px] leading-[1.6] text-neutral-600">
          من بدء دفعة الالتقاط وحتى إكمالها — بنفس الشاشات الفعلية للتطبيق.
        </p>
      </motion.div>

      <div className="flex flex-col items-center gap-[14px]">
        <DemoPlayer steps={steps} mode="loop" intervalMs={3200} scale={0.6} active={active} paused={paused} />
        <button
          onClick={() => setPaused((p) => !p)}
          className="flex cursor-pointer items-center justify-center rounded-full bg-brand-500 px-[20px] py-[10px] text-[13px] font-semibold text-neutral-white shadow-lg transition-colors hover:bg-brand-600"
        >
          {paused ? "اضغط للمتابعة" : "اضغط للإيقاف المؤقت"}
        </button>
      </div>
    </div>
  );
}
