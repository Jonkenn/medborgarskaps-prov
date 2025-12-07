import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { Suspense } from "react";
import { BlogCard } from "@/components/blog-card";
import { TagFilter } from "@/components/tag-filter";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { buildHomePageStructuredData } from "@/lib/structured-data";
import { SeparatorVertical } from "lucide-react";
import Link from "next/link";

interface BlogData {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  featured?: boolean;
  readTime?: string;
  author?: string;
  authorImage?: string;
  thumbnail?: string;
}

interface BlogPage {
  url: string;
  data: BlogData;
}

const blogSource = loader({
  baseUrl: "/blog",
  source: createMDXSource(docs, meta),
});

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const allPages = blogSource.getPages() as BlogPage[];
  const sortedBlogs = allPages.sort((a, b) => {
    const dateA = new Date(a.data.date).getTime();
    const dateB = new Date(b.data.date).getTime();
    return dateB - dateA;
  });

  const allTags = [
    "All",
    ...Array.from(
      new Set(sortedBlogs.flatMap((blog) => blog.data.tags || []))
    ).sort(),
  ];

  const selectedTag = resolvedSearchParams.tag || "All";
  const filteredBlogs =
    selectedTag === "All"
      ? sortedBlogs
      : sortedBlogs.filter((blog) => blog.data.tags?.includes(selectedTag));

  const tagCounts = allTags.reduce((acc, tag) => {
    if (tag === "All") {
      acc[tag] = sortedBlogs.length;
    } else {
      acc[tag] = sortedBlogs.filter((blog) =>
        blog.data.tags?.includes(tag)
      ).length;
    }
    return acc;
  }, {} as Record<string, number>);

  const structuredData = buildHomePageStructuredData();

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
      <div className="p-6 border-b border-border flex flex-col gap-6 min-h-[250px] justify-center relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-2xl md:text-4xl tracking-tighter">
              Medborgarskapsprov.se - allt om  medborgarskapsprovet i Sverige.
            </h1>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
Välkommen till Medborgarskapsprov.se. Vi samlar och förklarar all viktig information om det svenska medborgarskapsprovet på ett och samma ställe. Här får du en tydlig översikt av regler, krav, övningsfrågor och senaste nyheterna – så att du kan förbereda dig på rätt sätt inför provet.            </p>
          </div>
        </div>
        {allTags.length > 0 && (
          <div className="max-w-7xl mx-auto w-full">
            <TagFilter
              tags={allTags}
              selectedTag={selectedTag}
              tagCounts={tagCounts}
            />
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-0">
        <Suspense fallback={<div>Loading articles...</div>}>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative overflow-hidden border-x border-border ${
              filteredBlogs.length < 4 ? "border-b" : "border-b-0"
            }`}
          >
            {filteredBlogs.map((blog) => {
              const date = new Date(blog.data.date);
              const formattedDate = formatDate(date);

              return (
                <BlogCard
                  key={blog.url}
                  url={blog.url}
                  title={blog.data.title}
                  description={blog.data.description}
                  date={formattedDate}
                  thumbnail={blog.data.thumbnail}
                  showRightBorder={filteredBlogs.length < 3}
                />
              );
            })}

          </div>
          

<div className="flex items-center justify-center my-10">
  <SeparatorVertical className="h-10 w-4 text-muted-foreground" />
</div>
            <section className="border-x border-b border-border py-10 px-6 lg:px-8 bg-background">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-2xl font-semibold tracking-tight mb-3">
              Om Medborgarskapsprov.se
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-3">
              Ambitionen bakom Medborgarskapsprov.se är att med ett så sakligt
              och objektivt perspektiv som möjligt ge en tydlig och korrekt
              bild av det svenska medborgarskapsprovet. De nya kraven, reglerna
              och den mängd information som finns kan göra det svårt att få en
              samlad överblick – därför finns vi här.
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              Vårt mål är att ge dig möjlighet att tryggt och medvetet
              förbereda dig inför provet med pålitlig information, tydliga
              förklaringar och relevanta övningsfrågor. Det viktiga för oss är
              att du förstår vad som krävs, hur provet fungerar och hur du bäst
              förbereder dig. Vi hjälper dig dessutom att hitta rätt material
              utifrån dina behov.     
              </p>    <p>    På vår separata sida kan du läsa mer{" "}
  <Link href="/om" className="underline underline-offset-4">
    om oss
  </Link>.


            </p>
          </div>
        </section>
    <section className="border-x border-b border-border py-10 px-6 lg:px-8 bg-background">
  <div className="max-w-3xl">
    <h2 className="text-2xl md:text-2xl font-semibold tracking-tight mb-6">
      Vägar till rätt information om medborgarskapsprovet
    </h2>

    <p className="text-sm md:text-base text-muted-foreground mb-6">
      Medborgarskapsprovet omfattar flera olika moment och kunskapsområden som
      kan vara svåra att överblicka utan tydlig vägledning. Här presenteras
      samlad information om provets struktur, innehåll och övergripande krav,
      med fokus på att skapa en klar förståelse för hur helheten är uppbyggd och
      hur de olika delarna hänger samman.
    </p>
<h3 className="text-lg md:text-xl font-semibold tracking-tight mb-3">
  Medborgarskapsprovet i samhällskunskap
</h3>

<p className="text-sm md:text-base text-muted-foreground mb-6">
  Samhällskunskap utgör en central del av medborgarskapsprovet och omfattar
  grundläggande kunskaper om hur det svenska samhället är organiserat, hur
  demokratin fungerar och vilka rättigheter och skyldigheter som gäller för
  medborgare. Innehållet rör bland annat statens och kommunernas roller,
  rättssystemet, val, myndigheter och hur beslut fattas på olika nivåer.
</p>

<p className="text-sm md:text-base text-muted-foreground mb-6">
  På{" "}
  <Link href="/samhallskunskap" className="underline underline-offset-4">
    medborgarskapsprov i samhällskunskap
  </Link>{" "}
  presenteras samhällskunskapen i en tydligt strukturerad form där varje
  huvudområde behandlas var för sig. Upplägget är utformat för att ge en
  sammanhängande förståelse för hur samhällets olika delar hänger ihop, från
  grundläggande demokratiska principer till mer praktiska frågor om myndigheter,
  lagar och medborgarskap.
</p>






    <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-3">
      Medborgarskapsprovet online
    </h3>

    <p className="text-sm md:text-base text-muted-foreground mb-6">
      Via{" "}
      <Link href="/online" className="underline underline-offset-4">
        medborgarskapsprov online
      </Link>{" "}
      finns en samlad och strukturerad översikt av provets olika delar. Innehållet
      är uppdelat i tydliga teman som speglar de kunskapsområden som omfattas av
      provet, med förklaringar av centrala begrepp och hur olika regelverk
      förhåller sig till varandra. Upplägget är anpassat för att ge en logisk
      genomgång av området från grund till mer detaljerad nivå.
    </p>

    <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-3">
      Medborgarskapsprovet i app
    </h3>

    <p className="text-sm md:text-base text-muted-foreground mb-6">
      För den som vill ta del av samma vägledning i ett mer koncentrerat format
      finns{" "}
      <Link href="/app" className="underline underline-offset-4">
        medborgarskapsprovet i app
      </Link>. Innehållet är organiserat i kortare avsnitt som följer samma
      struktur som på webben, vilket gör det lätt att behålla sammanhanget även
      när informationen används i mindre delar.
    </p>

    <p className="text-sm md:text-base text-muted-foreground">
      Både webb och app är utformade för att fungera som neutrala
      vägvisare genom provets olika delar, med fokus på tydlighet,
      saklighet och långsiktig överskådlighet.
    </p>
  </div>
</section>
<section className="border-x border-b border-border py-10 px-6 lg:px-8 bg-background">
  <div className="max-w-3xl">
    <h2 className="text-2xl md:text-2xl font-semibold tracking-tight mb-3">
      Kontakta oss
    </h2>

    <p className="text-sm md:text-base text-muted-foreground mb-3">
      Har du synpunkter, upptäckt något som behöver rättas eller vill komma i
      kontakt med oss av någon annan anledning är du alltid välkommen att höra
      av dig. Vi tar gärna emot förslag på förbättringar, nya ämnen eller
      kompletterande information som kan göra innehållet ännu tydligare.
    </p>

    <p className="text-sm md:text-base text-muted-foreground mb-3">
      All återkoppling bidrar till att hålla informationen korrekt, aktuell och
      relevant över tid. Oavsett om din fråga gäller innehållet, tekniska
      funktioner eller något annat som rör webbplatsen är din kontakt viktig
      för oss.
    </p>

    <p className="text-sm md:text-base text-muted-foreground">
      På vår separata sida kan du ta del av våra kontaktuppgifter{" "}
      <Link href="/kontakt" className="underline underline-offset-4">
        kontakta oss
      </Link>.
    </p>
  </div>
</section>

        </Suspense>
      </div>
      
    </div>
  );
}
