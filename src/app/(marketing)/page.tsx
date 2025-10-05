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
    title: "Discover",
    description: "Learn your business, pains, and goals.",
  },
  {
    title: "Plan",
    description: "Choose the fastest path to value, write the simple roadmap.",
  },
  {
    title: "Build & connect",
    description:
      "Set up tools, forms, automations, and dashboards.",
  },
  {
    title: "Run & improve",
    description: "Monitor, maintain, and keep removing friction.",
  },
];

export default function Page() {
  return (
    <div className="space-y-24">
      <Hero />

      <Section title="How we work" eyebrow="Process">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
        title="What you get"
        eyebrow="Focus"
        copy="Clean setup of your tools (site, bookings, payments, CRM, email, chat)."
      >
        <div className="space-y-6 text-lg text-[color:var(--muted)] lg:max-w-3xl">
          <ul className="space-y-3">
            <li>Connected workflow so data moves smoothly between tools.</li>
            <li>Dashboards with only the key numbers you care about.</li>
            <li>Playbooks & checklists for your team.</li>
            <li>Reliable execution: updates, support, and small improvements on a steady schedule.</li>
          </ul>
          <div className="space-y-3">
            <p>
              We build and execute: we create the pages, forms, dashboards, and automations you need, then keep them working.
            </p>
            <p>
              We document everything: short guides and checklists so your team knows what to do, when, and how.
            </p>
            <p>
              We create pipelines (step-by-step workflows): from “lead comes in” → “follow-up” → “sale” → “delivery” → “after-sale care.”
            </p>
            <p>
              We improve every week: check results, fix bottlenecks, and remove extra clicks and waits.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
