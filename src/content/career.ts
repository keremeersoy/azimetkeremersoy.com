import type { Localized } from './types';

export type CareerIcon = 'education' | 'freelance';

export interface CareerEntry {
  id: string;
  heading: Localized;
  sub?: Localized;
  /** Shown in place of a company logo. */
  icon?: CareerIcon;
  org?: { name: string; url?: string; logo?: { src: string; width: number; height: number } };
  /** 'YYYY-MM'. `end: null` means ongoing. Year-only entries set `year` instead. */
  start?: string;
  end?: string | null;
  on?: string;
  year?: string;
  note?: Localized;
  /** Keep this entry off the home page (it still shows on the Experience page). */
  hideOnHome?: boolean;
  /** Short role line for the compact home list. */
  homeRole?: Localized;
  /** Experience page: each phase of a long stay, with its own dates. */
  stages?: { label: Localized; start: string; end: string | null; bullets: Localized[] }[];
  /** Full-page only: an extra opening line. */
  lead?: Localized;
  bullets?: Localized[];
  /** Full-page only: more detail on top of `bullets`. */
  more?: Localized[];
  tags?: string[];
}

export const career: CareerEntry[] = [
  {
    id: 'jotform',
    heading: { en: 'Jotform', tr: 'Jotform' },
    sub: { en: 'Frontend Developer · Ankara', tr: 'Frontend Developer · Ankara' },
    homeRole: { en: 'Frontend Developer · Full-time', tr: 'Frontend Developer · Tam zamanlı' },
    org: { name: 'Jotform', url: 'https://www.jotform.com/', logo: { src: '/logos/jotform.png', width: 192, height: 192 } },
    start: '2024-08',
    end: null,
    lead: {
      en: 'I work on the Enterprise Growth side. The goal is to bring more customers and better leads to Jotform Enterprise, and to measure how every change affects conversion.',
      tr: "Enterprise Growth tarafında çalışıyorum. Hedefimiz, Jotform Enterprise'a daha fazla müşteri ve daha nitelikli lead kazandırmak; yaptığımız her değişikliğin dönüşüme etkisini de ölçüyoruz.",
    },
    bullets: [
      {
        en: 'I run A/B tests for Enterprise growth and measure how each change affects conversion rates.',
        tr: 'Enterprise growth kapsamında A/B testleri kuruyor, her değişikliğin dönüşüm oranına etkisini ölçüyorum.',
      },
      {
        en: 'I build landing pages for different industries pixel-perfect from Figma designs and ship them through CI/CD, to increase lead volume and quality.',
        tr: "Farklı sektörlere özel landing page'leri Figma tasarımlarından birebir kodlayıp CI/CD ile yayına alıyorum. Amaç, lead sayısını ve kalitesini artırmak.",
      },
      {
        en: 'I improve form experience and performance to turn more visitors into leads, and build internal tools for the team.',
        tr: "Daha çok ziyaretçiyi lead'e dönüştürmek için form deneyimini ve performansını iyileştiriyorum. Ekip için şirket içi araçlar da geliştiriyorum.",
      },
    ],
    stages: [
      {
        label: { en: 'Full-time', tr: 'Tam zamanlı' },
        start: '2026-03',
        end: null,
        bullets: [
          {
            en: 'Run A/B tests for Enterprise growth and measure how each change affects conversion rates.',
            tr: 'Enterprise growth kapsamında A/B testleri kuruyor, her değişikliğin dönüşüm oranına etkisini ölçüyorum.',
          },
          {
            en: 'Build landing pages for different industries pixel-perfect from Figma designs and ship them through CI/CD, to increase lead volume and quality.',
            tr: "Farklı sektörlere özel landing page'leri Figma tasarımlarından birebir kodlayıp CI/CD ile yayına alıyorum. Amaç, lead sayısını ve kalitesini artırmak.",
          },
          {
            en: 'Improve form experience and performance to turn more visitors into leads, and build internal tools for the team. Based in the Ankara office.',
            tr: "Daha çok ziyaretçiyi lead'e dönüştürmek için form deneyimini ve performansını iyileştiriyorum. Ekip için şirket içi araçlar da geliştiriyorum. Ankara ofisinde çalışıyorum.",
          },
        ],
      },
      {
        label: { en: 'Part-time', tr: 'Yarı zamanlı' },
        start: '2024-11',
        end: '2026-03',
        bullets: [
          {
            en: "Worked remotely on the Enterprise Growth side alongside my degree. Ran the A/B testing lifecycle: implemented, ran and analyzed tests with Jotform's inline packages to raise conversion rates.",
            tr: "Okulun yanında Enterprise Growth tarafında uzaktan çalıştım. A/B test sürecinin tamamında yer aldım: Jotform'un inline paketleriyle testleri kurdum, yayına aldım ve dönüşüm oranını artırmak için sonuçları analiz ettim.",
          },
          {
            en: 'Built pixel-perfect landing pages from Figma designs through a strict CI/CD pipeline, following Git and GitHub version-control standards.',
            tr: "Figma tasarımlarından birebir landing page'ler geliştirdim. Süreç, Git ve GitHub kurallarına uyan sıkı bir CI/CD hattından geçiyordu.",
          },
          {
            en: 'Developed targeted campaign assets and features to attract Enterprise clients and generate leads, plus internal tools and dashboards that streamlined company operations.',
            tr: "Enterprise müşterisi çekmeye ve lead üretmeye yönelik kampanya içerikleri ve özellikler geliştirdim. Bunun yanında şirket içi araçlar ve dashboard'lar yaptım.",
          },
        ],
      },
      {
        label: { en: 'Intern', tr: 'Stajyer' },
        start: '2024-08',
        end: '2024-10',
        bullets: [
          {
            en: 'With a 4-person team, built an interface that lets the marketing team create and customize assets without developer help.',
            tr: '4 kişilik bir ekiple, pazarlama ekibinin geliştiriciye ihtiyaç duymadan içerik hazırlayıp özelleştirebildiği bir arayüz geliştirdik.',
          },
          {
            en: "Learned Jotform's proprietary technologies alongside the tools I already knew.",
            tr: "Zaten bildiğim araçlara ek olarak Jotform'un kendi teknolojileriyle çalışmayı öğrendim.",
          },
        ],
      },
    ],
    tags: ['Growth', 'A/B testing', 'Conversion rate', 'Lead generation', 'JavaScript', 'Figma', 'CI/CD', 'Git'],
  },
  {
    id: 'graduation',
    icon: 'education',
    hideOnHome: true,
    homeRole: { en: 'Kırıkkale University', tr: 'Kırıkkale Üniversitesi' },
    heading: { en: 'Computer Engineering, B.Sc.', tr: 'Bilgisayar Mühendisliği, Lisans' },
    sub: { en: 'Kırıkkale University', tr: 'Kırıkkale Üniversitesi' },
    start: '2021-09',
    end: '2026-01',
  },
  {
    id: 'pepteam',
    homeRole: { en: 'Web Developer', tr: 'Web Developer' },
    heading: { en: 'Pepteam', tr: 'Pepteam' },
    sub: { en: 'Web Developer · 6-person startup', tr: 'Web Developer · 6 kişilik startup' },
    org: { name: 'Pepteam', url: 'https://www.pepteam.net', logo: { src: '/logos/pepteam.png', width: 192, height: 192 } },
    start: '2023-05',
    end: '2024-11',
    bullets: [
      {
        en: 'As the sole web developer, I built an admin dashboard for business owners and a super admin panel for app administrators.',
        tr: 'Ekibin tek web geliştiricisi olarak işletme sahipleri için bir yönetim paneli, uygulama yöneticileri için de süper admin paneli geliştirdim.',
      },
      {
        en: 'I built an internal website for managing content in the [Parently](https://parentlyai.com/) mobile app and integrated the app with the web.',
        tr: '[Parently](https://parentlyai.com/) mobil uygulamasının içeriklerini yönetmek için şirket içi bir web sitesi yaptım ve uygulamayı web ile entegre ettim.',
      },
    ],
    more: [
      {
        en: 'Business owners use the dashboard to manage employee statistics, tasks, shifts and feedback.',
        tr: 'İşletme sahipleri panelden çalışanlarının istatistiklerini, görevlerini, vardiyalarını ve geri bildirimlerini yönetiyor.',
      },
      {
        en: 'The super admin panel lets administrators access and manage all users across the app.',
        tr: 'Süper admin paneli, yöneticilerin uygulamadaki tüm kullanıcılara ulaşıp yönetmesini sağlıyor.',
      },
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Material UI', 'Redux Toolkit', 'Firebase', 'Paddle'],
  },
  {
    id: 'gdsc',
    homeRole: { en: 'Web Team Lead · Volunteer', tr: 'Web Team Lead · Gönüllü' },
    heading: { en: 'GDSC Kırıkkale', tr: 'GDSC Kırıkkale' },
    sub: { en: 'Web Team Lead · Google Developer Student Club', tr: 'Web Team Lead · Google Developer Student Club' },
    org: { name: 'GDSC KKU', url: 'https://www.linkedin.com/company/gdsc-kku/', logo: { src: '/logos/gdsc.png', width: 256, height: 121 } },
    start: '2022-10',
    end: '2024-07',
    note: { en: 'Volunteer', tr: 'Gönüllü' },
    lead: {
      en: 'The club was established with the start of the 2022 academic year.',
      tr: "Kulüp, 2022'de akademik yılın başlamasıyla kuruldu.",
    },
    bullets: [
      {
        en: 'I led a team of developers, gave talks and presentations, and ran YouTube live sessions on web development.',
        tr: "Geliştiricilerden oluşan bir ekibe liderlik ettim; web geliştirme üzerine sunumlar yaptım, YouTube'da canlı yayınlar düzenledim.",
      },
    ],
    more: [
      {
        en: 'Helped teammates and community members explore new technologies and best practices, and learned from them in return.',
        tr: 'Ekip arkadaşlarımın ve topluluktakilerin yeni teknolojileri ve iyi uygulamaları öğrenmesine destek oldum, ben de onlardan çok şey öğrendim.',
      },
    ],
  },
  {
    id: 'setcrews',
    homeRole: { en: 'Freelance full stack developer', tr: 'Freelance full stack developer' },
    heading: { en: 'SetCrews', tr: 'SetCrews' },
    sub: { en: 'Freelance · Full stack development', tr: 'Freelance · Full stack geliştirme' },
    org: { name: 'SetCrews', logo: { src: '/logos/setcrews.png', width: 256, height: 256 } },
    start: '2022-08',
    end: '2023-01',
    lead: {
      en: 'My first freelance project, built at the request of director Sacit Altun.',
      tr: "İlk freelance projem. Yönetmen Sacit Altun'un isteğiyle geliştirdim.",
    },
    bullets: [
      {
        en: 'I was the sole developer of a platform where film and TV professionals connect and hold job interviews. It is live and actively used.',
        tr: 'Film ve televizyon profesyonellerinin tanışıp iş görüşmesi yapabildiği bir platformun tek geliştiricisiydim. Platform şu an canlıda ve kullanılıyor.',
      },
    ],
    more: [
      {
        en: 'Kept improving the platform with new features based on user feedback.',
        tr: 'Kullanıcı geri bildirimlerine göre platforma yeni özellikler eklemeye devam ettim.',
      },
    ],
    tags: ['Next.js', 'tRPC', 'TypeScript', 'Tailwind CSS', 'Prisma', 'MySQL', 'NextAuth', 'iyzico'],
  },
  {
    id: 'freelance-start',
    icon: 'freelance',
    homeRole: { en: 'Web projects for clients · YetGen', tr: 'Müşteriler için web projeleri · YetGen' },
    heading: { en: 'Freelance', tr: 'Freelance' },
    sub: { en: 'Web projects for clients', tr: 'Müşteriler için web projeleri' },
    year: '2021',
    bullets: [
      {
        en: 'Started taking on web projects for clients while studying.',
        tr: 'Okurken müşteriler için web projeleri yapmaya başladım.',
      },
      {
        en: 'Completed [YetGen](https://yetkingencler.com/), a 12-week program led by Prof. Dr. Erhan Erkut: algorithm development, teamwork and social innovation.',
        tr: "Prof. Dr. Erhan Erkut'un yürüttüğü 12 haftalık [YetGen](https://yetkingencler.com/) programını tamamladım. Programda algoritma geliştirme, ekip çalışması ve sosyal inovasyon üzerine çalıştık.",
      },
    ],
    more: [
      {
        en: 'The program also covered presentation techniques, career planning and the GirişGen process.',
        tr: 'Program ayrıca sunum teknikleri, kariyer planlama ve GirişGen sürecini de içeriyordu.',
      },
    ],
  },
];
