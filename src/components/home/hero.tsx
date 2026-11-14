'use client';

import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';

import { PROFILES } from '@/content/profiles';
import { heroRole } from '@/content/home';
import { useLang } from '@/i18n/provider';

interface ProfileButtonProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  className: string;
}

function ProfileButton({ href, label, icon, className }: ProfileButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium ${className}`}
    >
      {icon}
      {label}
    </a>
  );
}

export function Hero() {
  const { lang } = useLang();

  return (
    <div className="grid items-center gap-8 sm:grid-cols-[1fr_150px] sm:gap-10">
      <Image
        src="/avatar.jpg"
        alt="Azimet Kerem Ersoy"
        width={300}
        height={380}
        priority
        className="h-28 w-24 rounded-[24px] object-cover object-[50%_20%] sm:order-last sm:h-[190px] sm:w-[150px] sm:rounded-[30px]"
      />
      <div>
        <p className="text-[13px] text-muted-foreground">{heroRole[lang]}</p>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-[42px]">
          Azimet Kerem Ersoy
        </h1>
        <div className="mt-5 flex flex-wrap gap-2">
          <ProfileButton
            href={PROFILES.linkedin.url}
            label="LinkedIn"
            icon={<Linkedin size={15} />}
            className="bg-foreground text-background transition-opacity hover:opacity-90"
          />
          <ProfileButton
            href={PROFILES.github.url}
            label="GitHub"
            icon={<Github size={15} />}
            className="border border-border transition-colors hover:bg-muted"
          />
        </div>
      </div>
    </div>
  );
}
