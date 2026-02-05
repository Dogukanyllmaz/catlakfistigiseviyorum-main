import photo1 from "../assets/photos/1.jpg";

interface Photo {
  id: number;
  src: string;
  caption?: string;
}

const photos: Photo[] = [
  { id: 1, src: photo1, caption: "Birlikte güldüğümüz anlar" },
  { id: 2, src: photo1, caption: "O muhteşem gün batımı" },
  { id: 3, src: photo1, caption: "Sadece seninle güzel" },
  { id: 4, src: photo1, caption: "Unutulmaz anılarımız" },
  { id: 5, src: photo1, caption: "Sonsuza dek" },
  { id: 6, src: photo1, caption: "Sen ve ben" },
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