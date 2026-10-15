import { useEffect } from 'react';
import Lenis from 'lenis';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Core Sections matching the 3D Brand Logo
import { Hero } from './components/sections/Hero';
import { TrustedBy } from './components/sections/TrustedBy';
import { StatsRow } from './components/sections/StatsRow';
import { Services } from './components/sections/Services';
import { WhyNexora } from './components/sections/WhyNexora';
import { Industries } from './components/sections/Industries';
import { CtaSection } from './components/sections/CtaSection';

// Navigation & Footer
import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/sections/Footer';

// Subpages
import { About } from './components/pages/About';
import { Developers } from './components/pages/Developers';
import { Privacy } from './components/pages/Privacy';
import { Terms } from './components/pages/Terms';
import { Contact } from './components/sections/Contact';
import { ProductPage } from './components/pages/ProductPage';
import { productData } from './data/products';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <StatsRow />
      <Services />
      <WhyNexora />
      <Industries />
      <CtaSection />
    </>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative w-full bg-white min-h-screen text-slate-900 selection:bg-[#2563EB]/15 selection:text-[#1E3A8A]">
        <Navbar />
        
        <main className="relative z-10 w-full overflow-hidden flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/products/bulk-sms" element={<ProductPage {...productData.bulkSms} />} />
            <Route path="/products/whatsapp" element={<ProductPage {...productData.whatsapp} />} />
            <Route path="/products/rcs" element={<ProductPage {...productData.rcs} />} />
            <Route path="/products/voice" element={<ProductPage {...productData.voice} />} />
            <Route path="/products/ivr" element={<ProductPage {...productData.ivr} />} />
            <Route path="/products/smpp" element={<ProductPage {...productData.smpp} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
