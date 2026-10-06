import React, { useState, useEffect } from 'react';
import { 
  Truck, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronRight, 
  ShieldCheck,
  Send
} from 'lucide-react';
import { companyInfo } from '../../data/transportData';

const Navbar = ({ activePage, setActivePage, onNavigateContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'fleet', label: 'Our Fleet' },
    { id: 'projects', label: 'Our Work' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top Bar for Corporate Coordinates */}
        <div className="hidden lg:block bg-slate-950 text-slate-200 text-xs border-b border-slate-800 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-1.5 text-amber-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-orange-400" />
                <span>ISO 9001:2015 Certified Fleet Operations</span>
              </span>
              <span className="text-slate-700">|</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                24/7 Central Dispatch Active (Rajasthan • Gujarat • Delhi • Lucknow)
              </span>
            </div>

            <div className="flex items-center space-x-6">
              <a 
                href={`tel:${companyInfo.phone}`} 
                className="flex items-center gap-1.5 hover:text-orange-400 transition-colors font-medium text-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <span>{companyInfo.phone}</span>
              </a>
              <a 
                href={`mailto:${companyInfo.email}`} 
                className="flex items-center gap-1.5 hover:text-orange-400 transition-colors text-slate-300"
              >
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                <span className="truncate max-w-[200px]">{companyInfo.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar (Sticky with Glassmorphism) */}
        <nav 
          className={`transition-all duration-300 ${
            isScrolled 
              ? 'glass-navbar shadow-lg py-2.5 sm:py-3' 
              : 'bg-white/85 backdrop-blur-md border-b border-slate-200/70 shadow-sm py-3 sm:py-3.5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Brand Logo */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none cursor-pointer shrink-0"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md shadow-orange-500/25 group-hover:scale-105 group-hover:shadow-orange-500/40 transition-all duration-300">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 font-heading">
                    RAJ<span className="text-orange-600">EXPRESS</span>
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest bg-orange-50 text-orange-700 px-1.5 py-0.5 rounded-md border border-orange-200 shadow-xs">
                    LOGISTICS
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 tracking-wider font-semibold uppercase hidden xs:block">
                  Transport & Fleet Solutions
                </p>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? 'text-orange-700 bg-orange-50 border border-orange-200/90 shadow-xs font-bold scale-[1.02]' 
                        : 'text-slate-700 hover:text-orange-600 hover:bg-orange-50/60 hover:-translate-y-0.5'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Action CTA Button */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={() => onNavigateContact ? onNavigateContact() : handleNavClick('contact')}
                className={`inline-flex items-center gap-2 font-extrabold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-md cursor-pointer btn-luxury ${
                  activePage === 'contact'
                    ? 'bg-orange-600 text-white ring-2 ring-orange-400 shadow-orange-500/30'
                    : 'bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white shadow-orange-500/25'
                }`}
              >
                <Send className="w-3.5 h-3.5" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => onNavigateContact ? onNavigateContact() : handleNavClick('contact')}
                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow transition cursor-pointer"
              >
                Contact
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-orange-600" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-1.5 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[calc(100vh-70px)] overflow-y-auto">
              <div className="pb-2 mb-2 border-b border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                <span>Raj Express Transport & Logistics</span>
                <a href={`tel:${companyInfo.phone}`} className="text-orange-600 font-bold">{companyInfo.phone}</a>
              </div>
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between cursor-pointer transition ${
                      isActive 
                        ? 'bg-orange-50 text-orange-700 font-bold border border-orange-200' 
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-orange-600' : 'text-slate-400'}`} />
                  </button>
                );
              })}
              <div className="pt-3 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onNavigateContact) onNavigateContact();
                    else handleNavClick('contact');
                  }}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold py-3 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 cursor-pointer btn-luxury"
                >
                  <Send className="w-4 h-4" />
                  <span>Contact Our Team</span>
                </button>
                <div className="text-center pt-1">
                  <span className="text-[11px] text-slate-500">24/7 Operations Support: {companyInfo.phone}</span>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Mobile Drawer Overlay Backdrop */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
        ></div>
      )}
    </>
  );
};

export default Navbar;

