# 🎨 NeuralBackground Component

Componente reutilizável de background shader animado, totalmente otimizado para performance.

## 📦 Instalação

O componente já está criado em: `src/components/neural-background.tsx`

## 🚀 Uso Básico

```tsx
import NeuralBackground from '@/components/neural-background';

export default function MyHeroSection() {
  return (
    <section className="relative min-h-screen">
      {/* Background animado */}
      <NeuralBackground />
      
      {/* Seu conteúdo aqui (sempre com relative ou absolute) */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <h1 className="text-6xl font-bold text-white">
          Meu Título
        </h1>
      </div>
    </section>
  );
}
```

## 🎯 Exemplos de Uso

### Exemplo 1: Hero Section Simples

```tsx
import NeuralBackground from '@/components/neural-background';

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <NeuralBackground />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <h1 className="text-7xl font-bold text-white mb-6">
          Bem-vindo
        </h1>
        <p className="text-xl text-white/80 max-w-2xl text-center">
          Sua descrição aqui
        </p>
        <button className="mt-8 px-8 py-4 bg-white/10 text-white rounded-xl hover:bg-white/20 transition">
          Começar
        </button>
      </div>
    </section>
  );
}
```

### Exemplo 2: Hero com Grid de Conteúdo

```tsx
import NeuralBackground from '@/components/neural-background';

export default function HeroGrid() {
  return (
    <section className="relative min-h-screen">
      <NeuralBackground />
      
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen">
          <div>
            <span className="text-sm text-white/60 uppercase tracking-wider">
              Novo Projeto
            </span>
            <h1 className="text-6xl font-bold text-white mt-4 mb-6">
              Construindo o Futuro
            </h1>
            <p className="text-lg text-white/70 mb-8">
              Tecnologia que transforma experiências em realidade.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition">
                Explorar
              </button>
              <button className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition">
                Saiba Mais
              </button>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            {/* Seu conteúdo aqui */}
            <p className="text-white/80">Card de conteúdo</p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### Exemplo 3: Landing Page Completa

```tsx
import NeuralBackground from '@/components/neural-background';

export default function LandingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen">
        <NeuralBackground />
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-6">
            <h1 className="text-8xl font-extrabold text-white mb-4">
              Seu Produto
            </h1>
            <p className="text-2xl text-white/70 mb-8">
              Tagline impactante aqui
            </p>
            <button className="px-12 py-5 bg-white text-black text-lg font-semibold rounded-2xl hover:scale-105 transition-transform">
              Get Started
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>
      
      {/* Resto do conteúdo */}
      <section className="bg-white py-20">
        {/* Suas outras seções */}
      </section>
    </main>
  );
}
```

### Exemplo 4: Com Overlay Personalizado

```tsx
import NeuralBackground from '@/components/neural-background';

export default function CustomHero() {
  return (
    <section className="relative h-screen">
      <NeuralBackground />
      
      {/* Overlay customizado para escurecer/clarear */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl px-6 text-center">
          <h1 className="text-7xl font-bold text-white mb-6 leading-tight">
            Transforme Suas Ideias em Realidade
          </h1>
          <p className="text-xl text-white/90 mb-10">
            Plataforma completa para desenvolvedores modernos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition">
              Começar Grátis
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition">
              Ver Demo
            </button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-white">10k+</div>
              <div className="text-sm text-white/60 mt-2">Usuários</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">99.9%</div>
              <div className="text-sm text-white/60 mt-2">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/60 mt-2">Suporte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## ⚙️ Como Funciona

O componente automaticamente:

✅ **Detecta dispositivo**: Otimiza performance para mobile/desktop
✅ **Lazy loading**: Carrega só quando visível (IntersectionObserver)
✅ **Fallback inteligente**: Usa gradiente CSS em conexões lentas
✅ **Respeita acessibilidade**: Detecta `prefers-reduced-motion`
✅ **Pausa quando oculto**: 0% CPU quando aba minimizada
✅ **Limita resolução**: Max 1920x1080 mesmo em 4K
✅ **Frame skipping**: 30 FPS em mobile para economizar bateria

## 🎨 Customização

### Adicionar Overlay Escuro

```tsx
<NeuralBackground />
<div className="absolute inset-0 bg-black/50 z-0" />
```

### Adicionar Gradiente no Topo

```tsx
<NeuralBackground />
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent z-0" />
```

### Mudar z-index

```tsx
// Por padrão é -z-10, mas você pode sobrescrever
<div className="absolute inset-0 bg-black z-0">
  <NeuralBackground />
</div>
```

## 📊 Performance

| Métrica | Valor |
|---------|-------|
| **First Load** | 150KB (lazy) |
| **FPS Mobile** | 30 FPS |
| **FPS Desktop** | 60 FPS |
| **CPU Idle** | 0% (quando aba oculta) |

## ⚠️ Importante

1. **Sempre use `relative` no container pai**
   ```tsx
   <section className="relative"> {/* ✅ Correto */}
     <NeuralBackground />
   </section>
   ```

2. **Conteúdo precisa de z-index maior**
   ```tsx
   <div className="relative z-10"> {/* ✅ Correto */}
     Conteúdo aqui
   </div>
   ```

3. **Funciona com qualquer altura**
   ```tsx
   <div className="relative h-screen">     {/* ✅ Tela cheia */}
   <div className="relative min-h-[600px]"> {/* ✅ Altura mínima */}
   <div className="relative h-auto">        {/* ✅ Altura automática */}
   ```

## 🔧 Troubleshooting

**Problema:** Background não aparece
- **Solução:** Certifique-se de que o container pai tem `relative` e altura definida

**Problema:** Conteúdo fica atrás do background
- **Solução:** Adicione `relative z-10` no conteúdo

**Problema:** Performance baixa em mobile
- **Solução:** Já está otimizado! Verifica se há outros scripts pesados rodando

## 📝 Notas

- O componente usa `'use client'` e requer React Three Fiber
- Fallback CSS é mostrado em conexões lentas automaticamente
- Não precisa de configuração adicional, funciona "out of the box"

---

**Pronto para usar! 🎉**

Basta importar e adicionar em qualquer seção que precise de um background incrível!
