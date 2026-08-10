import { useState } from "react";
import { BottomSheet } from "./BottomSheet";
import { PrimaryButton } from "../PrimaryButton";
import { imgProductThumb } from "../icons";
import minusSquare from "../../assets/icons/minus-square.svg";
import addSquare from "../../assets/icons/add-square.svg";
import closeCircle from "../../assets/icons/close-circle.svg";
import type { PickupItem } from "../../data/types";

export function NotFoundQuantitySheet({
  item,
  onConfirm,
  onClose,
}: {
  item: PickupItem;
  onConfirm: (qty: number) => void;
  onClose?: () => void;
}) {
  const [qty, setQty] = useState(item.required);

  return (
    <BottomSheet onClose={onClose}>
      <div className="flex w-full items-start gap-[8px]">
        <div className="flex flex-1 flex-col gap-[2px]">
          <p className="text-[18px] font-bold text-neutral-800">Set Not Found Quantity</p>
          <p className="text-[14px] text-neutral-500">Enter the number of units that could not be found in inventory.</p>
        </div>
        <button onClick={onClose} className="cursor-pointer">
          <img src={closeCircle} alt="Close" className="size-[24px]" />
        </button>
      </div>

      <div className="flex w-full items-center gap-[8px]">
        <div className="size-[48px] shrink-0 overflow-hidden rounded-[16px] bg-brand-100">
          <img src={imgProductThumb} alt="" className="size-full object-cover" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-[4px]">
          <p className="truncate text-[16px] font-semibold text-neutral-900">{item.name}</p>
          <div className="flex flex-wrap items-center gap-[4px]">
            <span className="rounded-[4px] bg-neutral-100 px-[6px] py-[2px] text-[12px] text-neutral-600">{item.sku}</span>
            <span className="rounded-[4px] bg-[#eefaff] px-[4px] py-[2px] text-[12px] font-semibold text-[#115f80]">{item.variant}</span>
            <span className="rounded-[4px] bg-[#eefaff] px-[4px] py-[2px] text-[12px] font-semibold text-[#115f80]">{item.color}</span>
          </div>
          <p className="text-[12px] text-neutral-400">{item.barcode}</p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-[4px]">
        <p className="text-[14px] font-medium text-neutral-700">Not Found Quantity</p>
        <div className="flex w-full items-center justify-between">
          <div className="flex h-[52px] items-center overflow-hidden rounded-[8px] border border-neutral-500">
            <button
              onClick={() => setQty((q) => Math.max(0, q - 1))}
              className="flex h-full w-[48px] shrink-0 cursor-pointer items-center justify-center border-r border-neutral-500"
            >
              <img src={minusSquare} alt="Decrease" className="size-[20px]" />
            </button>
            <div className="flex h-full w-[60px] items-center justify-center">
              <p className="text-[14px] font-medium text-neutral-700">{qty}</p>
            </div>
            <button
              onClick={() => setQty((q) => Math.min(item.required, q + 1))}
              className="flex h-full w-[48px] shrink-0 cursor-pointer items-center justify-center border-l border-neutral-500"
            >
              <img src={addSquare} alt="Increase" className="size-[20px]" />
            </button>
          </div>
          <div className="flex flex-col items-end gap-[8px]">
            <p className="text-[10px] text-neutral-400">Required Quantity</p>
            <p className="text-[18px] font-bold text-success-500">{item.required}</p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <PrimaryButton onClick={() => onConfirm(qty)}>Confirm Not Found Quantity</PrimaryButton>
      </div>
    </BottomSheet>
  );
}
