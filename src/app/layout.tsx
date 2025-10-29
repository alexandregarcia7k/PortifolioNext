import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ui/basic-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Alexandre Garcia | Desenvolvedor Full-Stack | React, Next.js & TypeScript",
  description: "Desenvolvedor Full-Stack especializado em React, Next.js, TypeScript e Node.js. Criando experiências digitais marcantes, interfaces modernas e soluções escaláveis para web.",
  keywords: [
    "Alexandre Garcia",
    "Desenvolvedor Full-Stack",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Front-end Developer",
    "Web Developer",
    "JavaScript",
    "Node.js",
    "Vue.js",
    "Nuxt.js",
    "Tailwind CSS",
    "Desenvolvedor Web",
    "Portfolio"
  ],
  authors: [{ name: "Alexandre Garcia", url: "https://github.com/alexandregarcia7k" }],
  creator: "Alexandre Garcia",
  publisher: "Alexandre Garcia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://seudominio.com",
    title: "Alexandre Garcia | Desenvolvedor Full-Stack",
    description: "Desenvolvedor Full-Stack especializado em React, Next.js e TypeScript. Criando experiências digitais marcantes e soluções web escaláveis.",
    siteName: "Alexandre Garcia Portfolio",
    images: [
      {
        url: "/fotoportifolio.png",
        width: 1200,
        height: 630,
        alt: "Alexandre Garcia - Desenvolvedor Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandre Garcia | Desenvolvedor Full-Stack",
    description: "Desenvolvedor Full-Stack especializado em React, Next.js e TypeScript",
    images: ["/fotoportifolio.png"],
  },
  alternates: {
    canonical: "https://seudominio.com",
  },
  verification: {
    google: "seu-codigo-de-verificacao-google",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${geistSans.variable} bg-background text-foreground min-h-screen m-0 p-0 overflow-x-hidden`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded">
          Pular para o conteúdo principal
        </a>
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}