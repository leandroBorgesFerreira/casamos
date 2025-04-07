
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-wedding-sage/30 py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="text-xl font-serif">Gabriela</span>
          <Heart size={16} className="fill-wedding-blush stroke-wedding-blush" />
          <span className="text-xl font-serif">Leandro</span>
        </div>
        
        <p className="text-wedding-charcoal/70 mb-6">
          October 5-7, 2025
        </p>
        
        <div className="text-sm text-wedding-charcoal/60">
          <p>Made with love, © 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
