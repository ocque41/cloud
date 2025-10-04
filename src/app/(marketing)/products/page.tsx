import Link from "next/link";

import { Section } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buildMetadata } from "@/lib/metadata";
import { products } from "@/lib/products";

export const metadata = buildMetadata({
  title: "Products",
  description: "Explore the Cumulus portfolio and personalize a build for your team.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <Section
      title="Pick the product you’d like us to tailor"
      eyebrow="Portfolio"
      copy="Each option can be extended, integrated, and delivered as a dedicated build for your environment."
      className="pb-32"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <div key={product.slug} className="group relative">
            <Card className="relative flex h-full flex-col justify-between border-2 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--fg)]/30 hover:shadow-lg">
              <div>
                <CardHeader>
                  <Badge variant="subtle" className="uppercase tracking-wide text-[10px]">
                    {product.tech.join(" • ")}
                  </Badge>
                  <CardTitle className="mt-4 text-2xl font-semibold text-[color:var(--fg)] transition-colors group-hover:text-[color:var(--fg)]/80">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-[color:var(--fg)]/80">
                    {product.short}
                  </CardDescription>
                </CardContent>
              </div>
              <CardFooter className="justify-between">
                <span className="text-sm text-[color:var(--muted)]">
                  {product.features[0]}
                </span>
                <Button
                  asChild
                  variant="muted"
                  className="relative z-20 !text-[#171717]"
                >
                  <Link href={`/contact?product=${product.slug}`}>Personalize</Link>
                </Button>
              </CardFooter>
            </Card>
            <Link
              href={`/products/${product.slug}`}
              className="absolute inset-0 z-10"
              aria-label={`View ${product.name}`}
            >
              <span className="sr-only">View {product.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
