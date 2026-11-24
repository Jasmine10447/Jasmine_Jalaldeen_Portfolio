import React, { useState } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { 
  Network, 
  ShieldCheck, 
  Server, 
  Terminal, 
  Cpu, 
  Activity, 
  ArrowRight, 
  FileText, 
  Play, 
  Pause,
  Info,
  CheckCircle2,
  Layers,
  Zap,
  Globe
} from 'lucide-react';

interface TopologyNode {
  id: string;
  label: string;
  sub: string;
  role: 'cloud' | 'firewall' | 'router' | 'switch' | 'server' | 'client' | 'ap';
  ip: string;
  x: number;
  y: number;
  protocol: string;
  status: 'UP' | 'ACTIVE';
  interfaces: string[];
}

export const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedNode, setSelectedNode] = useState<TopologyNode | null>(null);

  const nodes: TopologyNode[] = [
    {
      id: 'wan-cloud',
      label: 'Internet / WAN',
      sub: 'Tier 1 Uplink',
      role: 'cloud',
      ip: '203.0.113.1/30',
      x: 350,
      y: 40,
      protocol: 'BGP AS 64512',
      status: 'UP',
      interfaces: ['Serial0/0/0 (203.0.113.1)'],
    },
    {
      id: 'fw-perimeter',
      label: 'NGFW Perimeter',
      sub: 'Stateful Inspection',
      role: 'firewall',
      ip: '172.16.0.1/30',
      x: 350,
      y: 130,
      protocol: 'IPsec / SPI / NAT',
      status: 'ACTIVE',
      interfaces: ['Gi0/0 Outside (203.0.113.2)', 'Gi0/1 Inside (172.16.0.1)'],
    },
    {
      id: 'r1-core',
      label: 'Core Router R1',
      sub: 'Campus ABR',
      role: 'router',
      ip: '10.0.0.1/24',
      x: 350,
      y: 220,
      protocol: 'OSPFv2 Area 0',
      status: 'UP',
      interfaces: ['Gi0/0 (172.16.0.2)', 'Gi0/1 (10.0.0.1)', 'Gi0/2 (10.10.0.1)'],
    },
    {
      id: 'sw-core',
      label: 'Distribution Switch',
      sub: 'Layer 3 Catalyst',
      role: 'switch',
      ip: '10.0.0.2/24',
      x: 350,
      y: 310,
      protocol: '802.1Q / LACP / RSTP',
      status: 'UP',
      interfaces: ['Po1 (Gi0/1-2 Trunk)', 'Gi0/24 (Uplink R1)', 'Vlan 10,20,30,99 SVI'],
    },
    {
      id: 'srv-dc',
      label: 'Enterprise Servers',
      sub: 'DHCP / DNS / Web',
      role: 'server',
      ip: '10.0.30.50/24',
      x: 120,
      y: 410,
      protocol: 'UDP 53, 67 / TCP 443',
      status: 'UP',
      interfaces: ['eth0 (VLAN 30 Tagged)'],
    },
    {
      id: 'pc-eng',
      label: 'Engineering Lab',
      sub: 'Workstations',
      role: 'client',
      ip: '192.168.20.15/24',
      x: 275,
      y: 410,
      protocol: 'VLAN 20 (Engineering)',
      status: 'UP',
      interfaces: ['Fa0/11 Access Port'],
    },
    {
      id: 'pc-sales',
      label: 'Sales Lab',
      sub: 'Host Endpoints',
      role: 'client',
      ip: '192.168.10.12/24',
      x: 430,
      y: 410,
      protocol: 'VLAN 10 (Sales)',
      status: 'UP',
      interfaces: ['Fa0/5 Access Port'],
    },
    {
      id: 'ap-wifi',
      label: 'Wireless AP & Clients',
      sub: 'Corporate Wi-Fi',
      role: 'ap',
      ip: '192.168.50.1/24',
      x: 580,
      y: 410,
      protocol: '802.11ax / 802.1X',
      status: 'UP',
      interfaces: ['Gi0/1 Access Port (VLAN 50)'],
    },
  ];

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-0 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-network-grid opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-4 gap-x-12 lg:gap-12 items-stretch">
          
          {/* Left Column: Hero Content */}
          <div className="contents lg:col-span-6 lg:flex lg:flex-col lg:justify-between lg:space-y-0 space-y-6">
            
            {/* Kicker */}
            <div className="order-1 flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-bold">01</span>
              <span aria-hidden="true">/</span>
              <span className="tracking-widest uppercase font-semibold">
                NETWORK ENGINEER · INFRASTRUCTURE & SYSTEMS
              </span>
            </div>

            {/* Headline */}
            <h1 className="order-2 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]" style={{ textWrap: 'balance' }}>
              Designing Reliable Networks. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
                Connecting What Matters.
              </span>
            </h1>

            {/* Lead description */}
            <p className="order-4 text-slate-300 text-xl sm:text-2xl leading-relaxed max-w-xl">
              {portfolioConfig.personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="order-5 flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm sm:text-base font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={portfolioConfig.personalInfo.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Column: Framed Profile Portrait */}
          <div className="order-3 lg:order-none lg:col-span-6 flex items-center justify-center lg:justify-center ">
            <div className="w-full max-w-[440px] rounded-2xl bg-[#090f1a] border border-slate-800 shadow-xl overflow-hidden flex items-center justify-center p-3">
              <img
                src="/professional-portrait-cutout.png"
                alt="Yesmin Jalaldeen"
                className="w-full h-auto object-contain object-center"
              />
            </div>
          </div>
        </div>

        {/* Availability Note */}
        <div className="text-xs text-slate-400 flex items-center gap-2 pt-4">
          <span>{portfolioConfig.personalInfo.availability}</span>
        </div>
      </div>
    </section>
  );
};






























