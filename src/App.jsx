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
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BookConsultation from './components/BookConsultation';
import ConnectWithUs from './components/ConnectWithUs';
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
        <Gallery />
        <Testimonials />
        <FAQ />
        <BookConsultation />
        <ConnectWithUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
