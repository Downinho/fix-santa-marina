import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedVessels from "@/components/FeaturedVessels";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <Hero />
        <FeaturedVessels />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
