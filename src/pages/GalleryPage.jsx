import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  Layers, 
  Maximize2, 
  Filter, 
  Tag, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import { galleryItems, companyInfo } from '../data/transportData';

const GalleryPage = ({ onSelectImage, onNavigateContact }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Fleet Vehicles',
    'Operations',
    'Projects'
  ];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-16 sm:space-y-20">
      
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="High-Definition Gallery"
          title="Transport Fleet & Operational"
          highlight="Visual Showcase"
          subtitle="Explore high-resolution photography of our modern commercial fleet, centralized cross-dock facilities, highway movements, and real-world industrial projects."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 font-bold'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 shadow-sm hover:border-blue-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 2. Masonry / Responsive Image Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage && onSelectImage(item)}
              className="group relative h-56 sm:h-72 lg:h-80 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 flex flex-col justify-end"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent transition-all"></div>

              {/* Category Pill */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] uppercase font-bold bg-white/90 backdrop-blur-md text-blue-700 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-blue-200 shadow-md">
                  <Tag className="w-3 h-3" />
                  {item.category}
                </span>
              </div>

              {/* Zoom Icon Hint */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 text-blue-600 flex items-center justify-center shadow-lg border border-slate-200">
                  <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="relative p-4 sm:p-5 space-y-1 z-10">
                <h3 className="text-sm sm:text-base font-bold text-white font-heading group-hover:text-amber-300 transition-colors drop-shadow">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-200 line-clamp-2 drop-shadow leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Depot & Infrastructure Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 text-center max-w-4xl mx-auto space-y-3.5 shadow-sm">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
            <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
            Authentic Operational Assets
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            All photography highlights real active commercial fleet vehicles, certified chauffeurs, live telematics dashboards, and cross-dock warehousing operated under Raj Express's network standards.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigateContact && onNavigateContact()}
              className="bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 font-bold px-6 py-2.5 rounded-xl text-xs inline-flex items-center gap-2 border border-blue-200 transition cursor-pointer"
            >
              <span>Contact Us for Depot Scheduling</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GalleryPage;

