import React, { useState } from 'react';
import { networkProjects } from '../data/portfolioData';
import { NetworkProject } from '../types/network';
import { 
  Network, 
  GitBranch, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  ShieldAlert, 
  Wrench, 
  Check, 
  ArrowRight,
  FileCode2,
  Terminal,
  Zap
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const categories = ['All', 'Enterprise Campus', 'Network Security'];

  const filteredProjects = networkProjects.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 3);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <span>05</span>
              <span aria-hidden="true">/</span>
              <span className="uppercase tracking-wider">Network Engineering Projects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white" style={{ textWrap: 'balance' }}>
              Network Architecture & Infrastructure Projects
            </h2>
            <p className="mt-2 text-base text-slate-300 max-w-2xl">
              Selected networking projects covering enterprise network design, firewall configuration, wireless site surveys and branch network infrastructure.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="grid grid-cols-5 items-center gap-1.5 w-full md:max-w-[620px]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`min-w-0 px-1.5 py-2 text-[10px] sm:text-xs font-medium rounded-lg text-center leading-tight whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/60'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards (Stacked Detailed Technical Layout) */}
        <div className="space-y-8">
          {displayedProjects.map((project, index) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <div
                key={project.id}
                className="rounded-2xl bg-[#090f1a] border border-slate-800 hover:border-slate-700 transition-all p-6 sm:p-8 shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Core Architecture & Spec */}
                  <div className="lg:col-span-8 space-y-4">
                    
                    {/* Project Header Line */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                      <span className="text-cyan-400 font-semibold">PROJECT 0{index + 1}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-300">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-emerald-400">{project.difficulty}</span>
                      {project.featuredLabel && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-cyan-300 font-semibold">{project.featuredLabel}</span>
                        </>
                      )}
                      {project.period && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-slate-400">{project.period}</span>
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>

                    {/* Architecture Summary */}
                    <div className="p-3.5 rounded-xl bg-[#0b1322] border border-slate-800 text-xs sm:text-sm text-cyan-200 font-mono leading-relaxed">
                      <span className="text-slate-400 uppercase text-[10px] block mb-1 font-sans font-semibold">
                        Architecture Topology & Design Model:
                      </span>
                      {project.architectureSummary}
                    </div>

                    {/* Objective */}
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {project.objective}
                    </p>

                    {/* Key Implementation Highlights */}
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Key Engineering Implementations
                      </div>
                      <ul className="space-y-1.5 text-sm text-slate-300">
                        {project.keyImplementations.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2">
                            <span className="text-cyan-400 shrink-0 font-mono">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Challenge & Solution Accordion */}
                    <div className="pt-2">
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 py-1"
                      >
                        <span>{isExpanded ? 'Hide' : 'View'} Engineering Challenge & Root Cause Analysis</span>
                        <span className="text-[10px]">{isExpanded ? '▲' : '▼'}</span>
                      </button>

                      {isExpanded && (
                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[#060a12] border border-slate-800 text-xs animate-in fade-in duration-150">
                          <div>
                            <span className="font-semibold text-amber-400 flex items-center gap-1 mb-1">
                              <ShieldAlert className="w-3.5 h-3.5" />
                              <span>Encountered Obstacle:</span>
                            </span>
                            <p className="text-slate-300 leading-relaxed">{project.challenges}</p>
                          </div>
                          <div>
                            <span className="font-semibold text-emerald-400 flex items-center gap-1 mb-1">
                              <Wrench className="w-3.5 h-3.5" />
                              <span>Engineered Solution:</span>
                            </span>
                            <p className="text-slate-300 leading-relaxed">{project.solution}</p>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Right Column: Result Metrics, Tools & Live Actions */}
                  <div className="lg:col-span-4 space-y-5 bg-[#0b1322] p-5 rounded-xl border border-slate-800">
                    
                    {/* GNS3 University Main Project Image */}
                    {project.id === 'proj-01' && (
                      <div className="space-y-3">
                        <div>
                          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                            GNS3 Network Infrastructure Design
                          </div>
                          <div className="bg-[#060a12] border border-slate-800 rounded-xl p-2">
                            <img
                              src="/project-images/gns3-main-project.jpeg"
                              alt="GNS3 secure, scalable and resilient network infrastructure project"
                              className="w-full h-auto max-h-64 object-contain rounded-lg"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Project 01: Original Network Design Images */}
                    {project.id === 'proj-02' && (
                      <div className="space-y-3">
                        <div>
                          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                            Network Architecture Blueprint
                          </div>
                          <div className="rounded-xl overflow-hidden bg-[#060a12] border border-slate-800 p-2">
                            <img
                              src="/project-images/avalanch-network-blueprint.png"
                              alt="Avalanch Corporation enterprise network architecture blueprint"
                              className="w-full h-auto max-h-64 object-contain rounded-lg"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Project 02: pfSense Network Blueprint */}
                    {project.id === 'proj-03' && (
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                          Virtual Enterprise Network Blueprint
                        </div>
                        <div className="rounded-xl overflow-hidden bg-[#060a12] border border-slate-800 p-2">
                          <img
                            src="/project-images/pfsense-network-blueprint.png"
                            alt="Virtual enterprise network architecture using pfSense firewall"
                            className="w-full h-auto max-h-64 object-contain rounded-lg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )}

                    {/* Project 04: IronOne Network Blueprint */}
                    {project.id === 'proj-05' && (
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                          Branch Network Architecture Blueprint
                        </div>
                        <div className="rounded-xl overflow-hidden bg-[#060a12] border border-slate-800 p-2">
                          <img
                            src="/project-images/ironone-network-blueprint.png"
                            alt="IronOne Kandy branch network architecture blueprint"
                            className="w-full h-auto max-h-64 object-contain rounded-lg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )}

                    {/* Measurable Outcome */}
                    <div>
                      <div className="text-[10px] font-mono uppercase text-slate-400 mb-1">
                        Validated Project Result
                      </div>
                      <p className="text-sm font-semibold text-emerald-400 leading-relaxed">
                        {project.result}
                      </p>
                    </div>

                    {/* Tools & Platforms */}
                    <div>
                      <div className="text-[10px] font-mono uppercase text-slate-400 mb-2">
                        Technologies & Emulators
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.toolsUsed.map((tool) => (
                          <span
                            key={tool}
                            className="text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-2 border-t border-slate-800 space-y-2">

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2 px-3 text-xs font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg flex items-center justify-center gap-2 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5 text-slate-400" />
                          <span>GitHub Topology & Repo</span>
                        </a>
                      )}

                      {project.linkedinUrl && (
                        <a
                          href={project.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2 px-3 text-xs font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg flex items-center justify-center gap-2 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                          <span>View Project on LinkedIn</span>
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length > 3 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => { if (showAllProjects) { const section = document.getElementById("projects"); if (section) { window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" }); } } setShowAllProjects(!showAllProjects); }}
              className="px-6 py-3 text-sm font-medium text-cyan-300 hover:text-white bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-800/60 rounded-lg transition-colors"
            >
              {showAllProjects ? 'Show Less' : `See All Projects (${filteredProjects.length})`}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};












