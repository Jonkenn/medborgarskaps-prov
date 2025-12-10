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

const canonicalUrl = `${siteConfig.url}/samhallskunskap`;

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vad innebär medborgarskapsprovet i samhällskunskap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Medborgarskapsprovet i samhällskunskap handlar om hur Sverige fungerar som samhälle: demokrati, lagar, rättigheter, välfärd, ekonomi, arbetsmarknad och vardagliga samhällsnormer.",
      },
    },
    {
      "@type": "Question",
      name: "Måste man läsa särskilda böcker i samhällskunskap till medborgarskapsprovet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Det finns inget officiellt läromedel som staten pekar ut. Du kan använda guider, artiklar, nyheter och övningsprov som stöd för att bygga upp din samhällskunskap.",
      },
    },
    {
      "@type": "Question",
      name: "Räcker det att bara göra quiz i samhällskunskap inför medborgarskapsprovet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nej. Quiz är ett bra sätt att testa sig själv, men du behöver också förstå sammanhangen bakom frågorna för att klara provet på riktigt.",
      },
    },
  ],
};

const structuredData = [
  organizationSchema,
  websiteSchema,
  buildWebPageSchema(
    "WebPage",
    "Medborgarskapsprovet i samhällskunskap – innehåll, frågor och hur du pluggar",
    canonicalUrl,
    "Medborgarskapsprovet i samhällskunskap – vad som ingår, vilka områden som testas, exempel på innehåll och hur du bäst förbereder dig online eller i app."
  ),
  buildBreadcrumbList([
    { name: "Hem", item: siteConfig.url },
    { name: "Samhällskunskap", item: canonicalUrl },
  ]),
  faqStructuredData,
];

export const metadata: Metadata = {
  title:
    "Medborgarskapsprovet i samhällskunskap – innehåll, frågor och hur du pluggar",
  description:
    "Medborgarskapsprovet i samhällskunskap – vad som ingår, vilka områden som testas och hur du kan plugga samhällskunskap inför medborgarskapsprovet online eller i app.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Medborgarskapsprovet i samhällskunskap",
    description:
      "Genomgång av medborgarskapsprovet i samhällskunskap: vilka områden som ingår, hur svårt provet är och hur du kan plugga online eller i app.",
    type: "website",
    url: canonicalUrl,
  },
  twitter: {
    title: "Medborgarskapsprovet i samhällskunskap",
    description:
      "Läs om medborgarskapsprovet i samhällskunskap – innehåll, svårighetsgrad och hur du kan förbereda dig med övningsprov online eller i app.",
  },
};

export default function SamhallskunskapPage() {
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
            Medborgarskapsprovet i samhällskunskap
          </h1>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg mt-3">
            Medborgarskapsprovet i samhällskunskap testar hur väl du förstår hur
            Sverige fungerar som samhälle. Här prövas kunskaper om demokrati,
            lagar, rättigheter, välfärd, arbete och vardagsliv.
          </p>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg mt-3">
            Vill du ha en övergripande bild av hela provet hittar du det på{" "}
            <Link href="/" className="underline underline-offset-4 font-medium">
              Medborgarskapsprov.se
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 lg:px-0 py-10 relative z-10">
        <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-headings:tracking-tight prose-p:tracking-tight prose-p:text-balance prose-lg">
          <h2>Vad är medborgarskapsprovet i samhällskunskap?</h2>
          <p>
            Medborgarskapsprovet i samhällskunskap är den del av det svenska
            medborgarskapsprovet som handlar om hur samhället fungerar i
            praktiken. Här testas din förståelse för hur Sverige styrs, hur
            lagar och myndigheter fungerar, samt vilka rättigheter och
            skyldigheter du har som boende i landet.
          </p>

          <h2>Vilka områden testas i samhällskunskapsdelen?</h2>
          <p>
            Samhällskunskapen omfattar flera centrala delar av det svenska
            samhället. Du kan förvänta dig frågor inom följande områden:
          </p>
          <ul>
            <li>demokrati, riksdag, regering och val</li>
            <li>Sveriges grundlagar samt mänskliga rättigheter</li>
            <li>polis, domstolar och rättssystemet</li>
            <li>välfärden: vård, skola, pension och socialförsäkringar</li>
            <li>arbete, skatter och arbetsmarknaden</li>
            <li>vardagsliv, normer, jämställdhet och samhällsservice</li>
          </ul>

          <h2>Hur svårt är medborgarskapsprovet i samhällskunskap?</h2>
          <p>
            Provet är inte tänkt att testa detaljkunskaper på expertnivå, utan
            din grundläggande förståelse för hur samhället fungerar. Du ska
            kunna orientera dig i det svenska systemet, förstå dina rättigheter
            och skyldigheter och veta hur du som medborgare förväntas agera i
            vardagen.
          </p>

          <h2>Plugga medborgarskapsprovet i samhällskunskap online</h2>
          <p>
            Ett effektivt sätt att förbereda sig är att studera digitalt. När du
            pluggar medborgarskapsprovet i samhällskunskap online kan du arbeta
            med övningsprov, quiz och genomgångar direkt i webbläsaren.
          </p>
          <p>
            Via{" "}
            <Link
              href="/online"
              className="underline underline-offset-4 font-medium"
            >
              Medborgarskapsprovet online
            </Link>{" "}
            kan du testa dina kunskaper, se vilka områden du behärskar och vilka
            du behöver träna mer på. Du kan plugga i din egen takt, både på
            dator och mobil.
          </p>

          <h2>Plugga samhällskunskap till medborgarskapsprovet i app</h2>
          <p>
            För dig som vill ha studierna samlade i mobilen är en app ett
            smidigt alternativ. Att plugga medborgarskapsprovet i
            samhällskunskap i app gör det möjligt att öva även utan konstant
            uppkoppling.
          </p>
          <p>
            I en framtida{" "}
            <Link
              href="/app"
              className="underline underline-offset-4 font-medium"
            >
              medborgarskapsprov-app
            </Link>{" "}
            kan funktioner som notiser, personliga studieplaner och
            resultatstatistik göra förberedelserna ännu enklare och mer
            strukturerade.
          </p>

          <h2>Vanliga frågor om medborgarskapsprovet i samhällskunskap</h2>

          <h3>Är samhällskunskap samma sak som politik?</h3>
          <p>
            Nej. Politik är en viktig del, men samhällskunskap omfattar även
            rättssystem, välfärd, ekonomi, arbete och hur vardagslivet i Sverige
            fungerar.
          </p>

          <h3>Räcker det att bara göra quiz?</h3>
          <p>
            Quiz är ett bra verktyg för att testa sig själv, men för att klara
            medborgarskapsprovet i samhällskunskap behöver du också förstå
            sammanhangen bakom frågorna.
          </p>

          <h3>Finns det någon officiell bok för samhällskunskapsdelen?</h3>
          <p>
            Det finns i dagsläget inget statligt fastställt läromedel.
            Förberedelser sker i stället genom guider, övningsprov, nyheter och
            samhällsinformation.
          </p>

          <h2>Sammanfattning: så klarar du medborgarskapsprovet i samhällskunskap</h2>
          <p>
            Medborgarskapsprovet i samhällskunskap handlar om att förstå hur
            Sverige fungerar i praktiken – hur landet styrs, hur lagar
            tillämpas, hur välfärden är uppbyggd och vilket ansvar du har som
            medborgare. Genom att kombinera fakta, övningsprov och regelbunden
            repetition ökar du dina chanser att klara provet när det införs.
          </p>
        </div>
      </div>
    </div>
  );
}
