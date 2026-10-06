import React from 'react'
import Hero from "../components/home-page/Hero";
import Founder from '../components/home-page/Founder';
import OurServices from '../components/OurServices';
import Projects from '../components/Projects/Projects';
import WhyChooseUs from '../components/home-page/WhyChooseUs';
import ContactSection from '../components/ContactSection';


const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Founder />
      <OurServices />
      <Projects />
      <WhyChooseUs />
      {/* <CTASection /> */}
      <ContactSection />
    </div>
  )
}

export default Home