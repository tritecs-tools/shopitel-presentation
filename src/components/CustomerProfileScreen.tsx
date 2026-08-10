import { PhoneFrame, StatusBar, AppHeader } from "./PhoneChrome";
import { PrimaryButton } from "./PrimaryButton";
import { imgProductThumb, iconCall, iconSms, iconLocationTick, iconBill, iconTickCircle } from "./icons";
import type { PackingOrder } from "../data/types";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export function CustomerProfileScreen({
  order,
  onBack,
  onMarkShipped,
}: {
  order: PackingOrder;
  onBack?: () => void;
  onMarkShipped?: () => void;
}) {
  const totalItems = order.items.reduce((s, i) => s + i.qty, 0);

  return (
    <PhoneFrame>
      <StatusBar />
      <AppHeader title={order.id} subtitle={order.customer} showBack onBack={onBack} />
      <div className="flex w-full flex-1 flex-col gap-[16px] overflow-y-auto px-[24px] pt-[24px] pb-[12px]">
        <div className="flex w-full items-center gap-[12px] rounded-[8px] border border-neutral-300 bg-neutral-white px-[12px] py-[16px]">
          <div className="flex size-[52px] shrink-0 items-center justify-center rounded-full bg-neutral-50">
            <p className="text-[16px] font-semibold text-neutral-800">{initials(order.customer)}</p>
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="text-[16px] font-medium text-neutral-700">{order.customer}</p>
            <p className="text-[14px] text-neutral-500">{order.id}</p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-[8px]">
          <p className="text-[14px] font-medium text-neutral-700">Contact Details</p>
          <div className="flex w-full flex-col gap-[12px] rounded-[8px] border border-neutral-300 bg-neutral-white py-[12px]">
            <div className="flex h-[48px] items-center gap-[8px] px-[12px]">
              <img src={iconCall} alt="" className="size-[24px]" />
              <div className="flex flex-col gap-[4px]">
                <p className="text-[12px] text-neutral-500">Phone</p>
                <p className="text-[14px] font-medium text-neutral-700">{order.phone}</p>
              </div>
            </div>
            <div className="flex h-[48px] items-center gap-[8px] px-[12px]">
              <img src={iconSms} alt="" className="size-[24px]" />
              <div className="flex flex-col gap-[4px]">
                <p className="text-[12px] text-neutral-500">Email</p>
                <p className="text-[14px] font-medium text-neutral-700">{order.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-[8px]">
          <p className="text-[14px] font-medium text-neutral-700">Shipping Address</p>
          <div className="flex w-full items-center rounded-[8px] border border-neutral-300 bg-neutral-white py-[12px]">
            <div className="flex h-[48px] items-center gap-[8px] px-[12px]">
              <img src={iconLocationTick} alt="" className="size-[24px]" />
              <p className="text-[14px] font-medium text-neutral-700">{order.address}</p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-[8px]">
          <p className="text-[14px] font-medium text-neutral-700">Billing Address</p>
          <div className="flex w-full items-center rounded-[8px] border border-neutral-300 bg-neutral-white py-[12px]">
            <div className="flex h-[48px] items-center gap-[8px] px-[12px]">
              <img src={iconBill} alt="" className="size-[24px]" />
              <p className="text-[14px] font-medium text-neutral-700">{order.address}</p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-[8px]">
          <p className="text-[14px] font-medium text-neutral-700">Order Items ({totalItems})</p>
          <div className="flex w-full flex-col gap-[12px] rounded-[8px] border border-neutral-300 bg-neutral-white py-[12px]">
            {order.items.map((item) => (
              <div key={item.sku} className="flex h-[48px] items-center gap-[8px] px-[12px]">
                <div className="size-[48px] shrink-0 overflow-hidden rounded-[16px] bg-brand-100">
                  <img src={imgProductThumb} alt="" className="size-full object-cover" />
                </div>
                <p className="flex-1 truncate text-[14px] font-medium text-neutral-700">{item.name}</p>
                <div className="flex items-center justify-center rounded-[16px] bg-neutral-200 px-[8px] py-[8px]">
                  <p className="text-[12px] font-bold text-neutral-800">{item.qty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full px-[24px] pb-[16px] pt-[4px]">
        <PrimaryButton tone="success" onClick={onMarkShipped}>
          <img src={iconTickCircle} alt="" className="mr-[4px] size-[24px]" />
          Mark as Shipped
        </PrimaryButton>
      </div>
    </PhoneFrame>
  );
}
