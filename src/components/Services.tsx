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
    <section id="servicos" className="w-full py-4 lg:py-8 bg-black relative px-6" aria-labelledby="services-heading">
      <div className="container mx-auto flex flex-col gap-16 lg:px-16">
        <header className="flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <h2 id="services-heading" className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              Serviços
            </h2>
            <a
              href="#contato"
              className="group flex items-center gap-1 text-sm font-medium md:text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-primary rounded"
              aria-label="Agendar uma demonstração dos serviços"
            >
              Agendar demonstração
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
          <nav className="mt-8 md:mt-0 flex shrink-0 items-center justify-start gap-2" aria-label="Navegação do carrossel de serviços">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="min-w-11 min-h-11"
              aria-label="Ver serviço anterior"
            >
              <ArrowLeft className="size-6" aria-hidden="true" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="min-w-11 min-h-11"
              aria-label="Ver próximo serviço"
            >
              <ArrowRight className="size-6" aria-hidden="true" />
            </Button>
          </nav>
        </header>
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
          aria-label="Carrossel de serviços oferecidos"
        >
          <CarouselContent className="-ml-4" role="list">
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3" role="listitem">
              <article>
                <a href="#contato" className="group flex flex-col h-[530px] focus:outline-none focus:ring-2 focus:ring-primary rounded-xl" aria-label="Saiba mais sobre Landing Pages">
                  <div className="aspect-3/2 flex overflow-clip rounded-xl mb-4">
                    <div className="flex-1">
                      <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                        <Image
                          src="/landingpage.webp"
                          alt="Exemplo de Landing Page moderna e responsiva"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-lg font-medium md:text-xl lg:text-2xl mb-2 h-[60px] flex items-start">
                      Landing Pages
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base flex-grow mb-1 overflow-hidden">
                      Desenvolvimento de Landing Pages de alta performance, otimizadas para conversão e engajamento, utilizando as melhores práticas de design e experiência do usuário.
                    </p>
                    <span className="flex items-center text-sm mt-auto">
                      Saiba mais <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </a>
              </article>
            </CarouselItem>

            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3" role="listitem">
              <article>
                <a href="#contato" className="group flex flex-col h-[530px] focus:outline-none focus:ring-2 focus:ring-primary rounded-xl" aria-label="Saiba mais sobre Plataformas de E-commerce">
                  <div className="aspect-3/2 flex overflow-clip rounded-xl mb-4">
                    <div className="flex-1">
                      <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                        <Image
                          src="/ecommerce.webp"
                          alt="Exemplo de plataforma de e-commerce moderna"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-lg font-medium md:text-xl lg:text-2xl mb-2 h-[60px] flex items-start">
                      Plataformas de E-commerce
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base flex-grow mb-1 overflow-hidden">
                      Plataformas de E-commerce personalizadas, escaláveis e seguras, projetadas para oferecer uma experiência de compra excepcional e impulsionar o crescimento dos negócios online.
                    </p>
                    <span className="flex items-center text-sm mt-auto">
                      Saiba mais <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </a>
              </article>
            </CarouselItem>

            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3" role="listitem">
              <article>
                <a href="#contato" className="group flex flex-col h-[530px] focus:outline-none focus:ring-2 focus:ring-primary rounded-xl" aria-label="Saiba mais sobre Dashboard Analytics">
                  <div className="aspect-3/2 flex overflow-clip rounded-xl mb-4">
                    <div className="flex-1">
                      <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                        <Image
                          src="/dashboard.webp"
                          alt="Exemplo de dashboard analytics com gráficos e métricas"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-lg font-medium md:text-xl lg:text-2xl mb-2 h-[60px] flex items-start">
                      Dashboard Analytics
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base flex-grow mb-1 overflow-hidden">
                      Soluções de Dashboard Analytics que fornecem insights acionáveis por meio de visualizações de dados interativas, ajudando as empresas a monitorar o desempenho e tomar decisões informadas.
                    </p>
                    <span className="flex items-center text-sm mt-auto">
                      Saiba mais <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </a>
              </article>
            </CarouselItem>

            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3" role="listitem">
              <article>
                <a href="#contato" className="group flex flex-col h-[530px] focus:outline-none focus:ring-2 focus:ring-primary rounded-xl" aria-label="Saiba mais sobre Blogs">
                  <div className="aspect-3/2 flex overflow-clip rounded-xl mb-4">
                    <div className="flex-1">
                      <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                        <Image
                          src="/blog.webp"
                          alt="Exemplo de blog moderno e otimizado"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-lg font-medium md:text-xl lg:text-2xl mb-2 h-[60px] flex items-start">
                      Blogs
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base flex-grow mb-1 overflow-hidden">
                      Criação de Blogs personalizados e otimizados para SEO, projetados para engajar leitores e aumentar a visibilidade online por meio de conteúdo relevante e atraente.
                    </p>
                    <span className="flex items-center text-sm mt-auto">
                      Saiba mais <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </a>
              </article>
            </CarouselItem>

            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3" role="listitem">
              <article>
                <a href="#contato" className="group flex flex-col h-[530px] focus:outline-none focus:ring-2 focus:ring-primary rounded-xl" aria-label="Saiba mais sobre Aplicativos, Sistemas e Softwares">
                  <div className="aspect-3/2 flex overflow-clip rounded-xl mb-4">
                    <div className="flex-1">
                      <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                        <Image
                          src="/app.webp"
                          alt="Exemplo de aplicativo e sistema personalizado"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-lg font-medium md:text-xl lg:text-2xl mb-2 h-[60px] flex items-start">
                      Apps, Sistemas e Softwares
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base flex-grow mb-1 overflow-hidden">
                      Desenvolvimento de Aplicativos, Sistemas e Softwares personalizados, otimizados para performance e escalabilidade, projetados para atender às necessidades específicas de cada cliente. Tem alguma ideia em mente? Vamos conversar!
                    </p>
                    <span className="flex items-center text-sm mt-auto">
                      Saiba mais <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </a>
              </article>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Services };