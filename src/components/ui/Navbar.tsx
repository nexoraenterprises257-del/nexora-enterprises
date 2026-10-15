import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageSquare, Phone, MessagesSquare, Code, ArrowRight, Menu, X, Bot, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const products = [
    {
      name: 'WhatsApp Business API',
      shortName: 'WhatsApp API',
      tag: 'Meta BSP Partner',
      href: '/products/whatsapp',
      icon: MessagesSquare,
      desc: 'Official Meta BSP • Catalogs, chatbots & priority routing',
      color: 'text-[#25D366]',
      bg: 'bg-[#25D366]/10'
    },
    {
      name: 'Bulk SMS (TRAI DLT)',
      shortName: 'Bulk SMS',
      tag: 'TRAI DLT Routes',
      href: '/products/bulk-sms',
      icon: MessageSquare,
      desc: 'Sub-400ms high-speed OTP & transaction routes across Jio, Airtel & Vi',
      color: 'text-[#2563EB]',
      bg: 'bg-[#2563EB]/10'
    },
    {
      name: 'RCS Business Messaging',
      shortName: 'RCS Messaging',
      tag: 'Rich Verified Media',
      href: '/products/rcs',
      icon: Sparkles,
      desc: 'Verified sender cards & interactive dynamic media carousels',
      color: 'text-[#9333EA]',
      bg: 'bg-[#9333EA]/10'
    },
    {
      name: 'Voice Solutions & OBD',
      shortName: 'Voice & OBD',
      tag: 'Outbound Dialer',
      href: '/products/voice',
      icon: Phone,
      desc: 'Pan-India outbound dialer, automated voice broadcast & call masking',
      color: 'text-[#0284C7]',
      bg: 'bg-[#0284C7]/10'
    },
    {
      name: 'Smart IVR Systems',
      shortName: 'Smart IVR',
      tag: 'Smart Telephony',
      href: '/products/ivr',
      icon: Bot,
      desc: 'Multi-lingual automated telephony & intent routing with agent forwarding',
      color: 'text-[#D946EF]',
      bg: 'bg-[#D946EF]/10'
    },
    {
      name: 'SMPP Carrier Gateway',
      shortName: 'SMPP Gateway',
      tag: 'Direct Telco Binds',
      href: '/products/smpp',
      icon: Code,
      desc: 'Direct carrier binds with Jio, Airtel, Vi & BSNL for massive throughput',
      color: 'text-[#4F46E5]',
      bg: 'bg-[#4F46E5]/10'
    },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] py-4' 
          : 'bg-transparent py-4 lg:py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <Link to="/" className="group flex items-center" aria-label="Nexora Home">
          <BrandLogo size="md" />
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          
          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button 
              className={`flex items-center gap-1.5 text-sm font-bold tracking-wide transition-colors py-1 cursor-pointer ${
                isProductsOpen || location.pathname.includes('/products') 
                  ? 'text-[#2563EB]' 
                  : 'text-slate-700 hover:text-[#0A0F1C]'
              }`}
            >
              <span>Products</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isProductsOpen ? 'rotate-180 text-[#2563EB]' : 'text-slate-400'}`} />
            </button>

            <AnimatePresence>
              {isProductsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.16 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[640px]"
                >
                  <div className="bg-white border border-slate-200/80 rounded-2xl p-3 shadow-xl shadow-slate-200/50 grid grid-cols-2 gap-2">
                    {products.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                          <item.icon className={`w-5 h-5 ${item.color}`} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-[#0A0F1C] group-hover/item:text-[#2563EB] transition-colors">
                            {item.name}
                          </span>
                          <span className="text-xs text-slate-500 leading-snug mt-0.5">
                            {item.desc}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            to="/about" 
            className={`text-sm font-bold tracking-wide transition-colors py-1 ${
              location.pathname === '/about' ? 'text-[#2563EB]' : 'text-slate-700 hover:text-[#0A0F1C]'
            }`}
          >
            About Us
          </Link>

          <Link 
            to="/developers" 
            className={`text-sm font-bold tracking-wide transition-colors py-1 ${
              location.pathname === '/developers' ? 'text-[#2563EB]' : 'text-slate-700 hover:text-[#0A0F1C]'
            }`}
          >
            Developers & APIs
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700">
            <span>🇮🇳</span>
            <span>India</span>
          </div>

          <Link
            to="/contact"
            className="btn-primary"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer (Full-Screen Overlay below Header) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden absolute top-full left-0 w-full h-[calc(100dvh-100%)] bg-white border-t border-slate-100 flex flex-col justify-between overflow-y-auto px-5 py-6 shadow-2xl z-50"
          >
            <div className="flex flex-col gap-5 flex-1">
              {/* Primary Nav Links */}
              <div className="grid grid-cols-2 gap-2 pb-4 border-b border-slate-100">
                <Link 
                  to="/about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/60 font-bold text-sm text-slate-800 hover:bg-slate-100 active:scale-[0.98] transition-all"
                >
                  <span>About Us</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
                <Link 
                  to="/developers" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/60 font-bold text-sm text-slate-800 hover:bg-slate-100 active:scale-[0.98] transition-all"
                >
                  <span>Developers</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              </div>

              {/* Products Section Header */}
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between px-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Products & Solutions</span>
                  <span className="text-[10px] font-bold text-[#2563EB] bg-[#2563EB]/10 px-2.5 py-0.5 rounded-full">6 Channels</span>
                </div>

                {/* 2-Column Product Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {products.map((p) => {
                    const Icon = p.icon;
                    return (
                      <Link 
                        key={p.name} 
                        to={p.href} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex flex-col p-3 rounded-xl border border-slate-200/80 bg-white hover:border-[#2563EB]/40 hover:bg-blue-50/20 active:scale-[0.98] transition-all shadow-sm group/item"
                      >
                        <div className={`w-8 h-8 rounded-lg ${p.bg} flex items-center justify-center shrink-0 mb-2`}>
                          <Icon className={`w-4 h-4 ${p.color}`} />
                        </div>
                        <span className="text-xs font-bold text-slate-900 group-hover/item:text-[#2563EB] transition-colors leading-tight">
                          {p.shortName || p.name}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium mt-0.5 line-clamp-1">
                          {p.tag}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Actions & Trust */}
            <div className="pt-5 pb-3 flex flex-col gap-2.5 border-t border-slate-100 mt-4">
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-full text-center text-xs py-3.5 rounded-xl justify-center font-bold shadow-lg shadow-[#2563EB]/20 active:scale-[0.98] transition-all"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a 
                href="tel:+918175950586"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-700 hover:bg-slate-100 active:scale-[0.98] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Call +91 81759 50586</span>
              </a>

              <div className="flex items-center justify-center gap-2 text-[10px] font-semibold text-slate-400 pt-1 text-center">
                <span>🇮🇳 Direct Carrier Mesh</span>
                <span>•</span>
                <span>TRAI DLT Compliant</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
