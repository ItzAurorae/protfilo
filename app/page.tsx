import Header from "./components/header"
import Hero from "./components/hero"
import Resume from "./components/resume"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import ContactForm from "./components/contact-form"
import { SectionHeading } from "./components/section-heading"
import { Reveal } from "./components/reveal"
import { Github, Mail, Twitter, Youtube } from "lucide-react"
import { FaPatreon } from "react-icons/fa"
import Link from "next/link"

const projects = [
  {
    title: "ItzAurorae Portfolio",
    description: "A personal portfolio built with TypeScript, Next.js, and Tailwind CSS — showcasing projects and skills.",
    image: "/ItzAuroraeBanner.png?height=400&width=600",
    repository: "https://github.com/ItzAurorae/protfilo",
    website: "https://itzauroraeprotfilo.vercel.app/",
    tags: ["Next.js", "Personal", "Open Source"],
  },
  {
    title: "Metadata Remover",
    description: "Remove metadata from all types of files — built with Python and Docker.",
    image: "/code.png?height=400&width=600",
    repository: "https://github.com/ItzAurorae/metadata-remover",
    tags: ["MIT License", "Metadata", "Open Source", "Python"],
  },
  {
    title: "Connect 4",
    description: "Play Connect 4 against an AI opponent or with a friend — built from scratch.",
    image: "/connet4.png?height=400&width=600",
    repository: "https://github.com/ItzAurorae/connect-4",
    website: "https://itzaurorae.github.io/connect-4/",
    tags: ["MIT License", "Open Source", "Games"],
  },
]

const socials = [
  { href: "https://github.com/ItzAurorae", icon: Github, label: "GitHub" },
  { href: "https://www.youtube.com/@ItzAurorae", icon: Youtube, label: "YouTube" },
  { href: "https://patreon.com/ItzAurorae", icon: FaPatreon, label: "Patreon" },
  { href: "https://x.com/ItzAurorae", icon: Twitter, label: "Twitter" },
  { href: "mailto:itzaurorae@zohomail.com", icon: Mail, label: "Email" },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <Hero />

        <Resume />

        <section id="projects" className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <SectionHeading
              eyebrow="Portfolio"
              title="Featured Projects"
              description="A selection of things I've built — from web apps to games and tools."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <Reveal key={project.title} delay={index * 100}>
                  <ProjectCard {...project} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="tech-stack" className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <SectionHeading
              eyebrow="Toolkit"
              title="Tech Stack"
              description="The technologies and tools I use to bring ideas to life."
            />
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <SectionHeading
                eyebrow="Let's Talk"
                title="Get in Touch"
                description="Have a project in mind or just want to say hi? Send me a message."
              />
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="container flex flex-col gap-6 sm:flex-row py-10 w-full shrink-0 items-center justify-between px-4 md:px-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ItzAurorae. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <Link key={social.label} href={social.href} target="_blank" aria-label={social.label}>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors cursor-pointer">
                    <Icon className="h-4 w-4" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </footer>
    </div>
  )
}
