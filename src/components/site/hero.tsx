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
        We set up, connect, and run your business tools so your day-to-day work is
        simpler and faster.
      </h1>

      <div className="mt-6 max-w-3xl space-y-4 text-lg text-[color:var(--muted)]">
        <p>
          We manage operations: calendars, orders, bookings, stock, payments,
          customer messages—organized in one clear flow.
        </p>
        <p>
          We consult and plan: we listen to your goals, map your steps, and set
          simple numbers to track progress.
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
