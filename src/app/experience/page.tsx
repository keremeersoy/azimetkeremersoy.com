import { ExperiencePage as Content } from '@/components/experience-page';
import type { Metadata } from 'next';
import defaultMetadata from '../metadata';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Experience',
  description:
    'Explore my professional experience in web development, including roles at Jotform and Pepteam and freelance projects.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Experience | Azimet Kerem Ersoy',
    description:
      'Explore my professional experience in web development, including roles at Jotform and Pepteam and freelance projects.',
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'Experience | Azimet Kerem Ersoy',
    description:
      'Explore my professional experience in web development, including roles at Jotform and Pepteam and freelance projects.',
  },
};

const ExperiencePage = () => {
  return <Content />;
};

export default ExperiencePage;
