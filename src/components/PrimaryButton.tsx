import type { ReactNode } from "react";

export function PrimaryButton({
  children,
  tone = "brand",
  onClick,
}: {
  children: ReactNode;
  tone?: "brand" | "success";
  onClick?: () => void;
}) {
  const bg = tone === "success" ? "bg-success-500" : "bg-brand-500";
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      className={`flex h-[56px] w-full items-center justify-center rounded-full ${bg} px-[36px] text-[18px] font-medium text-neutral-50 cursor-pointer`}
    >
      {children}
    </button>
  );
}
