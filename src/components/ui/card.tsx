"use client";

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
  `;
  document.head.appendChild(style);
};

const baseStyle: React.CSSProperties = {
  borderRadius: "26px 18px 24px 20px",
  backgroundColor: "transparent",
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
