'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import type { Lang } from '@/i18n/config';
import { useLang } from '@/i18n/provider';
import { cn } from '@/lib/utils';

const groupClass = 'inline-flex rounded-lg bg-muted p-0.5 text-xs';

const LANGUAGES: { code: Lang; label: string; name: string }[] = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'tr', label: 'TR', name: 'Türkçe' },
];

const optionClass = (selected: boolean) =>
  cn(
    'flex min-h-11 min-w-11 items-center justify-center rounded-md px-3 font-medium transition-colors lg:min-h-0 lg:min-w-0 lg:px-2.5 lg:py-1',
    selected ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
  );

export function SettingsToggles() {
  const { lang, setLang, t } = useLang();
  const { resolvedTheme, setTheme } = useTheme();
  // The resolved theme is only known in the browser; wait for mount to avoid a hydration mismatch.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="flex items-center gap-2">
      <div className={groupClass} role="group" aria-label={t.language}>
        {LANGUAGES.map(({ code, label, name }) => (
          <button
            key={code}
            className={optionClass(lang === code)}
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            aria-label={name}
            lang={code}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={groupClass} role="group" aria-label={t.theme}>
        <button
          className={optionClass(mounted && resolvedTheme === 'light')}
          onClick={() => setTheme('light')}
          aria-pressed={mounted && resolvedTheme === 'light'}
          aria-label={t.lightTheme}
        >
          <Sun size={15} aria-hidden />
        </button>
        <button
          className={optionClass(mounted && resolvedTheme === 'dark')}
          onClick={() => setTheme('dark')}
          aria-pressed={mounted && resolvedTheme === 'dark'}
          aria-label={t.darkTheme}
        >
          <Moon size={15} aria-hidden />
        </button>
      </div>
    </div>
  );
}
