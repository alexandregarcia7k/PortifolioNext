'use client'
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Linkedin, Github, Mail } from "lucide-react"
import { smoothScrollTo } from '@/lib/smoothScroll'

function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <Logo />
          </div>
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            <a href="#main-content" onClick={(e) => { e.preventDefault(); smoothScrollTo('#main-content'); }} className="hover:text-primary cursor-pointer">Home</a>
            <a href="#sobre" onClick={(e) => { e.preventDefault(); smoothScrollTo('#sobre'); }} className="hover:text-primary cursor-pointer">Sobre</a>
            <a href="#projetos" onClick={(e) => { e.preventDefault(); smoothScrollTo('#projetos'); }} className="hover:text-primary cursor-pointer">Projetos</a>
            <a href="#servicos" onClick={(e) => { e.preventDefault(); smoothScrollTo('#servicos'); }} className="hover:text-primary cursor-pointer">Serviços</a>
            <a href="#contato" onClick={(e) => { e.preventDefault(); smoothScrollTo('#contato'); }} className="hover:text-primary cursor-pointer">Contato</a>
          </nav>
          <div className="mb-8 flex space-x-4">
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a href="mailto:alexandregarciassj@outlook.com" target="_blank" rel="noopener noreferrer">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a href="https://linkedin.com/in/alexandregarcia7k" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a href="https://github.com/alexandregarcia7k" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          </div>
          <div className="mb-8 w-full max-w-md">
            <form className="flex space-x-2">
              <div className="flex-grow">
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input id="email" placeholder="Seu e-mail de contato" type="email" className="rounded-full" />
              </div>
              <Button type="submit" className="rounded-full bg-violet-900 text-white">Enviar</Button>
            </form>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Alexandre Garcia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }