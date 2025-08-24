import React from 'react';
import HeroSection from '../components/HeroSection';
import WelcomeBanner from '../components/WelcomeBanner';
import WhyChooseUs from '../components/WhyChooseUs';
import CoreTreatments from '../components/CoreTreatments';
import Testimonials from '../components/Testimonials';
import ClinicAmenities from '../components/ClinicAmenities';

const Home = () => {
  return (
    <>
      <HeroSection />
      <WelcomeBanner />
      <WhyChooseUs />
      <CoreTreatments />
      <Testimonials />
      <ClinicAmenities />
    </>
  );
};

export default Home;