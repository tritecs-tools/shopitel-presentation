import type { Step } from "../../demo/steps";
import { DemoPlayer } from "../DemoPlayer";
import { FeatureSlide } from "./FeatureSlide";

export function Slide04Shortage({ active, loopSteps }: { active: boolean; loopSteps: Step[] }) {
  return (
    <FeatureSlide
      active={active}
      number={2}
      eyebrow="معالجة النقص الذكية"
      headline="النظام يتصرف نيابة عنك"
      caption="عند نفاد صنف، يحدّد المستخدم الكمية غير المتوفرة، ويتولى النظام تلقائيًا نقل الطلبات المتأثرة إلى المعلقة — دون فرز يدوي."
      phone={<DemoPlayer steps={loopSteps} mode="loop" intervalMs={1700} scale={0.72} active={active} />}
    />
  );
}
