import type { Step } from "../../demo/steps";
import { DemoPlayer } from "../DemoPlayer";
import { FeatureSlide } from "./FeatureSlide";

export function Slide05Packing({ active, loopSteps }: { active: boolean; loopSteps: Step[] }) {
  return (
    <FeatureSlide
      active={active}
      number={3}
      eyebrow="التعبئة والشحن"
      headline="تعبئة أسرع، تسليم أدق"
      caption="مسح كل صنف عند التعبئة، تأكيد بيانات العميل، ثم تعليم الطلب كمشحون — بثلاث خطوات واضحة لكل عملية."
      phone={<DemoPlayer steps={loopSteps} mode="loop" intervalMs={950} scale={0.72} active={active} />}
    />
  );
}
