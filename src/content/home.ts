import type { Lang } from '@/i18n/config';

import type { Localized } from './types';

export const heroRole: Localized = {
  en: 'Frontend Developer at Jotform · Ankara',
  tr: "Jotform'da Frontend Developer · Ankara",
};

/** `**bold**` marks the phrases worth scanning for. */
export const homeAbout: Record<Lang, { lead: string; body: string[]; closing: string }> = {
  en: {
    lead: "I'm a **computer engineer** and **frontend developer** based in Ankara.",
    body: [
      "I've been building for the web since **2021**, first as a freelancer and then at a startup. Today I am a full-time Frontend Developer on **Jotform**'s **Enterprise Growth** side, doing growth work: **A/B testing, conversion rates and lead generation**. I joined in 2024 and grew from intern to full-time.",
      'Before that I was the sole web developer at **Pepteam**, a 6-person startup, and built **SetCrews**, a platform for film and TV professionals that is live and actively used. I also led the web team at **GDSC KKU**.',
    ],
    closing:
      "Curiosity keeps me learning, and outside of code I love exploring new places. I'm always open to new collaborations, so reach out if you have a project in mind or just want to chat.",
  },
  tr: {
    lead: "Ankara'da çalışan bir **bilgisayar mühendisi** ve **frontend developer**'ım.",
    body: [
      "Web geliştirmeye **2021**'de başladım; önce freelance çalıştım, sonra bir startup'ta yer aldım. Bugün **Jotform**'un **Enterprise Growth** tarafında tam zamanlı frontend developer olarak çalışıyorum. İşim growth odaklı: **A/B testleri, dönüşüm oranları ve lead üretimi**. Buraya 2024'te stajyer olarak girdim, şimdi aynı yerde tam zamanlıyım.",
      "Daha önce 6 kişilik bir startup olan **Pepteam**'de tek web geliştiriciydim. Film ve televizyon sektörü için yaptığım **SetCrews** platformu da hâlâ canlıda ve kullanılıyor. Bunların yanında **GDSC KKU**'da web ekibini yönettim.",
    ],
    closing:
      'Yeni şeyler öğrenmeyi seviyorum, kod dışında da yeni yerler keşfetmeyi. Aklında bir proje varsa ya da sadece sohbet etmek istersen yaz.',
  },
};

export const stack = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Shadcn UI',
  'Firebase',
  'Prisma',
  'Figma',
  'CI/CD',
  'A/B testing',
];
