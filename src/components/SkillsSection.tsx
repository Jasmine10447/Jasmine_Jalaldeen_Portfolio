import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Network, 
  GitFork, 
  Server, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  CheckCircle,
  Search,
  Filter
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network':
        return <Network className="w-4 h-4 text-cyan-400" />;
      case 'GitFork':
        return <GitFork className="w-4 h-4 text-sky-400" />;
      case 'Server':
        return <Server className="w-4 h-4 text-indigo-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-purple-400" />;
      default:
        return <Network className="w-4 h-4 text-cyan-400" />;
    }
  };

  const filteredCategories = skillCategories.filter((cat) => {
    if (activeCategoryId === 'all') return true;
    return cat.id === activeCategoryId;
  });

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <span>04</span>
              <span aria-hidden="true">/</span>
              <span className="uppercase tracking-wider">Technical Arsenal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white" style={{ textWrap: 'balance' }}>
              Protocols, Hardware & Diagnostic Capabilities
            </h2>
            <p className="mt-2 text-base text-slate-300 max-w-2xl">
              Organized by engineering domain, from foundational packet transport and dynamic routing to campus switching, perimeter security, and script automation.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search skill (e.g. OSPF, VLAN)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#090f1a] border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Tabs (Interactive Segmented Control) */}
        <div className="grid grid-cols-2 min-[480px]:grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-2 pb-4 mb-8 border-b border-slate-800/60">
          <button
            onClick={() => setActiveCategoryId('all')}
            className={`min-w-0 px-1.5 py-2 text-[10px] sm:text-xs font-medium rounded-lg text-center leading-tight transition-colors ${
              activeCategoryId === 'all'
                ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/60'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`min-w-0 px-1.5 py-2 text-[10px] sm:text-xs font-medium rounded-lg text-center leading-tight transition-colors flex flex-col items-center justify-center sm:flex-row gap-1.5 min-h-[64px] sm:min-h-0 ${
                activeCategoryId === cat.id
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/60'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
              }`}
            >
              {getCategoryIcon(cat.iconName)}
              <span className="min-w-0 whitespace-normal text-center leading-tight">{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Categories & Skill Cards Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => {
            const matchingSkills = category.skills.filter((skill) => {
              if (!searchQuery.trim()) return true;
              const q = searchQuery.toLowerCase();
              return (
                skill.name.toLowerCase().includes(q) ||
                skill.description.toLowerCase().includes(q) ||
                skill.tags.some((t) => t.toLowerCase().includes(q))
              );
            });

            if (matchingSkills.length === 0) return null;

            return (
              <div key={category.id} className="space-y-4">
                
                {/* Category Lead */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/40">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(category.iconName)}
                    <h3 className="text-base font-semibold text-white">
                      {category.category}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    {matchingSkills.length} competencies
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {matchingSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-4 rounded-xl bg-[#090f1a] border border-slate-800/90 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Skill Name & Level (Zero-pill clean layout) */}
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </h4>
                        </div>

                        {/* Unboxed Metadata */}
                        <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400/90 mb-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{skill.level}</span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-slate-400 leading-relaxed mb-3">
                          {skill.description}
                        </p>
                      </div>

                      {/* Tags (clean text with typographic separator) */}
                      <div className="pt-2.5 border-t border-slate-800/50 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400">
                        {skill.tags.map((tag, idx) => (
                          <React.Fragment key={tag}>
                            <span className="hover:text-slate-300">{tag}</span>
                            {idx < skill.tags.length - 1 && <span className="text-slate-700">Ã‚Â·</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


