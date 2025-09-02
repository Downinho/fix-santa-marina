import Header from "@/components/Header";
import HeroVideo from "@/components/HeroVideo";
import FeaturedVessels from "@/components/FeaturedVessels";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Layout } from "@/components/Layout";

const Index = () => {
  return (
    <Layout showSidebar={false}>
      <main id="main-content">
        <HeroVideo searchType="default" isHomePage={true} />
        <FeaturedVessels />
        <About />
        <CTA />
      </main>
      <Footer />
    </Layout>
  );
};

export default Index;
