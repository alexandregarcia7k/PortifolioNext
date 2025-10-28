"use client"

import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs, SiPrisma } from "react-icons/si";

interface Technology {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  url: string;
  technologies: Technology[];
}

const ProjectCard = ({ image, title, description, url, technologies }: ProjectCardProps) => {
  return (
    <Card className="flex flex-col pt-0 overflow-hidden h-auto min-h-[450px] w-full max-w-sm" role="article">
      <div className="aspect-video w-full relative flex-shrink-0">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="fade-in transition-opacity duration-200 hover:opacity-70 block h-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label={`Ver projeto ${title}`}
        >
          <Image
            src={image}
            alt={`Imagem do projeto ${title}`}
            fill
            className="object-cover object-center"
          />
        </a>
      </div>
      <div className="px-8 py-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold hover:underline md:text-xl mb-4 line-clamp-2">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            aria-label={`Acessar projeto ${title}`}
          >
            {title}
          </a>
        </h3>
        <p className="text-muted-foreground mb-4 text-sm flex-grow">
          {description}
        </p>
        <div className="mt-auto">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground flex items-center hover:underline mb-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            aria-label={`Leia mais sobre o projeto ${title}`}
          >
            Leia mais
            <ArrowRight className="ml-2 size-4" aria-hidden="true" />
          </a>
          <div className="flex flex-wrap gap-2" role="list" aria-label="Tecnologias utilizadas">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-center gap-2 bg-muted px-3 py-2 rounded-md text-sm min-h-[32px]"
                  role="listitem"
                >
                  <IconComponent className="size-4" aria-hidden="true" />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};

const Projects = () => {
  return (
    <section className="w-full py-8 lg:py-16 bg-black relative px-6" aria-labelledby="projects-heading">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            Meus Projetos
          </Badge>
          <h2 id="projects-heading" className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Projetos
          </h2>
          <p className="text-muted-foreground mb-8 md:text-base lg:max-w-2xl lg:text-lg">
            Projetos pessoais e para clientes e parcerias.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 lg:gap-8 justify-center" role="list">
          <ProjectCard
            image="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
            title="Planly - Produtividade e Organização"
            description="Uma plataforma completa de produtividade e organização pessoal. O projeto conta com uma landing page moderna e elegante, sistema de captação de usuários através de formulários otimizados e newsletter integrada. Desenvolvido com foco na experiência do usuário, já possui uma versão demo totalmente funcional para demonstração das funcionalidades principais."
            url="https://planly.space"
            technologies={[
              { name: "Next.js", icon: SiNextdotjs },
              { name: "React", icon: SiReact },
              { name: "TypeScript", icon: SiTypescript },
              { name: "Tailwind", icon: SiTailwindcss }
            ]}
          />
          <ProjectCard
            image="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
            title="Studio Pulse"
            description="Landing page de alta conversão desenvolvida para uma empresa especializada em desenvolvimento de aplicações, sistemas personalizados e soluções tecnológicas sob medida. O projeto foi criado com foco em conversão de leads, apresentando os serviços da empresa de forma clara e profissional, com design moderno e responsivo."
            url="https://studiopulse.com.br"
            technologies={[
              { name: "Next.js", icon: SiNextdotjs },
              { name: "React", icon: SiReact },
              { name: "Tailwind", icon: SiTailwindcss },
              { name: "TypeScript", icon: SiTypescript },
            ]}
          />
          {/* <ProjectCard
            image="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
            title="Modern Design Systems with Tailwind CSS"
            description="Dive into creating scalable design systems using Tailwind CSS and shadcn/ui. Learn how to maintain consistency while building flexible and maintainable component libraries."
            url="https://shadcnblocks.com"
                        technologies={[
              { name: "Next.js", icon: SiNextdotjs },
              { name: "React", icon: SiReact },
              { name: "Tailwind", icon: SiTailwindcss },
              { name: "TypeScript", icon: SiTypescript },
            ]}
          /> */}
        </div>
      </div>
    </section>
  );
};

export { Projects };
