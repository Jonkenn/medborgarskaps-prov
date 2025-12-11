import { authors } from "@/lib/authors";

export default function MedarbetarePage() {
  const entries = Object.entries(authors);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-10">
      <section className="space-y-4 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Medborgarskaps-prov.se
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Människorna bakom medborgarskapsprovet
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground">
          Här hittar du personerna som skriver, granskar och bygger upp
          innehållet om Sveriges nya medborgarskapsprov – från språkkrav
          och samhällskunskap till lagändringar och tidslinjer.
        </p>
      </section>

      <section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map(([key, author]) => (
            <div
              key={key}
              className="relative overflow-hidden rounded-xl border bg-background/60 shadow-sm transition"
            >
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

              <div className="flex flex-col items-center px-5 pb-5 pt-8 text-center space-y-3">
                <div className="relative">
                  <div className="absolute inset-0 blur-md opacity-40 transition" />
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="relative z-10 h-20 w-20 rounded-full border bg-background object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <div className="text-base font-semibold tracking-tight">
                    {author.name}
                  </div>
                  <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {author.position}
                  </div>
                </div>

                <p className="text-xs text-muted-foreground line-clamp-3">
                  Bidrar med analys, genomgångar och förklaringar kring
                  medborgarskapsprov, språkkrav och svensk samhällskunskap.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
