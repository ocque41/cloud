import Link from "next/link";

import InteractiveShaderCard from "@/components/interactive-shader-card";
import { Button } from "@/components/ui/button";

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
        We build and run software for small businesses.
      </h1>

      <div className="mt-6 max-w-3xl space-y-4 text-lg text-[color:var(--muted)]">
        <p>In house-quality software without the overhead. Managed for you.</p>
        <p></p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button asChild size="hero" variant="plain" leadingGlyph>
          <Link href="/contact">Get started</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="mailto:hello@cumulus.example">Email us</Link>
        </Button>
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
