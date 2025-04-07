
import React from 'react';
import Hero from "../components/Hero";
import EventsSection from "../components/EventsSection";
import Gallery from "../components/Gallery";
import RSVPForm from "../components/RSVPForm";
import Accommodation from "../components/Accommodation";
import Countdown from "../components/Countdown";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Countdown />
      <Gallery />
      <EventsSection />
      <Accommodation />
      <RSVPForm />
      <Footer />
    </div>
  );
};

export default Index;
