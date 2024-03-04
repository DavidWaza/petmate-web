

import Hero from "@/Components/Hero/Hero";
import AboutSection from "@/Components/AboutSection/About";
import CareSection from "@/Components/CareSection/CareSection";
import GroomSection from "@/Components/GroomSection/GroomSection";
import GetHelpSection from "@/Components/GetHelpSection/GetHelp";
import ProjectSection from "@/Components/ProjectsSection/Projects";
import MobileSection from "@/Components/MobileSection/MobileSection";
import Blog from "@/Components/Blog/Blog";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutSection />
        <CareSection />
        <GroomSection />
        <GetHelpSection />
        <ProjectSection />
        <MobileSection />
        <Blog />
      </main>
    </>
  );
}
