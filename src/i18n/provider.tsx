'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { LANG_COOKIE, type Lang } from './config';
import { dictionary, type Dictionary } from './dictionary';

type LanguageContextValue = { lang: Lang; setLang: (lang: Lang) => void; t: Dictionary };

const LanguageContext = createContext<LanguageContextValue | null>(null);

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

export function LanguageProvider({ initialLang, children }: { initialLang: Lang; children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    document.cookie = `${LANG_COOKIE}=${next}; path=/; max-age=${ONE_YEAR_IN_SECONDS}; samesite=lax`;
  }, []);

  const value = useMemo(() => ({ lang, setLang, t: dictionary[lang] }), [lang, setLang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLang must be used inside LanguageProvider');
  return context;
}
