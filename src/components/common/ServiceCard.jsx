import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Truck, 
  ShieldCheck, 
  Layers,
  Maximize2 
} from 'lucide-react';

const ServiceCard = ({ service, onSelectService, onSelectImage }) => {
  const handleImageClick = (e) => {
    e.stopPropagation();
    if (onSelectImage) {
      onSelectImage({
        image: service.image,
        title: service.title,
        category: service.category,
        caption: `${service.shortDesc} • ${service.metrics}`
      });
    }
  };

  return (
    <div className="card-luxury rounded-2xl flex flex-col group cursor-pointer hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-400 transition-all duration-300 transform">
      {/* Service Header Image - Click to open modal */}
      <div 
        onClick={handleImageClick}
        className="relative h-48 sm:h-52 overflow-hidden bg-slate-950 cursor-zoom-in group/img"
        title="Click to preview full image"
      >
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover img-filter-hover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent group-hover:via-slate-950/10 transition-all duration-500"></div>
        
        {/* Center Hover Preview Badge */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="glassmorphism text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-2xl scale-90 group-hover/img:scale-100 transition-transform">
            <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Click to View Image</span>
          </span>
        </div>

        {/* Category Pill with Glassmorphism */}
        <div className="absolute top-4 left-4">
          <span className="glassmorphism text-orange-700 border border-orange-200 text-xs font-bold px-3 py-1 rounded-full shadow-sm group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white group-hover:border-transparent transition-all duration-300">
            {service.category}
          </span>
        </div>

        {/* Volume Metric Tag */}
        <div className="absolute bottom-3 left-4 right-4 transform group-hover:-translate-y-0.5 transition-transform duration-300">
          <span className="inline-block bg-slate-900/90 backdrop-blur-md text-amber-300 text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-slate-700 shadow-sm">
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
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="line-clamp-1 font-medium">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Fleet Allocation info */}
        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs group-hover:bg-orange-50/20 group-hover:border-orange-200/60 transition-colors">
          <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
            Standard Fleet Units:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {service.fleetUsed.map((item, idx) => (
              <span key={idx} className="text-[11px] bg-amber-50 text-orange-900 px-2 py-0.5 rounded-md border border-orange-200/70 font-medium group-hover:bg-white transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="pt-2 border-t border-slate-100">
          <button
            onClick={() => onSelectService && onSelectService(service.id)}
            className="w-full bg-slate-900 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all duration-300 shadow-sm cursor-pointer btn-luxury"
          >
            <span>View Service Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

