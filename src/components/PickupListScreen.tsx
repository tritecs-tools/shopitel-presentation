import { AnimatePresence, motion } from "framer-motion";
import { PhoneFrame, StatusBar, AppHeader } from "./PhoneChrome";
import { PrimaryButton } from "./PrimaryButton";
import { PickupItemCard } from "./PickupItemCard";
import { Toast, type ToastTone } from "./Toast";
import { imgBarcodeScan } from "./icons";
import type { PickupItem } from "../data/types";

export interface PickupItemRuntime extends PickupItem {
  picked: number;
}

export function PickupListScreen({
  items,
  toast,
  scanFlashKey,
  onNotFound,
  onBack,
  onComplete,
}: {
  items: PickupItemRuntime[];
  toast?: { text: string; tone: ToastTone } | null;
  scanFlashKey?: number;
  onNotFound?: (item: PickupItemRuntime) => void;
  onBack?: () => void;
  onComplete?: () => void;
}) {
  const totalRequired = items.reduce((s, i) => s + i.required, 0);
  const totalPicked = items.reduce((s, i) => s + i.picked, 0);
  const skusPicked = items.filter((i) => i.state === "picked").length;
  const pct = totalRequired === 0 ? 0 : Math.round((totalPicked / totalRequired) * 100);
  const allDone = items.every((i) => i.state !== "pending") && items.some((i) => i.state === "picked");

  return (
    <PhoneFrame>
      <StatusBar />
      <AppHeader title="Pickup List" showBack onBack={onBack} />
      <div className="relative flex w-full flex-1 flex-col items-center gap-[12px] overflow-y-auto px-[24px] pb-[12px]">
        <div className="flex w-full flex-col gap-[8px] border-b border-[#f3f4f6] pb-[12px] pt-[4px]">
          <div className="flex w-full items-center justify-between text-[12px]">
            <p className="font-semibold text-neutral-600">
              {skusPicked}/{items.length} SKUs • {totalPicked}/{totalRequired} items
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

        {allDone && (
          <div className="flex w-full items-center justify-center gap-[8px] rounded-[12px] bg-success-100 py-[10px] text-[14px] font-semibold text-success-700">
            ✓ All items picked! Ready to complete.
          </div>
        )}

        <div className="flex w-full flex-col gap-[12px]">
          {items.map((item) => (
            <PickupItemCard key={item.sku} item={item} picked={item.picked} onNotFound={() => onNotFound?.(item)} />
          ))}
        </div>

        {toast && <Toast text={toast.text} tone={toast.tone} />}
      </div>
      {allDone && (
        <div className="w-full px-[24px] pb-[16px] pt-[4px]">
          <PrimaryButton tone="success" onClick={onComplete}>
            Complete Pickup
          </PrimaryButton>
        </div>
      )}
    </PhoneFrame>
  );
}
