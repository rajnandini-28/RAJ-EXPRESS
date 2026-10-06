import React from 'react';
import { MapPin, Building2, CheckCircle2, TrendingUp, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, onNavigateContact }) => {
  return (
    <div className="card-luxury rounded-2xl flex flex-col group cursor-pointer hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-400 transition-all duration-300 transform">
      {/* Project Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover img-zoom"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent group-hover:via-slate-950/10 transition-all duration-500"></div>
        
        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 backdrop-blur-md text-orange-700 border border-orange-200 text-xs font-bold px-3 py-1 rounded-full shadow-sm group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">
            {project.category}
          </span>
        </div>

        {/* Duration */}
        <div className="absolute top-4 right-4">
          <span className="bg-slate-900/90 backdrop-blur-md text-amber-300 text-xs font-semibold px-2.5 py-1 rounded-lg border border-slate-700 shadow-sm">
            {project.duration}
          </span>
        </div>

        {/* Location Pin */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 text-xs text-white transform group-hover:-translate-y-0.5 transition-transform duration-300">
          <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="font-semibold truncate drop-shadow">{project.location}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Client & Scope Metadata */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
            <Building2 className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold text-slate-800 truncate">{project.client}</span>
            <span>•</span>
            <span className="text-orange-600 font-semibold">{project.scope}</span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-orange-600 transition-colors mb-2.5">
            {project.title}
          </h3>

          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Key Achievement Metric Callout */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 flex items-start gap-2.5 group-hover:bg-orange-50 group-hover:border-orange-300 transition-colors">
          <div className="p-1.5 rounded-lg bg-orange-100 text-orange-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-orange-800 uppercase tracking-wider block">
              Operational Performance:
            </span>
            <p className="text-xs font-bold text-slate-800">
              {project.metric}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md border border-slate-200/80 font-medium group-hover:border-orange-200 group-hover:bg-white transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer Meta */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Delivered & Verified</span>
          </span>
          {onNavigateContact && (
            <button
              onClick={() => onNavigateContact()}
              className="text-xs font-extrabold text-orange-600 hover:text-orange-700 flex items-center gap-1 group/btn cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

