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
      title="Start your personalized build"
      eyebrow="Contact"
      copy="Tell us about your team, your stack, and the outcomes you’re aiming for. We’ll respond with next steps."
      className="pb-32"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6 text-lg text-[color:var(--muted)]">
          <p>
            We collaborate with product leaders, CTOs, and platform teams that
            need a custom-fit version of our portfolio. Every engagement begins
            with a technical discovery call.
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
