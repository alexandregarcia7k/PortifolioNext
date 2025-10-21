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
    <section className="w-full py-8 lg:py-16 bg-black relative px-6">
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
              <a href="#" className="group flex flex-col justify-between">
                <div>
                  <div className="aspect-3/2 flex overflow-clip rounded-xl">
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
                </div>
                <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                  Build Modern UIs
                </div>
                <div className="text-muted-foreground mb-8 line-clamp-2 text-sm md:mb-12 md:text-base lg:mb-9">
                  Create stunning user interfaces with our comprehensive design system.
                </div>
                <div className="flex items-center text-sm">
                  Read more <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </CarouselItem>

            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
              <a href="#" className="group flex flex-col justify-between">
                <div>
                  <div className="aspect-3/2 flex overflow-clip rounded-xl">
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
                </div>
                <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                  Computer Vision Technology
                </div>
                <div className="text-muted-foreground mb-8 line-clamp-2 text-sm md:mb-12 md:text-base lg:mb-9">
                  Powerful image recognition and processing capabilities that allow AI systems to analyze, understand, and interpret visual information from the world.
                </div>
                <div className="flex items-center text-sm">
                  Read more <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </CarouselItem>

            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
              <a href="#" className="group flex flex-col justify-between">
                <div>
                  <div className="aspect-3/2 flex overflow-clip rounded-xl">
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
                </div>
                <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                  Machine Learning Automation
                </div>
                <div className="text-muted-foreground mb-8 line-clamp-2 text-sm md:mb-12 md:text-base lg:mb-9">
                  Self-improving algorithms that learn from data patterns to automate complex tasks and make intelligent decisions with minimal human intervention.
                </div>
                <div className="flex items-center text-sm">
                  Read more <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </CarouselItem>

            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
              <a href="#" className="group flex flex-col justify-between">
                <div>
                  <div className="aspect-3/2 flex overflow-clip rounded-xl">
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
                </div>
                <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                  Predictive Analytics
                </div>
                <div className="text-muted-foreground mb-8 line-clamp-2 text-sm md:mb-12 md:text-base lg:mb-9">
                  Advanced forecasting capabilities that analyze historical data to predict future trends and outcomes, helping businesses make data-driven decisions.
                </div>
                <div className="flex items-center text-sm">
                  Read more <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </CarouselItem>

            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
              <a href="#" className="group flex flex-col justify-between">
                <div>
                  <div className="aspect-3/2 flex overflow-clip rounded-xl">
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
                </div>
                <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                  Neural Network Architecture
                </div>
                <div className="text-muted-foreground mb-8 line-clamp-2 text-sm md:mb-12 md:text-base lg:mb-9">
                  Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.
                </div>
                <div className="flex items-center text-sm">
                  Read more <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
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
