"use client";
import React, { useState } from "react";
import { ContactCard } from "@/components/ui/contact-card";
import { Mail, Linkedin, Github } from "lucide-react";
import { HoverButton } from "@/components/ui/hover-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { showToast } from "@/components/ui/basic-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alexandregarciassj@outlook.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "alexandregarcia7k",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "alexandregarcia7k",
    },
  ];

  return (
    <section id="contato" className="w-full py-16 lg:py-24 px-6 bg-black">
      <div className="container mx-auto max-w-7xl">
        <ContactCard
          title="Entre em Contato"
          description="Tem alguma dúvida ou quer discutir um projeto? Preencha o formulário e entrarei em contato o mais breve possível."
          contactInfo={contactInfo}
          className="rounded-lg"
          formSectionClassName="bg-zinc-950"
        >
          <form className="w-full space-y-4" onSubmit={async (e) => {
            e.preventDefault();
            
            const form = e.currentTarget;
            const formData = new FormData(form);
            const phone = formData.get('phone') as string;
            
            // Validação de telefone
            const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
            if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
              showToast({
                title: 'Telefone inv\u00e1lido',
                description: 'Digite um telefone v\u00e1lido.',
                type: 'error',
              });
              setIsSubmitting(false);
              return;
            }

            const data = {
              name: formData.get('name'),
              email: formData.get('email'),
              phone: formData.get('phone'),
              subject: formData.get('subject'),
              message: formData.get('message'),
              website: formData.get('website'),
            };

            setIsSubmitting(true);
            setSubmitStatus('idle');

            try {
              const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
              });

              const result = await response.json() as { success: boolean; error?: string; data?: { id: string } };

              if (result.success === true) {
                setSubmitStatus('success');
                form.reset();
                showToast({
                  title: 'Mensagem enviada!',
                  description: 'Obrigado pelo contato. Responderei em breve.',
                  type: 'success',
                });
              } else {
                setSubmitStatus('error');
                showToast({
                  title: 'Erro ao enviar',
                  description: result.error || 'Não foi possível enviar sua mensagem.',
                  type: 'error',
                });
              }
            } catch (error) {
              setSubmitStatus('error');
              showToast({
                title: 'Erro de conexão',
                description: 'Verifique sua conexão com a internet e tente novamente.',
                type: 'error',
              });
            } finally {
              setIsSubmitting(false);
            }
          }}>
            <div>
              <label className="block text-sm font-medium mb-2">Nome</label>
              <Input
                type="text"
                name="name"
                placeholder="Seu nome"
                className="w-full"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                name="email"
                placeholder="seu@email.com"
                className="w-full"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Telefone</label>
              <Input
                type="text"
                name="phone"
                placeholder="(99) 99999-9999"
                className="w-full"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Assunto</label>
              <Input
                type="text"
                name="subject"
                placeholder="Sobre o que deseja falar?"
                className="w-full"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mensagem</label>
              <Textarea
                name="message"
                placeholder="Escreva sua mensagem aqui..."
                className="w-full min-h-[120px]"
                required
                disabled={isSubmitting}
              />
            </div>
            {/* Honeypot: campo invisível para bots */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
              aria-hidden="true"
            />

            <HoverButton type="submit" className="w-full rounded-sm" disabled={isSubmitting}>
              <span className="w-full">{isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}</span>
            </HoverButton>
          </form>
        </ContactCard>
      </div>
    </section>
  );
}
