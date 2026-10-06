import React from 'react';
import { 
  Truck, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight, 
  ChevronRight,
  Info
} from 'lucide-react';
import { companyInfo, servicesData } from '../../data/transportData';

const Footer = ({ setActivePage, onSelectService, onNavigateContact }) => {
  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceId) => {
    if (onSelectService) {
      onSelectService(serviceId);
    } else {
      handleNav('services');
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center text-slate-950 shadow-lg shadow-orange-500/20">
                <Truck className="w-6 h-6 stroke-[2.2] text-slate-950" />
              </div>
              <div>
                <span className="text-2xl font-extrabold tracking-tight text-white font-heading">
                  RAJ<span className="text-orange-400">EXPRESS</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-slate-800 text-amber-400 px-1.5 py-0.5 rounded border border-slate-700 ml-2">
                  LOGISTICS
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              {companyInfo.description}
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                ISO 9001:2015
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                DOT & HAZMAT Certified
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                450+ Verified Vehicles
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-heading font-semibold text-base tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Our Company' },
                { id: 'services', label: 'Our Services' },
                { id: 'fleet', label: 'Vehicle Fleet' },
                { id: 'projects', label: 'Case Studies / Work' },
                { id: 'contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 group cursor-pointer text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-heading font-semibold text-base tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleServiceClick(s.id)}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 group text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                    <span className="line-clamp-1">{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-heading font-semibold text-base tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Corporate Contact
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                <span className="text-slate-300 text-xs sm:text-sm">{companyInfo.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <div>
                  <a href={`tel:${companyInfo.phone}`} className="text-slate-200 hover:text-amber-400 font-medium block">
                    {companyInfo.phone}
                  </a>
                  <span className="text-xs text-slate-500">Toll Free Corporate Line</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <div>
                  <a href={`mailto:${companyInfo.email}`} className="text-slate-200 hover:text-amber-400 block break-all">
                    {companyInfo.email}
                  </a>
                  <span className="text-xs text-slate-500">Dedicated Enterprise Inquiries</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400">{companyInfo.businessHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer Banner */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-200">Commercial Showcase & B2B Transportation Partner</p>
              <p className="text-xs text-slate-400">
                This platform is an official showcase of Raj Express's commercial fleet, logistics capabilities, and corporate contract solutions. We do not provide public passenger ticketing or individual taxi dispatch.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigateContact ? onNavigateContact() : handleNav('contact')}
            className="shrink-0 bg-slate-800 hover:bg-slate-700 text-amber-400 hover:text-amber-300 text-xs font-semibold px-4 py-2 rounded-lg border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Enterprise SLA Compliant</span>
            <span>DOT Safety Rating: Satisfactory (Highest)</span>
            <span>Privacy & Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
