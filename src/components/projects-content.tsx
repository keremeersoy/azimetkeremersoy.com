'use client';

import ProjectCard from '@/components/project-card';
import { projects_data } from '@/lib/data';
import { useLang } from '@/lib/i18n';

export function ProjectsContent() {
  const { t } = useLang();
  return (
    <div>
      <h1 className="mb-8 text-3xl font-semibold tracking-[-0.03em]">{t.projectsTitle}</h1>
      <div className="flex flex-col gap-4">
        {projects_data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
