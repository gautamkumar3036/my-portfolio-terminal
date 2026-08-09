// Skills.tsx — renders skill groups in terminal-style formatting.
import type { SkillGroup } from '@/data/portfolioData';

type Props = {
  groups: SkillGroup[];
};

export default function Skills({ groups }: Props) {
  return (
    <div className="space-y-5">
      {groups.map((group) => (
        <div key={group.category}>
          {/* Category label styled like a directory listing */}
          <p className="text-[var(--muted)]">
            <span className="text-[var(--fg)]">$</span> ls skills/{group.category.toLowerCase()}/
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded border border-[var(--border)] px-3 py-1 text-xs sm:text-sm transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
