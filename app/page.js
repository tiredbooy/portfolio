import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import Skills from "@/app/_components/Skills";
import Projects from "@/app/_components/Projects";
import Contact from "@/app/_components/Contact";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default Home;
