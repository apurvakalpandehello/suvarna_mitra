import React from 'react';
import Navbar from '../components/Navbar.jsx';

import AboutHero from '../components/about/AboutHero.jsx';
import AboutStory from '../components/about/AboutStory.jsx';
import AboutFinancialSolution from '../components/about/AboutFinancialSolution.jsx';
import WhatWeStandFor from '../components/about/WhatWeStandFor.jsx';
import AboutClearerPath from '../components/about/AboutClearerPath.jsx';
import AboutCTA from '../components/about/AboutCTA.jsx';

function AboutUs() {
  return (
    <div className="about-us-page" style={{ backgroundColor: '#faf7f2', minHeight: '100vh', width: '100%' }}>
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutFinancialSolution />
      <WhatWeStandFor />
      <AboutClearerPath />
      <AboutCTA />
    </div>
  );
}

export default AboutUs;