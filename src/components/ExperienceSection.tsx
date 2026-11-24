import React, { useState } from 'react';
import { experienceTimeline } from '../data/portfolioData';
import {
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [expandedSkills, setExpandedSkills] = useState<Record<string, boolean>>({});

  const entryImages: Record<string, string> = {
    "edu-01": "/esu.jpg",
    "edu-02": "/bcs.jpg",
    "edu-03": "/school.jpg",
    "exp-01": "/continental.jpg",
  };

  const groups = [
    {
      type: 'Education' as const,
      title: 'Education',
      description: 'Academic qualifications and educational background.',
      icon: GraduationCap,
    },
    {
      type: 'Experience' as const,
      title: 'Experience',
      description: 'Professional experience and workplace responsibilities.',
      icon: Briefcase,
    },
  ];

  return (
    <section id="experience" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>03</span>
            <span aria-hidden="true">/</span>
            <span className="uppercase tracking-wider">Academic & Professional Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white" style={{ textWrap: 'balance' }}>
            Education & Experience
          </h2>
          <p className="mt-2 text-base text-slate-300 leading-relaxed">
            Academic qualifications, professional learning and work experience.
          </p>
        </div>

        {/* Education and Experience Groups */}
        <div className="space-y-14">
          {groups.map((group) => {
            const GroupIcon = group.icon;
            const items = experienceTimeline.filter((item) => item.type === group.type);

            return (
              <div key={group.type}>
                <div className="mb-7">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <GroupIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{group.title}</h3>
                  </div>
                  <p className="text-base text-slate-400">{group.description}</p>
                </div>

                <div className="relative border-l border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8">
                  {items.map((item) => {
                    const skillsExpanded = expandedSkills[item.id] ?? false;
                    const visibleSkills = skillsExpanded
                      ? item.skills ?? []
                      : (item.skills ?? []).slice(0, 6);

                    return (
                      <div key={item.id} className="relative group">

                        {/* Timeline Node */}
                        <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#080d17] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 transition-transform">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        </div>

                        {/* Entry Card */}
                        <div className="p-4 sm:p-5 rounded-2xl bg-[#090f1a] border border-slate-800 hover:border-slate-700 transition-all shadow-xl">
                          <div className="grid grid-cols-1 sm:grid-cols-[220px_minmax(0,1fr)] gap-5 items-start">

                            {/* Entry Photo - Left Side */}
                            <div className="w-full rounded-2xl bg-[#090f1a] border border-slate-800 shadow-xl overflow-hidden flex items-center justify-center p-3">
                              <img
                                src={entryImages[item.id]}
                                alt={`${item.organization} image`}
                                className="w-full h-auto object-contain object-center"
                              />
                            </div>

                            {/* Entry Details - Right Side */}
                            <div className="min-w-0 space-y-4">

                              {/* Header */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                            <div>
                              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                                <GroupIcon className="w-3.5 h-3.5" />
                                <span>{group.title.toUpperCase()}</span>
                                <span aria-hidden="true">·</span>
                                <span className="text-slate-400">{item.organization}</span>
                              </div>

                              <h4 className="text-base sm:text-lg font-bold text-white">
                                {item.role}
                              </h4>
                            </div>

                            <div className="text-xs font-mono text-slate-400 flex flex-col sm:items-end gap-1">
                              <span className="flex items-center gap-1.5 text-slate-300">
                                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                                <span>{item.period}</span>
                              </span>
                              <span className="flex items-center gap-1.5 text-slate-500">
                                <MapPin className="w-3 h-3" />
                                <span>{item.location}</span>
                              </span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                            {item.description}
                          </p>

                          {/* Education Highlights */}
                          {item.bullets.length > 0 && (
                            <div className="space-y-1.5 pt-1">
                              <div className="text-[11px] font-mono uppercase text-slate-500">
                                Academic Highlights
                              </div>
                              <ul className="space-y-1.5 text-xs text-slate-400">
                                {item.bullets.map((bullet, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <span className="text-cyan-400 shrink-0 font-mono">›</span>
                                    <span className="leading-relaxed">{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Professional Skills */}
                          {item.skills && item.skills.length > 0 && (
                            <div className="pt-1">
                              <div className="text-[11px] font-mono uppercase text-slate-500 mb-3">
                                Professional Skills
                              </div>

                              <div className="flex flex-wrap gap-2">
                                {visibleSkills.map((skill) => (
                                  <span
                                    key={skill}
                                    className="px-3 py-1.5 rounded-lg text-xs text-slate-300 bg-[#0b1524] border border-slate-800"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>

                              {item.skills.length > 6 && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    setExpandedSkills((previous) => ({
                                      ...previous,
                                      [item.id]: !skillsExpanded,
                                    }))
                                  }
                                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                  {skillsExpanded ? (
                                    <>
                                      Show less <ChevronUp className="w-3.5 h-3.5" />
                                    </>
                                  ) : (
                                    <>
                                      Show all ({item.skills.length}) <ChevronDown className="w-3.5 h-3.5" />
                                    </>
                                  )}
                                </button>
                              )}
                            </div>
                          )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};



