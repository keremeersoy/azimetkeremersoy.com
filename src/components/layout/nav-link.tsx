'use client';

import { ArrowUpRightIcon, AtSignIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const baseClass = 'flex items-center justify-between gap-2 rounded-lg px-2.5 py-3 text-sm transition-colors lg:py-1.5';

interface NavLinkProps {
  href: string;
  label: string;
  icon?: React.ReactElement;
  onClick?: () => void;
}

export function NavLink({ href, label, icon, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const iconElement = icon ?? <AtSignIcon size={16} />;

  if (!href.startsWith('/')) {
    return (
      <a
        href={href}
        target={href.startsWith('mailto:') ? undefined : '_blank'}
        rel="noopener noreferrer"
        className={cn(baseClass, 'text-muted-foreground hover:bg-muted hover:text-foreground')}
        onClick={onClick}
      >
        <span className="inline-flex items-center gap-2.5">
          {iconElement} {label}
        </span>
        <ArrowUpRightIcon size={14} />
      </a>
    );
  }

  const isActive = href === '/' ? pathname === '/' : pathname?.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        baseClass,
        isActive
          ? 'bg-muted font-medium text-foreground'
          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
      )}
      onClick={onClick}
    >
      <span className="inline-flex items-center gap-2.5">
        {iconElement} {label}
      </span>
    </Link>
  );
}
