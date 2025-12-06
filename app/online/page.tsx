import type { Metadata } from "next";
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
      name: "Vad är medborgarskapsprov online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Medborgarskapsprov online syftar på digitala övningsprov, quiz och frågor som hjälper dig att förbereda dig inför det kommande svenska medborgarskapsprovet. När du tränar med medborgarskapsprov online kan du testa dina kunskaper i samhällskunskap, demokrati och livet i Sverige på ett flexibelt sätt. På Medborgarskaps-prov.se samlas vägledning, exempel och förklaringar för att du ska förstå vad som testas.",
      },
    },
    {
      "@type": "Question",
      name: "Är Medborgarskaps-prov.se ett officiellt prov?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nej. Medborgarskaps-prov.se är en oberoende informationssida och erbjuder inte det officiella provet. Syftet är att hjälpa dig att förstå regler, upplägg och innehåll genom guider, övningsmaterial och medborgarskapsprov online som ger en känsla för frågetyp och nivå.",
      },
    },
    {
      "@type": "Question",
      name: "Kan jag träna inför medborgarskapsprovet gratis online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, tanken med Medborgarskaps-prov.se är att du ska kunna ta del av information, exempel, förklaringar och medborgarskapsprov online gratis. Med tiden kommer fler övningsfrågor, quiz och digitala resurser att byggas ut så att du kan träna mer strukturerat inför medborgarskapstestet.",
      },
    },
  ],
};

const structuredData = [
  organizationSchema,
  websiteSchema,
  buildWebPageSchema(
    "WebPage",
    "Medborgarskapsprov online – träna med övningsprov, quiz och digitala frågor",
    canonicalUrl,
    "Medborgarskapsprov online – lär dig hur det svenska medborgarskapsprovet fungerar, vad som testas och hur du kan förbereda dig online med guider, exempel, quiz och övningsfrågor i samhällskunskap."
  ),
  buildBreadcrumbList([
    { name: "Hem", item: siteConfig.url },
    { name: "Medborgarskapsprov online", item: canonicalUrl },
  ]),
  faqStructuredData,
];

export const metadata: Metadata = {
  title:
    "Medborgarskapsprov online – träna med övningsprov, quiz och digitala frågor",
  description:
    "Medborgarskapsprov online – förstå hur det svenska medborgarskapsprovet fungerar, vad som testas och hur du kan förbereda dig digitalt med guider, quiz och övningsfrågor i samhällskunskap.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title:
      "Medborgarskapsprov online – övningsprov, quiz och digital träning inför provet",
    description:
      "Träna med medborgarskapsprov online: få en tydlig genomgång av det svenska medborgarskapsprovet, vad som testas och hur du kan förbereda dig med artiklar, quiz och övningsfrågor på Medborgarskaps-prov.se.",
    type: "website",
    url: canonicalUrl,
  },
  twitter: {
    title:
      "Medborgarskapsprov online – träna med quiz, exempel och övningsfrågor",
    description:
      "Medborgarskapsprov online på Medborgarskaps-prov.se – lär dig upplägget, innehållet och hur du kan förbereda dig digitalt inför det svenska medborgarskapstestet.",
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
            Medborgarskapsprov online – så förbereder du dig digitalt
          </h1>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg mt-3">
            Medborgarskapsprov online är ett sätt att träna inför det svenska
            medborgarskapsprovet genom digitala övningsfrågor, quiz och
            faktatexter. Provet ska testa dina kunskaper om det svenska
            samhället, demokrati, lagar och vardagsliv. På
            Medborgarskaps-prov.se samlas vägledning och övningsmaterial som
            hjälper dig att förstå vad som väntar.
          </p>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg mt-3">
            Här får du en tydlig genomgång av hur medborgarskapsprov online
            fungerar, vilka områden som testas och hur du använder övningsprov
            på bästa sätt inför det riktiga medborgarskapsprovet.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 lg:px-0 py-10 relative z-10">
        <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-headings:tracking-tight prose-p:tracking-tight prose-p:text-balance prose-lg">
          <h2>Vad innebär medborgarskapsprov online?</h2>
          <p>
            Medborgarskapsprov online innebär att du förbereder dig digitalt
            inför det officiella provet genom övningsprov, quiz och
            sammanfattningar av svensk samhällskunskap. Träningen sker på
            dator eller mobil, vilket gör det enkelt att repetera när det
            passar dig.
          </p>
          <p>
            Medborgarskaps-prov.se är en oberoende informationssida. Här kan du
            följa utvecklingen av regelverket och bygga upp dina kunskaper steg
            för steg genom artiklar och övningsmaterial för
            medborgarskapsprov online.
          </p>

          <h2>Fördelar med att träna med medborgarskapsprov online</h2>
          <p>
            Att använda medborgarskapsprov online som studiemetod ger flera
            praktiska fördelar:
          </p>
          <ul>
            <li>Du vänjer dig vid hur frågor kan vara formulerade</li>
            <li>Du får snabb återkoppling på vad du kan och inte kan</li>
            <li>Du kan träna i korta pass när det passar i vardagen</li>
            <li>Du kombinerar fakta, förklaringar och testning i ett</li>
          </ul>
          <p>
            Med regelbunden träning med medborgarskapsprov online får du också
            bättre uppfattning om vilken nivå som krävs på det riktiga provet.
          </p>

          <h2>Vilka kunskaper testas i medborgarskapsprovet?</h2>
          <p>
            Den slutliga kursplanen fastställs av staten, men provet väntas
            omfatta centrala delar av det svenska samhället:
          </p>
          <ul>
            <li>demokrati och politiskt system</li>
            <li>grundläggande fri- och rättigheter</li>
            <li>lagar och rättssystem</li>
            <li>välfärd, vård och socialförsäkring</li>
            <li>arbete, ekonomi och arbetsmarknad</li>
            <li>vardagsliv och samhällsnormer i Sverige</li>
          </ul>
          <p>
            På Medborgarskaps-prov.se förklaras varje område i guider som kan
            användas tillsammans med medborgarskapsprov online.
          </p>

          <h2>Skillnaden mellan övningsprov online och det officiella provet</h2>
          <ul>
            <li>
              <strong>Det officiella provet</strong> genomförs av ansvarig
              myndighet och ligger till grund för beslut om medborgarskap.
            </li>
            <li>
              <strong>Medborgarskapsprov online</strong> är övningsmaterial
              framtaget i pedagogiskt syfte och har ingen juridisk betydelse.
            </li>
          </ul>
          <p>
            Övningsprov online är alltså ett komplement till den officiella
            prövningen och ett sätt att minska osäkerheten inför provtillfället.
          </p>

          <h2>Så använder du Medborgarskaps-prov.se för online-träning</h2>
          <ol>
            <li>Läs in dig på grunderna i samhällskunskap</li>
            <li>Fördjupa dig i ett område i taget</li>
            <li>
              Testa dina kunskaper med medborgarskapsprov online och quiz
            </li>
            <li>Repetera det som känns svårt</li>
          </ol>
          <p>
            Genom att arbeta strukturerat med medborgarskapsprov online bygger
            du upp både faktakunskap och provvana.
          </p>

          <h2>Vem har nytta av medborgarskapsprov online?</h2>
          <ul>
            <li>Personer som planerar att ansöka om svenskt medborgarskap</li>
            <li>
              Nyanlända som vill förstå det svenska samhället bättre
            </li>
            <li>Lärare och studiecirklar inom samhällskunskap</li>
          </ul>
          <p>
            Digital träning gör det möjligt att anpassa studierna efter egna
            behov och förutsättningar.
          </p>

          <h2>Vanliga frågor om medborgarskapsprov online</h2>

          <h3>Är Medborgarskaps-prov.se gratis?</h3>
          <p>
            Ja. All grundläggande information och vägledning om
            medborgarskapsprov online är kostnadsfri.
          </p>

          <h3>Är frågorna identiska med det riktiga provet?</h3>
          <p>
            Nej. Det officiella provets frågor offentliggörs inte i förväg, men
            övningsfrågor ligger nära i både ämnesval och svårighetsgrad.
          </p>

          <h3>Räcker det att bara göra online-prov?</h3>
          <p>
            Medborgarskapsprov online bör kombineras med fördjupad läsning för
            att ge bästa möjliga förberedelse.
          </p>

          <h2>Medborgarskapsprov online som del av din förberedelse</h2>
          <p>
            Medborgarskapsprov online är ett effektivt verktyg för att
            kontrollera dina kunskaper, identifiera kunskapsluckor och bygga
            trygghet inför det officiella medborgarskapsprovet.
          </p>
          <p>
            På Medborgarskaps-prov.se samlas information och övningsmaterial så
            att du kan fokusera på det viktigaste: att förstå hur Sverige
            fungerar.
          </p>
        </div>
      </div>
    </div>
  );
}
