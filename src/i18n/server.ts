import { cookies, headers } from 'next/headers';

import { isLang, LANG_COOKIE, type Lang } from './config';

/** Saved choice first, then the browser's preferred language, then English. */
export function getRequestLang(): Lang {
  const saved = cookies().get(LANG_COOKIE)?.value;
  if (isLang(saved)) return saved;
  return headers().get('accept-language')?.toLowerCase().startsWith('tr') ? 'tr' : 'en';
}
