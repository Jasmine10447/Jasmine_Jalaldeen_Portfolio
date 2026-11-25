import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { Network, ArrowUp, Github, Linkedin, Mail, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#050810] py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-slate-800/80">
          {/* Brand lockup */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-100 font-bold text-base">
              <div className="w-6 h-6 rounded bg-cyan-950 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                <Network className="w-3.5 h-3.5" />
              </div>
              <span>Jasmine</span>
            </div>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
              Designing reliable enterprise networks. Solving complex infrastructure problems through disciplined layer-by-layer engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
                        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-cyan-400 transition-colors">Achievements</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Credentials</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></div>

          {/* Social and Top */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioConfig.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioConfig.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioConfig.personalInfo.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors flex items-center gap-1 font-mono text-xs"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright notice & Vercel deployment badge */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            Â© 2026 {portfolioConfig.personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Enterprise NOC Visual Architecture</span>
            <span>Â·</span>
            <span>Deployable on Vercel</span>
          </div>
        </div>

      </div>
    </footer>
  );
};



