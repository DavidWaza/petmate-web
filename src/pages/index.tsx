import Image from "next/image";
import { Inter } from "next/font/google";
import DesktopHeader from "@/Components/Navigation/DesktopHeader/Header";
import { useMediaQuery } from "react-responsive";
import Hero from "@/Components/Hero/Hero";
import AboutSection from "@/Components/AboutSection/About";
import CareSection from "@/Components/CareSection/CareSection";
import GroomSection from "@/Components/GroomSection/GroomSection";
import GetHelpSection from "@/Components/GetHelpSection/GetHelp";
import ProjectSection from "@/Components/ProjectsSection/Projects";
import MobileSection from "@/Components/MobileSection/MobileSection";
import Blog from "@/Components/Blog/Blog";


export default function Home() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });

  return (
    <main>
      <>{isTabletOrMobile ? <div></div> : <DesktopHeader />}</>
      <Hero />
      <AboutSection />
      <CareSection />
      <GroomSection />
      <GetHelpSection />
      <ProjectSection />
      <MobileSection />
      <Blog />
    </main>
  );
}
