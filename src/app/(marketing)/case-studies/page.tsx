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

const processSteps = [
  {
    title: "Discovery",
    description:
      "We analyze your requirements, existing systems, and business objectives to design the optimal solution.",
  },
  {
    title: "Architecture Design",
    description:
      "Our engineers create a detailed technical specification with integration plans and success metrics.",
  },
  {
    title: "Custom Development",
    description:
      "We build and fine-tune the solution with your team, ensuring it meets your exact specifications.",
  },
  {
    title: "Integration & Testing",
    description:
      "Deploy to your environment with comprehensive testing, security reviews, and performance optimization.",
  },
  {
    title: "Training & Handoff",
    description:
      "Your team receives complete documentation, training, and ongoing support with guaranteed SLAs.",
  },
  {
    title: "Continuous Optimization",
    description:
      "We monitor performance, gather feedback, and deliver updates to keep your solution improving.",
  },
];

export default function CaseStudiesPage() {
  const flagshipModels = getCaseStudyModelsByCategory("flagship");
  const apiModels = getCaseStudyModelsByCategory("api");
  const toolModels = getCaseStudyModelsByCategory("tool");
  const agentModels = getCaseStudyModelsByCategory("agent");

  const [activeTab, setActiveTab] = useState("flagship");

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
            <Card key={model.slug} className="relative overflow-hidden">
              <div className="absolute inset-0 -z-10">
                <InteractiveShaderCard className="h-full w-full opacity-20" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{model.name}</CardTitle>
                <CardDescription className="text-base">
                  {model.short}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--fg)]" />
                      <span className="text-sm text-[color:var(--muted)]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/case-studies/${model.slug}`}>
                    Learn more →
                  </Link>
                </Button>
              </CardContent>
            </Card>
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
              value="flagship"
              className="data-[state=active]:bg-[color:var(--muted)]"
            >
              Flagship Models
            </TabsTrigger>
            <TabsTrigger
              value="api"
              className="data-[state=active]:bg-[color:var(--muted)]"
            >
              API Platform
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="data-[state=active]:bg-[color:var(--muted)]"
            >
              Intelligent Tools
            </TabsTrigger>
            <TabsTrigger
              value="agents"
              className="data-[state=active]:bg-[color:var(--muted)]"
            >
              Agent Framework
            </TabsTrigger>
          </TabsList>

          <TabsContent value="flagship" className="mt-12 space-y-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold">
                  {flagshipModels[0]?.name}
                </h3>
                <p className="text-lg text-[color:var(--muted)]">
                  {flagshipModels[0]?.definition}
                </p>
                <Button asChild variant="ghost">
                  <Link href={`/case-studies/${flagshipModels[0]?.slug}`}>
                    Learn more →
                  </Link>
                </Button>
              </div>
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-[color:var(--muted)]/20">
                <InteractiveShaderCard className="h-full w-full" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="api" className="mt-12 space-y-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold">
                  {apiModels[0]?.name}
                </h3>
                <p className="text-lg text-[color:var(--muted)]">
                  {apiModels[0]?.definition}
                </p>
                <Button asChild variant="ghost">
                  <Link href={`/case-studies/${apiModels[0]?.slug}`}>
                    Learn more →
                  </Link>
                </Button>
              </div>
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-[color:var(--muted)]/20">
                <InteractiveShaderCard className="h-full w-full" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tools" className="mt-12 space-y-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold">
                  {toolModels[0]?.name}
                </h3>
                <p className="text-lg text-[color:var(--muted)]">
                  {toolModels[0]?.definition}
                </p>
                <Button asChild variant="ghost">
                  <Link href={`/case-studies/${toolModels[0]?.slug}`}>
                    Learn more →
                  </Link>
                </Button>
              </div>
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-[color:var(--muted)]/20">
                <InteractiveShaderCard className="h-full w-full" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="agents" className="mt-12 space-y-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold">
                  {agentModels[0]?.name}
                </h3>
                <p className="text-lg text-[color:var(--muted)]">
                  {agentModels[0]?.definition}
                </p>
                <Button asChild variant="ghost">
                  <Link href={`/case-studies/${agentModels[0]?.slug}`}>
                    Learn more →
                  </Link>
                </Button>
              </div>
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-[color:var(--muted)]/20">
                <InteractiveShaderCard className="h-full w-full" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Process Steps */}
      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-semibold">
            How we tailor products for your company
          </h2>
          <p className="lead mx-auto max-w-2xl">
            Our proven process ensures every customization meets your exact
            requirements and integrates seamlessly with your systems.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <Card key={step.title}>
              <CardHeader>
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--fg)] text-sm font-bold text-[#171717]">
                    {index + 1}
                  </span>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Specialized Models */}
      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-semibold">
            Specialized models for every use case
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {[apiModels[0], toolModels[0]].map((model) => (
            <div
              key={model?.slug}
              className="space-y-6 rounded-3xl border border-[color:var(--muted)]/20 bg-[#1f1f1f] p-8"
            >
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-[color:var(--muted)]/20">
                <InteractiveShaderCard className="h-full w-full" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{model?.name}</h3>
                <p className="text-[color:var(--muted)]">{model?.definition}</p>
                <Button asChild variant="ghost">
                  <Link href={`/case-studies/${model?.slug}`}>
                    Learn more →
                  </Link>
                </Button>
              </div>
            </div>
          ))}
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
