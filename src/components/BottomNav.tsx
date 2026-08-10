import { iconMenuBoard, iconLayer, iconInfoCircle, iconProfile } from "./icons";

export type NavTab = "queue" | "batch" | "pending" | "profile";

const tabs: { key: NavTab; label: string; icon: string }[] = [
  { key: "queue", label: "Queue", icon: iconMenuBoard },
  { key: "batch", label: "Batch", icon: iconLayer },
  { key: "pending", label: "Pending", icon: iconInfoCircle },
  { key: "profile", label: "My Profile", icon: iconProfile },
];

export function BottomNav({ active = "batch" }: { active?: NavTab }) {
  return (
    <div className="flex h-[80px] w-full items-center justify-center rounded-[20px] border border-neutral-300 bg-neutral-white px-[12px]">
      <div className="flex h-full flex-1 items-center justify-between">
        {tabs.map((tab) => {
          const isActive = tab.key === active;
          return (
            <div key={tab.key} className="flex h-full flex-1 flex-col items-center justify-center gap-[4px]">
              <img src={tab.icon} alt="" className="size-[24px]" />
              <p className={`text-[12px] leading-[16px] whitespace-nowrap ${isActive ? "font-semibold text-brand-500" : "text-neutral-600"}`}>
                {tab.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
