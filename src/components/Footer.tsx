'use client'
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Linkedin, Github, Mail } from "lucide-react"
import { smoothScrollTo } from '@/lib/smoothScroll'
import { showToast } from "@/components/ui/basic-toast"
import { useState } from 'react'

function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
            <form className="flex space-x-2" onSubmit={async (e) => {
              e.preventDefault();
              
              const form = e.currentTarget;
              const formData = new FormData(form);
              const contact = formData.get('contact') as string;
              const website = formData.get('website');

              // Validação de email ou telefone
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
              
              if (!emailRegex.test(contact) && !phoneRegex.test(contact.replace(/\s/g, ''))) {
                showToast({
                  title: 'Formato inv\u00e1lido',
                  description: 'Digite um email ou telefone v\u00e1lido.',
                  type: 'error',
                });
                return;
              }

              setIsSubmitting(true);

              try {
                const response = await fetch('/api/newsletter', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ contact, website }),
                });

                const result = await response.json() as { success: boolean; error?: string; message?: string };

                if (result.success === true) {
                  form.reset();
                  showToast({
                    title: 'Inscrição confirmada!',
                    description: 'Obrigado por se inscrever.',
                    type: 'success',
                  });
                } else {
                  showToast({
                    title: 'Erro na inscrição',
                    description: result.error || 'Tente novamente.',
                    type: 'error',
                  });
                }
              } catch (error) {
                showToast({
                  title: 'Erro de conexão',
                  description: 'Verifique sua conexão e tente novamente.',
                  type: 'error',
                });
              } finally {
                setIsSubmitting(false);
              }
            }}>
              <div className="flex-grow">
                <Label htmlFor="footer-contact" className="sr-only">Email ou Telefone</Label>
                <Input 
                  id="footer-contact" 
                  name="contact"
                  placeholder="Deixe seu email ou telefone para contato" 
                  type="text" 
                  className="rounded-full" 
                  required
                  disabled={isSubmitting}
                />
              </div>
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                aria-hidden="true"
              />
              <Button type="submit" className="rounded-full" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </Button>
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