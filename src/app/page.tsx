import Image from "next/image";
import { HeroHeader } from "@/components/header";   
import Hero from "@/components/hero-section";
import MyNewHero from "@/components/example-hero";

export default function Home() {
  return (
    <>
      <HeroHeader />
      <Hero />
    </>
  );
}
 