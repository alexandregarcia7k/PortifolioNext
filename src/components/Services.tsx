"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Services = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);
  return (
    <section className="w-full py-4 lg:py-8 bg-black relative px-6">
      <div className="container mx-auto flex flex-col gap-16 lg:px-16">
        <div className="flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              Services
            </h2>
            <a
              href="https://www.shadcnblocks.com"
              className="group flex items-center gap-1 text-sm font-medium md:text-base lg:text-lg"
            >
              Book a demo
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-8 md:mt-0 flex shrink-0 items-center justify-start gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
        <Carousel
          setApi={setCarouselApi}
          opts={{
            watchDrag: true,
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="-ml-4">
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
              <a href="#" className="group flex flex-col h-[500px]">
                <div className="aspect-3/2 flex overflow-clip rounded-xl mb-4">
                  <div className="flex-1">
                    <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                      <Image
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                        alt="Build Modern UIs"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg font-medium md:text-xl lg:text-2xl mb-2 h-[60px] flex items-start">
                    Landing Pages
                  </h3>
                  <div className="text-muted-foreground text-sm md:text-base flex-grow mb-1 overflow-hidden">
                    Desenvolvimento de LandingPages de alta performance, otimizadas para conversão e engajamento, utilizando as melhores práticas de design e experiencia do usuario.
                  </div>
                  <div className="flex items-center text-sm mt-auto">
                    Saiba mais <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </CarouselItem>

            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
              <a href="#" className="group flex flex-col h-[500px]">
                <div className="aspect-3/2 flex overflow-clip rounded-xl mb-4">
                  <div className="flex-1">
                    <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                      <Image
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                        alt="Computer Vision Technology"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg font-medium md:text-xl lg:text-2xl mb-2 h-[60px] flex items-start">
                    Plataformas de E-commerce
                  </h3>
                  <div className="text-muted-foreground text-sm md:text-base flex-grow mb-1 overflow-hidden">
                    Plataformas de E-commerce personalizadas, escaláveis e seguras, projetadas para oferecer uma experiência de compra excepcional e impulsionar o crescimento dos negócios online.
                  </div>
                  <div className="flex items-center text-sm mt-auto">
                    Saiba mais <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </CarouselItem>

            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
              <a href="#" className="group flex flex-col h-[500px]">
                <div className="aspect-3/2 flex overflow-clip rounded-xl mb-4">
                  <div className="flex-1">
                    <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                      <Image
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                        alt="Machine Learning Automation"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg font-medium md:text-xl lg:text-2xl mb-2 h-[60px] flex items-start">
                    Dashboard Analytics
                  </h3>
                  <div className="text-muted-foreground text-sm md:text-base flex-grow mb-1 overflow-hidden">
                    Soluções de Dashboard Analytics que fornecem insights acionáveis por meio de visualizações de dados interativas, ajudando as empresas a monitorar o desempenho e tomar decisões informadas.
                  </div>
                  <div className="flex items-center text-sm mt-auto">
                    Saiba mais <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </CarouselItem>

            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
              <a href="#" className="group flex flex-col h-[500px]">
                <div className="aspect-3/2 flex overflow-clip rounded-xl mb-4">
                  <div className="flex-1">
                    <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                      <Image
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                        alt="Predictive Analytics"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg font-medium md:text-xl lg:text-2xl mb-2 h-[60px] flex items-start">
                    Blogs
                  </h3>
                  <div className="text-muted-foreground text-sm md:text-base flex-grow mb-1 overflow-hidden">
                    Criação de Blogs personalizados e otimizados para SEO, projetados para engajar leitores e aumentar a visibilidade online por meio de conteúdo relevante e atraente.
                  </div>
                  <div className="flex items-center text-sm mt-auto">
                    Saiba mais <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </CarouselItem>

            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
              <a href="#" className="group flex flex-col h-[500px]">
                <div className="aspect-3/2 flex overflow-clip rounded-xl mb-4">
                  <div className="flex-1">
                    <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                      <Image
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                        alt="Neural Network Architecture"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg font-medium md:text-xl lg:text-2xl mb-2 h-[60px] flex items-start">
                    App's, Sistemas e Softwares
                  </h3>
                  <div className="text-muted-foreground text-sm md:text-base flex-grow mb-1 overflow-hidden">
                    Desenvolvimento de App's, Sistemas e Softwares personalizados, otimizados para performance e escalabilidade, projetados para atender às necessidades específicas de cada cliente, tem alguma ideia em mente? vamos conversar!
                  </div>
                  <div className="flex items-center text-sm mt-auto">
                    Saiba mais <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Services };