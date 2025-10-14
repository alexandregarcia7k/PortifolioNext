import NeuralBackground from '@/components/neural-background';
import { Typewriter } from './ui/typewriter';
import { GlowCard } from './spotlight-card';
import { Github, Linkedin, Mail } from 'lucide-react';
import { TextEffect } from './ui/text-effect';
import Image from 'next/image';

/**
 * Exemplo de Hero Section usando o NeuralBackground componentizado
 *
 * Este é um exemplo simples de como usar o background shader
 * que você pode customizar e construir em cima
 */
export default function MyNewHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      <NeuralBackground/>

    </section>
  );
