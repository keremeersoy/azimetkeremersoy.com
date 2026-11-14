'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { useLang } from '@/i18n/provider';
import { cn } from '@/lib/utils';

const groupClass = 'inline-flex rounded-lg bg-muted p-0.5 text-xs';

const optionClass = (selected: boolean) =>
  cn(
    'rounded-md px-2.5 py-1 font-medium transition-colors',
    selected ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
  );

export function SettingsToggles() {
  const { lang, setLang } = useLang();
  const { resolvedTheme, setTheme } = useTheme();
  // The resolved theme is only known in the browser; wait for mount to avoid a hydration mismatch.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="flex items-center gap-2">
      <div className={groupClass} role="group" aria-label="Language">
        <button className={optionClass(lang === 'en')} onClick={() => setLang('en')}>
          EN
        </button>
        <button className={optionClass(lang === 'tr')} onClick={() => setLang('tr')}>
          TR
        </button>
      </div>
      <div className={groupClass} role="group" aria-label="Theme">
        <button
          className={optionClass(mounted && resolvedTheme === 'light')}
          onClick={() => setTheme('light')}
          aria-label="Light theme"
        >
          <Sun size={13} />
        </button>
        <button
          className={optionClass(mounted && resolvedTheme === 'dark')}
          onClick={() => setTheme('dark')}
          aria-label="Dark theme"
        >
          <Moon size={13} />
        </button>
      </div>
    </div>
  );
}
