import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

import InteractiveShaderCard from "@/components/interactive-shader-card";
import { RequestForm } from "@/components/site/request-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { buildMetadata } from "@/lib/metadata";
import { getUseCaseBySlug, useCases } from "@/lib/use-cases";

export function generateStaticParams() {
  return useCases.map((useCase) => ({ slug: useCase.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    return buildMetadata({ title: "Use Case", path: `/use-cases/${slug}` });
  }

  return buildMetadata({
    title: `${useCase.company} - ${useCase.name}`,
    description: useCase.short,
    path: `/use-cases/${useCase.slug}`,
  });
}

export default async function UseCaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    notFound();
  }

  return (
    <div className="container pb-24">
      <div className="space-y-6 text-center">
        <Badge variant="subtle" className="uppercase tracking-wide text-[10px]">
          {useCase.industry}
        </Badge>
        <h1 className="display mx-auto max-w-4xl">{useCase.company}</h1>
        <p className="lead mx-auto max-w-2xl">{useCase.name}</p>
      </div>

      <div className="mt-12 flex justify-center">
        <InteractiveShaderCard className="aspect-[3/2] w-full max-w-4xl border border-[color:var(--muted)]/20 bg-[#1b1b1b] shadow-[0_35px_120px_rgba(0,0,0,0.35)]" />
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <Button asChild size="lg" className="!text-[#171717]">
          <Link href={`/contact?product=${useCase.slug}`}>Personalize</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/contact">Contact us</Link>
        </Button>
      </div>

      <Separator className="my-12" />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-10 text-left text-lg text-[color:var(--muted)]">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[color:var(--fg)]">
              Overview
            </h2>
            <p>{useCase.definition}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[color:var(--fg)]">
              Industry
            </h2>
            <p>{useCase.industry}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[color:var(--fg)]">
              The Challenge
            </h2>
            <p>{useCase.challenge}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[color:var(--fg)]">
              The Solution
            </h2>
            <p>{useCase.solution}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[color:var(--fg)]">
              Full Story
            </h2>
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h3 className="text-xl font-semibold text-[color:var(--fg)]">
                    {children}
                  </h3>
                ),
                h3: ({ children }) => (
                  <h4 className="text-lg font-semibold text-[color:var(--fg)]">
                    {children}
                  </h4>
                ),
                p: ({ children }) => (
                  <p className="text-lg text-[color:var(--muted)]">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc space-y-2 pl-5 text-lg">{children}</ul>
                ),
                li: ({ children }) => <li>{children}</li>,
              }}
            >
              {useCase.fullDescription}
            </ReactMarkdown>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[color:var(--fg)]">
              Results
            </h2>
            <ul className="space-y-3">
              {useCase.results.map((result) => (
                <li key={result} className="flex gap-3">
                  <span
                    className="mt-1 inline-block h-2 w-2 rounded-full bg-[color:var(--fg)]"
                    aria-hidden
                  />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[color:var(--fg)]">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {useCase.tech.map((tech) => (
                <Badge key={tech} variant="subtle">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>
        </div>
        <div className="rounded-3xl border border-[color:var(--muted)]/30 bg-[#1f1f1f] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <h2 className="text-xl font-semibold text-[color:var(--fg)]">
            Build something similar
          </h2>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Share your requirements and we&apos;ll respond with a tailored solution
            plan.
          </p>
          <div className="mt-6">
            <RequestForm defaultProduct={useCase.slug} />
          </div>
        </div>
      </div>
    </div>
  );
}
