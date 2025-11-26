import { MicroagentsAgentCurve } from "@/registry/new-york/microagents-agent-curve/microagents-agent-curve";
import { MicroagentsArrow } from "@/registry/new-york/microagents-arrow/microagents-arrow";
import { MicroagentsButton } from "@/registry/new-york/microagents-button/microagents-button";
import { MicroagentsButtonAlt } from "@/registry/new-york/microagents-button-alt/microagents-button-alt";
import { MicroagentsCircle } from "@/registry/new-york/microagents-circle/microagents-circle";
import { MicroagentsLink } from "@/registry/new-york/microagents-link/microagents-link";
import { MicroagentsPanel } from "@/registry/new-york/microagents-panel/microagents-panel";
import { MicroagentsSend } from "@/registry/new-york/microagents-send/microagents-send";
import { MicroagentsUserCurve } from "@/registry/new-york/microagents-user-curve/microagents-user-curve";

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 bg-background px-6 py-12">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)]">
          Microagents Component Registry
        </p>
        <h1 className="text-3xl font-semibold text-[color:var(--fg)]">
          Live previews for every registry-ready component
        </h1>
        <p className="max-w-3xl text-sm text-[color:var(--muted)]">
          These TSX implementations are the same ones emitted to the registry JSON files. Install them
          via shadcn and they will match what you see here.
        </p>
      </div>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <MicroagentsPanel />
        <div className="space-y-4">
          <MicroagentsButton className="w-full" />
          <MicroagentsButtonAlt className="w-full" />
          <MicroagentsArrow className="w-full" />
          <MicroagentsCircle className="w-full" />
          <MicroagentsLink
            label="Prioritize urgent triage"
            description="Send to the triage and comms microagents"
            className="w-full"
          />
          <MicroagentsSend className="w-full" />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <MicroagentsAgentCurve className="w-full" />
        <MicroagentsUserCurve className="w-full" />
      </section>
    </main>
  );
}
