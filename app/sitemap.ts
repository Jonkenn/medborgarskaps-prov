// app/sitemap.ts
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";

const blogSource = loader({
  baseUrl: "/blog",
  source: createMDXSource(docs, meta),
});

function toValidDate(value: unknown): Date | undefined {
  if (typeof value === "string" && value.trim()) {
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? undefined : d;
  }
  if (typeof value === "number") {
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? undefined : d;
  }
  return undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.8 },

    { url: `${base}/nyheter`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/online`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/samhallskunskap`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/app`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/om`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/kontakt`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const posts: MetadataRoute.Sitemap = blogSource.getPages().map((page) => {
    const path = page.url.startsWith("/") ? page.url : `/${page.url}`;
    const lastModified = toValidDate(page.data?.date);

    return {
      url: `${base}${path}`,
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [...staticPages, ...posts];
}
