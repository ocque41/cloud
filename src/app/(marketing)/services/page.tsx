import { Section } from "@/components/site/section";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Services",
  description: "Understand the engagement model, delivery tracks, and guarantees for custom Cumulus builds.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <Section
      title="How we deliver personalized builds"
      eyebrow="Services"
      copy="Engage the platform team that architects, ships, and supports your tailored version end-to-end."
      className="pb-32"
      headingLevel={1}
    >
      <div className="space-y-6 text-lg text-[color:var(--muted)]">
        <p>
          Each engagement starts with a build audit, shared roadmap, and a joint definition of success. We align delivery to
          your release cadence and coordinate closely with engineering and product stakeholders.
        </p>
        <p>
          Dedicated implementation pods cover integration, compliance hardening, and lifecycle operations so you can launch
          quickly without adding permanent headcount.
        </p>
      </div>
    </Section>
  );
}
