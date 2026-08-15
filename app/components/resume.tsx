import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Briefcase, Wrench, GraduationCap, Award, Download } from "lucide-react"
import { Reveal } from "./reveal"

const experience = [
  { role: "Discord Bot Developer", period: "2020 — 2025" },
  { role: "HTML Developer", period: "2021 — 2025" },
  { role: "React Developer", period: "2024 — 2025" },
  { role: "Professional Discord Maker", period: "2024 — 2025" },
  { role: "Python Developer", period: "2022 — 2025" },
  { role: "Java Developer", period: "2024 — 2025" },
]

const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Python", "Java", "Node.js", "Express", "Git", "GitHub"]

const education = [
  { title: "W3Schools HTML Course", period: "Self-taught" },
  { title: "freeCodeCamp HTML Course", period: "Self-taught" },
]

export default function Resume() {
  return (
    <section id="resume" className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <Reveal className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Background
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Resume</h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Experience */}
          <Reveal>
            <Card className="p-6 h-full border-border/60">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <ul className="space-y-4">
                {experience.map((item) => (
                  <li key={item.role} className="flex items-center justify-between border-b border-border/40 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm font-medium">{item.role}</span>
                    <span className="text-xs text-muted-foreground">{item.period}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          {/* Skills */}
          <Reveal delay={100}>
            <Card className="p-6 h-full border-border/60">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Wrench className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground ring-1 ring-inset ring-border/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>

          {/* Education */}
          <Reveal>
            <Card className="p-6 h-full border-border/60">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <ul className="space-y-4">
                {education.map((item) => (
                  <li key={item.title} className="flex items-center justify-between border-b border-border/40 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm font-medium">{item.title}</span>
                    <span className="text-xs text-muted-foreground">{item.period}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          {/* Certifications */}
          <Reveal delay={100}>
            <Card className="p-6 h-full border-border/60">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                No formal certifications yet — currently focused on building real-world projects and expanding my skill set.
              </p>
            </Card>
          </Reveal>
        </div>

        <Reveal className="flex justify-center mt-10" delay={200}>
          <Link href="/ItzAurorae Resume.pdf" download>
            <Button variant="default" size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
