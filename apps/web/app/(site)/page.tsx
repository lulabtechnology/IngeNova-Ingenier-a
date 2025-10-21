import Header from "./components/Header";
import Hero from "./components/Hero";
import LogosMarquee from "./components/LogosMarquee";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Differentiators from "./components/Differentiators";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Page(){
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogosMarquee />
        <Services />
        <Projects />
        <Differentiators />
        <Industries />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
