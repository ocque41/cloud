import Link from "next/link";

import { Button } from "@/components/ui/button";
import { VoxelBackground } from "@/components/site/voxel-background";

export function Hero() {
  const now = new Date();
  const formatted = new Intl.DateTimeFormat("en", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(now);

  return (
    <section className="container relative isolate flex min-h-screen flex-col justify-center overflow-hidden py-20">
      <VoxelBackground className="absolute inset-x-[-12vw] inset-y-[-14vh] opacity-40" />
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-[color:var(--muted)]">
        <time dateTime={now.toISOString()}>{formatted}</time>
        <span aria-hidden>•</span>
        <span className="uppercase tracking-[0.3em] text-xs">
          Product Customization
        </span>
      </div>

      <h1 className="display max-w-5xl text-[#aaaaaa]">
        We build and run software for small businesses.
      </h1>

      <div className="mt-6 max-w-3xl space-y-4 text-lg text-[color:var(--muted)]">
        <p>In house-quality software without the overhead. Managed for you.</p>
        <p></p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button
          asChild
          size="hero"
          variant="plain"
          className="text-[#aaaaaa] text-xl font-normal leading-none"
        >
          <Link href="/login">Get Started</Link>
        </Button>
      </div>
    </section>
  );
}
