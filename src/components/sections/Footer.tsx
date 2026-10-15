import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { BrandLogo } from '../ui/BrandLogo';
import { MetaBadge, IsoBadge, Soc2Badge, TraiBadge } from '../ui/TrustBadges';

export function Footer() {
  return (
    <footer id="footer" className="bg-[#FFFFFF] border-t border-slate-200 text-slate-800 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl pt-14 pb-8">
        
        {/* 4 Main Balanced Columns (Original Clean Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-10">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col items-start pr-0 lg:pr-4">
            <Link to="/" aria-label="Nexora Enterprise" className="mb-4">
              <BrandLogo size="md" theme="light" />
            </Link>
            <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed mb-4 max-w-sm">
              India's intelligent CPaaS platform powering enterprise WhatsApp API, RCS, SMS, and Voice across direct carrier routes.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-[11px] font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>24x7 Mumbai NOC • 99.99% Carrier SLA</span>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" /> PRODUCTS
            </h4>
            <ul className="space-y-3 text-[13.5px] text-slate-600 font-medium">
              <li>
                <Link to="/products/whatsapp" className="hover:text-[#2563EB] transition-colors">
                  WhatsApp Business API
                </Link>
              </li>
              <li>
                <Link to="/products/bulk-sms" className="hover:text-[#2563EB] transition-colors">
                  Bulk SMS (TRAI DLT)
                </Link>
              </li>
              <li>
                <Link to="/products/rcs" className="hover:text-[#2563EB] transition-colors">
                  RCS Business Messaging
                </Link>
              </li>
              <li>
                <Link to="/products/voice" className="hover:text-[#2563EB] transition-colors">
                  Voice & Cloud Telephony
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> COMPANY
            </h4>
            <ul className="space-y-3 text-[13.5px] text-slate-600 font-medium">
              <li>
                <Link to="/about" className="hover:text-[#2563EB] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/developers" className="hover:text-[#2563EB] transition-colors">
                  Developers & APIs
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#2563EB] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#2563EB] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" /> CONTACT
            </h4>
            <ul className="space-y-3 text-[13.5px]">
              <li>
                <a href="tel:+918175950586" className="text-slate-900 font-bold hover:text-[#2563EB] transition-colors flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                  <span>+91 81759 50586</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@nexoraenterprise.in" className="text-slate-600 hover:text-[#2563EB] font-medium transition-colors flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                  <span>info@nexoraenterprise.in</span>
                </a>
              </li>
              <li className="text-slate-600 font-medium flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />
                <span>Andheri West, Mumbai, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Enterprise Certifications & Carrier Governance Strip */}
        <div className="pt-6 pb-6 border-t border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-700">
            <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 text-center sm:text-left">
              ENTERPRISE CERTIFICATIONS & CARRIER GOVERNANCE
            </span>
          </div>

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto">
            <MetaBadge />
            <IsoBadge />
            <Soc2Badge />
            <TraiBadge />
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Nexora Enterprise. Regulated under Indian Telecom & TRAI Guidelines.</p>
          <div className="flex items-center gap-4 font-medium">
            <Link to="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <span className="text-slate-300">•</span>
            <Link to="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
            <span className="text-slate-300">•</span>
            <Link to="/contact" className="hover:text-slate-900 transition-colors">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
