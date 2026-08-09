// SkillsSection.tsx — skills grouped by category in terminal formatting.
import { motion } from 'framer-motion';
import TerminalWindow from '@/components/TerminalWindow';
import Skills from '@/components/Skills';
import { portfolioData } from '@/data/portfolioData';

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-6 flex items-center gap-3">
        <span className="text-[var(--muted)]">~/</span>
        <h2 className="text-xl font-bold sm:text-2xl">skills</h2>
        <span className="h-px flex-1 bg-[var(--border)]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <TerminalWindow title="gautam@portfolio: ~/skills">
          <Skills groups={portfolioData.skills} />
        </TerminalWindow>
      </motion.div>
    </section>
  );
}
