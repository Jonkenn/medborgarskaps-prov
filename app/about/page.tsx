import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import {
  buildBreadcrumbList,
  buildWebPageSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/structured-data";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const canonicalUrl = `${siteConfig.url}/about`;

const structuredData = [
  organizationSchema,
  websiteSchema,
  buildWebPageSchema(
    "AboutPage",
    "About SwedishCitizenship.se",
    canonicalUrl,
    "About SwedishCitizenship.se – an independent blog about Swedish citizenship, migration policy, and life in Sweden.",
  ),
  buildBreadcrumbList([
    { name: "Home", item: siteConfig.url },
    { name: "About", item: canonicalUrl },
  ]),
];

export const metadata: Metadata = {
  title: "About SwedishCitizenship.se",
  description:
    "About SwedishCitizenship.se – an independent blog about Swedish citizenship, migration policy, and life in Sweden.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "About SwedishCitizenship.se",
    description:
      "About SwedishCitizenship.se – an independent blog about Swedish citizenship, migration policy, and life in Sweden.",
    type: "website",
  },
  twitter: {
    title: "About SwedishCitizenship.se",
    description:
      "About SwedishCitizenship.se – an independent blog about Swedish citizenship, migration policy, and life in Sweden.",
  },
  other: { "script:ld+json": JSON.stringify(structuredData) },
};


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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

      <div className="p-6 border-b border-border flex flex-col gap-6 min-h-[200px] justify-center relative z-10">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="font-medium text-4xl md:text-5xl tracking-tighter">
            About SwedishCitizenship.se
          </h1>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg mt-3">
            SwedishCitizenship.se is an independent blog about Swedish citizenship, migration policy,
            and everyday life in Sweden. The goal is to collect practical information, explain
            political and legal changes in plain language, and document how things actually work in practice.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 lg:px-0 py-10 relative z-10">
        <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-headings:tracking-tight prose-p:tracking-tight prose-p:text-balance prose-lg">
          <h2>What this blog covers</h2>
          <p>
            The articles focus on Swedish citizenship rules, proposed reforms, migration policy,
            court and authority practice, and how these rules affect people in real life.
            You will also find posts about Swedish culture, language, and everyday systems –
            from bureaucracy to housing and work.
          </p>

          <h2>Independence and perspective</h2>
          <p>
            The blog is independent and not affiliated with Migrationsverket, political parties,
            or law firms. Analyses are based on official sources, statistics, and practical experience,
            with a focus on clarity and transparency.
          </p>

          <h2>Who this is for</h2>
          <p>
            SwedishCitizenship.se is for people who already live in Sweden, plan to move here,
            or are simply trying to understand how Swedish citizenship and migration policy really work.
          </p>
        </div>
      </div>
    </div>
  );
}
