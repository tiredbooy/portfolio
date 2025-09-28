import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";

export default async function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
      </main>
    </>
  );
}
