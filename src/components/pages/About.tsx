import { motion } from 'motion/react';
import { transition } from '../../lib/animation';
import { Shield, Zap, Handshake, Lightbulb, HeartHandshake, Headphones, Plug, ArrowRight, ShieldCheck, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="pt-36 pb-0 bg-white min-h-screen text-slate-900 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-100/50 via-purple-100/40 to-transparent blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <div className="badge-pill mb-5 inline-flex">
            <span className="text-xs">🇮🇳</span>
            <span>Proudly Serving Indian Enterprises</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0A0F1C] mb-6 tracking-tight">
            Who We <span className="text-logo-gradient">Are</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            India's leading enterprise communication platform empowering businesses to connect, engage and grow.
          </p>
        </motion.div>
        
        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={transition(0.2)}
          >
            <span className="text-[#2563EB] font-mono font-bold tracking-wider uppercase text-xs mb-3 block">Our Story</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0A0F1C] mb-6 tracking-tight leading-tight">
              Empowering Businesses Through <br />
              <span className="text-logo-gradient">Smart Communication</span>
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base font-normal">
              Nexora is a trusted leader in enterprise communication solutions. We provide businesses with cutting-edge technology to connect with their customers through multiple channels including SMS, WhatsApp, RCS, Voice, and IVR.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed text-base font-normal">
              With over 7 years of industry experience, we've helped 5000+ businesses across India to transform their communication strategy and drive sustainable growth with direct carrier routing.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200">
              <div>
                <div className="text-4xl sm:text-5xl font-black text-[#0A0F1C] mb-1">
                  7<span className="text-[#2563EB]">+</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-semibold">Years Experience in India</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-black text-[#0A0F1C] mb-1">
                  5000<span className="text-[#9333EA]">+</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-semibold">Indian Enterprise Clients</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={transition(0.4)}
            className="flex flex-col gap-6"
          >
            <div className="fc-card p-8 md:p-10 relative overflow-hidden group">
              <div className="text-slate-100 font-black text-6xl absolute top-3 right-5 pointer-events-none select-none">
                01
              </div>
              <h3 className="text-2xl font-black text-[#0A0F1C] mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base font-normal">
                To empower every business with intelligent, reliable, and scalable communication solutions that drive engagement, automation, and growth.
              </p>
            </div>
            
            <div className="fc-card p-8 md:p-10 relative overflow-hidden group">
              <div className="text-slate-100 font-black text-6xl absolute top-3 right-5 pointer-events-none select-none">
                02
              </div>
              <h3 className="text-2xl font-black text-[#0A0F1C] mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#9333EA]" />
                Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base font-normal">
                To become the most trusted enterprise communication partner for businesses across India, enabling seamless connectivity across all channels.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Indian Telecom & Infrastructure Highlights */}
        <div className="mb-32 p-8 md:p-12 rounded-[2.5rem] bg-[#F8FAFC] border border-slate-200/80 shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#2563EB] mb-2 block">Enterprise Infrastructure</span>
            <h3 className="text-3xl md:text-4xl font-black text-[#0A0F1C]">Built for India's Digital Telecom Ecosystem</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-base font-black text-[#0A0F1C] mb-2">100% TRAI & DLT Compliant</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">Direct automated template scrubbing and instant OTP clearance with zero DLT rejection delay.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-[#9333EA] mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-black text-[#0A0F1C] mb-2">Indian Data Sovereignty</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">Primary Tier-4 data centers in Mumbai with multi-region failover in Delhi NCR and Bengaluru.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-base font-black text-[#0A0F1C] mb-2">All 22 Telecom Circles</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">Direct SMPP connectivity to Jio, Airtel, Vodafone Idea (Vi), and BSNL across all 22 Indian circles.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Why Businesses Trust Nexora */}
      <div className="bg-[#F8FAFC] py-28 border-y border-slate-200/80 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#2563EB] font-mono font-bold tracking-wider uppercase text-xs mb-2 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0A0F1C]">
              Why Businesses Trust <span className="text-logo-gradient">Nexora</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', icon: Zap, title: 'High Delivery Rate', desc: '99.9% delivery rate with optimal routing for maximum speed.', color: 'text-[#0284C7]', bg: 'bg-sky-50 border-sky-100 text-[#0284C7]' },
              { num: '02', icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade security with 24x7 monitoring and protection.', color: 'text-[#2563EB]', bg: 'bg-blue-50 border-blue-100 text-[#2563EB]' },
              { num: '03', icon: Plug, title: 'Easy Integration', desc: 'Simple APIs and SDKs for quick and seamless integration.', color: 'text-[#7C3AED]', bg: 'bg-purple-50 border-purple-100 text-[#7C3AED]' },
              { num: '04', icon: Headphones, title: '24x7 Support', desc: 'Dedicated support team always ready to help you with instant resolution.', color: 'text-[#C026D3]', bg: 'bg-fuchsia-50 border-fuchsia-100 text-[#C026D3]' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={transition(i * 0.1)}
                className="fc-card p-7 relative overflow-hidden group flex flex-col justify-between"
              >
                <div className="text-slate-100 font-black text-6xl absolute top-3 right-4 pointer-events-none select-none">
                  {feature.num}
                </div>
                <div>
                  <div className={`w-12 h-12 rounded-xl ${feature.bg} border flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-black text-[#0A0F1C] mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-28 relative bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#7C3AED] font-mono font-bold tracking-wider uppercase text-xs mb-2 block">Our Values</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0A0F1C]">
              What Drives <span className="text-logo-gradient">Us</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { num: '01', icon: Handshake, title: 'Trust & Transparency', desc: 'Building long-term relationships through honesty and openness.', color: 'text-[#2563EB]', bg: 'bg-blue-50 border-blue-100' },
              { num: '02', icon: Lightbulb, title: 'Innovation', desc: 'Continuously evolving to bring the latest communication technology.', color: 'text-[#7C3AED]', bg: 'bg-purple-50 border-purple-100' },
              { num: '03', icon: HeartHandshake, title: 'Customer First', desc: 'Putting our customers at the heart of everything we do.', color: 'text-[#C026D3]', bg: 'bg-fuchsia-50 border-fuchsia-100' }
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={transition(i * 0.1)}
                className="fc-card p-8 relative overflow-hidden group flex flex-col justify-between"
              >
                <div className="text-slate-100 font-black text-6xl absolute top-3 right-4 pointer-events-none select-none">
                  {val.num}
                </div>
                <div>
                  <div className={`w-12 h-12 rounded-xl ${val.bg} border flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                    <val.icon className={`w-5 h-5 ${val.color}`} />
                  </div>
                  <h3 className="text-xl font-black text-[#0A0F1C] mb-2">{val.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-normal">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Ribbon */}
      <div className="py-16 bg-[#F8FAFC] border-y border-slate-200/80">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10B+', label: 'Messages Delivered' },
              { number: '5000+', label: 'Happy Indian Clients' },
              { number: '99.99%', label: 'Platform Uptime' },
              { number: '15+', label: 'Powerful Solutions' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={transition(i * 0.1)}
              >
                <div className="text-4xl md:text-5xl font-black mb-1.5 tracking-tight text-logo-gradient">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-bold text-xs md:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-10 md:p-14 rounded-[2.5rem] bg-[#0A0F1C] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-r from-[#00D2FF]/20 to-[#9333EA]/20 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="lg:w-2/3 text-center lg:text-left relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                Ready to Transform Your <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#60A5FA] to-[#C084FC]">
                  Business Communication?
                </span>
              </h2>
              <p className="text-slate-300 text-base md:text-lg font-normal">
                Join thousands of businesses who trust Nexora for their communication needs.
              </p>
            </div>
            <div className="lg:w-1/3 text-center lg:text-right relative z-10">
              <Link to="/contact" className="btn-primary">
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
