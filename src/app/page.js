import Image from "next/image";

import Navbar from "@/components/Navbar/NavBar";
import HeroComponent from "@/components/Home/Home";
import AboutSection from "@/components/About/About";
import ProjectsSection from "@/components/Projects/Projects";
import ContactSection from "@/components/Contact/Contact";


export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="flex min-h-screen flex-col items-center justify-between bg-primary">
        <HeroComponent/>
        <AboutSection/>
        <ProjectsSection/>
        <ContactSection/>
      </main>
    </>
  );
}
