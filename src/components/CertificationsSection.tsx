import React, { useMemo, useState } from 'react';
import {
  Award,
  ExternalLink,
  Network,
  ShieldCheck,
  Cloud,
  Monitor,
  Layers,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

type BadgeCategory = 'Networking' | 'Security' | 'Cloud' | 'Systems' | 'Other';

interface Badge {
  id: number;
  name: string;
  issuer: string;
  date: string;
  category: BadgeCategory;
  image?: string;
  source: 'Credly' | 'Other';
}

const credlyProfile = 'https://www.credly.com/users/yesmin-jalaldeen';

const badges: Badge[] = [
  { id: 1, name: 'CCNP: Core Networking', issuer: 'Cisco', date: 'Apr 22, 2026', category: 'Networking', image: 'https://images.credly.com/images/aaa39096-a829-4dc6-bedb-3ba80b1d934c/CCNPENCOR__1_.png', source: 'Credly' },
  { id: 2, name: 'Multicloud Network Associate', issuer: 'Aviatrix', date: 'Expires Sep 27, 2028', category: 'Cloud', image: 'https://images.credly.com/images/e3c001fd-161d-433a-a7a4-049556d6112d/blob', source: 'Credly' },
  { id: 3, name: 'CCNA: Enterprise Networking, Security, and Automation', issuer: 'Cisco', date: 'Sep 23, 2025', category: 'Networking', image: 'https://images.credly.com/images/0a6d331e-8abf-4272-a949-33f754569a76/CCNAENSA__1_.png', source: 'Credly' },
  { id: 4, name: 'Networking Devices and Initial Configuration', issuer: 'Cisco', date: 'Sep 21, 2025', category: 'Networking', image: 'https://images.credly.com/images/88316fe8-5651-4e61-a6be-5be1558f049e/image.png', source: 'Credly' },
  { id: 5, name: 'Network Support and Security', issuer: 'Cisco', date: 'Sep 21, 2025', category: 'Security', image: 'https://images.credly.com/images/a4dd891f-7bf5-4938-8241-50dc81e8cc00/image.png', source: 'Credly' },
  { id: 6, name: 'Network Technician Career Path', issuer: 'Cisco', date: 'Sep 21, 2025', category: 'Networking', image: 'https://images.credly.com/images/978f88dc-c247-4093-9d39-6efac3651297/image.png', source: 'Credly' },
  { id: 7, name: 'LFS179: Introduction to Nephio', issuer: 'The Linux Foundation', date: 'Aug 30, 2025', category: 'Systems', image: 'https://images.credly.com/images/764dabf3-73eb-40e1-9d75-4218b7f6c984/blob', source: 'Credly' },
  { id: 8, name: 'CCNA: Switching, Routing, and Wireless Essentials', issuer: 'Cisco', date: 'Jun 10, 2025', category: 'Networking', image: 'https://images.credly.com/images/f4ccdba9-dd65-4349-baad-8f05df116443/CCNASRWE__1_.png', source: 'Credly' },
  { id: 9, name: 'Computer Hardware Basics', issuer: 'Cisco', date: 'Jun 9, 2025', category: 'Systems', image: 'https://images.credly.com/images/19e742ef-13be-4d26-87ed-ac8f5fd0643c/image.png', source: 'Credly' },
  { id: 10, name: 'Network Addressing and Basic Troubleshooting', issuer: 'Cisco', date: 'Jun 9, 2025', category: 'Networking', image: 'https://images.credly.com/images/49c099bd-8542-4f48-8c03-f21799dcaf51/image.png', source: 'Credly' },
  { id: 11, name: 'Operating Systems Basics', issuer: 'Cisco', date: 'Jun 9, 2025', category: 'Systems', image: 'https://images.credly.com/images/dcdf1a3c-2594-4f4c-a33a-050b4bca58b5/image.png', source: 'Credly' },
  { id: 12, name: 'Networking Basics', issuer: 'Cisco', date: 'May 30, 2025', category: 'Networking', image: 'https://images.credly.com/images/5bdd6a39-3e03-4444-9510-ecff80c9ce79/image.png', source: 'Credly' },
  { id: 13, name: 'CCNA: Introduction to Networks', issuer: 'Cisco', date: 'May 29, 2025', category: 'Networking', image: 'https://images.credly.com/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png', source: 'Credly' },
  { id: 14, name: 'Networking Academy Learn-A-Thon 2023', issuer: 'Cisco', date: 'Nov 19, 2023', category: 'Networking', image: 'https://images.credly.com/images/b1395248-483c-48cd-b40d-7fe93837c37d/image.png', source: 'Credly' },
  { id: 15, name: 'Cybersecurity Essentials', issuer: 'Cisco', date: 'Oct 7, 2022', category: 'Security', image: 'https://images.credly.com/images/054913b2-e271-49a2-a1a4-9bf1c1f9a404/CyberEssentials.png', source: 'Credly' },
  { id: 16, name: 'Introduction to IoT', issuer: 'Cisco', date: 'Apr 19, 2021', category: 'Systems', image: 'https://images.credly.com/images/fce226c2-0f13-4e17-b60c-24fa6ffd88cb/Intro2IoT.png', source: 'Credly' },
  { id: 17, name: 'Introduction to Cybersecurity', issuer: 'Cisco', date: 'Dec 9, 2020', category: 'Security', image: 'https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png', source: 'Credly' },
  {
    id: 18,
    name: 'Advanced Linux Program',
    issuer: 'Free and Open-Source Software Community - University of Kelaniya',
    date: 'Dec 14, 2025',
    category: 'Other',
    image: 'https://images.credly.com/images/e34ab7c9-2790-4a8d-909d-d5bbb3cd3beb/assertion-pvu6cgELRL2dmAezgxBOfw_cached_image_20261026-32-i8gjxq.png',
    source: 'Other',
  },
];

export const certificationBadgeCount = badges.length;

const filters = ['All', 'Networking', 'Security', 'Cloud', 'Systems', 'Other'] as const;

const categoryIcon = (category: BadgeCategory) => {
  switch (category) {
    case 'Networking': return Network;
    case 'Security': return ShieldCheck;
    case 'Cloud': return Cloud;
    case 'Systems': return Monitor;
    default: return Layers;
  }
};

export const CertificationsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [showAll, setShowAll] = useState(false);

  const filteredBadges = useMemo(
    () => activeFilter === 'All'
      ? badges
      : badges.filter((badge) => badge.category === activeFilter),
    [activeFilter]
  );

  const visibleBadges = showAll ? filteredBadges : filteredBadges.slice(0, 8);

  return (
    <section id="certifications" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>07</span>
            <span aria-hidden="true">/</span>
            <span className="uppercase tracking-wider">Industry Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Credentials
          </h2>
          <p className="mt-2 text-base text-slate-300 leading-relaxed">
            Professional development and verified learning achievements in networking,
            cybersecurity, cloud technologies and systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-1 rounded-2xl bg-[#090f1a] border border-slate-800 p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Badge Wallet</p>
                <p className="text-xs text-slate-400">Professional learning achievements</p>
              </div>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-5xl font-bold text-white tabular-nums">18</span>
              <span className="text-sm text-slate-400 pb-1">Total badges</span>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="rounded-xl bg-[#050810] border border-slate-800 p-3">
                <p className="text-2xl font-bold text-cyan-400">17</p>
                <p className="text-xs text-slate-400">Credly badges</p>
              </div>
              <div className="rounded-xl bg-[#050810] border border-slate-800 p-3">
                <p className="text-2xl font-bold text-cyan-400">1</p>
                <p className="text-xs text-slate-400">Other badge</p>
              </div>
            </div>
            <a
              href={credlyProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              View Credly Profile <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-2 rounded-2xl bg-[#090f1a] border border-slate-800 p-6 shadow-xl flex flex-col justify-center">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-5">
              Skills Wallet
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { name: 'Networking', count: badges.filter(b => b.category === 'Networking').length, icon: Network },
                { name: 'Security', count: badges.filter(b => b.category === 'Security').length, icon: ShieldCheck },
                { name: 'Cloud', count: badges.filter(b => b.category === 'Cloud').length, icon: Cloud },
                { name: 'Systems', count: badges.filter(b => b.category === 'Systems').length, icon: Monitor },
                { name: 'Other', count: badges.filter(b => b.category === 'Other').length, icon: Layers },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="rounded-xl bg-[#050810] border border-slate-800 p-4">
                    <Icon className="w-5 h-5 text-cyan-400 mb-3" />
                    <p className="text-xl font-bold text-white">{item.count}</p>
                    <p className="text-xs text-slate-400">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-white">Verified Badges</h3>
            <p className="text-sm text-slate-400 mt-1">Browse achievements by category</p>
          </div>
          <span className="text-xs font-mono text-cyan-400">
            {filteredBadges.length} BADGES
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-7">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => {
                setActiveFilter(filter);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-mono border transition-all ${
                activeFilter === filter
                  ? 'bg-cyan-950/70 border-cyan-700 text-cyan-300'
                  : 'bg-[#090f1a] border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white'
              }`}
            >
              {filter}
              {filter === 'All' ? ` (${badges.length})` : ` (${badges.filter(b => b.category === filter).length})`}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleBadges.map((badge) => {
            const Icon = categoryIcon(badge.category);
            return (
              <a
                key={badge.id}
                href={credlyProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-[#090f1a] border border-slate-800 hover:border-cyan-800/70 p-4 transition-all shadow-lg flex flex-col"
                title={`View ${badge.name} on Credly`}
              >
                <div className="aspect-square rounded-xl bg-[#050810] border border-slate-800 flex items-center justify-center p-4 mb-4 overflow-hidden">
                  {badge.image ? (
                    <img src={badge.image} alt={badge.name} className="w-full h-full object-contain" loading="lazy" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                      <div className="w-16 h-16 rounded-full border border-cyan-800/60 bg-cyan-950/40 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase">Badge image pending</span>
                    </div>
                  )}
                </div>
                <p className="text-sm font-semibold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                  {badge.name}
                </p>
                <p className="text-xs text-slate-400 mt-2">{badge.issuer}</p>
                <div className="mt-auto pt-4">
                  <p className="text-[11px] text-slate-500 font-mono">{badge.date}</p>
                  <div className="flex items-center justify-between gap-2 mt-3 pt-3 border-t border-slate-800/80">
                    <span className="text-[10px] font-mono text-cyan-400">{badge.source}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {filteredBadges.length > 8 && (
          <div className="flex justify-center mt-8">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 bg-[#090f1a] text-sm text-slate-300 hover:text-cyan-300 hover:border-cyan-800 transition-all"
            >
              {showAll ? 'Show Less' : 'Show All Badges'}
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};







