import { siteConfig } from "./site";

const context = "https://schema.org";

/**
 * Organization schema. Google suggests there are no required fields for an
 * Organization, but adding relevant properties like a logo, description and
 * contactPoint helps Google choose the right branding and contact details.
 */
export const organizationSchema = {
  "@context": context,
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: "https://www.medborgarskaps-prov.se/images/logo-512.png",
  description: siteConfig.description,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+46-8-1234-5678",
    email: "info@medborgarskaps-prov.se",
  },
};

export const websiteSchema = {
  "@context": context,
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};

/**
 * Blog container. Includes a description and refers back to the publisher.
 */
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

/**
 * Build a BreadcrumbList. Use this for blog posts or other nested pages.
 */
export const buildBreadcrumbList = (
  items: Array<{ name: string; item: string }>,
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

/**
 * Generic WebPage builder. Accepts an optional primary image for the page.
 */
export const buildWebPageSchema = (
  type: string,
  name: string,
  url: string,
  description: string,
  primaryImageUrl?: string,
): Record<string, unknown> => ({
  "@context": context,
  "@type": type,
  name,
  url,
  description,
  isPartOf: websiteSchema,
  ...(primaryImageUrl ? { primaryImageOfPage: primaryImageUrl } : {}),
});

/**
 * Structured data for the home page. You can customise the hero image used
 * here or leave it undefined if you don’t want a primaryImageOfPage.
 */
export const buildHomePageStructuredData = (): Record<
  string,
  unknown
>[] => {
  const webPageSchema = buildWebPageSchema(
    "CollectionPage",
    siteConfig.name,
    siteConfig.url,
    siteConfig.description,
    "https://www.medborgarskaps-prov.se/images/hero-home.jpg",
  );

  return [organizationSchema, websiteSchema, blogSchema, webPageSchema];
};

export interface BlogPostingInput {
  title?: string;
  description?: string;
  slug: string;
  canonicalUrl: string;
  ogImageUrl?: string | string[];
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
  authorName: string;
  authorImageUrl?: string;
  authorUrl?: string; // optional profile URL for the author
}

/**
 * Build structured data for a blog post. It uses the `image` property to
 * point at the article’s image. Google recommends using multiple high‑
 * resolution images and ensuring they represent the content.
 */
export const buildBlogPostingStructuredData = (
  input: BlogPostingInput,
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
    authorUrl,
  } = input;

  const articleSchema: Record<string, unknown> = {
    "@context": context,
    "@type": "BlogPosting",
    headline: title || "Blog Post",
    description:
      description ||
      `Read about ${title || "this topic"} on Medborgarskapsprov.se`,
    mainEntityOfPage: canonicalUrl,
    author: {
      "@type": "Person",
      name: authorName,
      ...(authorUrl ? { url: authorUrl } : {}),
      ...(authorImageUrl ? { image: authorImageUrl } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    ...(publishedTime ? { datePublished: publishedTime } : {}),
    ...(modifiedTime ? { dateModified: modifiedTime } : {}),
    ...(ogImageUrl
      ? {
          image: Array.isArray(ogImageUrl) ? ogImageUrl : [ogImageUrl],
        }
      : {}),
    ...(Array.isArray(keywords) && keywords.length > 0
      ? { keywords: keywords.join(", ") }
      : {}),
  };

  const breadcrumbSchema = buildBreadcrumbList([
    { name: "Blog", item: `${siteConfig.url}/blog` },
    { name: title || slug, item: canonicalUrl },
  ]);

  return [organizationSchema, websiteSchema, articleSchema, breadcrumbSchema];
};

/**
 * Build a Person schema. Include a name and optional URL, image, and jobTitle.
 */
export function buildPersonSchema(params: {
  name: string;
  url?: string;
  image?: string;
  jobTitle?: string;
}): Record<string, unknown> {
  const { name, url, image, jobTitle } = params;
  const schema: Record<string, unknown> = {
    "@context": context,
    "@type": "Person",
    name,
  };
  if (url) schema.url = url;
  if (image) schema.image = image;
  if (jobTitle) schema.jobTitle = jobTitle;
  return schema;
}

/**
 * Build an ItemList schema. Useful for listing an author’s posts or other items.
 */
export function buildItemListSchema(params: {
  name: string;
  url: string;
  items: Array<{ name: string; url: string; position?: number }>;
}): Record<string, unknown> {
  const { name, url, items } = params;
  return {
    "@context": context,
    "@type": "ItemList",
    name,
    url,
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: item.position ?? idx + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

/**
 * Build a complete JSON‑LD graph for a page. Start with organization and website,
 * then add the current WebPage, any breadcrumbs, and any extra entities (like Person or ItemList).
 */
export type JsonLdNode = Record<string, unknown>;

export function buildJsonLdGraph(params: {
  canonicalUrl: string;
  title: string;
  description?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  extra?: JsonLdNode[];
}): JsonLdNode[] {
  const { canonicalUrl, title, description, breadcrumbs, extra } = params;

  const graph: JsonLdNode[] = [
    organizationSchema,
    websiteSchema,
    {
      "@context": context,
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: title,
      description,
      isPartOf: websiteSchema,
    },
  ];

  if (breadcrumbs && breadcrumbs.length > 0) {
    graph.push(
      buildBreadcrumbList(breadcrumbs.map(({ name, url }) => ({ name, item: url }))),
    );
  }

  if (extra && extra.length > 0) {
    graph.push(...extra);
  }

  return graph;
}
