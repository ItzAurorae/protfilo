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
              <li>Discord Bot Developer (2020-2025)</li>
              <li>HyperText Markup Language (HTML) Developer (2021-2025)</li>
              <li>React Developer (2024-2025)</li>
              <li>Professional Discord Maker (2024-2025)</li>
              <li>Python (2022-2025)</li>
              <li>Java (2024-2025)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Skills</h3>
            <ul className="list-disc pl-5">
              <li>React, Next.js, TypeScript, Tailwind CSS, Python, Java</li>
              <li>Node.js, Express</li>
              <li>Git, GitHub</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Education</h3>
            <ul className="list-disc pl-5">
              <li>W3Schools HTML Course</li>
              <li>freeCodeCamp HTML Course</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Certifications</h3>
            <ul className="list-disc pl-5">
              <li>None</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Link href="/ItzAurorae Resume.pdf" download>
              <Button variant="outline">Download Resume</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
