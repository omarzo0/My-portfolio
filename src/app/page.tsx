import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { Skills } from "@/components/home/Skills";
import { Portfolio } from "@/components/home/Portfolio";
import { AIProjects } from "@/components/home/AIProjects";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Portfolio limit={6} />
      <AIProjects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
