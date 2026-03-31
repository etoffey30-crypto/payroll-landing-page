import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { CursorGlow } from "@/components/AnimationUtils";

const Index = () => (
  <div className="min-h-screen">
    <CursorGlow />
    <Navbar />
    <Hero />
    <Features />
    <About />
    <Pricing />
    <Contact />
    <Footer />
  </div>
);

export default Index;
