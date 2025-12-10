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
    "Kontakta Medborgarskapsprov.se",
    canonicalUrl,
    "Kontakta Medborgarskapsprov.se – hör av dig med synpunkter, rättelser eller förslag på ämnen om medborgarskapsprovet, migrationspolitik och livet i Sverige."
  ),
  buildBreadcrumbList([
    { name: "Hem", item: siteConfig.url },
    { name: "Kontakt", item: canonicalUrl },
  ]),
];

export const metadata: Metadata = {
  title: "Kontakta Medborgarskapsprov.se",
  description:
    "Kontakta Medborgarskapsprov.se – hör av dig med synpunkter, rättelser eller förslag på ämnen om medborgarskapsprovet, migrationspolitik och livet i Sverige.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Kontakta Medborgarskapsprov.se",
    description:
      "Kontakta Medborgarskapsprov.se – hör av dig med synpunkter, rättelser eller förslag på ämnen om medborgarskapsprovet, migrationspolitik och livet i Sverige.",
    type: "website",
  },
  twitter: {
    title: "Kontakta Medborgarskapsprov.se",
    description:
      "Kontakta Medborgarskapsprov.se – hör av dig med synpunkter, rättelser eller förslag på ämnen om medborgarskapsprovet, migrationspolitik och livet i Sverige.",
  },
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
            Kontakta Medborgarskapsprov.se
          </h1>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg mt-3">
            Har du hittat ett fel, saknar du ett viktigt perspektiv eller vill
            tipsa om ett ämne som borde förklaras bättre? Då är du välkommen att
            höra av dig. Medborgarskapsprov.se är en oberoende informationssida
            som växer fram över tid, och läsarnas synpunkter är en viktig del av
            vad som prioriteras och förbättras.
          </p>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg mt-3">
            Sidan ger inte individuell juridisk rådgivning och kan inte svara på
            frågor om enskilda ärenden hos Migrationsverket eller andra
            myndigheter. Däremot är återkoppling om otydligheter, felaktigheter
            eller luckor i informationen alltid uppskattad – särskilt när
            reglerna ändras snabbt och många försöker förstå vad som gäller.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 lg:px-0 py-10 relative z-10">
        <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-headings:tracking-tight prose-p:tracking-tight prose-p:text-balance prose-lg">
          <h2>Så kontaktar du Medborgarskapsprov.se</h2>
          <p>
            Du når Medborgarskapsprov.se via e-post. Skriv gärna kort vad din
            fråga eller synpunkt gäller i ämnesraden, till exempel
            “rättelse i artikel om språkkrav” eller “förslag på nytt ämne”.
          </p>
          <p>
            <a href="mailto:info@medborgarskaps-prov.se">
              info@medborgarskaps-prov.se
            </a>
          </p>

          <h2>Innan du mejlar</h2>
          <p>
            För att skydda din integritet är det viktigt att du inte skickar
            känsliga personuppgifter. Undvik att skriva:
          </p>
          <ul>
            <li>personnummer</li>
            <li>fullständiga dossier- eller ärendenummer</li>
            <li>detaljerad hälsodata</li>
            <li>uppgifter om barn eller tredje person</li>
          </ul>
          <p>
            Om din fråga rör ett konkret ärende hos Migrationsverket eller en
            annan myndighet kan du beskriva situationen i generella drag utan att
            ta med full identitet. Medborgarskapsprov.se kan inte påverka beslut
            eller handläggningstider, men kan ibland uppmärksamma otydliga
            mönster eller återkommande problem i artiklar framåt.
          </p>

          <h2>Vad mejlen används till</h2>
          <p>
            Synpunkter och frågor kan leda till uppdaterade texter, förtydligade
            FAQ-avsnitt eller helt nya artiklar när många undrar samma sak.
            Målet är att samla de vanligaste frågorna på sajten, så att fler
            kan ha nytta av dina erfarenheter utan att du själv behöver synas.
          </p>
          <p>
            Om du påpekar fel eller brister i befintligt innehåll försöker
            sidan rätta eller komplettera så snart som möjligt. När större
            förändringar görs i en text markeras de med uppdateringsdatum, så att
            läsare ser när innehållet senast justerades.
          </p>

          <h2>För frågor om ditt eget ärende</h2>
          <p>
            Om din fråga gäller ett specifikt beslut, en pågående ansökan eller
            ett ärende hos Migrationsverket, domstol eller annan myndighet
            behöver du alltid vända dig direkt dit. Bara ansvarig myndighet kan:
          </p>
          <ul>
            <li>se dina handlingar</li>
            <li>förklara beslut i detalj</li>
            <li>ändra eller ompröva ett ärende</li>
          </ul>
          <p>
            Medborgarskapsprov.se kan däremot hjälpa dig att förstå
            regelverket på en mer övergripande nivå genom artiklar och guider.
          </p>
        </div>
      </div>
    </div>
  );
}
