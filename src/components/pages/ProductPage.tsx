import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { transition } from '../../lib/animation';
import { ArrowRight, CheckCircle2, Zap, ShieldCheck, Activity, ChevronDown, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductSpec, ProductFaq } from '../../data/products';

interface ProductPageProps {
  title: string;
  subtitle: string;
  description: string;
  features: { title: string; desc: string }[];
  specs?: ProductSpec[];
  useCases: { title: string; desc: string }[];
  faqs?: ProductFaq[];
  cta: string;
  ctaSub: string;
}

export function ProductPage({ title, subtitle, description, features, specs, useCases, faqs, cta, ctaSub }: ProductPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-36 pb-0 bg-white min-h-screen text-slate-900 relative overflow-hidden">
      {/* Hero Header */}
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-r from-blue-100/60 via-purple-100/50 to-cyan-100/60 blur-[140px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 relative z-10 max-w-4xl mx-auto"
        >
          <div className="badge-pill mb-5 inline-flex">
            <span className="text-xs">🇮🇳</span>
            <span>Indian Enterprise Telecom Infrastructure</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0A0F1C] mb-5 tracking-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-logo-gradient mb-5 font-bold">
            {subtitle}
          </p>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
            {description}
          </p>

          <div className="inline-flex flex-wrap items-center justify-center gap-3 py-2.5 px-6 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-700 shadow-xs">
            <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
              <Activity className="w-3.5 h-3.5" /> 99.99% Uptime SLA
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 text-[#2563EB] font-bold">
              <ShieldCheck className="w-3.5 h-3.5" /> TRAI DLT Compliant
            </span>
            <span className="text-slate-300">•</span>
            <span className="font-semibold text-slate-600">Direct Telecom Routes: Jio • Airtel • Vi • BSNL</span>
          </div>
        </motion.div>

        {/* Technical Specifications & Carrier SLA Grid */}
        {specs && specs.length > 0 && (
          <div className="max-w-6xl mx-auto mb-20 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {specs.map((spec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={transition(i * 0.05)}
                  className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 text-center flex flex-col justify-center shadow-2xs group hover:bg-white hover:border-[#2563EB]/40 hover:shadow-md transition-all"
                >
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-1">
                    {spec.label}
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-[#0A0F1C] tracking-tight group-hover:text-[#2563EB] transition-colors">
                    {spec.value}
                  </span>
                  <span className="text-[11px] text-slate-500 mt-1 leading-snug">
                    {spec.desc}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Key Features (6 Enterprise Features in 3x2 Grid) */}
      <div className="bg-[#F8FAFC] py-28 border-y border-slate-200/80 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#2563EB] font-mono font-bold tracking-wider uppercase text-xs mb-2 block">Key Capabilities</span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0A0F1C]">
              Why Choose Our <span className="text-logo-gradient">{title}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={transition(i * 0.06)}
                className="fc-card p-8 group flex flex-col justify-between relative overflow-hidden"
              >
                <div className="text-slate-100 font-black text-6xl absolute top-3 right-5 pointer-events-none select-none group-hover:text-blue-50 transition-colors">
                  0{i + 1}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform text-[#2563EB]">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-[#0A0F1C] mb-2.5 group-hover:text-[#2563EB] transition-colors">{f.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases (4 Detailed Enterprise Scenarios) */}
      <div className="py-28 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#7C3AED] font-mono font-bold tracking-wider uppercase text-xs mb-2 block">Real-World Applications</span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0A0F1C]">
              What You Can <span className="text-logo-gradient">Achieve</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {useCases.map((u, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={transition(i * 0.08)}
                className="fc-card p-8 relative overflow-hidden group flex flex-col justify-between"
              >
                <div className="text-slate-100 font-black text-6xl absolute top-3 right-5 pointer-events-none select-none group-hover:text-purple-50 transition-colors">
                  0{i + 1}
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5 text-emerald-600">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#0A0F1C] mb-2">{u.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm font-normal">{u.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Channel FAQs Section */}
      {faqs && faqs.length > 0 && (
        <div className="py-24 bg-[#F8FAFC] border-t border-slate-200/80 relative">
          <div className="container mx-auto px-6 max-w-3xl relative z-10">
            <div className="text-center mb-12">
              <div className="badge-pill mb-3 inline-flex">
                <HelpCircle className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Product FAQs</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0A0F1C]">
                Frequently Asked <span className="text-logo-gradient">Questions</span>
              </h2>
            </div>

            <div className="divide-y divide-slate-200 border border-slate-200/90 rounded-2xl bg-white overflow-hidden shadow-xs">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={faq.q} className="transition-colors">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 sm:px-8 py-5 text-left text-base sm:text-lg font-bold text-[#0A0F1C] hover:text-[#2563EB] transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#2563EB]' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 sm:px-8 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                            <p>{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <div className="max-w-4xl mx-auto p-10 md:p-14 rounded-[2.5rem] bg-[#0A0F1C] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-r from-[#00D2FF]/20 to-[#9333EA]/20 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                {cta}
              </h2>
              <p className="text-slate-300 text-base md:text-lg mb-8 max-w-2xl mx-auto font-normal">
                {ctaSub}
              </p>
              <Link 
                to="/contact" 
                className="btn-primary"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
