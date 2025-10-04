import type { Metadata, Viewport } from "next";

import { Footer } from "@/components/site/footer";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cumulus.example"),
};

export const viewport: Viewport = {
  themeColor: "#171717",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[color:var(--bg)] text-[color:var(--fg)]">
      <body className="min-h-screen antialiased">
        <div className="flex min-h-screen flex-col">
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
