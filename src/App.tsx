// App.tsx — assembles the whole portfolio.
// Hero/About/Skills load eagerly; Projects & Experience are lazy-loaded.
import { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import SkillsSection from '@/sections/SkillsSection';
import { useTheme } from '@/hooks/useTheme';

const Projects = lazy(() => import('@/sections/Projects'));
const Experience = lazy(() => import('@/sections/Experience'));
const CertificatesSection = lazy(() => import('@/sections/CertificatesSection'));
const ContactSection = lazy(() => import('@/sections/ContactSection'));

// Minimal fallback shown while a lazy section loads.
function SectionFallback() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="h-64 rounded-xl border border-[var(--border)] animate-pulse" />
    </div>
  );
}

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      {/* Subtle background grid */}
      <div className="pointer-events-none fixed inset-0 bg-grid" />

      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <SkillsSection />

        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <CertificatesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
