'use client';

import { LimelightNav} from "@/components/ui/limelight-nav";
import { Home, User, MonitorSmartphone, BriefcaseBusiness, Pencil } from 'lucide-react';
import { useState, useEffect } from 'react';
import { smoothScrollTo } from '@/lib/smoothScroll';

const customNavItems = [
  { id: 'home', icon: <Home />, label: 'Home', href: '#main-content', onClick: () => smoothScrollTo('#main-content') },
  { id: 'profile', icon: <User />, label: 'Sobre', href: '#sobre', onClick: () => smoothScrollTo('#sobre') },
  { id: 'projects', icon: <MonitorSmartphone />, label: 'Projetos', href: '#projetos', onClick: () => smoothScrollTo('#projetos') },
  { id: 'services', icon: <BriefcaseBusiness />, label: 'Serviços', href: '#servicos', onClick: () => smoothScrollTo('#servicos') },
  { id: 'cta', icon: <Pencil />, label: 'Call to Action', href: '#call-to-action', onClick: () => smoothScrollTo('#call-to-action') },
];

const Customized = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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

      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const footerCenter = footerRect.top + footerRect.height / 2;
        setIsVisible(footerCenter < 0 || footerCenter > viewportHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      role="navigation" 
      aria-label="Navegação principal mobile"
      className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <LimelightNav 
        className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl" 
        items={customNavItems} 
        defaultActiveIndex={activeIndex} 
      />
    </nav>
  );
};

export { Customized };

const Default = () => {
  return <LimelightNav />;
};

export { Default };