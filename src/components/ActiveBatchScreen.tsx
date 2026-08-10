import type { ReactNode } from "react";
import { PhoneFrame, StatusBar, AppHeader } from "./PhoneChrome";
import { StatCards, StageStepper } from "./StatCards";
import { OrderRow } from "./OrderRow";
import { BottomNav } from "./BottomNav";
import { PrimaryButton } from "./PrimaryButton";
import { BATCH_ID } from "../data/fixtures";
import type { BatchOrderRow } from "../data/types";

export function ActiveBatchScreen({
  batchSize,
  skus,
  totalItems,
  pickingPct,
  packingPct,
  stageLabel,
  orders,
  listHeading,
  subheading,
  banner,
  ctaLabel,
  onCta,
  onSelectOrder,
}: {
  batchSize: number;
  skus: number;
  totalItems: number;
  pickingPct: number;
  packingPct: number;
  stageLabel: string;
  orders: BatchOrderRow[];
  listHeading?: string;
  subheading?: string;
  banner?: ReactNode;
  ctaLabel?: string;
  onCta?: () => void;
  onSelectOrder?: (order: BatchOrderRow) => void;
}) {
  return (
    <PhoneFrame>
      <StatusBar />
      <AppHeader title="Active Batch" />
      <div className="flex w-full flex-1 flex-col items-center gap-[20px] overflow-y-auto px-[24px] pb-[12px]">
        <div className="flex w-full flex-col gap-[8px]">
          <p className="w-full text-[16px] font-bold text-neutral-700">{BATCH_ID}</p>
          <StatCards batchSize={batchSize} skus={skus} totalItems={totalItems} />
        </div>
        <StageStepper pickingPct={pickingPct} packingPct={packingPct} label={stageLabel} />
        <div className="flex w-full flex-col gap-[12px]">
          <div className="flex w-full items-center justify-between text-[14px] font-bold text-neutral-700">
            <p>{listHeading ?? "Batch Orders"}</p>
            <p>{orders.length} Orders</p>
          </div>
          {subheading && <p className="w-full text-[14px] text-neutral-500">{subheading}</p>}
          <div className="flex w-full flex-col gap-[8px]">
            {orders.map((order) => (
              <OrderRow key={order.id} order={order} onClick={onSelectOrder ? () => onSelectOrder(order) : undefined} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-[4px] px-[12px] pb-[4px]">
        {banner}
        {ctaLabel && (
          <div className="w-full py-[8px]">
            <PrimaryButton onClick={onCta}>{ctaLabel}</PrimaryButton>
          </div>
        )}
        <BottomNav active="batch" />
      </div>
    </PhoneFrame>
  );
}
