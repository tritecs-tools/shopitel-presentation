import { iconBoxSmall, iconSkuHash, iconChevronRight } from "./icons";
import type { BatchOrderRow } from "../data/types";

export function OrderRow({ order, onClick }: { order: BatchOrderRow; onClick?: () => void }) {
  return (
    <div
      onClick={
        onClick
          ? (e) => {
              e.stopPropagation();
              onClick();
            }
          : undefined
      }
      className={`relative flex w-full items-center gap-[8px] rounded-[8px] border border-neutral-200 bg-neutral-white px-[9px] pb-[13px] pt-[9px] ${onClick ? "cursor-pointer" : ""}`}
    >
      <div className="flex size-[36px] shrink-0 items-center justify-center rounded-[16px] bg-brand-500">
        <p className="text-[12px] font-bold text-neutral-white">{order.number}</p>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-[8px]">
        <div className="flex flex-col">
          <p className="text-[14px] font-semibold text-neutral-900">{order.id}</p>
          <p className="text-[12px] font-medium text-neutral-600">{order.customer}</p>
        </div>
        <div className="flex items-center gap-[12px]">
          <div className="flex items-center gap-[4px]">
            <img src={iconBoxSmall} alt="" className="size-[16px]" />
            <p className="text-[12px] text-neutral-500">{order.itemsCount} items</p>
          </div>
          <div className="flex items-center gap-[4px]">
            <img src={iconSkuHash} alt="" className="size-[10px]" />
            <p className="text-[12px] text-neutral-500">
              {order.skuCount} SKU{order.skuCount !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </div>
      {order.badge && (
        <div
          className={`absolute right-[9px] top-[9px] rounded-[4px] px-[4px] py-[4px] ${
            order.badge.tone === "success" ? "bg-success-100" : "bg-neutral-100"
          }`}
        >
          <p className={`text-[12px] font-semibold ${order.badge.tone === "success" ? "text-success-700" : "text-neutral-800"}`}>
            {order.badge.label}
          </p>
        </div>
      )}
      {onClick && <img src={iconChevronRight} alt="" className="size-[16px] shrink-0" />}
    </div>
  );
}
