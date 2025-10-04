export type Product = {
  slug: string;
  name: string;
  short: string;
  features: string[];
  tech: string[];
  heroImage?: string;
  expertise: string;
  use: string;
  fullDescription: string;
};

export const products: Product[] = [
  {
    slug: "micro-agents",
    name: "Micro Agents",
    expertise: "SaaS & Operations",
    use: "Enterprise",
    short: "Auto AI automating small tasks without looking at it",
    fullDescription: `Auto AI Micro Agent to automate small tasks without having to even look at it.

We have specialized in automating micro works for speeding pipeline efficiency in small business environments which have improved our clients decision making timeframe and pilots metrics.

Just select your use case and build your micro agent by clicking agent requirements.`,
    features: [
      "Invisible automation - tasks complete autonomously without manual oversight",
      "Improved decision making with accelerated timeframes",
      "Enhanced pilot and operational metrics",
      "Streamlined pipeline efficiency across your organization",
      "Custom use case selection and agent building",
    ],
    tech: ["AI", "SaaS", "Operations"],
  },
  {
    slug: "blocks",
    name: "Blocks",
    expertise: "Team management & Pipeline visualizer",
    use: "Small Business",
    short: "Easy enterprise grade organization terminal for teams",
    fullDescription: `Blocks is an easy enterprise grade organization terminal.

Visual Component Editor for intuitive workspace management.

Enterprise Security & Authentication with advanced 8-digit codes and session management.

Analytics, Historical Analytics & Intelligence with comprehensive tracking, automated snapshots and audit trails.

Advanced Workforce Management to assign and track projects across your entire workforce.

Live Collaboration with real-time editing and instant project updates across teams.`,
    features: [
      "Visual component editor for intuitive workspace management",
      "Enterprise security with 8-digit authentication and session management",
      "Comprehensive analytics with automated snapshots and audit trails",
      "Advanced workforce management across entire organization",
      "Real-time collaboration with instant project updates",
    ],
    tech: ["Team Management", "Analytics", "Collaboration"],
  },
  {
    slug: "operation-agents",
    name: "Operation Agents",
    expertise: "AI & Operations",
    use: "Enterprise",
    short: "Private AI platform simulating operations for enterprise sectors",
    fullDescription: `Operation Agents is a private platform for enterprises in the areas of transportation, energy and security.

Helps the team get tests and data right before the production stage, simulating real world environments. The agents show our clients how to perform complex operations and save the data for future tests.

After testing and training is secured to start the real work, the agents will take care of writing reports and optimize the Business Process Model and Notation on each execution.`,
    features: [
      "Real-world simulation for complex operations before deployment",
      "Data preservation for all tests and future reference",
      "AI-guided training for optimal operation performance",
      "Automated BPMN optimization with each execution",
      "Complete automated reporting and documentation",
    ],
    tech: ["AI", "Operations", "Enterprise"],
  },
  {
    slug: "resuming",
    name: "Resuming",
    expertise: "AI & Documents",
    use: "Small Business",
    short: "AI powered document analysis and optimization platform",
    fullDescription: `Resuming is an AI powered Document analysis and optimization platform.

With uploading a file and clicking a button the AI takes care of everything from analyzing and editing to changing the format and giving it to you ready to download.

This product is able to be personalized for clients in different areas of use case, eg: enterprise environment where more than 50 documents have to be signed, the software would be trained and specified to put the according signature where it should be and giving the document updated.`,
    features: [
      "One-click processing - upload, process, and download in seconds",
      "Intelligent AI document analysis and understanding",
      "Automated format conversion between different document types",
      "Smart editing based on your specific requirements",
      "Custom training for industry-specific document preparation",
    ],
    tech: ["AI", "Documents", "Automation"],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
