'use client';

import { Chip } from '@/components/common/chip';
import type { Project } from '@/content/projects';
import { useLang } from '@/i18n/provider';

export function ProjectTeaser({ project }: { project: Project }) {
  const { lang } = useLang();

  return (
    <li className="flex flex-col rounded-2xl border border-border p-4">
      <h3 className="text-[15px] font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-muted-foreground">{project.short[lang]}</p>
      <div className="mt-3 flex flex-wrap gap-1">
        {project.techStack.slice(0, 2).map((tech) => (
          <Chip key={tech.name} className="text-[11px]">
            {tech.name}
          </Chip>
        ))}
      </div>
    </li>
  );
}
