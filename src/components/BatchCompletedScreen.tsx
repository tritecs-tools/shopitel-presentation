import { motion } from "framer-motion";
import { PhoneFrame, StatusBar } from "./PhoneChrome";
import { useCountUp } from "./useCountUp";
import { BATCH_ID } from "../data/fixtures";

function StatTile({ value, label, delay }: { value: number; label: string; delay: number }) {
  const count = useCountUp(value, 900, delay);
  return (
    <div className="flex flex-1 flex-col items-center gap-[4px] rounded-[16px] border border-brand-300 bg-neutral-white px-[12px] py-[16px]">
      <p className="text-[28px] font-bold text-brand-500">{count}</p>
      <p className="text-center text-[12px] font-medium text-neutral-500">{label}</p>
    </div>
  );
}

export function BatchCompletedScreen({ onRestart }: { onRestart?: () => void }) {
  return (
    <PhoneFrame>
      <StatusBar />
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-[24px] px-[32px]">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex size-[120px] items-center justify-center rounded-full bg-success-100"
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              stroke="#2e9e2e"
              strokeWidth="1.5"
            />
            <motion.path
              d="M7.75 12L10.58 14.83L16.25 9.17"
              stroke="#2e9e2e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            />
          </svg>
        </motion.div>

        <div className="flex flex-col items-center gap-[8px]">
          <p className="text-[24px] font-bold text-neutral-800">Batch Completed!</p>
          <p className="text-center text-[14px] text-neutral-500">
            {BATCH_ID} — every order picked, packed, and shipped.
          </p>
        </div>

        <div className="flex w-full gap-[8px]">
          <StatTile value={8} label="Orders Shipped" delay={200} />
          <StatTile value={49} label="Items Packed" delay={350} />
        </div>
        <div className="flex w-full gap-[8px]">
          <StatTile value={27} label="SKUs Picked" delay={500} />
          <StatTile value={1} label="Auto-Flagged Pending" delay={650} />
        </div>

        {onRestart && (
          <button onClick={onRestart} className="mt-[8px] cursor-pointer text-[14px] font-medium text-neutral-400 underline">
            Restart Demo
          </button>
        )}
      </div>
    </PhoneFrame>
  );
}
