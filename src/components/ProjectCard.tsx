// ProjectCard.tsx — reusable card for a single project with optional thumbnail.
// Add entries to portfolioData.projects and they render here with no design changes.
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/BrandIcons';
import type { Project } from '@/data/portfolioData';

type Props = {
  project: Project;
  index?: number;
};

export default function ProjectCard({ project, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ scale: 1.02 }}
      className="flex flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg)] shadow-lg transition-colors hover:border-accent"
    >
      {/* Thumbnail */}
      {project.thumbnail && (
        <div className="relative h-40 overflow-hidden border-b border-[var(--border)]">
          <img
            src={project.thumbnail}
            alt={project.name}
            loading="lazy"
            className="h-full w-full object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        {/* Project name */}
        <h3 className="text-base font-bold sm:text-lg">
          <span className="text-accent">$</span> {project.name}
        </h3>

        {/* Description */}
        <p className="mt-2 flex-1 text-sm text-[var(--muted)]">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-[var(--border)] px-2 py-0.5 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-5 flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded border border-[var(--border)] px-3 py-1.5 text-xs transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon size={14} />
            GitHub
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded border border-accent bg-accent px-3 py-1.5 text-xs font-bold text-[var(--bg)] transition-opacity hover:opacity-90"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
