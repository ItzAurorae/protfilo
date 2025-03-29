// page.tsx
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { FaYoutube, FaPatreon } from "react-icons/fa";
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import Resume from "./components/resume" // Import the Resume component

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">ItzAurorae</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="/ItzAurorae Resume.pdf" className="transition-colors hover:text-foreground/80">
                Resume
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <Button variant="outline" className="ml-auto">
            Resume
          </Button>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Web Application and Software Developer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Building digital experiences with modern technologies.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/ItzAurorae" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.youtube.com/@ItzAurorae" target="_blank">
                  <Button variant="outline" size="icon">
                    <FaYoutube className="h-4 w-4" />
                    <span className="sr-only">YouTube</span>
                  </Button>
                </Link>
                <Link href="https://patreon.com/ItzAurorae" target="_blank"> 
                  <Button variant="outline" size="icon">
                    <FaPatreon className="h-4 w-4" />
                    <span className="sr-only">Patreon</span>
                  </Button>
                </Link>
                <Link href="https://x.com/ItzAurorae" target="_blank">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="mailto:itzaurorae@zohomail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Add the Resume component here */}
        <Resume />  {/* This will display your resume section */}

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="ItzAurorae Portfolio"
                description="ItzAurorae portfolio built with TypeScript"
                image="/ItzAuroraeBanner.png?height=400&width=600"
                link="https://github.com/ItzAurorae/protfilo"
                tags={["Next.js", "Personal", "Open Source"]}
              />
              <ProjectCard
                title="Metadata Extractor"
                description="View a picture file metadata."
                image="/code.png?height=400&width=600"
                link="https://github.com/ItzAurorae/metadata-extractor"
                tags={["MIT License", "Metadata", "Open Source", "Software"]}
              />
              <ProjectCard
                title="Connect 4"
                description="PLay connect 4 with Ai or a friend!"
                image="/connet4.pngheight=400&width=600"
                link="https://github.com/ItzAurorae/connect-4"
                tags={["MIT License", "Open Source", "Games"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">©Copyright 2025 ItzAurorae Portfolio. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
{/*             <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link> */}
          </nav>
        </div>
      </footer>
    </div>
  )
}
