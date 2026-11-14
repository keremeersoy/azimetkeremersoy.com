export type Lang = 'en' | 'tr';

export const LANG_COOKIE = 'lang';

export const isLang = (value: unknown): value is Lang => value === 'en' || value === 'tr';
