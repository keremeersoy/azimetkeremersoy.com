'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export type Lang = 'en' | 'tr';

const dictionary = {
  en: {
    role: 'Frontend Developer',
    roleAt: 'Frontend Developer at Jotform · Ankara',
    latestRelease: 'Latest release',
    intro:
      'I build interfaces for the web. I started freelancing in 2021 and now ship frontend at Jotform, mostly with Next.js and TypeScript.',
    nav: { home: 'Home', experience: 'Experience', projects: 'Projects' },
    aboutTitle: 'About me',
    highlightsTitle: 'Highlights',
    stackTitle: 'Stack',
    beyondTitle: 'Beyond code',
    certsTitle: 'Certificates',
    viewSite: 'Live',
    viewCode: 'Code',
    links: 'Links',
    search: 'Search',
    seeAll: 'Full experience',
    journeyTitle: 'Journey',
    viewAll: 'View all',
    contactLine: 'For a project or just a chat:',
    connect: 'Connect on LinkedIn',
    experienceTitle: 'Experience',
    experienceLead: 'The full story of each step, newest first.',
    projectsTitle: 'Projects',
    current: 'current',
    palette: {
      placeholder: 'Search experience, projects, tech…',
      empty: 'Nothing found.',
      navigate: 'Pages',
      experience: 'Experience',
      projects: 'Projects',
      actions: 'Quick actions',
      links: 'Links',
      copyEmail: 'Copy email address',
      emailMe: 'Send an email',
      copyLink: 'Copy link to this site',
      copied: 'Copied to clipboard',
      toggleTheme: 'Toggle theme',
      switchLang: 'Switch to Türkçe',
      hintNavigate: 'navigate',
      hintOpen: 'open',
      hintClose: 'close',
    },
    live: 'live',
    github: 'github',
  },
  tr: {
    role: 'Frontend Developer',
    roleAt: "Jotform'da Frontend Developer · Ankara",
    latestRelease: 'Son sürüm',
    intro:
      "Web için arayüzler geliştiriyorum. 2021'de freelance başladım, şimdi Jotform'da çoğunlukla Next.js ve TypeScript ile frontend geliştiriyorum.",
    nav: { home: 'Ana Sayfa', experience: 'Deneyim', projects: 'Projeler' },
    aboutTitle: 'Hakkımda',
    highlightsTitle: 'Öne çıkanlar',
    stackTitle: 'Teknolojiler',
    beyondTitle: 'Kod dışında',
    certsTitle: 'Sertifikalar',
    viewSite: 'Canlı',
    viewCode: 'Kod',
    links: 'Bağlantılar',
    search: 'Ara',
    seeAll: 'Tüm deneyim',
    journeyTitle: 'Yolculuk',
    viewAll: 'Tümünü gör',
    contactLine: 'Bir proje ya da sohbet için:',
    connect: "LinkedIn'de bağlan",
    experienceTitle: 'Deneyim',
    experienceLead: 'Her adımın tam hikâyesi, en yeni en üstte.',
    projectsTitle: 'Projeler',
    current: 'güncel',
    palette: {
      placeholder: 'Deneyim, proje, teknoloji ara…',
      empty: 'Sonuç yok.',
      navigate: 'Sayfalar',
      experience: 'Deneyim',
      projects: 'Projeler',
      actions: 'Hızlı işlemler',
      links: 'Bağlantılar',
      copyEmail: 'E-posta adresini kopyala',
      emailMe: 'E-posta gönder',
      copyLink: 'Site bağlantısını kopyala',
      copied: 'Panoya kopyalandı',
      toggleTheme: 'Temayı değiştir',
      switchLang: 'Switch to English',
      hintNavigate: 'gezin',
      hintOpen: 'aç',
      hintClose: 'kapat',
    },
    live: 'canlı',
    github: 'github',
  },
} as const;

export type Dictionary = (typeof dictionary)[Lang];

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dictionary };
const LangContext = createContext<Ctx | null>(null);

const STORAGE_KEY = 'lang';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'tr') {
        setLangState(saved);
      } else if (navigator.language?.toLowerCase().startsWith('tr')) {
        setLangState('tr');
      }
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  }, []);

  const value = useMemo(() => ({ lang, setLang, t: dictionary[lang] }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}
