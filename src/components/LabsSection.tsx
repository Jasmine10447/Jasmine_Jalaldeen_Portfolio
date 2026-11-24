import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { networkLabs } from '../data/portfolioData';
import { NetworkLab } from '../types/network';
import { LabModal } from './LabModal';
import { LabDiagramVisual } from './LabDiagramVisual';
import { 
  Terminal, 
  ArrowRight, 
  Cpu, 
  Layers, 
  Wrench,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export const LabsSection: React.FC = () => {
  const [selectedLab, setSelectedLab] = useState<NetworkLab | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Sequential stagger variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="labs" className="py-20 border-t border-slate-800/80 relative bg-[#070b13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>04</span>
            <span aria-hidden="true">/</span>
            <span className="uppercase tracking-wider">PRACTICAL NETWORK LABS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white" style={{ textWrap: 'balance' }}>
            PRACTICAL NETWORK LABS
          </h2>
          
          <div className="text-sm sm:text-base font-semibold text-cyan-400 mt-1">
            Hands-On Laboratory Implementations
          </div>

          <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Practical networking environments designed, configured, tested, and documented across routing, switching, security, redundancy, VPN, and packet analysis.
          </p>
        </motion.div>

        {/* Six-Card Grid: Desktop 3x2, Tablet 2 cols, Mobile 1 col */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {networkLabs.map((lab) => (
            <motion.div
              key={lab.id}
              variants={cardVariants}
              className="rounded-2xl bg-[#090f1a] border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-xl group hover:shadow-cyan-950/20 hover:-translate-y-1"
            >
              <div>
                {/* TOP: Large Technical Visual (~40-50% height) */}
                <div className="h-44 sm:h-48 bg-[#050913] border-b border-slate-800/80 relative overflow-hidden">
                  <LabDiagramVisual labId={lab.id} />
                  
                  {/* Subtle Top Overlay Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold text-white bg-slate-900/90 border border-slate-700/80 px-2 py-0.5 rounded shadow-sm">
                      {lab.labNumber}
                    </span>
                    <span className="text-[9px] font-mono text-cyan-400 bg-cyan-950/90 border border-cyan-800/60 px-1.5 py-0.5 rounded flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      VERIFIED
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-300 bg-slate-900/90 border border-slate-700/80 px-2 py-0.5 rounded">
                    {lab.difficulty}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 space-y-3.5">
                  {/* Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {lab.title}
                  </h3>

                  {/* Short Description (1-2 sentences) */}
                  <p className="text-xs text-slate-300 leading-relaxed min-h-[36px]">
                    {lab.shortDescription}
                  </p>

                  {/* Technologies (Clean unboxed tags with subtle separators) */}
                  <div className="pt-2 border-t border-slate-800/60 space-y-2">
                    <div>
                      <div className="text-[10px] font-mono uppercase text-slate-400 mb-1">
                        Technologies
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-300 font-mono">
                        {lab.technologies.map((tech, idx) => (
                          <React.Fragment key={tech}>
                            <span className="text-cyan-300 text-[11px] hover:text-white transition-colors">
                              {tech}
                            </span>
                            {idx < lab.technologies.length - 1 && (
                              <span className="text-slate-600 text-[10px]" aria-hidden="true">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Tools / Emulators */}
                    <div>
                      <div className="text-[10px] font-mono uppercase text-slate-400 mb-0.5">
                        Lab Platform & Tools
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                        <Wrench className="w-3 h-3 text-slate-500 shrink-0" />
                        <span>{lab.tools}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM: Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedLab(lab)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 hover:text-white bg-[#0e1626] hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 rounded-xl transition-all flex items-center justify-center gap-2 group-hover:border-cyan-500/40"
                >
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>View Lab</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Lab Details Modal */}
      {selectedLab && (
        <LabModal lab={selectedLab} onClose={() => setSelectedLab(null)} />
      )}
    </section>
  );
};
