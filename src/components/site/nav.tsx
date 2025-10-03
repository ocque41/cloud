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
  { href: "/process", label: "Process", segment: "process" },
  { href: "/services", label: "Services", segment: "services" },
  { href: "/docs", label: "Docs", segment: "docs" },
  { href: "/contact", label: "Contact", segment: "contact" },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--fg)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)]";

export function Sidebar() {
  const segments = useSelectedLayoutSegments();

  return (
    <aside className="sticky top-1/2 hidden h-min w-48 -translate-y-1/2 flex-col gap-4 text-sm text-[color:var(--muted)] xl:flex">
      <span className="uppercase tracking-[0.3em] text-[10px] text-[color:var(--muted)]">
        Navigate
      </span>
      <nav aria-label="Primary navigation">
        <ul className="flex flex-col gap-3">
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
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "inline-flex min-h-[44px] items-center transition hover:text-[color:var(--fg)]",
                    focusRing
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
              <Link
                href={link.href}
                className={cn(
                  "inline-flex min-h-[44px] items-center rounded-full px-3 transition",
                  focusRing,
                  "hover:text-[color:var(--fg)]"
                )}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function InlineNav() {
  const segments = useSelectedLayoutSegments();

  return (
    <nav
      aria-label="Page navigation"
      className="mb-10 flex flex-wrap gap-3 rounded-full border border-[color:var(--muted)]/20 bg-[color:var(--muted)]/5 px-4 py-3 text-sm text-[color:var(--muted)] shadow-sm backdrop-blur lg:hidden"
    >
      {links.map((link) => {
        if (link.disabled) {
          return (
            <span
              key={link.href}
              className="inline-flex min-h-[44px] items-center cursor-not-allowed opacity-60"
            >
              {link.label}
            </span>
          );
        }

        const isActive =
          link.segment === null
            ? segments.length === 0
            : segments.includes(link.segment);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "inline-flex min-h-[44px] items-center rounded-full px-4 transition",
              focusRing,
              isActive
                ? "bg-[color:var(--muted)]/30 text-[color:var(--fg)]"
                : "hover:text-[color:var(--fg)]"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
