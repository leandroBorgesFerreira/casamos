
const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1522673607200-164d1b3ce551",
    alt: "Couple holding hands",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a",
    alt: "Couple at sunset",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1550784318-a05cb6496b47",
    alt: "Engagement ring",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    alt: "Couple embracing",
  }
];

const GalleryTeaser = () => {
  return (
    <section className="wedding-section">
      <div className="wedding-container">
        <h2 className="fancy-heading text-4xl md:text-5xl mb-12">Our Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg shadow-md aspect-[4/3] animate-fade-in"
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-wedding-charcoal/70 italic font-serif">
            More photos coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryTeaser;
