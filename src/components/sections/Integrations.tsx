import { motion } from 'motion/react';
import { Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const integrations = [
  { name: 'CleverTap', type: 'Customer Retention', logo: '📊' },
  { name: 'WebEngage', type: 'Marketing Automation', logo: '⚙️' },
  { name: 'MoEngage', type: 'Customer Engagement', logo: '🚀' },
  { name: 'Zoho CRM', type: 'Enterprise CRM', logo: '⚡' },
  { name: 'Salesforce', type: 'Cloud CRM', logo: '☁️' },
  { name: 'Shopify', type: 'E-Commerce Platform', logo: '🛍️' },
  { name: 'Shiprocket', type: 'Logistics Aggregator', logo: '📦' },
  { name: 'LeadSquared', type: 'Sales Execution', logo: '📈' },
  { name: 'GoKwik', type: 'Checkout & COD', logo: '⚡' },
  { name: 'Adobe Experience', type: 'Enterprise Suite', logo: '🎨' },
  { name: 'HubSpot', type: 'Inbound CRM', logo: '🎯' },
  { name: 'WooCommerce', type: 'Storefront System', logo: '🛒' },
  { name: 'Razorpay', type: 'Payment Gateway', logo: '💳' },
  { name: 'Paytm Payments', type: 'Fintech Processing', logo: '💰' },
  { name: 'Zapier', type: 'Workflow Automation', logo: '🔌' },
  { name: 'Segment', type: 'Customer Data', logo: '📑' },
  { name: 'Kapture CRM', type: 'Service Helpdesk', logo: '🎧' },
];

export function Integrations() {
  return (
    <section id="integrations" className="py-24 bg-[#030712] relative overflow-hidden border-t border-white/10 text-white">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#00F5FF] text-xs font-bold uppercase tracking-widest mb-5 backdrop-blur-md">
            <Layers className="w-3.5 h-3.5 text-[#00F5FF]" />
            <span>Ecosystem</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
            Native Integrations with <span className="text-gradient">Global Platforms</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-normal">
            Nexora is the native communication layer for the world's leading CRM, marketing automation, and e-commerce platforms — so your team goes live in minutes with no added engineering overhead.
          </p>
        </div>

        {/* 18-Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {integrations.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              className="relative group bg-white/[0.025] backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:border-[#00F5FF]/40 hover:bg-white/[0.05] transition-all duration-300 cursor-default min-h-[140px]"
            >
              <div className="text-3xl group-hover:scale-110 transition-transform">
                {item.logo}
              </div>
              <span className="text-sm font-bold text-white text-center leading-tight group-hover:text-[#00F5FF] transition-colors">
                {item.name}
              </span>
              <span className="text-[10px] text-slate-400 font-medium text-center">
                {item.type}
              </span>
            </motion.div>
          ))}

          {/* 18th Card: Explore All Integrations */}
          <Link to="/developers">
            <div className="relative group h-full btn-cyan rounded-2xl p-5 flex flex-col items-center justify-center gap-2 transition-all duration-300 cursor-pointer min-h-[140px] text-black">
              <span className="text-2xl font-black">20+</span>
              <span className="text-xs font-bold text-center leading-tight">Explore All Connectors</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform mt-1" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
