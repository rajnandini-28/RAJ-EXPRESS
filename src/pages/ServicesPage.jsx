import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Briefcase, 
  Truck, 
  Package, 
  MapPin, 
  Navigation, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  Activity,
  Layers,
  FileSpreadsheet
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import { servicesData, companyInfo } from '../data/transportData';

const ServicesPage = ({ initialServiceId, onNavigateContact }) => {
  const [activeServiceId, setActiveServiceId] = useState(initialServiceId || servicesData[0].id);

  useEffect(() => {
    if (initialServiceId) {
      setActiveServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  const activeService = servicesData.find(s => s.id === activeServiceId) || servicesData[0];

  const getServiceIcon = (id) => {
    switch(id) {
      case 'employee-transportation': return <Users className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'corporate-transportation': return <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'logistics-transportation': return <Truck className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'goods-transportation': return <Package className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'local-transportation': return <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'long-distance-transportation': return <Navigation className="w-4 h-4 sm:w-5 sm:h-5" />;
      default: return <Truck className="w-4 h-4 sm:w-5 sm:h-5" />;
    }
  };

  const serviceWorkflow = [
    {
      step: "01",
      title: "Routing & Needs Assessment",
      desc: "Our dispatch engineers audit shift rosters, cargo volume, bridge limits, and time curfews to design optimized routing topologies."
    },
    {
      step: "02",
      title: "Fleet Allocation & Telemetry Setup",
      desc: "Dedicated sanitized vehicles fitted with live GPS, SOS triggers, and ADAS forward cameras are assigned to the contract."
    },
    {
      step: "03",
      title: "Driver Vetting & Induction",
      desc: "Certified, background-verified chauffeurs with route familiarity and customer service training are assigned."
    },
    {
      step: "04",
      title: "24/7 Monitored Execution",
      desc: "Our Transport Control Center monitors every trip milestone in real time, delivering periodic SLA reports and billing transparency."
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-16 sm:space-y-20">
      
      {/* 1. Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Enterprise Solutions"
          title="Specialized Transportation"
          highlight="& Freight Services"
          subtitle="Engineered for corporate reliability, high-density employee commutes, and precision commercial cargo logistics."
        />
      </section>

      {/* 2. Interactive Service Deep-Dive Navigator */}
      <section id="service-deepdive" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Service Navigation Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-8 sm:mb-10">
          {servicesData.map((svc) => {
            const isSelected = svc.id === activeServiceId;
            return (
              <button
                key={svc.id}
                onClick={() => setActiveServiceId(svc.id)}
                className={`p-3 sm:p-4 rounded-2xl border text-left transition-all flex flex-col justify-between h-28 sm:h-32 cursor-pointer ${
                  isSelected 
                    ? 'bg-orange-50 border-orange-500 text-slate-950 shadow-md shadow-orange-500/10 font-semibold' 
                    : 'bg-white border-slate-200/90 text-slate-600 hover:text-slate-900 hover:border-orange-300 shadow-sm'
                }`}
              >
                <div className={`p-1.5 sm:p-2 rounded-xl w-fit ${isSelected ? 'bg-orange-500 text-white' : 'bg-slate-100 text-orange-600'}`}>
                  {getServiceIcon(svc.id)}
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold text-orange-600 block truncate">
                    {svc.category}
                  </span>
                  <span className="text-xs sm:text-sm font-bold font-heading line-clamp-2 leading-snug text-slate-900">
                    {svc.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Detailed Card */}
        <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Image & Stats (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[340px] lg:min-h-full bg-slate-100">
              <img 
                src={activeService.image} 
                alt={activeService.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>
              
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                <span className="bg-white/95 backdrop-blur-md text-orange-600 border border-orange-200 text-xs font-bold px-3 py-1 rounded-full shadow">
                  {activeService.tag}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 space-y-2">
                <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-3 sm:p-3.5 shadow-md">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Operational Footprint:</span>
                  <span className="text-xs sm:text-sm font-bold text-orange-600 font-heading">{activeService.metrics}</span>
                </div>
              </div>
            </div>

            {/* Right Details (7 cols) */}
            <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10 space-y-5 sm:space-y-6">
              <div>
                <div className="flex items-center gap-2 text-[11px] sm:text-xs text-orange-600 font-semibold uppercase tracking-wider mb-1">
                  <span>{activeService.category}</span>
                  <span>•</span>
                  <span>B2B Contract Service</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 font-heading">
                  {activeService.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed mt-2.5">
                  {activeService.longDesc}
                </p>
              </div>

              {/* Key Capabilities */}
              <div>
                <h4 className="text-[11px] sm:text-xs font-bold text-orange-600 uppercase tracking-wider mb-2.5">
                  Service Specifications & Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {activeService.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2 sm:p-2.5 rounded-xl border border-slate-200 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Industry Profiles */}
              <div className="bg-slate-50 p-3.5 sm:p-4 rounded-2xl border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                  <span>Ideal Industry Applications:</span>
                </div>
                <p className="text-xs text-slate-600">
                  {activeService.idealFor}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <button
                  onClick={() => onNavigateContact && onNavigateContact()}
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 cursor-pointer transition"
                >
                  <span>Contact Our Operations Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-500 text-center">
                  Customized SLA and dedicated retainer available
                </span>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* 3. Service Workflow / Process Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Operational Rigor"
          title="How We Deliver"
          highlight="Seamless Execution"
          subtitle="Our structured four-stage onboarding and operational lifecycle ensures zero transit disruptions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {serviceWorkflow.map((step, idx) => (
            <div key={idx} className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between shadow-sm">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-orange-400/40 font-heading mb-2 sm:mb-3">
                  {step.step}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 font-heading mb-1.5">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Complete Services List Card Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="All Verticals"
          title="Full Spectrum of"
          highlight="Transport Capabilities"
          subtitle="Review all six core commercial transport divisions available for corporate and industrial contracts."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((svc) => (
            <div 
              key={svc.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-orange-300 hover:shadow-md transition-all space-y-4 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold text-orange-700 px-2.5 py-1 rounded bg-orange-50 border border-orange-200">
                    {svc.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">B2B Division</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading mb-1.5">
                  {svc.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {svc.shortDesc}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  {svc.keyFeatures.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span className="truncate">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={() => {
                    setActiveServiceId(svc.id);
                    const el = document.getElementById('service-deepdive');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-slate-50 hover:bg-orange-500 hover:text-white text-slate-800 font-semibold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-slate-200"
                >
                  <span>View Service Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;

