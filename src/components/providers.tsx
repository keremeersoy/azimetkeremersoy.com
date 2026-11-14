'use client';

import { ThemeProvider } from 'next-themes';

import { CommandPaletteProvider } from '@/components/command-palette/command-palette';
import type { Lang } from '@/i18n/config';
import { LanguageProvider } from '@/i18n/provider';

export function Providers({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <LanguageProvider initialLang={lang}>
        <CommandPaletteProvider>{children}</CommandPaletteProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
