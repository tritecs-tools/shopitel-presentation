import { useMemo } from "react";
import { buildDemoSteps } from "../demo/steps";
import { StaticPhone } from "../deck/DemoPlayer";
import { PrintPage } from "./PrintPage";
import { Slide01Cover } from "../deck/slides/Slide01Cover";
import { Slide02Problem } from "../deck/slides/Slide02Problem";
import { FeatureSlide } from "../deck/slides/FeatureSlide";
import { Slide07Impact } from "../deck/slides/Slide07Impact";
import { Slide08Integration } from "../deck/slides/Slide08Integration";
import { Slide09CtaPrint } from "../deck/slides/Slide09CtaPrint";

const noop = { next: () => {}, restart: () => {} };

export function PrintDeck() {
  const steps = useMemo(buildDemoSteps, []);
  const hero = useMemo(() => steps[0].render(noop), [steps]);

  // One representative static frame per feature slide (no autoplay/interaction in print).
  const pickupFrame = steps[2].render(noop);
  const shortageFrame = steps[5].render(noop);
  const packingFrame = steps[13].render(noop);

  return (
    <div className="bg-neutral-50">
      <PrintPage>
        <Slide01Cover active hero={hero} />
      </PrintPage>
      <PrintPage>
        <Slide02Problem active />
      </PrintPage>
      <PrintPage>
        <FeatureSlide
          active
          number={1}
          eyebrow="جمع المنتجات بالباركود"
          headline="أخطاء أقل، سرعة أعلى"
          caption="مسح باركود واحد يكفي لتسجيل الصنف وتحديث الكمية المُلتقطة فورًا — دون عدّ يدوي ودون تخمين."
          phone={<StaticPhone scale={0.72}>{pickupFrame}</StaticPhone>}
        />
      </PrintPage>
      <PrintPage>
        <FeatureSlide
          active
          number={2}
          eyebrow="معالجة النقص الذكية"
          headline="النظام يتصرف نيابة عنك"
          caption="عند نفاد صنف، يحدّد المستخدم الكمية غير المتوفرة، ويتولى النظام تلقائيًا نقل الطلبات المتأثرة إلى المعلقة — دون فرز يدوي."
          phone={<StaticPhone scale={0.72}>{shortageFrame}</StaticPhone>}
        />
      </PrintPage>
      <PrintPage>
        <FeatureSlide
          active
          number={3}
          eyebrow="التعبئة والشحن"
          headline="تعبئة أسرع، تسليم أدق"
          caption="مسح كل صنف عند التعبئة، تأكيد بيانات العميل، ثم تعليم الطلب كمشحون — بثلاث خطوات واضحة لكل عملية."
          phone={<StaticPhone scale={0.72}>{packingFrame}</StaticPhone>}
        />
      </PrintPage>
      <PrintPage>
        <Slide07Impact active />
      </PrintPage>
      <PrintPage>
        <Slide08Integration active />
      </PrintPage>
      <PrintPage>
        <Slide09CtaPrint />
      </PrintPage>
    </div>
  );
}
