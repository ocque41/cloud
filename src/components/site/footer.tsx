import Link from "next/link";

const socials = [
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://github.com", label: "GitHub" },
  { href: "mailto:hello@cumulus.example", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--muted)]/20 py-8">
      <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="space-y-2">
          <span className="text-base font-semibold">Cumulus</span>
          <p className="text-xs text-[color:var(--muted)]">
            We personalize one product from our portfolio to each client’s needs.
          </p>
          <p className="text-[10px] text-[color:var(--muted)]/80">
            © {new Date().getFullYear()} Cumulus Labs. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 text-xs md:items-end">
          <div className="flex gap-3">
            {socials.map((social) => (
              <Link key={social.href} href={social.href} className="hover:text-[color:var(--fg)]">
                {social.label}
              </Link>
            ))}
          </div>
          <span className="text-[10px] text-[color:var(--muted)]/70">Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
