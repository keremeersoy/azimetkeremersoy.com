'use client';

import { RichText } from '@/components/common/rich-text';
import type { Localized } from '@/content/types';
import { useLang } from '@/i18n/provider';

export function BulletList({ items }: { items: Localized[] }) {
  const { lang } = useLang();

  return (
    <ul className="flex flex-col gap-1.5 text-[15px] leading-[1.6]">
      {items.map((item, index) => (
        <li key={index} className="flex gap-2.5">
          <span aria-hidden className="mt-[10px] size-1 shrink-0 rounded-full bg-muted-foreground/60" />
          <span>
            <RichText text={item[lang]} />
          </span>
        </li>
      ))}
    </ul>
  );
}
