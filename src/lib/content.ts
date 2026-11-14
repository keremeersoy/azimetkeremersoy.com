import type { Lang } from '@/lib/i18n';

export type L = Record<Lang, string>;

/* -------------------------------------------------------------------------- */
/*  Home                                                                       */
/* -------------------------------------------------------------------------- */

export const heroRole: L = {
  en: 'Frontend Developer at Jotform · Ankara',
  tr: "Jotform'da Frontend Developer · Ankara",
};

/** "About" for the home page. **bold** marks the phrases worth scanning for. */
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
      "**2021**'den beri web için geliştiriyorum: önce freelance, sonra bir startup'ta. Bugün **Jotform**'un **Enterprise Growth** tarafında tam zamanlı Frontend Developer olarak growth işi yapıyorum: **A/B testleri, dönüşüm oranları ve lead üretimi**. 2024'te katıldım ve stajyerlikten tam zamanlıya büyüdüm.",
      "Öncesinde 6 kişilik bir startup olan **Pepteam**'de tek web geliştiriciydim; film ve televizyon profesyonelleri için canlıda ve aktif kullanılan **SetCrews** platformunu geliştirdim. Ayrıca **GDSC KKU**'da web ekibine liderlik ettim.",
    ],
    closing:
      'Merakım beni sürekli öğrenmeye itiyor, kodun dışında ise yeni yerler keşfetmeyi seviyorum. Yeni iş birliklerine her zaman açığım; aklında bir proje varsa ya da sadece sohbet etmek istersen yaz.',
  },
};

/** Flat, curated list for the home page. */
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

/* -------------------------------------------------------------------------- */
/*  Journey (career)                                                           */
/* -------------------------------------------------------------------------- */

export interface CareerEntry {
  id: string;
  heading: L;
  sub?: L;
  org?: { name: string; url?: string; logo?: { src: string; width: number; height: number } };
  /** "YYYY-MM". `end: null` means ongoing. Omit both and set `year` for year-only entries. */
  start?: string;
  end?: string | null;
  /** Single-month event (e.g. graduation). */
  on?: string;
  year?: string;
  note?: L;
  /** Keep this entry off the home page (it still shows on the Experience page). */
  hideOnHome?: boolean;
  /** Short role line for the compact home list. */
  homeRole?: L;
  /** Experience page: each phase of a long stay, with its own dates. */
  stages?: { label: L; start: string; end: string | null; bullets: L[] }[];
  /** Full-page only: an extra opening line. */
  lead?: L;
  bullets?: L[];
  /** Full-page only: more detail on top of `bullets`. */
  more?: L[];
  tags?: string[];
  links?: { label: string; url: string }[];
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
      tr: "Enterprise Growth tarafında çalışıyorum. Amaç, Jotform Enterprise'a daha fazla müşteri ve daha nitelikli lead getirmek ve her değişikliğin dönüşüme etkisini ölçmek.",
    },
    bullets: [
      {
        en: 'I run A/B tests for Enterprise growth and measure how each change affects conversion rates.',
        tr: 'Enterprise growth için A/B testleri yürütüyor ve her değişikliğin dönüşüm oranlarına etkisini ölçüyorum.',
      },
      {
        en: 'I build landing pages for different industries pixel-perfect from Figma designs and ship them through CI/CD, to increase lead volume and quality.',
        tr: "Farklı sektörlere yönelik landing page'leri Figma tasarımlarından birebir geliştiriyor, CI/CD ile yayına alıyorum; amaç lead sayısını ve kalitesini artırmak.",
      },
      {
        en: 'I improve form experience and performance to turn more visitors into leads, and build internal tools for the team.',
        tr: 'Daha fazla ziyaretçiyi lead’e çevirmek için form deneyimini ve performansını iyileştiriyor, ekip için dahili araçlar geliştiriyorum.',
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
            tr: 'Enterprise growth için A/B testleri yürütüyor ve her değişikliğin dönüşüm oranlarına etkisini ölçüyorum.',
          },
          {
            en: 'Build landing pages for different industries pixel-perfect from Figma designs and ship them through CI/CD, to increase lead volume and quality.',
            tr: "Farklı sektörlere yönelik landing page'leri Figma tasarımlarından birebir geliştiriyor, CI/CD ile yayına alıyorum; amaç lead sayısını ve kalitesini artırmak.",
          },
          {
            en: 'Improve form experience and performance to turn more visitors into leads, and build internal tools for the team. Based in the Ankara office.',
            tr: 'Daha fazla ziyaretçiyi lead’e çevirmek için form deneyimini ve performansını iyileştiriyor, ekip için dahili araçlar geliştiriyorum. Ankara ofisinde çalışıyorum.',
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
            tr: "Okulumun yanında Enterprise Growth tarafında uzaktan çalıştım. A/B test sürecini yürüttüm: Jotform'un inline paketleriyle testleri uyguladım, çalıştırdım ve dönüşüm oranlarını artırmak için analiz ettim.",
          },
          {
            en: 'Built pixel-perfect landing pages from Figma designs through a strict CI/CD pipeline, following Git and GitHub version-control standards.',
            tr: 'Figma tasarımlarından birebir landing page’ler geliştirdim; süreç, Git ve GitHub standartlarıyla katı bir CI/CD hattından geçti.',
          },
          {
            en: 'Developed targeted campaign assets and features to attract Enterprise clients and generate leads, plus internal tools and dashboards that streamlined company operations.',
            tr: 'Enterprise müşterilerini çekmeye ve lead üretmeye yönelik hedefli kampanya varlıkları ve özellikleri, ayrıca şirket operasyonlarını hızlandıran dahili araçlar ve dashboardlar geliştirdim.',
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
            tr: '4 kişilik bir ekiple, pazarlama ekibinin geliştirici desteği olmadan içerik üretip özelleştirebildiği bir arayüz geliştirdik.',
          },
          {
            en: "Learned Jotform's proprietary technologies alongside the tools I already knew.",
            tr: "Zaten bildiğim araçların yanında Jotform'un kendi geliştirdiği teknolojilerle çalışmayı öğrendim.",
          },
        ],
      },
    ],
    tags: ['Growth', 'A/B testing', 'Conversion rate', 'Lead generation', 'JavaScript', 'Figma', 'CI/CD', 'Git'],
  },
  {
    id: 'graduation',
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
        tr: 'Ekibin tek web geliştiricisi olarak işletme sahipleri için yönetim paneli ve uygulama yöneticileri için süper admin paneli geliştirdim.',
      },
      {
        en: 'I built an internal website for managing content in the [Parently](https://parentlyai.com/) mobile app and integrated the app with the web.',
        tr: '[Parently](https://parentlyai.com/) mobil uygulamasının içerik yönetimi için dahili bir web sitesi yaptım ve uygulamayı web ile entegre ettim.',
      },
    ],
    more: [
      {
        en: 'Business owners use the dashboard to manage employee statistics, tasks, shifts and feedback.',
        tr: 'İşletme sahipleri panel üzerinden çalışan istatistiklerini, görevleri, vardiyaları ve geri bildirimleri yönetiyor.',
      },
      {
        en: 'The super admin panel lets administrators access and manage all users across the app.',
        tr: 'Süper admin paneli, yöneticilerin uygulamadaki tüm kullanıcılara erişip yönetmesini sağlıyor.',
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
      tr: 'Kulüp, 2022 akademik yılının başlamasıyla kuruldu.',
    },
    bullets: [
      {
        en: 'I led a team of developers, gave talks and presentations, and ran YouTube live sessions on web development.',
        tr: 'Geliştirici ekibine liderlik ettim; web geliştirme üzerine sunumlar yaptım, YouTube canlı yayınları düzenledim.',
      },
    ],
    more: [
      {
        en: 'Helped teammates and community members explore new technologies and best practices, and learned from them in return.',
        tr: 'Ekip arkadaşlarımın ve topluluk üyelerinin yeni teknolojileri ve en iyi pratikleri keşfetmesine yardım ettim, karşılığında onlardan da öğrendim.',
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
      tr: 'İlk freelance projem; yönetmen Sacit Altun’un isteğiyle geliştirdim.',
    },
    bullets: [
      {
        en: 'I was the sole developer of a platform where film and TV professionals connect and hold job interviews. It is live and actively used.',
        tr: 'Film ve televizyon profesyonellerinin bağlantı kurup iş görüşmesi yaptığı bir platformun tek geliştiricisiydim. Canlıda ve aktif olarak kullanılıyor.',
      },
    ],
    more: [
      {
        en: 'Kept improving the platform with new features based on user feedback.',
        tr: 'Kullanıcı geri bildirimlerine göre platformu yeni özelliklerle geliştirmeyi sürdürdüm.',
      },
    ],
    tags: ['Next.js', 'tRPC', 'TypeScript', 'Tailwind CSS', 'Prisma', 'MySQL', 'NextAuth', 'iyzico'],
  },
  {
    id: 'freelance-start',
    homeRole: { en: 'Web projects for clients · YetGen', tr: 'Müşteriler için web projeleri · YetGen' },
    heading: { en: 'Freelance', tr: 'Freelance' },
    sub: { en: 'Web projects for clients', tr: 'Müşteriler için web projeleri' },
    year: '2021',
    bullets: [
      {
        en: 'Started taking on web projects for clients while studying.',
        tr: 'Okurken müşteriler için web projeleri almaya başladım.',
      },
      {
        en: 'Completed [YetGen](https://yetkingencler.com/), a 12-week program led by Prof. Dr. Erhan Erkut: algorithm development, teamwork and social innovation.',
        tr: "Prof. Dr. Erhan Erkut'un yürüttüğü 12 haftalık [YetGen](https://yetkingencler.com/) programını tamamladım: algoritma geliştirme, ekip çalışması ve sosyal inovasyon.",
      },
    ],
    more: [
      {
        en: 'The program also covered presentation techniques, career planning and the GirişGen process.',
        tr: 'Program ayrıca sunum teknikleri, kariyer planlama ve GirişGen sürecini de kapsadı.',
      },
    ],
  },
];

export const certificates: { name: string; org: string; date: L }[] = [
  { name: 'YetGen', org: 'Yetkin Gençler', date: { en: 'Dec 2021', tr: 'Ara 2021' } },
  { name: 'Arduino Level 2 (IoT)', org: 'Mustafa Akgül Free Software Camp', date: { en: 'Jan 2020', tr: 'Oca 2020' } },
];

/* -------------------------------------------------------------------------- */
/*  Projects (copy only; tech stack icons stay in lib/data.tsx)                */
/* -------------------------------------------------------------------------- */

export interface ProjectCopy {
  short: L;
  lead: L;
  bullets: L[];
}

export const projectCopy: Record<number, ProjectCopy> = {
  // modabul
  1: {
    short: {
      en: 'A platform that connects people in need with clothing others give away for free or cheaply.',
      tr: 'İhtiyacı olanları, ücretsiz ya da uygun fiyata verilen kıyafetlerle buluşturan platform.',
    },
    lead: {
      en: 'A platform that connects people in need with clothing others give away for free or at an affordable price.',
      tr: 'İhtiyacı olan kişileri, başkalarının ücretsiz ya da uygun fiyata verdiği kıyafetlerle buluşturan bir platform.',
    },
    bullets: [
      {
        en: 'Create listings after registering, with images, titles, descriptions and product details.',
        tr: 'Kayıt olduktan sonra görsel, başlık, açıklama ve ürün detaylarıyla ilan oluşturma.',
      },
      {
        en: 'Publish your own listings or save others to find them later.',
        tr: 'Kendi ilanlarını yayınlama ya da başkalarının ilanlarını sonra bakmak üzere kaydetme.',
      },
      {
        en: 'Public one-question-one-answer Q&A between buyers and sellers under each listing.',
        tr: 'Her ilanın altında alıcı ve satıcı arasında herkese açık, tek soru tek cevap formatında soru-cevap.',
      },
      {
        en: 'Built for the Project 2 course at Kırıkkale University.',
        tr: 'Kırıkkale Üniversitesi Proje 2 dersi kapsamında geliştirildi.',
      },
    ],
  },
  // this site
  2: {
    short: {
      en: 'This portfolio, with dark mode, English and Turkish and a ⌘K palette. Open source.',
      tr: 'Bu portfolyo: koyu tema, EN/TR ve ⌘K paleti ile. Açık kaynak.',
    },
    lead: {
      en: 'This portfolio: where I show my professional experience, skills and projects.',
      tr: 'Bu portfolyo: profesyonel deneyimimi, becerilerimi ve projelerimi gösterdiğim yer.',
    },
    bullets: [
      {
        en: 'Clean, modern and responsive, with dark mode, English and Turkish, and a ⌘K command palette.',
        tr: 'Temiz, modern ve responsive; koyu tema, İngilizce ve Türkçe dil desteği ve ⌘K komut paleti ile.',
      },
      { en: 'Hosted on Vercel; open source on GitHub.', tr: "Vercel'de yayında; GitHub'da açık kaynak." },
    ],
  },
  // azy-stack
  3: {
    short: {
      en: 'Full-stack starter on Next.js 16 and React 19 with auth, database and forms ready.',
      tr: 'Next.js 16 ve React 19 ile full-stack şablon: auth, veritabanı ve formlar hazır.',
    },
    lead: {
      en: 'A robust, modern full-stack starter template built with Next.js 16, React 19 and Tailwind CSS 4.',
      tr: 'Next.js 16, React 19 ve Tailwind CSS 4 ile geliştirilmiş sağlam, modern bir full-stack başlangıç şablonu.',
    },
    bullets: [
      {
        en: 'Pre-configured with industry-standard tools for authentication, database management, form handling and UI components.',
        tr: 'Kimlik doğrulama, veritabanı yönetimi, form yönetimi ve UI bileşenleri için sektör standardı araçlarla hazır geliyor.',
      },
      {
        en: 'Lets you focus on building features immediately.',
        tr: 'Doğrudan özellik geliştirmeye odaklanmanı sağlıyor.',
      },
    ],
  },
};
