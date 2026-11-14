'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

import { Chip } from '@/components/chip';
import { projectCopy } from '@/lib/content';
import { Icons, Project } from '@/lib/data';
import { useLang } from '@/lib/i18n';

const linkClass =
  'inline-flex items-center gap-0.5 text-sm text-muted-foreground transition-colors hover:text-foreground';

const ProjectCard = ({ project }: { project: Project }) => {
  const { lang, t } = useLang();
  const copy = projectCopy[project.id];

  return (
    <article className="rounded-xl border border-border p-5">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-lg font-semibold tracking-tight">{project.title}</h2>
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

      {copy && (
        <>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy.lead[lang]}</p>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm leading-relaxed">
            {copy.bullets.map((b, i) => (
              <li key={i} className="flex gap-2.5">
                <span aria-hidden className="mt-[9px] size-1 shrink-0 rounded-full bg-muted-foreground/60" />
                <span>{b[lang]}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech_stack.map((tech) => {
          const IconComponent = tech.icon ? Icons[tech.icon as keyof typeof Icons] : undefined;
          return (
            <Chip key={tech.id} className="gap-1.5">
              {IconComponent && React.createElement(IconComponent, { width: 12, height: 12 })}
              {tech.name}
            </Chip>
          );
        })}
      </div>
    </article>
  );
};

export default ProjectCard;
