import { motion } from 'motion/react';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { transition } from '../../lib/animation';

export function CtaSection() {
  return (
    <section className="py-14 relative bg-white overflow-hidden">
      {/* Background radiant aurora */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-5xl h-80 bg-gradient-to-r from-blue-100/60 via-purple-100/50 to-cyan-100/60 blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition()}
          className="p-6 sm:p-8 md:p-12 rounded-3xl sm:rounded-[2.5rem] bg-[#0A0F1C] text-white relative overflow-hidden shadow-2xl shadow-slate-900/20 border border-slate-800"
        >
          {/* Subtle glow orb inside card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#00D2FF]/20 via-[#2563EB]/20 to-[#9333EA]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#9333EA]/20 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-xs font-bold text-white mb-5 sm:mb-6 backdrop-blur-md">
              <span className="text-sm">🇮🇳</span>
              <span>Accelerate Your Business in India</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4 sm:mb-6 leading-tight max-w-4xl mx-auto">
              Ready to Transform Your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#60A5FA] to-[#C084FC]">
                Business Communication?
              </span>
            </h2>
            
            <p className="text-slate-300 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed font-medium">
              Join 5,000+ businesses scaling on India's most reliable CPaaS platform.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-102"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              
              <a 
                href="tel:+918175950586"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-8 py-4 rounded-xl border border-white/15 backdrop-blur-md transition-all hover:scale-102"
              >
                <Phone className="w-4 h-4 text-[#00D2FF]" />
                <span>+91 81759 50586</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
