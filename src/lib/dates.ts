import type { Lang } from '@/i18n/config';

type YM = string; // "YYYY-MM"

const parse = (ym: YM) => {
  const [y, m] = ym.split('-').map(Number);
  return { y, m };
};

const locale = (lang: Lang) => (lang === 'tr' ? 'tr-TR' : 'en-US');

/** "2024-08" -> "Aug 2024" / "Ağu 2024" */
export function formatMonth(ym: YM, lang: Lang): string {
  const { y, m } = parse(ym);
  return new Intl.DateTimeFormat(locale(lang), { month: 'short', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(Date.UTC(y, m - 1, 1)))
    .replace('.', '');
}

/** "Aug 2024 – Present" / "May 2023 – Nov 2024" */
export function formatRange(start: YM, end: YM | null, lang: Lang): string {
  const present = lang === 'tr' ? 'Şimdi' : 'Present';
  return `${formatMonth(start, lang)} – ${end ? formatMonth(end, lang) : present}`;
}

/**
 * Inclusive month count, the way LinkedIn counts it:
 * "2023-05" to "2024-11" is 1 yr 7 mos.
 */
export function formatDuration(start: YM, end: YM | null, lang: Lang, now = new Date()): string {
  const a = parse(start);
  const b = end ? parse(end) : { y: now.getFullYear(), m: now.getMonth() + 1 };
  const total = (b.y - a.y) * 12 + (b.m - a.m) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;

  const parts: string[] = [];
  if (lang === 'tr') {
    if (years) parts.push(`${years} yıl`);
    if (months) parts.push(`${months} ay`);
  } else {
    if (years) parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`);
    if (months) parts.push(`${months} ${months === 1 ? 'mo' : 'mos'}`);
  }
  return parts.join(' ');
}
