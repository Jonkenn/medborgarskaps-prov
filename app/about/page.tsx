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
    "Om Medborgarskapsprov.se",
    canonicalUrl,
    "Om Medborgarskapsprov.se – en oberoende sida om det svenska medborgarskapsprovet, migrationspolitik och livet i Sverige."
  ),
  buildBreadcrumbList([
    { name: "Hem", item: siteConfig.url },
    { name: "Om sidan", item: canonicalUrl },
  ]),
];

export const metadata: Metadata = {
  title: "Om Medborgarskapsprov.se",
  description:
    "Om Medborgarskapsprov.se – en oberoende sida om det svenska medborgarskapsprovet, migrationspolitik och livet i Sverige.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Om Medborgarskapsprov.se",
    description:
      "Om Medborgarskapsprov.se – en oberoende sida om det svenska medborgarskapsprovet, migrationspolitik och livet i Sverige.",
    type: "website",
  },
  twitter: {
    title: "Om Medborgarskapsprov.se",
    description:
      "Om Medborgarskapsprov.se – en oberoende sida om det svenska medborgarskapsprovet, migrationspolitik och livet i Sverige.",
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
            Om Medborgarskapsprov.se
          </h1>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg mt-3">
            Medborgarskapsprov.se är en oberoende och icke-kommersiell
            informationssida om det svenska medborgarskapsprovet,
            medborgarskapsregler, migrationspolitik och vardagslivet i Sverige.
            Tanken är enkel: att samla spridd information på ett ställe, förklara
            politiska och juridiska förändringar på begriplig svenska och visa
            hur reglerna faktiskt slår mot människor i verkligheten – inte bara
            på pappret.
          </p>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg mt-3">
            Sidan uppdateras löpande i takt med att regering, riksdag och
            myndigheter presenterar nya beslut, utredningar och riktlinjer.
            Målet är att du som läser ska kunna få en samlad bild av läget utan
            att behöva plöja propositioner, remissvar och myndighetstexter på
            egen hand.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 lg:px-0 py-10 relative z-10">
        <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-headings:tracking-tight prose-p:tracking-tight prose-p:text-balance prose-lg">
          <h2>Vad Medborgarskapsprov.se handlar om</h2>
          <p>
            Innehållet kretsar kring det planerade medborgarskapsprovet,
            språkkravet och de nya reglerna för svenskt medborgarskap. Artiklarna
            går igenom lagförslag, politiska överenskommelser, myndighetsbeslut
            och praktiska konsekvenser för personer som redan bor i Sverige –
            eller planerar att flytta hit.
          </p>
          <p>
            Utöver själva provet behandlas också bredare frågor om svensk
            migrationspolitik, rättspraxis, JO/JK-ärenden, domstolsbeslut och hur
            Migrationsverket och andra myndigheter tillämpar reglerna i
            vardagen. Det finns också plats för texter om svenska system i stort:
            folkbokföring, bostad, arbete, välfärd, språk, kultur och sådant som
            påverkar livet efter att man fått uppehållstillstånd eller
            medborgarskap.
          </p>

          <h2>Oberoende perspektiv och arbetssätt</h2>
          <p>
            Medborgarskapsprov.se är fristående och har ingen koppling till
            Migrationsverket, politiska partier, advokatbyråer eller
            intresseorganisationer. Syftet är inte att sälja juridiska tjänster
            eller driva kampanj, utan att förklara vad som händer och hur det
            påverkar människor i praktiken.
          </p>
          <p>
            Texterna utgår i första hand från öppna källor: statliga utredningar,
            propositioner, myndighetsföreskrifter, rättsfall och officiell
            statistik. När analyser eller tolkningar görs är ambitionen att vara
            tydlig med vad som är fakta och vad som är bedömning, så att läsaren
            själv kan bilda sig en uppfattning.
          </p>

          <h2>Vem sidan vänder sig till</h2>
          <p>
            Sidan är till för dig som redan bor i Sverige, funderar på att bli
            svensk medborgare eller vill förstå vad de nya kraven faktiskt
            innebär. Den riktar sig också till anhöriga, ombud, frivilligorganisationer,
            lärare, språkcaféer och andra som stöttar personer på väg genom det
            svenska systemet.
          </p>
          <p>
            Du behöver inte vara jurist eller politiskt insatt för att ha nytta
            av innehållet. Texterna är skrivna för människor som letar svar
            framför skärmar sent på kvällen: “Vad betyder det här för mig?”, “När
            börjar det gälla?”, “Vad måste jag kunna?”. Utgångspunkten är alltid
            den enskilda personen – inte systemet.
          </p>

          <h2>Hur innehållet uppdateras</h2>
          <p>
            Regler kring medborgarskap och migration ändras ofta. Därför är
            artiklarna markerade med datum och uppdateras när nya beslut tas
            eller när myndigheter ändrar tillämpning. Målet är att varje text ska
            kännas aktuell, men också ärligt visa när något fortfarande är
            oklart: hellre ett tydligt “det vet vi inte än” än påhittade
            detaljer.
          </p>
          <p>
            När större förändringar sker – till exempel att provet får ett
            startdatum, att officiellt material publiceras eller att
            riksdagen klubbar en ny lag – försöker sidan snabbt samla det viktigaste
            i tydliga guider och översikter, så att du slipper jaga
            information i flera olika källor.
          </p>

          <h2>Om kontakt och ansvar</h2>
          <p>
            Medborgarskapsprov.se är en informationsresurs, inte en myndighet.
            Du kan därför inte få individuella beslut, handläggning eller
            personliga besked om dina ärenden här. För frågor om en specifik
            ansökan är det alltid Migrationsverket eller annan ansvarig myndighet
            som gäller.
          </p>
          <p>
            Har du däremot förslag på ämnen som borde förklaras, felaktigheter som
            behöver rättas, eller områden där det saknas tydlig information, är
            ambitionen att lyfta det i nya texter. Sidan växer fram över tid och
            formas av vilka frågor människor faktiskt går runt och bär på.
          </p>
        </div>
      </div>
    </div>
  );
}
