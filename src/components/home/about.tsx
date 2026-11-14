'use client';

import { Reveal } from '@/components/common/reveal';
import { RichText } from '@/components/common/rich-text';
import { homeAbout } from '@/content/home';
import { useLang } from '@/i18n/provider';

export function About() {
  const { lang } = useLang();
  const { lead, body, closing } = homeAbout[lang];

  return (
    <div className="mt-10 max-w-xl">
      <p className="text-xl leading-snug tracking-[-0.02em] text-muted-foreground sm:text-[22px]">
        <RichText text={lead} />
      </p>
      <div className="mt-6 flex flex-col gap-4 text-[15.5px] leading-[1.7] text-muted-foreground">
        {body.map((paragraph, index) => (
          <Reveal key={index} delay={index * 120}>
            <p>
              <RichText text={paragraph} />
            </p>
          </Reveal>
        ))}
      </div>
      <Reveal delay={240}>
        <p className="mt-6 border-l-2 border-border pl-4 text-[15px] leading-[1.7] text-muted-foreground">{closing}</p>
      </Reveal>
    </div>
  );
}
