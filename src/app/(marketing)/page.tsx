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
    description: "Mini audit of your tools and goals.",
  },
  {
    title: "Plan",
    description: "Short plan with the must-do work.",
  },
  {
    title: "Build & Connect",
    description: "Quick wins live and every system tied together.",
  },
  {
    title: "Run & Improve",
    description: "Weekly maintenance so the flow stays fast.",
  },
];

export default function Page() {
  return (
    <div className="space-y-24">
      <Hero />

      <Section
        title="Product"
        eyebrow="Process"
        copy="Mini audit → short plan → quick wins live → weekly maintenance."
      >
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
    </div>
  );
}
