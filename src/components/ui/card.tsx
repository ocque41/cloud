import * as React from "react";

import { cn } from "@/lib/utils";

const ensureKeyframesInjected = () => {
  if (typeof document === "undefined") return;
  const id = "card-sheen-keyframes";
  if (document.getElementById(id)) return;
  const style = document.createElement("style");
  style.id = id;
  style.textContent = `
    @keyframes cardFloat { 0% { transform: translate3d(0, 0, 0) rotate(-0.15deg); } 35% { transform: translate3d(0, -3px, 0) rotate(0.2deg); } 70% { transform: translate3d(0, 2px, 0) rotate(-0.1deg); } 100% { transform: translate3d(0, 0, 0) rotate(-0.15deg); } }
    @keyframes cardShimmer { 0% { background-position: 0% 0%; } 50% { background-position: 100% 100%; } 100% { background-position: 0% 0%; } }
    @keyframes cardSideGlow { 0% { opacity: 0.3; } 50% { opacity: 0.55; } 100% { opacity: 0.3; } }
  `;
  document.head.appendChild(style);
};

const baseStyle: React.CSSProperties = {
  borderRadius: "26px 18px 24px 20px",
  backgroundColor: "#0c0c0d",
  backgroundImage:
    "radial-gradient(120% 120% at -12% -18%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.12) 18%, rgba(255,255,255,0.05) 34%, rgba(0,0,0,0) 54%)," +
    "radial-gradient(140% 140% at 110% 110%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 28%, rgba(0,0,0,0) 54%)," +
    "radial-gradient(90% 90% at 18% 6%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 32%, rgba(0,0,0,0) 58%)," +
    "linear-gradient(140deg, #0d0d0f 0%, #0b0b0c 52%, #0f0f11 100%)",
  backgroundBlendMode: "screen, multiply, screen, normal",
  boxShadow: "inset 0 0 32px rgba(255,255,255,0.04), 0 20px 44px rgba(0,0,0,0.55)",
};

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, style, children, ...props }, ref) => {
    const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

    React.useEffect(() => {
      if (typeof window === "undefined") return;
      const media = window.matchMedia("(prefers-reduced-motion: reduce)");
      const update = () => setPrefersReducedMotion(media.matches);
      update();
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }, []);

    React.useEffect(() => {
      if (!prefersReducedMotion) ensureKeyframesInjected();
    }, [prefersReducedMotion]);

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden border border-white/5 text-[color:var(--fg)] shadow-[0_18px_50px_rgba(0,0,0,0.45)]",
          prefersReducedMotion ? "" : "animate-[cardFloat_11s_ease-in-out_infinite]",
          className,
        )}
        style={{ ...baseStyle, ...style }}
        {...props}
      >
        <div
          aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(160% 160% at -10% -20%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 38%, rgba(0,0,0,0) 58%)," +
            "radial-gradient(40% 40% at 18% 0%, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 70%)," +
            "radial-gradient(140% 140% at 110% 110%, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0) 60%)",
          mixBlendMode: "screen",
          opacity: 0.28,
          backgroundSize: "160% 160%, 120% 120%",
          backgroundPosition: "0% 0%, 20% 10%",
          animation: prefersReducedMotion ? undefined : "cardShimmer 14s ease-in-out infinite alternate",
        }}
      />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 18%)," +
              "linear-gradient(0deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 22%)," +
              "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 26%)," +
              "linear-gradient(270deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 22%)",
            mixBlendMode: "screen",
            opacity: 0.36,
            animation: prefersReducedMotion ? undefined : "cardSideGlow 9s ease-in-out infinite",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 mix-blend-soft-light"
          style={{
            backgroundImage:
              "radial-gradient(120% 120% at 0% 0%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 26%, rgba(0,0,0,0) 50%)," +
              "radial-gradient(80% 80% at 60% 40%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 30%, rgba(0,0,0,0) 48%)",
            opacity: 0.9,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 28%, rgba(0,0,0,0) 44%)," +
              "radial-gradient(260% 220% at 20% 8%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 26%, rgba(0,0,0,0) 52%)",
            opacity: 0.4,
            mixBlendMode: "soft-light",
            animation: prefersReducedMotion ? undefined : "cardShimmer 18s ease-in-out infinite",
          }}
        />
        <div className="relative z-[1]">{children}</div>
      </div>
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-2 p-6", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-xl font-semibold", className)} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-[color:var(--muted)]", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
