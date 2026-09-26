import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Projects />
        <ExperienceTimeline />
        <Technologies />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
