import HeroSection from "@/components/hero";
import "./globals.css";


export default function Home() {
  return (
    <div className="relative">
      <div className="grid-background absolute inset-0 -z-10"></div>

      {/* Hero Section */}
      <HeroSection />
    </div>
  );
}
