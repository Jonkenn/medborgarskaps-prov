import type { Metadata } from "next";
import Link from "next/link";
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
      name: "Finns det en app för medborgarskapsprovet idag?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I dag finns det ingen officiell app för det svenska medborgarskapsprovet. Eftersom provet ännu inte har införts har varken staten eller andra aktörer lanserat en färdig app som följer ett fastställt officiellt underlag.",
      },
    },
    {
      "@type": "Question",
      name: "Kommer Medborgarskapsprov.se att släppa en egen app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Målet med Medborgarskapsprov.se är att på sikt kunna erbjuda en app där du kan träna på frågor kopplade till medborgarskapsprovet. Fokus är att bygga vidare på det innehåll som redan finns på webbplatsen, med strukturerade quiz och övningsprov anpassade för mobilen.",
      },
    },
    {
      "@type": "Question",
      name: "Vad ska jag tänka på när jag väljer app för medborgarskapsprov?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "När det väl finns appar för medborgarskapsprov bör du titta på vem som står bakom appen, hur uppdaterat innehållet är, om frågorna tydligt förklaras och om appen verkar följa samma inriktning som det officiella provet. Var försiktig med appar som lovar 'originalfrågor' från provet – de är inte offentliga.",
      },
    },
  ],
};

const structuredData = [
  organizationSchema,
  websiteSchema,
  buildWebPageSchema(
    "WebPage",
    "Medborgarskapsprov app – så kan du träna i mobilen när provet införs",
    canonicalUrl,
    "Guide till medborgarskapsprov i app – hur en framtida app kan fungera, vad du ska tänka på när du väljer app och hur du redan nu kan förbereda dig med hjälp av Medborgarskapsprov.se."
  ),
  buildBreadcrumbList([
    { name: "Hem", item: siteConfig.url },
    { name: "Medborgarskapsprov app", item: canonicalUrl },
  ]),
  faqStructuredData,
];

export const metadata: Metadata = {
  title:
    "Medborgarskapsprov i app – så kan du träna i mobilen när provet införs",
  description:
    "Finns det en app för medborgarskapsprovet? Här går vi igenom hur en medborgarskapsprov app kan fungera, vad du ska tänka på och hur du redan nu kan förbereda dig med hjälp av Medborgarskapsprov.se.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title:
      "Medborgarskapsprov app – guide till att träna i mobilen",
    description:
      "En genomgång av hur en app för medborgarskapsprov kan se ut, vilka funktioner som är viktiga och hur du förbereder dig redan idag med Medborgarskapsprov.se.",
    type: "website",
    url: canonicalUrl,
  },
  twitter: {
    title:
      "Medborgarskapsprov app – hur kan en sån fungera?",
    description:
      "Läs om hur en framtida medborgarskapsprov app kan vara uppbyggd, vad du ska tänka på när du väljer app och hur du kan plugga redan nu.",
  },
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
            Medborgarskapsprov i app: så kan du plugga i mobilen
          </h1>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg mt-3">
            Många undrar om det finns en app där man kan plugga till
            medborgarskapsprovet – gärna med quiz, övningsfrågor och tydliga
            förklaringar direkt i mobilen. Här går vi igenom hur en
            medborgarskapsprov app skulle kunna fungera, vad som är viktigt att
            tänka på och hur du redan nu kan förbereda dig innan provet ens är
            på plats.
          </p>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg mt-3">
            På{" "}
            <Link
              href="/"
              className="underline underline-offset-4 font-medium"
            >
              Medborgarskapsprov.se
            </Link>{" "}
            hittar du bakgrund, regler och genomgångar kring det kommande
            medborgarskapsprovet. I{" "}
            <Link
              href="/online"
              className="underline underline-offset-4 font-medium"
            >
              Medborgarskapsprov online
            </Link>{" "}
            samlar vi digitala övningsprov, och i guiden{" "}
            <Link
              href="/samhällskunskap"
              className="underline underline-offset-4 font-medium"
            >
              Medborgarskapsprov i samhällskunskap
            </Link>{" "}
            förklarar vi vilket innehåll – alltså vilken typ av
            samhällskunskap – provet är tänkt att testa.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 lg:px-0 py-10 relative z-10">
        <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-headings:tracking-tight prose-p:tracking-tight prose-p:text-balance prose-lg">
          <h2>Finns det någon app för medborgarskapsprovet idag?</h2>
          <p>
            I dag finns det ingen officiell app för det svenska
            medborgarskapsprovet. Skälet är enkelt: provet är ännu inte
            infört i praktiken, och det finns därför inget färdigt officiellt
            underlag som en app kan bygga direkt på.
          </p>
          <p>
            Det kan dyka upp appar och quiz som säger att de handlar om
            medborgarskapsprov, men de är alltid fristående initiativ. Inga
            företag eller privatpersoner har tillgång till “originalfrågor”
            eller ett slutgiltigt facit från staten – de frågorna är inte
            offentliga.
          </p>

          <h2>Vad skulle en bra medborgarskapsprov app innehålla?</h2>
          <p>
            När det väl finns ett färdigt prov och en etablerad struktur är det
            rimligt att vänta sig appar som hjälper dig att plugga. En genomtänkt
            app för medborgarskapsprov bör då göra mer än att bara kasta frågor
            på dig. Några viktiga delar:
          </p>
          <ul>
            <li>
              Tydliga quiz och övningsprov som liknar hur ett riktigt prov kan
              kännas.
            </li>
            <li>
              Förklaringar till svaren – så att du ser varför något är rätt eller
              fel, inte bara får ett resultat.
            </li>
            <li>
              Indelning efter område, till exempel demokrati, lagar, välfärd,
              arbete och vardagsliv.
            </li>
            <li>
              Någon form av statistik eller utvecklingskurva så att du ser vad
              du behöver träna mer på.
            </li>
          </ul>
          <p>
            Poängen med en app är att göra det enkelt att träna ofta, kort och
            utan krångel – inte att ersätta allt annat material.
          </p>

          <h2>Vem står bakom innehållet i en app?</h2>
          <p>
            Om och när det börjar lanseras appar för medborgarskapsprov är en av
            de viktigaste frågorna: vem har gjort appen och hur har innehållet
            tagits fram? Är det en seriös aktör som faktiskt följer det
            samhällskunskapsinnehåll som politiskt beslutats, eller är det mest
            snabba quiz utan tydlig grund?
          </p>
          <p>
            Du bör vara skeptisk till lovord som “originalfrågor” eller
            “samma prov som staten använder”. Det stämmer inte – de riktiga
            frågorna publiceras inte. En ärlig app fokuserar istället på
            relevanta områden och tydliga förklaringar.
          </p>

          <h2>Vad kostar en app för medborgarskapsprov?</h2>
          <p>
            Priserna kommer troligen att variera. Vissa appar kan vara gratis
            med reklam, andra kan ta en engångssumma eller ha abonnemang. Det
            viktiga är inte bara priset, utan om du faktiskt får något vettigt
            för pengarna:
          </p>
          <ul>
            <li>Är innehållet begripligt och uppdaterat?</li>
            <li>Finns det tydliga förklaringar bakom svaren?</li>
            <li>Följer appen det som faktiskt testas i provet?</li>
          </ul>
          <p>
            Ett högt pris är ingen kvalitetsgaranti – och gratis är inte
            automatiskt dåligt. Men du ska få mer än slumpmässiga frågor.
          </p>

          <h2>Hur kan du plugga redan nu – innan det finns appar?</h2>
          <p>
            Även om det inte finns någon färdig app i dag kan du börja bygga upp
            din samhällskunskap. Det kommande provet handlar inte om att kunna
            enskilda “appfrågor”, utan om att förstå hur samhället fungerar.
          </p>
          <p>
            Du kan till exempel:
          </p>
          <ul>
            <li>Läsa om demokrati, lagar och rättigheter.</li>
            <li>Sätta dig in i hur vård, skola och välfärd är uppbyggda.</li>
            <li>Följa nyheter och försöka förstå varför beslut tas som de gör.</li>
            <li>Träna på att läsa och resonera kring samhällsfrågor.</li>
          </ul>
          <p>
            När appar väl börjar dyka upp har du då redan en grund att stå på –
            och kan använda dem som ett komplement, inte som enda källa.
          </p>

          <h2>Vanliga frågor om medborgarskapsprov app</h2>

          <h3>Finns det någon app att ladda ner redan nu?</h3>
          <p>
            Det finns appar och quiz om svensk samhällskunskap, men ingen
            officiell app som bygger direkt på ett fastställt
            medborgarskapsprov. Alla sådana appar är fristående initiativ och
            ska ses som stödmaterial, inte som “det riktiga provet i mobilen”.
          </p>

          <h3>Kommer det att dyka upp fler appar när provet införs?</h3>
          <p>
            Ja, det är mycket sannolikt. När provet väl är infört kommer fler
            aktörer att försöka bygga digitala verktyg för den som vill plugga.
            Då blir frågan ännu viktigare: vilka appar ger faktiskt bra
            förberedelse och vilka är mest yta?
          </p>

          <h3>Räcker det att plugga i en app?</h3>
          <p>
            Nej. En app kan vara ett bra komplement, men den ersätter inte
            behovet av att förstå helheten. Det riktiga provet testar din
            samhällskunskap – inte om du har memorerat ett visst antal appfrågor.
            Se en app som ett sätt att repetera och testa dig själv, inte som
            hela strategin.
          </p>

          <h2>Sammanfattning: appen är ett verktyg – inte allt</h2>
          <p>
            En framtida app för medborgarskapsprov kan göra det mycket enklare
            att träna i korta pass i mobilen. Men grunden är fortfarande att
            förstå vad provet handlar om, vilka områden som testas och hur det
            svenska samhället fungerar.
          </p>
          <p>
            Den här sidan ger dig en bild av hur en medborgarskapsprov app kan
            se ut, vad du ska vara uppmärksam på och varför du inte ska lita på
            löften om “originalfrågor”. När provet väl är på plats är du bättre
            förberedd – oavsett om du pluggar via webben, böcker, appar eller en
            kombination av allt.
          </p>
        </div>
      </div>
    </div>
  );
}
