import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Download from "@/components/sections/Download";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Mentor from "@/components/sections/Mentor";
import Modul from "@/components/sections/Modul";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Mentor />
      <Modul />
      <Features />
      <Download />
      <About />
      <Footer />
    </main>
  );
}
