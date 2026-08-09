// Footer.tsx — "Designed & Built by Gautam Kumar" with auto-generated year.
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] py-6 text-center">
      <p className="text-xs text-[var(--muted)] sm:text-sm">
        Designed &amp; Built by Gautam Kumar — {year}
      </p>
    </footer>
  );
}
