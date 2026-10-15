import { motion } from 'motion/react';
import { transition } from '../../lib/animation';
import { ShieldCheck, Building2, Zap, Headphones, CheckCircle2, Lock } from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Pre-Dispatch TRAI DLT Engine',
    desc: 'Automated entity and template validation pre-scrubs every message before carrier submission, eliminating DLT template rejections and delivery timeouts.',
    metric: '0.00% Rejection Rate',
    color: 'text-[#00F5FF]',
    glow: 'bg-[#00F5FF]/10 border-[#00F5FF]/20'
  },
  {
    icon: Building2,
    title: '100% Indian Data Sovereignty',
    desc: 'Fully compliant with the Digital Personal Data Protection (DPDP) Act 2023. All message contents and logs are stored locally in Tier-4 Mumbai data centers.',
    metric: 'Mumbai Local Tier-4',
    color: 'text-[#3B82F6]',
    glow: 'bg-[#3B82F6]/10 border-[#3B82F6]/20'
  },
  {
    icon: Zap,
    title: 'Self-Healing Multi-Operator Failover',
    desc: 'If any Indian operator faces congestion or downtime, our algorithm dynamically reroutes messages to alternate carrier pipes in under 8ms.',
    metric: '<8ms Auto Reroute',
    color: 'text-[#8B5CF6]',
    glow: 'bg-[#8B5CF6]/10 border-[#8B5CF6]/20'
  },
  {
    icon: Headphones,
    title: 'Dedicated Mumbai NOC Engineers',
    desc: 'Enterprise accounts receive dedicated technical account managers with direct phone and WhatsApp hotlines to our Mumbai telecom operations center.',
    metric: '24x7 Dedicated Team',
    color: 'text-[#EC4899]',
    glow: 'bg-[#EC4899]/10 border-[#EC4899]/20'
  }
];

export function JourneyArchitecture() {
  return (
    <section 
      id="architecture" 
      className="py-28 lg:py-36 relative overflow-hidden text-white"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Chapter Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#00F5FF]/30 text-[#00F5FF] text-xs font-mono font-bold tracking-wider uppercase mb-5 backdrop-blur-xl">
            <Lock className="w-3.5 h-3.5 text-[#00F5FF]" />
            <span>Chapter 05 // Architectural Superiority</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5">
            Engineered for India's <br />
            <span className="text-gradient">Most Demanding Workloads</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Whether dispatching 500,000 flash sale OTPs per second or routing critical banking transactions, Nexora's infrastructure delivers unmatched resilience.
          </p>
        </div>

        {/* 4 Architectural Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pillars.map((pil, i) => (
            <motion.div
              key={pil.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={transition(i * 0.1)}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white/[0.025] backdrop-blur-2xl border border-white/10 hover:border-[#00F5FF]/40 transition-all duration-300 shadow-2xl relative overflow-hidden group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl ${pil.glow} border flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <pil.icon className={`w-7 h-7 ${pil.color}`} />
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white">
                  {pil.metric}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00F5FF] transition-colors">
                {pil.title}
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm md:text-base font-normal">
                {pil.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
