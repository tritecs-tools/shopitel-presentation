import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShopitelLogo } from "../Logo";
import { IconArrowLeft } from "../icons/DeckIcons";
import { EmailCaptureModal } from "../EmailCaptureModal";
import imgPatternBg from "../../assets/images/pattern-bg.png";

export function Slide09Cta({ active }: { active: boolean }) {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div
      className="relative flex h-full w-full flex-col items-center justify-center gap-[32px] overflow-hidden bg-cover bg-center px-[80px] text-center"
      style={{ backgroundImage: `url(${imgPatternBg})` }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15" />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={active ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <ShopitelLogo tone="white" size={44} />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        animate={active ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
        className="relative z-10 max-w-[720px] text-[44px] font-extrabold leading-[1.25] text-neutral-white"
      >
        فعّل تطبيق إدارة المتجر للجوال، واجعل تنفيذ الطلبات أسرع وأكثر دقة
      </motion.h2>

      <motion.button
        onClick={() => setFormOpen(true)}
        initial={{ opacity: 0, y: 18 }}
        animate={active ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 flex cursor-pointer items-center gap-[14px] rounded-full bg-neutral-white py-[10px] pl-[10px] pr-[28px] text-[18px] font-bold text-brand-600 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] transition-transform hover:scale-[1.03]"
      >
        اطلبوا عرضًا تجريبيًا الآن
        <span className="flex size-[40px] items-center justify-center rounded-full bg-brand-500 text-neutral-white">
          <IconArrowLeft />
        </span>
      </motion.button>

      <AnimatePresence>{formOpen && <EmailCaptureModal onClose={() => setFormOpen(false)} />}</AnimatePresence>
    </div>
  );
}
