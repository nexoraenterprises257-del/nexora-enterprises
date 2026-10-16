import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export function Terms() {
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
            <FileText className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Nexora Enterprise Terms & Conditions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#0A0F1C] mb-4 tracking-tight">
            Terms & <span className="text-logo-gradient">Conditions</span>
          </h1>
          <p className="text-slate-500 text-sm font-medium">Last Updated: July 18, 2026</p>
        </motion.div>

        <div className="space-y-8 leading-relaxed font-normal">
          <section className="fc-card p-8 md:p-10">
            <h2 className="text-2xl font-black text-[#0A0F1C] mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms and Conditions constitute a legally binding agreement between you and Nexora Enterprise ("we", "our", "us") governing your access to and use of our website, carrier gateways, SMPP binds, and enterprise communication APIs. By accessing or using our services, you agree to be bound by these Terms and Indian Telecom Regulations.
            </p>
          </section>

          <section className="fc-card p-8 md:p-10">
            <h2 className="text-2xl font-black text-[#0A0F1C] mb-4">2. Regulatory & DLT Compliance</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              All clients utilizing Bulk SMS, WhatsApp Business API, RCS, or Voice broadcast solutions must maintain active Principal Entity registration on the TRAI Distributed Ledger Technology (DLT) platform.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Header registrations and consent templates must be pre-approved by licensed Indian telecom operators.</li>
              <li>Promotional communications may only be transmitted to non-DND numbers between 10:00 AM and 9:00 PM IST in accordance with Telecom Commercial Communications Customer Preference Regulations (TCCCPR).</li>
              <li>Transmission of unsolicited commercial communications (spam), phishing, or defamatory content results in immediate account suspension.</li>
            </ul>
          </section>

          <section className="fc-card p-8 md:p-10">
            <h2 className="text-2xl font-black text-[#0A0F1C] mb-4">3. Service Availability & SLA</h2>
            <p className="text-slate-600 leading-relaxed">
              Nexora guarantees a 99.99% monthly network uptime SLA for enterprise tier accounts. Scheduled maintenance windows will be communicated at least 48 hours in advance through our Mumbai Network Operations Center (NOC).
            </p>
          </section>

          <section className="fc-card p-8 md:p-10">
            <h2 className="text-2xl font-black text-[#0A0F1C] mb-4">4. Governing Law & Jurisdiction</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of the Republic of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra.
            </p>
          </section>

          <section className="fc-card p-8 md:p-10">
            <h2 className="text-2xl font-black text-[#0A0F1C] mb-4">5. Contact Support</h2>
            <p className="text-slate-600 leading-relaxed">
              For legal inquiries, contracts, or master service level agreements (MSAs), please contact:
            </p>
            <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
              <strong>Nexora Enterprise Legal Operations</strong><br />
              Email: info@nexoracpaas.in<br />
              Phone: +91 81759 50586<br />
              Registered Office: Shop No. 44 Oshiwara Police Station Rd, Mhada Colony, Andheri West, Mumbai, Maharashtra 400102
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
