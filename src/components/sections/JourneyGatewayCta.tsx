import { useState } from 'react';
import { motion } from 'motion/react';
import { transition } from '../../lib/animation';
import { Mail, Phone, MapPin, Clock, Lock, Send, MessageCircle, ShieldCheck, ArrowRight, Check } from 'lucide-react';

export function JourneyGatewayCta() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section 
      id="gateway-onboarding" 
      className="py-28 lg:py-36 relative overflow-hidden text-white"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Chapter Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#00F5FF]/30 text-[#00F5FF] text-xs font-mono font-bold tracking-wider uppercase mb-5 backdrop-blur-xl">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00F5FF]" />
            <span>Chapter 08 // Enterprise Gateway HQ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5">
            Connect Directly with <br />
            <span className="text-gradient">India's Leading Telecom Engineers</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Ready to upgrade your enterprise communication infrastructure? Get your API credentials, customized carrier routing, and DLT onboarding approved within 24 hours.
          </p>
        </div>

        {/* 2-Column Gateway: Left Contacts, Right Fast Onboarding Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Helplines & Mumbai HQ (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Helpline */}
            <div className="p-6 rounded-3xl bg-white/[0.025] backdrop-blur-2xl border border-white/10 hover:border-[#00F5FF]/40 transition-all group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-mono text-slate-400 font-bold">Direct Helpline (India)</span>
                <span className="text-[10px] text-emerald-400 font-mono font-bold flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Available Now
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#00F5FF]/10 border border-[#00F5FF]/20 flex items-center justify-center text-[#00F5FF] group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <a href="tel:+918175950586" className="text-xl font-bold text-white hover:text-[#00F5FF] transition-colors font-mono">
                    +91 81759 50586
                  </a>
                  <span className="text-xs text-slate-400 block mt-0.5">Priority Telecom Engineer Hotline</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Chat */}
            <a 
              href="https://wa.me/918175950586" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/15 text-white transition-all group cursor-pointer backdrop-blur-xl"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-sm font-bold block">Chat Directly on WhatsApp</span>
                  <span className="text-xs text-emerald-400 font-mono">+91 81759 50586</span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1.5 transition-transform" />
            </a>

            {/* Email */}
            <div className="p-6 rounded-3xl bg-white/[0.025] backdrop-blur-2xl border border-white/10 hover:border-[#3B82F6]/40 transition-all group">
              <span className="text-xs uppercase font-mono text-slate-400 font-bold block mb-3">Enterprise Sales & Support</span>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <a href="mailto:info@nexoracpaas.in" className="text-base font-bold text-white hover:text-[#3B82F6] transition-colors font-mono break-all">
                    info@nexoracpaas.in
                  </a>
                  <span className="text-xs text-slate-400 block mt-0.5">SLA Response: Under 2 Hours</span>
                </div>
              </div>
            </div>

            {/* Mumbai Corporate Office */}
            <div className="p-6 rounded-3xl bg-white/[0.025] backdrop-blur-2xl border border-white/10 hover:border-[#8B5CF6]/40 transition-all group">
              <span className="text-xs uppercase font-mono text-slate-400 font-bold block mb-3">Mumbai Corporate Office</span>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] group-hover:scale-110 transition-transform shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Shop No. 44, Oshiwara Police Station Rd, Mhada Colony, Andheri West, Mumbai, Maharashtra 400102, India
                  </p>
                  <span className="text-[11px] text-slate-400 font-mono block mt-1.5">Hours: 9:30 AM – 8:00 PM IST (Mon-Sat)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Fast Onboarding Terminal Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-wider text-[#00F5FF] font-bold block mb-2">Priority Onboarding</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Request Enterprise Trial</h3>
                <p className="text-slate-300 text-sm">Fill in your requirements below for an instant API sandbox and carrier quotation.</p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Request Submitted Successfully</h4>
                  <p className="text-slate-300 text-sm">Our Mumbai telecom team will contact you within 2 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono text-slate-300 uppercase">Your Name *</label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. Rahul Sharma" 
                        className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00F5FF] focus:ring-1 focus:ring-[#00F5FF]/40 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono text-slate-300 uppercase">Work Email *</label>
                      <input 
                        required
                        type="email" 
                        placeholder="rahul@company.com" 
                        className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00F5FF] focus:ring-1 focus:ring-[#00F5FF]/40 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono text-slate-300 uppercase">Mobile Number (India) *</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="+91 98765 43210" 
                        className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00F5FF] focus:ring-1 focus:ring-[#00F5FF]/40 transition-all font-mono"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono text-slate-300 uppercase">Company Name *</label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. Acme Tech India" 
                        className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00F5FF] focus:ring-1 focus:ring-[#00F5FF]/40 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono text-slate-300 uppercase">Primary Solution Needed *</label>
                    <select 
                      required
                      className="bg-[#0A1024] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00F5FF] cursor-pointer"
                    >
                      <option value="whatsapp">WhatsApp Business API (Official Meta)</option>
                      <option value="sms">Bulk SMS (Transactional & DLT OTP)</option>
                      <option value="rcs">RCS Business Messaging</option>
                      <option value="voice">Voice Solutions & OBD Broadcast</option>
                      <option value="ivr">Cloud IVR Systems</option>
                      <option value="smpp">SMPP Carrier Gateway (High Volume)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono text-slate-300 uppercase">Monthly Traffic Volume *</label>
                    <textarea 
                      rows={3} 
                      placeholder="Tell us about your estimated monthly message volume and existing carrier setup..." 
                      className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00F5FF] focus:ring-1 focus:ring-[#00F5FF]/40 transition-all resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
                    <Lock className="w-3.5 h-3.5 text-[#00F5FF] shrink-0" />
                    <span>Your enterprise data is confidential, stored locally in Mumbai under DPDP Act 2023.</span>
                  </div>

                  <button 
                    type="submit"
                    className="mt-3 w-full py-4 rounded-xl btn-cyan font-bold text-sm uppercase tracking-wider font-mono flex items-center justify-center gap-2 group cursor-pointer shadow-[0_0_30px_rgba(0,245,255,0.4)]"
                  >
                    <span>Submit & Request Instant Sandbox</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
