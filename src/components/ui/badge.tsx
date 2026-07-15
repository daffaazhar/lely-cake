import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "default" | "success";
};

export function Badge({ children, tone = "default" }: BadgeProps) {
  const toneClassName = tone === "success" ? "border-[var(--color-success)] text-[var(--color-success)]" : "border-[var(--color-border-soft)] text-[var(--color-text-secondary)]";

  return <span className={`inline-flex rounded-full border px-3 py-1 text-sm font-bold ${toneClassName}`}>{children}</span>;
}
