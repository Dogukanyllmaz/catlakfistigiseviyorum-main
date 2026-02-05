import { Heart } from "lucide-react";

const ClosingSection = () => {
  return (
    <section className="section-spacing px-6">
      <div className="container max-w-3xl text-center">
        <div className="animate-float inline-block mb-8">
          <Heart className="w-12 h-12 text-primary fill-primary/20" />
        </div>

        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6 leading-tight">
          Seni seviyorum,
          <br />
          <span className="text-primary">sonsuza dek.</span>
        </h2>

        <p className="text-muted-foreground font-body text-lg max-w-md mx-auto">
          Bu sayfa, sana olan sevgimin küçük bir yansıması. 
          Gerçek sevgi, kelimelerin ötesinde...
        </p>

        <div className="mt-12 flex justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
          <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;