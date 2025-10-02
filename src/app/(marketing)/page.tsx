import Link from "next/link";

import { Hero } from "@/components/site/hero";
import { Section } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6 text-lg text-[color:var(--muted)]">
            <p>
              Our shader technology ships with configurable palettes, animation
              controls, and accessibility fallbacks out of the box. It’s the
              same visual engine powering this page’s hero.
            </p>
            <p>
              We’ll tune it to your stack—be that React, native, or embedded in
              a rendering pipeline—then deliver it as a maintained, private
              package.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-[color:var(--muted)]/40 bg-[#1f1f1f] p-6">
            <div>
              <h3 className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Personalize this build
              </h3>
              <p className="mt-3 text-2xl font-semibold text-[color:var(--fg)]">
                Interactive Shader Card
              </p>
            </div>
            <ul className="space-y-2 text-sm text-[color:var(--muted)]">
              <li>• Theme to match your visual system</li>
              <li>• Expose parameters for your CMS or product team</li>
              <li>• Export static variants for low-motion contexts</li>
            </ul>
            <Button asChild>
              <Link href="/products/interactive-shader-card">
                Request this customization
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
