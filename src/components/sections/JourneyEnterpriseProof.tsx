import { motion } from 'motion/react';
import { transition } from '../../lib/animation';
import { Layers, ShieldCheck, ArrowRight, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const brands = [
  'Tata Digital', 'HDFC Bank', 'ICICI Securities', 'OLA Cabs', 
  'PhonePe', 'Zomato', 'Swiggy', 'Flipkart', 
  'Paytm', 'Reliance Jio', 'Bharti Airtel', 'Razorpay'
];

const stats = [
  { value: '10B+', label: 'Annual Messages Dispatched', sub: 'Across 22 Telecom Circles' },
  { value: '5,000+', label: 'Enterprise Clients', sub: 'Fintech, Retail & Unicorns' },
  { value: '99.99%', label: 'Guaranteed Uptime SLA', sub: 'Carrier Grade High Availability' },
  { value: '<14ms', label: 'Average Dispatch Speed', sub: 'Direct SMPP Route Latency' }
];

const integrations = [
  'CleverTap', 'WebEngage', 'MoEngage', 'Zoho CRM', 
  'Salesforce', 'Shopify', 'Shiprocket', 'LeadSquared', 
  'GoKwik', 'Adobe Experience', 'HubSpot', 'WooCommerce'
];

export function JourneyEnterpriseProof() {
  return (
    <section 
      id="enterprise-proof" 
      className="py-28 lg:py-36 relative overflow-hidden text-white"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Chapter Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#00F5FF]/30 text-[#00F5FF] text-xs font-mono font-bold tracking-wider uppercase mb-5 backdrop-blur-xl">
            <Building className="w-3.5 h-3.5 text-[#00F5FF]" />
            <span>Chapter 06 // Enterprise Scale & Proof</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5">
            Trusted by 5,000+ <br />
            <span className="text-gradient">High-Growth Indian Brands</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            From premier commercial banks to fast-scaling consumer unicorns, Nexora is the trusted communications engine powering billions of critical conversations.
          </p>
        </div>

        {/* 4 Large Scale Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((st, i) => (
            <motion.div
              key={st.value}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={transition(i * 0.1)}
              className="p-8 rounded-3xl bg-white/[0.025] backdrop-blur-2xl border border-white/10 text-center shadow-xl hover:border-[#00F5FF]/40 transition-all"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-gradient mb-2 tracking-tight">
                {st.value}
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-1">{st.label}</h4>
              <p className="text-xs text-slate-400 font-mono">{st.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Indian Brands Infinite Glass Marquee */}
        <div className="mb-20 p-8 rounded-3xl bg-white/[0.015] border border-white/10 backdrop-blur-xl relative overflow-hidden">
          <div className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 mb-6 font-semibold">
            Enterprise Interconnects & Partner Ecosystem
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {brands.map((brand) => (
              <div 
                key={brand}
                className="px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-slate-300 font-bold text-sm tracking-wide hover:border-[#00F5FF]/50 hover:text-white transition-all cursor-default shadow-sm"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* Native Connectors Bar */}
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 backdrop-blur-2xl text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono uppercase text-[#00F5FF] font-bold block mb-2">Native Integrations</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Pre-Built Integrations with Your Stack</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Connect Nexora to your marketing automation tools, e-commerce stores, and CRMs with zero engineering drag.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {integrations.map((tool) => (
              <span 
                key={tool}
                className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300 hover:text-[#00F5FF] hover:border-[#00F5FF]/40 transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>

          <Link 
            to="/developers" 
            className="inline-flex items-center gap-2 text-xs font-bold text-[#00F5FF] hover:underline uppercase tracking-wider font-mono"
          >
            <span>Explore Developer SDKs & Plugins</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
