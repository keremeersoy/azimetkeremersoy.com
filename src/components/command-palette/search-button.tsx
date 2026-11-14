'use client';

import { Search } from 'lucide-react';

import { useLang } from '@/i18n/provider';

import { usePalette } from './command-palette';

export function SearchButton() {
  const { setOpen } = usePalette();
  const { t } = useLang();

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className="flex w-full items-center gap-2 rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      <Search size={14} />
      <span>{t.search}</span>
      <kbd className="ml-auto rounded border border-border px-1.5 font-mono text-[10px]">⌘K</kbd>
    </button>
  );
}
