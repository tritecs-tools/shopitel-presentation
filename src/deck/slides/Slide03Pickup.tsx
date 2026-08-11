import type { Step } from "../../demo/steps";
import { DemoPlayer } from "../DemoPlayer";
import { FeatureSlide } from "./FeatureSlide";

export function Slide03Pickup({ active, loopSteps }: { active: boolean; loopSteps: Step[] }) {
  return (
    <FeatureSlide
      active={active}
      number={1}
      eyebrow="جمع المنتجات بالباركود"
      headline="أخطاء أقل، سرعة أعلى"
      caption="مسح باركود واحد يكفي لتسجيل الصنف وتحديث الكمية المُلتقطة فورًا — دون عدّ يدوي ودون تخمين."
      phone={<DemoPlayer steps={loopSteps} mode="loop" intervalMs={2300} scale={0.72} active={active} />}
    />
  );
}
