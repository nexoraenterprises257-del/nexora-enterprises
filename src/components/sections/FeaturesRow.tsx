import { Zap, Shield, Plug, Headset } from 'lucide-react';
import { motion } from 'motion/react';
import { transition } from '../../lib/animation';

export function FeaturesRow() {
  const features = [
    {
      icon: Zap,
      title: 'HIGH DELIVERY',
      description: 'Optimal routes for maximum delivery & speed across Indian telecom operators.',
      color: 'text-[#00F5FF]',
      border: 'hover:border-[#00F5FF]/40',
      bg: 'bg-[#00F5FF]/10'
    },
    {
      icon: Shield,
      title: 'SECURE & RELIABLE',
      description: 'Enterprise grade security with 24x7 monitoring and 100% Indian data localization.',
      color: 'text-[#3B82F6]',
      border: 'hover:border-[#3B82F6]/40',
      bg: 'bg-[#3B82F6]/10'
    },
    {
      icon: Plug,
      title: 'EASY INTEGRATION',
      description: 'Simple APIs & SMPP for quick & seamless integration with core systems.',
      color: 'text-[#8B5CF6]',
      border: 'hover:border-[#8B5CF6]/40',
      bg: 'bg-[#8B5CF6]/10'
    },
    {
      icon: Headset,
      title: '24x7 SUPPORT',
      description: 'Dedicated support team always ready to help you with instant Mumbai NOC resolution.',
      color: 'text-[#EC4899]',
      border: 'hover:border-[#EC4899]/40',
      bg: 'bg-[#EC4899]/10'
    }
  ];

  return (
    <section className="bg-[#030712] py-20 border-b border-white/[0.08] relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={transition(index * 0.1, 0.5)}
                className={`premium-card ${feature.border} rounded-3xl p-8 flex flex-col items-center text-center group`}
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.bg} border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-sm font-bold text-white tracking-widest mb-2 uppercase">{feature.title}</h3>
                <p className="text-xs text-white/55 leading-relaxed max-w-[210px]">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
