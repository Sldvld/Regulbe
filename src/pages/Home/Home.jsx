import React from 'react';
import HeroSection from 'components/HeroSection/HeroSection';
import AboutUs from 'components/AboutUs/AboutUs';
import Services from 'components/Services/Services';
import Expertise from 'components/Experetise/Expertise';
import Questions from 'components/Questions/Questions';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Services />
      <Expertise />
      <Questions />
    </>
  );
};
export default Home;
