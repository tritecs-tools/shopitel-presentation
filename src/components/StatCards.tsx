import { iconBox, iconScan, iconCategory } from "./icons";

export function StatCards({ batchSize, skus, totalItems }: { batchSize: number; skus: number; totalItems: number }) {
  const cards = [
    { icon: iconBox, value: batchSize, label: "Batch Size", color: "text-brand-400" },
    { icon: iconScan, value: skus, label: "SKUs", color: "text-brand-400" },
    { icon: iconCategory, value: totalItems, label: "Total Items", color: "text-accent-orange" },
  ];
  return (
    <div className="flex w-full gap-[8px]">
      {cards.map((c) => (
        <div
          key={c.label}
          className="flex flex-1 flex-col items-center gap-[5px] rounded-[16px] border border-brand-300 bg-neutral-white px-[12px] py-[11px]"
        >
          <img src={c.icon} alt="" className="size-[24px]" />
          <p className={`text-[18px] font-bold ${c.color}`}>{c.value}</p>
          <p className="text-center text-[12px] font-medium text-neutral-500">{c.label}</p>
        </div>
      ))}
    </div>
  );
}

export function StageStepper({
  pickingPct,
  packingPct,
  label,
}: {
  pickingPct: number;
  packingPct: number;
  label: string;
}) {
  // Picking turns solid green once complete (hands off to the next stage);
  // Packing is the terminal stage so it stays brand-maroon even at 100%.
  const pickingColor = pickingPct >= 100 ? "bg-success-500" : "bg-gradient-to-r from-brand-500 to-[#be2626]";
  return (
    <div className="flex w-full flex-col gap-[8px]">
      <div className="flex h-[16px] w-full items-center justify-between text-[12px]">
        <p className="font-semibold text-neutral-600">Batch Stage</p>
        <p className="font-bold text-brand-500">{label}</p>
      </div>
      <div className="flex w-full gap-[10px]">
        <div className="h-[10px] flex-1 overflow-hidden rounded-full bg-neutral-200">
          <div className={`h-[10px] rounded-full ${pickingColor}`} style={{ width: `${pickingPct}%` }} />
        </div>
        <div className="h-[10px] flex-1 overflow-hidden rounded-full bg-neutral-200">
          <div className="h-[10px] rounded-full bg-gradient-to-r from-brand-500 to-[#be2626]" style={{ width: `${packingPct}%` }} />
        </div>
      </div>
    </div>
  );
}
