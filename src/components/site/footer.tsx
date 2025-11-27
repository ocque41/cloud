import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[color:var(--muted)]/20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-5"
      >
        <div className="absolute left-1/2 top-1/2 h-[90%] w-[90%] max-h-[900px] max-w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[url('/Logo-1024.png')] bg-contain bg-center bg-no-repeat" />
      </div>
      <div className="container relative flex min-h-screen min-h-[100svh] flex-col justify-between px-4 py-16 text-left">
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
            className="inline-flex items-center gap-3 text-3xl font-semibold tracking-tight"
            aria-label="Cumulus home"
          >
            <Image
              src="/Logo-128.png"
              alt="Cumulus logo"
              width={48}
              height={48}
              className="h-12 w-12"
              priority={false}
            />
          </Link>
          <p className="text-sm text-[color:var(--muted)]/80">
            © 2025 Cumulus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
