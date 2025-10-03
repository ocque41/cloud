"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavSheetContent } from "./nav";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--muted)]/20 bg-[#171717]/90 backdrop-blur">
      <div className="container flex items-center justify-between py-6">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Cumulus
        </Link>
        <div className="flex items-center gap-4">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--muted)]/40 px-4 py-2 text-sm text-[color:var(--fg)] transition hover:border-[color:var(--fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--fg)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)] xl:hidden"
              >
                Menu
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle className="text-base uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  Navigate
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-6">
                <NavSheetContent />
                <SheetClose asChild>
                  <Button variant="muted" className="justify-center" onClick={() => setOpen(false)}>
                    Close
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
          <Button asChild className="hidden text-sm uppercase tracking-wide text-[#171717] xl:inline-flex">
            <Link href="/contact">Request Build</Link>
          </Button>
          <Button
            asChild
            size="sm"
            variant="default"
            className="text-xs uppercase tracking-wide text-[#171717] xl:hidden"
          >
            <Link href="/contact">Request Build</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
