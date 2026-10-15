import { motion } from 'motion/react';
import { transition } from '../../lib/animation';
import { ShieldCheck, Activity, Network, Users } from 'lucide-react';

const stats = [
  {
    icon: Activity,
    number: '10B+',
    label: 'Messages Delivered',
    desc: 'Sub-400ms OTP clearance pan-India',
    accent: 'from-[#00D2FF] to-[#2563EB]',
    iconColor: 'text-[#0284C7]',
    iconBg: 'bg-sky-50 border-sky-100',
  },
  {
    icon: Users,
    number: '5,000+',
    label: 'Enterprise Clients',
    desc: 'Trusted by BFSI & top brands',
    accent: 'from-[#2563EB] to-[#7C3AED]',
    iconColor: 'text-[#2563EB]',
    iconBg: 'bg-blue-50 border-blue-100',
  },
  {
    icon: ShieldCheck,
    number: '99.99%',
    label: 'Guaranteed SLA',
    desc: 'Tier-4 Mumbai NOC monitoring',
    accent: 'from-[#7C3AED] to-[#C026D3]',
    iconColor: 'text-[#7C3AED]',
    iconBg: 'bg-purple-50 border-purple-100',
  },
  {
    icon: Network,
    number: '22 Circles',
    label: 'Direct Telco Binds',
    desc: 'Direct Jio, Airtel, Vi & BSNL pipes',
    accent: 'from-[#0284C7] to-[#10B981]',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50 border-emerald-100',
  }
];

export function StatsRow() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={transition(i * 0.08, 0.4)}
                className="fc-card p-7 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top accent gradient */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${stat.iconBg}`}>
                      <Icon className={`w-5 h-5 ${stat.iconColor}`} />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                      Verified
                    </span>
                  </div>

                  <div className="text-4xl sm:text-5xl font-black tracking-tight mb-1.5">
                    <span className="text-logo-gradient">
                      {stat.number}
                    </span>
                  </div>
                  
                  <div className="text-sm font-bold text-slate-900 mb-1">
                    {stat.label}
                  </div>
                  
                  <p className="text-xs text-slate-500 font-medium">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
