import type { Metadata } from "next";

const siteConfig = {
  name: "Cumulus",
  title: "Cumulus — Personalized Product Builds",
  description: "We customize one product from our portfolio to your exact needs.",
  url: "https://cumulush.com",
};

type BuildMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
}: BuildMetadataOptions = {}): Metadata {
  const pageTitle = title ? `${title} · Cumulus` : siteConfig.title;
  const desc = description ?? siteConfig.description;
  const url = new URL(path, siteConfig.url).toString();

  return {
    title: pageTitle,
    description: desc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      title: pageTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: desc,
    },
  };
}

export { siteConfig };
