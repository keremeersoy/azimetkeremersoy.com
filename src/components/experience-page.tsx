'use client';

import { CareerTimeline } from '@/components/career-timeline';
import { certificates } from '@/lib/content';
import { useLang } from '@/lib/i18n';

export function ExperiencePage() {
  const { t, lang } = useLang();
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-[-0.03em]">{t.experienceTitle}</h1>
      <p className="mb-12 mt-2 text-muted-foreground">{t.experienceLead}</p>
      <CareerTimeline full />

      <section className="mt-16 border-t border-border pt-5">
        <h2 className="mb-4 text-[13px] font-semibold">{t.certsTitle}</h2>
        <ul className="flex flex-col divide-y divide-border">
          {certificates.map((c) => (
            <li key={c.name} className="flex items-baseline justify-between gap-4 py-2.5 text-sm">
              <span>
                <span className="font-medium">{c.name}</span>
                <span className="text-muted-foreground"> · {c.org}</span>
              </span>
              <span className="text-xs tabular-nums text-muted-foreground">{c.date[lang]}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
