import Link from "next/link";

const socials = [
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://github.com", label: "GitHub" },
  { href: "mailto:hello@cumulus.example", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--muted)]/20 py-12">
      <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <span className="text-lg font-semibold">Cumulus</span>
          <p className="text-sm text-[color:var(--muted)]">
            We personalize one product from our portfolio to each client’s needs.
          </p>
          <p className="text-xs text-[color:var(--muted)]/80">
            © {new Date().getFullYear()} Cumulus Labs. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 text-sm md:items-end">
          <div className="flex gap-4">
            {socials.map((social) => (
              <Link key={social.href} href={social.href} className="hover:text-[color:var(--fg)]">
                {social.label}
              </Link>
            ))}
          </div>
          <span className="text-xs text-[color:var(--muted)]/70">Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
