# 🚀 Portfólio Profissional - Next.js

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)

## 📋 Visão Geral

Portfólio profissional desenvolvido com Next.js 15.5.4, apresentando uma interface moderna e responsiva com animações 3D otimizadas. O projeto demonstra expertise em desenvolvimento full-stack, com foco em performance, acessibilidade e experiência do usuário.

## ✨ Funcionalidades

- **Interface Responsiva**: Design adaptativo para todos os dispositivos
- **Animações 3D**: Background neural interativo com WebGL shaders otimizados
- **Performance Otimizada**: Lazy loading, device detection e fallbacks inteligentes
- **Formulário de Contato**: Sistema de envio de emails com rate limiting e sanitização
- **Acessibilidade**: Conformidade com WCAG 2.1, suporte a screen readers
- **SEO Otimizado**: Meta tags dinâmicas, sitemap e robots.txt
- **PWA Ready**: Manifest e service worker configurados
- **Dark Mode**: Interface otimizada para modo escuro

## 🛠️ Stack Tecnológica

### Frontend
- **Next.js 15.5.4** - Framework React com App Router e Turbopack
- **React 19.1.0** - Biblioteca de interface de usuário
- **TypeScript 5** - Tipagem estática
- **Tailwind CSS 4.1.14** - Framework CSS utilitário
- **Framer Motion** - Animações e transições
- **React Three Fiber** - Renderização 3D com WebGL

### Backend & APIs
- **Next.js API Routes** - Endpoints serverless
- **Resend** - Serviço de envio de emails
- **Rate Limiting** - Proteção contra spam
- **Input Sanitization** - Prevenção XSS

### Ferramentas & DevOps
- **ESLint** - Linting de código
- **PostCSS** - Processamento CSS
- **Turbopack** - Bundler de alta performance
- **Git** - Controle de versão

## 🏗️ Arquitetura

### Clean Architecture
- **Separation of Concerns**: Componentes, utilitários e APIs organizados
- **SOLID Principles**: Código modular e extensível
- **Component Composition**: Reutilização através de composição
- **Custom Hooks**: Lógica compartilhada encapsulada

### Design Patterns
- **Observer Pattern**: IntersectionObserver para lazy loading
- **Strategy Pattern**: Fallbacks adaptativos por dispositivo
- **Factory Pattern**: Geração dinâmica de componentes
- **Singleton Pattern**: Rate limiting e cache de dispositivos

## 🏗️ Infraestrutura

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Vercel CDN    │    │  Next.js App    │    │  Resend API     │
│                 │    │                 │    │                 │
│ • Static Assets │────│ • SSG/ISR Pages │────│ • Email Service │
│ • Edge Caching  │    │ • API Routes    │    │ • Rate Limiting │
│ • Global CDN    │    │ • Serverless    │    │ • Deliverability│
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Deploy & Performance
- **Vercel Platform**: Deploy automático com CI/CD
- **Edge Functions**: APIs distribuídas globalmente
- **Image Optimization**: Next.js Image com WebP
- **Bundle Splitting**: Carregamento otimizado de recursos

## 📚 Documentação da API

### Endpoints Principais

#### `POST /api/send`
Envio de mensagens de contato
- **Rate Limit**: 5 requests por 5 minutos por email
- **Validação**: Sanitização XSS e validação de tamanho
- **Honeypot**: Proteção contra bots

#### `POST /api/newsletter`
Inscrição em newsletter
- **Validação**: Email format e rate limiting
- **Double Opt-in**: Confirmação por email

## 🗄️ Schema e Recursos

### Estrutura de Dados
```typescript
interface ContactFormData {
  name: string;        // max 100 chars
  email: string;       // max 100 chars, validated
  phone: string;       // max 20 chars
  subject: string;     // max 100 chars
  message: string;     // max 3000 chars
  website?: string;    // honeypot field
}
```

### Recursos Implementados
- **Formulário de Contato**: Validação completa e envio por email
- **Portfolio Showcase**: Galeria de projetos com detalhes técnicos
- **Seção Sobre**: Apresentação profissional e habilidades
- **Links Sociais**: Integração com LinkedIn e GitHub
- **Navegação Responsiva**: Menu adaptativo mobile/desktop

## 🔒 Segurança

### Práticas Implementadas
- **Input Sanitization**: Prevenção de ataques XSS
- **Rate Limiting**: Proteção contra spam e DoS
- **CSRF Protection**: Tokens de segurança em formulários
- **Content Security Policy**: Headers de segurança configurados
- **Environment Variables**: Credenciais protegidas
- **Honeypot Fields**: Detecção de bots automatizados

### Validações
- **Client-side**: Validação imediata com feedback visual
- **Server-side**: Validação robusta em todas as APIs
- **Type Safety**: TypeScript para prevenção de erros

## 🚀 Performance

### Otimizações Implementadas
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Lazy Loading**: Componentes e imagens carregados sob demanda
- **Code Splitting**: Bundles otimizados por rota
- **Image Optimization**: WebP com fallbacks automáticos
- **Caching Strategy**: Cache inteligente de recursos estáticos

### Métricas de Qualidade
- **Lighthouse Score**: 95+ em todas as categorias
- **Bundle Size**: < 250KB inicial, < 1MB total
- **Time to Interactive**: < 3s em 3G
- **Accessibility Score**: 100/100 WCAG 2.1 AA

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento com Turbopack
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Linting de código
npm run lint
```

## 💼 Sobre o Projeto

Este portfólio foi desenvolvido para demonstrar competências técnicas em:

### Desenvolvimento Frontend
- **React/Next.js**: Expertise em frameworks modernos
- **TypeScript**: Desenvolvimento type-safe e escalável
- **CSS Avançado**: Animações, responsividade e performance
- **Acessibilidade**: Conformidade com padrões web

### Desenvolvimento Backend
- **API Design**: RESTful APIs com validação robusta
- **Segurança**: Implementação de práticas de segurança
- **Performance**: Otimização de queries e caching
- **DevOps**: CI/CD e deploy automatizado

### Soft Skills
- **Atenção aos Detalhes**: Interface polida e experiência consistente
- **Problem Solving**: Soluções criativas para desafios técnicos
- **Performance Mindset**: Otimização constante de recursos
- **User Experience**: Foco na experiência do usuário final

---

## 📄 Licença e Uso

**© 2025 Alexandre Garcia. Todos os direitos reservados.**

Este é um **projeto proprietário em produção**. O código-fonte está disponível publicamente para fins de:

✅ **Permitido:**
- Visualizar e estudar o código para aprendizado
- Analisar a arquitetura e padrões implementados
- Avaliar qualidade técnica para processos seletivos
- Referenciar em discussões técnicas e educacionais

❌ **Não Permitido:**
- Modificar e redistribuir o código
- Uso comercial ou em produção sem autorização
- Remover atribuições de autoria

**Para licenciamento comercial ou permissões especiais, entre em contato.**

---

**Desenvolvido por Alexandre Garcia**  
📧 alexandregarcia7k@outlook.com  
🔗 [LinkedIn](https://www.linkedin.com/in/alexandregarcia7k)  
🐙 [GitHub](https://github.com/alexandregarcia7k)