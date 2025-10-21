"use client"

import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ image, title, description, url }: ProjectCardProps) => {
  return (
    <Card className="grid grid-rows-[auto_auto_1fr_auto] pt-0 overflow-hidden">
      <div className="aspect-16/9 w-full relative">
        <a href={url} target="_blank" className="fade-in transition-opacity duration-200 hover:opacity-70 block h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center"
          />
        </a>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold hover:underline md:text-xl mb-4">
          <a href={url} target="_blank">
            {title}
          </a>
        </h3>
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        <a href={url} target="_blank" className="text-foreground flex items-center hover:underline">
          Read more
          <ArrowRight className="ml-2 size-4" />
        </a>
      </div>
    </Card>
  );
};

const Projects = () => {
  return (
    <section className="w-full py-8 lg:py-16 bg-black relative px-6">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            Latest Updates
          </Badge>
          <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Blog Posts
          </h2>
          <p className="text-muted-foreground mb-8 md:text-base lg:max-w-2xl lg:text-lg">
            Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.
          </p>
          <Button variant="link" className="w-full sm:w-auto" asChild>
            <a href="https://shadcnblocks.com" target="_blank">
              View all articles
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <ProjectCard
            image="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
            title="Getting Started with shadcn/ui Components"
            description="Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces."
            url="https://shadcnblocks.com"
          />
          <ProjectCard
            image="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
            title="Building Accessible Web Applications"
            description="Explore how to create inclusive web experiences using shadcn/ui's accessible components. Discover practical tips for implementing ARIA labels, keyboard navigation, and semantic HTML."
            url="https://shadcnblocks.com"
          />
          <ProjectCard
            image="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
            title="Modern Design Systems with Tailwind CSS"
            description="Dive into creating scalable design systems using Tailwind CSS and shadcn/ui. Learn how to maintain consistency while building flexible and maintainable component libraries."
            url="https://shadcnblocks.com"
          />
        </div>
      </div>
    </section>
  );
};

export { Projects };
