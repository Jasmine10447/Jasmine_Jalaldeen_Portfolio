import React from 'react';

interface LabDiagramVisualProps {
  labId: string;
}

export const LabDiagramVisual: React.FC<LabDiagramVisualProps> = ({ labId }) => {
  switch (labId) {
    case 'lab-01':
      // LAB 01: Enterprise VLAN & Inter-VLAN Routing
      return (
        <div className="relative w-full h-full bg-[#050913] overflow-hidden flex items-center justify-center p-2 select-none">
          <div className="absolute inset-0 bg-network-grid opacity-30 pointer-events-none" />
          <svg viewBox="0 0 400 200" className="w-full h-full max-h-[190px]">
            <defs>
              <linearGradient id="vlanTrunkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>
            </defs>

            {/* Top Router: R1-CORE (Router on a Stick) */}
            <g transform="translate(200, 32)">
              <circle r="18" fill="#0b1322" stroke="#38bdf8" strokeWidth="2" />
              <path d="M -8 -4 L 8 4 M -8 4 L 8 -4 M 0 -8 L 0 8 M -8 0 L 8 0" stroke="#38bdf8" strokeWidth="1.5" />
              <text y="28" textAnchor="middle" className="text-[10px] font-mono font-bold fill-cyan-300">R1-CORE</text>
              <text y="38" textAnchor="middle" className="text-[8px] font-mono fill-slate-400">Gi0/0 (.10, .20, .30)</text>
            </g>

            {/* Trunk Link R1 to Switch */}
            <line x1="200" y1="52" x2="200" y2="95" stroke="url(#vlanTrunkGrad)" strokeWidth="3" strokeDasharray="4 2" />
            <circle cx="200" cy="74" r="3" fill="#38bdf8" className="animate-pulse">
              <animate attributeName="cy" values="52;95;52" dur="2.2s" repeatCount="indefinite" />
            </circle>
            <rect x="206" y="65" width="86" height="15" rx="3" fill="#080e1c" stroke="#38bdf8" strokeWidth="0.8" />
            <text x="249" y="76" textAnchor="middle" className="text-[8px] font-mono fill-cyan-300 font-bold">802.1Q TRUNK</text>

            {/* Middle Switch: SW-DIST-01 */}
            <g transform="translate(200, 110)">
              <rect x="-42" y="-14" width="84" height="28" rx="6" fill="#0c1629" stroke="#818cf8" strokeWidth="2" />
              <text y="2" textAnchor="middle" className="text-[10px] font-mono font-bold fill-indigo-200">SW-DIST (L2/L3)</text>
              <text y="11" textAnchor="middle" className="text-[7.5px] font-mono fill-indigo-400">VLAN TAGGING ENGINE</text>
            </g>

            {/* Links from Switch to VLAN Workstations */}
            <path d="M 170 124 L 70 152" fill="none" stroke="#06b6d4" strokeWidth="1.8" />
            <path d="M 200 124 L 200 152" fill="none" stroke="#a855f7" strokeWidth="1.8" />
            <path d="M 230 124 L 330 152" fill="none" stroke="#10b981" strokeWidth="1.8" />

            {/* VLAN 10 Pod (Sales) */}
            <g transform="translate(70, 165)">
              <rect x="-45" y="-13" width="90" height="32" rx="5" fill="#042f2e" stroke="#06b6d4" strokeWidth="1.2" />
              <text y="-1" textAnchor="middle" className="text-[9px] font-mono font-bold fill-cyan-300">VLAN 10 · SALES</text>
              <text y="11" textAnchor="middle" className="text-[7.5px] font-mono fill-cyan-400">192.168.10.0/24</text>
            </g>

            {/* VLAN 20 Pod (Engineering) */}
            <g transform="translate(200, 165)">
              <rect x="-45" y="-13" width="90" height="32" rx="5" fill="#2e1065" stroke="#a855f7" strokeWidth="1.2" />
              <text y="-1" textAnchor="middle" className="text-[9px] font-mono font-bold fill-purple-300">VLAN 20 · ENG</text>
              <text y="11" textAnchor="middle" className="text-[7.5px] font-mono fill-purple-400">192.168.20.0/24</text>
            </g>

            {/* VLAN 30 Pod (Management) */}
            <g transform="translate(330, 165)">
              <rect x="-45" y="-13" width="90" height="32" rx="5" fill="#064e3b" stroke="#10b981" strokeWidth="1.2" />
              <text y="-1" textAnchor="middle" className="text-[9px] font-mono font-bold fill-emerald-300">VLAN 30 · MGMT</text>
              <text y="11" textAnchor="middle" className="text-[7.5px] font-mono fill-emerald-400">192.168.30.0/24</text>
            </g>
          </svg>
        </div>
      );

    case 'lab-02':
      // LAB 02: OSPF Multi-Area Dynamic Routing
      return (
        <div className="relative w-full h-full bg-[#050913] overflow-hidden flex items-center justify-center p-2 select-none">
          <div className="absolute inset-0 bg-network-grid opacity-30 pointer-events-none" />
          <svg viewBox="0 0 400 200" className="w-full h-full max-h-[190px]">
            {/* Area 0 Cloud / Zone */}
            <rect x="135" y="20" width="130" height="155" rx="16" fill="#0a1a36" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="4 3" />
            <text x="200" y="38" textAnchor="middle" className="text-[9px] font-mono font-bold fill-cyan-400 tracking-wider">AREA 0 (BACKBONE)</text>

            {/* Area 10 Zone (Left) */}
            <rect x="15" y="45" width="105" height="115" rx="14" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.2" strokeDasharray="4 3" />
            <text x="67" y="62" textAnchor="middle" className="text-[9px] font-mono font-bold fill-indigo-300">AREA 10 · BRANCH</text>

            {/* Area 20 Zone (Right) */}
            <rect x="280" y="45" width="105" height="115" rx="14" fill="#064e3b" stroke="#34d399" strokeWidth="1.2" strokeDasharray="4 3" />
            <text x="332" y="62" textAnchor="middle" className="text-[9px] font-mono font-bold fill-emerald-300">AREA 20 · DC</text>

            {/* Links between Routers */}
            <line x1="70" y1="110" x2="165" y2="100" stroke="#818cf8" strokeWidth="2.5" />
            <line x1="165" y1="100" x2="235" y2="100" stroke="#38bdf8" strokeWidth="3" />
            <line x1="235" y1="100" x2="330" y2="110" stroke="#34d399" strokeWidth="2.5" />

            {/* Moving OSPF Hello / LSA packet */}
            <circle cx="115" cy="105" r="3.5" fill="#38bdf8">
              <animate attributeName="cx" values="70;200;330;200;70" dur="4s" repeatCount="indefinite" />
            </circle>

            {/* Router 1: R-BRANCH (Area 10) */}
            <g transform="translate(67, 110)">
              <circle r="16" fill="#0b1329" stroke="#818cf8" strokeWidth="2" />
              <path d="M -6 -3 L 6 3 M -6 3 L 6 -3" stroke="#818cf8" strokeWidth="1.5" />
              <text y="24" textAnchor="middle" className="text-[9px] font-mono font-bold fill-slate-200">R-BR10</text>
              <text y="33" textAnchor="middle" className="text-[7.5px] font-mono fill-indigo-400">RID 2.2.2.2</text>
            </g>

            {/* Router 2: R-HQ-CORE (ABR 1) */}
            <g transform="translate(165, 100)">
              <circle r="18" fill="#06203d" stroke="#38bdf8" strokeWidth="2.2" />
              <path d="M -7 -4 L 7 4 M -7 4 L 7 -4" stroke="#38bdf8" strokeWidth="1.8" />
              <text y="26" textAnchor="middle" className="text-[9.5px] font-mono font-bold fill-cyan-200">ABR-01</text>
              <text y="36" textAnchor="middle" className="text-[7.5px] font-mono fill-cyan-400">RID 1.1.1.1</text>
            </g>

            {/* Router 3: R-DC-CORE (ABR 2) */}
            <g transform="translate(235, 100)">
              <circle r="18" fill="#06203d" stroke="#38bdf8" strokeWidth="2.2" />
              <path d="M -7 -4 L 7 4 M -7 4 L 7 -4" stroke="#38bdf8" strokeWidth="1.8" />
              <text y="26" textAnchor="middle" className="text-[9.5px] font-mono font-bold fill-cyan-200">ABR-02</text>
              <text y="36" textAnchor="middle" className="text-[7.5px] font-mono fill-cyan-400">RID 3.3.3.3</text>
            </g>

            {/* Router 4: R-DC (Area 20) */}
            <g transform="translate(332, 110)">
              <circle r="16" fill="#062e24" stroke="#34d399" strokeWidth="2" />
              <path d="M -6 -3 L 6 3 M -6 3 L 6 -3" stroke="#34d399" strokeWidth="1.5" />
              <text y="24" textAnchor="middle" className="text-[9px] font-mono font-bold fill-slate-200">R-DC20</text>
              <text y="33" textAnchor="middle" className="text-[7.5px] font-mono fill-emerald-400">RID 4.4.4.4</text>
            </g>

            {/* Bottom Telemetry Tag */}
            <rect x="135" y="152" width="130" height="15" rx="3" fill="#080d1a" stroke="#1e293b" />
            <text x="200" y="163" textAnchor="middle" className="text-[7.5px] font-mono fill-slate-300">LSA TYPE 1, 2, 3 SUMMARIZED</text>
          </svg>
        </div>
      );

    case 'lab-03':
      // LAB 03: Perimeter Security & Extended ACLs
      return (
        <div className="relative w-full h-full bg-[#050913] overflow-hidden flex items-center justify-center p-2 select-none">
          <div className="absolute inset-0 bg-network-grid opacity-30 pointer-events-none" />
          <svg viewBox="0 0 400 200" className="w-full h-full max-h-[190px]">
            {/* Untrusted WAN / Internet (Left) */}
            <g transform="translate(50, 95)">
              <ellipse cx="0" cy="0" rx="36" ry="24" fill="#081426" stroke="#475569" strokeWidth="1.5" />
              <text y="-3" textAnchor="middle" className="text-[9px] font-mono font-bold fill-slate-300">INTERNET</text>
              <text y="9" textAnchor="middle" className="text-[7.5px] font-mono fill-slate-500">Untrusted WAN</text>
            </g>

            {/* Line from Internet to Firewall */}
            <line x1="86" y1="95" x2="160" y2="95" stroke="#64748b" strokeWidth="2" />
            <text x="120" y="87" textAnchor="middle" className="text-[7.5px] font-mono fill-slate-400">INBOUND</text>

            {/* Firewall Barrier Wall & Gate */}
            <g transform="translate(190, 95)">
              {/* Firewall Brick Container */}
              <rect x="-24" y="-55" width="48" height="110" rx="8" fill="#180c10" stroke="#f43f5e" strokeWidth="2" />
              {/* Brick line patterns */}
              <line x1="-24" y1="-25" x2="24" y2="-25" stroke="#f43f5e" strokeWidth="1" opacity="0.6" />
              <line x1="-24" y1="5" x2="24" y2="5" stroke="#f43f5e" strokeWidth="1" opacity="0.6" />
              <line x1="-24" y1="35" x2="24" y2="35" stroke="#f43f5e" strokeWidth="1" opacity="0.6" />
              <text y="-33" textAnchor="middle" className="text-[9px] font-mono font-bold fill-rose-300">NGFW</text>
              <text y="-8" textAnchor="middle" className="text-[7.5px] font-mono font-bold fill-rose-400">EXTENDED</text>
              <text y="1" textAnchor="middle" className="text-[7.5px] font-mono font-bold fill-rose-400">ACLs</text>
              <text y="22" textAnchor="middle" className="text-[7px] font-mono fill-slate-300">SPI FILTER</text>
            </g>

            {/* Allowed Traffic (Green Arrow to DMZ Server) */}
            <path d="M 214 75 L 305 50" fill="none" stroke="#10b981" strokeWidth="2.5" />
            <polygon points="307,50 297,46 300,55" fill="#10b981" />
            <rect x="220" y="44" width="70" height="14" rx="3" fill="#042f2e" stroke="#10b981" strokeWidth="0.8" />
            <text x="255" y="54" textAnchor="middle" className="text-[7.5px] font-mono fill-emerald-300 font-bold">PERMIT TCP 443</text>

            {/* DMZ Web Server */}
            <g transform="translate(340, 50)">
              <rect x="-35" y="-14" width="70" height="28" rx="5" fill="#0a2a22" stroke="#10b981" strokeWidth="1.5" />
              <text y="0" textAnchor="middle" className="text-[9px] font-mono font-bold fill-emerald-200">DMZ WEB</text>
              <text y="9" textAnchor="middle" className="text-[7.5px] font-mono fill-emerald-400">192.168.100.10</text>
            </g>

            {/* Denied Traffic (Red X to Internal Finance) */}
            <path d="M 214 115 L 305 140" fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 3" />
            <g transform="translate(255, 128)">
              <circle r="7" fill="#4c0519" stroke="#f43f5e" strokeWidth="1" />
              <text y="3" textAnchor="middle" className="text-[9px] font-mono font-bold fill-rose-300">✕</text>
            </g>
            <rect x="220" y="142" width="72" height="14" rx="3" fill="#3f0714" stroke="#f43f5e" strokeWidth="0.8" />
            <text x="256" y="152" textAnchor="middle" className="text-[7.5px] font-mono fill-rose-300 font-bold">DENY IP ANY LOG</text>

            {/* Internal Finance Database */}
            <g transform="translate(340, 140)">
              <rect x="-38" y="-14" width="76" height="28" rx="5" fill="#1c1917" stroke="#e11d48" strokeWidth="1.5" />
              <text y="0" textAnchor="middle" className="text-[9px] font-mono font-bold fill-rose-200">FINANCE DB</text>
              <text y="9" textAnchor="middle" className="text-[7.5px] font-mono fill-rose-400">172.16.1.50 (SECURE)</text>
            </g>
          </svg>
        </div>
      );

    case 'lab-04':
      // LAB 04: STP & EtherChannel LACP Redundancy
      return (
        <div className="relative w-full h-full bg-[#050913] overflow-hidden flex items-center justify-center p-2 select-none">
          <div className="absolute inset-0 bg-network-grid opacity-30 pointer-events-none" />
          <svg viewBox="0 0 400 200" className="w-full h-full max-h-[190px]">
            {/* Core Switch 1: ROOT BRIDGE (Top Left) */}
            <g transform="translate(100, 50)">
              <rect x="-48" y="-16" width="96" height="32" rx="6" fill="#0c1e3d" stroke="#38bdf8" strokeWidth="2" />
              <text y="-2" textAnchor="middle" className="text-[9.5px] font-mono font-bold fill-cyan-200">SW-CORE-01</text>
              <text y="9" textAnchor="middle" className="text-[7.5px] font-mono font-bold fill-emerald-400">ROOT BRIDGE (P:4096)</text>
            </g>

            {/* Core Switch 2: BACKUP ROOT (Top Right) */}
            <g transform="translate(300, 50)">
              <rect x="-48" y="-16" width="96" height="32" rx="6" fill="#0c1e3d" stroke="#818cf8" strokeWidth="2" />
              <text y="-2" textAnchor="middle" className="text-[9.5px] font-mono font-bold fill-indigo-200">SW-CORE-02</text>
              <text y="9" textAnchor="middle" className="text-[7.5px] font-mono fill-indigo-300">SECONDARY ROOT</text>
            </g>

            {/* Dual Link EtherChannel between Core 1 and Core 2 */}
            <line x1="148" y1="44" x2="252" y2="44" stroke="#38bdf8" strokeWidth="2.5" />
            <line x1="148" y1="56" x2="252" y2="56" stroke="#38bdf8" strokeWidth="2.5" />
            {/* LACP Bundle Ring */}
            <ellipse cx="200" cy="50" rx="20" ry="12" fill="#081a38" stroke="#38bdf8" strokeWidth="1.2" />
            <text x="200" y="53" textAnchor="middle" className="text-[7.5px] font-mono font-bold fill-cyan-300">Po1 · LACP</text>

            {/* Access Switch (Bottom Center) */}
            <g transform="translate(200, 155)">
              <rect x="-48" y="-16" width="96" height="32" rx="6" fill="#0e1726" stroke="#94a3b8" strokeWidth="1.8" />
              <text y="-2" textAnchor="middle" className="text-[9.5px] font-mono font-bold fill-slate-200">SW-ACCESS-01</text>
              <text y="9" textAnchor="middle" className="text-[7.5px] font-mono fill-slate-400">EDGE BPDU GUARD</text>
            </g>

            {/* Left Link: Forwarding (Active Path) */}
            <line x1="100" y1="66" x2="175" y2="139" stroke="#10b981" strokeWidth="2.5" />
            <rect x="110" y="105" width="60" height="13" rx="3" fill="#042f2e" stroke="#10b981" strokeWidth="0.8" />
            <text x="140" y="114" textAnchor="middle" className="text-[7px] font-mono font-bold fill-emerald-300">FORWARDING</text>

            {/* Right Link: Blocked (Discarding Path) */}
            <line x1="300" y1="66" x2="225" y2="139" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
            <rect x="235" y="105" width="58" height="13" rx="3" fill="#451a03" stroke="#f59e0b" strokeWidth="0.8" />
            <text x="264" y="114" textAnchor="middle" className="text-[7px] font-mono font-bold fill-amber-300">BLOCKED (ALT)</text>
            <circle cx="270" cy="95" r="5" fill="#78350f" stroke="#f59e0b" strokeWidth="1" />
            <text x="270" y="98" textAnchor="middle" className="text-[8px] font-bold fill-amber-300">✕</text>
          </svg>
        </div>
      );

    case 'lab-05':
      // LAB 05: Site-to-Site IPsec VPN
      return (
        <div className="relative w-full h-full bg-[#050913] overflow-hidden flex items-center justify-center p-2 select-none">
          <div className="absolute inset-0 bg-network-grid opacity-30 pointer-events-none" />
          <svg viewBox="0 0 400 200" className="w-full h-full max-h-[190px]">
            {/* Left Side: HQ Site */}
            <g transform="translate(65, 80)">
              <rect x="-45" y="-45" width="90" height="95" rx="8" fill="#0b172a" stroke="#0ea5e9" strokeWidth="1.2" />
              <text y="-30" textAnchor="middle" className="text-[9px] font-mono font-bold fill-sky-300">HQ CAMPUS</text>
              <text y="-18" textAnchor="middle" className="text-[7.5px] font-mono fill-slate-400">192.168.10.0/24</text>

              {/* Router */}
              <circle cx="0" cy="18" r="15" fill="#042b4d" stroke="#38bdf8" strokeWidth="2" />
              <text y="21" textAnchor="middle" className="text-[8.5px] font-mono font-bold fill-white">R-HQ</text>
              <text y="42" textAnchor="middle" className="text-[7px] font-mono fill-cyan-400">203.0.113.1</text>
            </g>

            {/* Center: Untrusted WAN Cloud */}
            <ellipse cx="200" cy="98" rx="55" ry="32" fill="#090f1d" stroke="#334155" strokeWidth="1.5" />
            <text x="200" y="94" textAnchor="middle" className="text-[9px] font-mono font-bold fill-slate-400">UNTRUSTED</text>
            <text x="200" y="105" textAnchor="middle" className="text-[7.5px] font-mono fill-slate-500">PUBLIC WAN</text>

            {/* Right Side: Branch Site */}
            <g transform="translate(335, 80)">
              <rect x="-45" y="-45" width="90" height="95" rx="8" fill="#0b172a" stroke="#818cf8" strokeWidth="1.2" />
              <text y="-30" textAnchor="middle" className="text-[9px] font-mono font-bold fill-indigo-300">REMOTE BRANCH</text>
              <text y="-18" textAnchor="middle" className="text-[7.5px] font-mono fill-slate-400">192.168.20.0/24</text>

              {/* Router */}
              <circle cx="0" cy="18" r="15" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
              <text y="21" textAnchor="middle" className="text-[8.5px] font-mono font-bold fill-white">R-BR</text>
              <text y="42" textAnchor="middle" className="text-[7px] font-mono fill-indigo-400">198.51.100.2</text>
            </g>

            {/* Encrypted IPsec Tunnel Over WAN */}
            <path d="M 80 98 Q 200 48 320 98" fill="none" stroke="#06b6d4" strokeWidth="4" strokeDasharray="6 3" />
            <circle cx="200" cy="68" r="4" fill="#38bdf8" className="animate-pulse">
              <animate attributeName="cx" values="90;200;310;200;90" dur="3s" repeatCount="indefinite" />
            </circle>

            {/* Tunnel Security Badge */}
            <rect x="135" y="45" width="130" height="18" rx="4" fill="#042638" stroke="#06b6d4" strokeWidth="1" />
            <text x="200" y="57" textAnchor="middle" className="text-[8px] font-mono font-bold fill-cyan-300">
              🔒 IPsec ESP (AES-256 / SHA-256)
            </text>

            {/* IKE SA Status Tag */}
            <rect x="150" y="145" width="100" height="15" rx="3" fill="#052e16" stroke="#10b981" strokeWidth="0.8" />
            <text x="200" y="155" textAnchor="middle" className="text-[7.5px] font-mono fill-emerald-300 font-bold">
              ● ISAKMP SA: QM_IDLE
            </text>
          </svg>
        </div>
      );

    case 'lab-06':
      // LAB 06: Wireshark Packet Forensics
      return (
        <div className="relative w-full h-full bg-[#050913] overflow-hidden flex items-center justify-center p-2 select-none">
          <div className="absolute inset-0 bg-network-grid opacity-30 pointer-events-none" />
          <svg viewBox="0 0 400 200" className="w-full h-full max-h-[190px]">
            {/* Wireshark Window Header */}
            <rect x="15" y="15" width="370" height="170" rx="8" fill="#030712" stroke="#334155" strokeWidth="1.2" />
            
            {/* Top Filter Bar */}
            <rect x="25" y="24" width="350" height="20" rx="4" fill="#091426" stroke="#38bdf8" strokeWidth="1" />
            <text x="35" y="37" className="text-[8.5px] font-mono fill-cyan-300 font-bold">
              Filter: tcp.flags.syn == 1 || tcp.analysis.retransmission
            </text>
            <circle cx="362" cy="34" r="4" fill="#10b981" />

            {/* Packet Table Rows */}
            {/* Row 1: SYN */}
            <g transform="translate(25, 52)">
              <rect x="0" y="0" width="350" height="20" fill="#0a192f" />
              <text x="8" y="13" className="text-[8px] font-mono fill-slate-400">1</text>
              <text x="28" y="13" className="text-[8px] font-mono fill-slate-300">0.0000</text>
              <text x="75" y="13" className="text-[8px] font-mono fill-cyan-300">192.168.10.15</text>
              <text x="160" y="13" className="text-[8px] font-mono fill-indigo-300">10.0.30.50</text>
              <text x="235" y="13" className="text-[8px] font-mono fill-amber-300 font-bold">TCP</text>
              <text x="268" y="13" className="text-[8px] font-mono fill-emerald-300 font-semibold">[SYN] Seq=0 Win=64240</text>
            </g>

            {/* Row 2: SYN, ACK (Highlighted) */}
            <g transform="translate(25, 75)">
              <rect x="0" y="0" width="350" height="20" fill="#042f2e" stroke="#10b981" strokeWidth="1" />
              <text x="8" y="13" className="text-[8px] font-mono fill-slate-400">2</text>
              <text x="28" y="13" className="text-[8px] font-mono fill-slate-300">0.0012</text>
              <text x="75" y="13" className="text-[8px] font-mono fill-indigo-300">10.0.30.50</text>
              <text x="160" y="13" className="text-[8px] font-mono fill-cyan-300">192.168.10.15</text>
              <text x="235" y="13" className="text-[8px] font-mono fill-amber-300 font-bold">TCP</text>
              <text x="268" y="13" className="text-[8px] font-mono fill-emerald-400 font-bold">[SYN, ACK] Ack=1 Win=65160</text>
            </g>

            {/* Row 3: ACK */}
            <g transform="translate(25, 98)">
              <rect x="0" y="0" width="350" height="20" fill="#0a192f" />
              <text x="8" y="13" className="text-[8px] font-mono fill-slate-400">3</text>
              <text x="28" y="13" className="text-[8px] font-mono fill-slate-300">0.0013</text>
              <text x="75" y="13" className="text-[8px] font-mono fill-cyan-300">192.168.10.15</text>
              <text x="160" y="13" className="text-[8px] font-mono fill-indigo-300">10.0.30.50</text>
              <text x="235" y="13" className="text-[8px] font-mono fill-amber-300 font-bold">TCP</text>
              <text x="268" y="13" className="text-[8px] font-mono fill-sky-300 font-semibold">[ACK] Seq=1 Ack=1</text>
            </g>

            {/* Bottom Protocol Breakdown Tree */}
            <g transform="translate(25, 125)">
              <rect x="0" y="0" width="350" height="52" fill="#080e1c" stroke="#1e293b" />
              <text x="10" y="14" className="text-[7.5px] font-mono fill-slate-400">▸ Frame 2: 74 bytes on wire (592 bits) on SPAN port Gi0/24</text>
              <text x="10" y="26" className="text-[7.5px] font-mono fill-cyan-400">▸ Ethernet II, Src: 00:0c:29:ab:cd:01, Dst: 00:50:79:66:68:01</text>
              <text x="10" y="38" className="text-[7.5px] font-mono fill-sky-300">▸ Internet Protocol Version 4, Src: 10.0.30.50, Dst: 192.168.10.15 [TTL=64]</text>
              <text x="10" y="48" className="text-[7.5px] font-mono fill-emerald-300 font-bold">▾ Transmission Control Protocol, Src Port: 443, Dst Port: 51234 [SYN, ACK]</text>
            </g>
          </svg>
        </div>
      );

    default:
      return null;
  }
};
