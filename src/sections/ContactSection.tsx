// ContactSection.tsx — terminal window with contact links and a Contact Me button.
import { motion } from 'framer-motion';
import TerminalWindow from '@/components/TerminalWindow';
import Contact from '@/components/Contact';
import { portfolioData } from '@/data/portfolioData';

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-6 flex items-center gap-3">
        <span className="text-[var(--muted)]">~/</span>
        <h2 className="text-xl font-bold sm:text-2xl">contact</h2>
        <span className="h-px flex-1 bg-[var(--border)]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <TerminalWindow title="gautam@portfolio: ~/contact">
          <Contact links={portfolioData.contact} buttonHref={portfolioData.contactButtonHref} />
        </TerminalWindow>
      </motion.div>
    </section>
  );
}
