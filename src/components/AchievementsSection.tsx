import React, { useEffect, useState } from 'react';
import { Trophy } from 'lucide-react';

const achievements = [
  {
    title: 'ESOFT Thinkfest Ideathon & Hackathon 2025',
    period: 'July 2025',
    category: 'Level 3 Networking & Cybersecurity',
    recognition: '1st Runner-Up',
    description:
      'Recognised as 1st Runner-Up in the Level 3 Networking and Cybersecurity category, competing in a challenge focused on threat detection, security analysis and incident response.',
    image: '/achievements/thinkfest-hackathon-july-2025.jpeg',
    highlights: [
      'Threat Hunting and Security Log Analysis',
      'Incident Response Planning with NIST Framework Alignment',
      'Security Automation through Scripting',
      'Digital Forensics and Malware Detection',
    ],
  },
  {
    title: 'ESOFT Intercampus Hackathon 2023',
    period: 'October 2023',
    category: 'Intercampus Technology Competition',
    recognition: 'Participation',
    description:
      'Participated in an intercampus technology competition, engaging in collaborative technical challenges and exploring practical approaches to problem-solving through innovation.',
    image: '/achievements/intercampus-hackathon-october-2023.jpeg',
    highlights: [
      'Intercampus Technology Competition',
      'Collaborative Solution Development',
      'Technical Problem Analysis',
      'Team-Based Innovation',
    ],
  },
  {
    title: 'ESOFT Hackathon 2023',
    period: 'March 2023',
    category: 'University-Level Hackathon',
    recognition: 'Participation',
    description:
      'Took part in a university-level hackathon, gaining practical exposure to the process of developing ideas, approaching technical challenges and working collaboratively towards solutions.',
    image: '/achievements/hackathon-march-2023.jpeg',
    highlights: [
      'Applied Technical Knowledge',
      'Creative Problem-Solving',
      'Collaborative Development',
      'Innovative Thinking',
    ],
  },
];

export const AchievementsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const activeAchievement = achievements[activeIndex];

  useEffect(() => {
    if (isHovered) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % achievements.length);
    }, 10000);

    return () => window.clearInterval(interval);
  }, [isHovered]);


  return (
    <section id="achievements" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>06</span>
            <span aria-hidden="true">/</span>
            <span className="uppercase tracking-wider">Achievements & Highlights</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Achievements
          </h2>
          <p className="mt-2 text-base text-slate-300 leading-relaxed">
            Highlights, milestones and accomplishments.
          </p>
        </div>

        {/* Achievement Carousel */}
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="rounded-2xl bg-[#090f1a] border border-slate-800 hover:border-slate-700 transition-all p-5 sm:p-8 shadow-xl">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Achievement Photo */}
            <div className="lg:col-span-5">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                Achievement Photo
              </div>
              <div className="rounded-xl overflow-hidden bg-[#060a12] border border-slate-800 p-2">
                <img
                  key={activeAchievement.image}
                  src={activeAchievement.image}
                  alt={`${activeAchievement.title} achievement`}
                  className="w-full h-64 sm:h-80 lg:h-[390px] object-contain rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Achievement Details */}
            <div className="lg:col-span-7 space-y-5">

              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-cyan-400 font-semibold">
                  ACHIEVEMENT 0{activeIndex + 1}
                </span>
                <span aria-hidden="true">·</span>
                <span>{activeAchievement.period}</span>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-amber-300 bg-amber-950/40 border border-amber-800/50">
                    <Trophy className="w-3.5 h-3.5" />
                    {activeAchievement.recognition}
                  </span>
                  {activeIndex === 0 && (
                    <span className="text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-800/50 px-3 py-1 rounded-full">
                      Networking & Cybersecurity
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {activeAchievement.title}
                </h3>

                <p className="text-sm text-cyan-300 mt-2">
                  {activeAchievement.category}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeAchievement.description}
              </p>

              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Key Highlights
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  {activeAchievement.highlights.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-cyan-400 shrink-0 font-mono">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-slate-800">



            <div className="flex items-center justify-center gap-3 flex-1">
              {achievements.map((achievement, index) => (
                <button
                  key={achievement.title}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to achievement ${index + 1}`}
                  aria-current={activeIndex === index ? 'true' : undefined}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index
                      ? 'w-8 bg-cyan-400'
                      : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <span className="text-xs font-mono text-slate-400">
              {String(activeIndex + 1).padStart(2, '0')} / {String(achievements.length).padStart(2, '0')}
            </span>

          </div>
        </div>
      </div>
    </section>
  );
};





