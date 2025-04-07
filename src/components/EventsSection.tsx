
import { Clock, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    date: "October 5, 2025",
    day: "Sunday",
    title: "Welcome Dinner",
    time: "7:00 PM - 10:00 PM",
    description: "Join us for a casual welcome dinner as we kick off our wedding celebration weekend. Meet and mingle with other guests while enjoying delicious food and drinks.",
    location: "The Garden Restaurant",
    address: "123 Blossom St, Garden City"
  },
  {
    id: 2,
    date: "October 6, 2025",
    day: "Monday",
    title: "Wedding Ceremony & Reception",
    time: "4:00 PM - 12:00 AM",
    description: "Our wedding ceremony will take place followed by cocktail hour, dinner, and dancing to celebrate our union.",
    location: "Oceanview Resort",
    address: "456 Coastline Drive, Beachside"
  },
  {
    id: 3,
    date: "October 7, 2025",
    day: "Tuesday",
    title: "Farewell Brunch",
    time: "10:00 AM - 1:00 PM",
    description: "A relaxed brunch to say goodbye to our guests and thank everyone for sharing in our special weekend.",
    location: "Sunrise Cafe",
    address: "789 Morning Ave, Lakeside"
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
  return (
    <section id="events" className="wedding-section bg-gradient-to-b from-wedding-cream to-wedding-blush/20">
      <div className="wedding-container">
        <h2 className="fancy-heading text-4xl md:text-5xl mb-16">Our Events</h2>
        
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
