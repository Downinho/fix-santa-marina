import Header from "@/components/Header";
import HeroVideo from "@/components/HeroVideo";
import FeaturedVessels from "@/components/FeaturedVessels";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <HeroVideo searchType="default" isHomePage={true} />
        <FeaturedVessels />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
