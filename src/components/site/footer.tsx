import Link from "next/link";

const footerLinks = [
  { href: "/docs", label: "Docs" },
  { href: "/products", label: "Products" },
  { href: "/process", label: "Process" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[color:var(--muted)]/20">
      <div className="container flex min-h-[40vh] flex-col items-center justify-center gap-6 py-16 text-center">
        <span className="text-2xl font-semibold tracking-tight">Cumulus</span>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-[44px] items-center transition hover:text-[color:var(--fg)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-xs text-[color:var(--muted)]/70">
          © {new Date().getFullYear()} Cumulus Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
