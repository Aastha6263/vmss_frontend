import { useScroll } from '../context/ScrollContext';
import StaticBar from '../components/StaticBar';
import HeroSection from '../components/HeroSection';
import Services from './Services';
import Trusted from './Trusted';
import WhyChoose from './WhyChoose';
import Contact from './contact';
import Instructors from './Instructors';

export default function Home() {
  const { contactRef } = useScroll();

  return (
    <>
      <StaticBar />
      <HeroSection />

      {/* CONTACT SECTION */}
      <div ref={contactRef} className="scroll-mt-24">
        <Services />
        <Trusted />
        <Instructors />
        <WhyChoose />
        <Contact />
      </div>
    </>
  );
}
