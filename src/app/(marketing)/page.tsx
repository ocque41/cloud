import Link from "next/link";

import { Hero } from "@/components/site/hero";
import { Section } from "@/components/site/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Discover",
    description: "Mini audit of your tools and goals.",
  },
  {
    title: "Plan",
    description: "Short plan with the must-do work.",
  },
  {
    title: "Build & Connect",
    description: "Quick wins live and every system tied together.",
  },
  {
    title: "Run & Improve",
    description: "Weekly maintenance so the flow stays fast.",
  },
];

const whatWeDoBullets = [
  "Set up your site, bookings, catalog, payments, and CRM.",
  "Connect chat, pixels, and tracking so campaigns show true results.",
  "Shorten the steps from see → choose → pay.",
  "Write sales-ready pages, menus, and FAQs.",
  "Give you one dashboard and playbook to keep it running.",
];

const services = [
  {
    title: "Setup & Connect",
    description: "Website, bookings, catalog, payments, CRM, and chat—connected.",
  },
  {
    title: "Sell Online & In-Person",
    description: "Campaigns, pixels, product feeds, landing pages, and quick offers.",
  },
  {
    title: "Fix the Flow",
    description: "Make see → choose → pay fast with clear info and buttons.",
  },
  {
    title: "Content that helps sales",
    description: "Offer pages, FAQs, menus, reels, and product shots that answer doubts.",
  },
  {
    title: "Dashboards & Checklists",
    description: "One page of numbers plus simple playbooks.",
  },
  {
    title: "Keep Improving",
    description: "Weekly checks for faster pages and fewer clicks.",
  },
];

const proof = [
  {
    name: "Iberik Hotels",
    result: "+22% direct bookings after fixing the room flow and tracking.",
  },
  {
    name: "Martina Maletti",
    result: "Showroom drops and pre-orders stay sold out with accurate pixels.",
  },
  {
    name: "Vaness",
    result: "1-tap appointments with add-on sales during checkout.",
  },
  {
    name: "Pompeo DJs",
    result: "Faster quote replies and cleaner availability requests.",
  },
  {
    name: "AROS Coffee",
    result: "Subscription sign-ups grow with clear gear and grind answers.",
  },
];

const miniCases = [
  {
    category: "Hotels & Spas",
    title: "Iberik",
    lines: [
      "Ad → hotel page → obvious date and room picker.",
      "Seasonal packages and gift cards featured.",
      "Booking events tracked right for revenue.",
    ],
  },
  {
    category: "Fashion / Showrooms",
    title: "Martina Maletti",
    lines: [
      "Drops, pre-orders, and size help in one place.",
      "“DM to reserve” tied to appointment slots.",
      "Clean checkout plus accurate pixel events.",
    ],
  },
  {
    category: "Salons / Clinics",
    title: "Vaness",
    lines: [
      "Service menu that sells with 1-tap booking.",
      "Retail add-ons shown at checkout.",
      "After-care reminders keep clients returning.",
    ],
  },
  {
    category: "Events & DJs",
    title: "Pompeo",
    lines: [
      "Availability calendar and package selector.",
      "Fast quote form that captures essentials.",
      "Follow-up steps handled automatically.",
    ],
  },
  {
    category: "Coffee / DTC",
    title: "AROS",
    lines: [
      "Product pages explain taste, gear, and grind.",
      "Simple subscription beside trusted reviews.",
      "“Buy” sits near proof to drive repeat orders.",
    ],
  },
];

const pricing = [
  {
    tier: "Starter",
    blurb: "Launch essentials in 4–6 weeks.",
    items: [
      "Audit + roadmap",
      "Core site/booking build",
      "Payments and CRM connected",
      "Dashboard with top metrics",
    ],
  },
  {
    tier: "Growth",
    blurb: "Scale campaigns and conversion flows.",
    items: [
      "Everything in Starter",
      "Ad campaigns + tracking",
      "Offer pages & funnels",
      "Weekly optimization check-ins",
    ],
  },
  {
    tier: "Custom",
    blurb: "For complex stacks or multi-country launches.",
    items: [
      "Co-created scope",
      "Integrations & automations",
      "Team enablement playbooks",
      "Dedicated success lead",
    ],
  },
];

const faqs = [
  {
    question: "How long to launch?",
    answer: "Starter ships in 4–6 weeks. Bigger scopes get a timeline in week one.",
  },
  {
    question: "What tools do you set up?",
    answer: "Websites, bookings, ecommerce, payments, CRMs, chat, and analytics.",
  },
  {
    question: "Do you migrate data?",
    answer: "Yes—customers, products, and bookings move over clean.",
  },
  {
    question: "How do we measure results?",
    answer: "Shared dashboard with bookings, orders, cost, and return.",
  },
  {
    question: "What happens after launch?",
    answer: "We keep running it: fixes, copy tweaks, and speed upgrades.",
  },
];

export default function Page() {
  return (
    <div className="space-y-24">
      <Hero />

      <Section
        title="How we work"
        eyebrow="Process"
        copy="Mini audit → short plan → quick wins live → weekly maintenance."
      >
        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          {steps.map((step, index) => (
            <Card
              key={step.title}
              className="group relative overflow-hidden border border-white/5 bg-[#1b1b1bcc] backdrop-blur transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                aria-hidden
                className="absolute inset-y-0 left-0 w-[3px]"
                style={{
                  background: "linear-gradient(180deg, var(--fg) 0%, rgba(255,255,255,0) 100%)",
                }}
              />
              <CardHeader className="relative flex flex-col gap-2 pl-12 pr-6 pt-6 pb-4">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)] opacity-80">
                  Step {String(index + 1).padStart(2, "0")}
                </span>
                <CardTitle className="text-2xl font-semibold text-[color:var(--fg)]">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pl-12 pr-6 pb-6 pt-0">
                <CardDescription className="text-base leading-relaxed text-[color:var(--muted)]">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="What we do"
        eyebrow="Overview"
        copy="We build and run software so customers move from click to paid fast. We connect your website, bookings, payments, and follow-up in one flow."
      >
        <ul className="grid gap-4 text-sm text-[color:var(--muted)] md:grid-cols-2">
          {whatWeDoBullets.map((bullet) => (
            <li
              key={bullet}
              className="rounded-2xl border border-white/5 bg-[#181818e6] p-4"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="Services"
        eyebrow="Plain words"
        copy="Plain words, zero jargon—pick what you need."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border border-white/5 bg-[#181818cc] backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[color:var(--fg)]">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-[color:var(--muted)]">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Proof strip"
        eyebrow="Signals"
        copy="Weekly maintenance keeps links working and leads in the pipeline."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {proof.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-white/5 bg-[#151515e6] p-6 text-sm text-[color:var(--muted)] shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            >
              <p className="text-base font-semibold text-[color:var(--fg)]">
                {item.name}
              </p>
              <p className="mt-3 leading-relaxed">{item.result}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Quick examples by business type"
        eyebrow="Case snapshots"
        copy="Scan quick wins by business type."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {miniCases.map((miniCase) => (
            <Card
              key={miniCase.category}
              className="flex h-full flex-col justify-between border border-white/5 bg-[#191919d9] p-6"
            >
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]/80">
                  {miniCase.category}
                </span>
                <CardTitle className="text-xl text-[color:var(--fg)]">
                  {miniCase.title}
                </CardTitle>
                <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
                  {miniCase.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
              <Button
                asChild
                variant="ghost"
                className="mt-6 justify-start px-0 text-sm text-[color:var(--fg)] hover:text-[color:var(--fg)]/80"
              >
                <Link href="/case-studies">See details →</Link>
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Pricing snapshot"
        eyebrow="Packages"
        copy="Starter, Growth, or Custom—choose what fits now."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {pricing.map((tier) => (
            <Card
              key={tier.tier}
              className="flex h-full flex-col border border-white/5 bg-[#171717d9] p-6"
            >
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]/80">
                  {tier.tier}
                </span>
                <CardTitle className="text-2xl text-[color:var(--fg)]">
                  {tier.blurb}
                </CardTitle>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-[color:var(--muted)]">
                {tier.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="FAQ"
        eyebrow="Short answers"
        copy="Short answers so you know what happens next."
      >
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/5 bg-[#151515e6] p-6"
            >
              <summary className="cursor-pointer text-lg font-semibold text-[color:var(--fg)]">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Section>

      <section className="container py-16">
        <div className="flex flex-col gap-6 rounded-3xl border border-white/5 bg-[#141414f2] p-8 text-[color:var(--fg)] shadow-[0_35px_90px_rgba(0,0,0,0.45)] lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Need a 15-minute check?</h2>
            <p className="text-sm text-[color:var(--muted)]">
              WhatsApp, email, or book a quick call—whatever gets answers fastest.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-[color:var(--muted)] lg:text-right">
            <a href="https://wa.me/34600000000" className="text-[color:var(--fg)] hover:text-[color:var(--fg)]/80">
              WhatsApp: +34 600 000 000
            </a>
            <a href="mailto:hello@cumulus.so" className="text-[color:var(--fg)] hover:text-[color:var(--fg)]/80">
              Email: hello@cumulus.so
            </a>
            <Button asChild size="lg" variant="outline" className="self-start lg:self-end">
              <Link href="/contact">Book a 15-min check</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
