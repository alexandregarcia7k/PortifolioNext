# Copilot Instructions - Portfolio Next.js

## 🏗️ Project Architecture

This is a **Next.js 15.5.4 portfolio** using **App Router**, **Turbopack**, and **TypeScript**. The project emphasizes **performance-optimized 3D graphics** with React Three Fiber.

### Tech Stack
- **Framework**: Next.js 15.5.4 with Turbopack (`--turbopack` flag required for dev/build)
- **Styling**: Tailwind CSS v4 with custom CSS variables (`@theme inline` in globals.css)
- **UI Library**: shadcn-ui components (Zinc theme) installed via `npx shadcn@latest add`
- **3D/Graphics**: React Three Fiber (`@react-three/fiber`) + drei for WebGL shaders
- **Animation**: GSAP with SplitText plugin for text animations
- **Fonts**: Geist Sans/Mono via `next/font/google`
- **Package Manager**: npm (not pnpm)
- **Default Mode**: Dark mode enforced in root layout (`className="dark"`)

### Directory Structure
```
src/
  app/              # Next.js App Router pages
    layout.tsx      # Root layout with dark mode + Geist font
    page.tsx        # Homepage using hero components
    globals.css     # Tailwind v4 with @theme inline CSS variables
  components/
    neural-background.tsx    # Reusable WebGL shader background (optimized)
    example-hero.tsx         # Example hero section using NeuralBackground
    header.tsx              # Hero header component
    logo.tsx                # Logo component
    ui/                     # shadcn-ui components
      button.tsx
      text-effect.tsx
      animated-group.tsx
```

## 🎯 Critical Patterns

### 1. **Performance-First 3D Graphics**
The `neural-background.tsx` component is **heavily optimized** and should serve as the reference for any WebGL/Three.js work:

- **Lazy Loading**: Uses IntersectionObserver with 100px rootMargin for pre-loading
- **Device Detection**: Cached checks for low-end devices (< 4 CPU cores, < 4GB RAM)
- **Adaptive Rendering**: 
  - Mobile: 1x DPR, 30 FPS (frame skipping)
  - Desktop: 1.5x DPR, 60 FPS
  - 4K+: 1x DPR to save resources
  - Max resolution: 1920x1080 regardless of screen size
- **Fallback Strategy**: CSS gradient animation for:
  - `prefers-reduced-motion`
  - Slow connections (2G, 3G, `saveData`)
  - Low-end devices
- **Immediate Loading**: Shader renders instantly on good devices (no artificial delays)
- **Fade-in**: 1000ms opacity transition for smooth appearance
- **Fast Intro**: First 3 seconds run at 3x speed, then normal velocity
- **Memory Management**: Proper cleanup in useEffect (geometry/material disposal)
- **Pause on Hidden**: Stops rendering when tab is not visible (Visibility API)

**When creating 3D components:**
```tsx
// ✅ Good: Follow neural-background.tsx pattern
- Cache device detection results
- Use IntersectionObserver for lazy loading
- Implement CSS fallback for weak devices
- Add fade-in transitions (duration-1000)
- Dispose geometries/materials on unmount
- Pause rendering when tab hidden

// ❌ Avoid
- Rendering immediately without device checks
- Ignoring prefers-reduced-motion
- Not cleaning up Three.js resources
- Missing mobile optimizations
```

### 2. **Component Import Conventions**
```tsx
// ✅ Correct: Default exports for page components
import Hero from "@/components/neural-network-hero";
import NeuralBackground from '@/components/neural-background';

// ✅ Named exports for utilities/UI components
import { Button } from "@/components/ui/button";
import { HeroHeader } from "@/components/header";
```

### 3. **Tailwind CSS v4 Theme System**
Colors use CSS variables defined in `globals.css` with `@theme inline`:
```css
/* globals.css */
@theme inline {
  --color-primary: oklch(...);
  --color-background: var(--background);
}

/* Usage in components */
<div className="bg-primary text-foreground">
```

**Color palette**: Zinc theme from shadcn-ui (check `globals.css` lines 45-123 for full variable list)

### 4. **Hero Section Pattern**
See `example-hero.tsx` for the canonical pattern:
```tsx
<section className="relative h-screen w-full overflow-hidden">
  {/* Background shader with -z-10 */}
  <NeuralBackground />
  
  {/* Content with relative z-10 or higher */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
    {/* Your content here */}
  </div>
</section>
```

**Key rules:**
- Background uses `absolute inset-0 -z-10`
- Content uses `relative z-10` (or higher)
- Section has `relative overflow-hidden`
- Always test with `opacity: isVisible ? 1 : 0` for fade-in

### 5. **Root Layout Configuration**
Layout enforces dark mode and full-screen backgrounds:
```tsx
<html lang="pt-br" className="dark">
  <body className={`${geistSans.variable} bg-background text-foreground min-h-screen m-0 p-0 overflow-x-hidden`}>
```

**When modifying layout:**
- Keep `className="dark"` on `<html>`
- Preserve `overflow-x-hidden` to prevent horizontal scroll
- Maintain `m-0 p-0` to allow full-screen backgrounds

## 🛠️ Development Workflows

### Essential Commands
```bash
# Development (MUST use --turbopack)
npm run dev

# Production build (uses --turbopack)
npm run build
npm start

# Linting
npm run lint
```

### Adding shadcn-ui Components
```bash
# Install from shadcn-ui registry
npx shadcn@latest add button

# Install from external registries (21st.dev)
npx shadcn@latest add "https://21st.dev/r/66hex/neural-network-hero"
```

### Working with GSAP Animations
```tsx
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

// Register plugin
gsap.registerPlugin(SplitText);

// Text animation pattern (see neural-network-hero.tsx)
const split = new SplitText(element, { type: 'chars' });
gsap.from(split.chars, {
  opacity: 0,
  y: 50,
  stagger: 0.02,
  duration: 0.8
});
```

## 📚 Key References

- **Performance optimizations**: See `PERFORMANCE_OPTIMIZATIONS.md` for detailed metrics
- **Background component usage**: See `NEURAL_BACKGROUND_USAGE.md` for 4 practical examples
- **Shader implementation**: `neural-background.tsx` lines 73-225 (CPPN 9-layer neural network)
- **Device detection utilities**: `neural-background.tsx` lines 12-42

## ⚠️ Common Pitfalls

1. **Forgetting --turbopack**: Dev/build commands require `--turbopack` flag (configured in package.json)
2. **z-index conflicts**: Background must be `-z-10`, content `z-10+`
3. **Memory leaks**: Always dispose Three.js resources in cleanup functions
4. **Mobile performance**: Test frame skipping and DPR reduction on mobile devices
5. **Type errors**: `cPPNShaderMaterial: any` is intentional for Three.js extend (not a bug)
6. **CSS variables**: Use Tailwind classes, not direct CSS var() references
7. **Import paths**: Always use `@/` alias, not relative paths like `../`

## 🎨 Design Language

- **Dark mode**: Primary interface mode (enforced globally)
- **Colors**: Zinc palette with purple/pink gradients for accents
- **Typography**: Geist Sans for body, large bold headings (text-6xl to text-8xl)
- **Spacing**: Generous whitespace, full-screen sections
- **Effects**: Subtle backdrop-blur, glassmorphism (bg-white/5 backdrop-blur-sm)
- **Animations**: Smooth transitions (transition-all, hover:scale-105)

## 📝 Code Style

- **Language**: Portuguese for comments and documentation
- **Components**: Default exports for pages/sections, named for utilities
- **File naming**: kebab-case for files (`neural-background.tsx`)
- **CSS**: Tailwind utility classes, avoid inline styles except for dynamic values
- **TypeScript**: Strict mode enabled, prefer explicit types
- **React**: Functional components, hooks-based (no class components)

### Checklist de Qualidade da Pergunta
**Antes de Responder - Verificar se tenho:**
- [ ] Contexto suficiente do problema
- [ ] Arquivos/rotas específicos mencionados
- [ ] Critérios de sucesso claros
- [ ] Dados de exemplo (se aplicável)
- [ ] Documentação necessária (para features recentes)

**Se faltar algo → SEMPRE pedir antes de implementar**

### Diretrizes para Revisões de Código
- **Focar apenas em código fonte:** `src/`, arquivos de config, não incluir `.next/`, `node_modules/`
- **Investigar antes de perguntar:** Usar ferramentas para encontrar arquivos e analisar estrutura
- **Perguntar apenas:** Decisões técnicas, contexto de negócio, preferências de implementação
- **Features não implementadas:** Identificar como "pendente", não como "problema crítico"

### Estrutura Obrigatória
1. **Opções → Prós/Contras → Recomendação** (sempre antes do código)
2. **Explicação educativa:** O que + Por quê + Boas práticas relacionadas
3. **Aprovação obrigatória:** "Posso implementar?" ou "Qual opção prefere?"
4. **Após aprovação:** Diff mínimo com justificativa
5. **Como testar** (comandos, rotas, dados, critérios)
6. **Riscos/impactos** (compat, performance, DX, SEO/SSR/ISR)
7. **Aprendizado:** Como isso se aplica em projetos profissionais

## 🛡️ Anti-alucinação & privacidade
- **Não sabe → não inventa.** Explique a lacuna e como verificar
- Ordem de checagem: **Docs fornecidas → RAG do repo → Conhecimento de treinamento**
- **NUNCA implementar sem aprovação** - sempre pedir confirmação
- Revelar **cadeia de pensamento** educativa
- Confirmar antes de exibir payloads com dados sensíveis
- **Foco educativo:** Cada resposta deve ensinar algo novo

## 🤖 Limitações de Conhecimento e Fontes

### Data de Corte do Conhecimento
- **Treinamento até:** Abril 2024 (aproximadamente)
- **Tecnologias posteriores:** Conhecimento pode estar incompleto/desatualizado
- **Sempre avisar** quando incerto sobre versões/features recentes

### Prioridade de Fontes (ordem)
1. **Documentação fornecida pelo usuário** (máxima prioridade)
2. **RAG do repositório atual**
3. **Conhecimento de treinamento** (com aviso se pós-2024)
4. **NUNCA inventar** informações

### Sinais de Alerta - Sempre Pedir Docs
- Versões de libs/frameworks > 2024
- Features experimentais ou muito novas
- APIs que podem ter mudado recentemente
- Breaking changes em major versions

### Templates de Resposta
**Para incerteza:**
"⚠️ Meu conhecimento sobre [X] pode estar desatualizado. Pode fornecer a documentação oficial?"

**Usando docs fornecidas:**
"✅ Baseado na documentação fornecida sobre [X]..."

**Para tecnologias recentes:**
"🤔 Recomendo verificar na documentação oficial de [X] para confirmar."