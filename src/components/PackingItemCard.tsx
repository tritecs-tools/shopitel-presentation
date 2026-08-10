import { motion } from "framer-motion";
import { imgProductThumb, iconCloseSquare } from "./icons";
import type { PackingLineItem } from "../data/types";

export function PackingItemCard({ item, justCompleted }: { item: PackingLineItem; justCompleted?: boolean }) {
  const packed = item.packed ? item.qty : 0;

  return (
    <motion.div
      layout
      initial={false}
      animate={{
        backgroundColor: item.packed ? "#f2fbf2" : "#ffffff",
        borderColor: item.packed ? "#2e9e2e" : "#e5e5e5",
        scale: justCompleted ? [1, 1.02, 1] : 1,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex w-full flex-col items-start gap-[10px] rounded-[16px] border p-[16px]"
    >
      <div className="flex w-full items-center gap-[12px]">
        <div className="size-[48px] shrink-0 overflow-hidden rounded-[16px] bg-brand-100">
          <img src={imgProductThumb} alt="" className="size-full object-cover" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-[4px]">
          <p className="truncate text-[14px] font-semibold text-neutral-800">{item.name}</p>
          <div className="flex flex-wrap items-center gap-[4px]">
            <span className="rounded-[4px] bg-neutral-100 px-[6px] py-[2px] text-[12px] text-neutral-600">{item.sku}</span>
            <span className="rounded-[4px] bg-[#eefaff] px-[4px] py-[2px] text-[12px] font-semibold text-[#115f80]">{item.variant}</span>
            <span className="rounded-[4px] bg-[#eefaff] px-[4px] py-[2px] text-[12px] font-semibold text-[#115f80]">{item.color}</span>
          </div>
          <p className="text-[12px] text-neutral-400">{item.barcode}</p>
        </div>
        <div className="flex h-[43px] shrink-0 flex-col items-center justify-center gap-[2px]">
          <p className={`text-[18px] font-bold ${item.packed ? "text-success-500" : "text-brand-500"}`}>
            {packed}/{item.qty}
          </p>
          <p className="text-[10px] text-neutral-400">packed</p>
        </div>
      </div>
      <div className="h-[6px] w-full overflow-hidden rounded-full bg-neutral-100">
        <motion.div
          className={`h-[6px] rounded-full ${item.packed ? "bg-success-500" : "bg-brand-400"}`}
          initial={false}
          animate={{ width: item.packed ? "100%" : "0%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
      {item.packed ? (
        <div className="flex w-full items-center justify-center gap-[8px] rounded-[16px] bg-success-100 py-[8px] text-[12px] font-semibold text-success-700">
          ✓ Packing Completed
        </div>
      ) : (
        <div className="flex w-full items-center justify-center gap-[4px] rounded-full border border-brand-600 bg-brand-100 py-[8px] text-[14px] font-medium text-brand-600">
          <img src={iconCloseSquare} alt="" className="size-[16px]" />
          Not Found
        </div>
      )}
    </motion.div>
  );
}
