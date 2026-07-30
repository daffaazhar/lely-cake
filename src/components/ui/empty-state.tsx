type EmptyStateProps = {
  title: string;
  description?: string;
};

export function EmptyState({ description, title }: EmptyStateProps) {
  return (
    <div className="rounded-(--radius-md) border border-dashed border-(--color-border-soft) bg-(--color-surface-white) p-6 text-center">
      <h2 className="text-2xl">{title}</h2>
      {description ? <p className="mt-2 text-base text-(--color-text-secondary)">{description}</p> : null}
    </div>
  );
}
