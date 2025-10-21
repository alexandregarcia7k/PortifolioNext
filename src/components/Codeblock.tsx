"use client"

import {
  CodeBlock,
  CodeBlockCode,
  CodeBlockGroup,
} from "@/components/ui/code-block"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import { useState } from "react"

export function CodeBlockComponent() {
  const [copied, setCopied] = useState(false)

  const code = `export const alexandre = {
  name: "Alexandre Garcia",
  age: 22,
  role: "Desenvolvedor Full-Stack",
  experience: "1 ano",
  focus: "Front-End",
  
  contact: {
    email: "alexandregarciassj@outlook.com",
    linkedin: "linkedin.com/in/alexandregarcia7k",
    github: "github.com/alexandregarcia7k"
  },
  
  skills: {
    frontend: ["React", "Next.js", "Vue.js", 
    "TypeScript", "JavaScript", "HTML5", 
    "CSS3", "Tailwind CSS", "Sass"],
    backend: ["Node.js", "Python", "Prisma",
    "PostgreSQL"],
    tools: ["Git", "GitHub", "Docker"]
    },
    goal: [
      "Construir experiências marcantes.",
      "Construir sua presença digital.",
      "Construir interfaces que convertem.",
      "Construir resultados impactantes."
    ]
}`

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full">
      <CodeBlock>
        <CodeBlockGroup className="border-border border-b px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 text-primary rounded px-2 py-1 text-xs font-medium">
              TypeScript
            </div>
            <span className="text-muted-foreground text-sm">
              About.ts
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </CodeBlockGroup>
        <CodeBlockCode code={code} language="typescript" theme="one-dark-pro" />
      </CodeBlock>
    </div>
  )
}

export function Codeblock() {
  return <CodeBlockComponent />
}