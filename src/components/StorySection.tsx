interface StoryItem {
  title: string;
  description: string;
}

const storyItems: StoryItem[] = [
  {
    title: "İlk Bakış",
    description: "Gözlerimiz ilk kez buluştuğunda, kalbimin nasıl attığını hâlâ hatırlıyorum. O an her şeyin değişeceğini hissettim.",
  },
  {
    title: "İlk Gülümseme",
    description: "Güldüğünde dünya duruyordu sanki. O gülümsemeyi görmeye doyamıyorum, her gün yeniden âşık oluyorum.",
  },
  {
    title: "İlk Dokunuş",
    description: "Ellerinin sıcaklığı hâlâ avuçlarımda. O dokunuş, sonsuzluğa uzanan bir yolun başlangıcıydı.",
  },
  {
    title: "Bugün ve Sonsuza Dek",
    description: "Her geçen gün seninle daha güçlü bir bağ kuruyorum. Sen benim bugünüm, yarınım ve sonsuza dek yanımda olacak kişisin.",
  },
];

const StorySection = () => {
  return (
    <section className="section-spacing px-6">
      <div className="container max-w-4xl">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Hikayemiz
          </h2>
          <p className="text-muted-foreground font-body">
            Birlikte yazdığımız her satır...
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />

          {/* Story items */}
          <div className="space-y-16 md:space-y-24">
            {storyItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 md:gap-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 timeline-dot" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                  }`}
                >
                  <h3 className="font-display text-2xl md:text-3xl text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;