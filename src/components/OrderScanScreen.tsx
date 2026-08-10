import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneFrame, StatusBar, AppHeader } from "./PhoneChrome";
import { PackingItemCard } from "./PackingItemCard";
import { imgBarcodeScan } from "./icons";
import type { PackingOrder } from "../data/types";

export function OrderScanScreen({
  order,
  scanFlashKey,
  onBack,
  footer,
}: {
  order: PackingOrder;
  scanFlashKey?: number;
  onBack?: () => void;
  footer?: ReactNode;
}) {
  const totalQty = order.items.reduce((s, i) => s + i.qty, 0);
  const packedQty = order.items.reduce((s, i) => s + (i.packed ? i.qty : 0), 0);
  const skusPacked = order.items.filter((i) => i.packed).length;
  const pct = totalQty === 0 ? 0 : Math.round((packedQty / totalQty) * 100);

  return (
    <PhoneFrame>
      <StatusBar />
      <AppHeader title={order.id} subtitle={order.customer} showBack onBack={onBack} />
      <div className="relative flex w-full flex-1 flex-col items-center gap-[12px] overflow-y-auto px-[24px] pb-[12px]">
        <div className="flex w-full flex-col gap-[8px] border-b border-[#f3f4f6] pb-[12px] pt-[4px]">
          <div className="flex w-full items-center justify-between text-[12px]">
            <p className="font-semibold text-neutral-600">
              {skusPacked}/{order.items.length} SKUs • {packedQty}/{totalQty} items
            </p>
            <p className="font-bold text-brand-500">{pct}%</p>
          </div>
          <div className="h-[10px] w-full overflow-hidden rounded-full bg-[#f3f4f6]">
            <motion.div
              className="h-[10px] rounded-full bg-gradient-to-r from-brand-500 to-[#be2626]"
              initial={false}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
          <div className="relative w-full overflow-hidden rounded-[16px] shadow-sm">
            <img src={imgBarcodeScan} alt="Barcode scanner" className="h-[130px] w-full object-cover" />
            <AnimatePresence>
              {scanFlashKey ? (
                <motion.div
                  key={scanFlashKey}
                  initial={{ opacity: 0.9 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 bg-white"
                />
              ) : null}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex w-full flex-col gap-[12px]">
          {order.items.map((item) => (
            <PackingItemCard key={item.sku} item={item} />
          ))}
        </div>
      </div>
      {footer}
    </PhoneFrame>
  );
}
