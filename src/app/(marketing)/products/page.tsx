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
          <Card key={product.slug} className="flex h-full flex-col justify-between">
            <Link
              href={`/products/${product.slug}`}
              className="flex flex-1 flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--fg)]"
            >
              <CardHeader>
                <Badge variant="subtle" className="uppercase tracking-wide text-[10px]">
                  {product.expertise} • {product.use}
                </Badge>
                <CardTitle className="mt-4 text-2xl font-semibold text-[color:var(--fg)]">
                  {product.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <CardDescription className="text-base text-[color:var(--fg)]/80">
                  {product.summary}
                </CardDescription>
              </CardContent>
            </Link>
            <CardFooter className="justify-between">
              <span className="text-sm text-[color:var(--muted)]">
                {product.highlights[0]}
              </span>
              <Button asChild variant="muted">
                <Link href={`/contact?product=${product.slug}`}>Personalize</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
