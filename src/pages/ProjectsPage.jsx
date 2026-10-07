import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  Calendar, 
  Filter, 
  CheckCircle2, 
  ArrowRight,
  Truck,
  Sparkles
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import ProjectCard from '../components/common/ProjectCard';
import { projectsData, companyInfo } from '../data/transportData';
import { Reveal, StaggerContainer, StaggerItem } from '../components/common/Reveal';

const ProjectsPage = ({ onNavigateContact, onSelectImage }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Employee Transport',
    'Logistics Freight',
    'Specialized Transport',
    'Heavy Cargo',
    'Local Transport',
    'Corporate VIP'
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-16 sm:space-y-20">
      
      {/* 1. Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <SectionHeader
            badge="Commercial Case Studies"
            title="Our Work & Delivered"
            highlight="Transport Projects"
            subtitle="Explore real-world case studies demonstrating our capacity to manage complex corporate commuter networks, temperature-sensitive cold-chains, and heavy industrial freight."
          />
        </Reveal>

        {/* Categories Bar */}
        <Reveal direction="up" delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20 font-bold'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 2. Featured Real-World Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer 
          key={selectedCategory}
          staggerDelay={0.12} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredProjects.map((project) => (
            <StaggerItem key={project.id} direction="up">
              <ProjectCard
                project={project}
                onNavigateContact={onNavigateContact}
                onSelectImage={onSelectImage}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 3. Operational Track Record Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-8 lg:p-12 relative shadow-sm">
            <SectionHeader
              badge="Execution Reliability"
              title="Consistently Exceeding"
              highlight="Corporate SLAs"
              subtitle="How our structured dispatch frameworks ensure contract compliance across high-volume transport operations."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-orange-600 font-heading">99.8%</span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Daily Commuter Punctuality</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Verified across 25,000+ daily employee trips with zero missed employee shifts due to automated hot-standby vehicle protocols.
                </p>
              </div>

              <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-heading">0.01%</span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Cargo Damage Ratio</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Industry-leading safety tie-downs, air-ride suspensions, and pallet load-securing protocols protect fragile high-value freight.
                </p>
              </div>

              <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-2 col-span-1 sm:col-span-2 lg:col-span-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-heading">100%</span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Regulatory Compliance</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Zero DOT safety citations, fully compliant driver hours of service (HOS), and computerized electronic logging device (ELD) records.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. Request Case Study RFP Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 rounded-3xl p-6 sm:p-8 text-center space-y-3 sm:space-y-4 text-white shadow-xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-heading">
              Have a Large-Scale Transportation Need?
            </h3>
            <p className="text-xs sm:text-sm text-orange-50 max-w-xl mx-auto">
              Our enterprise solutions team will prepare a customized assessment with route maps, vehicle allocation models, and cost-benefit frameworks.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigateContact && onNavigateContact()}
                className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer shadow-lg hover:scale-[1.02] transition"
              >
                <span className="text-orange-700 font-extrabold">Contact Our Projects Team</span>
                <ArrowRight className="w-4 h-4 text-orange-600" />
              </button>
            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
};

export default ProjectsPage;
