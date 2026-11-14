import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/lib/site';

const ROUTES = ['', '/experience', '/projects'];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
