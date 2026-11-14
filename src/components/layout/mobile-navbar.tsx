'use client';

import { DialogTitle } from '@radix-ui/react-dialog';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useLang } from '@/i18n/provider';

import { SidebarContent } from './sidebar-content';

export function MobileNavbar() {
  const { t } = useLang();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky inset-x-0 top-0 z-10 mx-auto flex h-12 w-full shrink-0 items-center overflow-hidden border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-sm font-medium lg:hidden">
      <div className="flex justify-between w-full max-w-5xl mx-auto px-4 items-center">
        <Link href="/" className="inline-flex items-center gap-2 p-2 text-xs">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/avatar.jpg" alt="Azimet Kerem Ersoy" />
            <AvatarFallback>KE</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight">Azimet Kerem Ersoy</span>
            <span className="text-muted-foreground">{t.role}</span>
          </div>
        </Link>

        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-11"
              aria-label={t.menu}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={20} aria-hidden />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-4/5">
            <DialogTitle className="sr-only">{t.menu}</DialogTitle>
            <div className="overflow-y-auto p-4">
              <SidebarContent className="flex w-full flex-col text-sm" onNavigate={() => setIsOpen(false)} />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
