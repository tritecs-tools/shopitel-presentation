import { BottomSheet } from "./BottomSheet";
import { PrimaryButton } from "../PrimaryButton";
import searchBg from "../../assets/icons/search-bg.svg";
import searchIllustration from "../../assets/icons/search-illustration.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import boxIcon from "../../assets/icons/box-small.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import closeCircle from "../../assets/icons/close-circle.svg";

export interface AffectedOrder {
  id: string;
  customer: string;
  date: string;
  itemsCount: number;
  itemLabel: string;
}

export function SomeItemsUnavailableSheet({
  required,
  available,
  missing,
  orders,
  onConfirm,
  onClose,
}: {
  required: number;
  available: number;
  missing: number;
  orders: AffectedOrder[];
  onConfirm: () => void;
  onClose?: () => void;
}) {
  return (
    <BottomSheet onClose={onClose}>
      <div className="flex w-full items-center justify-between px-[24px]">
        <div className="size-[24px]" />
        <button onClick={onClose} className="cursor-pointer">
          <img src={closeCircle} alt="Close" className="size-[24px]" />
        </button>
      </div>

      <div className="flex w-full flex-col items-center gap-[16px] px-[24px]">
        <div className="relative h-[100px] w-[102px]">
          <img src={searchBg} alt="" className="absolute inset-0 size-full" />
          <img src={searchIllustration} alt="" className="absolute left-[18%] top-[9%] w-[67%]" />
        </div>
        <p className="text-center text-[20px] font-bold text-neutral-700">Some items are not available</p>
        <p className="text-center text-[14px] font-semibold">
          <span className="text-neutral-900">Required: {required}</span>
          <span className="text-neutral-900"> • </span>
          <span className="text-success-500">Available: {available}</span>
          <span className="text-neutral-900"> • </span>
          <span className="text-brand-500">Missing: {missing}</span>
        </p>
        <p className="text-center text-[16px] text-neutral-600">
          The system has identified orders that cannot be fulfilled with the available stock. These orders will be marked as{" "}
          <span className="font-bold">Pending</span> and moved to the Pending Orders page.
          <br />
          <br />
          You only need to review and confirm the selection.
        </p>
        <div className="w-full rounded-[8px] bg-neutral-100 p-[12px] text-center text-[14px] font-semibold text-[#115f80]">
          Pending orders will be removed from this batch and can be added to the next batch if stock becomes available.
        </div>

        <div className="flex w-full flex-col gap-[12px]">
          {orders.map((order) => (
            <div key={order.id} className="flex w-full items-start gap-[12px] rounded-[8px] border-2 border-brand-500 p-[8px]">
              <div className="flex flex-1 flex-col gap-[8px]">
                <div>
                  <p className="text-[14px] font-semibold text-neutral-900">{order.id}</p>
                  <p className="text-[12px] font-medium text-neutral-600">{order.customer}</p>
                </div>
                <div className="flex items-center gap-[12px]">
                  <div className="flex items-center gap-[4px]">
                    <img src={calendarIcon} alt="" className="size-[16px]" />
                    <p className="text-[12px] text-neutral-500">{order.date}</p>
                  </div>
                  <div className="flex items-center gap-[4px]">
                    <img src={boxIcon} alt="" className="size-[16px]" />
                    <p className="text-[12px] text-neutral-500">{order.itemsCount} items</p>
                  </div>
                </div>
                <div className="rounded-[4px] bg-brand-100 px-[4px] py-[4px]">
                  <p className="text-[12px] font-semibold text-brand-500">{order.itemLabel}</p>
                </div>
              </div>
              <div className="flex items-center gap-[4px] pt-[4px]">
                <p className="text-[14px] font-medium text-brand-500">View Details</p>
                <img src={arrowRight} alt="" className="size-[18px]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-[24px] pb-[8px]">
        <PrimaryButton onClick={onConfirm}>Confirm Pending Orders</PrimaryButton>
      </div>
    </BottomSheet>
  );
}
