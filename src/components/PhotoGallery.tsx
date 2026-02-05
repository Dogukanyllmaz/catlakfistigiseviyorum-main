
interface Photo {
  id: number;
  caption?: string;
}

const photos: Photo[] = [
  { id: 1, caption: "Birlikte güldüğümüz anlar" },
  { id: 2, caption: "O muhteşem gün batımı" },
  { id: 3, caption: "Sadece seninle güzel" },
  { id: 4, caption: "Unutulmaz anılarımız" },
  { id: 5, caption: "Sonsuza dek" },
  { id: 6, caption: "Sen ve ben" },
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
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-primary/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>

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