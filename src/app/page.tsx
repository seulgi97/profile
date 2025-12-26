import { css } from "../../styled-system/css";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main
      className={css({
        maxWidth: "1200px",
        margin: "0 auto",
        padding: { base: "16px", md: "24px", lg: "40px" },
      })}
    >
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
