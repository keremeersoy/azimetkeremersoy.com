import { ProjectsContent } from '@/components/projects-content';
import type { Metadata } from 'next';
import defaultMetadata from '../metadata';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Projects',
  description: 'Check out my latest web development projects using Next.js, TypeScript, and modern web technologies.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Projects | Azimet Kerem Ersoy',
    description: 'Check out my latest web development projects using Next.js, TypeScript, and modern web technologies.',
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'Projects | Azimet Kerem Ersoy',
    description: 'Check out my latest web development projects using Next.js, TypeScript, and modern web technologies.',
  },
};

const ProjectsPage = () => {
  return <ProjectsContent />;
};

export default ProjectsPage;
