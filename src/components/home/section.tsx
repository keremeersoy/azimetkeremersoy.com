import { Reveal } from '@/components/common/reveal';

interface SectionProps {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}

export function Section({ title, action, children }: SectionProps) {
  return (
    <Reveal>
      <section className="border-t border-border pt-5">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-[13px] font-semibold">{title}</h2>
          {action}
        </div>
        {children}
      </section>
    </Reveal>
  );
}
