import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto p-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Swedish Citizenship: a blog. All rights reserved.
        </p>

        <div className="flex gap-4 text-sm">
           <Link href="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
