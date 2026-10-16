import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { transition } from '../../lib/animation';
import { Mail, Phone, MapPin, Clock, Lock, Send, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };
  return (
    <section className="pt-36 pb-28 relative bg-white overflow-hidden min-h-screen text-slate-900">
      {/* Dynamic ambient background glows */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-blue-100/40 blur-[150px] pointer-events-none" />
      <div className="absolute left-0 bottom-10 w-[500px] h-[500px] bg-purple-100/40 blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-14 items-start">
          
          {/* Left Info Column */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={transition(0)}
            >
              <div className="badge-pill mb-5 inline-flex">
                <span className="text-xs">🇮🇳</span>
                <span>Pan-India Enterprise Headquarters</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#0A0F1C] mb-5 leading-tight">
                Let's Build Stronger <br />
                <span className="text-logo-gradient">
                  Connections
                </span>
              </h1>
              <p className="text-slate-600 text-base md:text-lg mb-8 max-w-lg leading-relaxed font-medium">
                Have questions for Nexora Enterprise? We'd love to hear from you. Let's discuss how our platform can supercharge your business communication across Indian telecom circles.
              </p>

              <div className="flex flex-col gap-4 max-w-md mb-8">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#2563EB]/40 hover:bg-white hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-[#2563EB] group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">Direct Helpline (India)</h4>
                      <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Available Now
                      </span>
                    </div>
                    <p className="text-[#0A0F1C] font-black text-base mt-0.5">
                      <a href="tel:+918175950586" className="hover:text-[#2563EB] transition-colors">+91 81759 50586</a>
                    </p>
                  </div>
                </div>

                {/* WhatsApp Chat Link */}
                <a 
                  href="https://wa.me/918175950586" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 px-4 rounded-2xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100/60 text-emerald-800 transition-all group cursor-pointer shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-emerald-600" />
                    <span className="text-xs font-bold text-slate-900">Chat Directly on WhatsApp</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
                    +91 81759 50586 →
                  </span>
                </a>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#2563EB]/40 hover:bg-white hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 text-[#0284C7] group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-0.5 font-bold">Enterprise Sales & Support</h4>
                    <p className="text-[#0A0F1C] font-bold text-base">
                      <a href="mailto:info@nexoraenterprise.in" className="hover:text-[#2563EB] transition-colors break-all">info@nexoraenterprise.in</a>
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#2563EB]/40 hover:bg-white hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center shrink-0 text-[#7C3AED] group-hover:scale-105 transition-transform">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-0.5 font-bold">Indian Standard Operational Hours</h4>
                    <p className="text-slate-700 font-medium text-sm">9:30am – 8:00pm IST (Mon-Sat)</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#2563EB]/40 hover:bg-white hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-fuchsia-50 border border-fuchsia-100 flex items-center justify-center shrink-0 text-[#C026D3] group-hover:scale-105 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-0.5 font-bold">Mumbai Registered Office</h4>
                    <p className="text-slate-700 font-medium text-xs leading-relaxed">
                      Shop No. 44 Oshiwara Police Station Rd, Mhada Colony, Andheri West, Mumbai, Maharashtra 400102
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Compliance Assurance Pill */}
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium bg-slate-100 px-4 py-2 rounded-xl border border-slate-200 max-w-md">
                <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                <span>100% Indian Data Localization & TRAI DLT Compliant</span>
              </div>
            </motion.div>
          </div>

          {/* Right Lead Generation Form */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={transition(0.2)}
              className="fc-card p-8 md:p-10 shadow-xl"
            >
              <h3 className="text-2xl font-black text-[#0A0F1C] mb-2">Request an Enterprise Demo</h3>
              <p className="text-slate-600 text-sm mb-8 font-normal">Fill in your requirements and our telecom solution architects will contact you within 15 minutes.</p>

              {isSubmitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-5 shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0A0F1C] mb-2">Inquiry Submitted Successfully!</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-sm">
                    Thank you{fullName ? `, ${fullName}` : ''}! Our enterprise telecom solution architects have received your requirements and will contact you within 15 minutes.
                  </p>

                  <div className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 mb-6 text-left space-y-2">
                    <div className="flex items-center gap-2 text-slate-800 font-bold">
                      <span>⚡ Direct Telecom Support Dispatch</span>
                    </div>
                    <p className="text-[11px] text-slate-500">
                      For urgent onboarding or SMPP bind setups, call our Mumbai NOC helpline at{' '}
                      <a href="tel:+918175950586" className="text-[#2563EB] font-bold underline">+91 81759 50586</a>.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => { setIsSubmitted(false); setFullName(''); }}
                    className="btn-secondary text-xs py-2.5 px-6"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 text-sm transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="rajesh@company.in"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Company Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nexora Technologies Pvt Ltd"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Channel of Primary Interest</label>
                    <select 
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 text-sm transition-all"
                    >
                      <option value="whatsapp">WhatsApp Business API (Meta Verified)</option>
                      <option value="bulk-sms">High-Speed Bulk SMS (DLT Approved)</option>
                      <option value="rcs">RCS Business Messaging</option>
                      <option value="voice">Voice Solutions & OBD Broadcast</option>
                      <option value="ivr">Multi-Level Smart IVR</option>
                      <option value="smpp">Direct Carrier SMPP 3.4 Gateway</option>
                      <option value="all">Omnichannel Suite (All Channels)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your Message / Monthly Volume</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your estimated message volume, use cases, or custom API integration needs..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 text-sm transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Consent Checkbox and Privacy Policy Notice */}
                  <div className="space-y-3 pt-1">
                    <div className="flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        id="marketingConsent"
                        required
                        className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#2563EB] focus:ring-blue-500/20 cursor-pointer accent-[#2563EB] shrink-0"
                      />
                      <label htmlFor="marketingConsent" className="text-xs sm:text-[13px] text-slate-600 leading-relaxed cursor-pointer select-none">
                        <span className="text-red-500 font-bold mr-1">*</span>
                        I agree to receive marketing communications, updates, and promotional offers from Nexora Enterprises via Email, SMS, WhatsApp, and Voice Calls. I understand that I can unsubscribe at any time.
                      </label>
                    </div>

                    <div className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-700 font-medium">
                      <Lock className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                      <span>
                        Your data is safe with us. Read our{' '}
                        <Link to="/privacy" className="text-[#2563EB] hover:text-[#1D4ED8] font-bold underline decoration-[#2563EB]/30 hover:decoration-[#2563EB] underline-offset-2 transition-colors">
                          Privacy Policy
                        </Link>.
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-base py-3.5 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 pt-2">
                    <Lock className="w-3 h-3 text-[#2563EB]" />
                    Your information is protected under India's DPDP Act. Zero spam guarantee.
                  </p>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
