function BagIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M7 8h10l.9 11.1a2 2 0 0 1-2 2.15H8.1a2 2 0 0 1-2-2.15L7 8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ShopitelLogo({ tone = "brand", size = 40 }: { tone?: "brand" | "white"; size?: number }) {
  const badgeBg = tone === "white" ? "bg-white text-brand-500" : "bg-brand-500 text-neutral-white";
  const textColor = tone === "white" ? "text-neutral-white" : "text-neutral-900";
  return (
    <div className="flex items-center gap-[10px]">
      <div style={{ width: size, height: size }} className={`flex items-center justify-center rounded-[12px] ${badgeBg}`}>
        <BagIcon size={size * 0.55} />
      </div>
      <span className={`font-sans text-[22px] font-extrabold tracking-tight ${textColor}`}>Shopitel</span>
    </div>
  );
}
