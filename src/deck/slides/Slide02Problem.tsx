import { motion } from "framer-motion";
import { IconWarningTriangle, IconEyeOff, IconClock } from "../icons/DeckIcons";

const PAINS = [
  {
    icon: <IconWarningTriangle />,
    title: "أخطاء يدوية متكررة",
    body: "الإدخال والعد اليدوي للكميات يفتحان الباب لأخطاء تُكلّف وقتًا ومالًا مع كل طلب.",
  },
  {
    icon: <IconEyeOff />,
    title: "غياب الرؤية اللحظية",
    body: "لا طريقة لمعرفة حالة طلب أو دفعة إلا بالسؤال المباشر أو المتابعة يدويًا.",
  },
  {
    icon: <IconClock />,
    title: "تنفيذ بطيء للطلبات",
    body: "خطوات جمع المنتجات والتعبئة والشحن منفصلة وبطيئة، فتتأخر الطلبات عن موعدها.",
  },
];

export function Slide02Problem({ active }: { active: boolean }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-[48px] bg-neutral-50 px-[80px]">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={active ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-[10px] text-center"
      >
        <span className="text-[15px] font-bold text-brand-500">قبل Shopitel</span>
        <h2 className="text-[38px] font-extrabold leading-tight text-neutral-900">هل ما زال مستودعك يعمل بالطريقة القديمة؟</h2>
      </motion.div>

      <div className="grid w-full max-w-[1040px] grid-cols-3 gap-[24px]">
        {PAINS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: "easeOut" }}
            className="flex flex-col items-center gap-[16px] rounded-[24px] border border-danger-100 bg-white p-[28px] text-center shadow-[0_18px_40px_-24px_rgba(122,30,42,0.25)]"
          >
            <div className="flex size-[64px] items-center justify-center rounded-[20px] bg-danger-50 text-danger-700">{p.icon}</div>
            <p className="text-[18px] font-bold text-neutral-900">{p.title}</p>
            <p className="text-[14px] leading-[1.7] text-neutral-500">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
