import { ScrollArea } from '@/components/ui/scroll-area';

import { MobileNavbar } from './mobile-navbar';
import { Sidebar } from './sidebar';

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />

      <div className="w-full h-full">
        <MobileNavbar />

        <div className="w-full mx-auto h-full">
          <ScrollArea className="h-full overflow-y-auto overflow-x-hidden relative flex w-full flex-col">
            <div className="z-[1] w-full px-6 pb-32 pt-8 lg:px-8 lg:py-24">
              <div className="mx-auto w-full lg:mb-0 lg:max-w-2xl">{children}</div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
}
