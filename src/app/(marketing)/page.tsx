import { Hero } from "@/components/site/hero";
import { Section } from "@/components/site/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          {steps.map((step, index) => (
            <Card
              key={step.title}
              className="group relative overflow-hidden border border-white/5 bg-[#1b1b1bcc] backdrop-blur transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                aria-hidden
                className="absolute inset-y-0 left-0 w-[3px]"
                style={{
                  background: "linear-gradient(180deg, var(--fg) 0%, rgba(255,255,255,0) 100%)",
                }}
              />
              <CardHeader className="relative flex flex-col gap-2 pl-12 pr-6 pt-6 pb-4">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)] opacity-80">
                  Step {String(index + 1).padStart(2, "0")}
                </span>
                <CardTitle className="text-2xl font-semibold text-[color:var(--fg)]">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pl-12 pr-6 pb-6 pt-0">
                <CardDescription className="text-base leading-relaxed text-[color:var(--muted)]">
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
