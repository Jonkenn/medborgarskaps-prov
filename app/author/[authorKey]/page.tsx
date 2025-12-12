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

const blogSource = loader({
  baseUrl: "/blog",
  source: createMDXSource(docs, meta),
});

export default function AuthorPage({
  params,
}: {
  params: { authorKey: string };
}) {
  const { authorKey } = params;

  if (!isValidAuthor(authorKey)) {
    notFound();
  }

  const author = getAuthor(authorKey);

  const pages = blogSource.getPages();
  const posts = pages.filter((page) => (page.data as any)?.author === authorKey);

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
    items: posts.map((page, idx) => ({
      name: (page.data as any).title || page.url,
      url: `${siteConfig.url}${page.url}`,
      position: idx + 1,
    })),
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

      <img
        src={author.avatar}
        alt={author.name}
        className="w-32 h-32 rounded-full mb-4"
      />

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Artiklar av {author.name}
      </h2>

      <ul className="space-y-4">
        {posts.map((page) => (
          <li key={page.url}>
            <Link
              href={page.url}
              className="text-lg font-medium hover:underline"
            >
              {(page.data as any).title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
