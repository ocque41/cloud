import { RequestForm } from "@/components/site/request-form";
import { Section } from "@/components/site/section";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Reach out to the Cumulus team for a personalized product build consultation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section
      title="Start your next build"
      eyebrow="Contact"
      copy="We’re rethinking Cumulus and would love to hear what you need next. Share a bit about your team, tools, and goals, and we’ll respond with a plan."
      className="pb-32"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6 text-lg text-[color:var(--muted)]">
          <p>
            We’re simplifying the site to focus on what matters: clear outcomes
            for your business. Tell us what you’re building, migrating, or
            fixing, and we’ll line up the right next steps.
          </p>
          <p>
            Prefer direct outreach? Email <a href="mailto:hello@cumulus.example" className="underline">hello@cumulus.example</a>
            or call +1 (555) 010-2024.
          </p>
        </div>
        <div className="rounded-3xl border border-[color:var(--muted)]/30 bg-[#1f1f1f] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <RequestForm />
        </div>
      </div>
    </Section>
  );
}
