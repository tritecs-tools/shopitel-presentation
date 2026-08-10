import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type TransitionKind = "push" | "crossfade";

const variants = {
  push: {
    initial: { x: 60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -60, opacity: 0 },
  },
  crossfade: {
    initial: { opacity: 0, scale: 0.99 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.01 },
  },
};

export function Stage({
  stepKey,
  transition,
  onAdvance,
  children,
}: {
  stepKey: string | number;
  transition: TransitionKind;
  onAdvance: () => void;
  children: ReactNode;
}) {
  const v = variants[transition];
  return (
    <div className="relative h-[874px] w-[402px]">
      <AnimatePresence initial={false}>
        <motion.div
          key={stepKey}
          initial={v.initial}
          animate={v.animate}
          exit={v.exit}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 z-40 cursor-pointer" onClick={onAdvance} />
    </div>
  );
}
