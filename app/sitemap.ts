import type { MetadataRoute } from "next";
import { getAllProducts, categories } from "@/lib/catalog";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mihaiflorea.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/colectie",
    "/despre",
    "/materiale",
    "/sustenabilitate",
    "/ghid-marimi",
    "/contact",
    "/faq",
    "/livrare",
    "/retur",
    "/termeni",
  ].map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${SITE}${c.href}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const productRoutes = getAllProducts().map((p) => ({
    url: `${SITE}/produs/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
