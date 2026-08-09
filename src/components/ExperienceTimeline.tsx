// ExperienceTimeline.tsx — reusable vertical timeline for experience entries.
// Add entries to portfolioData.experience and they render here with no design changes.
import { motion } from 'framer-motion';
import type { ExperienceItem } from '@/data/portfolioData';

type Props = {
  items: ExperienceItem[];
};

export default function ExperienceTimeline({ items }: Props) {
  return (
    <div className="relative ml-3 border-l border-[var(--border)] pl-6 space-y-8">
      {items.map((item, i) => (
        <motion.div
          key={`${item.company}-${i}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="relative"
        >
          {/* Node dot */}
          <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border border-[var(--border)] bg-[var(--bg)]" />

          <p className="text-xs text-[var(--muted)]">{item.period}</p>
          <h3 className="mt-1 text-base font-bold">
            {item.role} <span className="text-[var(--muted)]">@ {item.company}</span>
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
