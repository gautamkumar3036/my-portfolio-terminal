// Projects.tsx — shows "Coming Soon..." and renders reusable ProjectCards.
// The projects array is empty by design; add entries to portfolioData.projects.
import { motion } from 'framer-motion';
import TerminalWindow from '@/components/TerminalWindow';
import ProjectCard from '@/components/ProjectCard';
import { portfolioData } from '@/data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-6 flex items-center gap-3">
        <span className="text-[var(--muted)]">~/</span>
        <h2 className="text-xl font-bold sm:text-2xl">projects</h2>
        <span className="h-px flex-1 bg-[var(--border)]" />
      </div>

      <TerminalWindow title="gautam@portfolio: ~/projects">
        <p className="text-[var(--muted)]">
          <span className="text-[var(--fg)]">$</span> ls projects/
        </p>

        {projects.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm text-[var(--muted)]"
          >
            Coming Soon<span className="cursor-blink">_</span>
          </motion.p>
        ) : (
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </div>
        )}
      </TerminalWindow>
    </section>
  );
}
