/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cn } from "@/lib/utils";

interface PromoContentProps {
  variant?: "desktop" | "mobile";
  className?: string;
}

export function PromoContent({
  variant = "desktop",
  className,
}: PromoContentProps) {
  if (variant === "mobile") {
    return (
      <div className={cn("border-t border-border bg-muted/20 p-3", className)}>
        <div className="flex items-center gap-3">
          <img
            src="/swedish-citizenship-facebook.png"
            alt="Medborgarskapsprov.se Facebook Group"
            className="w-8 h-8 rounded object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-foreground/90 truncate">
                         Allt om Sveriges medborgarskapsprov
            </p>
            <p className="text-xs text-muted-foreground truncate">
              Gå med i vår Facebook-grupp för att diskutera med andra om medborgarskapsprovet.
            </p>
          </div>
          <a
            href="https://www.facebook.com/groups/844824431602151/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary hover:text-primary/80 font-medium"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            Gå med nu
          </a>
        </div>
      </div>
    );
  }

  return (
    <a
      href="https://www.facebook.com/groups/844824431602151/"
      target="_blank"
      rel="noopener noreferrer"
      className={cn("block border border-border rounded-lg p-4 bg-card", className)}
    >
      <div className="flex flex-col gap-4">
        <img
          src="/medborgarskapsprov-horizontal-logo.png"
          alt="Medborgarskapsprov.se Facebook Group"
          className="w-full h-40 rounded-md object-cover"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold tracking-tighter">
            Allt om Sveriges medborgarskapsprov
          </h3>
          <p className="text-sm text-muted-foreground">
            Gå med i vår Facebook-grupp för att diskutera med andra om medborgarskapsprovet.
          </p>
        </div>
      </div>
    </a>
  );
}