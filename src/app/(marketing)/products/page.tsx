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
          <Link key={product.slug} href={`/products/${product.slug}`} className="block group">
            <Card className="flex h-full flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border-2 hover:border-[color:var(--fg)]/30">
              <div>
                <CardHeader>
                  <Badge variant="subtle" className="uppercase tracking-wide text-[10px]">
                    {product.tech.join(" • ")}
                  </Badge>
                  <CardTitle className="mt-4 text-2xl font-semibold text-[color:var(--fg)] group-hover:text-[color:var(--fg)]/80 transition-colors">
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
                <Button asChild variant="muted">
                  <span>Personalize</span>
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
