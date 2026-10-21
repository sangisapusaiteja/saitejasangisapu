import Hero from "@/components/v0/Hero";
import About from "@/components/v0/About";
import TechStack from "@/components/v0/TechStack";
import Projects from "@/components/v0/Projects";
import Experience from "@/components/v0/Experience";
import Contact from "@/components/v0/Contact";

export default function LegacyHome() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
