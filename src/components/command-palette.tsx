'use client';

import { Command } from 'cmdk';
import {
  ArrowUpRight,
  Briefcase,
  Check,
  Copy,
  Folder,
  Folders,
  Globe,
  GraduationCap,
  Home,
  Link2,
  Mail,
  Moon,
  ScrollText,
  Search,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { usePathname, useRouter } from 'next/navigation';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { PROFILES } from '@/lib/constants';
import { career } from '@/lib/content';
import { projects_data } from '@/lib/data';
import { useLang } from '@/lib/i18n';
import { SITE_URL } from '@/lib/site';

type PaletteCtx = { open: boolean; setOpen: (v: boolean) => void };
const PaletteContext = createContext<PaletteCtx>({ open: false, setOpen: () => {} });
export const usePalette = () => useContext(PaletteContext);

const EMAIL = 'azimetkeremersoy@gmail.com';

function Hint({ children }: { children: React.ReactNode }) {
  return <span className="ml-auto truncate pl-4 text-xs text-muted-foreground">{children}</span>;
}

function Kbd({ children }: { children: React.ReactNode }) {
  return <kbd className="rounded border border-border px-1.5 py-px font-mono text-[10px]">{children}</kbd>;
}

export function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const { t, lang, setLang } = useLang();
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(id);
  }, [toast]);

  const run = useCallback((fn: () => void) => {
    setOpen(false);
    fn();
  }, []);

  const copy = useCallback(
    (text: string) => {
      const legacyCopy = () => {
        const el = document.createElement('textarea');
        el.value = text;
        el.setAttribute('readonly', '');
        el.style.position = 'fixed';
        el.style.opacity = '0';
        document.body.appendChild(el);
        el.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(el);
        return ok;
      };

      run(() => {
        const done = () => setToast(t.palette.copied);
        // If the browser blocks clipboard access, show the text so it can be copied by hand.
        const fail = () => setToast(text);
        if (navigator.clipboard?.writeText) {
          navigator.clipboard
            .writeText(text)
            .then(done)
            .catch(() => (legacyCopy() ? done() : fail()));
        } else {
          legacyCopy() ? done() : fail();
        }
      });
    },
    [run, t.palette.copied]
  );

  const goToEntry = useCallback(
    (id: string) => {
      run(() => {
        if (pathname === '/experience') {
          // Wait for the dialog to close before scrolling.
          setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
        } else {
          router.push(`/experience#${id}`);
        }
      });
    },
    [pathname, router, run]
  );

  const value = useMemo(() => ({ open, setOpen }), [open]);

  return (
    <PaletteContext.Provider value={value}>
      {children}

      <Command.Dialog open={open} onOpenChange={setOpen} label="Command palette" loop>
        <Command.Input placeholder={t.palette.placeholder} />
        <Command.List>
          <Command.Empty>{t.palette.empty}</Command.Empty>

          <Command.Group heading={t.palette.navigate}>
            <Command.Item value="home" onSelect={() => run(() => router.push('/'))}>
              <Home size={16} /> {t.nav.home}
            </Command.Item>
            <Command.Item value="experience journey" onSelect={() => run(() => router.push('/experience'))}>
              <ScrollText size={16} /> {t.nav.experience}
            </Command.Item>
            <Command.Item value="projects" onSelect={() => run(() => router.push('/projects'))}>
              <Folders size={16} /> {t.nav.projects}
            </Command.Item>
          </Command.Group>

          <Command.Group heading={t.palette.experience}>
            {career.map((e) => (
              <Command.Item
                key={e.id}
                value={`experience ${e.id}`}
                keywords={[e.heading.en, e.heading.tr, e.org?.name ?? '', ...(e.tags ?? []), ...(e.stages?.map((s) => s.label.en) ?? [])]}
                onSelect={() => goToEntry(e.id)}
              >
                {e.id === 'graduation' ? <GraduationCap size={16} /> : <Briefcase size={16} />}
                {e.heading[lang]}
                <Hint>{(e.homeRole ?? e.sub)?.[lang]}</Hint>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading={t.palette.projects}>
            {projects_data.map((p) => (
              <Command.Item
                key={p.id}
                value={`project ${p.title}`}
                keywords={p.tech_stack.map((x) => x.name)}
                onSelect={() => run(() => window.open(p.liveUrl || p.githubUrl, '_blank'))}
              >
                <Folder size={16} />
                {p.title}
                <Hint>{p.tech_stack.slice(0, 3).map((x) => x.name).join(' · ')}</Hint>
                <ArrowUpRight size={14} className="ml-2 shrink-0 text-muted-foreground" />
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading={t.palette.actions}>
            <Command.Item value="copy email address" keywords={['mail', 'e-posta', 'kopyala']} onSelect={() => copy(EMAIL)}>
              <Copy size={16} /> {t.palette.copyEmail}
              <Hint>{EMAIL}</Hint>
            </Command.Item>
            <Command.Item
              value="send an email"
              keywords={['mail', 'e-posta', 'contact', 'iletişim']}
              onSelect={() => run(() => (window.location.href = PROFILES.mail.url))}
            >
              <Mail size={16} /> {t.palette.emailMe}
            </Command.Item>
            <Command.Item value="copy site link" keywords={['url', 'share', 'bağlantı']} onSelect={() => copy(SITE_URL)}>
              <Link2 size={16} /> {t.palette.copyLink}
              <Hint>{SITE_URL.replace(/^https?:\/\//, '')}</Hint>
            </Command.Item>
            <Command.Item
              value="toggle theme"
              keywords={['dark', 'light', 'koyu', 'açık', 'tema']}
              onSelect={() => run(() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'))}
            >
              <Moon size={16} /> {t.palette.toggleTheme}
              <Hint>{resolvedTheme === 'dark' ? 'Dark' : 'Light'}</Hint>
            </Command.Item>
            <Command.Item
              value="switch language"
              keywords={['dil', 'türkçe', 'english', 'turkish']}
              onSelect={() => run(() => setLang(lang === 'en' ? 'tr' : 'en'))}
            >
              <Globe size={16} /> {t.palette.switchLang}
              <Hint>{lang.toUpperCase()}</Hint>
            </Command.Item>
          </Command.Group>

          <Command.Group heading={t.palette.links}>
            {Object.values(PROFILES)
              .filter((p) => !p.url.startsWith('mailto:'))
              .map((p) => (
                <Command.Item key={p.url} value={`link ${p.title}`} onSelect={() => run(() => window.open(p.url, '_blank'))}>
                  {p.icon ?? <ArrowUpRight size={16} />} {p.title}
                  <ArrowUpRight size={14} className="ml-auto text-muted-foreground" />
                </Command.Item>
              ))}
          </Command.Group>
        </Command.List>

        <div className="flex items-center gap-4 border-t border-border px-4 py-2 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Kbd>↑↓</Kbd> {t.palette.hintNavigate}
          </span>
          <span className="flex items-center gap-1.5">
            <Kbd>↵</Kbd> {t.palette.hintOpen}
          </span>
          <span className="ml-auto flex items-center gap-1.5">
            <Kbd>esc</Kbd> {t.palette.hintClose}
          </span>
        </div>
      </Command.Dialog>

      {toast && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-2 rounded-lg bg-foreground px-3.5 py-2 text-sm font-medium text-background shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <Check size={14} />
          {toast}
        </div>
      )}
    </PaletteContext.Provider>
  );
}

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
