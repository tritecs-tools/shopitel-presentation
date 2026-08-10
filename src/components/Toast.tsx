import { AnimatePresence, motion } from "framer-motion";

export type ToastTone = "success" | "warning";

export function Toast({ text, tone }: { text: string; tone: ToastTone }) {
  const bg = tone === "success" ? "bg-success-500" : "bg-warning-500";
  return (
    <AnimatePresence>
      <motion.div
        key={text}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`absolute bottom-[8px] left-[8px] right-[8px] z-20 flex items-center justify-between rounded-[12px] px-[16px] py-[12px] text-[14px] font-medium text-white ${bg}`}
      >
        <span>{text}</span>
        <span className="text-white/80">✕</span>
      </motion.div>
    </AnimatePresence>
  );
}
