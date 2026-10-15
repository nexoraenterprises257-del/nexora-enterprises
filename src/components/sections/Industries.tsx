import { ShoppingCart, Landmark, Activity, GraduationCap, Building2, Truck, Sparkles } from 'lucide-react';

const industries = [
  { 
    icon: ShoppingCart, 
    name: 'Retail & E-Commerce', 
    tag: 'D2C & Retail',
    desc: 'Automated cart recovery, flash deal alerts & instant 142ms delivery OTPs.',
    accentColor: '#10B981',
    gradientLine: 'from-emerald-400 via-teal-400 to-emerald-500',
    glowColor: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
    tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-200/70',
    dotColor: 'bg-emerald-500',
    hoverBorder: 'hover:border-emerald-300/80',
    chips: ['Cart Recovery', 'Flash OTPs', 'WhatsApp Catalog']
  },
  { 
    icon: Landmark, 
    name: 'Banking & BFSI', 
    tag: 'FinTech & Banks',
    desc: 'RBI-compliant 2FA verification, instant fraud alerts & secure transaction updates.',
    accentColor: '#2563EB',
    gradientLine: 'from-blue-500 via-indigo-500 to-blue-600',
    glowColor: 'from-blue-500/10 via-indigo-500/5 to-transparent',
    iconBg: 'bg-blue-50 text-blue-600 border-blue-200/80',
    tagBg: 'bg-blue-50 text-blue-700 border-blue-200/70',
    dotColor: 'bg-blue-500',
    hoverBorder: 'hover:border-blue-300/80',
    chips: ['RBI-Ready 2FA', 'Fraud Shield', '99.999% SLA']
  },
  { 
    icon: Activity, 
    name: 'Healthcare & Pharma', 
    tag: 'HealthTech',
    desc: 'Automated diagnostic lab reports, OPD booking confirmations & medicine reminders.',
    accentColor: '#0284C7',
    gradientLine: 'from-sky-400 via-cyan-400 to-blue-500',
    glowColor: 'from-sky-500/10 via-cyan-500/5 to-transparent',
    iconBg: 'bg-sky-50 text-sky-600 border-sky-200/80',
    tagBg: 'bg-sky-50 text-sky-700 border-sky-200/70',
    dotColor: 'bg-sky-500',
    hoverBorder: 'hover:border-sky-300/80',
    chips: ['Lab Reports PDF', 'OPD Booking', 'Dosage Alerts']
  },
  { 
    icon: GraduationCap, 
    name: 'Education & EdTech', 
    tag: 'Institutes & EdTech',
    desc: 'Admissions counseling, exam updates, fee reminders & student attendance alerts.',
    accentColor: '#7C3AED',
    gradientLine: 'from-purple-500 via-violet-500 to-indigo-500',
    glowColor: 'from-purple-500/10 via-violet-500/5 to-transparent',
    iconBg: 'bg-purple-50 text-purple-600 border-purple-200/80',
    tagBg: 'bg-purple-50 text-purple-700 border-purple-200/70',
    dotColor: 'bg-purple-500',
    hoverBorder: 'hover:border-purple-300/80',
    chips: ['Admissions Desk', 'Exam Schedule', 'Attendance Alerts']
  },
  { 
    icon: Building2, 
    name: 'Hospitality & Travel', 
    tag: 'Airlines & Hotels',
    desc: 'Digital boarding passes, hotel check-in QR codes, booking vouchers & NPS feedback.',
    accentColor: '#C026D3',
    gradientLine: 'from-fuchsia-500 via-pink-500 to-rose-500',
    glowColor: 'from-fuchsia-500/10 via-pink-500/5 to-transparent',
    iconBg: 'bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200/80',
    tagBg: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200/70',
    dotColor: 'bg-fuchsia-500',
    hoverBorder: 'hover:border-fuchsia-300/80',
    chips: ['Digital Boarding', 'QR Check-In', 'NPS Feedback']
  },
  { 
    icon: Truck, 
    name: 'Logistics & Supply', 
    tag: 'Hyperlocal & Freight',
    desc: 'Real-time driver dispatch, live GPS tracking links & one-time delivery security PINs.',
    accentColor: '#4F46E5',
    gradientLine: 'from-indigo-500 via-blue-500 to-indigo-600',
    glowColor: 'from-indigo-500/10 via-blue-500/5 to-transparent',
    iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-200/80',
    tagBg: 'bg-indigo-50 text-indigo-700 border-indigo-200/70',
    dotColor: 'bg-indigo-500',
    hoverBorder: 'hover:border-indigo-300/80',
    chips: ['Live Driver GPS', 'Instant Dispatch', 'Delivery PIN']
  }
];

export function Industries() {
  return (
    <section id="industries" className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-80 bg-gradient-to-r from-blue-100/40 via-purple-100/30 to-cyan-100/30 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Modern Enterprise Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <div className="badge-pill mb-3 inline-flex py-1 px-3 text-[11px] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Target Sectors & Verticals</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-black tracking-tight text-[#0A0F1C] mb-2.5 leading-tight">
            Industries We <span className="text-logo-gradient">Power Across India</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Telecom-grade communication infrastructure engineered for India's high-growth sectors.
          </p>
        </div>

        {/* 6 Informative Enterprise Cards (3x2 Grid, Non-Clickable Pure Showcase) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.name}
                className={`group relative p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_-10px_rgba(37,99,235,0.12)] ${ind.hoverBorder} hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default select-none`}
              >
                {/* Top Subtle Animated Accent Line on Hover */}
                <div className={`absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r ${ind.gradientLine} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Subtle Ambient Glow in Corner on Hover */}
                <div className={`absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-gradient-to-br ${ind.glowColor} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div>
                  {/* Top Bar: Icon + Live Status Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border shadow-2xs group-hover:scale-105 transition-transform duration-300 ${ind.iconBg}`}>
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>

                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border shadow-2xs ${ind.tagBg}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${ind.dotColor} animate-pulse`} />
                      <span>{ind.tag}</span>
                    </div>
                  </div>

                  {/* Industry Title */}
                  <h3 className="font-bold text-slate-900 group-hover:text-[#2563EB] text-[15px] leading-snug mb-2 transition-colors">
                    {ind.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed font-normal mb-4">
                    {ind.desc}
                  </p>
                </div>

                {/* Bottom Enterprise Capability Micro-Chips */}
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                  {ind.chips.map((chip, idx) => (
                    <span 
                      key={idx}
                      className="text-[10px] font-semibold text-slate-600 bg-slate-50 group-hover:bg-slate-100/90 border border-slate-200/70 px-2 py-0.5 rounded-md transition-colors"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
