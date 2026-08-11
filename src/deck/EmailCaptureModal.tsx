import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/myegwego";

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function EmailCaptureModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 px-[24px]"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[420px] rounded-[24px] bg-white p-[32px] text-center shadow-2xl"
        dir="rtl"
      >
        <button
          onClick={onClose}
          aria-label="إغلاق"
          className="absolute left-[16px] top-[16px] flex size-[32px] cursor-pointer items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
        >
          <CloseIcon />
        </button>

        <AnimatePresence mode="wait">
          {status === "sent" ? (
            <motion.div
              key="sent"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-[12px] py-[16px]"
            >
              <div className="flex size-[56px] items-center justify-center rounded-full bg-success-100">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#2e9e2e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-[18px] font-bold text-neutral-900">تم الإرسال بنجاح</p>
              <p className="text-[14px] text-neutral-500">سنتواصل معك قريبًا لترتيب العرض التجريبي.</p>
            </motion.div>
          ) : (
            <motion.form key="form" onSubmit={handleSubmit} className="flex flex-col items-center gap-[16px]">
              <p className="text-[20px] font-bold text-neutral-900">اطلبوا عرضًا تجريبيًا</p>
              <p className="text-[14px] leading-[1.6] text-neutral-500">
                اترك بريدك الإلكتروني وسنتواصل معك لترتيب موعد العرض.
              </p>
              <input
                type="email"
                required
                dir="ltr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-[12px] border border-neutral-300 px-[16px] py-[14px] text-[16px] text-neutral-900 outline-none focus:border-brand-500"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex h-[52px] w-full cursor-pointer items-center justify-center rounded-full bg-brand-500 text-[16px] font-bold text-neutral-white transition-opacity disabled:opacity-60"
              >
                {status === "sending" ? "جارٍ الإرسال..." : "إرسال"}
              </button>
              {status === "error" && (
                <p className="text-[13px] text-danger-700">حدث خطأ أثناء الإرسال، حاول مرة أخرى.</p>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
