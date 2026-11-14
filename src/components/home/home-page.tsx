'use client';

import { CareerTimeline } from '@/components/career/career-timeline';
import { Chip } from '@/components/common/chip';
import { EMAIL, PROFILES } from '@/content/profiles';
import { stack } from '@/content/home';
import { projects } from '@/content/projects';
import { useLang } from '@/i18n/provider';

import { About } from './about';
import { Hero } from './hero';
import { ProjectTeaser } from './project-teaser';
import { Section } from './section';
import { SectionLink } from './section-link';

export function HomePage() {
  const { t } = useLang();

  return (
    <main className="flex flex-col gap-16">
      <div>
        <Hero />
        <About />
      </div>

      <Section title={t.journeyTitle} action={<SectionLink href="/experience">{t.seeAll}</SectionLink>}>
        <CareerTimeline />
      </Section>

      <Section title={t.projectsTitle} action={<SectionLink href="/projects">{t.viewAll}</SectionLink>}>
        <ul className="grid gap-3 sm:grid-cols-3">
          {projects.map((project) => (
            <ProjectTeaser key={project.slug} project={project} />
          ))}
        </ul>
      </Section>

      <Section title={t.stackTitle}>
        <div className="flex flex-wrap gap-1.5">
          {stack.map((item) => (
            <Chip key={item} className="px-2.5 py-1 text-[13px]">
              {item}
            </Chip>
          ))}
        </div>
      </Section>

      <footer className="border-t border-border pt-5 text-sm text-muted-foreground">
        {t.contactLine}{' '}
        <a
          href={PROFILES.mail.url}
          className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
        >
          {EMAIL}
        </a>
      </footer>
    </main>
  );
}
