import type { ReactNode } from "react";
import { motion } from "framer-motion";
import sheetHandle from "../../assets/icons/sheet-handle.svg";

export function BottomSheet({ children, onClose }: { children: ReactNode; onClose?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="absolute inset-0 z-30 flex flex-col justify-end rounded-[44px] bg-black/50"
      onClick={(e) => {
        e.stopPropagation();
        onClose?.();
      }}
    >
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="flex w-full flex-col items-center gap-[20px] rounded-t-[16px] bg-neutral-white px-[12px] py-[12px]"
      >
        <img src={sheetHandle} alt="" className="h-[4px] w-[77px]" />
        {children}
      </motion.div>
    </motion.div>
  );
}
