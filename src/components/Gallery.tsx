import React, { useState } from 'react';
import { Dialog, DialogContent } from "./ui/dialog";
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const { t } = useTranslation();

  const images = [
    {
      src: "/lovable-uploads/7330bc96-5f5d-4167-a706-439027e4adcd.png",
      alt: "Beautiful chateau pool area with stone buildings and greenery",
      caption: "The Chateau Pool"
    },
    {
      src: "/lovable-uploads/21a972c1-c66d-4d94-8418-60745ca16608.png",
      alt: "Aerial view of the entire chateau estate with gardens",
      caption: "Aerial View of Château de Villette"
    },
    {
      src: "/lovable-uploads/feb9571b-a58f-43b1-b04b-f9ecb73e25d4.png",
      alt: "Front view of the main chateau building and stone wall",
      caption: "The Main Château"
    },
    {
      src: "/lovable-uploads/231b5b75-3e7e-4db7-a313-37a7571824c5.png",
      alt: "Autumn aerial view of the chateau and gardens",
      caption: "The Beautiful Estate Grounds"
    },
    {
      src: "/lovable-uploads/9e5f8c80-0608-4ba1-91a9-cda04b660f38.png",
      alt: "Garden path with statues leading to stone building",
      caption: "The Garden Path"
    },
    {
      src: "/lovable-uploads/9b9a8c09-6cd4-4180-b68b-6b6768cfebe1.png",
      alt: "Historic wine cellar with candles and wine racks",
      caption: "The Historic Wine Cellar"
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setOpen(true);
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section id="venue" className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-3">{t('our_venue', 'Our Venue')}</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t("join_us", "Join us at the beautiful Château de Vallery in France, where we'll celebrate our special day surrounded by historic architecture and breathtaking gardens.")}
          
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group h-64 md:h-80"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm md:text-base">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl bg-black/95 border-0 p-0">
          <button 
            onClick={() => setOpen(false)} 
            className="absolute right-4 top-4 text-white bg-black/50 rounded-full p-1 z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative h-[80vh] w-full flex items-center justify-center">
            <img 
              src={images[selectedImage].src} 
              alt={images[selectedImage].alt} 
              className="max-h-full max-w-full object-contain"
            />
            
            <div className="absolute bottom-5 left-0 right-0 text-center">
              <p className="text-white text-lg px-4 py-2 bg-black/50 inline-block rounded-md">
                {images[selectedImage].caption}
              </p>
            </div>
            
            <button 
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
