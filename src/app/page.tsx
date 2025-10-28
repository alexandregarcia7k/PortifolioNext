import Hero from "@/components/hero-section";
import { About } from "@/components/About";
import { Projects } from "@/components/Projetcs";
import { Services } from "@/components/Services";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <CallToAction />
    </>
  );
}
 