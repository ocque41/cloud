import InteractiveShaderCard from "@/components/interactive-shader-card";

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
        We design, integrate, and maintain the products your teams rely on.
      </h1>

      <div className="mt-6 max-w-3xl space-y-4 text-lg text-[color:var(--muted)]">
        <p>
          We work with your teams to build the product you requested, connect it to
          your existing systems, and keep every release dependable.
        </p>
        <p>
          When a product is customer-facing, we can drive qualified traffic, review
          performance, and maintain the experience long after launch.
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl">
        <div className="aspect-[16/9]">
          <InteractiveShaderCard
            mode="interactive"
            aria-label="Cumulus interactive hero"
          />
        </div>
      </div>
    </section>
  );
}
