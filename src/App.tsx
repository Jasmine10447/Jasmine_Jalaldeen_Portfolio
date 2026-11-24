import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [guideModalOpen, setGuideModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070b12] text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 01. Hero Section with Animated SVG Network Topology */}
        <Hero />

        {/* 02. About The Engineer Profile & Metrics */}
        <AboutSection />

        {/* 03. Education & Experience */}
        <ExperienceSection />

        {/* 03. Technical Arsenal & Skills Matrix */}
        <SkillsSection />

        {/* 05. Production Network Architecture Projects */}
        <ProjectsSection />

        {/* 06. Achievements */}
        <AchievementsSection />

        {/* 06. Professional Certifications & Roadmap */}
        <CertificationsSection />


        {/* 09. Transmission Uplink & Contact Channels */}
        <ContactSection />
      </main>

      {/* 10. Enterprise Footer */}
      <Footer />
</div>
  );
}



