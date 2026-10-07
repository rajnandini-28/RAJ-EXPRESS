import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Users, 
  Clock, 
  CheckCircle2, 
  Truck, 
  Activity, 
  FileCheck, 
  Compass, 
  Layers, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import { companyInfo, companyValues, statistics } from '../data/transportData';
import { Reveal, StaggerContainer, StaggerItem } from '../components/common/Reveal';

const AboutPage = ({ setActivePage, onNavigateContact, onSelectImage }) => {
  const leadershipTeam = [
    {
      name: "Rajeshwar Singh Bhati",
      role: "Managing Director & Founder",
      experience: "24+ Years in Indian Multi-Modal Freight Logistics",
      bio: "Founded Raj Express in 2008 in Jaipur with a vision of technology-driven, zero-tolerance road safety across North & Western Indian industrial transit corridors.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&crop=top&w=700&q=80"
    },
    {
      name: "Pooja Sharma",
      role: "VP of Fleet Operations & Telematics",
      experience: "16+ Years in Enterprise Commuter Transit & AIS-140 Integration",
      bio: "Oversees 450+ verified fleet units, 24/7 Central Transport Control Room (TCR), and automated roster dispatch algorithms for tech parks.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=top&w=700&q=80"
    },
    {
      name: "Capt. Vikram Rathore",
      role: "Head of Safety, RTO Compliance & Driver Academy",
      experience: "19+ Years Highway Safety & Commercial Transport Compliance",
      bio: "Directs Raj Express's proprietary Driver Training Academy, quarterly defensive driving accreditations, and zero-accident highway protocols.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=top&w=700&q=80"
    }
  ];

  const safetyProtocols = [
    {
      title: "AIS-140 Telematics & ADAS Cameras",
      desc: "Every vehicle is equipped with dual-lens forward and driver-facing fatigue monitoring cameras, integrated with automated speed governors."
    },
    {
      title: "Breathalyzer & Medical Screening",
      desc: "Mandatory biometric and digital alcohol screening before every single departure across all regional depot terminals in Jaipur, Delhi, and Gujarat."
    },
    {
      title: "Preventative OEM Maintenance",
      desc: "Computerized diagnostic checkups every 10,000 km using certified OEM parts to prevent highway breakdowns."
    },
    {
      title: "Dual-Driver Relay Highway Networks",
      desc: "Interstate long-haul routes deploy two licensed commercial drivers on continuous rotation to strictly prevent fatigue."
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-16 sm:space-y-20">
      
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <SectionHeader
            badge="Company Overview"
            title="About Raj Express"
            highlight="Transport & Logistics"
            subtitle="Pioneering precision fleet mobility, safety-first corporate employee transit, and heavy industrial freight infrastructure since 2008."
          />
        </Reveal>

        {/* Hero Visual Banner - Click to view image */}
        <Reveal direction="up" delay={0.15}>
          <div 
            onClick={() => onSelectImage && onSelectImage({
              image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1400&q=80",
              title: "Raj Express Transport Fleet & Logistics Infrastructure",
              category: "Enterprise Fleet",
              caption: "18 Years of Operational Excellence • 450+ Active Commercial Vehicles • ISO 9001:2015 Certified"
            })}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-60 sm:h-80 lg:h-96 bg-slate-100 border border-slate-200 shadow-md cursor-zoom-in group"
            title="Click to view full image"
          >
            <img 
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1400&q=80" 
              alt="Raj Express Transport Fleet"
              className="w-full h-full object-cover img-filter-hover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <p className="text-[10px] sm:text-xs uppercase font-bold text-amber-300 tracking-wider">Enterprise Transportation Partner</p>
                <h3 className="text-lg sm:text-2xl font-bold text-white font-heading">18 Years of Operational Excellence</h3>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="glassmorphism text-slate-900 border border-white px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl text-xs font-semibold">
                  450+ Vehicles
                </span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl text-xs font-bold shadow">
                  ISO 9001:2015
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 2. Company Story & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Story from Left */}
          <Reveal direction="left" delay={0.1}>
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                <Compass className="w-3.5 h-3.5 text-blue-600" />
                <span>Our Story & Mission</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
                Built on Unyielding Precision, Safety, and Commercial Scale
              </h2>

              <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
                Raj Express was established in 2008 in response to a glaring gap in commercial transportation: the lack of predictable, safety-certified, and technology-transparent fleet services for corporate clients.
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                What started with a fleet of 15 commercial box trucks has transformed into a premier multimodal transportation enterprise managing over 450+ modern vehicles nationwide.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
                <div 
                  onClick={() => setActivePage ? setActivePage('services') : onNavigateContact && onNavigateContact()}
                  className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md cursor-pointer transition-all active:scale-95 group/stat"
                  title="Tap to explore Enterprise Services"
                >
                  <span className="text-xl sm:text-2xl font-extrabold text-blue-600 font-heading block group-hover/stat:scale-105 transition-transform">320+</span>
                  <span className="text-[11px] sm:text-xs text-slate-700 font-semibold flex items-center justify-between mt-0.5">
                    <span>Enterprise Retainers</span>
                    <ArrowRight className="w-3 h-3 text-blue-500 opacity-0 group-hover/stat:opacity-100 transition-opacity" />
                  </span>
                </div>
                <div 
                  onClick={() => setActivePage ? setActivePage('projects') : onNavigateContact && onNavigateContact()}
                  className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 shadow-sm hover:border-emerald-400 hover:shadow-md cursor-pointer transition-all active:scale-95 group/stat"
                  title="Tap to view Delivered Projects"
                >
                  <span className="text-xl sm:text-2xl font-extrabold text-emerald-600 font-heading block group-hover/stat:scale-105 transition-transform">99.4%</span>
                  <span className="text-[11px] sm:text-xs text-slate-700 font-semibold flex items-center justify-between mt-0.5">
                    <span>On-Time Delivery SLA</span>
                    <ArrowRight className="w-3 h-3 text-emerald-500 opacity-0 group-hover/stat:opacity-100 transition-opacity" />
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Mission & Vision Cards from Right */}
          <Reveal direction="right" delay={0.2}>
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 relative overflow-hidden group hover:border-blue-300 transition-colors shadow-sm">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 sm:mb-4">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mb-1.5 sm:mb-2">Our Mission</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To deliver the most dependable, safe, and technologically transparent commercial transportation solutions, allowing enterprises to focus on their core business while we manage their mobility infrastructure.
                </p>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 relative overflow-hidden group hover:border-blue-300 transition-colors shadow-sm">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3 sm:mb-4">
                  <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mb-1.5 sm:mb-2">Our Vision</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To lead the commercial transport industry's transition into automated telemetry, sustainable clean fuels/EV fleets, and zero-incident workplace transit standards.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Company Values / Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <SectionHeader
            badge="Guiding Principles"
            title="Our Core Institutional"
            highlight="Values"
            subtitle="The foundational philosophies that guide our chauffeurs, mechanics, dispatchers, and corporate leadership every single day."
          />
        </Reveal>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {companyValues.map((val, idx) => (
            <StaggerItem key={idx} direction="up">
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-blue-300 transition-all shadow-sm">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 font-extrabold text-sm flex items-center justify-center mb-3 sm:mb-4">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 font-heading mb-1.5">{val.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 4. Safety & Compliance Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-8 lg:p-12 relative shadow-sm">
            <SectionHeader
              badge="Zero Compromise"
              title="Industry-Leading"
              highlight="Safety & Compliance"
              subtitle="Safety is not an afterthought at Raj Express; it is embedded into every vehicle ignition, driver qualification, and central dispatch process."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {safetyProtocols.map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 flex items-start gap-3.5 sm:gap-4">
                  <div className="p-2 rounded-xl bg-blue-100 text-blue-600 shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 font-heading mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs text-slate-600">
              <span className="flex items-center gap-1.5 sm:gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                AIS-140 GPS & Telematics Certified
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                MORTH & State RTO Regulated
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                All India National Permit (NP/AITP)
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                ISO 9001:2015 Re-Certified
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 5. Executive Leadership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <SectionHeader
            badge="Experienced Leadership"
            title="Meet Our Operations"
            highlight="Executives"
            subtitle="Decades of combined leadership in commercial logistics, passenger safety, and enterprise fleet administration."
          />
        </Reveal>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {leadershipTeam.map((exec, idx) => (
            <StaggerItem key={idx} direction="up">
              <div className="card-luxury rounded-2xl overflow-hidden group hover:border-blue-300 transition-all shadow-sm">
                <div 
                  onClick={() => onSelectImage && onSelectImage({
                    image: exec.image,
                    title: exec.name,
                    category: exec.role,
                    caption: `${exec.experience} • ${exec.bio}`
                  })}
                  className="h-72 sm:h-80 overflow-hidden bg-slate-100 cursor-zoom-in relative"
                  title="Click to view photo"
                >
                  <img 
                    src={exec.image} 
                    alt={exec.name} 
                    className="w-full h-full object-cover object-top img-filter-hover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 sm:p-6 space-y-2">
                  <p className="text-[11px] sm:text-xs text-blue-600 font-semibold uppercase">{exec.role}</p>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">{exec.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{exec.experience}</p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {exec.bio}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 6. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-center space-y-4 text-white shadow-xl border border-blue-500/30">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-heading">
              Looking for a Proven Commercial Fleet Partner?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
              Our team is available to review your corporate routing schedules, shift transport specs, and freight requirements.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigateContact ? onNavigateContact() : setActivePage('contact')}
                className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer shadow-lg hover:scale-[1.02] transition btn-luxury"
              >
                <span className="text-slate-950 font-extrabold">Contact Our Leadership Team</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
};

export default AboutPage;
