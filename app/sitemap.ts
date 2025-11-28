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

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const posts: MetadataRoute.Sitemap = blogSource.getPages().map((page) => {
    const path = page.url.startsWith("/") ? page.url : `/${page.url}`;
    return {
      url: `${base}${path}`,
      lastModified: page.data?.date ? new Date(page.data.date) : new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [...staticPages, ...posts];
}
