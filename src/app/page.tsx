"use client";
import HeroSection from "./components/herosection";
import AboutMe from "./components/aboutme";
import SkillsSection from "./components/skillssection";
import PortfolioSection from "./components/portofoliosection";
import ExperienceSection from "./components/experiencesection";
import TestimonialsSection from "./components/testimonialsection";
import ContactSection from "./components/contactsection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <SkillsSection />
      <PortfolioSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
