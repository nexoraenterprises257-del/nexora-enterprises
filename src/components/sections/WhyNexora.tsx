import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { transition } from '../../lib/animation';
import { Zap, ShieldCheck, Plug, Headset, CheckCircle2, Sparkles } from 'lucide-react';

const pillars = [
  {
    num: '01',
    pillar: 'PILLAR 01 // DIRECT TELCO INTERCONNECT',
    title: 'High Delivery Routes & Direct Carrier Binds',
    description: 'Direct SMPP binds with Jio, Airtel, Vi, and BSNL ensure sub-400ms OTP delivery with dynamic load balancing across 22 telecom circles.',
    highlights: ['Direct SMPP 3.4 Binds', '<400ms Delivery SLA', 'Dynamic Load Balancing', 'Zero-Queue Failover'],
    icon: Zap,
    color: 'text-[#0284C7]',
    bg: 'bg-sky-50 border-sky-100 text-[#0284C7]'
  },
  {
    num: '02',
    pillar: 'PILLAR 02 // 100% REGULATORY ASSURANCE',
    title: 'TRAI DLT & DPDP Security Compliance',
    description: 'Automated template scrubbing, verified sender IDs, and 100% Indian data localization in Mumbai complying with TRAI and DPDP guidelines.',
    highlights: ['Automated DLT Scrubbing', 'Zero Rejection Optimization', 'DPDP Data Localization', 'TRAI DLT Verified'],
    icon: ShieldCheck,
    color: 'text-[#2563EB]',
    bg: 'bg-blue-50 border-blue-100 text-[#2563EB]'
  },
  {
    num: '03',
    pillar: 'PILLAR 03 // CARRIER-GRADE DEVELOPER APIS',
    title: 'Easy API & High-Concurrency SMPP Sockets',
    description: 'Developer-ready REST APIs, webhooks, and high-concurrency SMPP 3.4 sockets with SDKs for Python, Node.js, Java, and PHP.',
    highlights: ['RESTful APIs & Webhooks', 'Python, Node & Java SDKs', 'High Concurrent Sessions', 'Sub-10ms Binds'],
    icon: Plug,
    color: 'text-[#7C3AED]',
    bg: 'bg-purple-50 border-purple-100 text-[#7C3AED]'
  },
  {
    num: '04',
    pillar: 'PILLAR 04 // 24x7 MUMBAI OPERATIONS CENTER',
    title: '24x7 Dedicated NOC & Telecom Escalation',
    description: 'Local Mumbai NOC telecom engineers providing 24/7 proactive route monitoring with guaranteed 15-minute priority SLA escalation.',
    highlights: ['Local Mumbai NOC Team', '15-Minute Priority SLA', 'Dedicated Account Manager', '99.99% Uptime SLA'],
    icon: Headset,
    color: 'text-[#C026D3]',
    bg: 'bg-fuchsia-50 border-fuchsia-100 text-[#C026D3]'
  }
];

export function WhyNexora() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="why-us" className="py-16 relative bg-white overflow-hidden" ref={containerRef}>
      {/* Background soft ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-r from-blue-100/50 via-purple-100/40 to-cyan-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <div className="badge-pill mb-3 inline-flex">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Enterprise Infrastructure • Pan-India</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A0F1C] mb-2">
            Why Businesses Trust <span className="text-logo-gradient">Nexora</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Intelligent communication infrastructure engineered for enterprise reliability and pan-India scale.
          </p>
        </div>

        {/* Interactive Vertical Timeline Architecture */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Base Track */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 rounded-full" />
          
          {/* Animated Scroll Progress Line with Logo Gradient */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-1 bg-gradient-to-b from-[#00D2FF] via-[#2563EB] to-[#9333EA] -translate-x-1/2 origin-top rounded-full shadow-[0_0_12px_rgba(37,99,235,0.6)]"
            style={{ height: lineHeight }}
          />

          {pillars.map((pillar, index) => {
            const isEven = index % 2 === 0;
            const Icon = pillar.icon;

            return (
              <div key={pillar.title} className="relative flex flex-col md:flex-row items-start mb-8 last:mb-0">
                
                {/* Timeline Center Node */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 md:w-9 md:h-9 rounded-full bg-white border-2 border-[#2563EB] -translate-x-1/2 flex items-center justify-center z-20 shadow-md">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gradient-to-tr from-[#00D2FF] to-[#9333EA]" />
                </div>

                {/* Content Box */}
                <div className={`w-full pl-10 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={transition(0.2)}
                    className="fc-card p-4 sm:p-5 md:p-6 relative overflow-hidden group shadow-sm hover:shadow-xl"
                  >
                    {/* Subtle Watermark Number */}
                    <div className={`text-slate-100 font-black text-5xl md:text-6xl absolute -top-2 -right-1 pointer-events-none select-none group-hover:text-blue-50 transition-colors duration-300 ${isEven ? 'md:-left-1 md:right-auto' : ''}`}>
                      {pillar.num}
                    </div>

                    {/* Pillar Badge & Icon */}
                    <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center border ${pillar.bg}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-mono tracking-wider text-[#2563EB] font-bold uppercase">
                        {pillar.pillar}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg md:text-xl font-black text-[#0A0F1C] mb-2 relative z-10 group-hover:text-[#2563EB] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed text-xs sm:text-sm font-normal relative z-10 mb-4">
                      {pillar.description}
                    </p>

                    <div className={`flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                      {pillar.highlights.map((h) => (
                        <span key={h} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-[10.5px] sm:text-[11px] text-slate-700 font-medium">
                          <CheckCircle2 className="w-3 h-3 text-[#2563EB] shrink-0" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
