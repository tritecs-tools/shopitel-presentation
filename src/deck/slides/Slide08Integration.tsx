import { motion } from "framer-motion";
import { IconPuzzle } from "../icons/DeckIcons";

export function Slide08Integration({ active }: { active: boolean }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-[28px] bg-neutral-50 px-[80px] text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
        animate={active ? { opacity: 1, scale: 1, rotate: -8 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex size-[120px] items-center justify-center rounded-[32px] bg-brand-100 text-brand-500"
      >
        <IconPuzzle />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={active ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        className="text-[38px] font-extrabold text-neutral-900"
      >
        يتكامل مع منظومتك الحالية
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={active ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
        className="max-w-[560px] text-[17px] leading-[1.8] text-neutral-600"
      >
        يعمل التطبيق كامتداد تشغيلي مباشر يربط بين نظام إدارة متجرك وعمليات التنفيذ داخل المستودع — دون تغيير في بنيتك التقنية القائمة.
      </motion.p>
    </div>
  );
}
