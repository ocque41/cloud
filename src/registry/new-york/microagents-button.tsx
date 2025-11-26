"use client";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MicroagentsButtonProps = {
  label?: string;
  eyebrow?: string;
  className?: string;
  onClick?: () => void;
};

export function MicroagentsButton({
  label = "Deploy microagent",
  eyebrow = "Orchestration",
  className,
  onClick,
}: MicroagentsButtonProps) {
  return (
    <Button
      type="button"
      variant="secondary"
      onClick={onClick}
      className={cn(
        "group relative inline-flex h-auto items-center justify-between gap-4 rounded-2xl border border-[color:var(--muted)]/30 bg-gradient-to-r from-[#15151b] via-[#20202a] to-[#0f0f14] px-5 py-4 text-left shadow-[0_18px_40px_rgba(0,0,0,0.35)]",
        "hover:from-[#1d1d26] hover:via-[#2b2b36] hover:to-[#12121a]",
        className
      )}
    >
      <div className="space-y-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)]">
          {eyebrow}
        </p>
        <p className="text-sm font-semibold text-[color:var(--fg)]">{label}</p>
      </div>
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--fg)]/10 text-[color:var(--fg)] transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[color:var(--fg)]/15">
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </span>
    </Button>
  );
}
