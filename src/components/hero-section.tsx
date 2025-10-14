import React from 'react'
import Link from 'next/link'

import Image from 'next/image'
import { HeroHeader } from './header'
import NeuralBackground from '@/components/neural-background'
import { TextEffect } from './ui/text-effect';
import { GlowCard } from './spotlight-card';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Typewriter } from './ui/typewriter'
import ShinyText from './ShinyText';
import FadeContent from './FadeContent'
import { HoverButton } from "@/components/ui/hover-button"

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section className="relative min-h-screen">
                    <NeuralBackground/>
                    <div className="pb-24 pt-28 sm:pt-32 md:pb-32 lg:pb-56 lg:pt-44">
                        <div className=''>
                            
                            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:flex-row lg:items-center lg:justify-between">
                                <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left relative z-10">
                                    <TextEffect
                                    preset="fade-in-blur"
                                        speedSegment={0.3}
                                        as="p"
                                        className="pl-1 text-base sm:text-lg lg:text-2xl xl:text-3xl font-light text-white/80 leading-none mb-1">
                                        Olá, sou Alexandre
                                    </TextEffect>
                                    <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.4}
                                    as="h1"
                                    style={{ padding: 0, margin: 0 }}
                                    className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-none mb-1 w-full">
                                    DESENVOLVEDOR
                                    </TextEffect>
                                    <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.3}
                                    as="h1"
                                    style={{ padding: 0, margin: 0 }}
                                    className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-none mb-4 lg:mb-6 w-full">
                                    FRONT-END
                                    </TextEffect>
                                    <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
                                        <p className="mt-2 max-w-2xl text-pretty text-lg pl-1"><span className='text-sm sm:text-base lg:text-xl xl:text-2xl'>Meu trabalho é desenvolver</span></p>
                                        <Typewriter
                                        text={[
                                            "experiências marcantes.",
                                            "sua presença digital.",
                                            "interfaces que convertem.",
                                            "resultados impactantes.",
                                        ]}
                                        speed={60}
                                        className="text-white pl-1 font-mono font-light text-sm sm:text-base lg:text-xl xl:text-2xl"
                                        waitTime={1500}
                                        deleteSpeed={40}
                                        cursorChar={"|"}
                                        />
                                    </FadeContent>
                                    <div className="pl-1 mt-12 flex flex-col items-center justify-'center gap-2 sm:flex-row lg:justify-start">
                                        <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
                                            <HoverButton
                                                className="px-5 text-base rounded-sm">
                                                <Link href="#link">
                                                    <span className="text-nowrap">Entrar em Contato</span>
                                                </Link>
                                            </HoverButton>
                                        </FadeContent>
                                    </div>
                                </div>

                                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
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
                                                    className='custom-class'
                                                />
                                                </h2>
                                                <p className="text-xs sm:text-sm font-light text-white/70">
                                                Desenvolvedor Front-End
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
                                        </div>
                                    </div>
                                </section>

                
            </main>
        </>
    )
}
