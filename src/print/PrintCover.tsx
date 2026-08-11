import type { ReactNode } from "react";
import { ShopitelLogo } from "../deck/Logo";

const PILLS = ["الدفعات", "جمع المنتجات", "التعبئة", "الطلبات المعلقة", "الشحن"];

/** Print-only: same look as the live cover slide, but no transforms (rotate/translate)
 *  on the phone wrapper — those don't reliably clip with overflow-hidden in Chromium's PDF export. */
export function PrintCover({ hero }: { hero: ReactNode }) {
  return (
    <div className="relative flex h-full w-full items-center justify-between overflow-hidden bg-neutral-50 px-[80px]">
      <div
        className="pointer-events-none absolute inset-y-0 left-[-10%] w-[55%] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-brand-100), transparent 70%)" }}
      />

      {/* dir=rtl: first child renders on the right, so text comes first, phone second (left). */}
      <div className="relative z-10 flex w-[46%] flex-col items-start gap-[28px]">
        <ShopitelLogo size={44} />
        <h1 className="text-[52px] font-extrabold leading-[1.15] text-neutral-900">
          تطبيق إدارة المتجر
          <br />
          للجوال
        </h1>
        <p className="max-w-[480px] text-[20px] leading-[1.7] text-neutral-600">
          نفّذ طلبات المتجر من داخل المستودع بسرعة أعلى ودقة أفضل، وامنح فريقك تجربة تشغيل أكثر سلاسة.
        </p>
        <div className="flex flex-wrap items-center gap-[10px] rounded-full border border-brand-300 bg-white px-[14px] py-[10px]">
          {PILLS.map((p, i) => (
            <span key={p} className="flex items-center gap-[10px] text-[14px] font-semibold text-brand-500">
              {p}
              {i < PILLS.length - 1 && <span className="text-brand-300">•</span>}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10">{hero}</div>
    </div>
  );
}
