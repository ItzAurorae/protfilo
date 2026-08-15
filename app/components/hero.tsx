"use client"

import { Button } from "@/components/ui/button"
import { Github, Mail, Twitter, ArrowDown, Youtube, Sparkles } from "lucide-react"
import { FaPatreon } from "react-icons/fa"
import Link from "next/link"

const socials = [
  { href: "https://github.com/ItzAurorae", icon: Github, label: "GitHub" },
  { href: "https://www.youtube.com/@ItzAurorae", icon: Youtube, label: "YouTube" },
  { href: "https://patreon.com/ItzAurorae", icon: FaPatreon, label: "Patreon" },
  { href: "https://x.com/ItzAurorae", icon: Twitter, label: "Twitter" },
  { href: "mailto:itzaurorae@zohomail.com", icon: Mail, label: "Email" },
]

export default function Hero() {
  return (
    <section id="about" className="relative flex min-h-[90vh] items-center justify-center overflow-hidden py-20 md:py-32">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="container px-4 md:px-6 text-center">
        <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 backdrop-blur px-4 py-1.5 text-sm font-medium text-muted-foreground animate-fade-in-up">
            <Sparkles className="h-4 w-4 text-accent" />
            Available for new projects
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            Web Application &amp;{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Software Developer
            </span>
          </h1>

          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            Building digital experiences with modern technologies. I create clean,
            functional, and reliable software that people love to use.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <Link href="#projects">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity">
                View Projects
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline">
                Get in Touch
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <Link key={social.label} href={social.href} target="_blank" aria-label={social.label}>
                  <Button variant="outline" size="icon" className="rounded-full hover:border-primary hover:text-primary transition-colors">
                    <Icon className="h-4 w-4" />
                  </Button>
                </Link>
              )
            })}
          </div>
        </div>

        <Link href="#resume" className="inline-flex flex-col items-center gap-2 mt-16 text-muted-foreground hover:text-foreground transition-colors animate-float">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
