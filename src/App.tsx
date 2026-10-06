import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CctvSection from '@/components/CctvSection';
import ComputerSection from '@/components/ComputerSection';
import NetworkingSection from '@/components/NetworkingSection';
import PrinterSection from '@/components/PrinterSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CctvSection />
        <ComputerSection />
        <NetworkingSection />
        <PrinterSection />
        <WhyChooseUs />
        <About />
        <Gallery />
        <Process />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
