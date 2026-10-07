import React from 'react';
import { MapPin, Building2, CheckCircle2, TrendingUp, ArrowUpRight, Maximize2 } from 'lucide-react';

const ProjectCard = ({ project, onNavigateContact, onSelectImage }) => {
  const handleImageClick = (e) => {
    e.stopPropagation();
    if (onSelectImage) {
      onSelectImage({
        image: project.image,
        title: project.title,
        category: project.category,
        caption: project.description || `${project.client} - ${project.scope}`
      });
    }
  };

  return (
    <div className="card-luxury rounded-2xl flex flex-col group cursor-pointer hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-400 transition-all duration-300 transform">
      {/* Project Image - Click to open full view */}
      <div 
        onClick={handleImageClick}
        className="relative h-56 sm:h-64 overflow-hidden bg-slate-950 cursor-zoom-in group/img"
        title="Click to preview full image"
      >
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover img-filter-hover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent group-hover:via-slate-950/10 transition-all duration-500"></div>
        
        {/* Center Hover Preview Badge */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="glassmorphism text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-2xl scale-90 group-hover/img:scale-100 transition-transform">
            <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Click to View Full Image</span>
          </span>
        </div>

        {/* Category Tag with Glassmorphism */}
        <div className="absolute top-4 left-4">
          <span className="glassmorphism text-blue-800 border border-blue-200 text-xs font-bold px-3 py-1 rounded-full shadow-sm group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:border-transparent transition-all duration-300">
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
            <span className="text-blue-600 font-semibold">{project.scope}</span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors mb-2.5">
            {project.title}
          </h3>

          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Key Achievement Metric Callout */}
        <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-3 flex items-start gap-2.5 group-hover:bg-blue-50 group-hover:border-blue-300 transition-colors">
          <div className="p-1.5 rounded-lg bg-blue-100 text-blue-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-blue-800 uppercase tracking-wider block">
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
              className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md border border-slate-200/80 font-medium group-hover:border-blue-200 group-hover:bg-white transition-colors"
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
              className="text-xs font-extrabold text-blue-600 hover:text-blue-700 flex items-center gap-1 group/btn cursor-pointer"
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

