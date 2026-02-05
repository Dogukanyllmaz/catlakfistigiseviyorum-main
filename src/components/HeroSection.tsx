import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-glow pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto animate-fade-up">
        <p className="text-primary/80 font-body text-sm tracking-[0.3em] uppercase mb-6">
          Sana Özel
        </p>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-8 leading-tight">
          Sevgilim
        </h1>
        
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Her anımızı değerli kılan, hayatıma anlam katan tek kişi sensin. 
          Bu sayfalar sana olan sevgimin küçük bir yansıması...
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-scroll-hint">
        <ChevronDown className="w-6 h-6 text-primary/60" />
      </div>
    </section>
  );
};

export default HeroSection;