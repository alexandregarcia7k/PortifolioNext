'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { HoverButton } from "@/components/ui/hover-button"
import React, { useState, useEffect } from 'react'
import { smoothScrollTo } from '@/lib/smoothScroll'

const menuItems = [
    { name: 'Home', href: '#main-content', onClick: () => smoothScrollTo('#main-content') },
    { name: 'Sobre', href: '#sobre', onClick: () => smoothScrollTo('#sobre') },
    { name: 'Projetos', href: '#projetos', onClick: () => smoothScrollTo('#projetos') },
    { name: 'Serviços', href: '#servicos', onClick: () => smoothScrollTo('#servicos') },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = useState(false)
    const [activeSection, setActiveSection] = useState(0)

    useEffect(() => {
        const sections = [
            { id: '#main-content', index: 0 },
            { id: '#sobre', index: 1 },
            { id: '#projetos', index: 2 },
            { id: '#servicos', index: 3 },
        ];

        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.querySelector(sections[i].id);
                if (element) {
                    const offsetTop = (element as HTMLElement).offsetTop;
                    if (scrollPosition >= offsetTop) {
                        setActiveSection(sections[i].index);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return (
        <header role="banner">
            <nav
                data-state={menuState && 'active'}
                className="bg-background/50 fixed z-50 w-full border-b backdrop-blur-3xl"
                role="navigation"
                aria-label="Navegação principal">
                <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-6 transition-all duration-300">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:grid lg:grid-cols-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto lg:justify-start">
                            <a
                                href="#main-content"
                                onClick={(e) => { e.preventDefault(); smoothScrollTo('#main-content'); }}
                                aria-label="Ir para página inicial"
                                className="flex items-center space-x-2 cursor-pointer">
                                <Logo />
                            </a>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
                                aria-expanded={menuState}
                                aria-controls="mobile-menu"
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu aria-hidden="true" className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X aria-hidden="true" className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="hidden lg:flex lg:justify-center">
                            <ul className="flex gap-8 text-sm" role="list">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            onClick={(e) => { e.preventDefault(); item.onClick(); }}
                                            className={`block duration-150 focus:outline-none rounded-sm px-2 py-1 cursor-pointer ${
                                                activeSection === index ? 'text-accent-foreground' : 'text-muted-foreground hover:text-accent-foreground focus:text-accent-foreground'
                                            }`}>
                                            <span>{item.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div 
                            id="mobile-menu"
                            className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent lg:col-start-3 lg:justify-self-end">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base" role="list">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                onClick={(e) => { e.preventDefault(); item.onClick(); setMenuState(false); }}
                                                className={`block duration-150 focus:outline-none rounded-sm px-2 py-1 cursor-pointer ${
                                                    activeSection === index ? 'text-accent-foreground' : 'text-muted-foreground hover:text-accent-foreground focus:text-accent-foreground'
                                                }`}>
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <HoverButton
                                className="rounded-sm"
                                onClick={(e) => { e.preventDefault(); smoothScrollTo('#contato'); setMenuState(false); }}
                                >
                                    <span>Contato</span>
                                </HoverButton>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
