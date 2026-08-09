// Contact.tsx — terminal-style contact list with a Contact Me button.
import { ArrowRight } from 'lucide-react';
import type { ContactLink } from '@/data/portfolioData';

type Props = {
  links: ContactLink[];
  buttonHref: string;
};

export default function Contact({ links, buttonHref }: Props) {
  return (
    <div className="space-y-4">
      <p>
        <span className="text-[var(--muted)]">$</span> contact
      </p>

      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="group inline-flex items-center gap-2 text-sm text-[var(--fg)] hover:text-[var(--muted)]"
            >
              <span className="text-[var(--muted)]">→</span>
              {link.label}
              <span className="text-[var(--muted)] opacity-0 transition-opacity group-hover:opacity-100">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>

      <a
        href={buttonHref}
        className="inline-flex items-center gap-2 rounded border border-[var(--border)] px-4 py-2 text-sm transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
      >
        Contact Me
        <ArrowRight size={14} />
      </a>
    </div>
  );
}
