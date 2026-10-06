import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import FleetPage from './pages/FleetPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ImageModal from './components/common/ImageModal';
import { ArrowUp } from 'lucide-react';
import { companyInfo } from './data/transportData';

export function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateToContact = () => {
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectImage = (imgItem) => {
    setSelectedImage(imgItem);
  };

  const handleNavigateToService = (serviceId) => {
    setSelectedServiceId(serviceId);
    setActivePage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <HomePage 
            setActivePage={setActivePage} 
            onSelectImage={handleSelectImage}
            onSelectService={handleNavigateToService}
            onNavigateContact={handleNavigateToContact}
          />
        );
      case 'about':
        return (
          <AboutPage 
            setActivePage={setActivePage}
            onSelectImage={handleSelectImage}
            onNavigateContact={handleNavigateToContact}
          />
        );
      case 'services':
        return (
          <ServicesPage 
            initialServiceId={selectedServiceId}
            onSelectImage={handleSelectImage}
            onNavigateContact={handleNavigateToContact}
          />
        );
      case 'fleet':
        return (
          <FleetPage 
            onSelectImage={handleSelectImage}
            onNavigateContact={handleNavigateToContact}
          />
        );
      case 'projects':
        return (
          <ProjectsPage 
            onSelectImage={handleSelectImage}
            onNavigateContact={handleNavigateToContact}
          />
        );
      case 'contact':
        return (
          <ContactPage />
        );
      default:
        return (
          <HomePage 
            setActivePage={setActivePage} 
            onSelectImage={handleSelectImage}
            onSelectService={handleNavigateToService}
            onNavigateContact={handleNavigateToContact}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbf9] text-slate-900 flex flex-col selection:bg-amber-500 selection:text-white">
      
      {/* Top Navigation */}
      <Navbar 
        activePage={activePage} 
        setActivePage={(page) => {
          setActivePage(page);
          if (page !== 'services') setSelectedServiceId(null);
        }} 
        onNavigateContact={handleNavigateToContact}
      />

      {/* Main Page View */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer 
        setActivePage={(page) => {
          setActivePage(page);
          if (page !== 'services') setSelectedServiceId(null);
        }}
        onSelectService={handleNavigateToService}
        onNavigateContact={handleNavigateToContact}
      />

      {/* Image Lightbox Modal */}
      <ImageModal 
        imageItem={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />

      {/* Floating Scroll to Top */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white/95 hover:bg-amber-500 text-slate-700 hover:text-slate-950 border border-slate-200 hover:border-amber-400 shadow-xl flex items-center justify-center transition-all cursor-pointer hover:scale-105"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      )}

    </div>
  );
}

export default App;
