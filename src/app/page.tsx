import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0d1b2a] to-[#112240]">
      <Navbar />
      <HeroSection />
    </main>
  );
}
