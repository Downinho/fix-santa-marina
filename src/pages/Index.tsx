import HeroVideo from "@/components/HeroVideo";
import FeaturedVessels from "@/components/FeaturedVessels";
import About from "@/components/About";
import CTA from "@/components/CTA";
import { Layout } from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <main id="main-content">
        <HeroVideo searchType="default" isHomePage={true} />
        <FeaturedVessels />
        <About />
        <CTA />
      </main>
    </Layout>
  );
};

export default Index;
