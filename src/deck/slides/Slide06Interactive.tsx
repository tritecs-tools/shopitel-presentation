import { motion } from "framer-motion";
import type { Step } from "../../demo/steps";
import { DemoPlayer } from "../DemoPlayer";

export function Slide06Interactive({ active, steps }: { active: boolean; steps: Step[] }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-[14px] bg-neutral-50 px-[80px] py-[22px]">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={active ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-[6px] text-center"
      >
        <span className="text-[14px] font-bold text-brand-500">تجربة تفاعلية</span>
        <h2 className="text-[32px] font-extrabold text-neutral-900">جرّب بنفسك</h2>
        <p className="max-w-[520px] text-[15px] leading-[1.6] text-neutral-600">
          هذا هو التطبيق الفعلي. اضغط في أي مكان على الشاشة للتنقل بين خطوات دفعة التقاط حقيقية، من البداية وحتى الإكمال.
        </p>
      </motion.div>

      <div className="relative">
        <DemoPlayer steps={steps} mode="interactive" scale={0.68} active={active} />
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -bottom-[8px] left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-[16px] py-[8px] text-[13px] font-semibold text-neutral-white shadow-lg"
        >
          اضغط للمتابعة ↑
        </motion.div>
      </div>
    </div>
  );
}
