// About.tsx — second terminal window with the longer about paragraph.
import { motion } from 'framer-motion';
import TerminalWindow from '@/components/TerminalWindow';
import TypingText from '@/components/TypingText';
import { portfolioData } from '@/data/portfolioData';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-16">
      <SectionHeading title="about" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <TerminalWindow title="gautam@portfolio: ~/about">
          <p className="text-[var(--muted)]">
            <span className="text-[var(--fg)]">$</span>{' '}
            <TypingText text="cat about.txt" speed={60} />
          </p>
          <p className="mt-2 text-sm leading-relaxed sm:text-base">
            {portfolioData.aboutParagraph}
          </p>
        </TerminalWindow>
      </motion.div>
    </section>
  );
}

// Shared section heading used across sections for consistent hierarchy.
function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="text-[var(--muted)]">~/</span>
      <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
      <span className="h-px flex-1 bg-[var(--border)]" />
    </div>
  );
}
