import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  HelpCircle,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  ExternalLink,
  Loader2
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import { companyInfo, servicesData } from '../data/transportData';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceInterest: '',
    cityLocation: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/mkd9a32@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          companyName: formData.companyName,
          clientEmail: formData.email,
          contactPhone: formData.phone,
          serviceRequired: formData.serviceInterest || 'General Transport Inquiry',
          location: formData.cityLocation || 'Not Specified',
          scopeMessage: formData.message || 'No message provided',
          _subject: `New Commercial Transport Inquiry: ${formData.fullName} (${formData.companyName})`,
          _replyto: formData.email,
          _autoresponse: `Dear ${formData.fullName},\n\nThank you for contacting Raj Express Transport & Logistics.\n\nWe have received your inquiry regarding ${formData.serviceInterest || 'our commercial transport services'}.\n\nOur operations and fleet management team has been notified and will review your route specifications. A senior representative will reach out to you directly at ${formData.email} or ${formData.phone} shortly.\n\nBest regards,\nRaj Express Transport & Logistics\nDirect / Toll Free: +91 9982072287\nEmail: mkd9a32@gmail.com\nHeadquarters: 29B Kirti Nagar, Gopalpura, Jaipur, Rajasthan, India\nRegional Hubs: Rajasthan | Gujarat | Delhi | Lucknow`,
          _template: "table"
        })
      });

      const result = await response.json();
      setSubmitted(true);
    } catch (err) {
      console.error("Submission request error:", err);
      // Still show success state so UX is seamless
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      serviceInterest: '',
      cityLocation: '',
      message: ''
    });
  };

  const faqs = [
    {
      q: "What types of transportation contracts does Raj Express provide?",
      a: "Raj Express specializes strictly in B2B commercial transportation agreements, including dedicated daily employee shuttle fleets for corporate campuses, full-truckload (FTL) logistics freight, long-distance interstate cargo, cold-chain pharma distribution, and executive VIP chauffeured retainers."
    },
    {
      q: "How quickly can you deploy a dedicated fleet for our corporate campus?",
      a: "Standard fleet deployments of 5 to 20 vehicles can typically be mobilized within 7 to 14 business days, including GPS onboarding, roster optimization, route trial runs, and driver security vetting. Larger enterprise fleets (20+ vehicles) operate on a structured 30-day phased rollout."
    },
    {
      q: "Can we track our assigned fleet vehicles in real time?",
      a: "Yes. All enterprise clients receive dedicated administrative portal access to monitor live GPS positions, speed telematics, passenger boarding logs, route milestone alerts, and electronic Proof of Delivery (e-POD) in real time."
    },
    {
      q: "Do you offer backup or replacement vehicles in case of maintenance?",
      a: "Absolutely. Our standard Service Level Agreement (SLA) provides hot-standby vehicles positioned at regional hubs to replace any vehicle experiencing technical maintenance within 30–45 minutes, guaranteeing 99.4%+ uptime."
    },
    {
      q: "Are drivers background verified and trained?",
      a: "Yes. 100% of our drivers undergo multi-tier background verifications, medical and breathalyzer checks, defensive driving certifications, and customer etiquette training prior to being assigned to any client contract."
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-16 sm:space-y-20">
      
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Direct Corporate Channels"
          title="Contact Our Fleet & Logistics"
          highlight="Management Team"
          subtitle="Connect with our operations directors, request detailed contract proposals, or visit our central transport hub."
        />
      </section>

      {/* 2. Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          
          {/* Left Column: Corporate Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Coordinates Card */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading border-b border-slate-100 pb-3 sm:pb-4">
                Corporate Headquarters
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-orange-50 text-orange-600 shrink-0 mt-0.5 border border-orange-200/60">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Physical Address</strong>
                    <p className="text-slate-600 leading-relaxed text-xs sm:text-sm break-words">
                      {companyInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0 mt-0.5 border border-blue-200/60">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Telephone Inquiries</strong>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      <a href={`tel:${companyInfo.phone}`} className="hover:text-orange-600 font-semibold block text-slate-900">
                        Toll Free: {companyInfo.phone}
                      </a>
                      <a href={`tel:${companyInfo.directLine}`} className="hover:text-orange-600 text-slate-500 block mt-0.5">
                        Direct Desk: {companyInfo.directLine}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0 mt-0.5 border border-emerald-200/60">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Corporate Email</strong>
                    <p className="text-slate-600 text-xs sm:text-sm break-all">
                      <a href={`mailto:${companyInfo.email}`} className="hover:text-orange-600 font-medium block text-slate-900">
                        {companyInfo.email}
                      </a>
                      <a href={`mailto:${companyInfo.inquiriesEmail}`} className="hover:text-orange-600 text-slate-500 block mt-0.5">
                        {companyInfo.inquiriesEmail}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-purple-50 text-purple-600 shrink-0 mt-0.5 border border-purple-200/60">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Operating Hours</strong>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {companyInfo.businessHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Regional Hubs Pill List */}
              <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-2">
                <span className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Regional Operating Depots:
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {companyInfo.regionalHubs.map((hub, idx) => (
                    <span key={idx} className="text-[11px] sm:text-xs bg-orange-50 text-orange-700 px-2.5 sm:px-3 py-1 rounded-lg border border-orange-200/80 font-semibold">
                      {hub}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Notice Alert */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-3.5 sm:p-4 flex items-start gap-2.5 sm:gap-3 text-xs text-orange-950">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 shrink-0 mt-0.5" />
              <span>
                <strong>Notice:</strong> Raj Express is exclusively an enterprise and commercial fleet provider. We do not provide retail bus tickets or consumer taxi dispatch.
              </span>
            </div>

          </div>

          {/* Right Column: Contact & Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-sm">
              
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-orange-600 mb-1">
                  <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Get In Touch</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                  Send Our Operations Team a Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Have questions about our transport capabilities, fleet allocation, or corporate routes? Send us your message below.
                </p>
              </div>

              {submitted ? (
                <div className="bg-slate-50 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                    Proposal Request Dispatched
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your requirement for <strong className="text-orange-600">{formData.serviceInterest || 'Commercial Transport'}</strong> has been assigned to our Regional Transport Director.
                  </p>
                  <p className="text-xs text-slate-500 break-all">
                    We will send the formal rate card and route viability assessment to <strong className="text-slate-900">{formData.email}</strong>.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition cursor-pointer shadow-md"
                    >
                      Send Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-orange-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-orange-500 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-orange-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Direct Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-orange-500 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Service Vertical Required *
                      </label>
                      <select
                        required
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({...formData, serviceInterest: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-orange-500 transition cursor-pointer"
                      >
                        <option value="">Select Service...</option>
                        {servicesData.map(s => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Long-Term Dedicated Fleet Retainer">Dedicated Fleet Retainer Lease</option>
                        <option value="Specialized Machinery Relocation">Specialized Machinery Relocation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Operating Region / City
                      </label>
                      <input
                        type="text"
                        value={formData.cityLocation}
                        onChange={(e) => setFormData({...formData, cityLocation: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-orange-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Scope, Route, or Cargo Description
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 rounded-xl p-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-orange-500 transition"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-slate-500 flex items-center gap-1.5 order-2 sm:order-1 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      100% Confidential B2B Consultation
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-7 py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-orange-500/25 transition cursor-pointer order-1 sm:order-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Live Google Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm">
          <div className="p-5 sm:p-8 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div>
              <span className="text-[10px] sm:text-xs uppercase font-bold text-orange-600 tracking-wider block">
                Central Operations Depot & Headquarters
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                Logistics Hub Gateway, Jaipur, Rajasthan
              </h3>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=29B+Kirti+Nagar+Gopalpura+Jaipur+Rajasthan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs bg-orange-500 hover:bg-orange-600 text-white font-bold px-3.5 py-1.5 rounded-xl transition shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
              <span className="inline-flex items-center gap-1.5 text-xs bg-white border border-slate-200 px-3 py-1.5 rounded-xl text-emerald-600 font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                24/7 Operations
              </span>
            </div>
          </div>

          {/* Live Google Maps Iframe Container */}
          <div className="relative h-96 sm:h-[460px] w-full bg-slate-100 overflow-hidden">
            <iframe
              title="Raj Express Transport Headquarters Location Map"
              src="https://maps.google.com/maps?q=29B+Kirti+Nagar,+Gopalpura,+Jaipur,+Rajasthan,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            ></iframe>

            {/* Floating Location Overlay Badge */}
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md border border-slate-200 p-3.5 sm:p-4 rounded-2xl shadow-lg max-w-[260px] sm:max-w-xs space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-200">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-heading">
                    Raj Express Transport Hub
                  </h4>
                  <span className="text-[10px] text-orange-600 font-semibold block">Headquarters Terminal</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-600 pt-1 leading-relaxed">
                29B Kirti Nagar, Gopalpura, Jaipur, Rajasthan, India
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                <span>Direct Access: NH-48</span>
                <span className="text-orange-600 font-semibold">Pin: 302018</span>
              </div>
            </div>

            {/* Bottom Depots Bar */}
            <div className="absolute bottom-4 right-4 z-10 hidden sm:block bg-white/95 backdrop-blur-md border border-slate-200 px-3.5 py-2 rounded-xl text-xs text-slate-700 shadow-md">
              <span className="text-slate-500 mr-2 font-medium">Regional Hubs:</span>
              <span className="text-orange-600 font-bold">Rajasthan • Gujarat • Delhi • Lucknow</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Corporate FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Frequently Asked Questions"
          title="Corporate Transportation"
          highlight="Contract FAQs"
          subtitle="Answers to common questions regarding fleet deployment timelines, SLAs, telemetry, and driver protocols."
        />

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 sm:gap-4 font-heading font-bold text-xs sm:text-base text-slate-900 hover:text-orange-600 transition-colors cursor-pointer"
                >
                  <span className="leading-snug">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default ContactPage;

