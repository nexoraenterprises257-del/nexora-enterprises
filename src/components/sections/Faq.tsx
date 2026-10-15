import { useState } from 'react';
import { HelpCircle, ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: 'What is Nexora Enterprise?',
    a: 'Nexora Enterprise is a carrier-grade CPaaS (Communications Platform as a Service) provider headquartered in Mumbai, India. Our platform lets businesses reach and engage customers across Bulk SMS, WhatsApp Business API, RCS, Voice, and IVR from a single unified API.'
  },
  {
    q: 'What is CPaaS and how does it help businesses in India?',
    a: 'CPaaS, short for Communications Platform as a Service, refers to cloud APIs that let businesses embed messaging, transactional OTPs, voice notifications, and conversational bots straight into their own software and CRMs — with zero telecom infrastructure to build or maintain.'
  },
  {
    q: 'Which communication channels does Nexora support?',
    a: 'Nexora supports A2P SMS (Transactional, Promotional, and DLT OTPs), official Meta WhatsApp Business API, RCS Business Messaging, Programmable Voice & OBD Broadcasts, and IVR solutions — all orchestrated through a single low-latency gateway.'
  },
  {
    q: 'Is Nexora an official WhatsApp Business API provider?',
    a: 'Yes. As an authorized Meta Solution Partner, Nexora delivers the official WhatsApp Business Cloud API with high throughput, interactive catalog commerce, green tick verification guidance, and template management.'
  },
  {
    q: 'What security, uptime, and compliance standards does Nexora meet?',
    a: 'Nexora holds ISO 27001 and SOC 2 Type II certifications, is 100% compliant with the Indian DPDP Act 2023, stores data locally in Tier-4 Mumbai data centers, and runs on carrier infrastructure backed by a guaranteed 99.99% uptime SLA.'
  },
  {
    q: 'Does Nexora help with TRAI DLT registration for SMS in India?',
    a: 'Yes. For enterprise SMS in India, our dedicated Mumbai operations team provides step-by-step assistance through TRAI DLT registration across all telecom operators (Jio, Airtel, Vi, BSNL), covering Principal Entity ID, Sender ID (headers), and content templates.'
  },
  {
    q: 'Across how many telecom circles and countries does Nexora operate?',
    a: 'Nexora provides direct Tier-1 SMPP routing across all 22 Indian telecom circles and reaches over 120 countries globally, powering billions of conversations annually for 5,000+ businesses.'
  },
  {
    q: 'How do I get started with Nexora?',
    a: 'You can submit an inquiry through our Contact page or speak directly with our telecom engineers at +91 81759 50586. Our onboarding team activates your API credentials and assists with DLT and WhatsApp approvals in under 24 hours.'
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 bg-[#030712] relative border-t border-white/10 text-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00F5FF]/5 blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#00F5FF] text-xs font-bold uppercase tracking-widest mb-5 backdrop-blur-md">
            <HelpCircle className="w-3.5 h-3.5 text-[#00F5FF]" />
            <span>FAQ</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-4 tracking-tight text-white">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            The questions we hear most — how the Nexora platform works, and how our carrier-grade CPaaS infrastructure keeps customer conversations moving across every channel.
          </p>
        </div>

        {/* Clean Accordion */}
        <div className="divide-y divide-white/10 border border-white/10 rounded-[28px] bg-white/[0.02] backdrop-blur-2xl overflow-hidden shadow-2xl">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q} className="transition-colors">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 md:px-8 py-5 text-left text-base sm:text-lg font-bold text-white hover:text-[#00F5FF] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-[#00F5FF] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 md:px-8 pb-6 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                    <p>{faq.a}</p>
                    {i === 0 && (
                      <Link
                        to="/products/whatsapp"
                        className="mt-3 inline-flex items-center gap-1.5 text-[#00F5FF] font-bold hover:underline text-sm transition-colors"
                      >
                        <span>Explore the platform</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                    {i === 5 && (
                      <Link
                        to="/products/bulk-sms"
                        className="mt-3 inline-flex items-center gap-1.5 text-[#00F5FF] font-bold hover:underline text-sm transition-colors"
                      >
                        <span>Read DLT registration guide</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                    {i === 7 && (
                      <Link
                        to="/contact"
                        className="mt-3 inline-flex items-center gap-1.5 text-[#00F5FF] font-bold hover:underline text-sm transition-colors"
                      >
                        <span>Talk to our team</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
