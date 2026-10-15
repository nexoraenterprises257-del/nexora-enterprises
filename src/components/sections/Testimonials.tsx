import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { transition } from '../../lib/animation';
import { Star, Sparkles, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Nexora completely transformed our digital presence. The 3D experiences they built increased our engagement by 400% in just two months.",
    author: "Sarah Jenkins",
    role: "CMO, TechFlow",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "Integrating their WhatsApp API solutions saved our support team hundreds of hours. It's not just tech, it's business transformation.",
    author: "David Chen",
    role: "Operations Director, Lumina",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "The visual quality and performance of their work is unmatched. They truly understand what a premium enterprise SaaS should look and feel like.",
    author: "Elena Rodriguez",
    role: "Founder, Zenith AI",
    image: "https://i.pravatar.cc/150?img=5"
  }
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section className="py-28 relative bg-[#070A17] overflow-hidden" ref={containerRef}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8B5CF6]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          style={{ y }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#8B5CF6] text-xs font-semibold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
            Trusted by the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#3B82F6] to-[#8B5CF6]">Visionaries</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto">
            See how high-growth businesses and enterprises scale with Nexora's communications stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={transition(index * 0.15)}
              className="bg-[#0E152E]/80 backdrop-blur-xl border border-white/[0.08] hover:border-[#00D2FF]/40 p-8 rounded-3xl relative flex flex-col justify-between h-full transition-all duration-300 hover:bg-[#121A38] shadow-[0_10px_30px_rgba(0,0,0,0.4)] group"
            >
              <div className="relative">
                <Quote className="w-10 h-10 text-[#00D2FF]/20 absolute -top-2 -left-2" />
                <div className="flex gap-1 mb-6 relative z-10 pl-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#00D2FF] text-[#00D2FF]" />
                  ))}
                </div>
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 relative z-10">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/[0.08]">
                <img 
                  src={item.image} 
                  alt={item.author} 
                  className="w-12 h-12 rounded-full border-2 border-[#00D2FF]/40 object-cover" 
                />
                <div>
                  <h4 className="text-white font-bold text-base">{item.author}</h4>
                  <p className="text-xs text-[#00D2FF] font-medium">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
