import React from 'react';

const SectionHeader = ({ 
  badge, 
  title, 
  highlight, 
  subtitle, 
  centered = true, 
  className = "" 
}) => {
  return (
    <div className={`mb-8 sm:mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 bg-gradient-to-r from-orange-50 to-amber-50 text-orange-700 border border-orange-200/90 shadow-xs hover:border-orange-400/80 transition-colors ${centered ? 'mx-auto' : ''}`}>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
          </span>
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight mb-3 sm:mb-4">
        {title} {highlight && <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600">{highlight}</span>}
      </h2>

      {subtitle && (
        <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

