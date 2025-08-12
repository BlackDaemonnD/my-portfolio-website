import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience"; // <-- IMPORT HERE
import Contact from "@/components/Contact"; 

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience /> {/* <-- ADD IT HERE */}
      <Projects />
      <Contact />
    </main>
  );
}