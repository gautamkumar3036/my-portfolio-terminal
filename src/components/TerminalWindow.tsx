// TerminalWindow.tsx
// macOS-style rounded terminal window with traffic-light buttons.
// Reused by every section so the whole portfolio feels like one shell session.
import type { ReactNode } from 'react';

type Props = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function TerminalWindow({ title, children, className = '' }: Props) {
  return (
    <div
      className={`rounded-xl border border-[var(--border)] bg-[var(--bg)] overflow-hidden shadow-2xl ${className}`}
    >
      {/* Title bar with macOS traffic-light buttons */}
      <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[var(--traffic-red)]" />
        <span className="h-3 w-3 rounded-full bg-[var(--traffic-yellow)]" />
        <span className="h-3 w-3 rounded-full bg-[var(--traffic-green)]" />
        {title && (
          <span className="ml-2 text-xs text-[var(--muted)] truncate">{title}</span>
        )}
      </div>

      {/* Terminal body */}
      <div className="p-5 sm:p-6 text-sm sm:text-base leading-relaxed">
        {children}
      </div>
    </div>
  );
}
