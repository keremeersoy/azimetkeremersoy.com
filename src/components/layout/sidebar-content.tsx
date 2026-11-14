'use client';

import Image from 'next/image';
import Link from 'next/link';

import { SearchButton } from '@/components/command-palette/search-button';
import { PROFILES } from '@/content/profiles';
import { useLang } from '@/i18n/provider';

import { NAV_ITEMS } from './nav-items';
import { NavLink } from './nav-link';
import { SettingsToggles } from './settings-toggles';

interface SidebarContentProps {
  className?: string;
  onNavigate?: () => void;
}

/** Shared by the desktop sidebar and the mobile drawer. */
export function SidebarContent({ className, onNavigate }: SidebarContentProps) {
  const { t } = useLang();

  return (
    <div className={className}>
      <Link
        href="/"
        onClick={onNavigate}
        className="-mx-1.5 flex items-center gap-2.5 rounded-lg px-1.5 py-1 transition-colors hover:bg-muted"
      >
        <Image
          src="/avatar.jpg"
          alt="Azimet Kerem Ersoy"
          width={32}
          height={32}
          className="size-8 rounded-full object-cover"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold tracking-tight">Azimet Kerem Ersoy</span>
          <span className="text-xs text-muted-foreground">{t.role}</span>
        </div>
      </Link>

      <div className="mt-4">
        <SearchButton />
      </div>

      <nav className="mt-4 flex flex-col gap-0.5">
        {NAV_ITEMS.map(({ key, href, Icon }) => (
          <NavLink key={href} href={href} label={t.nav[key]} icon={<Icon size={16} />} onClick={onNavigate} />
        ))}
      </nav>

      <div className="mt-6 flex flex-col gap-0.5">
        <span className="px-2.5 pb-1 text-[10.5px] font-medium uppercase tracking-wider text-muted-foreground">
          {t.links}
        </span>
        {Object.values(PROFILES).map((profile) => (
          <NavLink
            key={profile.url}
            href={profile.url}
            label={profile.title}
            icon={'icon' in profile ? profile.icon : undefined}
            onClick={onNavigate}
          />
        ))}
      </div>

      <div className="mt-auto pt-6">
        <SettingsToggles />
      </div>
    </div>
  );
}
