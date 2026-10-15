import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { transition } from '../../lib/animation';
import { Sparkles, CheckCircle2, ShieldCheck, Terminal, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    phase: 'PHASE 01',
    title: 'Discovery & Carrier Strategy',
    description: 'We analyze your enterprise message throughput, audit existing DLT templates, and architect a customized pan-India carrier routing blueprint with direct Jio and Airtel interconnects.',
    deliverables: ['DLT Principal Entity & Header Audit', 'Throughput & TPS Volume Sizing', 'Tier-1 Route Cost & Latency Benchmark']
  },
  {
    phase: 'PHASE 02',
    title: 'Design & Omni-Channel Flows',
    description: 'Our telecom specialists configure interactive WhatsApp business flows, rich RCS catalog templates, and multi-level IVR dialog trees tailored to your customer conversion journeys.',
    deliverables: ['Meta WhatsApp Cloud API Template Approval', 'RCS Brand Verification Packaging', 'Dynamic OTP Pre-Scrubbing Rules']
  },
  {
    phase: 'PHASE 03',
    title: 'Engineering & Carrier Interconnect',
    description: 'We connect your CRM, core banking systems, and marketing automation stacks through high-throughput SMPP 3.4 pipes and low-latency REST APIs with automated failover.',
    deliverables: ['Mutual TLS & IP Whitelist Setup', 'CRM & Webhook Event Streaming Bind', 'Sub-20ms SLA Dispatch Verification']
  },
  {
    phase: 'PHASE 04',
    title: 'Pan-India Launch & 24x7 NOC Telemetry',
    description: 'We deploy across all 22 Indian telecom circles, continuously monitor network packet delivery from our Mumbai NOC, and provide guaranteed 99.99% carrier uptime.',
    deliverables: ['Live 22 Circles Network Telemetry', 'Automated Congestion Rerouting', 'Dedicated Mumbai NOC Account Support']
  }
];

export function JourneyDeliveryModel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section 
      id="delivery-model" 
      ref={containerRef}
      className="py-28 lg:py-36 relative overflow-hidden text-white"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Chapter Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#00F5FF]/30 text-[#00F5FF] text-xs font-mono font-bold tracking-wider uppercase mb-5 backdrop-blur-xl shadow-[0_0_20px_rgba(0,245,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#00F5FF]" />
            <span>Chapter 04 // Structured Delivery Model</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5">
            How We Build <br />
            <span className="text-gradient">The Future of Enterprise Communication</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            From initial DLT architecture to pan-India telecom deployment, our structured 4-phase model guarantees flawless delivery, zero downtime, and maximum ROI.
          </p>
        </div>

        {/* The Praised Vertical Interactive Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Base Track */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
          
          {/* Animated Scroll Progress Line with Electric Glow */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-[3px] bg-gradient-to-b from-[#00F5FF] via-[#3B82F6] to-[#8B5CF6] md:-translate-x-1/2 origin-top shadow-[0_0_25px_rgba(0,245,255,0.9)]"
            style={{ height: lineHeight }}
          />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={step.title} className="relative flex flex-col md:flex-row items-start mb-20 last:mb-0">
                
                {/* Timeline Center Node with Glowing Rings */}
                <div className="absolute left-4 md:left-1/2 w-9 h-9 rounded-full bg-[#030712] border-2 border-[#00F5FF] md:-translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,245,255,0.7)]">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#00F5FF] to-[#8B5CF6] animate-pulse" />
                </div>

                {/* Content Box */}
                <div className={`w-full pl-14 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-14 md:text-right' : 'md:ml-auto md:pl-14'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={transition(0.2)}
                    className="p-8 md:p-10 rounded-3xl bg-white/[0.025] backdrop-blur-2xl border border-white/10 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-[#00F5FF]/40 hover:shadow-[0_0_40px_rgba(0,245,255,0.2)] transition-all duration-300"
                  >
                    {/* Watermark Number */}
                    <div className={`text-white/[0.04] font-black text-6xl md:text-7xl absolute top-3 right-4 pointer-events-none select-none group-hover:text-[#00F5FF]/10 transition-colors duration-300 ${isEven ? 'md:left-4 md:right-auto' : ''}`}>
                      0{index + 1}
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-[#00F5FF] uppercase tracking-wider">
                        {step.phase}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 relative z-10">
                      {step.title}
                    </h3>

                    <p className="text-slate-300 leading-relaxed text-sm md:text-base font-normal relative z-10 mb-6">
                      {step.description}
                    </p>

                    {/* Phase Deliverables */}
                    <div className="pt-4 border-t border-white/10 space-y-2">
                      {step.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className={`flex items-center gap-2 text-xs font-mono text-slate-300 ${isEven ? 'md:justify-end' : ''}`}>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{del}</span>
                        </div>
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
