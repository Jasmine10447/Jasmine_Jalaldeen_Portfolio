import React from 'react';
import { portfolioConfig, networkProjects, skillCategories } from '../data/portfolioData';
import { certificationBadgeCount } from './CertificationsSection';
import {
  FolderKanban,
  Award,
  Network,
  BriefcaseBusiness,
  GraduationCap,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const totalSkills = skillCategories.reduce(
    (total, category) => total + category.skills.length,
    0
  );

  const metrics = [
    {
      label: 'Network Projects',
      value: `${networkProjects.length}+`,
      icon: FolderKanban,
    },
    {
      label: 'Certifications',
      value: `${certificationBadgeCount}+`,
      icon: Award,
    },
    {
      label: 'Technical Skills',
      value: `${totalSkills}+`,
      icon: Network,
    },
    {
      label: 'Professional Experience',
      value: '1+',
      icon: BriefcaseBusiness,
    },
    {
      label: 'GPA',
      value: '3.36+',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Full Profile Photo */}
          <div className="order-2 lg:order-none lg:col-span-5">
            <div className="rounded-2xl bg-[#090f1a] border border-slate-800 shadow-xl overflow-hidden flex items-center justify-center p-3">
              <img
                src="/profile.jpg"
                alt={`${portfolioConfig.personalInfo.name} - Profile`}
                className="w-full h-auto object-contain object-center"
              />
            </div>
          </div>

          {/* Right Column: About Content and Counters */}
          <div className="contents lg:block lg:col-span-7 lg:space-y-6">
            {/* Section Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <span>02</span>
                <span aria-hidden="true">/</span>
                <span className="uppercase tracking-wider">About the Future Engineer</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white" style={{ textWrap: 'balance' }}>
                Building, Understanding & Connecting Networks
              </h2>

            </div>

            {/* About Narrative */}
            <div className="order-3 space-y-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              <p>
                I am an IT graduate with a Bachelor of Information Technology (Honours), specialized
                in Computer Networks, and a strong interest in network engineering, infrastructure,
                and administration. I enjoy understanding how networks operate, how devices
                communicate, and how different technologies work together to build reliable and
                efficient network environments.
              </p>

              <p>
                Through academic projects and hands-on learning, I have gained practical experience
                designing, configuring, and troubleshooting network environments using Cisco IOS,
                GNS3, Cisco Packet Tracer, pfSense, and Wireshark. My experience includes working
                with VLANs, routing and switching, subnetting, network security, VPNs, access control,
                and firewall configuration.
              </p>

              <p>
                I believe in building strong technical foundations through practical experience,
                continuous learning, and a methodical approach to problem-solving. I am eager to
                expand my knowledge, gain industry exposure, and contribute to real-world IT
                infrastructure environments as I continue developing my career in Network Engineering.
              </p>
            </div>

          </div>
        </div>
        {/* Five Portfolio Counters - Full Width */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-8 justify-items-center">
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <div key={metric.label} className="w-full min-w-0 p-4 sm:p-5 rounded-xl bg-[#090f1a] border border-slate-800 flex flex-col items-center text-center">
                <Icon className="w-5 h-5 text-cyan-400 mb-3" />
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium mt-2">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};











