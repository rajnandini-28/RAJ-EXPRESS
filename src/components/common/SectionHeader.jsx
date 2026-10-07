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
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 glassmorphism text-blue-700 border border-blue-200/90 shadow-sm hover:border-blue-400/80 transition-all duration-300 ${centered ? 'mx-auto' : ''}`}>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 animate-glow-ring"></span>
          </span>
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight mb-3 sm:mb-4">
        {title} {highlight && <span className="text-gradient-sunset">{highlight}</span>}
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

