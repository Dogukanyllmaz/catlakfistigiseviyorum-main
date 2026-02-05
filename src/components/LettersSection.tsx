import { useState } from "react";
import { Heart, X } from "lucide-react";

interface Letter {
  id: number;
  title: string;
  content: string;
}

const letters: Letter[] = [
  {
    id: 1,
    title: "Sana söylemek istediklerim",
    content: `Sevgilim,

Sana söylemek istediğim o kadar çok şey var ki, kelimelerin yetersiz kaldığı anlar oluyor. Ama yine de denemek istiyorum, çünkü sen her kelimeyi hak ediyorsun.

Sen hayatıma girdiğinden beri her şey değişti. Sabahları uyanmak için bir nedenim var artık. Gözlerini gördüğümde dünyanın en şanslı insanı olduğumu hissediyorum.

Bazen seni izliyorum, hiçbir şey yapmadan, sadece var olduğun için mutlu oluyorum. Gülüşün, bakışların, sesin... Her şeyin beni büyülüyor.

Seninle geçirdiğim her an, hayatımın en değerli hazineleri. Ve biliyorum ki, daha nice güzel anlar bizi bekliyor.

Seni seviyorum, bugün, yarın ve sonsuza dek.`
  },
  {
    id: 2,
    title: "İçimden geçenler",
    content: `Canım,

Bazen geceleri uyuyamıyorum, çünkü seni düşünmekten kendimi alamıyorum. Her anımızı tek tek hatırlıyorum ve her birinde yeniden gülümsüyorum.

Senin için neler hissettiğimi anlatmak zor. Bu duygu, kelimelerden çok daha büyük. Sanki kalbim senin için özel bir dil geliştirmiş de, sadece sen anlayabiliyorsun.

Zorlandığım anlarda senin varlığın bana güç veriyor. "Sen varsın" diye düşünmek, her şeyi üstesinden gelebileceğime inandırıyor beni.

Sen benim güvenli limanım, en derin sırlarımı paylaşabildiğim tek kişi, en gerçek halimle olabildiğim tek yer.

Seninle olmak, hayatımın en büyük hediyesi.`
  },
  {
    id: 3,
    title: "Birlikte geçirdiğimiz zamanlara dair",
    content: `Bir tanem,

Hatırlıyor musun, ilk buluşmamızı? O gün ne kadar heyecanlıydım, ellerim titriyordu ama seni görünce her şey duruldu. Sanki yıllardır tanışıyormuşuz gibi rahat hissettim yanında.

O günden bu yana geçen her an, bir hazine gibi kalbimde saklı. Beraber güldüğümüz, ağladığımız, hayal kurduğumuz tüm anlar...

Seninle izlediğimiz filmler, birlikte yediğimiz yemekler, saatlerce süren telefon konuşmalarımız... Her biri benim için paha biçilmez.

Ve en güzeli, daha yaşayacağımız nice anlar var. Seninle kuracağımız hayaller, gerçekleştireceğimiz planlar, birlikte büyüyeceğimiz yıllar...

Geçmişimize şükrediyorum, geleceğimize heyecanla bakıyorum. Çünkü ikisi de seninle.

Sonsuza dek seninleyim.`
  },
  {
    id: 4,
    title: "Birlikte geçirdiğimiz zamanlara dair",
    content: `Bir tanem,

Hatırlıyor musun, ilk buluşmamızı? O gün ne kadar heyecanlıydım, ellerim titriyordu ama seni görünce her şey duruldu. Sanki yıllardır tanışıyormuşuz gibi rahat hissettim yanında.

O günden bu yana geçen her an, bir hazine gibi kalbimde saklı. Beraber güldüğümüz, ağladığımız, hayal kurduğumuz tüm anlar...

Seninle izlediğimiz filmler, birlikte yediğimiz yemekler, saatlerce süren telefon konuşmalarımız... Her biri benim için paha biçilmez.

Ve en güzeli, daha yaşayacağımız nice anlar var. Seninle kuracağımız hayaller, gerçekleştireceğimiz planlar, birlikte büyüyeceğimiz yıllar...

Geçmişimize şükrediyorum, geleceğimize heyecanla bakıyorum. Çünkü ikisi de seninle.

Sonsuza dek seninleyim.`
  },
];

const LettersSection = () => {
  const [openLetterId, setOpenLetterId] = useState<number | null>(null);

  const openLetter = letters.find((l) => l.id === openLetterId);

  return (
    <section className="section-spacing px-6">
      <div className="container max-w-4xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Sana Mektuplarım
          </h2>
          <p className="text-muted-foreground font-body">
            Kalbimden dökülen satırlar...
          </p>
        </div>

        {/* Letter cards */}
        <div className="space-y-4">
          {letters.map((letter) => (
            <button
              key={letter.id}
              onClick={() => setOpenLetterId(letter.id)}
              className="letter-card w-full text-left group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-foreground">
                    {letter.title}
                  </h3>
                </div>
                <span className="text-primary/60 text-sm font-body">
                  Oku →
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Letter modal */}
        {openLetter && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm"
            onClick={() => setOpenLetterId(null)}
          >
            <div
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-card rounded-2xl p-8 md:p-12 shadow-romantic border border-border animate-fade-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setOpenLetterId(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              {/* Letter content */}
              <div className="pr-8">
                <div className="flex items-center gap-3 mb-8">
                  <Heart className="w-6 h-6 text-primary" />
                  <h3 className="font-display text-2xl md:text-3xl text-foreground">
                    {openLetter.title}
                  </h3>
                </div>

                <div className="font-body text-foreground/90 leading-loose whitespace-pre-line text-base md:text-lg">
                  {openLetter.content}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LettersSection;