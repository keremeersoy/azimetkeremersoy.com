import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function SectionLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="-my-3 inline-flex items-center gap-1 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {children} <ArrowRight size={14} />
    </Link>
  );
}
