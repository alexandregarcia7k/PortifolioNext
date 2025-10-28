import Hero from "@/components/hero-section";
import { About } from "@/components/About";
import { Projects } from "@/components/Projetcs";
import { Services } from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <CallToAction />
      <Contact />
      <Footer />
    </>
  );
}
 