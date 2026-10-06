import React from 'react';
import { Users, Weight, Settings, ArrowRight, Shield, Zap } from 'lucide-react';

const VehicleCard = ({ vehicle, onNavigateContact }) => {
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-400 transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Vehicle Image Container */}
      <div className="relative h-52 sm:h-60 overflow-hidden bg-slate-900">
        <img 
          src={vehicle.image} 
          alt={vehicle.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="bg-white/95 backdrop-blur-md text-orange-700 border border-orange-200/80 text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full shadow-sm">
            {vehicle.category}
          </span>
        </div>

        {/* Availability Badge */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
          <span className="bg-emerald-950/90 backdrop-blur-md text-emerald-400 border border-emerald-500/30 text-[10px] sm:text-[11px] font-medium px-2 sm:px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            {vehicle.inFleet || "Active Fleet"}
          </span>
        </div>

        {/* Name & Type Overlay */}
        <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-3 sm:left-4 sm:right-4">
          <p className="text-[10px] sm:text-xs text-amber-400 font-bold uppercase tracking-wider mb-0.5">
            {vehicle.type}
          </p>
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white font-heading truncate drop-shadow">
            {vehicle.name}
          </h3>
        </div>
      </div>

      {/* Card Content & Specifications */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5 sm:space-y-4">
        
        {/* Key Specs Grid */}
        <div className="grid grid-cols-2 gap-2 bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-100 text-xs">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-orange-100 text-orange-600 shrink-0">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-slate-500 block text-[9px] sm:text-[10px] font-medium">Capacity</span>
              <span className="font-bold text-slate-800 text-xs truncate block">{vehicle.capacity}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-amber-100 text-amber-700 shrink-0">
              <Weight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-slate-500 block text-[9px] sm:text-[10px] font-medium">Gross Weight</span>
              <span className="font-bold text-slate-800 text-xs truncate block">{vehicle.payload}</span>
            </div>
          </div>
        </div>

        {/* Main Use Section */}
        <div>
          <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
            Primary Application:
          </span>
          <p className="text-xs text-slate-700 line-clamp-2 bg-amber-50/40 p-2 sm:p-2.5 rounded-lg border border-amber-100/70 leading-relaxed font-medium">
            {vehicle.mainUse}
          </p>
        </div>

        {/* Feature Tags */}
        <div className="space-y-1">
          <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
            Specifications:
          </span>
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {vehicle.features.slice(0, 3).map((feat, idx) => (
              <span 
                key={idx} 
                className="text-[10px] sm:text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80 font-medium"
              >
                {feat}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer: Specification Badge & Action */}
        <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="text-slate-500 text-[11px] flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-600" />
            <span>Commercial Certified Unit</span>
          </span>
          {onNavigateContact && (
            <button
              onClick={() => onNavigateContact()}
              className="text-orange-600 hover:text-orange-700 font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default VehicleCard;
