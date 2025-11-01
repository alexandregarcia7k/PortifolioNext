"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from 'next/dynamic';
import FadeContent from "@/components/FadeContent";

const SphereHero = dynamic(() => import('@/components/geometric-sphere'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
});
import { HoverButton } from "@/components/ui/hover-button";
import { ArrowRight } from "lucide-react";
import { smoothScrollTo } from "@/lib/smoothScroll";

export default function CallToAction() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id="call-to-action" className="relative" ref={sectionRef}>
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <SphereHero />
      </div>
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {isVisible && (
          <div className="flex flex-col items-center gap-8 max-w-4xl px-6">

            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              delay={0}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="font-bold leading-none w-full text-center text-[clamp(2.25rem,7vw,5rem)]">
                  Seu próximo projeto
                </div>
                <div className="font-bold leading-none w-full text-center text-[clamp(2.25rem,7vw,5rem)]">
                  começa aqui.
                </div>
              </div>
            </FadeContent>
            

            <HoverButton 
              className="px-6 py-3.5 sm:py-4 text-base rounded-sm flex items-center gap-2"
              onClick={() => smoothScrollTo('#contato')}
              aria-label="Entrar em contato para iniciar seu projeto"
            >
              <span>Entrar em Contato</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </HoverButton>
          </div>
        )}
      </div>
    </section>
  );
}