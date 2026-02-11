import photo1 from "../assets/photos/Aşkpirin.jpeg";
import photo2 from "../assets/photos/EniyiAlisveris.jpeg";
import photo3 from "../assets/photos/bakisinahastayim.jpeg";
import photo4 from "../assets/photos/favorisideeye.jpeg";
import photo5 from "../assets/photos/ensevdigimaktivite.jpeg";
import photo6 from "../assets/photos/motorcubebi.jpeg";
import photo7 from "../assets/photos/çokiyifoto.jpeg";
import photo8 from "../assets/photos/askimuyuyor.jpeg";
import photo9 from "../assets/photos/inanılmazgüzelfotoxl.jpeg";
import photo10 from "../assets/photos/dugundernek.jpeg";
import photo11 from "../assets/photos/bakisma2.jpeg";
import photo12 from "../assets/photos/aksamgunesi.jpeg";
import photo13 from "../assets/photos/resmentatlilikabidesi.jpeg";
import photo14 from "../assets/photos/yudarım.jpeg";
import photo15 from "../assets/photos/sarilmak.jpeg";
import photo16 from "../assets/photos/günbatımı.jpeg";
import photo17 from "../assets/photos/opucuk.jpeg";
import photo18 from "../assets/photos/benimfavorim.jpeg";

interface Photo {
  id: number;
  src: string;
  caption?: string;
}

const photos: Photo[] = [
  { id: 1, src: photo1, caption: "Aşırı etkilendiğim o fotoğraf" },
  { id: 2, src: photo2, caption: "O muhteşem alışverişimiz" },
  { id: 3, src: photo3, caption: "Şu bakışın beni benden alıyor" },
  { id: 4, src: photo4, caption: "Favori side eye'ım" },
  { id: 5, src: photo5, caption: "En sevdiğim aktivite" },
  { id: 6, src: photo6, caption: "Motorcu ve aşırı havalı bebi" },
  { id: 7, src: photo7, caption: "Popişin açıkta olmasa dünyanın en iyi fotosu" },
  { id: 8, src: photo8, caption: "Aşkım huzurla uyuyorsun" },
  { id: 9, src: photo9, caption: "Düşüp durduğum inanılmaz güzel fotoğrafın XL" },
  { id: 10, src: photo10, caption: "Ah şu bakışmalarımız" },
  { id: 11, src: photo11, caption: "Bakışmalarımız hiç bitmesin nolur" },
  { id: 12, src: photo12, caption: "Akşam güneşi güzele vururmuş" },
  { id: 13, src: photo13, caption: "Resmen tatlılık abidesi" },
  { id: 14, src: photo14, caption: "Gülüşüne bayılıyorum" },
  { id: 15, src: photo15, caption: "Sana hep sarılmak istiyorum. Beni hep böyle bekle bebi" },
  { id: 16, src: photo16, caption: "Yakalayabildiğim tek ve en güzel gün batımı" },
  { id: 17, src: photo17, caption: "Bolca öpücük" },
  { id: 18, src: photo18, caption: "Gelmiş geçmiş en havalı fotoğraf" },
];


const PhotoGallery = () => {
  return (
    <section className="section-spacing px-6 bg-deep-soft">
      <div className="container max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Anılarımız
          </h2>
          <p className="text-muted-foreground font-body">
            Her fotoğraf bir hikaye anlatıyor...
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="photo-item group">
              {/* Photo placeholder - replace with actual images */}
              <div className="aspect-[4/5] bg-card rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
                
                {/* Placeholder content */}
                <img
                  src={photo.src}
                  alt={photo.caption ?? "Anı"}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />


                {/* Caption */}
                {photo.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-foreground/90 font-body text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {photo.caption}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;