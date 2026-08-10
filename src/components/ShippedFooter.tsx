import { PrimaryButton } from "./PrimaryButton";

export function ShippedFooter({ onViewCustomer }: { onViewCustomer?: () => void }) {
  return (
    <div className="flex w-full flex-col gap-[8px] px-[24px] pb-[16px] pt-[4px]">
      <p className="text-center text-[14px] font-semibold text-success-700">✓ Order shipped</p>
      <PrimaryButton onClick={onViewCustomer}>View Customer</PrimaryButton>
    </div>
  );
}
