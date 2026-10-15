import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export function Privacy() {
  return (
    <div className="pt-36 pb-28 bg-white min-h-screen text-slate-900 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-100/40 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="badge-pill mb-5 inline-flex">
            <Shield className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Nexora Enterprise Privacy Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#0A0F1C] mb-4 tracking-tight">
            Your Privacy <span className="text-logo-gradient">Matters To Us.</span>
          </h1>
          <p className="text-slate-500 text-sm font-medium">Last Updated: July 18, 2026</p>
        </motion.div>

        <div className="space-y-8 leading-relaxed font-normal">
          <section className="fc-card p-8 md:p-10">
            <h2 className="text-2xl font-black text-[#0A0F1C] mb-4">Introduction</h2>
            <p className="text-slate-600 leading-relaxed font-normal">
              Nexora Enterprise ("we", "our", "us") respects your privacy and is committed to protecting your personal data in full compliance with the Digital Personal Data Protection (DPDP) Act of India and TRAI regulatory frameworks. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or utilize our enterprise CPaaS solutions.
            </p>
          </section>

          <section className="fc-card p-8 md:p-10">
            <h2 className="text-2xl font-black text-[#0A0F1C] mb-4">Information We Collect</h2>
            <p className="mb-4 text-slate-600">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Personal Identification Information: Name, email address, corporate phone number, company name, GSTIN, and job title.</li>
              <li>Telecom Metadata: Message delivery statuses, SMPP submission timestamps, and network bind logs required for TRAI regulatory compliance.</li>
              <li>Device Information: IP address, browser type, operating system, and secure session identifiers.</li>
              <li>Inquiry Data: Information provided through contact forms, onboarding documentation, or direct support requests.</li>
            </ul>
          </section>

          <section className="fc-card p-8 md:p-10">
            <h2 className="text-2xl font-black text-[#0A0F1C] mb-4">How We Use Your Information</h2>
            <p className="mb-4 text-slate-600">We use the collected information for verified business purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>To provision, maintain, and route enterprise communication channels across Indian telecom carriers.</li>
              <li>To complete TRAI DLT verification, Principal Entity registrations, and header scrubbing.</li>
              <li>To provide customer support and instant NOC incident resolution from our Mumbai headquarters.</li>
              <li>To prevent fraud, message spoofing, and regulatory non-compliance.</li>
              <li>To comply with statutory telecom directives, RBI compliance mandates, and Indian law.</li>
            </ul>
          </section>

          <section className="fc-card p-8 md:p-10">
            <h2 className="text-2xl font-black text-[#0A0F1C] mb-4">Data Localization & Security</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              All personal, corporate, and telecom message data is stored strictly within the sovereign territory of the Republic of India in certified Tier-4 Mumbai data centers. We maintain bank-grade encryption at rest (AES-256) and in transit (TLS 1.3), verified through independent ISO 27001 and SOC 2 Type II audits.
            </p>
          </section>

          <section className="fc-card p-8 md:p-10">
            <h2 className="text-2xl font-black text-[#0A0F1C] mb-4">Contact Privacy Team</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions or data principal requests regarding this policy, please reach out to our Mumbai data protection officer at <a href="mailto:info@nexoraenterprise.in" className="text-[#2563EB] hover:underline font-bold">info@nexoraenterprise.in</a> or write to:
            </p>
            <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
              <strong>Nexora Enterprise Legal & Compliance Desk</strong><br />
              Shop No. 44 Oshiwara Police Station Rd, Mhada Colony, Andheri West, Mumbai, Maharashtra 400102<br />
              Helpline: +91 81759 50586
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
