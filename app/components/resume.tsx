// components/resume.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"

const Resume = () => {
  return (
    <section id="resume" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Resume</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Experience</h3>
            <ul className="list-disc pl-5">
              <li>Software Developer at XYZ Company (2023-Present)</li>
              <li>Front-end Developer at ABC Corp. (2021-2023)</li>
              <li>Intern at Some Startup (2020-2021)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Skills</h3>
            <ul className="list-disc pl-5">
              <li>React, Next.js, TypeScript, Tailwind CSS</li>
              <li>Node.js, Express</li>
              <li>Git, GitHub, Docker</li>
              <li>Agile, Scrum</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Education</h3>
            <ul className="list-disc pl-5">
              <li>Bachelor's in Computer Science from Some University (2016-2020)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Certifications</h3>
            <ul className="list-disc pl-5">
              <li>Certified React Developer</li>
              <li>Certified AWS Developer</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Link href="/ItzAurorae-Resume.pdf" download>
              <Button variant="outline">Download Resume</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
