import React from "react";
import Link from "next/link";
import TrueFocus from './TrueFocus';
import Image from "next/image";
import { HeroHeader } from "./header";
import NeuralBackground from "@/components/neural-background";
import { TextEffect } from "./ui/text-effect";
import { GlowCard } from "./spotlight-card";
import { Github, Linkedin, Mail } from "lucide-react";
import { Typewriter } from "./ui/typewriter";
import ShinyText from "./ShinyText";
import FadeContent from "./FadeContent";
import { HoverButton } from "@/components/ui/hover-button";
import LogoLoop from './LogoLoop';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiVuedotjs, 
  SiNuxtdotjs, 
  SiSass, 
  SiGit, 
  SiGithub, 
  SiPostgresql, 
  SiPython, 
  SiDocker, 
  SiPrisma 
} from 'react-icons/si';

const techLogos = [
    { node: <SiReact className="hover:text-[#61DAFB] transition-all duration-150 ease-out" />, title: "React" },
    { node: <SiNextdotjs className="hover:text-white transition-all duration-150 ease-out" />, title: "Next.js" },
    { node: <SiTypescript className="hover:text-[#3178C6] transition-all duration-150 ease-out" />, title: "TypeScript" },
    { node: <SiTailwindcss className="hover:text-[#06B6D4] transition-all duration-150 ease-out" />, title: "Tailwind CSS" },
    { node: <SiJavascript className="hover:text-[#F7DF1E] transition-all duration-150 ease-out" />, title: "JavaScript" },
    { node: <SiHtml5 className="hover:text-[#E34F26] transition-all duration-150 ease-out" />, title: "HTML5" },
    { node: <SiCss3 className="hover:text-[#1572B6] transition-all duration-150 ease-out" />, title: "CSS3" },
    { node: <SiVuedotjs className="hover:text-[#4FC08D] transition-all duration-150 ease-out" />, title: "Vue.js" },
    { node: <SiNuxtdotjs className="hover:text-[#00DC82] transition-all duration-150 ease-out" />, title: "Nuxt.js" },
    { node: <SiSass className="hover:text-[#CC6699] transition-all duration-150 ease-out" />, title: "Sass" },
    { node: <SiGit className="hover:text-[#F05032] transition-all duration-150 ease-out" />, title: "Git" },
    { node: <SiGithub className="hover:text-white transition-all duration-150 ease-out" />, title: "GitHub" },
    { node: <SiPostgresql className="hover:text-[#336791] transition-all duration-150 ease-out" />, title: "PostgreSQL" },
    { node: <SiPython className="hover:text-[#3776AB] transition-all duration-150 ease-out" />, title: "Python" },
    { node: <SiDocker className="hover:text-[#2496ED] transition-all duration-150 ease-out" />, title: "Docker" },
    { node: <SiPrisma className="hover:text-[#2D3748] transition-all duration-150 ease-out" />, title: "Prisma" },
];

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section className="relative min-h-screen">
          <NeuralBackground />
          <div className="pb-24 pt-28 sm:pt-32 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left relative z-10">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="p"
                  className="pl-1 font-light text-white/80 leading-none mb-1 text-[clamp(0.9rem,2.2vw,1.6rem)]"
                >
                  Olá, sou Alexandre
                </TextEffect>
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.4}
                  as="h1"
                  style={{ padding: 0, margin: 0 }}
                  className="font-bold leading-none mb-1 w-full text-[clamp(2.25rem,7vw,5rem)]"
                >
                  DESENVOLVEDOR
                </TextEffect>
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.3}
                  as="h1"
                  style={{ padding: 0, margin: 0 }}
                  className="font-bold leading-none mb-4 lg:mb-6 w-full text-[clamp(2.25rem,7vw,5rem)]"
                >
                  FULL-STACK
                </TextEffect>
                <FadeContent
                  blur={true}
                  duration={2000}
                  easing="ease-out"
                  initialOpacity={0}
                >
                  <p className="mt-2 max-w-2xl text-pretty pl-1">
                    <span className="text-[clamp(0.8rem,2vw,1.25rem)]">
                      Meu trabalho é desenvolver
                    </span>
                  </p>
                  <Typewriter
                    text={[
                      "Experiências marcantes.",
                      "Sua presença digital.",
                      "Interfaces que convertem.",
                      "Resultados impactantes.",
                    ]}
                    speed={60}
                    className="text-white pl-1 font-mono font-light text-[clamp(0.85rem,2.1vw,1.35rem)]"
                    waitTime={1500}
                    deleteSpeed={40}
                    cursorChar="|"
                  />
                </FadeContent>
                <div className="pl-1 mt-12 flex flex-col items-center gap-2 sm:flex-row sm:justify-center lg:justify-start lg:items-start">
                  <FadeContent
                    blur={true}
                    duration={2000}
                    easing="ease-out"
                    initialOpacity={0}
                  >
                    <HoverButton className="px-5 text-base rounded-sm">
                      <Link href="#link">
                        <span className="text-nowrap">Entrar em Contato</span>
                      </Link>
                    </HoverButton>
                  </FadeContent>
                </div>
              </div>

              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
                <GlowCard
                  className="relative z-10 mt-12 mx-auto w-full max-w-[340px] h-auto lg:mt-0 lg:ml-auto lg:mr-0"
                  width={340}
                  height={500}
                  glowColor="blue"
                  fixedHue={280}
                >
                  <div className="relative h-full flex flex-col w-full">
                    {/* Foto de perfil */}
                    <div className="image-rounded-container relative w-full h-[350px] mb-3">
                      <Image
                        src="/fotoportifolio.png"
                        alt="Foto de Alexandre Garcia desenvolvedor front-end"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    {/* Informações */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <h2 className="text-lg sm:text-xl font-bold text-white">
                        <ShinyText
                          text="Alexandre Garcia"
                          disabled={false}
                          speed={2.5}
                          className="custom-class"
                        />
                      </h2>
                      <p className="text-xs sm:text-sm font-light text-white/70">
                        Desenvolvedor Full-Stack
                      </p>
                    </div>
                    <div className="flex gap-3 pt-2 mt-auto">
                      <a
                        href="https://www.linkedin.com/in/alexandregarcia7k"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                      </a>
                      <a
                        href="https://github.com/alexandregarcia7k"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                      </a>
                      <a
                        href="mailto:alexandregarciassj@outlook.com"
                        className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                      </a>
                    </div>
                  </div>
                </GlowCard>
              </FadeContent>
            </div>

            <div className="mx-auto max-w-[70rem] px-4 sm:px-6">
            <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
            >
              <div className="pt-12">
                <TrueFocus
                  sentence="Tech Stack"
                  manualMode={false}
                  blurAmount={3}
                  borderColor="#a855f7"
                  animationDuration={1.7}
                  pauseBetweenAnimations={1}
                />
              </div>
              </FadeContent>
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
              <div className="pt-8">
                <LogoLoop
                  logos={techLogos}
                  speed={70}
                  direction="left"
                  logoHeight={64}
                  gap={40}
                  pauseOnHover={false}
                  scaleOnHover
                  fadeOut = {true}
                  fadeOutColor="black"
                  ariaLabel="Stack de Tecnologias(Tecnologias dominadas)"
                  showBorder
                  borderColor="#a855f7"
                />
              </div>
              </FadeContent>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}