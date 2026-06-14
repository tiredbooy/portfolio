import Header from "@/app/[locale]/_components/Header";
import Hero from "@/app/[locale]/_components/Hero";
import Skills from "@/app/[locale]/_components/Skills";
import Projects from "@/app/[locale]/_components/Projects";
import Contact from "@/app/[locale]/_components/Contact";
import Footer from "@/app/[locale]/_components/Footer";
import SmoothScroll from "@/app/[locale]/_components/SmoothScroll";

const Home = () => {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
};

export default Home;
