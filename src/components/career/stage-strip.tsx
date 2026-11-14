'use client';

import { useState } from 'react';

import type { CareerEntry } from '@/content/career';
import { useLang } from '@/i18n/provider';
import { formatDuration, formatMonth, formatRange } from '@/lib/dates';
import { cn } from '@/lib/utils';

import { BulletList } from './bullet-list';

type Stages = NonNullable<CareerEntry['stages']>;

/** Clickable steps (e.g. intern, part-time, full-time) with the details of the selected one. */
export function StageStrip({ stages }: { stages: Stages }) {
  const { lang } = useLang();
  // Stored newest-first; the strip reads oldest to newest, left to right.
  const ordered = [...stages].reverse();
  const [active, setActive] = useState(ordered.length - 1);
  const current = ordered[active];

  return (
    <div className="mt-5">
      <div role="tablist" className="grid grid-cols-3 gap-2 sm:gap-3">
        {ordered.map((stage, index) => {
          const isOngoing = stage.end === null;
          const selected = index === active;

          return (
            <button
              key={stage.start}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(index)}
              className="group text-left outline-none"
            >
              <span
                className={cn(
                  'block h-1 rounded-full transition-colors duration-300',
                  selected
                    ? isOngoing
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
                {stage.label[lang]}
              </span>
              <span className="mt-0.5 block text-xs tabular-nums text-muted-foreground">
                {formatMonth(stage.start, lang)} · {formatDuration(stage.start, stage.end, lang)}
              </span>
            </button>
          );
        })}
      </div>

      <div key={current.start} className="mt-4 animate-in fade-in slide-in-from-bottom-1 duration-300">
        <p className="mb-2 text-[13px] tabular-nums text-muted-foreground">
          {formatRange(current.start, current.end, lang)}
        </p>
        <BulletList items={current.bullets} />
      </div>
    </div>
  );
}
