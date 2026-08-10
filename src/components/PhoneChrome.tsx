import type { ReactNode } from "react";
import { iconArrowCircleLeft, iconWifi, iconCellular, iconBatteryCap } from "./icons";

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-[402px] h-[874px] rounded-[44px] bg-neutral-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] overflow-hidden ring-1 ring-black/5 flex flex-col">
      {children}
    </div>
  );
}

export function StatusBar() {
  return (
    <div className="relative h-[54px] w-full shrink-0 bg-neutral-white flex items-center justify-between px-[28px]">
      <p className="font-semibold text-[17px] text-black">9:41</p>
      <div className="flex items-center gap-[6px]">
        <img src={iconCellular} alt="" className="h-[11px] w-[19px]" />
        <img src={iconWifi} alt="" className="h-[11px] w-[17px]" />
        <div className="relative h-[11px] w-[25px] rounded-[4.3px] border border-black/35 flex items-center px-[1.5px]">
          <div className="h-[8px] w-[21px] rounded-[2.5px] bg-black" />
          <img src={iconBatteryCap} alt="" className="absolute -right-[2.5px] h-[4px]" />
        </div>
      </div>
    </div>
  );
}

export function AppHeader({
  title,
  subtitle,
  showBack = false,
  onBack,
}: {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
}) {
  return (
    <div className="relative h-[56px] w-full shrink-0 bg-neutral-white flex items-center justify-center px-[24px]">
      {showBack && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onBack?.();
          }}
          className="absolute left-[24px] size-[32px] flex items-center justify-center cursor-pointer"
        >
          <img src={iconArrowCircleLeft} alt="Back" className="size-[24px]" />
        </button>
      )}
      <div className="flex flex-col items-center gap-[2px]">
        <p className="font-bold text-[20px] leading-[24px] text-neutral-700">{title}</p>
        {subtitle && <p className="text-[12px] leading-[16px] text-neutral-700">{subtitle}</p>}
      </div>
    </div>
  );
}
