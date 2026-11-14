'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

import { Chip } from '@/components/common/chip';
import { Reveal } from '@/components/common/reveal';
import type { CareerEntry as CareerEntryData } from '@/content/career';
import { useLang } from '@/i18n/provider';

import { BulletList } from './bullet-list';
import { getEntryDates } from './entry-dates';
import { StageStrip } from './stage-strip';

export type CareerVariant = 'summary' | 'full';

/** `summary` is the compact home-page version; `full` is the Experience page. */
export function CareerEntry({ entry, variant }: { entry: CareerEntryData; variant: CareerVariant }) {
  const { lang } = useLang();
  const isFull = variant === 'full';
  const dates = getEntryDates(entry, lang);
  const role = isFull ? entry.sub : (entry.homeRole ?? entry.sub);
  // In the full view, entries with stages show them in the strip instead of the bullets.
  const bullets = isFull && entry.stages ? [] : [...(entry.bullets ?? []), ...(isFull ? (entry.more ?? []) : [])];

  const name =
    entry.org?.url && isFull ? (
      <a
        href={entry.org.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 transition-opacity hover:opacity-70"
      >
        {entry.heading[lang]}
        <ArrowUpRight size={14} className="text-muted-foreground" />
      </a>
    ) : (
      entry.heading[lang]
    );

  const content = (
    <div className="grid gap-3 sm:grid-cols-[156px_1fr] sm:gap-6">
      <div className="text-[13px] tabular-nums leading-snug text-muted-foreground sm:pt-1">
        <span className="block whitespace-nowrap font-medium text-foreground">{dates.range}</span>
        {dates.duration && <span>{dates.duration}</span>}
        {entry.note && (
          <span>
            {dates.duration && ' · '}
            {entry.note[lang]}
          </span>
        )}
      </div>

      <div className="min-w-0">
        <div className="flex items-center gap-3">
          {entry.org?.logo && (
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-white p-1.5">
              <Image
                src={entry.org.logo.src}
                alt=""
                width={entry.org.logo.width}
                height={entry.org.logo.height}
                className="max-h-full w-auto object-contain"
              />
            </span>
          )}
          <div className="min-w-0">
            <h3 className="text-[17px] font-semibold leading-tight tracking-[-0.02em]">{name}</h3>
            {role && <p className="mt-0.5 text-sm leading-snug text-muted-foreground">{role[lang]}</p>}
          </div>
        </div>

        {isFull && entry.lead && (
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{entry.lead[lang]}</p>
        )}

        {isFull && entry.stages && <StageStrip stages={entry.stages} />}

        {bullets.length > 0 && (
          <div className="mt-4">
            <BulletList items={bullets} />
          </div>
        )}

        {entry.tags && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {entry.tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <li id={entry.id} className="scroll-mt-10">
      {isFull ? <Reveal>{content}</Reveal> : content}
    </li>
  );
}
