import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

export default defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    providerImportSource: "@/mdx-components",
  },
});

export const { docs, meta } = defineDocs({
  dir: "blog/content",
  docs: {
    schema: frontmatterSchema.extend({
      date: z.string(),
      tags: z.array(z.string()).optional(),
      featured: z.boolean().optional().default(false),
      readTime: z.string().optional(),
      author: z.string().optional(),
      authorImage: z.string().optional(),
      lastModified: z.union([z.string(), z.date()]).optional(),
      thumbnail: z.string().optional(),
    }),
  },
});

export const { docs: nyheterDocs, meta: nyheterMeta } = defineDocs({
  dir: "app/nyheter/content",
  docs: {
    schema: frontmatterSchema.extend({
      date: z.string(),
      version: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
  },
});
