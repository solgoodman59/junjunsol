import React from 'react';
import Banner from './components/Banner';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import MemeCarousel from './components/MemeCarousel';
import Disclaimer from './components/Disclaimer';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="min-h-screen">
      <Banner />
      <About />
      <MemeCarousel />
      <Tokenomics />
      <Achievements />
      <HowToBuy />
      <Disclaimer />
    </div>
  );
}

export default App;