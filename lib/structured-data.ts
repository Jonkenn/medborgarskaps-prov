import { siteConfig } from "./site";

const context = "https://schema.org";

export const organizationSchema = {
  "@context": context,
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
};

export const websiteSchema = {
  "@context": context,
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};

export const blogSchema = {
  "@context": context,
  "@type": "Blog",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

export const buildBreadcrumbList = (
  items: Array<{ name: string; item: string }>
): Record<string, unknown> => ({
  "@context": context,
  "@type": "BreadcrumbList",
  itemListElement: items.map(({ name, item }, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name,
    item,
  })),
});

export const buildWebPageSchema = (
  type: string,
  name: string,
  url: string,
  description: string
): Record<string, unknown> => ({
  "@context": context,
  "@type": type,
  name,
  url,
  description,
  isPartOf: websiteSchema,
});

export const buildHomePageStructuredData = (): Record<string, unknown>[] => {
  const webPageSchema = buildWebPageSchema(
    "CollectionPage",
    siteConfig.name,
    siteConfig.url,
    siteConfig.description
  );

  return [organizationSchema, websiteSchema, blogSchema, webPageSchema];
};

export interface BlogPostingInput {
  title?: string;
  description?: string;
  slug: string;
  canonicalUrl: string;
  ogImageUrl?: string;
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
  authorName: string;
  authorImageUrl?: string;
}

export const buildBlogPostingStructuredData = (
  input: BlogPostingInput
): Record<string, unknown>[] => {
  const {
    title,
    description,
    slug,
    canonicalUrl,
    ogImageUrl,
    publishedTime,
    modifiedTime,
    keywords,
    authorName,
    authorImageUrl,
  } = input;

  const articleSchema = {
    "@context": context,
    "@type": "BlogPosting",
    headline: title || "Blog Post",
    description:
      description || `Read about ${title || "this topic"} on Swedish Citizenship blog`,
    mainEntityOfPage: canonicalUrl,
    author: {
      "@type": "Person",
      name: authorName,
      url: siteConfig.url,
      ...(authorImageUrl ? { image: authorImageUrl } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    ...(publishedTime ? { datePublished: publishedTime } : {}),
    ...(modifiedTime ? { dateModified: modifiedTime } : {}),
    ...(ogImageUrl ? { image: [ogImageUrl] } : {}),
    ...(Array.isArray(keywords) && keywords.length > 0
      ? { keywords: keywords.join(", ") }
      : {}),
  } satisfies Record<string, unknown>;

  const breadcrumbSchema = buildBreadcrumbList([
    { name: "Blog", item: `${siteConfig.url}/blog` },
    { name: title || slug, item: canonicalUrl },
  ]);

  return [organizationSchema, websiteSchema, articleSchema, breadcrumbSchema];
};
