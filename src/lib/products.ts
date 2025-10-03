export type Product = {
  slug: string;
  name: string;
  short: string;
  features: string[];
  tech: string[];
  heroImage?: string;
};

export const products: Product[] = [
  {
    slug: "interactive-shader-card",
    name: "Interactive Shader Card",
    short: "Customizable shader-driven hero component with motion controls and fallbacks.",
    features: [
      "Branded gradients and lighting profiles",
      "CMS-editable parameter presets",
      "Reduced-motion and static export pipeline",
    ],
    tech: ["WebGL", "TypeScript", "Next.js"],
  },
  {
    slug: "composable-analytics-hub",
    name: "Composable Analytics Hub",
    short: "Embeddable analytics surface tuned for compliance-heavy teams.",
    features: [
      "Role-based workspace permissions",
      "SOC2-ready audit trail exports",
      "Bring-your-own data connectors",
    ],
    tech: ["React", "GraphQL", "PostgreSQL"],
  },
  {
    slug: "workflow-orchestration-console",
    name: "Workflow Orchestration Console",
    short: "Single-pane control for scheduling and monitoring internal automations.",
    features: [
      "Pluggable runbooks with approvals",
      "Observability hooks for Datadog and Grafana",
      "On-prem and VPC deployment targets",
    ],
    tech: ["Node.js", "Temporal", "Kubernetes"],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
