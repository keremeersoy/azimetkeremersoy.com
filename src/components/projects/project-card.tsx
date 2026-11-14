'use client';

import { ArrowUpRight } from 'lucide-react';

import { Chip } from '@/components/common/chip';
import type { Project } from '@/content/projects';
import { useLang } from '@/i18n/provider';

import { techIcons } from './tech-icons';

// The negative margins enlarge the tap area without changing the layout.
const linkClass =
  '-mx-2 -my-3 inline-flex items-center gap-0.5 px-2 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground';

export function ProjectCard({ project }: { project: Project }) {
  const { lang, t } = useLang();

  return (
    <article className="rounded-xl border border-border p-5">
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
        <h2 className="min-w-0 break-words text-lg font-semibold tracking-tight">{project.title}</h2>
        <div className="flex shrink-0 gap-4 pt-1">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {t.viewSite} <ArrowUpRight size={13} />
            </a>
          )}
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {t.viewCode} <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.lead[lang]}</p>
      <ul className="mt-3 flex flex-col gap-1.5 text-sm leading-relaxed">
        {project.bullets.map((bullet, index) => (
          <li key={index} className="flex gap-2.5">
            <span aria-hidden className="mt-[9px] size-1 shrink-0 rounded-full bg-muted-foreground/60" />
            <span>{bullet[lang]}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => {
          const Icon = techIcons[tech.icon];
          return (
            <Chip key={tech.name} className="gap-1.5">
              <Icon width={12} height={12} />
              {tech.name}
            </Chip>
          );
        })}
      </div>
    </article>
  );
}
