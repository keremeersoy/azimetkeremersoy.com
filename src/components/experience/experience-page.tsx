'use client';

import { CareerTimeline } from '@/components/career/career-timeline';
import { certificates } from '@/content/certificates';
import { useLang } from '@/i18n/provider';

export function ExperiencePage() {
  const { t, lang } = useLang();

  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-[-0.03em]">{t.experienceTitle}</h1>
      <p className="mb-12 mt-2 text-muted-foreground">{t.experienceLead}</p>
      <CareerTimeline variant="full" />

      <section className="mt-16 border-t border-border pt-5">
        <h2 className="mb-4 text-[13px] font-semibold">{t.certsTitle}</h2>
        <ul className="flex flex-col divide-y divide-border">
          {certificates.map((certificate) => (
            <li key={certificate.name.en} className="flex items-baseline justify-between gap-4 py-2.5 text-sm">
              <span>
                <span className="font-medium">{certificate.name[lang]}</span>
                <span className="text-muted-foreground"> · {certificate.org[lang]}</span>
              </span>
              <span className="text-xs tabular-nums text-muted-foreground">{certificate.date[lang]}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
