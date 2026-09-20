// Hero.tsx — landing terminal window with typing commands, stats, and socials.
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download } from 'lucide-react';
import TerminalWindow from '@/components/TerminalWindow';
import TypingText from '@/components/TypingText';
import { GithubIcon, LinkedinIcon, TwitterIcon, LeetcodeIcon, FivoIcon } from '@/components/BrandIcons';
import { portfolioData } from '@/data/portfolioData';

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  leetcode: LeetcodeIcon,
  fivo: FivoIcon,
  mail: Mail,
  twitter: TwitterIcon,
};

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-5xl px-4 pt-10 sm:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <TerminalWindow title="gautam@portfolio: ~">
          {/* whoami */}
          <p className="text-[var(--muted)]">
            <span className="text-accent">$</span>{' '}
            <TypingText text="whoami" speed={90} />
          </p>

          {/* Big name headline */}
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">
            {portfolioData.name}
          </h1>
          <p className="mt-1 text-sm text-accent sm:text-base">
            {portfolioData.tagline}
          </p>

          {/* cat about.txt */}
          <p className="mt-6 text-[var(--muted)]">
            <span className="text-accent">$</span>{' '}
            <TypingText text="cat about.txt" speed={70} startDelay={600} />
          </p>
          <div className="mt-1 space-y-0.5">
            {portfolioData.aboutLines.map((line) => (
              <p key={line} className="text-sm sm:text-base">
                {line}
              </p>
            ))}
          </div>

          {/* stats --show */}
          <p className="mt-6 text-[var(--muted)]">
            <span className="text-accent">$</span>{' '}
            <TypingText text="stats --show" speed={70} startDelay={1400} />
          </p>
          <div className="mt-3 flex flex-wrap gap-6">
            {portfolioData.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + i * 0.15 }}
              >
                <p className="text-2xl font-bold text-accent sm:text-3xl">
                  {stat.value}
                </p>
                <p className="text-xs text-[var(--muted)]">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <motion.a
              href={portfolioData.contactButtonHref}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded border border-accent bg-accent px-4 py-2 text-sm font-bold text-[var(--bg)] transition-shadow accent-glow"
            >
              Get in touch
              <ArrowRight size={14} />
            </motion.a>
            <motion.a
              href={portfolioData.resumeUrl}
              download="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded border border-[var(--border)] px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              <Download size={14} />
              Download Resume
            </motion.a>
          </div>

          {/* Socials */}
          <div className="mt-6 flex items-center gap-3">
            {portfolioData.socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="flex h-10 w-10 items-center justify-center rounded border border-[var(--border)] transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>
        </TerminalWindow>
      </motion.div>
    </section>
  );
}
