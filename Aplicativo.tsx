import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import StudioFeature from './components/StudioFeature';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark-900 min-h-screen text-white selection:bg-loud-500 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <StudioFeature />
      <Pricing />
      <Contact />
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;