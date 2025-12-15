import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { authors } from "@/lib/authors";
import { siteConfig } from "@/lib/site";
import {
  buildJsonLdGraph,
  buildItemListSchema,
  buildPersonSchema,
} from "@/lib/structured-data";

const canonicalUrl = `${siteConfig.url}/medarbetare`;

export const metadata: Metadata = {
  title: "Medarbetare",
  description: "Personer som skriver, granskar och bygger innehåll på Medborgarskapsprov.se.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Medarbetare",
    description: "Personer som skriver, granskar och bygger innehåll på Medborgarskapsprov.se.",
    type: "website",
    url: canonicalUrl,
    siteName: siteConfig.name,
    locale: "sv_SE",
  },
  twitter: {
    title: "Medarbetare",
    description: "Personer som skriver, granskar och bygger innehåll på Medborgarskapsprov.se.",
  },
};

export default function MedarbetarePage() {
  const entries = Object.entries(authors);

  const peopleSchemas = entries.map(([key, a]) =>
    buildPersonSchema({
      name: a.name,
      url: `${siteConfig.url}/author/${key}`,
      image: `${siteConfig.url}${a.avatar}`,
      jobTitle: a.position,
    })
  );

  const itemListSchema = buildItemListSchema({
    name: "Medarbetare",
    url: canonicalUrl,
    items: entries.map(([key, a], idx) => ({
      name: a.name,
      url: `${siteConfig.url}/author/${key}`,
      position: idx + 1,
    })),
  });

  const jsonLd = buildJsonLdGraph({
    canonicalUrl,
    title: "Medarbetare",
    description: "Personer som skriver, granskar och bygger innehåll på Medborgarskapsprov.se.",
    breadcrumbs: [
      { name: "Hem", url: siteConfig.url },
      { name: "Medarbetare", url: canonicalUrl },
    ],
    extra: [...peopleSchemas, itemListSchema],
  });

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-3xl font-semibold">Medarbetare</h1>
      <p className="text-sm text-muted-foreground mt-2">
        Här hittar du personerna bakom innehållet på Medborgarskapsprov.se.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map(([key, a]) => (
          <Link
            key={key}
            href={`/author/${key}`}
            className="rounded-xl border bg-background/60 p-5 hover:bg-muted/40 transition"
          >
            <div className="flex items-center gap-4">
              <Image
                src={a.avatar}
                alt={a.name}
                width={64}
                height={64}
                className="h-16 w-16 rounded-full border object-cover"
              />
              <div>
                <div className="font-semibold leading-tight">{a.name}</div>
                <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground mt-1">
                  {a.position}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
