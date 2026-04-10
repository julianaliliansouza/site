import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Solutions />
        <About />
        <Differentials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
