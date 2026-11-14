import { GeistSans } from 'geist/font/sans';

import { AppShell } from '@/components/layout/app-shell';
import { Providers } from '@/components/providers';
import { getRequestLang } from '@/i18n/server';
import { rootMetadata } from '@/lib/metadata';
import { cn } from '@/lib/utils';

import './globals.css';

export const metadata = rootMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = getRequestLang();

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={cn('h-screen w-full flex', GeistSans.className)}>
        <Providers lang={lang}>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
