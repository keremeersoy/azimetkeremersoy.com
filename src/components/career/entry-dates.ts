import type { CareerEntry } from '@/content/career';
import type { Lang } from '@/i18n/config';
import { formatDuration, formatMonth, formatRange } from '@/lib/dates';

/** The date range and duration shown next to a career entry. */
export function getEntryDates(entry: CareerEntry, lang: Lang) {
  if (entry.start !== undefined) {
    return {
      range: formatRange(entry.start, entry.end ?? null, lang),
      duration: formatDuration(entry.start, entry.end ?? null, lang),
    };
  }
  if (entry.on) return { range: formatMonth(entry.on, lang), duration: '' };
  return { range: entry.year ?? '', duration: '' };
}
