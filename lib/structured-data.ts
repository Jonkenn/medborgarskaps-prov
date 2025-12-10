import { siteConfig } from "./site";

const context = "https://schema.org";

/**
 * Organization schema. Google suggests there are no required fields for an
 * Organization, but adding relevant properties like a logo, description and
 * contactPoint helps Google choose the right branding and contact details
 * for search results:contentReference[oaicite:0]{index=0}:contentReference[oaicite:1]{index=1}.
 */
export const organizationSchema = {
  "@context": context,
  "@type": "Organization",
  // Basic identity
  name: siteConfig.name,
  url: siteConfig.url,
  // Enrich the organization with a logo and description
  // Use a crawlable, square image for the logo:contentReference[oaicite:2]{index=2}.
  logo: "https://www.medborgarskaps-prov.se/images/logo-512.png",
  description: siteConfig.description,
  // Provide at least one way for users to contact you:contentReference[oaicite:3]{index=3}.
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

/**
 * Generic WebPage builder. Accepts an optional primary image for the page.
 * The `primaryImageOfPage` property points at the main image on the page:contentReference[oaicite:4]{index=4}.
 */
export const buildWebPageSchema = (
  type: string,
  name: string,
  url: string,
  description: string,
  primaryImageUrl?: string
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
export const buildHomePageStructuredData = (): Record<string, unknown>[] => {
  const webPageSchema = buildWebPageSchema(
    "CollectionPage",
    siteConfig.name,
    siteConfig.url,
    siteConfig.description,
    "https://www.medborgarskaps-prov.se/images/hero-home.jpg"
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

/**
 * Build structured data for a blog post. It uses the `image` property to
 * point at the article’s image. Google recommends using multiple high‑
 * resolution images and ensuring they represent the content:contentReference[oaicite:5]{index=5}.
 */
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
      description ||
      `Read about ${title || "this topic"} on Medborgarskapsprov.se`,
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
