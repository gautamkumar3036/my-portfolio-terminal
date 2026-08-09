// Experience.tsx — shows "Coming Soon..." and renders a reusable Timeline.
// The experience array is empty by design; add entries to portfolioData.experience.
import { motion } from 'framer-motion';
import TerminalWindow from '@/components/TerminalWindow';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import { portfolioData } from '@/data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-6 flex items-center gap-3">
        <span className="text-[var(--muted)]">~/</span>
        <h2 className="text-xl font-bold sm:text-2xl">experience</h2>
        <span className="h-px flex-1 bg-[var(--border)]" />
      </div>

      <TerminalWindow title="gautam@portfolio: ~/experience">
        <p className="text-[var(--muted)]">
          <span className="text-[var(--fg)]">$</span> cat experience.log
        </p>

        {experience.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm text-[var(--muted)]"
          >
            Coming Soon<span className="cursor-blink">_</span>
          </motion.p>
        ) : (
          <div className="mt-6">
            <ExperienceTimeline items={experience} />
          </div>
        )}
      </TerminalWindow>
    </section>
  );
}
