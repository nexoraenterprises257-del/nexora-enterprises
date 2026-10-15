import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { transition } from '../../lib/animation';
import { Radio, ShieldCheck, Zap, Server, Activity, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const telecomCircles = [
  { id: 'bom', name: 'Mumbai (Primary NOC HQ)', ping: '1.4ms', routes: 'Jio • Airtel • Vi • BSNL', load: '99.99%', status: 'Operational' },
  { id: 'del', name: 'Delhi NCR (North Hub)', ping: '7.2ms', routes: 'Airtel Direct • Jio 5G', load: '99.98%', status: 'Operational' },
  { id: 'blr', name: 'Bengaluru (South Tech)', ping: '4.8ms', routes: 'Jio • Vi Enterprise', load: '99.99%', status: 'Operational' },
  { id: 'hyd', name: 'Hyderabad (Cyber Hub)', ping: '5.6ms', routes: 'Airtel • Jio Direct', load: '99.99%', status: 'Operational' },
  { id: 'kol', name: 'Kolkata (East Node)', ping: '9.1ms', routes: 'Airtel • BSNL Core', load: '99.97%', status: 'Operational' },
  { id: 'che', name: 'Chennai (Coastal Fiber)', ping: '6.2ms', routes: 'Jio • Airtel Submarine', load: '99.99%', status: 'Operational' },
  { id: 'pun', name: 'Pune (Maharashtra Circle)', ping: '2.1ms', routes: 'Vi • Jio Direct', load: '99.99%', status: 'Operational' },
  { id: 'ahm', name: 'Ahmedabad (Gujarat West)', ping: '3.9ms', routes: 'Jio • Airtel Enterprise', load: '99.98%', status: 'Operational' }
];

const operators = [
  { name: 'Reliance Jio 5G', badge: 'Tier-1 Interconnect', desc: 'Direct SIP & SMPP bindings to Jio core IMS network for <300ms OTP clearance.', color: 'text-[#00F5FF]', border: 'hover:border-[#00F5FF]/50' },
  { name: 'Bharti Airtel', badge: 'National Fiber Mesh', desc: 'Direct connection to Airtel enterprise CPaaS highway across all 22 circles.', color: 'text-rose-400', border: 'hover:border-rose-400/50' },
  { name: 'Vodafone Idea (Vi)', badge: 'Enterprise Trunk', desc: 'Dedicated SMPP 3.4 channels with automated load distribution.', color: 'text-amber-400', border: 'hover:border-amber-400/50' },
  { name: 'BSNL National', badge: 'Universal Reach', desc: 'Deep penetration into rural, tier-3, and government telecom circles.', color: 'text-blue-400', border: 'hover:border-blue-400/50' }
];

export function JourneyCarrierMesh() {
  const [selectedCircle, setSelectedCircle] = useState(telecomCircles[0]);

  // Automated Zero-Click Cycling through circles
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedCircle((prev) => {
        const nextIdx = (telecomCircles.findIndex((c) => c.id === prev.id) + 1) % telecomCircles.length;
        return telecomCircles[nextIdx];
      });
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="carrier-mesh" 
      className="py-28 lg:py-36 relative overflow-hidden text-white"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Chapter Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#00F5FF]/30 text-[#00F5FF] text-xs font-mono font-bold tracking-wider uppercase mb-5 backdrop-blur-xl">
            <Radio className="w-3.5 h-3.5 text-[#00F5FF] animate-pulse" />
            <span>Chapter 02 // National Carrier Backbone</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5">
            Pan-India Carrier Mesh across <br />
            <span className="text-gradient">All 22 Telecom Circles</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Nexora bypasses third-party aggregators through direct SMPP interconnects with India's Tier-1 operators, ensuring bank-grade speed and guaranteed deliverability.
          </p>
        </div>

        {/* 4 Operator Interconnect Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {operators.map((op, i) => (
            <motion.div
              key={op.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={transition(i * 0.1)}
              className={`p-7 rounded-3xl bg-white/[0.025] backdrop-blur-2xl border border-white/10 ${op.border} transition-all duration-300 shadow-xl group`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-slate-400">ROUTE 0{i + 1}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 ${op.color}`}>
                  {op.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00F5FF] transition-colors">{op.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">{op.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Telecom Circle Telemetry Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition(0.2)}
          className="rounded-[2.5rem] bg-gradient-to-b from-white/[0.04] to-white/[0.015] border border-white/10 backdrop-blur-2xl p-8 md:p-12 shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
            
            {/* Left: Circle Selector */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#00F5FF] block font-bold">Interactive Telemetry Hub</span>
                  <h3 className="text-2xl font-bold text-white">Select Circle Node to Audit</h3>
                </div>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> All 22 Live
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {telecomCircles.map((circle) => {
                  const isSelected = selectedCircle.id === circle.id;
                  return (
                    <button
                      key={circle.id}
                      onClick={() => setSelectedCircle(circle)}
                      className={`text-left p-3.5 rounded-2xl text-xs font-mono transition-all cursor-pointer flex items-center justify-between ${
                        isSelected 
                          ? 'bg-[#00F5FF]/15 border border-[#00F5FF]/40 text-[#00F5FF] font-bold shadow-[0_0_15px_rgba(0,245,255,0.2)]'
                          : 'bg-white/[0.03] border border-white/10 text-slate-300 hover:text-white hover:bg-white/[0.06]'
                      }`}
                    >
                      <span className="truncate pr-2">{circle.name.split('(')[0]}</span>
                      <span className="text-[10px] text-slate-400 shrink-0">{circle.ping}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Live Circle Specs Card */}
            <div className="w-full lg:w-1/2 p-7 rounded-3xl bg-[#060A14] border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400">Node Identifier</span>
                  <h4 className="text-lg font-bold text-white font-mono">{selectedCircle.name}</h4>
                </div>
                <span className="text-emerald-400 font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  {selectedCircle.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-slate-400 block text-[10px] mb-1">Measured Gateway Latency</span>
                  <span className="text-xl font-bold text-[#00F5FF]">{selectedCircle.ping}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-slate-400 block text-[10px] mb-1">Route Deliverability</span>
                  <span className="text-xl font-bold text-emerald-400">{selectedCircle.load}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 mb-6 text-xs font-mono space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Active Interconnects:</span>
                  <span className="text-white font-semibold">{selectedCircle.routes}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">TRAI DLT Engine:</span>
                  <span className="text-emerald-400 font-semibold">Pre-Scrubbed Direct Bind</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Failover Latency:</span>
                  <span className="text-[#8B5CF6] font-semibold">&lt;8ms Sub-Second Switch</span>
                </div>
              </div>

              <Link 
                to="/contact" 
                className="w-full py-3 rounded-xl btn-cyan font-bold text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Request Custom Routing for Your Volume</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
