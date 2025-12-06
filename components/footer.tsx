import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto p-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Medborgarskapsprov.se. All rights reserved.
        </p>

        <div className="flex gap-4 text-sm">
           <Link href="/" className="text-muted-foreground hover:text-foreground">
            Startsida
          </Link>
          <Link href="/om" className="text-muted-foreground hover:text-foreground">
            Om oss
          </Link>
          <Link href="/kontakt" className="text-muted-foreground hover:text-foreground">
            Kontakta oss
          </Link>
                <Link
  href="https://swedishcitizenship.se"
  className="text-muted-foreground hover:text-foreground"
>
  Swedish Citizenship
</Link>
          
        </div>
      </div>
    </footer>
  );
}
