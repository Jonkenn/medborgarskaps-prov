// app/blog/[slug]/page.tsx
import { docs, meta } from "@/.source";
import { DocsBody } from "fumadocs-ui/page";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { buildBlogPostingStructuredData, buildJsonLdGraph } from "@/lib/structured-data";

import { TableOfContents } from "@/components/table-of-contents";
import { MobileTableOfContents } from "@/components/mobile-toc";
import { AuthorCard } from "@/components/author-card";
import { ReadMoreSection } from "@/components/read-more-section";
import { PromoContent } from "@/components/promo-content";
import { getAuthor, isValidAuthor } from "@/lib/authors";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { HashScrollHandler } from "@/components/hash-scroll-handler";
import type { ComponentType } from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

interface BlogData {
  title?: string;
  description?: string;
  author?: string;
  authorImage?: string;
  tags?: string[];
  date?: string | Date;
  lastModified?: string | Date;
  thumbnail?: string;
  body: ComponentType;
}

const blogSource = loader({
  baseUrl: "/blog",
  source: createMDXSource(docs, meta),
});

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  try {
    const { slug } = await params;

    if (!slug || slug.length === 0) {
      return {
        title: "Blog Not Found",
        description: "The requested blog post could not be found.",
        robots: { index: false, follow: false },
      };
    }

    const page = blogSource.getPage([slug]);

    if (!page || !page.data) {
      return {
        title: "Blog Not Found",
        description: "The requested blog post could not be found.",
        robots: { index: false, follow: false },
      };
    }

    const d = page.data as BlogData;

    const canonicalUrl = `${siteConfig.url}/blog/${slug}`;
    const ogImageUrl =
      (typeof d.thumbnail === "string" && d.thumbnail) ||
      `${canonicalUrl}/opengraph-image`;

    const keywords: string[] = Array.isArray(d.tags) ? [...d.tags] : [];
    keywords.push(
      "Medborgarskapsprov",
      "Medborgarskap",
      "Migration",
      "Sverige"
    );

    const publishedTime =
      d.date && !Number.isNaN(new Date(d.date).getTime())
        ? new Date(d.date).toISOString()
        : undefined;
    const modifiedTime =
      d.lastModified && !Number.isNaN(new Date(d.lastModified).getTime())
        ? new Date(d.lastModified).toISOString()
        : undefined;

    return {
      title: d.title || "Blog Post",
      description:
        d.description ||
        `Read about ${d.title || "this topic"} on Medborgarskapsprov.se`,
      keywords,
      authors: [
        { name: d.author || "Medborgarskapsprov.se", url: siteConfig.url },
      ],
      creator: d.author || "Medborgarskapsprov.se",
      publisher: "Medborgarskapsprov.se",
      alternates: { canonical: canonicalUrl },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      openGraph: {
        title: d.title || "Blog Post",
        description: d.description || "",
        type: "article",
        url: canonicalUrl,
        siteName: siteConfig.name,
        locale: "en_US",
        publishedTime,
        modifiedTime,
        authors: [d.author || "Medborgarskapsprov.se"],
        tags: Array.isArray(d.tags) ? d.tags : undefined,
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: d.title || "Blog Post Image",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: d.title || "Blog Post",
        description: d.description || "",
        images: [ogImageUrl],
        creator: "@medborgarskapsprov",
        site: "@medborgarskapsprov",
      },
    };
  } catch {
    return {
      title: "Medborgarskapsprov.se",
      description:
        "Read the latest articles about medborgarskapsprovet, migration och livet i Sverige.",
    };
  }
}



export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    notFound();
  }

  const page = blogSource.getPage([slug]);

  if (!page || !page.data) {
    notFound();
  }

  const d = page.data as BlogData;

  const MDX = d.body;
  const date = new Date(d.date ?? new Date());
  const formattedDate = formatDate(date);

  const authorKey = typeof d.author === "string" ? d.author : "";
  const authorDetails =
    authorKey && isValidAuthor(authorKey) ? getAuthor(authorKey) : null;

  const canonicalUrl = `${siteConfig.url}/blog/${slug}`;
  const keywords: string[] = Array.isArray(d.tags) ? [...d.tags] : [];
  keywords.push("Medborgarskapsprov", "Medborgarskap", "Migration", "Sverige");

  const publishedTime =
    d.date && !Number.isNaN(new Date(d.date).getTime())
      ? new Date(d.date).toISOString()
      : undefined;
  const modifiedTime =
    d.lastModified && !Number.isNaN(new Date(d.lastModified).getTime())
      ? new Date(d.lastModified).toISOString()
      : undefined;

  const articleSchemas = buildBlogPostingStructuredData({
  title: d.title,
  description: d.description,
  canonicalUrl,
  ogImageUrl:
    typeof d.thumbnail === "string" && d.thumbnail.length > 0
      ? d.thumbnail.startsWith("http")
        ? d.thumbnail
        : `${siteConfig.url}${d.thumbnail.startsWith("/") ? "" : "/"}${d.thumbnail}`
      : `${canonicalUrl}/opengraph-image`,
  publishedTime,
  modifiedTime,
  keywords,
  authorName: d.author || "Medborgarskapsprov.se",
  authorImageUrl:
    typeof d.authorImage === "string" && d.authorImage.length > 0
      ? d.authorImage
      : undefined,
        authorUrl: authorDetails ? `${siteConfig.url}/author/${authorKey}` : undefined,

});

const jsonLd = buildJsonLdGraph({
  canonicalUrl,
  title: d.title || "Artikel",
  description: d.description,
  breadcrumbs: [
    { name: "Hem", url: siteConfig.url },
    { name: "Blogg", url: `${siteConfig.url}/blog` },
    { name: d.title || slug, url: canonicalUrl },
  ],
  extra: articleSchemas,
});


  return (
    <div className="min-h-screen bg-background relative">
      <script
        type="application/ld+json"
        suppressHydrationWarning
dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HashScrollHandler />
      <div className="absolute top-0 left-0 z-0 w-full h-[200px] [mask-image:linear-gradient(to_top,transparent_25%,black_95%)]">
        <FlickeringGrid
          className="absolute top-0 left-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.2}
          flickerChance={0.05}
        />
      </div>

      <div className="space-y-4 border-b border-border relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 p-6">
          <div className="flex flex-wrap items-center gap-3 gap-y-5 text-sm text-muted-foreground">
            <Button variant="outline" asChild className="h-6 w-6">
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                <span className="sr-only">Back to all articles</span>
              </Link>
            </Button>
            {Array.isArray(d.tags) && d.tags.length > 0 && (
              <div className="flex flex-wrap gap-3 text-muted-foreground">
                {d.tags.map((tag) => (
                  <span
                    key={tag}
                    className="h-6 w-fit px-3 text-sm font-medium bg-muted text-muted-foreground rounded-md border flex items-center justify-center"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <time className="font-medium text-muted-foreground">
              {formattedDate}
            </time>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-balance">
            {d.title}
          </h1>

          {d.description && (
            <p className="text-muted-foreground max-w-4xl md:text-lg md:text-balance">
              {d.description}
            </p>
          )}
        </div>
      </div>

      <div className="flex divide-x divide-border relative max-w-7xl mx-auto px-4 md:px-0 z-10">
        <div className="absolute max-w-7xl mx-auto left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] lg:w-full h-full border-x border-border p-0 pointer-events-none" />
      <main className="w-full p-0 overflow-hidden">
  {typeof d.thumbnail === "string" && d.thumbnail && (
    <div className="relative w-full h-[500px] overflow-hidden object-cover border border-transparent">
      <Image
        src={d.thumbnail}
        alt={d.title || "Blog post image"}
        fill
        className="object-cover"
        priority
      />
    </div>
  )}

  <div className="p-6 lg:p-10">
    {authorDetails && (
      <div className="mb-4 lg:hidden">
        <AuthorCard author={authorDetails} />
      </div>
    )}

    <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-a:no-underline prose-headings:tracking-tight prose-headings:text-balance prose-p:tracking-tight prose-p:text-balance prose-lg">
      <DocsBody>
        <MDX />
      </DocsBody>
    </div>
  </div>

  <div className="mt-10">
    <ReadMoreSection currentSlug={[slug]} currentTags={d.tags || []} />
  </div>
</main>

<aside className="hidden lg:block w-[350px] flex-shrink-0 p-6 lg:p-10 bg-muted/60 dark:bg-muted/20">
  <div className="sticky top-20 space-y-8">
    {authorDetails && <AuthorCard author={authorDetails} />}
    <div className="border border-border rounded-lg p-6 bg-card">
      <TableOfContents />
    </div>
    <PromoContent variant="desktop" />
  </div>
</aside>

      </div>

      <MobileTableOfContents />
    </div>
  );
}
