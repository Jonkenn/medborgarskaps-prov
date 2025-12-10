/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto w-full flex h-14 items-center justify-between px-6">
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

        <div className="hidden sm:flex items-center gap-4">
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link
              href="/online"
              className="transition-colors hover:text-foreground/80 text-foreground/70 whitespace-nowrap"
            >
              Online
            </Link>

            <Link
              href="/app"
              className="transition-colors hover:text-foreground/80 text-foreground/70 whitespace-nowrap"
            >
              App
            </Link>
                 <Link
              href="/samhallskunskap"
              className="transition-colors hover:text-foreground/80 text-foreground/70 whitespace-nowrap"
            >
              Samhällskunskap
            </Link>
                   <Link
              href="/nyheter"
              className="transition-colors hover:text-foreground/80 text-foreground/70 whitespace-nowrap"
            >
              Nyheter
            </Link>
          </nav>

          <ThemeToggle />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden inline-flex items-center justify-center rounded-md border border-border p-2 text-foreground"
          aria-label="Open menu"
        >
          <span className="block h-4 w-4 relative">
            <span className="absolute inset-x-0 top-0 h-0.5 bg-current"></span>
            <span className="absolute inset-x-0 top-1.5 h-0.5 bg-current"></span>
            <span className="absolute inset-x-0 top-3 h-0.5 bg-current"></span>
          </span>
        </button>
      </div>

      {open && (
        <div className="sm:hidden border-t border-border bg-background px-6 py-6">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            <Link
              href="/online"
              onClick={() => setOpen(false)}
              className="transition-colors hover:text-foreground/80 text-foreground/70"
            >
              Online
            </Link>

            <Link
              href="/app"
              onClick={() => setOpen(false)}
              className="transition-colors hover:text-foreground/80 text-foreground/70"
            >
              App
            </Link>
                <Link
              href="/samhallskunskap"
              onClick={() => setOpen(false)}
              className="transition-colors hover:text-foreground/80 text-foreground/70"
            >
              Samhällskunskap
            </Link>
                      <Link
              href="/nyheter"
              onClick={() => setOpen(false)}
              className="transition-colors hover:text-foreground/80 text-foreground/70"
            >
              Nyheter
            </Link>
          </nav>
          

          <div className="mt-6 pt-6 border-t border-border flex justify-start">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
