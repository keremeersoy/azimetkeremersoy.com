import Script from 'next/script';

import { HomePage } from '@/components/home/home-page';
import { homeMetadata } from '@/lib/metadata';
import { personSchema, websiteSchema } from '@/lib/schema';

export const metadata = homeMetadata;

export default function Page() {
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
      <HomePage />
    </>
  );
}
