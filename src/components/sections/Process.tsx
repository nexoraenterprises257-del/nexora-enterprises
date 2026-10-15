import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { transition } from '../../lib/animation';
import { Sparkles, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    num: '01',
    phase: 'PHASE 01 // ARCHITECTURE',
    title: 'Discovery & Strategic Architecture',
    description: 'Traffic analysis, DLT entity setup, and low-latency carrier route architecture.',
    highlights: ['Route Analysis', 'DLT Entity Setup', 'SLA Definition']
  },
  {
    num: '02',
    phase: 'PHASE 02 // COMPLIANCE & PROTOTYPE',
    title: 'Design & Regulatory Scrubbing',
    description: 'Pre-approved DLT templates, verified WhatsApp flows, and interactive RCS cards.',
    highlights: ['Pre-Approved DLT', 'WhatsApp Flows', 'RCS Carousels']
  },
  {
    num: '03',
    phase: 'PHASE 03 // INTEGRATION',
    title: 'Engineering & Carrier Binds',
    description: 'High-throughput SMPP 3.4 sockets and RESTful API integration with webhooks.',
    highlights: ['SMPP 3.4 Binds', 'RESTful Endpoints', 'Sandbox Testing']
  },
  {
    num: '04',
    phase: 'PHASE 04 // PAN-INDIA SCALE',
    title: 'Launch & 24/7 Mumbai NOC',
    description: 'Pan-India deployment across 22 circles backed by 24x7 Mumbai NOC monitoring.',
    highlights: ['22 Circle Routing', 'Mumbai NOC 24/7', '99.99% SLA']
  }
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="py-24 relative bg-white overflow-hidden" ref={containerRef}>
      {/* Background soft ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-100/50 via-purple-100/40 to-cyan-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="badge-pill mb-4 inline-flex">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Structured Delivery Model</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A0F1C] mb-3">
            How We <span className="text-logo-gradient">Build The Future</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Structured path from architecture to pan-India telecom scale.
          </p>
        </div>

        {/* Interactive Vertical Timeline (Praised by user) */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Base Track */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 md:-translate-x-1/2 rounded-full" />
          
          {/* Animated Scroll Progress Line with Logo Gradient */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-1 bg-gradient-to-b from-[#00D2FF] via-[#2563EB] to-[#9333EA] md:-translate-x-1/2 origin-top rounded-full shadow-[0_0_12px_rgba(37,99,235,0.6)]"
            style={{ height: lineHeight }}
          />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={step.title} className="relative flex flex-col md:flex-row items-start mb-16 last:mb-0">
                
                {/* Timeline Center Node */}
                <div className="absolute left-4 md:left-1/2 w-9 h-9 rounded-full bg-white border-2 border-[#2563EB] md:-translate-x-1/2 flex items-center justify-center z-20 shadow-md">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#00D2FF] to-[#9333EA]" />
                </div>

                {/* Content Box */}
                <div className={`w-full pl-14 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-14 md:text-right' : 'md:ml-auto md:pl-14'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={transition(0.2)}
                    className="fc-card p-6 md:p-8 relative overflow-hidden group shadow-sm hover:shadow-xl"
                  >
                    {/* Subtle Watermark Number */}
                    <div className={`text-slate-100 font-black text-6xl absolute -top-2 -right-1 pointer-events-none select-none group-hover:text-blue-50 transition-colors duration-300 ${isEven ? 'md:-left-1 md:right-auto' : ''}`}>
                      {step.num}
                    </div>

                    <div className="text-[10px] font-mono tracking-wider text-[#2563EB] font-bold uppercase mb-1.5">
                      {step.phase}
                    </div>

                    <h3 className="text-lg md:text-xl font-black text-[#0A0F1C] mb-2 relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm font-normal relative z-10 mb-4">
                      {step.description}
                    </p>

                    <div className={`flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                      {step.highlights.map((h) => (
                        <span key={h} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-[11px] text-slate-700 font-medium">
                          <CheckCircle2 className="w-3 h-3 text-[#2563EB]" />
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
