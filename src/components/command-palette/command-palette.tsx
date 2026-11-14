'use client';

import { Command } from 'cmdk';
import { ArrowUpRight, Briefcase, Check, Copy, Folder, Globe, GraduationCap, Link2, Mail, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { usePathname, useRouter } from 'next/navigation';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { NAV_ITEMS } from '@/components/layout/nav-items';
import { career } from '@/content/career';
import { EMAIL, PROFILES } from '@/content/profiles';
import { projects } from '@/content/projects';
import { useLang } from '@/i18n/provider';
import { copyText } from '@/lib/clipboard';
import { SITE_URL } from '@/lib/site';

import { Hint, Kbd } from './palette-parts';

interface PaletteContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const PaletteContext = createContext<PaletteContextValue>({ open: false, setOpen: () => {} });

export const usePalette = () => useContext(PaletteContext);

const TOAST_DURATION_MS = 2200;
const DIALOG_CLOSE_DELAY_MS = 80;

export function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const { t, lang, setLang } = useLang();
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((isOpen) => !isOpen);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), TOAST_DURATION_MS);
    return () => clearTimeout(timer);
  }, [toast]);

  const run = useCallback((action: () => void) => {
    setOpen(false);
    action();
  }, []);

  const copy = useCallback(
    (text: string) => {
      run(() => {
        // If the browser blocks clipboard access, show the text so it can be copied by hand.
        copyText(text).then((copied) => setToast(copied ? t.palette.copied : text));
      });
    },
    [run, t.palette.copied]
  );

  const goToEntry = useCallback(
    (id: string) => {
      run(() => {
        if (pathname === '/experience') {
          setTimeout(
            () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
            DIALOG_CLOSE_DELAY_MS
          );
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
            {NAV_ITEMS.map(({ key, href, Icon, searchTerms }) => (
              <Command.Item key={key} value={searchTerms} onSelect={() => run(() => router.push(href))}>
                <Icon size={16} /> {t.nav[key]}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading={t.palette.experience}>
            {career.map((entry) => (
              <Command.Item
                key={entry.id}
                value={`experience ${entry.id}`}
                keywords={[
                  entry.heading.en,
                  entry.heading.tr,
                  entry.org?.name ?? '',
                  ...(entry.tags ?? []),
                  ...(entry.stages?.map((stage) => stage.label.en) ?? []),
                ]}
                onSelect={() => goToEntry(entry.id)}
              >
                {entry.id === 'graduation' ? <GraduationCap size={16} /> : <Briefcase size={16} />}
                {entry.heading[lang]}
                <Hint>{(entry.homeRole ?? entry.sub)?.[lang]}</Hint>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading={t.palette.projects}>
            {projects.map((project) => (
              <Command.Item
                key={project.slug}
                value={`project ${project.title}`}
                keywords={project.techStack.map((tech) => tech.name)}
                onSelect={() => run(() => window.open(project.liveUrl || project.githubUrl, '_blank'))}
              >
                <Folder size={16} />
                {project.title}
                <Hint>
                  {project.techStack
                    .slice(0, 3)
                    .map((tech) => tech.name)
                    .join(' · ')}
                </Hint>
                <ArrowUpRight size={14} className="ml-auto shrink-0 text-muted-foreground sm:ml-2" />
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
              .filter((profile) => !profile.url.startsWith('mailto:'))
              .map((profile) => (
                <Command.Item
                  key={profile.url}
                  value={`link ${profile.title}`}
                  onSelect={() => run(() => window.open(profile.url, '_blank'))}
                >
                  {'icon' in profile ? profile.icon : <ArrowUpRight size={16} />} {profile.title}
                  <ArrowUpRight size={14} className="ml-auto text-muted-foreground" />
                </Command.Item>
              ))}
          </Command.Group>
        </Command.List>

        <div className="hidden items-center gap-4 border-t border-border px-4 py-2 text-[11px] text-muted-foreground sm:flex">
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
