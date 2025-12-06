/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto w-full flex h-14 items-center justify-between px-6">
        {/* Logo / Home */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 font-medium text-lg tracking-tighter h-8 w-8 rounded-md overflow-hidden"
          >
            <img
              src="/medborgarskapsprov-horizontal-logo.png"
              alt="Medborgarskaps-prov.se"
              className="w-10 h-10 object-cover"
            />
          </Link>
        </div>

        {/* Right side: links + theme toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <nav className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium">
            <Link
              href="/online"
              className="transition-colors hover:text-foreground/80 text-foreground/70 whitespace-nowrap"
            >
              Medborgarskapsprov online
            </Link>

            <Link
              href="/app"
              className="transition-colors hover:text-foreground/80 text-foreground/70 whitespace-nowrap"
            >
              Medborgarskapsprov app
            </Link>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
