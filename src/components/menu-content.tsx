"use client";

import Image from "next/image";
import Link from "next/link";
import { Folders, Home, ScrollText } from "lucide-react";

import { PROFILES } from "@/lib/constants";
import { useLang } from "@/lib/i18n";
import NavigationLink from "./navigation-link";
import { SearchButton } from "./command-palette";
import { SettingsToggles } from "./settings-toggles";

const MenuContent = ({
  className,
  navigationLinkOnClick,
}: {
  className?: string;
  navigationLinkOnClick?: () => void;
}) => {
  const { t } = useLang();

  const nav = [
    { href: "/", label: t.nav.home, icon: <Home size={16} /> },
    { href: "/experience", label: t.nav.experience, icon: <ScrollText size={16} /> },
    { href: "/projects", label: t.nav.projects, icon: <Folders size={16} /> },
  ];

  return (
    <div className={className}>
      <Link
        href="/"
        onClick={navigationLinkOnClick}
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
        {nav.map((l) => (
          <NavigationLink key={l.href} {...l} onClick={navigationLinkOnClick} />
        ))}
      </nav>

      <div className="mt-6 flex flex-col gap-0.5">
        <span className="px-2.5 pb-1 text-[10.5px] font-medium uppercase tracking-wider text-muted-foreground">
          {t.links}
        </span>
        {Object.values(PROFILES).map((profile) => (
          <NavigationLink
            key={profile.url}
            href={profile.url}
            label={profile.title}
            icon={profile.icon}
            onClick={navigationLinkOnClick}
          />
        ))}
      </div>

      <div className="mt-auto pt-6">
        <SettingsToggles />
      </div>
    </div>
  );
};

export default MenuContent;
