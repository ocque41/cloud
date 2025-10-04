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
      <div className="container flex min-h-screen min-h-[100svh] flex-col justify-between px-4 py-16 text-left">
        <div className="flex flex-1 flex-col justify-center">
          <nav aria-label="Footer navigation" className="w-full">
            <ul className="flex flex-col items-start gap-6 text-lg text-[color:var(--fg)]/80">
              {links.map((link) => (
                <li key={link.href} className="w-full max-w-xs">
                  <Link
                    href={link.href}
                    className="block rounded-full border border-transparent px-6 py-3 text-left transition hover:border-[color:var(--fg)]/40 hover:text-[color:var(--fg)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="space-y-2 pt-10 text-[color:var(--fg)]">
          <Link
            href="/"
            className="text-3xl font-semibold tracking-tight"
          >
            Cumulus
          </Link>
          <p className="text-sm text-[color:var(--muted)]/80">
            © 2025 Cumulus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
