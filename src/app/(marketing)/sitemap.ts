import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/metadata";
import { products } from "@/lib/products";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "/",
    "/products",
    "/services",
    "/process",
    "/contact",
  ].map((path) => ({
    url: new URL(path, base).toString(),
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: new URL(`/products/${product.slug}`, base).toString(),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: new URL(`/services/${service.slug}`, base).toString(),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...serviceRoutes];
}
