import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Terminal, 
  Mail, 
  MapPin, 
  Briefcase,
  GraduationCap
} from 'lucide-react';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <span>08</span>
              <span aria-hidden="true">/</span>
              <span className="uppercase tracking-wider">Curriculum Vitae</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white" style={{ textWrap: 'balance' }}>
              Structured Technical Resume
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl">
              Concise summary of networking competencies, routing/switching lab practicum, and infrastructure qualifications tailored for engineering recruiters and hiring managers.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href={portfolioConfig.personalInfo.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>

        {/* On-Page Resume Card Viewer */}
        <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-2xl bg-[#090f1a] border border-slate-800 shadow-2xl space-y-8 text-xs sm:text-sm">
          
          {/* Resume Header */}
          <div className="pb-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {portfolioConfig.personalInfo.name}
              </h3>
              <div className="text-xs font-mono text-cyan-400 mt-1">
                {portfolioConfig.personalInfo.role} · {portfolioConfig.personalInfo.subRole}
              </div>
            </div>

            <div className="text-xs font-mono text-slate-400 space-y-1 sm:text-right">
              <div>{portfolioConfig.personalInfo.email}</div>
              <div>{portfolioConfig.personalInfo.location}</div>
              <div className="text-emerald-400">Available for Internships / Junior Roles</div>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
              Professional Summary
            </div>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              Network Engineering undergraduate equipped with solid theoretical understanding and extensive hands-on configuration experience across enterprise routing protocols (OSPF, BGP), campus switching (802.1Q, Rapid PVST+, EtherChannel LACP), perimeter network security (extended ACLs, stateful inspection, IPsec VPN), and deep packet diagnostics via Wireshark. Passionate about engineering high-availability topologies and streamlining operations through Python automation.
            </p>
          </div>

          {/* Section: Core Technical Skills Matrix */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
              Technical Competencies Matrix
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-[#050810] border border-slate-800 space-y-1">
                <span className="text-slate-200 font-semibold block">Routing & WAN Protocols:</span>
                <span className="text-slate-400">
                  OSPFv2/v3 (Multi-Area, ABR, summarization), BGP (eBGP peering, AS-Path), Static/Floating routes, HSRP/VRRP gateway redundancy, EIGRP.
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#050810] border border-slate-800 space-y-1">
                <span className="text-slate-200 font-semibold block">Campus Switching & Layer 2:</span>
                <span className="text-slate-400">
                  IEEE 802.1Q VLAN Trunking, Rapid PVST+, EtherChannel (LACP/PAgP), Port Security (Sticky MAC), Layer 3 SVI routing, DHCP Snooping, DAI.
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#050810] border border-slate-800 space-y-1">
                <span className="text-slate-200 font-semibold block">Security & Infrastructure:</span>
                <span className="text-slate-400">
                  Standard/Extended ACLs, Site-to-Site IPsec VPN, Stateful Firewall filtering, NAT/PAT, AAA (RADIUS/TACACS+), SSHv2 device hardening.
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#050810] border border-slate-800 space-y-1">
                <span className="text-slate-200 font-semibold block">Diagnostics & Automation Tools:</span>
                <span className="text-slate-400">
                  Wireshark packet capture analysis, Cisco Packet Tracer, GNS3, EVE-NG, Python (Netmiko/Paramiko), Linux iproute2, Git.
                </span>
              </div>
            </div>
          </div>

          {/* Section: Education */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
              Education
            </div>
            <div className="flex justify-between items-baseline flex-wrap gap-1">
              <span className="font-semibold text-white">Bachelor of Science in Network Engineering</span>
              <span className="text-xs font-mono text-slate-400">Expected 2027</span>
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              University of Technology · Engineering Department
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Relevant Coursework: Advanced TCP/IP Architectures, Enterprise Routing & Switching, Network Security & Cryptography, Unix/Linux Systems Administration, Network Automation.
            </p>
          </div>

          {/* Section: Key Labs & Projects */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
              Key Engineering Projects & Labs
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-mono">▸</span>
                <div>
                  <strong className="text-white">High-Availability Campus Network Design:</strong> Architected 3-tier Cisco campus network with dual Catalyst 3850 cores running HSRP and 802.1w Rapid-PVST+ root priority tuning, supporting 1,200+ host endpoints with sub-second failover.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-mono">▸</span>
                <div>
                  <strong className="text-white">Multi-Area OSPF Enterprise WAN:</strong> Implemented hierarchical OSPF across Area 0 backbone and branch areas, configuring ABR route summarization that reduced routing tables by 68%.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-mono">▸</span>
                <div>
                  <strong className="text-white">Automated Switch Provisioning Toolkit (Python/Netmiko):</strong> Developed script to batch-configure 20+ Cisco switches over SSH, reducing VLAN provisioning duration from 2 hours to 30 seconds.
                </div>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
