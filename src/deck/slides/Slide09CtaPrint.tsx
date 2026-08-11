import { ShopitelLogo } from "../Logo";
import { IconArrowLeft } from "../icons/DeckIcons";
import imgPatternBg from "../../assets/images/pattern-bg.png";

const CONTACT_EMAIL = "info@tritecs.com";

/** Static variant of the closing slide for PDF export — the live modal doesn't work without JS,
 *  so the CTA becomes a plain mailto link with the contact email visible. */
export function Slide09CtaPrint() {
  return (
    <div
      className="relative flex h-full w-full flex-col items-center justify-center gap-[28px] overflow-hidden bg-cover bg-center px-[80px] text-center"
      style={{ backgroundImage: `url(${imgPatternBg})` }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15" />

      <div className="relative z-10">
        <ShopitelLogo tone="white" size={44} />
      </div>

      <h2 className="relative z-10 max-w-[720px] text-[44px] font-extrabold leading-[1.25] text-neutral-white">
        فعّل تطبيق إدارة المتجر للجوال، واجعل تنفيذ الطلبات أسرع وأكثر دقة
      </h2>

      <a
        href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("طلب عرض تجريبي - Shopitel")}`}
        className="relative z-10 flex items-center gap-[14px] rounded-full bg-neutral-white py-[10px] pl-[10px] pr-[28px] text-[18px] font-bold text-brand-600 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]"
      >
        اطلبوا عرضًا تجريبيًا الآن
        <span className="flex size-[40px] items-center justify-center rounded-full bg-brand-500 text-neutral-white">
          <IconArrowLeft />
        </span>
      </a>

      <p className="relative z-10 text-[18px] font-semibold text-neutral-white/90" dir="ltr">
        {CONTACT_EMAIL}
      </p>
    </div>
  );
}
