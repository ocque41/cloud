import { Section } from "@/components/site/section";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Security Overview",
  description: "Review compliance posture, data residency choices, and audit support for personalized builds.",
  path: "/docs/security",
});

export default function SecurityDocPage() {
  return (
    <Section
      title="Security and compliance playbook"
      eyebrow="Docs"
      copy="Understand how we align with your governance model and satisfy due diligence for regulated environments."
      className="pb-32"
      headingLevel={1}
    >
      <div className="space-y-6 text-lg text-[color:var(--muted)]">
        <p>
          Cumulus provides SOC 2 Type II reporting, penetration test summaries, and data flow diagrams tailored to your
          deployment. Choose from regional hosting footprints and optional isolated infrastructure controls.
        </p>
        <p>
          We collaborate with your security and procurement teams to complete questionnaires, provide evidence, and establish
          incident response channels before production launch.
        </p>
      </div>
    </Section>
  );
}
