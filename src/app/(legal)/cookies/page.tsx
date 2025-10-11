import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Notice",
  description: "Learn how Cumulus uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-16 text-[color:var(--fg)]">
      <h1 className="text-3xl font-semibold tracking-tight">Cookie Notice (preview)</h1>
      <p className="mt-4 text-lg text-[color:var(--muted)]">
        This placeholder explains that the detailed cookie policy will be published here. It links the consent banner to a
        permanent home once legal review is complete.
      </p>
    </main>
  );
}
