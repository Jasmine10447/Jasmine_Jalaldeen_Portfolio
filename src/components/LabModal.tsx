import React, { useState, useEffect } from 'react';
import { NetworkLab, NetworkDevice } from '../types/network';
import { LabDiagramVisual } from './LabDiagramVisual';
import { 
  X, 
  Terminal, 
  Network, 
  CheckCircle2, 
  AlertTriangle, 
  Copy, 
  Check, 
  Layers, 
  Cpu, 
  Server,
  ShieldCheck,
  Activity
} from 'lucide-react';

interface LabModalProps {
  lab: NetworkLab | null;
  onClose: () => void;
}

export const LabModal: React.FC<LabModalProps> = ({ lab, onClose }) => {
  const [activeTab, setActiveTab] = useState<'topology' | 'cli' | 'verification' | 'troubleshooting'>('topology');
  const [selectedDevice, setSelectedDevice] = useState<NetworkDevice | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (lab && lab.devices.length > 0) {
      setSelectedDevice(lab.devices[0]);
    }
  }, [lab]);

  if (!lab) return null;

  const handleCopy = (commands: string[], index: number) => {
    navigator.clipboard.writeText(commands.join('\n'));
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-5xl bg-[#090f1a] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between gap-4 bg-[#0a1220]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <span className="font-bold text-white bg-slate-900 px-1.5 py-0.5 rounded border border-slate-700/80">{lab.labNumber}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-300">{lab.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400">{lab.difficulty}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">{lab.duration}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white">
              {lab.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tab Bar */}
        <div className="flex items-center gap-1 px-4 sm:px-6 pt-3 border-b border-slate-800 bg-[#080d17] overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('topology')}
            className={`px-3.5 py-2 text-xs font-medium rounded-t-lg transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap shrink-0 ${
              activeTab === 'topology'
                ? 'border-cyan-400 text-cyan-300 bg-slate-900/60'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            <span>Interactive Topology & Devices</span>
          </button>

          <button
            onClick={() => setActiveTab('cli')}
            className={`px-3.5 py-2 text-xs font-medium rounded-t-lg transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap shrink-0 ${
              activeTab === 'cli'
                ? 'border-cyan-400 text-cyan-300 bg-slate-900/60'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>CLI Configuration</span>
          </button>

          <button
            onClick={() => setActiveTab('verification')}
            className={`px-3.5 py-2 text-xs font-medium rounded-t-lg transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap shrink-0 ${
              activeTab === 'verification'
                ? 'border-cyan-400 text-cyan-300 bg-slate-900/60'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Verification & Testing</span>
          </button>

          <button
            onClick={() => setActiveTab('troubleshooting')}
            className={`px-3.5 py-2 text-xs font-medium rounded-t-lg transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap shrink-0 ${
              activeTab === 'troubleshooting'
                ? 'border-cyan-400 text-cyan-300 bg-slate-900/60'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span>Troubleshooting Notes</span>
          </button>
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-sm">
          
          {/* TAB 1: TOPOLOGY & DEVICES */}
          {activeTab === 'topology' && (
            <div className="space-y-6">
              
              {/* Technical Topology Diagram Banner */}
              <div className="rounded-xl border border-slate-800 overflow-hidden h-44 sm:h-52 bg-[#050913]">
                <LabDiagramVisual labId={lab.id} />
              </div>

              {/* Lab Overview Summary */}
              <div className="p-4 rounded-xl bg-[#0b121f] border border-slate-800">
                <div className="text-xs font-mono uppercase text-cyan-400 mb-1">Laboratory Objective</div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{lab.objective}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">
                  <span className="text-slate-200 font-medium">Key Concepts:</span>
                  {lab.keyConcepts.map((kc) => (
                    <span key={kc} className="font-mono text-cyan-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {kc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Devices Grid Selector */}
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Select Device to Inspect Configuration & Interfaces
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {lab.devices.map((device) => {
                    const isSelected = selectedDevice?.id === device.id;
                    return (
                      <button
                        key={device.id}
                        onClick={() => setSelectedDevice(device)}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-cyan-950/40 border-cyan-500/80 shadow-md shadow-cyan-950/20'
                            : 'bg-[#0b121f] border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-semibold text-xs text-white">{device.name}</span>
                          <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                            ● UP
                          </span>
                        </div>
                        <div className="text-xs font-mono text-cyan-400">{device.ip}</div>
                        <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                          {device.description}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Device Deep-Dive Inspector */}
              {selectedDevice && (
                <div className="p-4 rounded-xl bg-[#0b121f] border border-slate-800 space-y-4 animate-in fade-in duration-100">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      <span className="font-bold text-sm text-white">{selectedDevice.name}</span>
                      <span className="text-xs font-mono text-cyan-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {selectedDevice.ip}
                      </span>
                    </div>
                    {selectedDevice.protocol && (
                      <span className="text-xs font-mono text-indigo-300">
                        {selectedDevice.protocol}
                      </span>
                    )}
                  </div>

                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase mb-2">Configured Interfaces</div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs font-mono">
                        <thead>
                          <tr className="border-b border-slate-800 text-slate-400">
                            <th className="pb-2 font-medium">Interface</th>
                            <th className="pb-2 font-medium">IP Address / Assignment</th>
                            <th className="pb-2 font-medium">Subnet Mask</th>
                            <th className="pb-2 font-medium">VLAN</th>
                            <th className="pb-2 font-medium text-right">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60">
                          {selectedDevice.interfaces.map((intf) => (
                            <tr key={intf.name} className="hover:bg-slate-900/50">
                              <td className="py-2.5 text-cyan-300">{intf.name}</td>
                              <td className="py-2.5 text-slate-200">{intf.ip}</td>
                              <td className="py-2.5 text-slate-400">{intf.subnetMask}</td>
                              <td className="py-2.5 text-slate-300">{intf.vlan ?? '—'}</td>
                              <td className="py-2.5 text-right text-emerald-400 font-semibold">{intf.status}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 2: CLI CONFIGURATION */}
          {activeTab === 'cli' && (
            <div className="space-y-6">
              <p className="text-xs text-slate-400 leading-relaxed">
                Authentic Cisco IOS configuration commands utilized to provision this laboratory setup. Replace placeholder IPs with your specific topology values if adapting to your own lab environment.
              </p>

              {lab.cliConfigs.map((cfg, idx) => (
                <div key={cfg.device} className="rounded-xl bg-[#050810] border border-slate-800 overflow-hidden">
                  <div className="px-4 py-2.5 bg-[#0a1120] border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-mono font-semibold text-white">{cfg.device}</span>
                    </div>
                    <button
                      onClick={() => handleCopy(cfg.commands, idx)}
                      className="px-2.5 py-1 text-xs font-mono text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded flex items-center gap-1.5 transition-colors"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Copy CLI Block</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-4 font-mono text-xs text-cyan-200 bg-[#050810] overflow-x-auto leading-relaxed">
                    <div className="text-slate-500 mb-1">{cfg.prompt}</div>
                    {cfg.commands.map((cmd, cIdx) => (
                      <div key={cIdx} className={cmd.startsWith("!") || cmd.startsWith(" remark") ? "text-slate-500 italic" : "text-slate-200"}>
                        {cmd}
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-[#080d18] border-t border-slate-800/80 text-xs text-slate-400">
                    <span className="font-semibold text-slate-300">Engineering Note:</span> {cfg.explanation}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: VERIFICATION & TESTING */}
          {activeTab === 'verification' && (
            <div className="space-y-6">
              <p className="text-xs text-slate-400">
                Command-line validation outputs captured post-convergence to verify operational state, route tables, and port statuses.
              </p>

              {lab.verificationCommands.map((vCmd, idx) => (
                <div key={idx} className="rounded-xl bg-[#050810] border border-slate-800 overflow-hidden">
                  <div className="px-4 py-2 bg-[#0c1424] border-b border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-300 font-medium">
                      # {vCmd.command}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400">Validated</span>
                  </div>
                  <pre className="p-4 font-mono text-xs text-slate-300 overflow-x-auto whitespace-pre leading-relaxed">
                    {vCmd.outputSnippet}
                  </pre>
                  <div className="p-3 bg-[#080d18] border-t border-slate-800/80 text-xs text-slate-400">
                    <span className="font-semibold text-slate-300">Verification Target:</span> {vCmd.description}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: TROUBLESHOOTING NOTES */}
          {activeTab === 'troubleshooting' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 text-xs text-amber-200">
                <div className="font-semibold text-amber-300 flex items-center gap-1.5 mb-1">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Common Pitfalls & Verification Checklist</span>
                </div>
                Troubleshooting heuristics discovered during lab synthesis, testing, and debugging.
              </div>

              <div className="space-y-2.5">
                {lab.troubleshootingNotes.map((note, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-[#0b121f] border border-slate-800 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center font-mono text-[11px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-[#0a1220] flex items-center justify-between text-xs text-slate-400">
          <div>
            Topology: <span className="text-slate-200 font-mono">{lab.topologyType}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors font-medium"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
