// Navbar.tsx — sticky terminal-style nav with theme toggle, mobile menu,
// and active section highlighting via IntersectionObserver.
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Sun, Moon, Terminal } from 'lucide-react';

type Props = {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
};

const links = [
  { label: '~/home', href: '#home' },
  { label: '~/about', href: '#about' },
  { label: '~/skills', href: '#skills' },
  { label: '~/projects', href: '#projects' },
  { label: '~/experience', href: '#experience' },
  { label: '~/certificates', href: '#certificates' },
  { label: '~/contact', href: '#contact' },
];

export default function Navbar({ theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track which section is currently in view
  useEffect(() => {
    let observer: IntersectionObserver;

    const setupObserver = () => {
      if (observer) observer.disconnect();

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: '-25% 0px -40% 0px' }
      );

      links.forEach((l) => {
        const el = document.querySelector(l.href);
        if (el) observer.observe(el);
      });
    };

    setupObserver();

    // Re-observe when lazy-loaded components mount or DOM updates
    const mutationObserver = new MutationObserver(() => {
      setupObserver();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (observer) observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${scrolled
          ? 'border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur'
          : 'border-transparent bg-transparent'
        }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-sm font-bold">
          <Terminal size={18} />
          <span>
            gautam<span className="text-accent">@</span>portfolio
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const id = l.href.slice(1);
            const active = activeId === id;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setActiveId(id)}
                  className={`relative rounded px-3 py-1.5 text-xs transition-colors ${active
                      ? 'text-accent'
                      : 'text-[var(--muted)] hover:text-[var(--fg)]'
                    }`}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-accent"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded border border-[var(--border)] text-[var(--fg)] transition-transform hover:scale-110"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded border border-[var(--border)] text-[var(--fg)] md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--bg)] md:hidden"
          >
            {links.map((l) => {
              const id = l.href.slice(1);
              const active = activeId === id;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => {
                      setActiveId(id);
                      setOpen(false);
                    }}
                    className={`block px-4 py-3 text-sm transition-colors ${active
                        ? 'text-accent'
                        : 'text-[var(--muted)] hover:text-[var(--fg)]'
                      }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
