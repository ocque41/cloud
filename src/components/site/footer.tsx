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
        <div className="space-y-6">
          <Link
            href="/"
            className="text-2xl font-semibold tracking-tight text-[color:var(--fg)]"
          >
            Cumulus
          </Link>
          <nav aria-label="Footer">
            <ul className="flex flex-col gap-3 text-sm text-[color:var(--fg)]/80">
              {links.map((link) => (
                <li key={link.href}>
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
        </div>
        <p className="text-[10px] text-[color:var(--muted)]/80">
          © 2025 Cumulus. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
