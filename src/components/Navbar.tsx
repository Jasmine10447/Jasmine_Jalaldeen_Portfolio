import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { 
  Network, 
  Menu, 
  X, 
  FileText, 
  ChevronRight,
  Terminal
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'achievements', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-[#080d17]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20' 
          : 'bg-transparent border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#hero" 
          className="flex items-center gap-2.5 text-slate-100 hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/60 transition-colors">
            <Network className="w-4 h-4" />
          </div>
          <span className="font-bold tracking-tight text-xl sm:text-3xl">
            Jasmine
          </span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-5 text-xs xl:text-sm font-medium text-slate-400">
          {navLinks.map((link) => {
            const sectionKey = link.href.replace('#', '');
            const isActive = activeSection === sectionKey;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                  isActive 
                    ? 'text-cyan-400 font-semibold border-b border-cyan-400' 
                    : 'hover:text-slate-200'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-2 shrink-0">
<a
            href={portfolioConfig.personalInfo.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden shrink-0 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-500"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      {mobileMenuOpen && (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden fixed inset-0 top-16 z-40 bg-black/60 backdrop-blur-[2px]"
          />

          <aside className="lg:hidden fixed top-16 right-0 z-50 h-[calc(100dvh-4rem)] w-[min(82vw,320px)] overflow-y-auto border-l border-slate-800 bg-[#080d17] shadow-2xl animate-in slide-in-from-right duration-200">
            <div className="flex flex-col p-4">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-3 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60 rounded-md transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-600" />
                  </a>
                ))}
              </nav>

              <div className="mt-4 pt-4 border-t border-slate-800/80">
                <a
                  href={portfolioConfig.personalInfo.cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-3 text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg text-center flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download CV (PDF)</span>
                </a>
              </div>
            </div>
          </aside>
        </>
      )}
    </header>
  );
};






