
import Countdown from "@/components/Countdown";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import GalleryTeaser from "@/components/GalleryTeaser";
import Hero from "@/components/Hero";
import RSVPForm from "@/components/RSVPForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-wedding-cream">
      {/* Hero Section */}
      <Hero />
      
      {/* Events Timeline */}
      <EventsSection />
      
      {/* Countdown */}
      <Countdown />
      
      {/* Gallery Teaser */}
      <GalleryTeaser />
      
      {/* RSVP Section */}
      <section id="rsvp" className="wedding-section bg-wedding-blush/30">
        <div className="wedding-container">
          <h2 className="fancy-heading text-4xl md:text-5xl mb-12">RSVP</h2>
          <p className="text-center text-lg md:text-xl max-w-2xl mx-auto mb-10 font-serif italic text-wedding-charcoal/80">
            We would be honored to have you join us on our special day. Please let us know if you'll be able to attend by September 1, 2025.
          </p>
          
          <RSVPForm />
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
