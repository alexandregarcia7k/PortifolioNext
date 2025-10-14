      {/* Seu conteúdo aqui - sempre com relative e z-10 ou maior */}
           {/* Badge */}
           {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm mb-8">
             <span className="text-xs font-light uppercase tracking-wider text-white/70">
               New
             </span>
             <span className="h-1 w-1 rounded-full bg-white/40" />
             <span className="text-sm font-light text-white/80">
               Projeto 2025
             </span>
           </div> */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-8 lg:py-0 lg:h-screen mx-auto max-w-7xl gap-6 sm:gap-8 lg:gap-12 overflow-y-auto lg:overflow-visible">
            {/* Texto principal */}
            <div className='text-center lg:text-left w-full lg:flex-1 flex flex-col items-center lg:items-start'>
              <p className="text-base sm:text-lg lg:text-2xl xl:text-3xl font-light text-white/80 leading-none mb-1">
                Olá, sou Alexandre
              </p>
              <TextEffect
               preset="fade-in-blur"
               speedSegment={0.3}
               as="h1"
               style={{ padding: 0, margin: 0 }}
               className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-none mb-1 w-full">
                   DESENVOLVEDOR
               </TextEffect>
               <TextEffect
               preset="fade-in-blur"
               speedSegment={0.3}
               delay={0.3}
               as="h1"
               style={{ padding: 0, margin: 0 }}
               className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-none mb-4 lg:mb-6 w-full">
                   FRONT-END
               </TextEffect>
               <div className="flex flex-wrap items-baseline justify-center lg:justify-start gap-x-2 w-full">
                <span className='text-sm sm:text-base lg:text-xl xl:text-2xl'>Meu trabalho é desenvolver</span>
                <Typewriter
                  text={[
                    "experiencias marcantes",
                    "sua presença digital",
                    "interfaces que convertem",
                    "resultados impactantes",
                  ]}
                  speed={60}
                  className="text-white font-mono font-light text-sm sm:text-base lg:text-xl xl:text-2xl"
                  waitTime={1500}
                  deleteSpeed={40}
                  cursorChar={"|"}
                />
               </div>
            </div>

            {/* Card de perfil */}
            <div className='w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none lg:w-auto flex justify-center lg:justify-end flex-shrink-0'>
              <GlowCard
                width={340} 
                height={480}
              >
                <div className="relative h-full flex flex-col w-full">
                  {/* Foto de perfil */}
                  <div className="image-rounded-container relative w-full h-[300px] mb-3">
                    <Image 
                      src="/fotoportifolio.png" 
                      alt="Alexandre Garcia" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  {/* Informações */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <h2 className="text-lg sm:text-xl font-bold text-white">
                      Alexandre Garcia
                    </h2>
                    <p className="text-xs sm:text-sm font-light text-white/70">
                      Desenvolvedor Front-End
                    </p>
                  </div>
                  <div className="flex gap-3 pt-2 mt-auto">
                    <a 
                      href="https://www.linkedin.com/in/alexandregarcia7k" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                    <a 
                      href="https://github.com/alexandregarcia7k" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                    <a 
                      href="mailto:alexandregarciassj@outlook.com"
                      className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  </div>
                </div>
              </GlowCard>
            </div>

                 {/* Scroll Indicator */}
                 <div className="absolute bottom-8 sm:bottom-10 left-1/2 z-10 -translate-x-1/2 hidden sm:flex">
           <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-white/30 p-2">
             <div className="h-2 w-1 animate-bounce rounded-full bg-white/50" />
           </div>
                 </div>        
       </div>
       
       {/* Gradient Overlay Bottom - Full width para cobrir toda a tela */}
       <div className="absolute bottom-0 left-0 right-0 w-full h-48 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none z-20" />
    </section>
  );
}
