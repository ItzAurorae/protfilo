"use client"

import { cn } from "@/lib/utils"
import { Reveal } from "./reveal"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("text-center mb-12", className)}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  )
}
