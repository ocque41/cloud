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
        We tailor one product into your company’s perfect fit.
      </h1>

      <p className="lead mt-6 max-w-2xl">
        Pick a product. Tell us your constraints. We customize it to your stack,
        workflow, and compliance—then ship it as a dedicated, supported build.
      </p>

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
