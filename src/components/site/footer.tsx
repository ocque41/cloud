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
      <div className="container py-12 sm:py-16">
        <div className="flex flex-col gap-8 sm:gap-12 lg:flex-row lg:items-center lg:justify-between">
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
          <nav aria-label="Footer" className="flex items-center">
            <ul className="flex flex-col gap-4 sm:flex-row sm:gap-6 md:gap-8 text-sm text-[color:var(--fg)]/80">
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
      </div>
    </footer>
  );
}
