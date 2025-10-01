import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import { useState, useEffect } from "react";

export default function App() {
  const [section, setSection] = useState("about");

  useEffect(() => {
    const sections = ["about", "experience", "projects"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setSection(id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-[#1e573f] to-[#0f172a]/95 text-white">
      {/* Sidebar/Header */}
      <Sidebar section={section} setSection={setSection} />

      {/* Contenido principal */}
      <main className="flex-1 md:ml-72 md:mt-0 mt-6">
        <section id="about" className="min-h-screen p-10">
          <About />
        </section>
        <section id="experience" className="min-h-screen p-10">
          <Experience />
        </section>
        <section id="projects" className="min-h-screen p-10">
          <Projects />
        </section>
      </main>
    </div>
  );
}
