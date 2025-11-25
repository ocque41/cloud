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
import { services } from "@/lib/services";

export const metadata = buildMetadata({
  title: "Services",
  description: "Understand the engagement model, delivery tracks, and guarantees for custom Cumulus builds.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <Section
      title="Choose the service track you’d like us to run"
      eyebrow="Services"
      copy="Engage delivery pods that plan, ship, and evolve your build across software, web, search, and paid media."
      className="pb-32"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.slug} className="group relative">
            <Card className="relative flex h-full flex-col justify-between border-2 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--fg)]/30 hover:shadow-lg">
              <div>
                <CardHeader>
                  <Badge variant="subtle" className="uppercase tracking-wide text-[10px]">
                    {service.focus.join(" • ")}
                  </Badge>
                  <CardTitle className="mt-4 text-2xl font-semibold text-[color:var(--fg)] transition-colors group-hover:text-[color:var(--fg)]/80">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-[color:var(--fg)]/80">
                    {service.short}
                  </CardDescription>
                </CardContent>
              </div>
              <CardFooter className="justify-between">
                <span className="text-sm text-[color:var(--muted)]">
                  {service.features[0]}
                </span>
                <Button
                  asChild
                  variant="secondary"
                  className="relative z-20 !text-[#171717]"
                >
                  <Link href={`/contact?product=${service.slug}`}>Personalize</Link>
                </Button>
              </CardFooter>
            </Card>
            <Link
              href={`/services/${service.slug}`}
              className="absolute inset-0 z-10"
              aria-label={`View ${service.name}`}
            >
              <span className="sr-only">View {service.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
