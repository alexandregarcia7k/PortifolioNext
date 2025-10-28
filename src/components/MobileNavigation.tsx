'use client';

import { LimelightNav} from "@/components/ui/limelight-nav";
import { Home, User, MonitorSmartphone, BriefcaseBusiness, Pencil } from 'lucide-react';
import { useState, useEffect } from 'react';
import { smoothScrollTo } from '@/lib/smoothScroll';

const customNavItems = [
  { id: 'home', icon: <Home />, label: 'Home', onClick: () => smoothScrollTo('#main-content') },
  { id: 'profile', icon: <User />, label: 'Sobre', onClick: () => smoothScrollTo('#sobre') },
  { id: 'projects', icon: <MonitorSmartphone />, label: 'Projetos', onClick: () => smoothScrollTo('#projetos') },
  { id: 'services', icon: <BriefcaseBusiness />, label: 'Serviços', onClick: () => smoothScrollTo('#servicos') },
  { id: 'cta', icon: <Pencil />, label: 'Call to Action', onClick: () => smoothScrollTo('#call-to-action') },
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

  return (
    <nav role="navigation" aria-label="Navegação principal mobile">
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