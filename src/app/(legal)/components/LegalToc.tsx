'use client';

import { useMemo } from "react";

import clsx from "clsx";

import type { LegalHeading } from "@/lib/legal/mdx";
import type { SupportedLocale } from "@/lib/legal/schema";

const tocLabel: Record<SupportedLocale, string> = {
  en: "On this page",
  es: "En esta página",
};

type LegalTocProps = {
  headings: LegalHeading[];
  locale: SupportedLocale;
};

export function LegalToc({ headings, locale }: LegalTocProps) {
  const items = useMemo(() => headings.filter((heading) => heading.level === 2 || heading.level === 3), [headings]);

  if (items.length === 0) {
    return null;
  }

  return (
    <nav aria-label={tocLabel[locale]} className="rounded-lg border border-[color:var(--muted)]/20 p-4">
      <p className="text-sm font-semibold text-[color:var(--fg)]">{tocLabel[locale]}</p>
      <ul className="mt-3 flex flex-col gap-2 text-sm text-[color:var(--muted)]">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={clsx(
                "block rounded px-2 py-1 transition hover:bg-[color:var(--muted)]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--fg)]",
                item.level === 3 && "pl-4 text-xs"
              )}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
