export type Product = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  expertise: string;
  use: string;
  highlights: string[];
  body: string;
};

export const products: Product[] = [
  {
    slug: "micro-agents",
    name: "Micro Agents",
    summary: "Autonomous micro agents accelerating enterprise SaaS operational workflows.",
    description:
      "Auto AI micro agents handle repetitive operational work so your teams stay focused on decisions.",
    expertise: "SaaS & Operations",
    use: "Enterprise",
    highlights: [
      "Automates micro tasks from intake through delivery",
      "Improves pipeline visibility with measurable efficiency gains",
      "Configurable agent requirements per use case",
    ],
    body: `## What it is
Auto AI Micro Agent to automate small tasks without having to even look at it.

## Why teams choose it
We have specialized in automating micro works for speeding pipeline efficiency in small business environments which have improved our clients' decision-making timeframe and pilots metrics.

## Customization options
- Select your operational use case and we will tailor the agent flows.
- Calibrate automation depth, handoff policies, and compliance logging.
- Connect to your existing SaaS stack before deployment.`,
  },
  {
    slug: "blocks",
    name: "Blocks",
    summary: "Modular command terminal for managing teams and pipelines effortlessly.",
    description:
      "Blocks centralizes workforce orchestration with visual pipelines, enterprise security, and collaborative intelligence.",
    expertise: "Team management & Pipeline visualizer",
    use: "Small Business",
    highlights: [
      "Visual component editor for bespoke team workflows",
      "Enterprise security with session management",
      "Analytics suite with historical intelligence",
    ],
    body: `## Core concept
Blocks is an easy enterprise grade organization terminal.

## Feature pillars
- **Visual Component Editor** — build and adapt operational dashboards without code.
- **Enterprise Security & Authentication** — advanced authentication with 8-digit codes and session management.
- **Analytics, Historical Analytics & Intelligence** — comprehensive tracking with automated snapshots and audit trails.
- **Management Advanced Workforce Management** — assign and track projects across your entire workforce.
- **Collaboration** — live collaboration for real-time editing and instant updates across teams.

## Tailoring opportunities
Shape the command center around your pipeline, roles, and governance requirements. We align integrations, data retention, and permissions with your policies before deployment.`,
  },
  {
    slug: "operation-agents",
    name: "Operation Agents",
    summary: "Private operations platform simulating complex missions across energy and transport.",
    description:
      "Operation Agents simulate, test, and document critical missions so enterprise teams launch with confidence.",
    expertise: "AI & Operations",
    use: "Enterprise",
    highlights: [
      "Private platform for regulated transportation, energy, and security teams",
      "Simulation environments to validate procedures before production",
      "Automated reporting and BPMN optimization",
    ],
    body: `## Mission profile
Operation Agents is a private platform for enterprises in the areas of transportation, energy and security.

## How it supports your teams
Helps the team get tests and data right before the production stage, simulating real world environments the agents show our clients how to perform complex operations and save the data for future tests.

## After launch
After testing and training is secured to start the real work the agents will take care of writing reports and optimize the Business Process Model and Notation on each execution.`,
  },
  {
    slug: "resuming",
    name: "Resuming",
    summary: "AI document concierge transforming uploads into compliant, formatted deliverables.",
    description:
      "Resuming automates document analysis, editing, and formatting with domain-specific intelligence for every team.",
    expertise: "AI & Documents",
    use: "Small Business",
    highlights: [
      "Uploads-to-deliverables automation across document types",
      "Area-specific personalization for signatures and approvals",
      "Download-ready outputs with audit-friendly edits",
    ],
    body: `## What Resuming delivers
Resuming is an AI powered document analysis and optimization platform.

## Instant document intelligence
With uploading a file and clicking a button the AI takes care of everything from analyzing and editing to changing the format and giving it to you ready to download.

## Personalization paths
This product is able to be personalized for clients in different areas of use case. For example, in an enterprise environment where more than 50 documents have to be signed, the software would be trained and specified to put the according signature where it should be and keep the document updated.`,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
