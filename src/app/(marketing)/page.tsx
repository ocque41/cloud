import { Hero } from "@/components/site/hero";
import { Section } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

const steps = [
  {
    title: "Pick a base",
    description: "Choose the Cumulus product closest to your need.",
  },
  {
    title: "We tailor it",
    description:
      "Specification, integrations, compliance reviews, and performance tuning handled end-to-end by our engineers.",
  },
  {
    title: "You own the build",
    description:
      "Dedicated environment, support SLA, and versioned updates so your team stays in control of every release.",
  },
];

export default function Page() {
  return (
    <div className="space-y-24">
      <Hero />

      <Section title="How the customization works" eyebrow="Process">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.title} className="h-full">
              <CardHeader>
                <Badge variant="subtle" className="w-max uppercase tracking-wide">
                  {step.title}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-[color:var(--fg)]/80">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Featured products you can tailor"
        eyebrow="Focus"
        copy="Five AI-powered products designed for operations, teams, revenue, and document workflows."
      >
        <div className="space-y-6 text-lg text-[color:var(--muted)] lg:max-w-3xl">
          <p>
            Micro Agents automate small tasks without manual oversight, accelerating decision pipelines for operations teams. Blocks delivers an enterprise terminal organizing teams, analytics, security, and real-time collaboration workflows.
          </p>
          <p>
            Operation Agents simulate missions and automate reports for transportation, energy, and security enterprises. Resuming handles AI-powered document analysis, editing, and formatting. DQuote manages configure-price-quote workflows to turn proposals into revenue.
          </p>
          <p>
            Every product ships with full source access, integration support, and dedicated maintenance so your team controls every release.
          </p>
        </div>
      </Section>
    </div>
  );
}
