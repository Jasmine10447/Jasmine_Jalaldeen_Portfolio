import React, { useEffect, useState } from 'react';
import { 
  X, 
  Terminal, 
  FileCode2, 
  FileText, 
  Github, 
  Globe, 
  Check, 
  Copy, 
  ExternalLink,
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomizationGuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-4xl bg-[#090f1a] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-[#0a1220] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800/60 text-cyan-400 flex items-center justify-center">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                Undergraduate Portfolio Customization & Deployment Guide
              </h2>
              <p className="text-xs text-slate-400">
                How to replace placeholders, add your real CV, configure GitHub, and deploy to Vercel.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Tabs */}
        <div className="flex items-center gap-1 px-4 sm:px-6 pt-3 border-b border-slate-800 bg-[#080d17] overflow-x-auto no-scrollbar text-xs font-mono">
          {[
            { step: 1, label: '1. Personal Info & Links' },
            { step: 2, label: '2. Adding Your Real CV PDF' },
            { step: 3, label: '3. Adding New Labs & Projects' },
            { step: 4, label: '4. Vercel 1-Click Deployment' },
          ].map((item) => (
            <button
              key={item.step}
              onClick={() => setActiveStep(item.step)}
              className={`px-3 py-2 rounded-t-lg transition-colors border-b-2 whitespace-nowrap shrink-0 ${
                activeStep === item.step
                  ? 'border-cyan-400 text-cyan-300 bg-slate-900/60 font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Step Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          
          {/* STEP 1 */}
          {activeStep === 1 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <FileCode2 className="w-4 h-4 text-cyan-400" />
                <span>Replace Placeholders in src/data/portfolioData.ts</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-xs">
                All personal identity, social links, metrics, and contact info are centralized in <code className="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded border border-slate-800">src/data/portfolioData.ts</code>. Simply open that file and update the values:
              </p>

              <div className="rounded-xl bg-[#050810] border border-slate-800 overflow-hidden font-mono text-xs">
                <div className="px-4 py-2 bg-[#0c1424] border-b border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">src/data/portfolioData.ts</span>
                  <button
                    onClick={() => copyToClipboard(`export const portfolioConfig = {\n  personalInfo: {\n    name: "Your Name",\n    email: "your.email@example.com",\n    github: "https://github.com/your-username",\n    linkedin: "https://linkedin.com/in/your-profile",\n    location: "City, Country",\n  }\n};`, 'code-1')}
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-[11px]"
                  >
                    {copiedCode === 'code-1' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode === 'code-1' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="p-4 text-cyan-200 leading-relaxed overflow-x-auto">
{`export const portfolioConfig = {
  personalInfo: {
    name: "Alex Mercer",                  // Replace with your real name
    email: "alex.mercer.neteng@example.com", // Replace with your email
    github: "https://github.com/your-username", // Your GitHub
    linkedin: "https://linkedin.com/in/your-profile", // Your LinkedIn
    location: "San Francisco, CA · Open to Relocation",
    availability: "Available for Internships, NOC & Junior Roles",
  },
  metrics: [
    { label: "Network Labs Configured", value: "28+" },
    { label: "Topology Designs", value: "16+" },
    { label: "Certifications & Badges", value: "4" },
  ]
};`}
                </pre>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {activeStep === 2 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Placing Your Real Resume / CV PDF</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-xs">
                The download buttons throughout the website point to <code className="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded border border-slate-800">/resume/network-engineer-cv.pdf</code>.
              </p>
              
              <div className="p-4 rounded-xl bg-[#0b121f] border border-slate-800 space-y-3 text-xs text-slate-300">
                <div className="font-semibold text-white">How to add your file:</div>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Create a directory named <code className="text-cyan-300">public/resume/</code> in the root of your project if it doesn't already exist.</li>
                  <li>Copy your PDF resume into that folder and name it <code className="text-cyan-300">network-engineer-cv.pdf</code> (or update the filename in <code className="text-slate-200">portfolioConfig.personalInfo.cvPath</code>).</li>
                  <li>When you build or deploy to Vercel, the file in <code className="text-cyan-300">public/</code> will automatically be served at <code className="text-cyan-300">/resume/network-engineer-cv.pdf</code>!</li>
                </ol>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {activeStep === 3 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Adding New Labs & Custom Projects</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-xs">
                To showcase a new lab or coursework project, simply append a new object to the <code className="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded">networkLabs</code> or <code className="text-cyan-300 bg-slate-900 px-1 py-0.5 rounded">networkProjects</code> arrays in <code className="text-slate-200">src/data/portfolioData.ts</code>:
              </p>

              <div className="rounded-xl bg-[#050810] border border-slate-800 overflow-hidden font-mono text-xs">
                <pre className="p-4 text-cyan-200 leading-relaxed overflow-x-auto">
{`{
  id: "lab-09",
  title: "BGP Dual-Homed ISP Peering Simulation",
  category: "Routing",
  difficulty: "Advanced",
  duration: "6 Hours Lab",
  objective: "Configure eBGP multi-homing to dual ISPs with AS-Path prepending.",
  summary: "Engineered prefix advertisement policies and failover timers...",
  keyConcepts: ["eBGP", "AS-Path Prepending", "BGP Local Preference"],
  devices: [ ... ],
  cliConfigs: [ ... ],
  verificationCommands: [ ... ]
}`}
                </pre>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {activeStep === 4 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Vercel Deployment Instructions</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-xs">
                This project is built with React, Vite, and Tailwind CSS with 100% client-side execution, making it instantly deployable on Vercel with zero configuration required.
              </p>

              <div className="p-4 rounded-xl bg-[#0b121f] border border-slate-800 space-y-3 text-xs text-slate-300">
                <div className="font-semibold text-white">Deploy to Vercel in 3 Steps:</div>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Push your repository to GitHub: <code className="text-cyan-300">git push origin main</code></li>
                  <li>Log into <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Vercel.com</a> and click <strong>"Add New Project"</strong>.</li>
                  <li>Import your repository. Vercel will automatically detect <strong>Vite</strong> with build command <code className="text-cyan-300">npm run build</code> and output directory <code className="text-cyan-300">dist</code>. Click <strong>"Deploy"</strong>!</li>
                </ol>
              </div>

              <div className="rounded-xl bg-[#050810] border border-slate-800 p-3 font-mono text-xs text-slate-300">
                <span className="text-slate-500 block text-[10px] uppercase mb-1">Local Build Verification Commands</span>
                <div>$ npm install</div>
                <div>$ npm run build</div>
                <div className="text-emerald-400 mt-1">✓ Produces production-ready ./dist bundle in &lt;3s</div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-[#0a1220] flex items-center justify-between text-xs text-slate-400">
          <div>
            Step {activeStep} of 4
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold rounded-lg transition-colors"
          >
            Got it, Let's Build!
          </button>
        </div>

      </div>
    </div>
  );
};
