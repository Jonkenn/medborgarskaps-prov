import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import {
  buildBreadcrumbList,
  buildWebPageSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/structured-data";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const canonicalUrl = `${siteConfig.url}/app`;

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vad är en medborgarskapsprov app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En medborgarskapsprov app är en mobilapplikation där du kan träna inför det svenska medborgarskapsprovet med hjälp av quiz, övningsfrågor och korta förklaringar om det svenska samhället. Syftet är att göra det enkelt att plugga samhällskunskap direkt i mobilen.",
      },
    },
    {
      "@type": "Question",
      name: "Är Medborgarskaps-prov.se:s medborgarskapsprov app ett officiellt prov?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nej. Medborgarskaps-prov.se är en oberoende informationssida och appen är inte ett officiellt prov. En medborgarskapsprov app från Medborgarskaps-prov.se är tänkt som stöd och träning, inte som ett ersättande av det riktiga provet som genomförs av ansvarig myndighet.",
      },
    },
    {
      "@type": "Question",
      name: "Är medborgarskapsprov appen gratis att använda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Målet med Medborgarskaps-prov.se är att erbjuda så mycket vägledning och övning som möjligt utan kostnad eller till låg tröskel. Exakt upplägg för en medborgarskapsprov app kan variera, men grundidén är att du ska kunna träna enkelt i mobilen utan krånglig inloggning.",
      },
    },
  ],
};

const structuredData = [
  organizationSchema,
  websiteSchema,
  buildWebPageSchema(
    "WebPage",
    "Medborgarskapsprov app – träna i mobilen med quiz och övningsprov",
    canonicalUrl,
    "Medborgarskapsprov app – lär dig samhällskunskap och träna inför det svenska medborgarskapsprovet direkt i mobilen med quiz, övningsfrågor och förklaringar från Medborgarskaps-prov.se."
  ),
  buildBreadcrumbList([
    { name: "Hem", item: siteConfig.url },
    { name: "Medborgarskapsprov app", item: canonicalUrl },
  ]),
  faqStructuredData,
];

export const metadata: Metadata = {
  title:
    "Medborgarskapsprov i app – träna i mobilen med quiz och övningsprov",
  description:
    "Medborgarskapsprov app – plugga inför det svenska medborgarskapsprovet direkt i mobilen med quiz, övningsfrågor och tydliga förklaringar om det svenska samhället.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title:
      "Medborgarskapsprov app – träna i mobilen inför medborgarskapstestet",
    description:
      "Använd en medborgarskapsprov app för att träna samhällskunskap i mobilen. Quiz, övningsprov och pedagogiska förklaringar från Medborgarskaps-prov.se.",
    type: "website",
    url: canonicalUrl,
  },
  twitter: {
    title:
      "Medborgarskapsprov app – quiz och övningsprov i mobilen",
    description:
      "Medborgarskapsprov app från Medborgarskaps-prov.se – träna inför det svenska medborgarskapsprovet med quiz och övningsfrågor direkt i mobilen.",
  },
  other: { "script:ld+json": JSON.stringify(structuredData) },
};

export default function AppPage() {
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
            Medborgarskapsprov i app: träna inför provet i mobilen
          </h1>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg mt-3">
            En medborgarskapsprov app gör det möjligt att plugga inför det
            svenska medborgarskapsprovet direkt i mobilen. Med quiz,
            övningsfrågor och korta förklaringar kan du träna på
            samhällskunskap, demokrati, lagar och vardagsliv – utan att vara
            bunden till en dator eller tjocka böcker.
          </p>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg mt-3">
            Medborgarskaps-prov.se bygger mot en medborgarskapsprov app som
            kompletterar artiklarna på sajten. Tanken är att du ska kunna
            växla mellan att läsa mer fördjupande innehåll och att snabbt testa
            dina kunskaper i appen.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 lg:px-0 py-10 relative z-10">
        <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-headings:tracking-tight prose-p:tracking-tight prose-p:text-balance prose-lg">
          <h2>Vad är en medborgarskapsprov app?</h2>
          <p>
            En medborgarskapsprov app är en mobilapplikation där du kan träna
            inför medborgarskapsprovet genom strukturerade quiz, korta
            övningsprov och tydliga förklaringar av det svenska samhället.
            Fokus ligger på att göra träningen snabb, tillgänglig och enkel att
            få in i vardagen.
          </p>
          <p>
            Med en medborgarskapsprov app från Medborgarskaps-prov.se kan du
            använda samma grundidé som på webbplatsen – tydlig, saklig
            information – men anpassad för mobilen med kortare frågepass och
            tydlig uppföljning på hur det går.
          </p>

          <h2>Varför träna i en medborgarskapsprov app?</h2>
          <p>
            För många är mobilen det naturliga verktyget för studier i vardagen.
            En medborgarskapsprov app gör att du kan:
          </p>
          <ul>
            <li>träna några minuter åt gången – på bussen, rasten eller kvällen</li>
            <li>få direkt feedback på rätt och fel svar</li>
            <li>följa din utveckling över tid med resultat och statistik</li>
            <li>kombinera korta quiz med längre övningsprov vid behov</li>
          </ul>
          <p>
            Poängen är inte bara att svara rätt, utan att steg för steg bygga
            upp en stabil förståelse inför det riktiga provet.
          </p>

          <h2>Funktioner i en bra medborgarskapsprov app</h2>
          <p>
            En genomtänkt medborgarskapsprov app bör ha funktioner som gör det
            enkelt att både lära sig och hålla motivationen uppe:
          </p>
          <ul>
            <li>
              <strong>Quiz i olika svårighetsnivåer</strong> – från grundläggande till mer avancerade frågor.
            </li>
            <li>
              <strong>Indelning efter ämnesområde</strong> – till exempel demokrati, lagar, välfärd och vardagsliv.
            </li>
            <li>
              <strong>Förklaringar till svaren</strong> – så att du förstår varför ett svar är rätt eller fel.
            </li>
            <li>
              <strong>Progressionsöversikt</strong> – så att du ser vilka delar du behöver träna mer på.
            </li>
          </ul>
          <p>
            En medborgarskapsprov app från Medborgarskaps-prov.se kan knyta
            an till de artiklar och genomgångar som redan finns på sajten, så
            att du enkelt kan fördjupa dig där du känner dig osäker.
          </p>

          <h2>Hur hänger medborgarskapsprov app och webbplats ihop?</h2>
          <p>
            Medborgarskaps-prov.se fungerar som bas med längre texter, bakgrund
            och analyser av hur medborgarskapsprovet är tänkt att fungera.
            En medborgarskapsprov app kompletterar genom att:
          </p>
          <ul>
            <li>samla utvalda frågor och quiz i mobilen</li>
            <li>göra repetitionen smidigare och mer vardagsnära</li>
            <li>låta dig fortsätta där du slutade – oavsett om du var i appen eller på webben</li>
          </ul>
          <p>
            Målet är att du ska kunna använda både webbplatsen och en
            medborgarskapsprov app som delar av samma förberedelse.
          </p>

          <h2>Vilka områden tränar du i en medborgarskapsprov app?</h2>
          <p>
            Innehållet i en medborgarskapsprov app utgår från samma typ av
            samhällskunskap som väntas testas i det riktiga provet:
          </p>
          <ul>
            <li>svensk demokrati och hur beslut fattas</li>
            <li>grundläggande fri- och rättigheter</li>
            <li>lagar, rättssystem och rättssäkerhet</li>
            <li>välfärd, vård, skola och socialförsäkringar</li>
            <li>arbete, ekonomi och arbetsmarknad</li>
            <li>vardag och normer i Sverige</li>
          </ul>
          <p>
            Genom att träna på frågor inom dessa områden i en
            medborgarskapsprov app får du en bred bild av hur samhället fungerar.
          </p>

          <h2>För vem passar en medborgarskapsprov app?</h2>
          <p>
            En medborgarskapsprov app passar dig som:
          </p>
          <ul>
            <li>planerar att ansöka om svenskt medborgarskap</li>
            <li>vill kunna träna korta pass när du har tid över</li>
            <li>föredrar mobil och surfplatta framför dator</li>
            <li>behöver ett tydligt, strukturerat sätt att repetera samhällskunskap</li>
          </ul>
          <p>
            Appen fungerar också som ett stöd för studiecirklar och lärare som
            vill låta deltagare träna på egen hand mellan träffar.
          </p>

          <h2>Vanliga frågor om medborgarskapsprov app</h2>

          <h3>Är det samma frågor som på det riktiga provet?</h3>
          <p>
            Nej. Det officiella provets frågor styrs av staten och offentliggörs
            inte i förväg. En medborgarskapsprov app använder egna frågor, men
            med liknande nivå och ämnesval, för att du ska vänja dig vid
            tankesättet.
          </p>

          <h3>Räcker det att bara använda en medborgarskapsprov app?</h3>
          <p>
            En medborgarskapsprov app är ett starkt stöd, men ger bäst effekt
            tillsammans med mer fördjupande läsning och genomgångar. Kombinationen
            av artiklar på Medborgarskaps-prov.se och träning i appen ger en mer
            komplett förberedelse.
          </p>

          <h3>Behöver jag vara tekniskt kunnig för att använda appen?</h3>
          <p>
            En medborgarskapsprov app är tänkt att vara enkel och tydlig.
            Fokus ligger på stora knappar, korta quiz och lättnavigerade
            menyer, så att du kan ägna energin åt innehållet i stället för
            tekniken.
          </p>

          <h2>Medborgarskapsprov app som del av din strategi</h2>
          <p>
            En medborgarskapsprov app är ett praktiskt verktyg för att göra
            förberedelserna inför medborgarskapsprovet mer vardagsvänliga.
            Genom att träna lite och ofta, följa din utveckling och koppla
            frågorna till tydliga förklaringar ökar du chansen att känna dig
            trygg när det är dags att skriva provet.
          </p>
          <p>
            Medborgarskaps-prov.se samlar bakgrund, guider och övningar – och
            en medborgarskapsprov app knyter ihop allt i mobilen. Tillsammans
            ger de en tydlig väg mot bättre samhällskunskap och ett mer
            förberett möte med det svenska medborgarskapsprovet.
          </p>
        </div>
      </div>
    </div>
  );
}
