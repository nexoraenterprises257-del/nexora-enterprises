import { motion } from 'motion/react';
import { ArrowRight, Phone, ShieldCheck, Zap, Activity, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function JourneyHero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden text-white"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Subtitle, Badges, CTAs (7 Cols) */}
          <div className="lg:col-span-7">
            
            {/* Live Status Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#00F5FF]/30 text-[#00F5FF] text-xs font-mono font-bold tracking-wider uppercase mb-6 backdrop-blur-xl shadow-[0_0_20px_rgba(0,245,255,0.18)]"
            >
              <span className="text-sm">🇮🇳</span>
              <span className="w-2 h-2 rounded-full bg-[#00F5FF] animate-pulse" />
              <span>Sovereign Indian CPaaS • 22 Circles Carrier Mesh</span>
            </motion.div>

            {/* Grand Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-[4.5rem] font-black tracking-tight leading-[1.05] mb-6 text-white"
            >
              Smart Communication, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] via-[#38BDF8] to-[#8B5CF6] drop-shadow-[0_0_35px_rgba(0,245,255,0.4)]">
                Stronger Connections.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl font-normal"
            >
              India's intelligent cloud communication gateway. We empower 5,000+ high-growth enterprises with direct carrier routing across Reliance Jio, Bharti Airtel, Vi, and BSNL for WhatsApp Business API, Bulk SMS, RCS, Voice, and IVR.
            </motion.p>

            {/* Interactive Telemetry Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/[0.025] border border-white/10 backdrop-blur-2xl mb-9 max-w-2xl shadow-xl"
            >
              <div className="border-r border-white/10 pr-2">
                <span className="text-[10px] uppercase font-mono text-slate-400 block font-semibold">Dispatch SLA</span>
                <span className="text-base sm:text-lg font-bold text-[#00F5FF]">&lt;14ms Avg</span>
              </div>
              <div className="border-r border-white/10 pr-2">
                <span className="text-[10px] uppercase font-mono text-slate-400 block font-semibold">Carrier Reach</span>
                <span className="text-base sm:text-lg font-bold text-white">22 Circles</span>
              </div>
              <div className="border-r border-white/10 pr-2">
                <span className="text-[10px] uppercase font-mono text-slate-400 block font-semibold">DLT Rejection</span>
                <span className="text-base sm:text-lg font-bold text-emerald-400">0.00% Zero</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-slate-400 block font-semibold">Uptime SLA</span>
                <span className="text-base sm:text-lg font-bold text-[#8B5CF6]">99.99%</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <Link 
                to="/contact" 
                className="btn-cyan px-8 py-4 text-base font-extrabold flex items-center justify-center gap-2 group cursor-pointer shadow-[0_0_30px_rgba(0,245,255,0.45)] hover:shadow-[0_0_45px_rgba(0,245,255,0.65)]"
              >
                <span>Launch Enterprise Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              
              <a 
                href="tel:+918175950586"
                className="btn-outline px-7 py-4 text-base font-bold flex items-center justify-center gap-2.5 hover:border-[#00F5FF]/50"
              >
                <Phone className="w-4 h-4 text-[#00F5FF]" />
                <span>+91 81759 50586</span>
              </a>
            </motion.div>

            {/* Certifications & Compliances */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 text-xs text-slate-400"
            >
              <span className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#00F5FF]" /> 100% TRAI DLT Pre-Scrubbed
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#3B82F6]" /> ISO 27001 & SOC 2 Type II
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-2 text-slate-300">
                <Activity className="w-4 h-4 text-emerald-400" /> Tier-4 Mumbai Data Center
              </span>
            </motion.div>

          </div>

          {/* Right Column: Holographic 3D Viewport Window (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl p-6 bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-white font-bold">NEXORA TELECOM CORE v3.8</span>
                </div>
                <span className="text-[#00F5FF]">MUMBAI NOC (HQ)</span>
              </div>

              {/* Live Dispatch Stream Simulation */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Jio 5G Interconnect</span>
                    <span className="text-white font-semibold">Tier-1 Direct SMPP</span>
                  </div>
                  <span className="text-emerald-400 font-bold text-xs bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    0.8ms Ping
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Airtel Enterprise Gateway</span>
                    <span className="text-white font-semibold">Primary Fiber Ring</span>
                  </div>
                  <span className="text-emerald-400 font-bold text-xs bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    1.2ms Ping
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Meta WhatsApp Cloud API</span>
                    <span className="text-white font-semibold">Official Business Gateway</span>
                  </div>
                  <span className="text-[#00F5FF] font-bold text-xs bg-[#00F5FF]/10 px-2.5 py-1 rounded-md border border-[#00F5FF]/20">
                    Verified Tier
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Vi & BSNL Fallback Engine</span>
                    <span className="text-white font-semibold">Automatic Dynamic Reroute</span>
                  </div>
                  <span className="text-[#8B5CF6] font-bold text-xs bg-[#8B5CF6]/10 px-2.5 py-1 rounded-md border border-[#8B5CF6]/20">
                    Standby 100%
                  </span>
                </div>
              </div>

              {/* Scroll Prompter */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-[#00F5FF]">
                  <Sparkles className="w-3.5 h-3.5" /> Scroll to explore 3D Carrier Journey
                </span>
                <span className="animate-bounce text-white">↓</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
