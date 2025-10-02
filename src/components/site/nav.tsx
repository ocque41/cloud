"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

import { cn } from "@/lib/utils";

type NavLink = {
  href: string;
  label: string;
  segment: string | null;
  disabled?: boolean;
};

const links: NavLink[] = [
  { href: "/", label: "Overview", segment: null },
  { href: "/products", label: "Products", segment: "products" },
  { href: "/services", label: "Services", segment: "services" },
  { href: "/docs", label: "Docs", segment: "docs" },
  { href: "/contact", label: "Contact", segment: "contact" },
];

export function Sidebar() {
  const segments = useSelectedLayoutSegments();

  return (
    <aside className="sticky top-[var(--header-h,2.5rem)] hidden w-52 -translate-y-0 flex-col gap-6 text-sm text-[color:var(--muted)] xl:flex xl:top-1/2 xl:-translate-y-1/2">
      <span className="uppercase tracking-[0.3em] text-[10px] text-[color:var(--muted)]">
        Navigate
      </span>
      <nav aria-label="Primary navigation">
        <ul className="flex flex-col gap-4">
          {links.map((link) => {
            const isActive =
              link.segment === null
                ? segments.length === 0
                : segments.includes(link.segment);

            if (link.disabled) {
              return (
                <li key={link.href} className="text-[color:var(--muted)]/50">
                  {link.label}
                </li>
              );
            }

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative block rounded-full px-4 py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--fg)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)]",
                    isActive
                      ? "bg-[color:var(--muted)]/20 text-[color:var(--fg)]"
                      : "hover:text-[color:var(--fg)]"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export function NavSheetContent() {
  return (
    <nav aria-label="Mobile navigation">
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
