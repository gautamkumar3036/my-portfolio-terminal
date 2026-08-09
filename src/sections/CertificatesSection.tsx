// CertificatesSection.tsx — Section displaying professional certificates and credentials.
import { motion } from 'framer-motion';
import TerminalWindow from '@/components/TerminalWindow';
import CertificateCard from '@/components/CertificateCard';
import { portfolioData } from '@/data/portfolioData';

export default function CertificatesSection() {
  const { certificates } = portfolioData;

  return (
    <section id="certificates" className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-6 flex items-center gap-3">
        <span className="text-[var(--muted)]">~/</span>
        <h2 className="text-xl font-bold sm:text-2xl">certificates</h2>
        <span className="h-px flex-1 bg-[var(--border)]" />
      </div>

      <TerminalWindow title="gautam@portfolio: ~/certificates">
        <p className="text-[var(--muted)]">
          <span className="text-[var(--fg)]">$</span> ls certificates/
        </p>

        {certificates.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-sm text-[var(--muted)]"
          >
            Coming Soon<span className="cursor-blink">_</span>
          </motion.p>
        ) : (
          <div className="mt-5 grid gap-5 grid-cols-1">
            {certificates.map((cert, i) => (
              <CertificateCard key={cert.credentialId || cert.title} certificate={cert} index={i} />
            ))}
          </div>
        )}
      </TerminalWindow>
    </section>
  );
}
