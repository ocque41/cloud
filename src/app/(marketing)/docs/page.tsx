import Link from "next/link";

import { Section } from "@/components/site/section";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Docs",
  description: "Review integration guides, environment requirements, and support tiers for Cumulus products.",
  path: "/docs",
});

const documents = [
  { title: "Integration Guide", href: "/docs/integration", description: "Step-by-step instructions for connecting to your stack." },
  { title: "Security Overview", href: "/docs/security", description: "Controls, certifications, and data residency options." },
  { title: "Support Tiers", href: "/docs/support", description: "Response times and escalation paths for dedicated builds." },
];

export default function DocsPage() {
  return (
    <Section
      title="Documentation for every deployment phase"
      eyebrow="Docs"
      copy="Centralize the material your engineers, security teams, and operators need to adopt a personalized build."
      className="pb-32"
      
    >
      <ul className="space-y-6">
        {documents.map((doc) => (
          <li key={doc.title} className="rounded-3xl border border-[color:var(--muted)]/30 bg-[#1f1f1f] p-6">
            <h2 className="text-xl font-semibold text-[color:var(--fg)]">{doc.title}</h2>
            <p className="mt-2 text-sm text-[color:var(--muted)]">{doc.description}</p>
            <Link
              href={doc.href}
              className="mt-4 inline-flex min-h-[44px] items-center text-sm uppercase tracking-wide text-[color:var(--fg)]/80 hover:text-[color:var(--fg)]"
            >
              View guide
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
