import type { JSX, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  title: string;
  eyebrow?: string;
  copy?: string;
  children?: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Section({
  title,
  eyebrow,
  copy,
  children,
  className,
  as: Tag = "section",
  headingLevel = 2,
}: SectionProps) {
  const headingTags = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6",
  } as const;

  const HeadingTag = headingTags[headingLevel];

  return (
    <Tag className={cn("container py-20", className)}>
      <div className="max-w-2xl">
        {eyebrow ? (
          <span className="uppercase tracking-[0.2em] text-[color:var(--muted)] text-xs">
            {eyebrow}
          </span>
        ) : null}
        <HeadingTag className="mt-3 text-3xl font-semibold leading-tight">
          {title}
        </HeadingTag>
        {copy ? <p className="mt-4 text-[color:var(--muted)]">{copy}</p> : null}
      </div>
      {children ? <div className="mt-10">{children}</div> : null}
    </Tag>
  );
}
