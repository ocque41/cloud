import "@/styles/prose.css";

import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

import { RequestForm } from "@/components/site/request-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import InteractiveShaderCard from "@/components/interactive-shader-card";
import { buildMetadata } from "@/lib/metadata";
import { getProductBySlug, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return buildMetadata({ title: "Product", path: `/products/${slug}` });
  }

  return buildMetadata({
    title: product.name,
    description: product.description,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container pb-24">
      <div className="space-y-6">
        <Badge variant="subtle" className="uppercase tracking-wide text-[10px]">
          {product.expertise} • {product.use}
        </Badge>
        <h1 className="display max-w-4xl">{product.name}</h1>
        <p className="lead max-w-3xl">{product.description}</p>
        <div className="flex flex-wrap items-center gap-3 text-sm text-[color:var(--muted)]">
          {product.highlights.map((highlight) => (
            <span key={highlight} className="rounded-full border border-[color:var(--muted)]/40 px-3 py-1">
              {highlight}
            </span>
          ))}
        </div>
        <Button asChild variant="muted" className="mt-2 w-fit">
          <Link href={`/contact?product=${product.slug}`}>Personalize via contact</Link>
        </Button>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl">
        <div className="aspect-[16/9]">
          <InteractiveShaderCard aria-label={`${product.name} interactive hero`} />
        </div>
      </div>

      <Separator className="my-12" />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <article className="prose max-w-none text-base text-[color:var(--fg)]/90">
          <ReactMarkdown>{product.body}</ReactMarkdown>
        </article>
        <div className="rounded-3xl border border-[color:var(--muted)]/30 bg-[#1f1f1f] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <h2 className="text-xl font-semibold text-[color:var(--fg)]">
            Request customization
          </h2>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Share your requirements and we’ll respond with a tailored build plan.
          </p>
          <div className="mt-6">
            <RequestForm defaultProduct={product.slug} />
          </div>
        </div>
      </div>
    </div>
  );
}
