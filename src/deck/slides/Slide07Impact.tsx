import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useCountUp } from "../../components/useCountUp";
import { IconSmiley, IconBarChart, IconTarget, IconSpeedometer } from "../icons/DeckIcons";

const STATS = [
  { icon: <IconSmiley />, value: 35, sign: "+", unit: "%", label: "تجربة عميل أفضل", sub: "رضا أعلى من دقة وسرعة التسليم" },
  { icon: <IconBarChart />, value: 100, sign: "", unit: "%", label: "متابعة لحظية", sub: "رؤية كاملة لحالة كل طلب ودفعة" },
  { icon: <IconTarget />, value: 60, sign: "-", unit: "%", label: "أخطاء أقل", sub: "في جمع المنتجات والتعبئة بفضل الباركود" },
  { icon: <IconSpeedometer />, value: 45, sign: "+", unit: "%", label: "إنجاز أسرع للطلبات", sub: "تسريع دورة تنفيذ الطلبات الكاملة" },
];

function StatCard({
  icon,
  value,
  sign,
  unit,
  label,
  sub,
  delay,
  active,
}: {
  icon: ReactNode;
  value: number;
  sign: string;
  unit: string;
  label: string;
  sub: string;
  delay: number;
  active: boolean;
}) {
  const count = useCountUp(active ? value : 0, 1100, delay);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000, ease: "easeOut" }}
      className="flex flex-col items-center gap-[12px] rounded-[24px] border border-brand-300 bg-white p-[28px] text-center"
    >
      <div className="flex size-[56px] items-center justify-center rounded-[18px] bg-brand-100 text-brand-500">{icon}</div>
      <p className="font-sans text-[38px] font-extrabold text-brand-500 tabular-nums">
        {sign}
        {count}
        {unit}
      </p>
      <p className="text-[17px] font-bold text-neutral-900">{label}</p>
      <p className="text-[13px] leading-[1.6] text-neutral-500">{sub}</p>
    </motion.div>
  );
}

export function Slide07Impact({ active }: { active: boolean }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-[40px] bg-neutral-50 px-[80px]">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={active ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-[8px] text-center"
      >
        <span className="text-[15px] font-bold text-brand-500">الأثر التجاري</span>
        <h2 className="text-[38px] font-extrabold text-neutral-900">فوائد ملموسة من أول دفعة</h2>
      </motion.div>

      <div className="grid w-full max-w-[1080px] grid-cols-4 gap-[20px]">
        {STATS.map((s, i) => (
          <StatCard key={s.label} {...s} delay={200 + i * 150} active={active} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-[12px] text-neutral-400"
      >
        أرقام تقديرية توضّح الأثر المتوقع بناءً على نتائج مشابهة، وتُحدَّث بعد التنفيذ الفعلي لدى المتجر.
      </motion.p>
    </div>
  );
}
