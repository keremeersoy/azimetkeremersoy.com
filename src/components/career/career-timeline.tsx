'use client';

import { career } from '@/content/career';
import { cn } from '@/lib/utils';

import { CareerEntry, type CareerVariant } from './career-entry';
import { useScrollToHash } from './use-scroll-to-hash';

export function CareerTimeline({ variant = 'summary' }: { variant?: CareerVariant }) {
  const isFull = variant === 'full';
  useScrollToHash(isFull);

  return (
    <ol className={cn('flex flex-col', isFull ? 'gap-14' : 'gap-9')}>
      {career
        .filter((entry) => isFull || !entry.hideOnHome)
        .map((entry) => (
          <CareerEntry key={entry.id} entry={entry} variant={variant} />
        ))}
    </ol>
  );
}
