export function Hint({ children }: { children: React.ReactNode }) {
  return <span className="ml-auto truncate pl-4 text-xs text-muted-foreground">{children}</span>;
}

export function Kbd({ children }: { children: React.ReactNode }) {
  return <kbd className="rounded border border-border px-1.5 py-px font-mono text-[10px]">{children}</kbd>;
}
