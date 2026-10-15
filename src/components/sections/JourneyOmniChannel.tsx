import { motion } from 'motion/react';
import { transition } from '../../lib/animation';
import { MessagesSquare, MessageSquare, Phone, Server, Layers, ArrowRight, CheckCircle2, Sparkles, Send, ShieldCheck, Zap, Radio, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'whatsapp',
    num: '01',
    title: 'WhatsApp Business API',
    category: 'Conversational Commerce & Support',
    badge: 'Official Meta Solution Partner',
    desc: 'Transform customer engagement with official WhatsApp Business Cloud API. Automate verified transactional alerts, answer customer queries 24x7 with AI chatbots, and drive retail sales through interactive catalog commerce.',
    accentColor: '#00F5FF',
    glowBg: 'from-[#00F5FF]/10 to-transparent',
    borderColor: 'border-[#00F5FF]/30',
    features: [
      'Official Meta Green Tick Verification Guidance',
      'Interactive Catalogues, CTA & Quick-Reply Buttons',
      'Shared Multi-Agent Team Inbox with CRM Sync',
      'Automated Order Tracking, Invoices & Abandoned Cart Recovery',
      'Unlimited High-Throughput Cloud API Concurrency'
    ],
    mockup: {
      type: 'whatsapp',
      sender: 'NX-DELIVERY (Verified Business)',
      tag: 'Meta Cloud API v19.0',
      time: '12:44 PM • Mumbai NOC',
      message: 'Namaste Rahul! 📦 Your order #NX-88219 has been dispatched from Mumbai and will arrive today by 4:00 PM IST via BlueDart.',
      actionTitle: 'Track Live Delivery →',
      actionSub: 'Reply "1" for delivery instructions'
    },
    routeLink: '/products/whatsapp'
  },
  {
    id: 'sms',
    num: '02',
    title: 'Bulk SMS (Transactional & DLT OTP)',
    category: 'High-Throughput A2P Messaging',
    badge: 'Tier-1 Direct Carrier Interconnect',
    desc: 'Engineered for zero DLT latency and mission-critical reliability. Deliver banking 2FA OTPs, transactional receipts, and promotional campaigns across all 22 Indian telecom circles in under 400 milliseconds.',
    accentColor: '#3B82F6',
    glowBg: 'from-[#3B82F6]/10 to-transparent',
    borderColor: 'border-[#3B82F6]/30',
    features: [
      'Sub-400ms Banking OTP Delivery Guarantee',
      '100% Pre-Scrubbed TRAI DLT Template Clearance',
      'Direct SMPP 3.4 Binds to Jio, Airtel, Vi & BSNL',
      'Real-Time Webhook DLR Telemetry & Latency Reporting',
      'Automated Congestion Failover Across 4 Operators'
    ],
    mockup: {
      type: 'sms',
      sender: 'NX-NEXORA (DLT Entity 14015572910)',
      tag: 'TRAI Scrubbed Route',
      time: '12:45 PM • Direct SMPP',
      message: 'Your Nexora verification OTP is 582910. Valid for 10 minutes. Do not share this OTP with anyone for account security.',
      actionTitle: 'OTP auto-detected: 582910',
      actionSub: 'Dispatch Latency: 12.8ms | Circle: Maharashtra'
    },
    routeLink: '/products/bulk-sms'
  },
  {
    id: 'rcs',
    num: '03',
    title: 'RCS Business Messaging',
    category: 'Next-Generation Interactive Messaging',
    badge: 'Verified Google & Telecom Standard',
    desc: 'Upgrade standard SMS into interactive, branded app-like experiences without requiring the user to install any app. Native on all Android devices across Jio and Airtel networks with read receipts and payment cards.',
    accentColor: '#8B5CF6',
    glowBg: 'from-[#8B5CF6]/10 to-transparent',
    borderColor: 'border-[#8B5CF6]/30',
    features: [
      'Verified Enterprise Logo & Shield Badge',
      'High-Resolution Carousels, Video & Image Cards',
      'One-Tap Suggested Action Chips & Deep Links',
      'Real-Time Read Receipts & Dynamic Engagement Rates',
      'Direct Integration with Indian Payment Portals'
    ],
    mockup: {
      type: 'rcs',
      sender: 'Nexora Enterprise Commerce',
      tag: 'Google RCS Verified',
      time: '12:46 PM • Android Native',
      message: 'Special Enterprise Offer! Upgrade your communication gateway to Tier-1 SMPP routes and save 35% on pan-India messaging.',
      actionTitle: 'Claim 30-Day Free Sandbox →',
      actionSub: 'Verified by Google Telecom Network'
    },
    routeLink: '/products/rcs'
  },
  {
    id: 'voice',
    num: '04',
    title: 'Voice Solutions & OBD Broadcast',
    category: 'High-Capacity Outbound Calling',
    badge: 'Automated 50,000 Concurrent Calls/Min',
    desc: 'Automate mass communication with high-volume Outbound Dialers (OBD). Broadcast transactional audio alerts, payment reminders, and surveys with text-to-speech in 12+ Indian regional languages and interactive DTMF.',
    accentColor: '#EC4899',
    glowBg: 'from-[#EC4899]/10 to-transparent',
    borderColor: 'border-[#EC4899]/30',
    features: [
      'Massive 50,000+ Concurrent Call Capacity',
      'Text-to-Speech in Hindi, Tamil, Telugu, Marathi & 8+ Others',
      'Interactive DTMF Touch-Tone Feedback Capture',
      'Smart Answering Machine Detection (AMD)',
      'Live Call Duration & Pickup Ratio Analytics'
    ],
    mockup: {
      type: 'voice',
      sender: 'PRI Telecom Gateway BOM-01',
      tag: 'Active OBD Stream',
      time: '12:47 PM • Voice Trunk',
      message: '"Welcome to Nexora Enterprise. Your payment of ₹12,450 is confirmed. Press 1 for invoice on WhatsApp, Press 2 to talk to an executive."',
      actionTitle: 'Call Status: Connected (HD Audio)',
      actionSub: 'Speech Engine: Hindi & Indian English Neural Voice'
    },
    routeLink: '/products/voice'
  },
  {
    id: 'ivr',
    num: '05',
    title: 'Cloud IVR Systems',
    category: 'Intelligent Inbound Call Orchestration',
    badge: 'Visual Multi-Level Call Routing',
    desc: 'Replace legacy PBX boxes with intelligent cloud IVR trees. Direct incoming callers to the right department, route calls dynamically based on caller CRM data, and record interactions with zero hardware investment.',
    accentColor: '#10B981',
    glowBg: 'from-[#10B981]/10 to-transparent',
    borderColor: 'border-[#10B981]/30',
    features: [
      'Drag-and-Drop Visual IVR Menu Designer',
      'Intelligent Skill-Based Agent Forwarding',
      'Seamless Screen-Pop Sync with Zoho, Salesforce & LeadSquared',
      '24x7 High-Definition Call Recording Vault',
      'Automated After-Hours Voicemail-to-Email'
    ],
    mockup: {
      type: 'ivr',
      sender: 'Virtual Toll-Free 1800-NEXORA',
      tag: 'Cloud PBX Matrix',
      time: '12:48 PM • Inbound Queue',
      message: 'Incoming enterprise caller from Bangalore identified in CRM as Tier-1 Platinum Account. Auto-routed to Senior Telecom Engineer in 1.1s.',
      actionTitle: 'Routing Path: IVR -> Sales -> Executive',
      actionSub: 'Agent Call Active • Recording Saved'
    },
    routeLink: '/products/ivr'
  },
  {
    id: 'smpp',
    num: '06',
    title: 'Direct SMPP 3.4 Gateway',
    category: 'Carrier-Grade Infrastructure',
    badge: '20,000+ Transactions Per Second',
    desc: 'Dedicated SMPP protocol bindings engineered for banks, financial institutions, and telecom aggregators requiring sustained high-volume packet delivery with sub-millisecond queuing latency.',
    accentColor: '#06B6D4',
    glowBg: 'from-[#06B6D4]/10 to-transparent',
    borderColor: 'border-[#06B6D4]/30',
    features: [
      'Sustained 20,000+ TPS Throughput per Bind',
      'Direct Tier-1 Binds: Reliance Jio, Airtel, Vi & BSNL',
      'Mutual TLS Encryption & Static IP Whitelisting',
      'Multi-Session Bind Support (Transmitter, Receiver, Transceiver)',
      'Sub-Millisecond In-Memory Redis Queuing Engine'
    ],
    mockup: {
      type: 'smpp',
      sender: 'bind_transceiver_mumbai_01',
      tag: 'SMPP 3.4 Protocol',
      time: '12:49 PM • Fiber Backbone',
      message: 'Active SMPP session bound to Tier-4 Mumbai Data Center. Buffer: 0 msgs. Processing throughput: 19,450 msg/sec with 0 drops.',
      actionTitle: 'Carrier Bind: ESTABLISHED',
      actionSub: 'Operator: Jio 5G Core IMS • SLA: 99.99%'
    },
    routeLink: '/products/smpp'
  }
];

export function JourneyOmniChannel() {
  return (
    <section 
      id="omni-channel" 
      className="py-28 lg:py-36 relative overflow-hidden text-white"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Chapter Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#00F5FF]/30 text-[#00F5FF] text-xs font-mono font-bold tracking-wider uppercase mb-5 backdrop-blur-xl">
            <Sparkles className="w-3.5 h-3.5 text-[#00F5FF]" />
            <span>Chapter 03 // Complete Omni-Channel Suite</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5">
            Every Product Demonstrated <br />
            <span className="text-gradient">As You Scroll</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            No clicking needed. Simply scroll to experience how each communication channel functions in real-world Indian enterprise environments.
          </p>
        </div>

        {/* Sequential Zero-Click Scrollytelling Product Showcase */}
        <div className="space-y-28 lg:space-y-36">
          {products.map((prod, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={transition(0.2)}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                
                {/* Product Narrative Column (6 Cols) */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span 
                      className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10"
                      style={{ color: prod.accentColor }}
                    >
                      PRODUCT {prod.num}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {prod.category}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
                    {prod.title}
                  </h3>

                  <div className="inline-block px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 mb-6">
                    ⚡ {prod.badge}
                  </div>

                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal mb-8">
                    {prod.desc}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-mono uppercase text-slate-400 font-semibold block mb-2">
                      Key Architectural Capabilities:
                    </span>
                    {prod.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-sm text-slate-200">
                        <CheckCircle2 
                          className="w-4 h-4 shrink-0 mt-0.5" 
                          style={{ color: prod.accentColor }}
                        />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to={prod.routeLink}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl btn-cyan font-bold text-xs uppercase tracking-wider font-mono group"
                  >
                    <span>Deploy {prod.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>

                {/* Live Simulated Mockup Stage (6 Cols) */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-b from-[#090F22] to-[#040814] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl relative overflow-hidden group hover:border-[#00F5FF]/40 transition-all duration-300">
                    
                    {/* Atmospheric Glow in Card */}
                    <div 
                      className="absolute -top-12 -right-12 w-64 h-64 rounded-full blur-[100px] pointer-events-none opacity-30"
                      style={{ backgroundColor: prod.accentColor }}
                    />

                    {/* Mockup Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 font-mono text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-semibold">Active Telecom Channel</span>
                        <h4 className="text-white font-bold">{prod.mockup.sender}</h4>
                      </div>
                      <span 
                        className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10"
                        style={{ color: prod.accentColor }}
                      >
                        {prod.mockup.tag}
                      </span>
                    </div>

                    {/* Simulated Message Dialogue Card */}
                    <div className="p-5 md:p-6 rounded-2xl bg-white/[0.035] border border-white/10 mb-6 relative">
                      <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-slate-400">
                        <span style={{ color: prod.accentColor }} className="font-bold">INCOMING TELEMETRY</span>
                        <span>{prod.mockup.time}</span>
                      </div>
                      
                      <p className="text-sm md:text-base text-slate-100 leading-relaxed font-normal mb-5">
                        {prod.mockup.message}
                      </p>

                      <div 
                        className="p-3 rounded-xl border text-center text-xs font-bold font-mono tracking-wide"
                        style={{ 
                          backgroundColor: `${prod.accentColor}15`, 
                          borderColor: `${prod.accentColor}35`,
                          color: prod.accentColor 
                        }}
                      >
                        {prod.mockup.actionTitle}
                      </div>

                      <div className="mt-2 text-center text-[10px] font-mono text-slate-400">
                        {prod.mockup.actionSub}
                      </div>
                    </div>

                    {/* Telecom Route SLA Footer */}
                    <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-xs font-mono">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">Route Deliverability</span>
                        <span className="text-emerald-400 font-bold">99.99% Guaranteed</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">TRAI Compliance</span>
                        <span className="text-white font-bold">100% Pre-Scrubbed</span>
                      </div>
                    </div>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
