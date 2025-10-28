"use client";
import React from "react";
import { ContactCard } from "@/components/ui/contact-card";
import { Mail, Linkedin, Github } from "lucide-react";
import { HoverButton } from "@/components/ui/hover-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
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
          <form className="w-full space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nome</label>
              <Input
                type="text"
                placeholder="Seu nome"
                className="w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                placeholder="seu@email.com"
                className="w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Assunto</label>
              <Input
                type="text"
                placeholder="Sobre o que deseja falar?"
                className="w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mensagem</label>
              <Textarea
                placeholder="Escreva sua mensagem aqui..."
                className="w-full min-h-[120px]"
                required
              />
            </div>
            <HoverButton className="w-full rounded-sm" onClick={(e) => { e.preventDefault(); /* Handle form submission */ }}>
              <span className="w-full">Enviar Mensagem</span>
            </HoverButton>
          </form>
        </ContactCard>
      </div>
    </section>
  );
}
