import React, { useState } from 'react';
import { 
  Truck, 
  Users, 
  Weight, 
  Settings, 
  ShieldCheck, 
  Activity, 
  Filter, 
  Layers, 
  Search, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import VehicleCard from '../components/common/VehicleCard';
import { fleetData, companyInfo } from '../data/transportData';
import { Reveal, StaggerContainer, StaggerItem } from '../components/common/Reveal';

const FleetPage = ({ onNavigateContact, onSelectImage }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Passenger / Bus',
    'Passenger / Van',
    'Heavy Freight',
    'Specialized / Cold-Chain',
    'Commercial Goods',
    'Passenger / Sedan'
  ];

  const filteredVehicles = fleetData.filter(v => {
    const matchesCategory = selectedCategory === 'All' || v.category === selectedCategory;
    const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          v.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          v.mainUse.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const fleetStats = [
    { label: "Total Managed Vehicles", value: "450+" },
    { label: "Average Fleet Age", value: "2.4 Years" },
    { label: "Preventative Maintenance", value: "10,000 km Cycle" },
    { label: "Active Telematics", value: "100% GPS Monitored" },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-16 sm:space-y-20">
      
      {/* 1. Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <SectionHeader
            badge="Commercial Fleet Inventory"
            title="Modern, Certified Commercial"
            highlight="Transport Fleet"
            subtitle="Explore our comprehensive array of passenger coaches, executive VIP transit vans, heavy-duty prime movers, and specialized temperature-controlled vehicles."
          />
        </Reveal>

        {/* Fleet Metrics Strip */}
        <Reveal direction="up" delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12 shadow-sm">
            {fleetStats.map((item, idx) => (
              <div key={idx} className="text-center p-2">
                <span className="text-lg sm:text-2xl font-extrabold text-orange-600 font-heading block">
                  {item.value}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-600 font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Filter and Search Bar */}
        <Reveal direction="up" delay={0.15}>
          <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 space-y-3.5 shadow-sm">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              
              {/* Search Input without placeholder */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search Fleet Inventory"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-orange-500 transition"
                />
              </div>

              {/* Results Count & Quick Reset */}
              <div className="flex items-center justify-between md:justify-end gap-3 text-xs text-slate-600">
                <span>Showing <strong className="text-orange-600">{filteredVehicles.length}</strong> configurations</span>
                {(selectedCategory !== 'All' || searchQuery) && (
                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setSearchQuery('');
                    }}
                    className="text-orange-600 font-semibold hover:underline cursor-pointer"
                  >
                    Reset
                  </button>
                )}
              </div>

            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5 text-orange-500" />
                <span className="hidden xs:inline">Filter:</span>
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20 font-bold'
                      : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 2. Vehicles Grid with Stagger Animation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredVehicles.length > 0 ? (
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            {filteredVehicles.map((vehicle) => (
              <StaggerItem key={vehicle.id} direction="up">
                <VehicleCard
                  vehicle={vehicle}
                  onNavigateContact={onNavigateContact}
                  onSelectImage={onSelectImage}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 text-center space-y-4 max-w-md mx-auto shadow-sm">
            <Truck className="w-10 h-10 sm:w-12 sm:h-12 text-slate-400 mx-auto" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">No vehicles found</h3>
            <p className="text-xs text-slate-600">
              No vehicles matched your filter criteria. Try clearing the search or category selection.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="bg-orange-500 text-white px-4 py-2 rounded-xl text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 3. Fleet Maintenance & Standards Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xl text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/20 border border-white/30 text-white backdrop-blur-sm">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>OEM Certified Maintenance</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-heading">
                  Fleet Reliability Guaranteed by Strict Engineering Standards
                </h3>
                <p className="text-xs sm:text-sm text-orange-50 leading-relaxed max-w-2xl">
                  Every vehicle in our 450+ inventory is subjected to a 52-point mechanical inspection before deployment. We maintain dedicated in-house workshop bays with automated brake-testing dynamometers and computerized diagnostics.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <button
                  onClick={() => onNavigateContact && onNavigateContact()}
                  className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] cursor-pointer transition btn-luxury"
                >
                  <span className="text-orange-700 font-extrabold">Contact Our Fleet Team</span>
                  <ArrowRight className="w-4 h-4 text-orange-600" />
                </button>
              </div>

            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
};

export default FleetPage;
