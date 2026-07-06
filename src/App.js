import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import WhatIsAI from './components/WhatIsAI';
import HowItWorks from './components/HowItWorks';
import ScaleSection from './components/ScaleSection';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProblemSection />
      <WhatIsAI />
      <HowItWorks />
      <ScaleSection />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;