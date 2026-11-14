'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Chip } from '@/components/chip';
import { Reveal } from '@/components/reveal';
import { career, type CareerEntry, type L } from '@/lib/content';
import { formatDuration, formatMonth, formatRange } from '@/lib/dates';
import { useLang } from '@/lib/i18n';
import { cn } from '@/lib/utils';

function useWhen(e: CareerEntry) {
  const { lang } = useLang();
  if (e.start !== undefined) {
    return {
      range: formatRange(e.start, e.end ?? null, lang),
      duration: formatDuration(e.start, e.end ?? null, lang),
    };
  }
  if (e.on) return { range: formatMonth(e.on, lang), duration: '' };
  return { range: e.year ?? '', duration: '' };
}

/** Renders `[text](url)` as an inline link. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <span key={i}>{part}</span>;
        return (
          <a
            key={i}
            href={m[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            {m[1]}
          </a>
        );
      })}
    </>
  );
}

function Bullets({ items }: { items: L[] }) {
  const { lang } = useLang();
  return (
    <ul className="flex flex-col gap-1.5 text-[15px] leading-[1.6]">
      {items.map((b, i) => (
        <li key={i} className="flex gap-2.5">
          <span aria-hidden className="mt-[10px] size-1 shrink-0 rounded-full bg-muted-foreground/60" />
          <span>
            <RichText text={b[lang]} />
          </span>
        </li>
      ))}
    </ul>
  );
}

/* --------------------------- stage strip (Jotform) ------------------------- */

function StageStrip({ stages }: { stages: NonNullable<CareerEntry['stages']> }) {
  const { lang } = useLang();
  // Stored newest-first; the strip reads oldest -> newest, left to right.
  const ordered = [...stages].reverse();
  const [active, setActive] = useState(ordered.length - 1);
  const current = ordered[active];

  return (
    <div className="mt-5">
      <div role="tablist" className="grid grid-cols-3 gap-2 sm:gap-3">
        {ordered.map((s, i) => {
          const isCurrentStage = s.end === null;
          const selected = i === active;
          return (
            <button
              key={s.start}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(i)}
              className="group text-left outline-none"
            >
              <span
                className={cn(
                  'block h-1 rounded-full transition-colors duration-300',
                  selected
                    ? isCurrentStage
                      ? 'bg-[hsl(var(--ok))]'
                      : 'bg-foreground'
                    : 'bg-border group-hover:bg-muted-foreground/40'
                )}
              />
              <span
                className={cn(
                  'mt-2 block text-sm font-medium leading-tight transition-colors',
                  selected ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
                )}
              >
                {s.label[lang]}
              </span>
              <span className="mt-0.5 block text-xs tabular-nums text-muted-foreground">
                {formatMonth(s.start, lang)} · {formatDuration(s.start, s.end, lang)}
              </span>
            </button>
          );
        })}
      </div>

      <div key={current.start} className="mt-4 animate-in fade-in slide-in-from-bottom-1 duration-300">
        <p className="mb-2 text-[13px] tabular-nums text-muted-foreground">
          {formatRange(current.start, current.end, lang)}
        </p>
        <Bullets items={current.bullets} />
      </div>
    </div>
  );
}

/* --------------------------------- entry ---------------------------------- */

function Entry({ e, full }: { e: CareerEntry; full: boolean }) {
  const { lang } = useLang();
  const when = useWhen(e);
  const sub = full ? e.sub : (e.homeRole ?? e.sub);
  const bullets = full && e.stages ? [] : [...(e.bullets ?? []), ...(full ? (e.more ?? []) : [])];

  const name =
    e.org?.url && full ? (
      <a
        href={e.org.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 transition-opacity hover:opacity-70"
      >
        {e.heading[lang]}
        <ArrowUpRight size={14} className="text-muted-foreground" />
      </a>
    ) : (
      e.heading[lang]
    );

  const body = (
    <div className="grid gap-3 sm:grid-cols-[156px_1fr] sm:gap-6">
      <div className="text-[13px] tabular-nums leading-snug text-muted-foreground sm:pt-1">
        <span className="block whitespace-nowrap font-medium text-foreground">{when.range}</span>
        {when.duration && <span>{when.duration}</span>}
        {e.note && (
          <span>
            {when.duration && ' · '}
            {e.note[lang]}
          </span>
        )}
      </div>

      <div className="min-w-0">
        <div className="flex items-center gap-3">
          {e.org?.logo && (
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-white p-1.5">
              <Image
                src={e.org.logo.src}
                alt=""
                width={e.org.logo.width}
                height={e.org.logo.height}
                className="max-h-full w-auto object-contain"
              />
            </span>
          )}
          <div className="min-w-0">
            <h3 className="text-[17px] font-semibold leading-tight tracking-[-0.02em]">{name}</h3>
            {sub && <p className="mt-0.5 text-sm leading-snug text-muted-foreground">{sub[lang]}</p>}
          </div>
        </div>

        {full && e.lead && <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{e.lead[lang]}</p>}

        {full && e.stages && <StageStrip stages={e.stages} />}

        {bullets.length > 0 && (
          <div className="mt-4">
            <Bullets items={bullets} />
          </div>
        )}

        {e.tags && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {e.tags.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <li id={e.id} className="scroll-mt-10">
      {full ? <Reveal>{body}</Reveal> : body}
    </li>
  );
}

/** `full` = Experience page: extra bullets, the stage strip and reveal-on-scroll. */
export function CareerTimeline({ full = false }: { full?: boolean }) {
  // Arriving from the command palette: /experience#jotform
  useEffect(() => {
    if (!full) return;
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const timer = setTimeout(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }), 200);
    return () => clearTimeout(timer);
  }, [full]);

  return (
    <ol className={cn('flex flex-col', full ? 'gap-14' : 'gap-9')}>
      {career
        .filter((e) => full || !e.hideOnHome)
        .map((e) => (
          <Entry key={e.id} e={e} full={full} />
        ))}
    </ol>
  );
}
