'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

import { CareerTimeline } from '@/components/career-timeline';
import { Chip } from '@/components/chip';
import { Reveal } from '@/components/reveal';
import { PROFILES } from '@/lib/constants';
import { heroRole, homeAbout, projectCopy, stack } from '@/lib/content';
import { Project, projects_data } from '@/lib/data';
import { useLang } from '@/lib/i18n';

function Section({
  title,
  action,
  children,
}: {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section className="border-t border-border pt-5">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-[13px] font-semibold">{title}</h2>
          {action}
        </div>
        {children}
      </section>
    </Reveal>
  );
}

function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split('**').map((part, i) =>
        i % 2 ? (
          <strong key={i} className="font-medium text-foreground">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}

const moreLink =
  'inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground';

function ProjectTeaser({ project }: { project: Project }) {
  const { lang } = useLang();
  const copy = projectCopy[project.id];
  return (
    <li className="flex flex-col rounded-2xl border border-border p-4">
      <h3 className="text-[15px] font-semibold tracking-tight">{project.title}</h3>
      {copy && <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-muted-foreground">{copy.short[lang]}</p>}
      <div className="mt-3 flex flex-wrap gap-1">
        {project.tech_stack.slice(0, 2).map((t) => (
          <Chip key={t.id} className="text-[11px]">
            {t.name}
          </Chip>
        ))}
      </div>
    </li>
  );
}

// modabul, azy-stack, this site
const projectOrder = [1, 3, 2];

export function HomeContent() {
  const { t, lang } = useLang();
  const projects = projectOrder.map((id) => projects_data.find((p) => p.id === id)!).filter(Boolean);

  return (
    <main className="flex flex-col gap-16">
      <div>
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
              <a
                href={PROFILES.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-3.5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
              <a
                href={PROFILES.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-3.5 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                <Github size={15} />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 max-w-xl">
          <p className="text-xl leading-snug tracking-[-0.02em] text-muted-foreground sm:text-[22px]">
            <Rich text={homeAbout[lang].lead} />
          </p>
          <div className="mt-6 flex flex-col gap-4 text-[15.5px] leading-[1.7] text-muted-foreground">
            {homeAbout[lang].body.map((p, i) => (
              <Reveal key={i} delay={i * 120}>
                <p>
                  <Rich text={p} />
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={240}>
            <p className="mt-6 border-l-2 border-border pl-4 text-[15px] leading-[1.7] text-muted-foreground">
              {homeAbout[lang].closing}
            </p>
          </Reveal>
        </div>
      </div>

      <Section
        title={t.journeyTitle}
        action={
          <Link href="/experience" className={moreLink}>
            {t.seeAll} <ArrowRight size={14} />
          </Link>
        }
      >
        <CareerTimeline />
      </Section>

      <Section
        title={t.projectsTitle}
        action={
          <Link href="/projects" className={moreLink}>
            {t.viewAll} <ArrowRight size={14} />
          </Link>
        }
      >
        <ul className="grid gap-3 sm:grid-cols-3">
          {projects.map((p) => (
            <ProjectTeaser key={p.id} project={p} />
          ))}
        </ul>
      </Section>

      <Section title={t.stackTitle}>
        <div className="flex flex-wrap gap-1.5">
          {stack.map((s) => (
            <Chip key={s} className="px-2.5 py-1 text-[13px]">
              {s}
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
          azimetkeremersoy@gmail.com
        </a>
      </footer>
    </main>
  );
}
