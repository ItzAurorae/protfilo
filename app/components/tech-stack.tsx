import { Card } from "@/components/ui/card"
import { Reveal } from "./reveal"

const technologies = [
  { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "CSS", "HTML"] },
  { category: "Backend", skills: ["Node.js", "Express", "Python", "TypeScript"] },
  { category: "DevOps", skills: ["CI/CD", "Git", "Linux"] },
  { category: "Tools", skills: ["VS Code", "GitHub", "GitLab", "Vercel", "Netlify"] },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
      {technologies.map((tech, index) => (
        <Reveal key={tech.category} delay={index * 100}>
          <Card className="group p-6 h-full border-border/60 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {tech.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {tech.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground ring-1 ring-inset ring-border/60 transition-colors group-hover:bg-primary/10 group-hover:text-primary group-hover:ring-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  )
}
