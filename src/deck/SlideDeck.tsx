import { useCallback, useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface DeckSlide {
  id: string;
  label: string;
  Component: ComponentType<{ active: boolean }>;
}

// Slides are authored against this fixed logical canvas, then the whole deck
// is scaled (letterboxed) to fit whatever window/monitor it's opened on —
// so layout and type sizes stay pixel-identical everywhere, like a real deck.
const DECK_W = 1440;
const DECK_H = 810;

function useDeckScale() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    function recalc() {
      setScale(Math.min(window.innerWidth / DECK_W, window.innerHeight / DECK_H));
    }
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, []);
  return scale;
}

function ExpandIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 3H5a2 2 0 0 0-2 2v4M15 3h4a2 2 0 0 1 2 2v4M9 21H5a2 2 0 0 1-2-2v-4M15 21h4a2 2 0 0 0 2-2v-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronUp() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M6 15l6-6 6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SlideDeck({ slides }: { slides: DeckSlide[] }) {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const total = slides.length;
  const scale = useDeckScale();

  const goTo = useCallback(
    (i: number) => setCurrent(Math.max(0, Math.min(total - 1, i))),
    [total],
  );
  const next = useCallback(() => setCurrent((c) => Math.min(total - 1, c + 1)), [total]);
  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (["ArrowDown", "ArrowRight", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        next();
      } else if (["ArrowUp", "ArrowLeft", "PageUp"].includes(e.key)) {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(total - 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, goTo, total]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  return (
    <div ref={containerRef} className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-neutral-900">
      <div
        dir="rtl"
        className="relative shrink-0 overflow-hidden bg-neutral-50 font-arabic shadow-2xl"
        style={{ width: DECK_W, height: DECK_H, transform: `scale(${scale})` }}
      >
        <div
          className="flex flex-col"
          style={{
            width: DECK_W,
            height: DECK_H * total,
            transform: `translateY(-${current * DECK_H}px)`,
            transition: "transform 650ms cubic-bezier(.65,0,.2,1)",
          }}
        >
          {slides.map(({ id, Component }, i) => (
            <div key={id} className="relative shrink-0 overflow-hidden" style={{ width: DECK_W, height: DECK_H }}>
              <Component active={i === current} />
            </div>
          ))}
        </div>
      </div>

      {/* edge nav zones — kept clear of centered slide content */}
      <button
        aria-label="الشريحة السابقة"
        onClick={prev}
        disabled={current === 0}
        className="group absolute inset-x-0 top-0 z-30 h-[44px] cursor-pointer disabled:cursor-default"
      >
        <span className="mx-auto flex h-full w-[120px] items-center justify-center text-neutral-400 opacity-0 transition-opacity group-hover:opacity-100 group-disabled:opacity-0">
          <ChevronUp />
        </span>
      </button>
      <button
        aria-label="الشريحة التالية"
        onClick={next}
        disabled={current === total - 1}
        className="group absolute inset-x-0 bottom-0 z-30 h-[44px] cursor-pointer disabled:cursor-default"
      >
        <span className="mx-auto flex h-full w-[120px] rotate-180 items-center justify-center text-neutral-400 opacity-0 transition-opacity group-hover:opacity-100 group-disabled:opacity-0">
          <ChevronUp />
        </span>
      </button>

      {/* progress dots */}
      <div className="absolute left-[20px] top-1/2 z-30 flex -translate-y-1/2 flex-col gap-[10px]">
        {slides.map((s, i) => (
          <button
            key={s.id}
            aria-label={s.label}
            onClick={() => goTo(i)}
            className="group flex cursor-pointer items-center gap-[8px]"
          >
            <span
              className={`h-[8px] w-[8px] rounded-full transition-all ${
                i === current ? "scale-125 bg-brand-400" : "bg-neutral-600 group-hover:bg-brand-300"
              }`}
            />
          </button>
        ))}
      </div>

      {/* counter + fullscreen */}
      <div className="absolute bottom-[18px] right-[24px] z-30 flex items-center gap-[12px]">
        <p className="font-sans text-[12px] tabular-nums text-neutral-400">
          {current + 1} / {total}
        </p>
        <button
          aria-label="عرض ملء الشاشة"
          onClick={toggleFullscreen}
          className="flex size-[32px] cursor-pointer items-center justify-center rounded-full border border-neutral-600 bg-white/10 text-neutral-300 backdrop-blur transition-colors hover:border-brand-300 hover:text-brand-300"
        >
          <ExpandIcon />
        </button>
      </div>

      <AnimatePresence>
        {current === 0 && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pointer-events-none absolute bottom-[22px] left-1/2 z-30 -translate-x-1/2 font-sans text-[11px] text-neutral-400"
          >
            استخدم الأسهم للتنقل ↓
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
