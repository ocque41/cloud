import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { DesktopNav } from "@/components/site/nav";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Cumulus — Personalized Product Builds",
  description: "We customize one product from our portfolio to your exact needs.",
  openGraph: {
    type: "website",
    title: "Cumulus",
    description:
      "We customize one product from our portfolio to your exact needs.",
    url: "https://cumulus.example",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cumulus",
    description:
      "We customize one product from our portfolio to your exact needs.",
  },
};

export const viewport: Viewport = {
  themeColor: "#171717",
};

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="mx-auto flex w-full max-w-[1400px] flex-1 gap-12 px-4 pb-24 pt-12 lg:px-8">
        <div className="relative hidden xl:block">
          <div className="sticky top-24 flex h-[calc(100vh-6rem-6rem)] items-center">
            <DesktopNav />
          </div>
        </div>
        <main className="flex-1 min-w-0">{children}</main>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}
