// app/author/[authorKey]/page.tsx
import { notFound } from "next/navigation";
import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { getAuthor, isValidAuthor } from "@/lib/authors";
import { siteConfig } from "@/lib/site";
import {
  buildJsonLdGraph,
  buildPersonSchema,
  buildItemListSchema,
} from "@/lib/structured-data";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

const blogSource = loader({
  baseUrl: "/blog",
  source: createMDXSource(docs, meta),
});

type BlogFrontmatter = {
  title?: string;
  author?: string;
};

function getFrontmatter(data: unknown): BlogFrontmatter {
  if (typeof data !== "object" || data === null) return {};
  const obj = data as Record<string, unknown>;

  return {
    title: typeof obj.title === "string" ? obj.title : undefined,
    author: typeof obj.author === "string" ? obj.author : undefined,
  };
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ authorKey: string }>;
}) {
  const { authorKey } = await params;

  if (!isValidAuthor(authorKey)) {
    notFound();
  }

  const author = getAuthor(authorKey);

  const pages = blogSource.getPages();
  const posts = pages.filter(
    (page) => getFrontmatter(page.data).author === authorKey
  );

  const canonicalUrl = `${siteConfig.url}/author/${authorKey}`;

  const personSchema = buildPersonSchema({
    name: author.name,
    url: canonicalUrl,
    image: `${siteConfig.url}${author.avatar}`,
    jobTitle: author.position,
  });

  const itemListSchema = buildItemListSchema({
    name: `Artiklar av ${author.name}`,
    url: canonicalUrl,
    items: posts.map((page, idx) => {
      const fm = getFrontmatter(page.data);
      return {
        name: fm.title || page.url,
        url: `${siteConfig.url}${page.url}`,
        position: idx + 1,
      };
    }),
  });

  const jsonLd = buildJsonLdGraph({
    canonicalUrl,
    title: `${author.name} – artiklar och profiler`,
    description: `Läs artiklar av ${author.name} hos ${siteConfig.name}.`,
    breadcrumbs: [
      { name: "Hem", url: siteConfig.url },
      { name: "Medarbetare", url: `${siteConfig.url}/medarbetare` },
      { name: author.name, url: canonicalUrl },
    ],
    extra: [personSchema, itemListSchema],
  });

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <Script
        id="jsonld-author"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-3xl font-semibold">{author.name}</h1>
      <p className="text-sm text-muted-foreground mb-6">{author.position}</p>

      <Image
        src={author.avatar}
        alt={author.name}
        width={128}
        height={128}
        className="w-32 h-32 rounded-full mb-4"
        priority
      />

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Artiklar av {author.name}
      </h2>

      <ul className="space-y-4">
        {posts.map((page) => {
          const fm = getFrontmatter(page.data);
          return (
            <li key={page.url}>
              <Link href={page.url} className="text-lg font-medium hover:underline">
                {fm.title || page.url}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
