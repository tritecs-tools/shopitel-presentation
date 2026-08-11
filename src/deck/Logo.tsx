import logoFull from "../assets/images/logo-full.png";

export function ShopitelLogo({ tone = "brand", size = 40 }: { tone?: "brand" | "white"; size?: number }) {
  return (
    <img
      src={logoFull}
      alt="Shopitel"
      style={{ height: size }}
      className={tone === "white" ? "w-auto brightness-0 invert" : "w-auto"}
    />
  );
}
