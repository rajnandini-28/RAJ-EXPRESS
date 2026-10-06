import React, { useState } from 'react';
import { 
  Truck, 
  ShieldCheck, 
  Clock, 
  Users, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Activity, 
  Building2, 
  Award,
  Sparkles,
  PhoneCall,
  Send,
  Navigation,
  Globe,
  Zap,
  Check
} from 'lucide-react';
import { 
  companyInfo, 
  servicesData, 
  fleetData, 
  projectsData, 
  whyChooseUs, 
  statistics 
} from '../data/transportData';
import SectionHeader from '../components/common/SectionHeader';
import VehicleCard from '../components/common/VehicleCard';
import ProjectCard from '../components/common/ProjectCard';
import ServiceCard from '../components/common/ServiceCard';

const HomePage = ({ setActivePage, onSelectImage, onSelectService, onNavigateContact }) => {
  const [selectedFleetTab, setSelectedFleetTab] = useState('All');

  const fleetFilterOptions = [
    'All', 
    'Passenger / Bus', 
    'Passenger / Van', 
    'Heavy Freight', 
    'Specialized / Cold-Chain',
    'Commercial Goods'
  ];

  const filteredFleet = selectedFleetTab === 'All' 
    ? fleetData.slice(0, 4) 
    : fleetData.filter(v => v.category === selectedFleetTab).slice(0, 4);

  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 sm:space-y-28 pb-24 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-100/60 via-orange-50/30 to-transparent">
        {/* Ambient background glows */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-orange-400/15 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-400/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto w-full z-10 space-y-12">
          
          {/* Main Hero Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Telemetry Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/95 border border-orange-200 text-slate-800 shadow-md backdrop-blur-md hover:border-orange-400 transition-colors">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span className="text-orange-600 font-bold uppercase tracking-wider text-[11px]">Active Fleet Operations</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600">450+ Verified Commercial Vehicles</span>
              </div>

              {/* Bold Corporate Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-heading leading-[1.12]">
                Precision Fleet Transit & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600">Commercial Transport</span> Solutions.
              </h1>

              {/* Tagline / Subtitle */}
              <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Raj Express delivers turnkey corporate employee transit, nationwide heavy freight logistics, cold-chain pharma distribution, and dedicated fleet management. Clockwork precision, zero-incident safety, and 24/7 telematics.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
                <button
                  onClick={() => onNavigateContact ? onNavigateContact() : handleNav('contact')}
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white font-extrabold px-8 py-4 rounded-xl text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-orange-500/25 btn-luxury cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Contact Our Operations</span>
                </button>

                <button
                  onClick={() => handleNav('fleet')}
                  className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 hover:text-orange-600 font-bold px-7 py-4 rounded-xl text-sm flex items-center justify-center gap-2.5 border border-slate-200/90 hover:border-orange-300 transition-all cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <Truck className="w-4 h-4 text-orange-500" />
                  <span>View 450+ Fleet Inventory</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-2 justify-center lg:justify-start hover:text-slate-900 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-orange-500 shrink-0" />
                  <span className="font-semibold">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start hover:text-slate-900 transition-colors">
                  <Activity className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">24/7 GPS & Speed Tracking</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start col-span-2 sm:col-span-1 hover:text-slate-900 transition-colors">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-semibold">99.4% On-Time SLA Record</span>
                </div>
              </div>

            </div>

            {/* Right Visual Composition (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl p-1.5 bg-gradient-to-b from-orange-400 via-amber-300 to-white shadow-2xl">
                <div className="relative rounded-[22px] overflow-hidden bg-slate-100 group">
                  
                  {/* Image Container with ample height on mobile & desktop */}
                  <div className="relative h-64 sm:h-96 lg:h-[420px] w-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1100&q=80" 
                      alt="Raj Express Commercial Transport Fleet"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent sm:bg-gradient-to-t sm:from-slate-900/80 sm:via-transparent sm:to-transparent"></div>

                    {/* Floating Live Dispatch Hub Badge (Compact on mobile) */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl sm:rounded-2xl px-3 py-2 sm:p-3.5 shadow-xl animate-float">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-xs">
                        <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="font-bold text-slate-900 text-[11px] sm:text-xs">Central Operations Hub</span>
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-orange-600 font-semibold mt-0.5">
                        450+ Verified Commercial Vehicles
                      </p>
                    </div>

                    {/* Desktop Floating Metric Card at Bottom */}
                    <div className="hidden sm:block absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-4 shadow-xl animate-float-delayed">
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">Annual Fleet Distance</span>
                          <span className="text-lg font-extrabold text-slate-900 font-heading">14.2M KM</span>
                        </div>
                        <div className="border-l border-slate-200 pl-4">
                          <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">Zero-Accident Standard</span>
                          <span className="text-lg font-extrabold text-emerald-600 font-heading">100% Compliance</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Metric Strip below image (100% clear view of vehicle) */}
                  <div className="sm:hidden bg-white/95 backdrop-blur-md p-3.5 border-t border-slate-100">
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-slate-500 block text-[9px] uppercase font-bold tracking-wider">Annual Fleet Distance</span>
                        <span className="text-base font-extrabold text-slate-900 font-heading">14.2M KM</span>
                      </div>
                      <div className="border-l border-slate-200 pl-3">
                        <span className="text-slate-500 block text-[9px] uppercase font-bold tracking-wider">Zero-Accident Standard</span>
                        <span className="text-base font-extrabold text-emerald-600 font-heading">100% Compliance</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Regional Corridors Strip */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <Globe className="w-4 h-4 text-orange-500" />
                <span>Primary Operating Transport Corridors:</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {companyInfo.regionalHubs.map((hub, idx) => (
                  <span key={idx} className="bg-orange-50 text-orange-700 hover:bg-orange-500 hover:text-white px-3 py-1 rounded-lg border border-orange-200/80 font-semibold transition-colors duration-200 cursor-default">
                    {hub}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 2. ENTERPRISE STATISTICS TICKER GRID */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statistics.map((stat, idx) => (
            <div 
              key={idx}
              className="card-luxury rounded-2xl p-6 text-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-50 to-amber-100 text-orange-600 flex items-center justify-center mx-auto mb-3.5 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm">
                {idx === 0 && <Truck className="w-5 h-5" />}
                {idx === 1 && <Clock className="w-5 h-5" />}
                {idx === 2 && <Building2 className="w-5 h-5" />}
                {idx === 3 && <Award className="w-5 h-5" />}
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-orange-600 font-heading mb-1 tracking-tight group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-900 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 3. SHORT COMPANY INTRODUCTION & CAPABILITIES */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-luxury rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-50 text-orange-700 border border-orange-200">
                <Sparkles className="w-3.5 h-3.5 text-orange-600 animate-pulse" />
                <span>Commercial Excellence</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
                Reliable Transportation Partner for Leading Corporations & Industry
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded in 2008, Raj Express Transport & Logistics has evolved from a regional freight carrier into a premier multimodal transport operator. We engineer safe, automated employee commute networks, interstate line-hauls, and temperature-controlled logistics for enterprises nationwide.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-center gap-2.5 bg-slate-50 hover:bg-orange-50/50 p-3 rounded-xl border border-slate-200 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span className="font-semibold">Strict Driver Background Vetting</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-50 hover:bg-orange-50/50 p-3 rounded-xl border border-slate-200 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span className="font-semibold">24/7 Redundant Dispatch Centers</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-50 hover:bg-orange-50/50 p-3 rounded-xl border border-slate-200 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span className="font-semibold">Preventative OEM Maintenance</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-50 hover:bg-orange-50/50 p-3 rounded-xl border border-slate-200 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span className="font-semibold">Dedicated Corporate SLA Managers</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNav('about')}
                  className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-extrabold text-sm group cursor-pointer"
                >
                  <span>Learn more about our safety standards & leadership team</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-48 sm:h-56 bg-slate-100 border border-slate-200 shadow-sm group">
                  <img 
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=700&q=80" 
                    alt="Corporate Shuttle Coach"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-orange-300 transition-colors">
                  <Award className="w-6 h-6 text-orange-600 mb-2" />
                  <h4 className="text-slate-900 font-bold text-sm font-heading">ISO 9001:2015 Certified</h4>
                  <p className="text-xs text-slate-500 mt-1">Quality audited processes ensuring predictable transit.</p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
                  <Building2 className="w-6 h-6 text-blue-600 mb-2" />
                  <h4 className="text-slate-900 font-bold text-sm font-heading">320+ Corporate Retainers</h4>
                  <p className="text-xs text-slate-500 mt-1">Trusted by tech hubs, manufacturers & FMCG brands.</p>
                </div>
                <div className="rounded-2xl overflow-hidden h-48 sm:h-56 bg-slate-100 border border-slate-200 shadow-sm group">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80" 
                    alt="Logistics Operations Warehouse"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 4. OUR SERVICES SHOWCASE */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Commercial Verticals"
          title="Full Spectrum of"
          highlight="Transport Services"
          subtitle="From daily corporate employee shuttles to heavy industrial freight, our integrated service divisions cover every commercial mobility requirement."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => handleNav('services')}
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 hover:text-orange-600 font-bold px-7 py-3.5 rounded-xl border border-slate-200/90 hover:border-orange-300 text-sm cursor-pointer shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
          >
            <span>View All Service Specifications & Capabilities</span>
            <ChevronRight className="w-4 h-4 text-orange-500" />
          </button>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 5. FLEET VEHICLE SHOWCASE WITH CATEGORY TABS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Verified Inventory"
          title="Modern Commercial"
          highlight="Vehicle Fleet"
          subtitle="Explore our 450+ verified inventory of luxury passenger coaches, VIP executive vans, heavy tractor trailers, and temperature-controlled units."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {fleetFilterOptions.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFleetTab(tab)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFleetTab === tab
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20 font-bold scale-105'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 shadow-sm hover:border-orange-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Fleet Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFleet.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onNavigateContact={onNavigateContact}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => handleNav('fleet')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white font-extrabold px-8 py-4 rounded-xl text-sm shadow-lg shadow-orange-500/20 btn-luxury cursor-pointer"
          >
            <span>Explore Complete 450+ Vehicle Inventory & Specs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 6. OUR WORK / PROJECTS CASE STUDIES */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Enterprise Track Record"
          title="Featured Transportation"
          highlight="Case Studies"
          subtitle="Real-world examples where Raj Express solved high-volume corporate commuter transit and complex industrial logistics operations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onNavigateContact={onNavigateContact}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => handleNav('projects')}
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 hover:text-orange-600 font-bold px-7 py-3.5 rounded-xl border border-slate-200/90 hover:border-orange-300 text-sm cursor-pointer transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span>Browse All Enterprise Case Studies</span>
            <ChevronRight className="w-4 h-4 text-orange-500" />
          </button>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 7. WHY CHOOSE US / THE RAJ EXPRESS ADVANTAGE */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="The Raj Express Advantage"
          title="Why Leading Enterprises"
          highlight="Trust Raj Express"
          subtitle="We combine modern vehicle assets with military-grade operational discipline, continuous driver vetting, and smart telematics."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, idx) => (
            <div 
              key={idx}
              className="card-luxury rounded-2xl p-7 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-100 border border-orange-200 text-orange-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm">
                {idx === 0 && <ShieldCheck className="w-7 h-7" />}
                {idx === 1 && <Activity className="w-7 h-7" />}
                {idx === 2 && <Clock className="w-7 h-7" />}
                {idx === 3 && <Truck className="w-7 h-7" />}
                {idx === 4 && <Users className="w-7 h-7" />}
                {idx === 5 && <MapPin className="w-7 h-7" />}
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading mb-2 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 8. CONTACT / REACH OUT ACTION BANNER */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 p-8 sm:p-12 text-white overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full border border-white/30 shadow-sm">
                Commercial Fleet Partner
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight">
                Ready to Upgrade Your Corporate Mobility & Freight Logistics?
              </h2>
              <p className="text-orange-50 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
                Connect directly with our senior operations team to discuss fleet deployment, shift schedules, and commercial contract terms.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => onNavigateContact ? onNavigateContact() : handleNav('contact')}
                className="w-full bg-white hover:bg-slate-100 text-slate-900 font-extrabold px-6 py-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] transition cursor-pointer btn-luxury"
              >
                <Send className="w-4 h-4 text-orange-600" />
                <span className="text-slate-900 font-bold">Go to Contact Page</span>
              </button>

              <a
                href={`tel:${companyInfo.phone}`}
                className="w-full bg-orange-700/50 hover:bg-orange-700/70 border border-white/20 text-white font-extrabold px-6 py-4 rounded-xl text-sm flex items-center justify-center gap-2 transition hover:scale-[1.01]"
              >
                <PhoneCall className="w-4 h-4 text-amber-300" />
                <span>Call Dispatch: {companyInfo.phone}</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;


