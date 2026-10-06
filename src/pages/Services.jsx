import ServicesHero from '../components/services-page/ServiceHero'
import ServiceBreakdown from '../components/services-page/ServiceBreakdown'
import WhyChooseUs from "../components/home-page/WhyChooseUs";
import CTASection from "../components/CTASection";
import HowWeWork from '../components/services-page/HowWeWork';
import ServicesMarquee from '../components/services-page/ServicesMarquee';

const Services = () => {
  return (
    <div className='overflow-hidden'>
        <ServicesHero />
        <ServicesMarquee />
        <ServiceBreakdown />
        <HowWeWork />
        <WhyChooseUs />
        <CTASection />
    </div>
  )
}

export default Services