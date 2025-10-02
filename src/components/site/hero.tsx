"use client";

import dynamic from "next/dynamic";

const GrainyGradient = dynamic(
  () =>
    import("@/components/interactive-shader-card").then(
      (mod) => mod.GrainyGradient
    ),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden
        className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(222,221,217,0.45),rgba(23,23,23,0.9))]"
      />
    ),
  }
);

export function Hero() {
  const now = new Date();
  const formatted = new Intl.DateTimeFormat("en", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(now);

  return (
    <section className="container pt-20 pb-12">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-[color:var(--muted)]">
        <time dateTime={now.toISOString()}>{formatted}</time>
        <span aria-hidden>•</span>
        <span className="uppercase tracking-[0.3em] text-xs">
          Product Customization
        </span>
      </div>

      <h1 className="display max-w-5xl">
        We tailor one product into your company’s perfect fit.
      </h1>

      <p className="lead mt-6 max-w-2xl">
        Pick a product. Tell us your constraints. We customize it to your stack,
        workflow, and compliance—then ship it as a dedicated, supported build.
      </p>

      <div className="mt-12">
        <div className="aspect-[16/9] overflow-hidden rounded-2xl">
          <GrainyGradient
            aria-label="Cumulus interactive hero"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
