"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRightIcon, AtSignIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const base =
  "flex items-center justify-between gap-2 rounded-lg px-2.5 py-1.5 text-sm transition-colors";

const NavigationLink = ({
  href,
  label,
  icon,
  onClick,
}: {
  href: string;
  label: string;
  icon?: React.ReactElement;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  const iconCmp = icon ?? <AtSignIcon size={16} />;

  if (!href.startsWith("/")) {
    return (
      <a
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel="noopener noreferrer"
        className={cn(base, "text-muted-foreground hover:bg-muted hover:text-foreground")}
        onClick={onClick}
      >
        <span className="inline-flex items-center gap-2.5">
          {iconCmp} {label}
        </span>
        <ArrowUpRightIcon size={14} />
      </a>
    );
  }

  const isActive = href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        base,
        isActive
          ? "bg-muted font-medium text-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      )}
      onClick={onClick}
    >
      <span className="inline-flex items-center gap-2.5">
        {iconCmp} {label}
      </span>
    </Link>
  );
};

export default NavigationLink;
