import type { TechIconName } from '@/components/projects/tech-icons';
import { SITE_URL } from '@/lib/site';

import type { Localized } from './types';

export interface Project {
  slug: string;
  title: string;
  liveUrl?: string;
  githubUrl: string;
  techStack: { name: string; icon: TechIconName }[];
  /** One line, used on the home page. */
  short: Localized;
  lead: Localized;
  bullets: Localized[];
}

export const projects: Project[] = [
  {
    slug: 'modabul',
    title: 'modabul',
    liveUrl: 'https://modabul.vercel.app/',
    githubUrl: 'https://github.com/keremeersoy/modabul',
    techStack: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Prisma ORM', icon: 'prisma' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Shadcn UI', icon: 'shadcnui' },
      { name: 'NextAuth', icon: 'nextauth' },
      { name: 'Cloudinary', icon: 'cloudinary' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Vercel', icon: 'vercel' },
    ],
    short: {
      en: 'A platform that connects people in need with clothing others give away for free or cheaply.',
      tr: 'İhtiyacı olanları, ücretsiz ya da uygun fiyata verilen kıyafetlerle buluşturan bir platform.',
    },
    lead: {
      en: 'A platform that connects people in need with clothing others give away for free or at an affordable price.',
      tr: 'İhtiyacı olan kişilerin, başkalarının ücretsiz ya da uygun fiyata verdiği kıyafetlere ulaşmasını sağlayan bir platform.',
    },
    bullets: [
      {
        en: 'Create listings after registering, with images, titles, descriptions and product details.',
        tr: 'Kayıt olan kullanıcılar görsel, başlık, açıklama ve ürün bilgileriyle ilan açabiliyor.',
      },
      {
        en: 'Publish your own listings or save others to find them later.',
        tr: 'Kendi ilanlarını yayınlayabiliyor, beğendiği ilanları sonradan bakmak için kaydedebiliyor.',
      },
      {
        en: 'Public one-question-one-answer Q&A between buyers and sellers under each listing.',
        tr: 'Her ilanın altında alıcılar satıcıya herkese açık soru sorabiliyor. Satıcı her soruya tek bir cevap veriyor.',
      },
      {
        en: 'Built for the Project 2 course at Kırıkkale University.',
        tr: "Kırıkkale Üniversitesi'ndeki Proje 2 dersi kapsamında geliştirildi.",
      },
    ],
  },
  {
    slug: 'azy-stack',
    title: 'azy-stack',
    githubUrl: 'https://github.com/keremeersoy/azy-stack',
    techStack: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Prisma ORM', icon: 'prisma' },
      { name: 'Shadcn UI', icon: 'shadcnui' },
      { name: 'Lucide React', icon: 'lucideIcons' },
      { name: 'Better-Auth', icon: 'betterAuth' },
      { name: 'TanStack', icon: 'tanstack' },
      { name: 'Zod', icon: 'zod' },
    ],
    short: {
      en: 'Full-stack starter on Next.js 16 and React 19 with auth, database and forms ready.',
      tr: 'Next.js 16 ve React 19 ile hazırladığım full-stack başlangıç şablonu. Kimlik doğrulama, veritabanı ve formlar hazır.',
    },
    lead: {
      en: 'A robust, modern full-stack starter template built with Next.js 16, React 19 and Tailwind CSS 4.',
      tr: 'Next.js 16, React 19 ve Tailwind CSS 4 ile hazırladığım, sağlam ve modern bir full-stack başlangıç şablonu.',
    },
    bullets: [
      {
        en: 'Pre-configured with industry-standard tools for authentication, database management, form handling and UI components.',
        tr: 'Kimlik doğrulama, veritabanı, form yönetimi ve arayüz bileşenleri için sektörün standart araçlarıyla önceden kurulu geliyor.',
      },
      {
        en: 'Lets you focus on building features immediately.',
        tr: 'Kurulumla uğraşmadan doğrudan özellik geliştirmeye başlayabilirsin.',
      },
    ],
  },
  {
    slug: 'site',
    title: 'azimetkeremersoy.com',
    liveUrl: SITE_URL,
    githubUrl: 'https://github.com/keremeersoy/azimetkeremersoy.com',
    techStack: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Shadcn UI', icon: 'shadcnui' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Vercel', icon: 'vercel' },
    ],
    short: {
      en: 'This portfolio, with dark mode, English and Turkish and a ⌘K palette. Open source.',
      tr: 'Bu portfolyo. Koyu tema, Türkçe/İngilizce ve ⌘K paleti var; açık kaynak.',
    },
    lead: {
      en: 'This portfolio: where I show my professional experience, skills and projects.',
      tr: 'Bu portfolyo: deneyimlerimi, becerilerimi ve projelerimi sergilediğim site.',
    },
    bullets: [
      {
        en: 'Clean, modern and responsive, with dark mode, English and Turkish, and a ⌘K command palette.',
        tr: 'Temiz, modern ve mobil uyumlu. Koyu tema, Türkçe ve İngilizce dil desteği ve ⌘K komut paleti var.',
      },
      { en: 'Hosted on Vercel; open source on GitHub.', tr: "Vercel'de yayında, kodu GitHub'da açık." },
    ],
  },
];
