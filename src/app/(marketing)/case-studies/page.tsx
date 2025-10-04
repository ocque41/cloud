"use client";

import Link from "next/link";
import { useState } from "react";

import InteractiveShaderCard from "@/components/interactive-shader-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCaseStudyModelsByCategory } from "@/lib/case-study-models";
import { useCases } from "@/lib/use-cases";

const clients = [
  "Paradigm",
  "WIX",
  "Government of Iceland",
  "WHOOP",
  "Ironclad",
];

const integrationSteps = [
  {
    title: "Initial Consultation",
    description:
      "Kick off with our strategists to clarify objectives, success metrics, and the data sources we will activate.",
  },
  {
    title: "Solution Blueprint",
    description:
      "Architect the ideal model mix, governance plan, and integration approach tailored to your stack.",
  },
  {
    title: "Pilot Build",
    description:
      "Prototype priority workflows, fine-tune models on your data, and validate with your stakeholders.",
  },
  {
    title: "Production Launch",
    description:
      "Harden the deployment, connect environments, and enable your teams with documentation and training.",
  },
  {
    title: "Measure & Optimize",
    description:
      "Track usage, surface insights, and iterate until the outcomes exceed your targets.",
  },
];

export default function CaseStudiesPage() {
  const flagshipModels = getCaseStudyModelsByCategory("flagship");
  const apiModels = getCaseStudyModelsByCategory("api");
  const toolModels = getCaseStudyModelsByCategory("tool");
  const agentModels = getCaseStudyModelsByCategory("agent");

  const [activeTab, setActiveTab] = useState("platform");

  return (
    <div className="space-y-32 pb-24">
      {/* Hero Section */}
      <section className="container space-y-8 pt-12 text-center">
        <Badge variant="subtle" className="uppercase tracking-wide">
          Case Studies
        </Badge>
        <h1 className="display mx-auto max-w-5xl">
          The fastest and most powerful platform for building AI products
        </h1>
        <p className="lead mx-auto max-w-3xl">
          Build transformative AI experiences powered by industry-leading models
          and tools.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" variant="default" className="text-[#171717]">
            <Link href="/contact">Contact Sales</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/products">Start building</Link>
          </Button>
        </div>
      </section>

      {/* Client Logos */}
      <section className="container">
        <div className="flex flex-wrap items-center justify-center gap-12 text-[color:var(--muted)]">
          {clients.map((client) => (
            <div
              key={client}
              className="text-lg font-medium uppercase tracking-wider"
            >
              {client}
            </div>
          ))}
        </div>
      </section>

      {/* Flagship Models */}
      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-semibold">
            Flagship models for product tailoring
          </h2>
          <p className="lead mx-auto max-w-2xl">
            Our frontier models designed to spend more time thinking before
            producing a response, making them ideal for complex, multi-step
            problems.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {flagshipModels.slice(0, 2).map((model) => (
            <Link
              key={model.slug}
              href={`/case-studies/${model.slug}`}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--fg)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)]"
            >
              <Card className="relative flex h-full flex-col overflow-hidden transition hover:border-[color:var(--muted)]/50">
                <div className="absolute inset-0 -z-10">
                  <InteractiveShaderCard className="h-full w-full opacity-25 transition group-hover:opacity-40" />
                </div>
                <CardHeader className="relative z-10 gap-4 p-8 pb-0">
                  <CardTitle className="text-2xl font-semibold">{model.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {model.definition}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 flex flex-1 flex-col justify-between gap-6 p-8 pt-6">
                  <div className="space-y-3">
                    <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]/80">
                      Key capabilities
                    </span>
                    <ul className="space-y-2 text-sm text-[color:var(--muted)]">
                      {model.capabilities.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--fg)]" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--fg)] transition group-hover:text-[color:var(--fg)]/80">
                    Learn more →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Tabbed Models Section */}
      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-semibold">
            Access the power of our models with APIs
          </h2>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mx-auto flex w-max gap-2 bg-transparent">
            <TabsTrigger
              value="platform"
              className="data-[state=active]:bg-[color:var(--muted)]"
            >
              API Platform
            </TabsTrigger>
            <TabsTrigger
              value="journey"
              className="data-[state=active]:bg-[color:var(--muted)]"
            >
              Integration Journey
            </TabsTrigger>
          </TabsList>

          <TabsContent value="platform" className="mt-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-start">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold">
                  {apiModels[0]?.name}
                </h3>
                <p className="text-lg text-[color:var(--muted)]">
                  {apiModels[0]?.definition}
                </p>
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]/80">
                    What you get
                  </span>
                  <ul className="space-y-2 text-sm text-[color:var(--muted)]">
                    {(apiModels[0]?.capabilities.slice(0, 5) ?? []).map((capability) => (
                      <li key={capability} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--fg)]" />
                        <span className="leading-relaxed">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild variant="ghost">
                  <Link href={`/case-studies/${apiModels[0]?.slug}`}>
                    Learn more →
                  </Link>
                </Button>
              </div>
              <div className="overflow-hidden rounded-3xl border border-[color:var(--muted)]/20 bg-[#111] p-3">
                <InteractiveShaderCard className="h-[360px] w-full" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="journey" className="mt-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
              <ol className="space-y-6">
                {integrationSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="rounded-3xl border border-[color:var(--muted)]/20 bg-[#1f1f1f] p-6 transition hover:border-[color:var(--muted)]/40"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--fg)] text-sm font-semibold text-[#171717]">
                        {index + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-[color:var(--fg)]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[color:var(--muted)]">{step.description}</p>
                  </li>
                ))}
              </ol>
              <div className="overflow-hidden rounded-3xl border border-[color:var(--muted)]/20 bg-[#111] p-3">
                <InteractiveShaderCard className="h-[360px] w-full" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Additional Specialized Models */}
      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-semibold">
            Specialized models for every use case
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {[apiModels[0], toolModels[0], agentModels[0]].map((model) => {
            if (!model) {
              return null;
            }

            return (
              <div
                key={model.slug}
                className="flex flex-col gap-6 rounded-3xl border border-[color:var(--muted)]/20 bg-[#1f1f1f] p-6 transition hover:border-[color:var(--muted)]/40 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-8"
              >
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-semibold">{model.name}</h3>
                  <p className="text-sm text-[color:var(--muted)] sm:text-base">
                    {model.definition}
                  </p>
                  <Button asChild variant="ghost" size="sm" className="w-fit">
                    <Link href={`/case-studies/${model.slug}`}>Learn more →</Link>
                  </Button>
                </div>
                <div className="overflow-hidden rounded-2xl border border-[color:var(--muted)]/20 bg-[#111] p-2 sm:w-64">
                  <InteractiveShaderCard className="h-48 w-full" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Use Cases */}
      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-semibold">
            Trusted by the world&apos;s most innovative organizations
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase) => (
            <Link
              key={useCase.slug}
              href={`/use-cases/${useCase.slug}`}
              className="group space-y-4 rounded-2xl border border-[color:var(--muted)]/20 bg-[#1f1f1f] p-6 transition hover:border-[color:var(--muted)]/40"
            >
              <div className="aspect-square w-full overflow-hidden rounded-xl border border-[color:var(--muted)]/20">
                <InteractiveShaderCard className="h-full w-full" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold group-hover:text-[color:var(--fg)]">
                  {useCase.company}
                </h3>
                <p className="text-sm text-[color:var(--muted)]">
                  {useCase.short}
                </p>
                <div className="pt-2 text-xs uppercase tracking-wide text-[color:var(--muted)]">
                  {useCase.industry}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
