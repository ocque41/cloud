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
    description: product.short,
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
      <div className="space-y-6 text-center">
        <Badge variant="subtle" className="uppercase tracking-wide text-[10px]">
          {product.tech.join(" • ")}
        </Badge>
        <h1 className="display max-w-4xl mx-auto">{product.name}</h1>
        <p className="lead max-w-2xl mx-auto">{product.short}</p>
      </div>

      <div className="mt-12 flex justify-center">
        <InteractiveShaderCard className="aspect-[3/2] w-full max-w-4xl border border-[color:var(--muted)]/20 bg-[#1b1b1b] shadow-[0_35px_120px_rgba(0,0,0,0.35)]" />
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <Button asChild size="lg" className="text-[#171717]">
          <Link href={`/contact?product=${product.slug}`}>Personalize</Link>
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
              Definition
            </h2>
            <p>{product.definition}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[color:var(--fg)]">
              Expertise
            </h2>
            <p>{product.expertise}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[color:var(--fg)]">
              Use
            </h2>
            <p>{product.use}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[color:var(--fg)]">
              Description
            </h2>
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h3 className="text-xl font-semibold text-[color:var(--fg)]">{children}</h3>
                ),
                h3: ({ children }) => (
                  <h4 className="text-lg font-semibold text-[color:var(--fg)]">{children}</h4>
                ),
                p: ({ children }) => <p className="text-lg text-[color:var(--muted)]">{children}</p>,
                ul: ({ children }) => <ul className="list-disc space-y-2 pl-5 text-lg">{children}</ul>,
                li: ({ children }) => <li>{children}</li>,
              }}
            >
              {product.fullDescription}
            </ReactMarkdown>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[color:var(--fg)]">
              What we can customize
            </h2>
            <ul className="space-y-3">
              {product.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[color:var(--fg)]" aria-hidden />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p>
              We work alongside your engineering, design, and security teams to tailor this product to your stack. Expect a
              detailed spec, an integration plan, and regular build reviews.
            </p>
          </section>
        </div>
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
