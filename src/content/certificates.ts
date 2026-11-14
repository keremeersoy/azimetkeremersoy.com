import type { Localized } from './types';

export const certificates: { name: Localized; org: Localized; date: Localized }[] = [
  {
    name: { en: 'YetGen', tr: 'YetGen' },
    org: { en: 'Yetkin Gençler', tr: 'Yetkin Gençler' },
    date: { en: 'Dec 2021', tr: 'Ara 2021' },
  },
  {
    name: { en: 'Arduino Level 2 (IoT)', tr: 'Arduino 2. Düzey (IoT)' },
    org: { en: 'Mustafa Akgül Free Software Camp', tr: 'Mustafa Akgül Özgür Yazılım Kampı' },
    date: { en: 'Jan 2020', tr: 'Oca 2020' },
  },
];
