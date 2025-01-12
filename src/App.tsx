import React from 'react';
import Banner from './components/Banner';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import MemeCarousel from './components/MemeCarousel';
import Disclaimer from './components/Disclaimer';

function App() {
  return (
    <div className="min-h-screen">
      <Banner />
      <About />
      <Tokenomics />
      <HowToBuy />
      <MemeCarousel />
      <Disclaimer />
    </div>
  );
}

export default App;