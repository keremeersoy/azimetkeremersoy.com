'use client';

import { projects } from '@/content/projects';
import { useLang } from '@/i18n/provider';

import { ProjectCard } from './project-card';

export function ProjectsPage() {
  const { t } = useLang();

  return (
    <div>
      <h1 className="mb-8 text-3xl font-semibold tracking-[-0.03em]">{t.projectsTitle}</h1>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
