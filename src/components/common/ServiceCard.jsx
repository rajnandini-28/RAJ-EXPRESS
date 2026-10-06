import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Truck, 
  ShieldCheck, 
  Layers 
} from 'lucide-react';

const ServiceCard = ({ service, onSelectService }) => {
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-400 transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Service Header Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
        
        {/* Category Pill */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 backdrop-blur-md text-orange-700 border border-orange-200 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {service.category}
          </span>
        </div>

        {/* Volume Metric Tag */}
        <div className="absolute bottom-3 left-4 right-4">
          <span className="inline-block bg-slate-900/90 backdrop-blur-md text-amber-300 text-[11px] font-semibold px-2.5 py-0.5 rounded-lg border border-slate-700 shadow-sm">
            {service.metrics}
          </span>
        </div>
      </div>

      {/* Service Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div>
          <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-orange-600 transition-colors mb-2">
            {service.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            {service.shortDesc}
          </p>

          {/* Key Bullet Features */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Core Capabilities:
            </span>
            <ul className="space-y-1.5">
              {service.keyFeatures.slice(0, 4).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                  <span className="line-clamp-1 font-medium">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Fleet Allocation info */}
        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
          <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
            Standard Fleet Units:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {service.fleetUsed.map((item, idx) => (
              <span key={idx} className="text-[11px] bg-amber-50 text-orange-900 px-2 py-0.5 rounded-md border border-orange-200/70 font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="pt-2 border-t border-slate-100">
          <button
            onClick={() => onSelectService && onSelectService(service.id)}
            className="w-full bg-slate-900 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:text-slate-950 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all duration-200 shadow-sm cursor-pointer"
          >
            <span>View Service Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
