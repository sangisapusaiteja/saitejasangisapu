import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import TechStack from "@/components/tech-stack/TechStack";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
