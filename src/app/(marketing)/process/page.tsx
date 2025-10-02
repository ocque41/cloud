import { Section } from "@/components/site/section";
import { Separator } from "@/components/ui/separator";
import { buildMetadata } from "@/lib/metadata";

const phases = [
  {
    title: "Discover",
    copy: "We immerse in your requirements, audit constraints, and align on outcomes with stakeholders.",
  },
  {
    title: "Spec",
    copy: "Cumulus engineers produce a detailed technical spec with timelines, integration points, and compliance notes.",
  },
  {
    title: "Build",
    copy: "We customize the product in a dedicated environment, pairing with your team for demos and feedback loops.",
  },
  {
    title: "Handover",
    copy: "Launch-ready builds with documentation, runbooks, and a support SLA—plus versioned updates as your needs evolve.",
  },
];

export const metadata = buildMetadata({
  title: "Process",
  description: "Discover the four-stage method we use to personalize every Cumulus product.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <Section
      title="Our four-step method"
      eyebrow="Method"
      copy="A proven flow that keeps your team in the loop while we tailor the product you selected."
      className="pb-32"
    >
      <div className="space-y-10">
        {phases.map((phase, index) => (
          <div key={phase.title} className="space-y-4">
            <div className="flex items-baseline gap-4">
              <span className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-semibold text-[color:var(--fg)]">
                {phase.title}
              </h3>
            </div>
            <p className="text-lg text-[color:var(--muted)]">{phase.copy}</p>
            {index < phases.length - 1 ? <Separator className="border-[color:var(--muted)]/30" /> : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
