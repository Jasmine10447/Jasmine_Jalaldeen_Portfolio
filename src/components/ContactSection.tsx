import React, { useState } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { 
  Mail,
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  MessageSquare,
  Terminal,
  ShieldCheck
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Network Engineering Inquiry',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in your name, email, and message.');
      return;
    }

    // Direct mailto generation so it works 100% reliably client-side without fake mocks
    const recipient = portfolioConfig.personalInfo.email;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      formData.subject + ' - from ' + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;

    setStatusMessage(
      'Your email application should open with your message prepared. Please review and send it to complete your submission.'
    );
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>08</span>
            <span aria-hidden="true">/</span>
            <span className="uppercase tracking-wider">Transmission & Uplink</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white" style={{ textWrap: 'balance' }}>
            Initiate Contact & Discuss Infrastructure Roles
          </h2>
          <p className="mt-2 text-base text-slate-300 leading-relaxed">
            I am actively interviewing for Network Engineering internships, junior NOC technician roles, and systems/infrastructure engineering opportunities. Reach out directly or dispatch a transmission below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Uplink Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#090f1a] border border-slate-800 shadow-xl space-y-5">
              <h3 className="text-sm font-mono uppercase text-slate-400 tracking-wider">
                Direct Contact Channels
              </h3>

              <div className="space-y-4 text-xs">
                {/* Email */}
                <a
                  href={`mailto:${portfolioConfig.personalInfo.email}`}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#050810] border border-slate-800 hover:border-cyan-500/50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-800/40 text-cyan-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-mono block">Professional Email</span>
                    <span className="text-slate-200 group-hover:text-cyan-300 font-mono text-xs">
                      {portfolioConfig.personalInfo.email}
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={portfolioConfig.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#050810] border border-slate-800 hover:border-cyan-500/50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-800/40 text-blue-400 flex items-center justify-center shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-mono block">Professional Profile</span>
                    <span className="text-slate-200 group-hover:text-blue-300 font-mono text-xs flex items-center gap-1">
                      <span>Yesmin Jalaldeen</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={portfolioConfig.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#050810] border border-slate-800 hover:border-cyan-500/50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 flex items-center justify-center shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-mono block">Lab Repositories</span>
                    <span className="text-slate-200 group-hover:text-cyan-300 font-mono text-xs flex items-center gap-1">
                      <span>Jasmine10447</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${portfolioConfig.personalInfo.phone}`}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#050810] border border-slate-800 hover:border-cyan-500/50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-800/40 text-cyan-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-mono block">Phone Number</span>
                    <span className="text-slate-200 group-hover:text-cyan-300 font-mono text-xs">
                      {portfolioConfig.personalInfo.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#050810] border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/40 text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-mono block">Geographic Base</span>
                    <span className="text-slate-200 font-mono text-xs">
                      {portfolioConfig.personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2 text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Available for immediate relocation or remote roles</span>
              </div>
            </div>

          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#090f1a] border border-slate-800 shadow-xl space-y-5">
            <div>
              <h3 className="text-base font-bold text-white">
                Dispatch Direct Transmission
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Submitting this form prepares your mail client with structured transmission data.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-400 uppercase text-[10px] block mb-1">
                    Your Name / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Cisco Recruiter / Alex Tan"
                    className="w-full bg-[#050810] border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="text-slate-400 uppercase text-[10px] block mb-1">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-[#050810] border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400 uppercase text-[10px] block mb-1">
                  Subject / Opportunity Type
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Network Engineering Internship / Junior Role"
                  className="w-full bg-[#050810] border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="text-slate-400 uppercase text-[10px] block mb-1">
                  Message Payload *
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe the opportunity, network team structure, or required certifications..."
                  className="w-full bg-[#050810] border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-sans text-sm leading-relaxed"
                />
              </div>

              {statusMessage && (
                <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-800/60 text-cyan-300 text-xs flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};





