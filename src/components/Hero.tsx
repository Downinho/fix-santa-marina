import heroImage from "@/assets/hero-yacht-marina.jpg";
import HeroSearchForm from "./HeroSearchForm";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Maior Ecossistema<br />
              <span className="text-accent-gold">Náutico do Brasil</span><br />
              MARBANA
            </h1>
            <p className="font-body text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
              A Rainha dos Mares em Búzios/RJ. Curadoria exclusiva, atendimento personalizado e as melhores embarcações premium do Brasil.
            </p>
          </div>

          {/* Search Form */}
          <HeroSearchForm />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-accent-gold mb-2">500+</div>
              <div className="text-primary-foreground/80 font-body">Embarcações Premium</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-accent-gold mb-2">98%</div>
              <div className="text-primary-foreground/80 font-body">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-accent-gold mb-2">15+</div>
              <div className="text-primary-foreground/80 font-body">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;