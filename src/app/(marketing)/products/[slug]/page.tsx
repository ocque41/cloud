import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { RequestForm } from "@/components/site/request-form";
import { Badge } from "@/components/ui/badge";
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
      <div className="space-y-6">
        <Badge variant="subtle" className="uppercase tracking-wide text-[10px]">
          {product.tech.join(" • ")}
        </Badge>
        <h1 className="display max-w-4xl">{product.name}</h1>
        <p className="lead max-w-2xl">{product.short}</p>
      </div>

      <Separator className="my-12" />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6 text-lg text-[color:var(--muted)]">
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
            We work alongside your engineering, design, and security teams to
            tailor this product to your stack. Expect a detailed spec, an
            integration plan, and regular build reviews.
          </p>
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
