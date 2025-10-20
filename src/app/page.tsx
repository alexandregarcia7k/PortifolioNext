import Image from "next/image";
import { HeroHeader } from "@/components/header";   
import Hero from "@/components/hero-section";
import { About } from "@/components/About";

export default function Home() {
  return (
    <>
      <HeroHeader />
      <Hero />
      <About />
    </>
  );
}
 