import React from 'react';
import HeroSection from 'components/HeroSection/HeroSection';
import AboutUs from 'components/AboutUs/AboutUs';
import Services from 'components/Services/Services';
import Expertise from 'components/Experetise/Expertise';
import Questions from 'components/Questions/Questions';
import Geographies from 'components/Geographies/Geaographies';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Services />
      <Expertise />
      <Questions />
      <Geographies />
    </>
  );
};
export default Home;
