import type { Person, WebSite, WithContext } from 'schema-dts';

import { EMAIL, PROFILES } from '@/content/profiles';
import { OG_IMAGE_PATH, SITE_NAME, SITE_SUMMARY, SITE_URL } from '@/lib/site';

export const websiteSchema: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_SUMMARY,
};

export const personSchema: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_NAME,
  jobTitle: 'Web Developer',
  url: SITE_URL,
  sameAs: [PROFILES.github.url, PROFILES.linkedin.url, PROFILES.medium.url],
  image: `${SITE_URL}${OG_IMAGE_PATH}`,
  email: EMAIL,
  description: SITE_SUMMARY,
  worksFor: {
    '@type': 'Organization',
    name: 'Pepteam',
    url: 'https://pepteam.net',
  },
  alumniOf: {
    '@type': 'Organization',
    name: 'Kırıkkale University',
    url: 'https://kku.edu.tr',
  },
};
