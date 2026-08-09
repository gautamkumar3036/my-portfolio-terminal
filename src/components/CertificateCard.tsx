// CertificateCard.tsx — reusable card for displaying individual certificates
// with terminal-style UI, skill tags, verification link, and interactive preview modal.

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, Calendar, ShieldCheck, X, Eye } from 'lucide-react';
import type { CertificateItem } from '@/data/portfolioData';

type Props = {
  certificate: CertificateItem;
  index?: number;
};

export default function CertificateCard({ certificate, index = 0 }: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        whileHover={{ scale: 1.015 }}
        className="group relative flex flex-col sm:flex-row overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5 shadow-lg transition-colors hover:border-accent"
      >
        {/* Terminal Header Prompt (Top Right) */}
        <div className="absolute top-3 right-4 text-[10px] text-[var(--muted)] font-mono opacity-60">
          $ cat cert_{index + 1}.json
        </div>

        {/* Badge / Graphic Container */}
        {certificate.badgeUrl && (
          <div className="flex justify-center items-center sm:w-36 sm:flex-shrink-0 mb-4 sm:mb-0 sm:mr-5">
            <div className="relative group/badge cursor-pointer" onClick={() => setShowModal(true)}>
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur opacity-75 group-hover/badge:opacity-100 transition duration-300" />
              <img
                src={certificate.badgeUrl}
                alt={certificate.title}
                loading="lazy"
                className="relative h-28 w-28 object-contain transition-transform duration-300 group-hover/badge:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/badge:opacity-100 rounded-lg transition-opacity duration-200">
                <Eye size={20} className="text-accent" />
              </div>
            </div>
          </div>
        )}

        {/* Info Column */}
        <div className="flex flex-1 flex-col justify-between">
          <div>
            {/* Header & Issuer */}
            <div className="flex items-center gap-2 text-xs text-accent font-semibold mb-1">
              <Award size={14} />
              <span>{certificate.issuer}</span>
              <ShieldCheck size={14} className="text-emerald-400" />
            </div>

            {/* Title */}
            <h3 className="text-base font-bold sm:text-lg text-[var(--fg)] group-hover:text-accent transition-colors">
              {certificate.title}
            </h3>

            {/* Meta (Date & Credential ID) */}
            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--muted)]">
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                Issued {certificate.issueDate}
              </span>
              <span className="font-mono text-[11px] bg-[var(--border)]/40 px-2 py-0.5 rounded">
                ID: {certificate.credentialId}
              </span>
            </div>

            {/* Description */}
            {certificate.description && (
              <p className="mt-2 text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                {certificate.description}
              </p>
            )}

            {/* Skill tags */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {certificate.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-[var(--border)] bg-[var(--bg)]/50 px-2 py-0.5 text-[11px] text-[var(--fg)] hover:border-accent transition-colors"
                >
                  #{skill}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex flex-wrap items-center gap-2 pt-3 border-t border-[var(--border)]/50">
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded border border-accent bg-accent px-3 py-1.5 text-xs font-bold text-[var(--bg)] transition-opacity hover:opacity-90"
            >
              <ExternalLink size={13} />
              Verify Credential
            </a>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-1.5 rounded border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--fg)] transition-colors hover:border-accent hover:text-accent"
            >
              <Eye size={13} />
              View Badge
            </button>
          </div>
        </div>
      </motion.div>

      {/* Lightbox / Modal for viewing badge in full view */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-lg overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6 shadow-2xl"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-[var(--muted)] hover:text-[var(--fg)] p-1 rounded-lg border border-[var(--border)]"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="flex flex-col items-center text-center">
                {certificate.badgeUrl && (
                  <div className="p-4 bg-gradient-to-b from-accent-dim to-transparent rounded-2xl mb-4">
                    <img
                      src={certificate.badgeUrl}
                      alt={certificate.title}
                      className="h-44 w-44 object-contain drop-shadow-xl"
                    />
                  </div>
                )}

                <div className="flex items-center gap-1.5 text-xs text-accent font-semibold">
                  <ShieldCheck size={14} />
                  <span>Verified Credential • {certificate.issuer}</span>
                </div>

                <h3 className="mt-2 text-lg font-bold text-[var(--fg)]">
                  {certificate.title}
                </h3>

                <p className="mt-1 text-xs text-[var(--muted)]">
                  Issued: {certificate.issueDate} | ID: {certificate.credentialId}
                </p>

                {certificate.description && (
                  <p className="mt-3 text-xs text-[var(--muted)] max-w-md">
                    {certificate.description}
                  </p>
                )}

                <div className="mt-5 flex gap-3">
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded border border-accent bg-accent px-4 py-2 text-xs font-bold text-[var(--bg)] transition-opacity hover:opacity-90"
                  >
                    <ExternalLink size={14} />
                    Verify Online
                  </a>
                  <button
                    onClick={() => setShowModal(false)}
                    className="rounded border border-[var(--border)] px-4 py-2 text-xs font-medium text-[var(--fg)] hover:border-accent"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
