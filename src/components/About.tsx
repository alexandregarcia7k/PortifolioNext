import { Badge } from "@/components/ui/badge";
import ScrollFloat from "./ScrollFloat";

function About() {
  return (
    <section className="relative bg-black">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="relative w-full py-8 lg:py-16">
        <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-6">
          <div className="flex flex-col items-center justify-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
            >
              Sobre Mim
            </ScrollFloat>
          </div>
          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="bg-zinc-900/50 rounded-lg w-full aspect-video flex-1"></div>
            <div className="flex gap-6 flex-col flex-1">
              <div>
                <Badge className="bg-violet-500/10 text-violet-400 border-violet-500/20">Desenvolvedor</Badge>
              </div>
              <div className="flex gap-4 flex-col">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-white">
                  Transformando ideias em experiências digitais
                </h2>
                <div className="space-y-4 text-base sm:text-lg leading-relaxed text-white/70">
                  <p>
                    Meu nome é Alexandre, tenho 22 anos e atuo como desenvolvedor <span className="font-semibold text-violet-400">Full Stack</span> com foco em <span className="font-semibold text-violet-400">Front-End</span>. 
                    Trabalho há 1 ano na área de desenvolvimento web, construindo interfaces modernas, performáticas 
                    e bem estruturadas para diferentes tipos de projetos.
                  </p>
                  <p>
                    Tenho experiência no desenvolvimento de aplicações web completas, desde landing pages otimizadas 
                    para conversão até sistemas escaláveis e projetos full stack.  trabalho com <span className="font-semibold text-violet-400">React</span>, 
                    <span className="font-semibold text-violet-400">Next.js</span>, <span className="font-semibold text-violet-400">Vue</span>, <span className="font-semibold text-violet-400">Nuxt</span>, <span className="font-semibold text-violet-400">JavaScript</span>, <span className="font-semibold text-violet-400">TypeScript</span>, <span className="font-semibold text-violet-400">HTML</span> e <span className="font-semibold text-violet-400">CSS</span>. Para <span className="font-semibold text-violet-400">Back-end</span>, utilizo <span className="font-semibold text-violet-400">Node.js</span> e princípios 
                    de arquitetura limpa para garantir organização, segurança e manutenção do código.
                  </p>
                  <p>
                    Sou comprometido com qualidade, boas práticas e evolução contínua, sempre buscando escrever código 
                    limpo, reutilizável e alinhado com as necessidades de negócio. Acredito que tecnologia não é só 
                    código — é solução, experiência e resultado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { About };
