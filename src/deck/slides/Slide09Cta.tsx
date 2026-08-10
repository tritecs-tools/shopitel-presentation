import { motion } from "framer-motion";
import { ShopitelLogo } from "../Logo";
import { IconArrowLeft } from "../icons/DeckIcons";

function CratePattern() {
  return (
    <svg className="absolute inset-0 h-full w-full opacity-[0.14]" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="crates" width="120" height="120" patternUnits="userSpaceOnUse">
          <rect x="6" y="6" width="46" height="46" rx="4" fill="none" stroke="white" strokeWidth="2" />
          <path d="M6 29h46M29 6v46" stroke="white" strokeWidth="1.4" />
          <rect x="64" y="58" width="52" height="52" rx="4" fill="none" stroke="white" strokeWidth="2" />
          <path d="M64 84h52M90 58v52" stroke="white" strokeWidth="1.4" />
          <rect x="-10" y="70" width="36" height="36" rx="4" fill="none" stroke="white" strokeWidth="2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#crates)" />
    </svg>
  );
}

export function Slide09Cta({ active }: { active: boolean }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-[32px] overflow-hidden bg-[linear-gradient(160deg,var(--color-brand-600),var(--color-brand-500)_60%,var(--color-brand-600))] px-[80px] text-center">
      <CratePattern />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

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

      <motion.a
        href="mailto:eyad.0588@gmail.com?subject=%D8%B7%D9%84%D8%A8%20%D8%B9%D8%B1%D8%B6%20%D8%AA%D8%AC%D8%B1%D9%8A%D8%A8%D9%8A%20-%20Shopitel"
        initial={{ opacity: 0, y: 18 }}
        animate={active ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 flex cursor-pointer items-center gap-[14px] rounded-full bg-neutral-white py-[10px] pl-[10px] pr-[28px] text-[18px] font-bold text-brand-600 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] transition-transform hover:scale-[1.03]"
      >
        اطلبوا عرضًا تجريبيًا الآن
        <span className="flex size-[40px] items-center justify-center rounded-full bg-brand-500 text-neutral-white">
          <IconArrowLeft />
        </span>
      </motion.a>
    </div>
  );
}
