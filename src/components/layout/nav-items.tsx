import { Folders, Home, ScrollText } from 'lucide-react';

/** Shared by the sidebar and the command palette. */
export const NAV_ITEMS = [
  { key: 'home', href: '/', Icon: Home, searchTerms: 'home' },
  { key: 'experience', href: '/experience', Icon: ScrollText, searchTerms: 'experience journey' },
  { key: 'projects', href: '/projects', Icon: Folders, searchTerms: 'projects' },
] as const;
