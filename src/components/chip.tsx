import { cn } from '@/lib/utils';

export function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-foreground/80',
        className
      )}
    >
      {children}
    </span>
  );
}
