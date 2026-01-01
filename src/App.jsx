import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Testimonials />
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
