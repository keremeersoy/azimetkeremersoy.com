'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { useLang } from '@/lib/i18n';

const seg = 'inline-flex rounded-lg bg-muted p-0.5 text-xs';
const item = (on: boolean) =>
  cn(
    'rounded-md px-2.5 py-1 font-medium transition-colors',
    on ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
  );

export function SettingsToggles() {
  const { lang, setLang } = useLang();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="flex items-center gap-2">
      <div className={seg} role="group" aria-label="Language">
        <button className={item(lang === 'en')} onClick={() => setLang('en')}>
          EN
        </button>
        <button className={item(lang === 'tr')} onClick={() => setLang('tr')}>
          TR
        </button>
      </div>
      <div className={seg} role="group" aria-label="Theme">
        <button
          className={item(mounted && resolvedTheme === 'light')}
          onClick={() => setTheme('light')}
          aria-label="Light theme"
        >
          <Sun size={13} />
        </button>
        <button
          className={item(mounted && resolvedTheme === 'dark')}
          onClick={() => setTheme('dark')}
          aria-label="Dark theme"
        >
          <Moon size={13} />
        </button>
      </div>
    </div>
  );
}
