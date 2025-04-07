
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  {
    id: 1,
    src: "/lovable-uploads/3ae4f115-97ce-42ef-91dc-04d2b3ffaea6.png",
    alt: "Chateau de Vallery front view sketch",
  },
  {
    id: 2,
    src: "/lovable-uploads/4c1d7ac2-2239-4c99-8ba0-e0cdbca2ce60.png",
    alt: "Chateau de Vallery landscape view sketch",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1522673607200-164d1b3ce551",
    alt: "Couple holding hands",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a",
    alt: "Couple at sunset",
  }
];

const GalleryTeaser = () => {
  return (
    <section className="wedding-section">
      <div className="wedding-container">
        <h2 className="fancy-heading text-4xl md:text-5xl mb-12">Our Venue</h2>
        
        <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-10 font-serif italic text-wedding-charcoal/80">
          The beautiful Chateau de Vallery will be the backdrop to our celebration of love. 
          This historic French castle will host all our wedding events.
        </p>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-2">
                  <Card className="overflow-hidden border-wedding-sage border-2">
                    <CardContent className="p-0">
                      <AspectRatio ratio={4/3}>
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </AspectRatio>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="lg:-left-12 left-2 bg-wedding-sage/60 hover:bg-wedding-sage border-none text-white" />
          <CarouselNext className="lg:-right-12 right-2 bg-wedding-sage/60 hover:bg-wedding-sage border-none text-white" />
        </Carousel>
        
        <div className="mt-8 text-center">
          <p className="text-wedding-charcoal/70 italic font-serif">
            We look forward to sharing this beautiful venue with you...
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryTeaser;
