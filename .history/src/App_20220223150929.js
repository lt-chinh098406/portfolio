import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import Skills from './components/Skills/Skills';
import Academic from './components/Academic/Academic';

function App() {
  return (
    <div className="text-14 font-poppins text-tx-primary bg-white h-screen">
      <HeroSection />
      <Skills />
    </div>
  );
}

export default App;
