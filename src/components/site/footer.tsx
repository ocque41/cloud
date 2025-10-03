import Link from "next/link";

const links = [
  { href: "/products", label: "Products" },
  { href: "/process", label: "Process" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--muted)]/20">
      <div className="container flex min-h-screen flex-col justify-between gap-12 py-16 sm:py-24">
        <nav aria-label="Footer">
          <ul className="flex flex-col divide-y divide-[color:var(--muted)]/30 text-sm text-[color:var(--fg)]/80">
            {links.map((link) => (
              <li key={link.href} className="py-3 first:pt-0 last:pb-0">
                <Link
                  href={link.href}
                  className="transition hover:text-[color:var(--fg)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-2 text-left">
          <Link
            href="/"
            className="text-2xl font-semibold tracking-tight text-[color:var(--fg)]"
          >
            Cumulus
          </Link>
          <p className="text-[10px] text-[color:var(--muted)]/75">
            © 2025 Cumulus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
