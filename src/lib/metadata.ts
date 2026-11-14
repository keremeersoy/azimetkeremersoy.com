import type { Metadata } from 'next';

import { OG_IMAGE_PATH, SITE_NAME, SITE_SUMMARY, SITE_URL } from '@/lib/site';

const DEFAULT_TITLE = `${SITE_NAME} | Web Developer & Software Engineer`;
const TWITTER_HANDLE = '@keremeersoy';

const ogImage = { url: OG_IMAGE_PATH, width: 800, height: 600, alt: SITE_NAME };

const pageDefaults: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_SUMMARY,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [ogImage],
  },
  twitter: { card: 'summary_large_image', images: [OG_IMAGE_PATH], creator: TWITTER_HANDLE },
  robots: { index: true, follow: true },
};

const ROOT_DESCRIPTION = `${SITE_SUMMARY} Check out my portfolio, projects and experience.`;

/** Site-wide defaults, applied by the root layout. */
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: ROOT_DESCRIPTION,
  keywords:
    'Azimet Kerem Ersoy, Web Developer, Full Stack Developer, Next.js Developer, TypeScript, React, Software Engineer, Frontend Developer',
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: ROOT_DESCRIPTION,
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: SITE_SUMMARY,
    images: [OG_IMAGE_PATH],
    creator: TWITTER_HANDLE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const HOME_SHARE_DESCRIPTION = `${SITE_SUMMARY} Experienced in building responsive and scalable web applications.`;

export const homeMetadata: Metadata = {
  ...pageDefaults,
  openGraph: { ...pageDefaults.openGraph, description: HOME_SHARE_DESCRIPTION },
  twitter: { ...pageDefaults.twitter, description: HOME_SHARE_DESCRIPTION },
};

export function pageMetadata({ title, description }: { title: string; description: string }): Metadata {
  const shareTitle = `${title} | ${SITE_NAME}`;
  return {
    ...pageDefaults,
    title,
    description,
    openGraph: { ...pageDefaults.openGraph, title: shareTitle, description },
    twitter: { ...pageDefaults.twitter, title: shareTitle, description },
  };
}
