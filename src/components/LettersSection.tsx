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
    title: "Artık mektuplarım bir tık uzağında...",
    content: `Bebi,

Sana söylemek istediğim o kadar çok şey var ki, kelimelerin yetersiz kaldığı anlar oluyor. Ama yine de bir yerden başlamam lazım artık. İlk olarak duygularımızı paylaşmaya, konuşmaya ve duygusal iletişime ne kadar önem verdiğini görüyorum. 
İhtiyaçlarını ve isteklerini kalpten anlıyorum. Her şeyden önce bunları karşılamak istiyorum.

Çok başarılı olduğumu iddia etmeyeceğim ama bu sorunun önüne geçiyorum artık. Yanında da olsam uzakta da olsam beni asla unutmayacağın, ne zaman kelimelere ihtiyacın olursa 
açıp okuyabileceğin, duygularımı görebileceğin ve seninle rahat rahat paylaşabileceğim bir alan yaratmak istedim. Uzaklarda dahi olsak artık metuplarımız  elimizin altında olacak.

Böylelikle istediğin an sen de erişip okuyabileceksin. Kalem ve kağıt bana hala garip hissettiriyor. Bu şekilde sana bir adım daha atmış olacağım. Böylelikle istediğim an duygularımı yazabileceğim.

Umarım bu fikrimi beğenirsin bebim. Seni seviyorum...`
  },
  {
    id: 2,
    title: "Sensiz vallahi sarmıyor",
    content: `Güzelim,
Seni düşünmekten kendimi alamıyorum. Güne her başladığımda aklıma düşen ilk şey sensin. Gecen güzel geçti mi? İyi uyudun mu? Dinlendin mi? 
Gün devam ederken her zaman sen varsın. Yemeğini yemeni istiyorum, suyunu içmeni istiyorum, yeteri kadar dinlenebilmeni ve nefes alailmeni istiyorum.

Bazenleri abarttığımın farkındayım, tepende dikilmiş şunu yap bunu yap diye başının etini yiyorum. Belki sıkılıyorsundur ama gerçekten umrumda değil. Gününün
güzel geçmesi her gün tek dileğim. Seni düşünmeyi ve özlemeyi çok seviyorum. Uzak kaldığım her an hem huysuz bir lavuk kesiliyorum başına hem de sana ihtiyacı olan minik bir çocuk.ç 

Kısaca sensiz yapamıyorum. Sensiz ilerleyemiyorum. Yol alamıyorum. Eve gelip sana sarılacağım anı iple çekiyorum. Sana dokunacağım birlikte oturup boş yapacağımız ve kahve içeceğimiz o anları deliler gibi iple çekiyorum. 
İşini dinlemeyi seviyorum, sesini duymayı seviyorum. Söylenmeni günler boyu dinleyebilirim. Deliler gibi ilgi isteyişini sonsuza dek karşılayabilirim. Minik oltalarını seviyorum. 
Yanında safı oynmayı seviyorum. Artık mektuplarımı bol bol yazabileceğim için uzatmayacağım ama şunu söyleyeyim ben seni ve seninle ilgili olan her şeyi çok seviyorum...`
  },
  {
    id: 3,
    title: "1 Sene 10 Ay ne kadar da hızlı geçti",
    content: `Sevgilim,

Koskoca 1 sene 10 ay nasıl da hızlıcak geçti. Onca uğraş onca olay ve savaş. Her şey bitti gitti. Şimdi dönüp bakınca gerçekten seninleyken zaman çok ama çok hızlı akıp geçiyor.

Bazenleri diyorum ki hiç geçmesin hep böyle kalalım. Sonra farkediyorum ki seninle hayal ettiğim geleceği görmeden yapamam. Kutu gibi olan huzurlu ve sıcak yuvazmızı, biriktireceğimiz anıları,
birlikte vereceğimiz savaşları ve yan yana durup büyüyüp yaşlanacağımız onca yılı hayal ediyorum. Bunların düşüncesi beni öyle bir motive ediyoru ki değil dağları delmeyi dünyayı delip geçebilirmişim gibi geliyor.

Sadece seninle ilgili her şeye sabırsızım. Her şeyi birden istiyorum. Bu 1 sene 10 ayın içinde hapis kalmayı da, ölene kadar yanında durmayı da. Hayatımda geçirdiğim en güzel zamanları geçirdiğimi hissediyorum.
Senin arkamda olduğunu biliyorum. Bu yolculukta ne olursa olun halledeceğimizi biliyorum. Bizim için uğraşmayı seviyorum. Hem seninle hem de diğer şeylerle...

Gerçekçten ama gerçekten hayatıma girdiğin o bar köşesine teşekkür ederim. Bizi kavuşturan o ufak bara o aşağılık işletmeye sonsuz kere teşekkür ederim. İş çıkışında benimle büyükparkta oturduğun için teşekkür ederim. 
Mo'da date'e çıktığımız için teşekkür ederim. Ve en önemlisi beni ektikten sonra sabaha karşı evimi bastığın için teşekkür ederim. Her biri paha biçilemez anılar. Sadece 2 senede yaşadıklarımız bile dile kolayken,
önümüzdeki yılları merakla bekliyorum. İyi ki benimsin sevgilim...`
  },
  {
    id: 4,
    title: "Birlikte geçirdiğimiz zamanlara dair",
    content: `Tek mükemmel, inanılmaz ve haşmetli bebim,

Seninle geçirdiğimiz zamanı düşündüğümde aklıma ilk gelen şey şu oluyor: Hayatımın bir dönemini değil, hayatımın bir hissini paylaşıyorum seninle. Çünkü sen sadece yanımda olan biri değil, yaşadığım anların kalitesini değiştiren birisin.

Beraber güldüğümüz anlar var… Öyle kahkahalar ki, üzerinden zaman geçse de hatırladığımda yüzümde aynı sıcaklığı bırakıyor. Bazen hiçbir şey yapmadığımız, sadece yan yana durduğumuz zamanlar var. Sessizliğin bile huzurlu olduğu anlar.
İşte o anlarda şunu fark ettim: Mutluluk büyük olaylarda değil, doğru insanla yaşanan sade anlarda saklı. 

Sen bana sadece güzel anılar vermedin. Sabretmeyi, dinlemeyi, daha açık olmayı, daha derin hissetmeyi öğrettin. Birlikte büyüdük. Belki farkında bile olmadan birbirimizin hayatına iz bıraktık.
Geçmişe dönüp baktığımda pişmanlık değil, şükür hissediyorum. Seninle yaşadığım her an için. Attığımız her adım için. Paylaştığımız her küçük detay için.

Sabırla yanımda kalıp bana öğrettiğin ve yol gösterdiğin için her anımda yanımda olduğun için teşekkür ederim bebim. Seni tanıdığım her gün, yanımda olmayı seçtiğin her gün hayatım biraz daha anlam kazanıyor.

Sonun kadar benim olacağını hissettirdiğin için teşekkür ederim. İyi ki varsın iyi ki benimsin bebim. Seni çok seviyorum...`
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