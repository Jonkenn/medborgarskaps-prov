import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import {
  buildBreadcrumbList,
  buildWebPageSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/structured-data";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const canonicalUrl = `${siteConfig.url}/contact`;

const structuredData = [
  organizationSchema,
  websiteSchema,
  buildWebPageSchema(
    "ContactPage",
    "Contact Medborgarskapsprov.se",
    canonicalUrl,
    "Contact Medborgarskapsprov.se – get in touch about medborgarskapsprovet, migrationspolitik och vardagsliv i Sverige.",
  ),
  buildBreadcrumbList([
    { name: "Home", item: siteConfig.url },
    { name: "Contact", item: canonicalUrl },
  ]),
];

export const metadata: Metadata = {
  title: "Contact Medborgarskapsprov.se",
  description:
    "Contact Medborgarskapsprov.se – get in touch about medborgarskapsprovet, migrationspolitik och vardagsliv i Sverige.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Contact Medborgarskapsprov.se",
    description:
      "Contact Medborgarskapsprov.se – get in touch about medborgarskapsprovet, migrationspolitik och vardagsliv i Sverige.",
    type: "website",
  },
  twitter: {
    title: "Contact Medborgarskapsprov.se",
    description:
      "Contact Medborgarskapsprov.se – get in touch about medborgarskapsprovet, migrationspolitik och vardagsliv i Sverige.",
  },
  other: { "script:ld+json": JSON.stringify(structuredData) },
};

export default function ContactPage() {
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
            Contact Medborgarskapsprov.se
          </h1>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg mt-3">
            If you have feedback, suggestions for topics, or have found an error in an article,
            you are welcome to get in touch. This blog is independent and does not give individual
            legal advice, but input and corrections are always appreciated.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 lg:px-0 py-10 relative z-10">
        <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-headings:tracking-tight prose-p:tracking-tight prose-p:text-balance prose-lg">
          <h2>How to contact</h2>
          <p>You can contact Medborgarskapsprov.se by email:</p>
          <p>
            <a href="mailto:info@medborgarskaps-prov.se">
              info@medborgarskaps-prov.se
            </a>
          </p>
          <p>
            Please avoid sending sensitive personal data. If your question concerns a specific
            case with Migrationsverket or another authority, remove personal identifiers before
            you write.
          </p>
        </div>
      </div>
    </div>
  );
}
