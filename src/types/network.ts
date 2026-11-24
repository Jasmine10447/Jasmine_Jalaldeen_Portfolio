export type DeviceRole = 'router' | 'switch' | 'firewall' | 'server' | 'client' | 'access-point';

export interface DeviceInterface {
  name: string;
  ip: string;
  subnetMask: string;
  vlan?: number;
  status: 'UP' | 'DOWN' | 'ADMIN_DOWN';
  duplex?: 'Full' | 'Auto';
  speed?: '1000 Mbps' | '100 Mbps';
}

export interface NetworkDevice {
  id: string;
  name: string;
  role: DeviceRole;
  ip: string;
  interfaces: DeviceInterface[];
  status: 'Operational' | 'Warning' | 'Standby';
  protocol?: string;
  vlanMembership?: number[];
  description: string;
  coordinates?: { x: number; y: number };
}

export interface CliConfigBlock {
  device: string;
  prompt: string;
  commands: string[];
  explanation: string;
}

export interface NetworkLab {
  id: string;
  labNumber: string; // e.g. "LAB 01"
  title: string;
  shortDescription: string;
  difficulty: 'Fundamental' | 'Intermediate' | 'Advanced';
  category: 'Routing' | 'Switching' | 'Security' | 'Analysis';
  duration: string;
  technologies: string[];
  tools: string;
  objective: string;
  summary: string;
  keyConcepts: string[];
  topologyType: string;
  devices: NetworkDevice[];
  cliConfigs: CliConfigBlock[];
  verificationCommands: {
    command: string;
    outputSnippet: string;
    description: string;
  }[];
  troubleshootingNotes: string[];
}

export interface NetworkProject {
  id: string;
  title: string;
  category: 'Enterprise Campus' | 'Routing & WAN' | 'Network Security' | 'Automation & Cloud';
  difficulty: 'Intermediate' | 'Advanced' | 'Production-Ready';
  objective: string;
  architectureSummary: string;
  keyImplementations: string[];
  challenges: string;
  solution: string;
  result: string;
  toolsUsed: string[];
  githubUrl: string;
  linkedinUrl?: string;
  featuredLabel?: string;
  period?: string;
  docUrl: string;
}

export interface SkillItem {
  name: string;
  level: string;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  id: string;
  category: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  code?: string;
  status: 'Verified' | 'In Progress' | 'Planned';
  date: string;
  credentialUrl: string;
  topics: string[];
}

export interface TimelineEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Education' | 'Experience' | 'Certification';
  description: string;
  bullets: string[];
}

