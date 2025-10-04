import Link from "next/link";

const links = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/case-studies", label: "Case Studies", disabled: true },
  { href: "/contact", label: "Contact" },
];

export function DesktopNav() {
  return (
    <aside className="hidden w-48 flex-col gap-4 text-sm text-[color:var(--muted)] xl:flex">
      <span className="uppercase tracking-[0.3em] text-[10px] text-[color:var(--muted)]">
        Navigate
      </span>
      <nav aria-label="Primary">
        <ul className="flex flex-col gap-3">
          {links.map((link) => (
            <li key={link.href}>
              {link.disabled ? (
                <span className="text-[color:var(--muted)]/60">{link.label}</span>
              ) : (
                <Link
                  href={link.href}
                  className="transition hover:text-[color:var(--fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--fg)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)]"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export function MobileNavTrigger({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="inline-flex items-center gap-2 rounded-full border border-[color:var(--muted)]/40 px-4 py-2 text-sm text-[color:var(--fg)] transition hover:border-[color:var(--fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--fg)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)] xl:hidden"
    >
      Menu
    </button>
  );
}

export function NavSheetContent() {
  return (
    <nav aria-label="Mobile">
      <ul className="flex flex-col gap-4 text-lg">
        {links.map((link) => (
          <li key={link.href}>
            {link.disabled ? (
              <span className="text-[color:var(--muted)]/60">{link.label}</span>
            ) : (
              <Link href={link.href} className="hover:text-[color:var(--fg)]">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
