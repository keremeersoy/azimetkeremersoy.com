import { HomeContent } from '@/components/home-content';
import type { Metadata } from 'next';
import defaultMetadata from './metadata';
import { personSchema, websiteSchema } from '@/lib/schema';
import Script from 'next/script';

export const metadata: Metadata = {
  ...defaultMetadata,
  openGraph: {
    ...defaultMetadata.openGraph,
    description:
      'Full-stack web developer specializing in Next.js, TypeScript, and modern web technologies. Experienced in building responsive and scalable web applications.',
  },
  twitter: {
    ...defaultMetadata.twitter,
    description:
      'Full-stack web developer specializing in Next.js, TypeScript, and modern web technologies. Experienced in building responsive and scalable web applications.',
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HomeContent />
    </>
  );
}
