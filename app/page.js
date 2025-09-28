import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";
import Contact from "./_components/Contact";

export default async function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
