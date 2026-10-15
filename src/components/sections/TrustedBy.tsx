import { ShieldCheck, Activity } from 'lucide-react';

const brands = [
  { name: 'PhonePe', logo: '/brands/phonepe.png', height: 'h-6 sm:h-7' },
  { name: 'HDFC Bank', logo: '/brands/hdfc.svg', height: 'h-6 sm:h-7' },
  { name: 'Tata Digital', logo: '/brands/tata.svg', height: 'h-7 sm:h-8' },
  { name: 'ICICI Securities', logo: '/brands/icici.png', height: 'h-6 sm:h-7' },
  { name: 'OLA', logo: '/brands/ola.png', height: 'h-6 sm:h-7' },
  { name: 'PolicyBazaar', logo: '/brands/policybazaar.png', height: 'h-7 sm:h-8' },
  { name: 'Razorpay', logo: '/brands/razorpay.svg', height: 'h-6 sm:h-7' },
  { name: 'Paytm', logo: '/brands/paytm.svg', height: 'h-5 sm:h-6' },
  { name: 'Zomato', logo: '/brands/zomato.svg', height: 'h-6 sm:h-7' },
  { name: 'Swiggy', logo: '/brands/swiggy.svg', height: 'h-6 sm:h-7' },
  { name: 'Flipkart', logo: '/brands/flipkart.svg', height: 'h-6 sm:h-7' },
  { name: 'NSDL', logo: '/brands/nsdl.png', height: 'h-6 sm:h-7' },
  { name: 'EatSure', logo: '/brands/eatsure.png', height: 'h-6 sm:h-7' },
  { name: 'FirstCry', logo: '/brands/firstcry.png', height: 'h-6 sm:h-7' },
  { name: 'Dhan', logo: '/brands/dhan.png', height: 'h-6 sm:h-7' },
];

export function TrustedBy() {
  const marqueeList = [...brands, ...brands, ...brands];

  return (
    <section className="py-12 bg-[#F8FAFC] border-y border-slate-200/80 relative z-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        
        {/* Title */}
        <div className="flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs md:text-sm font-bold text-slate-600 uppercase tracking-wider sm:tracking-widest">
          <span className="w-6 sm:w-8 h-0.5 bg-[#2563EB] shrink-0" />
          <span>Trusted by 5,000+ High-Growth Enterprises Across India</span>
        </div>

        {/* Status Pills */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-700 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>99.99% SLA Uptime</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-700 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>DPDP & TRAI Compliant</span>
          </div>
        </div>

      </div>

      {/* Infinite Marquee Track with Soft Fading Masks */}
      <div className="overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex gap-4 md:gap-6 w-max items-center py-2 animate-marquee">
          {marqueeList.map((brand, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center px-6 py-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#2563EB]/40 hover:shadow-md transition-all group shrink-0 select-none min-w-[140px] h-16 cursor-default"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className={`${brand.height} w-auto object-contain filter grayscale group-hover:grayscale-0 opacity-75 group-hover:opacity-100 transition-all duration-300`} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
