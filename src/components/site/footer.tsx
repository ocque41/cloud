import Link from "next/link";

import { Button } from "@/components/ui/button";

const socials = [
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://github.com", label: "GitHub" },
  { href: "mailto:hello@cumulus.example", label: "Email" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--muted)]/20">
      <div className="container flex min-h-screen flex-col justify-between gap-16 py-16 sm:py-24">
        <div className="space-y-8">
          <p className="uppercase tracking-[0.3em] text-xs text-[color:var(--muted)]/70">
            Stay in touch
          </p>
          <div className="space-y-4">
            <p className="display max-w-3xl">We’re ready to build your next release.</p>
            <p className="lead max-w-xl text-[color:var(--muted)]">
              Share your roadmap and we’ll tailor a product build from our portfolio to your stack.
            </p>
          </div>
          <Button asChild variant="brand" size="lg" className="w-fit">
            <Link href="/contact">Request Build</Link>
          </Button>
        </div>
        <div className="flex flex-col gap-4 text-xs text-[color:var(--muted)]/80 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3 text-sm text-[color:var(--fg)]">
            {socials.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                className="transition hover:text-[color:var(--fg)]/75"
              >
                {social.label}
              </Link>
            ))}
          </div>
          <span>© {year} Cumulus Labs. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
