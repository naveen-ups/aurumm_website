import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShopGrid from './components/ShopGrid';
import Philosophy from './components/Philosophy';
import FounderSection from './components/FounderSection';
import CustomJewellery from './components/CustomJewellery';
import OurProcess from './components/OurProcess';
import HeritageRedesign from './components/HeritageRedesign';
import GemstoneConsultation from './components/GemstoneConsultation';
import Testimonials from './components/Testimonials';
import Plans from './components/Plans';
import TeamConsultants from './components/TeamConsultants';
import BookConsultation from './components/BookConsultation';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ShopGrid />
        <Philosophy />
        <FounderSection />
        <CustomJewellery />
        <OurProcess />
        <HeritageRedesign />
        <GemstoneConsultation />
        <Testimonials />
        <Plans />
        <TeamConsultants />
        <BookConsultation />
      </main>
      <Footer />
    </>
  );
}

export default App;
