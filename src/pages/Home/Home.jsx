import React, { useEffect } from 'react';
import HeroSection from 'components/HeroSection/HeroSection';
import AboutUs from 'components/AboutUs/AboutUs';
import Services from 'components/Services/Services';
import Expertise from 'components/Experetise/Expertise';
import Questions from 'components/Questions/Questions';
import Pricing from 'components/Pricing/Pricing';
import Geographies from 'components/Geographies/Geaographies';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <Expertise />
      <Questions />
      <Geographies />
      <Pricing />
      <Footer />
    </>
  );
};
export default Home;
