'use client';

import { LimelightNav} from "@/components/ui/limelight-nav";
import { Home, User, MonitorSmartphone, BriefcaseBusiness, Pencil } from 'lucide-react';
import { useState, useEffect } from 'react';

const scrollToSection = (id: string) => {
  const element = document.querySelector(id);
  if (!element) return;
  
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1200;
  let start: number | null = null;
  
  const easeInOutCubic = (t: number) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };
  
  const animation = (currentTime: number) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);
    
    window.scrollTo(0, startPosition + distance * ease);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };
  
  requestAnimationFrame(animation);
};

const customNavItems = [
  { id: 'home', icon: <Home />, label: 'Home', onClick: () => scrollToSection('#main-content') },
  { id: 'profile', icon: <User />, label: 'Sobre', onClick: () => scrollToSection('#sobre') },
  { id: 'projects', icon: <MonitorSmartphone />, label: 'Projetos', onClick: () => scrollToSection('#projetos') },
  { id: 'services', icon: <BriefcaseBusiness />, label: 'Serviços', onClick: () => scrollToSection('#servicos') },
  { id: 'cta', icon: <Pencil />, label: 'Call to Action', onClick: () => scrollToSection('#call-to-action') },
];

const Customized = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = [
      { id: '#main-content', index: 0 },
      { id: '#sobre', index: 1 },
      { id: '#projetos', index: 2 },
      { id: '#servicos', index: 3 },
      { id: '#call-to-action', index: 4 },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.querySelector(sections[i].id);
        if (element) {
          const offsetTop = (element as HTMLElement).offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveIndex(sections[i].index);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <LimelightNav className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl" items={customNavItems} defaultActiveIndex={activeIndex} />;
};

export { Customized };

const Default = () => {
  return <LimelightNav />;
};

export { Default };