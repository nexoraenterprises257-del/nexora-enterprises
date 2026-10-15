import { motion } from 'motion/react';
import { transition } from '../../lib/animation';
import { MessagesSquare, MessageSquare, Phone, Bot, Code, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: MessagesSquare,
    title: 'WhatsApp Business API',
    desc: 'Official Meta BSP. Catalogs, verified green tick, and 2-way conversational AI.',
    tags: ['Meta Verified', 'Catalogs', 'Green Tick'],
    link: '/products/whatsapp',
    color: 'text-[#25D366]',
    iconBg: 'bg-emerald-50 border-emerald-100 text-[#25D366]',
    category: 'Conversational'
  },
  {
    icon: MessageSquare,
    title: 'Bulk SMS (TRAI DLT)',
    desc: 'Direct carrier routes for transactional alerts and sub-400ms OTP delivery.',
    tags: ['TRAI DLT', '<400ms OTP', 'Direct Binds'],
    link: '/products/bulk-sms',
    color: 'text-[#2563EB]',
    iconBg: 'bg-blue-50 border-blue-100 text-[#2563EB]',
    category: 'A2P Messaging'
  },
  {
    icon: Sparkles,
    title: 'RCS Business Messaging',
    desc: 'Verified sender branding, interactive carousels, and 1-tap action chips.',
    tags: ['Verified Brand', 'Carousels', 'Action Chips'],
    link: '/products/rcs',
    color: 'text-[#9333EA]',
    iconBg: 'bg-purple-50 border-purple-100 text-[#9333EA]',
    category: 'Rich Media'
  },
  {
    icon: Phone,
    title: 'Voice Solutions & OBD',
    desc: 'Automated outbound dialing, OBD broadcasts, and click-to-call integrations.',
    tags: ['OBD Broadcast', 'Click-to-Call', 'Call Masking'],
    link: '/products/voice',
    color: 'text-[#0284C7]',
    iconBg: 'bg-sky-50 border-sky-100 text-[#0284C7]',
    category: 'Cloud Telephony'
  },
  {
    icon: Bot,
    title: 'Smart IVR Systems',
    desc: 'Multi-lingual automated menus with intelligent live agent forwarding.',
    tags: ['Smart Menus', 'Multi-Lingual', 'Agent Transfer'],
    link: '/products/ivr',
    color: 'text-[#D946EF]',
    iconBg: 'bg-fuchsia-50 border-fuchsia-100 text-[#D946EF]',
    category: 'Automation'
  },
  {
    icon: Code,
    title: 'SMPP Carrier Gateway',
    desc: 'Carrier-grade SMPP 3.4 sockets with sub-10ms binds and high throughput.',
    tags: ['SMPP 3.4', 'Sub-10ms Binds', 'High Speed'],
    link: '/products/smpp',
    color: 'text-[#4F46E5]',
    iconBg: 'bg-indigo-50 border-indigo-100 text-[#4F46E5]',
    category: 'Infrastructure'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background aurora accents */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="badge-pill mb-4 inline-flex">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Comprehensive CPaaS Suite</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-3 tracking-tight text-[#0A0F1C]">
            One Platform, <span className="text-logo-gradient">Every Channel</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Carrier-grade APIs built for high throughput and zero latency.
          </p>
        </div>

        {/* 6 Clean White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={transition(i * 0.06, 0.4)}
                className="fc-card p-7 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: Icon + Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-xs ${item.iconBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-black text-[#0A0F1C] mb-2 group-hover:text-[#2563EB] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 font-normal">
                    {item.desc}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-5 border-t border-slate-100">
                  <Link 
                    to={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-[#2563EB] transition-colors"
                  >
                    <span>Explore Channel</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-[#2563EB]" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
