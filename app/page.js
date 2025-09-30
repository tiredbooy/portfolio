import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import Skills from "@/app/_components/Skills";
import Projects from "@/app/_components/Projects";
import Contact from "@/app/_components/Contact";
import SmoothScroll from "@/app/_components/SmoothScroll";

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
    </SmoothScroll>
  );
};

export default Home;
