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
        title="Featured product you can tailor"
        eyebrow="Focus"
        copy="Interactive Shader Card — theme it, control parameters, or export as a static asset to meet your brand guidelines."
      >
        <div className="space-y-6 text-lg text-[color:var(--muted)] lg:max-w-3xl">
          <p>
            Our shader technology ships with configurable palettes, animation
            controls, and accessibility fallbacks out of the box. It’s the same
            visual engine powering this page’s hero.
          </p>
          <p>
            We’ll tune it to your stack—be that React, native, or embedded in a
            rendering pipeline—then deliver it as a maintained, private package.
          </p>
        </div>
      </Section>
    </div>
  );
}
