"use client"

import {
  CodeBlock,
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
        <div className="w-full overflow-x-auto text-[13px] bg-[#282c34]">
          <pre className="px-4 py-4 m-0">
            <code className="font-mono leading-relaxed">
              <span className="text-[#c678dd]">export</span>
              <span className="text-[#c678dd]"> const</span>
              <span className="text-[#e06c75]"> alexandre</span>
              <span className="text-[#abb2bf]"> = {'{'}</span>
              {"\n  "}<span className="text-[#e06c75]">name</span><span className="text-[#abb2bf]">: </span><span className="text-[#98c379]">&quot;Alexandre Garcia&quot;</span><span className="text-[#abb2bf]">,</span>
              {"\n  "}<span className="text-[#e06c75]">age</span><span className="text-[#abb2bf]">: </span><span className="text-[#d19a66]">22</span><span className="text-[#abb2bf]">,</span>
              {"\n  "}<span className="text-[#e06c75]">role</span><span className="text-[#abb2bf]">: </span><span className="text-[#98c379]">&quot;Desenvolvedor Full-Stack&quot;</span><span className="text-[#abb2bf]">,</span>
              {"\n  "}<span className="text-[#e06c75]">experience</span><span className="text-[#abb2bf]">: </span><span className="text-[#98c379]">&quot;1 ano&quot;</span><span className="text-[#abb2bf]">,</span>
              {"\n  "}<span className="text-[#e06c75]">focus</span><span className="text-[#abb2bf]">: </span><span className="text-[#98c379]">&quot;Front-End&quot;</span><span className="text-[#abb2bf]">,</span>
              {"\n  \n  "}<span className="text-[#e06c75]">contact</span><span className="text-[#abb2bf]">: {'{'}</span>
              {"\n    "}<span className="text-[#e06c75]">email</span><span className="text-[#abb2bf]">: </span><span className="text-[#98c379]">&quot;alexandregarciassj@outlook.com&quot;</span><span className="text-[#abb2bf]">,</span>
              {"\n    "}<span className="text-[#e06c75]">linkedin</span><span className="text-[#abb2bf]">: </span><span className="text-[#98c379]">&quot;linkedin.com/in/alexandregarcia7k&quot;</span><span className="text-[#abb2bf]">,</span>
              {"\n    "}<span className="text-[#e06c75]">github</span><span className="text-[#abb2bf]">: </span><span className="text-[#98c379]">&quot;github.com/alexandregarcia7k&quot;</span>
              {"\n  "}<span className="text-[#abb2bf]">{'}'}</span><span className="text-[#abb2bf]">,</span>
              {"\n  \n  "}<span className="text-[#e06c75]">skills</span><span className="text-[#abb2bf]">: {'{'}</span>
              {"\n    "}<span className="text-[#e06c75]">frontend</span><span className="text-[#abb2bf]">: [</span><span className="text-[#98c379]">&quot;React&quot;</span><span className="text-[#abb2bf]">, </span><span className="text-[#98c379]">&quot;Next.js&quot;</span><span className="text-[#abb2bf]">, </span><span className="text-[#98c379]">&quot;Vue.js&quot;</span><span className="text-[#abb2bf]">,</span>
              {"\n    "}<span className="text-[#98c379]">&quot;TypeScript&quot;</span><span className="text-[#abb2bf]">, </span><span className="text-[#98c379]">&quot;JavaScript&quot;</span><span className="text-[#abb2bf]">, </span><span className="text-[#98c379]">&quot;HTML5&quot;</span><span className="text-[#abb2bf]">,</span>
              {"\n    "}<span className="text-[#98c379]">&quot;CSS3&quot;</span><span className="text-[#abb2bf]">, </span><span className="text-[#98c379]">&quot;Tailwind CSS&quot;</span><span className="text-[#abb2bf]">, </span><span className="text-[#98c379]">&quot;Sass&quot;</span><span className="text-[#abb2bf]">],</span>
              {"\n    "}<span className="text-[#e06c75]">backend</span><span className="text-[#abb2bf]">: [</span><span className="text-[#98c379]">&quot;Node.js&quot;</span><span className="text-[#abb2bf]">, </span><span className="text-[#98c379]">&quot;Python&quot;</span><span className="text-[#abb2bf]">, </span><span className="text-[#98c379]">&quot;Prisma&quot;</span><span className="text-[#abb2bf]">,</span>
              {"\n    "}<span className="text-[#98c379]">&quot;PostgreSQL&quot;</span><span className="text-[#abb2bf]">],</span>
              {"\n    "}<span className="text-[#e06c75]">tools</span><span className="text-[#abb2bf]">: [</span><span className="text-[#98c379]">&quot;Git&quot;</span><span className="text-[#abb2bf]">, </span><span className="text-[#98c379]">&quot;GitHub&quot;</span><span className="text-[#abb2bf]">, </span><span className="text-[#98c379]">&quot;Docker&quot;</span><span className="text-[#abb2bf]">]</span>
              {"\n  "}<span className="text-[#abb2bf]">{'}'}</span><span className="text-[#abb2bf]">,</span>
              {"\n  "}<span className="text-[#e06c75]">goal</span><span className="text-[#abb2bf]">: [</span>
              {"\n    "}<span className="text-[#98c379]">&quot;Construir experiências marcantes.&quot;</span><span className="text-[#abb2bf]">,</span>
              {"\n    "}<span className="text-[#98c379]">&quot;Construir sua presença digital.&quot;</span><span className="text-[#abb2bf]">,</span>
              {"\n    "}<span className="text-[#98c379]">&quot;Construir interfaces que convertem.&quot;</span><span className="text-[#abb2bf]">,</span>
              {"\n    "}<span className="text-[#98c379]">&quot;Construir resultados impactantes.&quot;</span>
              {"\n  "}<span className="text-[#abb2bf]">]</span>
              {"\n"}<span className="text-[#abb2bf]">{'}'}</span>
            </code>
          </pre>
        </div>
      </CodeBlock>
    </div>
  )
}

export function Codeblock() {
  return <CodeBlockComponent />
}