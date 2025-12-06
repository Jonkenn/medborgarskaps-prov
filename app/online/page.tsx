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

const canonicalUrl = `${siteConfig.url}/online`;

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Finns det övningsprov för medborgarskapsprovet online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Medborgarskapsprov online syftar på övningsprov, quiz och frågor i webbläsaren som hjälper dig att förbereda dig inför det svenska medborgarskapsprovet. De är tänkta som stöd och träning – inte som det officiella provet.",
      },
    },
    {
      "@type": "Question",
      name: "Kostar det något att träna med medborgarskapsprov online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grundläggande information och övningsmaterial för medborgarskapsprov online kan användas utan kostnad. Fokus ligger på att sänka tröskeln för att börja träna samhällskunskap digitalt.",
      },
    },
    {
      "@type": "Question",
      name: "Är frågorna samma som på det riktiga medborgarskapsprovet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nej. De officiella frågorna offentliggörs inte i förväg. Onlineproven använder egna frågor som ligger nära i ämnesval och nivå, men de är fristående och är inte identiska med det riktiga provet.",
      },
    },
  ],
};

const structuredData = [
  organizationSchema,
  websiteSchema,
  buildWebPageSchema(
    "WebPage",
    "Medborgarskapsprov online – övningsprov i webbläsaren",
    canonicalUrl,
    "Medborgarskapsprov online – övningsprov, quiz och frågor i webbläsaren som hjälper dig att förbereda dig inför det svenska medborgarskapsprovet."
  ),
  buildBreadcrumbList([
    { name: "Hem", item: siteConfig.url },
    { name: "Medborgarskapsprov online", item: canonicalUrl },
  ]),
  faqStructuredData,
];

export const metadata: Metadata = {
  title: "Medborgarskapsprov online – övningsprov i webbläsaren",
  description:
    "Medborgarskapsprov online – träna samhällskunskap med digitala övningsprov och quiz i webbläsaren inför det svenska medborgarskapsprovet.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Medborgarskapsprov online – digital träning inför provet",
    description:
      "Öva på medborgarskapsprov online: gör övningsprov i webbläsaren och testa dina kunskaper i svensk samhällskunskap inför medborgarskapsprovet.",
    type: "website",
    url: canonicalUrl,
  },
  twitter: {
    title: "Medborgarskapsprov online – övningsprov och quiz",
    description:
      "Träna med medborgarskapsprov online – digitala övningsprov och quiz i samhällskunskap inför det svenska medborgarskapsprovet.",
  },
  other: { "script:ld+json": JSON.stringify(structuredData) },
};

export default function OnlinePage() {
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
            Medborgarskapsprov online – så kan du plugga i webbläsaren
          </h1>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg mt-3">
            Många vill kunna plugga till medborgarskapsprovet direkt i
            webbläsaren – med övningsprov, quiz och tydliga förklaringar utan
            att behöva ladda ner något. Den här sidan handlar om
            medborgarskapsprov online: hur digitala prov kan fungera, vad de
            är bra för och vad de inte kan ersätta.
          </p>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg mt-3">
            Om du vill ha en bredare bild av provet, reglerna och bakgrunden
            hittar du guider och genomgångar på{" "}
            <Link href="/" className="underline underline-offset-4 font-medium">
              Medborgarskapsprov.se
            </Link>
            . Här fokuserar vi specifikt på den del som sker online: träningen i
            webbläsaren.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 lg:px-0 py-10 relative z-10">
        <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-headings:tracking-tight prose-p:tracking-tight prose-p:text-balance prose-lg">
          <h2>Finns det medborgarskapsprov online idag?</h2>
          <p>
            Det finns redan olika typer av digitala övningsprov och quiz som
            försöker efterlikna hur ett medborgarskapsprov kan kännas. De är
            dock alltid fristående initiativ, eftersom det riktiga provet ännu
            inte används i full skala och inte har offentliga originalfrågor.
          </p>
          <p>
            Medborgarskapsprov online ska därför ses som ett träningsverktyg:
            något som hjälper dig att testa dina kunskaper i samhällskunskap,
            inte som en kopia av det riktiga provet.
          </p>

          <h2>Hur fungerar medborgarskapsprov online i praktiken?</h2>
          <p>
            Grundidén är enkel: du får en serie frågor i webbläsaren och svarar
            direkt på skärmen. Efteråt får du ett resultat – ibland också
            förklaringar till varje fråga. Ofta kan du:
          </p>
          <ul>
            <li>göra kortare quiz med blandade frågor</li>
            <li>göra längre övningsprov som liknar ett helt prov</li>
            <li>upprepa samma prov flera gånger för att se förbättring</li>
          </ul>
          <p>
            Fördelen med onlineprov är att du kommer igång snabbt: du öppnar en
            sida, gör ett prov och ser direkt hur det gick.
          </p>

          <h2>Vad är skillnaden mot en app?</h2>
          <p>
            Onlineprov körs i webbläsaren och fungerar lika bra på dator, mobil
            och surfplatta, så länge du har internet. En app laddas ner och
            installeras på din telefon.
          </p>
          <p>
            Vill du läsa mer om hur en framtida app kan se ut, vilka funktioner
            som är rimliga och vad du ska tänka på, finns en separat genomgång
            på{" "}
            <Link href="/app" className="underline underline-offset-4 font-medium">
              Medborgarskapsprov i app
            </Link>
            .
          </p>

          <h2>Vad kostar det att träna online?</h2>
          <p>
            Onlineprov kan vara både gratis och betal. Vissa aktörer erbjuder
            öppna quiz utan kostnad, andra tar betalt för större
            frågebanker eller statistikfunktioner.
          </p>
          <p>
            Priset säger i sig inte särskilt mycket. Det viktiga är om du
            faktiskt lär dig något: om frågorna är begripliga, relevanta och
            har vettiga förklaringar – inte om sidan råkar vara gratis eller
            dyr.
          </p>

          <h2>Hur pålitliga är onlineprov?</h2>
          <p>
            Eftersom ingen utanför staten har tillgång till de riktiga
            provfrågorna måste allt övningsmaterial vara egenkonstruerat.
            Kvaliteten beror därför helt på vem som gjort frågorna och hur väl
            de speglar det som politiskt beslutats att provet ska testa.
          </p>
          <p>
            Vill du veta mer om vem som står bakom innehåll och struktur på den
            här sajten kan du läsa{" "}
            <Link href="/om" className="underline underline-offset-4 font-medium">
              om Medborgarskapsprov.se
            </Link>
            .
          </p>

          <h2>Vad testar medborgarskapsprov online egentligen?</h2>
          <p>
            Även om olika onlineprov kan vara uppbyggda på lite olika sätt
            kretsar de kring samma kärna av svensk samhällskunskap. Typiskt
            handlar det om:
          </p>
          <ul>
            <li>hur demokrati och politiska beslut fungerar</li>
            <li>grundläggande fri- och rättigheter</li>
            <li>lagar, domstolar och rättssäkerhet</li>
            <li>välfärd, vård, skola och socialförsäkringar</li>
            <li>arbete, ekonomi och arbetsmarknad</li>
            <li>vardagsliv och normer i Sverige</li>
          </ul>
          <p>
            Onlineproven kan aldrig täcka allt, men de kan hjälpa dig att se om
            du har en grundläggande förståelse inom de här områdena.
          </p>

          <h2>Hur kan du plugga redan nu – utöver onlineprov?</h2>
          <p>
            Onlineprov är bra för att testa dig själv, men de ersätter inte
            behovet av att faktiskt bygga upp en bred samhällskunskap. Du kan
            till exempel:
          </p>
          <ul>
            <li>läsa om demokrati, lagar och rättigheter</li>
            <li>sätta dig in i hur vård, skola och välfärd fungerar</li>
            <li>följa nyheter och försöka förstå besluten bakom</li>
            <li>diskutera samhällsfrågor med andra</li>
          </ul>
          <p>
            När du sedan gör medborgarskapsprov online får du ett tydligare
            kvitto på vad som sitter och vad du behöver repetera.
          </p>

          <h2>Vanliga frågor om medborgarskapsprov online</h2>

          <h3>Är onlineprov samma sak som det riktiga provet?</h3>
          <p>
            Nej. Det riktiga provet genomförs av staten och ligger till grund
            för beslut om medborgarskap. Onlineprov är bara övningsmaterial.
          </p>

          <h3>Kan jag lita på resultatet från onlineprov?</h3>
          <p>
            Resultatet visar hur du presterar på just de frågorna, vid just det
            tillfället. Ta det som en indikator – inte som en garanti för hur
            det går på det riktiga provet.
          </p>

          <h3>Räcker det att bara göra medborgarskapsprov online?</h3>
          <p>
            Nej. Onlineprov är ett bra komplement, men du behöver också
            förstå sammanhanget bakom frågorna. Det riktiga provet testar din
            samhällskunskap, inte din förmåga att memorera en enskild
            frågebank.
          </p>

          <h2>Sammanfattning: onlineprov är ett verktyg – inte allt</h2>
          <p>
            Medborgarskapsprov online gör det enklare att komma igång: du ser
            direkt hur frågorna kan se ut, får ett resultat och kan repetera
            utan större tröskel. Men den viktigaste delen är fortfarande att
            förstå vad provet faktiskt handlar om – hur Sverige fungerar som
            samhälle.
          </p>
          <p>
            Ser du onlineprov som ett verktyg bland flera, inte som hela
            strategin, får du ut mest av träningen. Då blir de ett stöd för
            din egen inläsning i stället för en genväg som lovar mer än den kan
            hålla.
          </p>
        </div>
      </div>
    </div>
  );
}
