
import { Clock, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const events = [
  {
    id: 1,
    date: "October 5, 2025",
    day: "Sunday",
    title: "Wedding Ceremony & Reception",
    time: "18:00 - 03:00",
    description: "Our wedding ceremony will take place followed by cocktail hour, dinner, and dancing to celebrate our union.",
    location: "Chateau de Vallery",
    address: "Chateau de Vallery, Vallery, France"
  },
  {
    id: 2,
    date: "October 6, 2025",
    day: "Monday",
    title: "Recovery Brunch",
    time: "9:00 - 15:00",
    description: "Join us to enjoy a relax moment with pool, friends, music and food to recover after our big party.",
    location: "Chateau de Vallery",
    address: "Chateau de Vallery, Vallery, France"
  },
  {
    id: 3,
    date: "October 6, 2025",
    day: "Monday",
    title: "Gala Dinner",
    time: "19:00 - 22:00",
    description: "Enjoy an elegant evening of france dining and entertainment to celebrate our union.",
    location: "Chateau de Vallery",
    address: "Chateau de Vallery, Vallery, France"
  },
  {
    id: 4,
    date: "October 6, 2025",
    day: "Monday",
    title: "Wine and Cheese",
    time: "22:00 - 00:00",
    description: "A night of wines and food to celebrate our union.",
    location: "Chateau de Vallery",
    address: "Chateau de Vallery, Vallery, France"
  },
  {
    id: 5,
    date: "October 7, 2025",
    day: "Tuesday",
    title: "Goodbye Breakfast & Love",
    time: "9:00 - 12:00",
    description: "Join us for a farewell breakfast as we conclude our wedding celebration weekend. Share your favorite moments from the festivities before departing.",
    location: "Chateau de Vallery",
    address: "Chateau de Vallery, Vallery, France"
  }
];

const EventCard = ({ event, index }: { event: typeof events[0], index: number }) => {
  return (
    <div className="event-card animate-fade-in" style={{ animationDelay: `${0.2 * index}s` }}>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <div className="mb-3 text-sm text-wedding-charcoal/70 uppercase tracking-wider font-medium">
            {event.day}
          </div>
          <h3 className="text-2xl mb-2 font-serif text-wedding-charcoal">{event.title}</h3>
          <p className="text-lg text-wedding-charcoal/80 font-serif italic">{event.date}</p>
          
          <div className="flex items-center gap-2 mt-4 text-wedding-charcoal/70">
            <Clock size={16} />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center gap-2 mt-2 text-wedding-charcoal/70">
            <MapPin size={16} />
            <span>{event.location}</span>
          </div>
          
          <div className="text-sm ml-6 mt-1 text-wedding-charcoal/60">
            {event.address}
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <div className="h-full flex items-center">
            <p className="text-wedding-charcoal/80 leading-relaxed">
              {event.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="events" className="wedding-section bg-gradient-to-b from-wedding-cream to-wedding-blush/20">
      <div className="wedding-container">
        <h2 className="fancy-heading text-4xl md:text-5xl mb-10">{t('our_events', 'Our Events')}</h2>
        
        <div className="flex justify-center mb-12">
          <div className="relative max-w-md mx-auto">
            <img 
              src="/lovable-uploads/3ae4f115-97ce-42ef-91dc-04d2b3ffaea6.png" 
              alt="Chateau de Vallery" 
              className="w-full rounded-lg shadow-lg border-4 border-white"
            />
            <div className="absolute -bottom-5 left-0 right-0 text-center">
              <span className="bg-wedding-sage px-6 py-2 rounded-full text-white font-serif italic inline-block shadow-md">
                Chateau de Vallery
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-center text-lg max-w-3xl mx-auto mb-12 font-serif italic text-wedding-charcoal/80">
          {t('events_subtitle', 'All our wedding festivities will be held at the beautiful Chateau de Vallery, a historic French castle that will provide a romantic backdrop for our celebration.')}          
        </p>
        
        <div className="flex flex-col gap-8">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
