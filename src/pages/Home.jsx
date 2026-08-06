import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Steps from '../components/Steps';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black text-[#f7f7f7] overflow-x-hidden relative">
  
    <div className="absolute top-0 left-0 w-full z-50 pt-6">
        <Navbar />
      </div>
      <Hero />

      <div className="mx-auto w-full max-w-[1400px] flex flex-col gap-12 md:gap-24 py-12 md:py-24 px-4 md:px-8">
        <Features />
        <Steps />
        <Pricing />
      </div>

      <div className="w-full">
        <Testimonials />
      </div>

      <div className="mx-auto w-full max-w-[1400px] flex flex-col gap-12 md:gap-24 pb-12 md:pb-24 px-4 md:px-8">
        <FAQ />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
