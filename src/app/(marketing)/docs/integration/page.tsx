import { Section } from "@/components/site/section";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Integration Guide",
  description: "Connect your environment to the personalized Cumulus build using our recommended rollout sequence.",
  path: "/docs/integration",
});

export default function IntegrationDocPage() {
  return (
    <Section
      title="Integration blueprint"
      eyebrow="Docs"
      copy="Map the endpoints, services, and orchestration steps required to ship your tailored build into production."
      className="pb-32"
    >
      <div className="space-y-6 text-lg text-[color:var(--muted)]">
        <p>
          Verify connectivity in staging, configure environment variables, and connect your observability stack before
          promoting to production. The integration blueprint covers authentication, data synchronization, and backfill
          requirements.
        </p>
        <p>
          Need hands-on assistance? Your implementation pod stays engaged through launch to pair with your engineers on any
          custom wiring.
        </p>
      </div>
    </Section>
  );
}
