import { Section } from "@/components/site/section";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Support Tiers",
  description: "Choose the support program that matches your uptime, response, and roadmap partnership needs.",
  path: "/docs/support",
});

export default function SupportDocPage() {
  return (
    <Section
      title="Support programs built for dedicated releases"
      eyebrow="Docs"
      copy="Pick the partnership tier that pairs your team with the right mix of response speed, roadmap access, and SLAs."
      className="pb-32"
      headingLevel={1}
    >
      <div className="space-y-6 text-lg text-[color:var(--muted)]">
        <p>
          All tiers include a customer engineer, direct escalation channels, and proactive release notes for your personalized
          build. Premium options add site reliability rotations, roadmap reviews, and quarterly optimization workshops.
        </p>
        <p>
          We adapt the support cadence to your operating model so you never have to translate product insights for your
          stakeholders.
        </p>
      </div>
    </Section>
  );
}
