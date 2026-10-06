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
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3 bg-orange-50 text-orange-700 border border-orange-200/80 shadow-xs ${centered ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight mb-3 sm:mb-4">
        {title} {highlight && <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">{highlight}</span>}
      </h2>

      {subtitle && (
        <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
