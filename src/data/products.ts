export interface ProductSpec {
  label: string;
  value: string;
  desc: string;
}

export interface ProductFaq {
  q: string;
  a: string;
}

export interface ProductItem {
  title: string;
  subtitle: string;
  description: string;
  features: { title: string; desc: string }[];
  specs: ProductSpec[];
  useCases: { title: string; desc: string }[];
  faqs: ProductFaq[];
  cta: string;
  ctaSub: string;
}

export const productData: Record<string, ProductItem> = {
  bulkSms: {
    title: 'Bulk SMS (TRAI DLT)',
    subtitle: 'Sub-400ms High-Delivery Enterprise SMS Gateway',
    description: 'Direct carrier-grade SMS infrastructure connected across Jio, Airtel, Vodafone Idea, and BSNL. Engineered for critical two-factor authentication, high-throughput transactional alerts, and automated TRAI DLT scrubbing across all 22 Indian telecom circles.',
    features: [
      { title: 'Sub-400ms OTP Latency', desc: 'Dedicated priority tunnels with sub-400ms delivery SLAs for banking and FinTech OTPs.' },
      { title: 'Automated DLT Template Scrubbing', desc: 'Real-time validation against approved Principal Entity (PE) headers and templates with zero manual delays.' },
      { title: 'Direct Telecom Carrier Mesh', desc: 'Direct SMPP 3.4 binds to Tier-1 telcos (Jio, Airtel, Vi, BSNL) with intelligent dynamic failover.' },
      { title: 'Live Handset Delivery Reports', desc: 'Granular handset-level DLR callbacks, network error codes, and comprehensive audit logs.' },
      { title: '10,000+ TPS Scalability', desc: 'Elastic multi-node queues capable of bursting millions of messages during flash sales and peak events.' },
      { title: 'Indian Data Sovereignty (DPDP)', desc: '100% of SMS payloads processed strictly within Tier-4 Mumbai data centers under Indian law.' }
    ],
    specs: [
      { label: 'Max Throughput', value: '10,000+ TPS', desc: 'Burst capacity across direct carrier binds' },
      { label: 'Avg OTP Latency', value: '< 400ms', desc: 'Dedicated priority delivery routes' },
      { label: 'Regulatory Compliance', value: 'TRAI DLT 2.0', desc: 'Automated header & consent scrubbing' },
      { label: 'Platform Availability', value: '99.99% SLA', desc: 'Multi-telco redundant carrier routing' }
    ],
    useCases: [
      { title: 'Banking & FinTech 2FA', desc: 'Time-critical login authentications, transaction authorization OTPs, and debit/credit card alerts.' },
      { title: 'E-Commerce Delivery Updates', desc: 'Automated dispatch alerts, out-for-delivery notifications, and cash-on-delivery confirmations.' },
      { title: 'Healthcare & Appointments', desc: 'Doctor appointment reminders, diagnostic report readiness notifications, and hospital billing alerts.' },
      { title: 'Government & Utility Alerts', desc: 'Power outage notifications, municipal tax payment reminders, and citizen service updates.' }
    ],
    faqs: [
      {
        q: 'What are the TRAI DLT registration requirements?',
        a: 'As per TRAI regulations, all businesses sending commercial SMS in India must register as a Principal Entity (PE) on telecom DLT portals (like Jio, Airtel, or Vi) and have approved Headers (Sender IDs) and Content Templates. Our compliance team assists you with end-to-end approval.'
      },
      {
        q: 'What is the difference between Promotional and Transactional SMS?',
        a: 'Transactional SMS (like OTPs and order updates) can be sent 24x7 to both DND and non-DND numbers with high priority. Promotional SMS can only be sent between 10:00 AM and 9:00 PM IST to non-DND opt-in subscribers.'
      },
      {
        q: 'How does automated fallback work if one carrier experiences downtime?',
        a: 'Nexora maintains concurrent direct binds with all major Indian telecom operators. If a carrier’s route latency exceeds 1.5 seconds or delivery fails, traffic instantly shifts to alternative carrier routes with zero message drops.'
      }
    ],
    cta: 'Ready to Scale Your SMS Delivery?',
    ctaSub: 'Deploy carrier-grade SMS APIs in minutes with direct Mumbai NOC support and volume pricing.'
  },

  whatsapp: {
    title: 'WhatsApp Business API',
    subtitle: 'Official Meta Business Solution Provider (BSP)',
    description: 'Turn customer conversations into revenue with official Meta BSP infrastructure. Deploy verified green tick WhatsApp numbers, multi-agent customer support inboxes, dynamic interactive product catalogs, and conversational AI chatbots.',
    features: [
      { title: 'Official Meta BSP Integration', desc: 'Direct Tier-1 connection to Meta Cloud API with enterprise rate limits and highest tier messaging throughput.' },
      { title: 'Verified Green Tick Assistance', desc: 'Complete documentation and profile audit support to secure the official Meta Verified badge for brand authenticity.' },
      { title: 'Interactive Rich Templates', desc: 'Support for dynamic CTA buttons, quick replies, multi-product catalogs, and location sharing cards.' },
      { title: 'Conversational AI & Chatbots', desc: 'Intelligent automated flows for instant lead qualification, order tracking, and FAQ resolution.' },
      { title: 'Multi-Agent Support Routing', desc: 'Live agent forwarding with role-based routing, CRM tagging, and automated conversation handover.' },
      { title: 'Omnichannel SMS Fallback', desc: 'Automatically dispatch a high-speed SMS if the recipient does not have active data or WhatsApp installed.' }
    ],
    specs: [
      { label: 'Meta Partnership', value: 'Official BSP', desc: 'Direct Meta Cloud API partnership' },
      { label: 'Session Window', value: '24-Hour Active', desc: 'Customer care window with freeform chat' },
      { label: 'Media Support', value: 'Catalog & Video', desc: 'Rich product catalogs & dynamic buttons' },
      { label: 'CRM Webhooks', value: '< 25ms Sync', desc: 'Instant triggers to Zoho, Salesforce & APIs' }
    ],
    useCases: [
      { title: 'Commerce & Instant Checkout', desc: 'Share interactive WhatsApp catalogs, allow shoppers to browse items, and complete orders via integrated payment links.' },
      { title: '24x7 Automated Customer Support', desc: 'Answer repetitive queries, check warranty status, and generate support tickets with conversational AI.' },
      { title: 'Banking & Insurance Services', desc: 'Instant account balance queries, policy renewal reminders, claim status tracking, and statement downloads.' },
      { title: 'Travel & Hospitality Itineraries', desc: 'Send digital boarding passes, flight status updates, hotel booking vouchers, and room service menus.' }
    ],
    faqs: [
      {
        q: 'How can we get the Official Meta Green Tick verification?',
        a: 'Meta awards the Green Tick badge to notable brands with established media presence and high message volumes. We guide your team through the entire submission, business manager verification, and review process.'
      },
      {
        q: 'Can we integrate the WhatsApp API with our existing CRM?',
        a: 'Yes. Nexora provides robust REST APIs and webhooks that easily connect with Salesforce, Zoho, LeadSquared, Freshdesk, HubSpot, or any custom proprietary database.'
      },
      {
        q: 'How are WhatsApp Business conversation charges calculated?',
        a: 'Meta charges per 24-hour conversation window based on 4 distinct categories: Marketing, Utility, Authentication (OTP), and Service (user-initiated support). We provide transparent pass-through pricing with zero hidden surcharges.'
      }
    ],
    cta: 'Ready to Power Conversations on WhatsApp?',
    ctaSub: 'Launch your official WhatsApp Business API with verified sender branding and direct Meta BSP routing.'
  },

  rcs: {
    title: 'RCS Business Messaging',
    subtitle: 'Next-Generation Interactive Mobile Messaging',
    description: 'Upgrade standard SMS into rich, branded app-like experiences natively in the Android default messaging inbox. Deliver verified brand headers, interactive dynamic carousels, action chips, and 1-tap copy OTP actions without requiring users to download an app.',
    features: [
      { title: 'Google RBM Verified Sender', desc: 'Display your full brand logo, verified company name, brand colors, and official verification badge directly in Android Messages.' },
      { title: 'Interactive Dynamic Carousels', desc: 'Present multi-card carousels with high-definition imagery, titles, pricing, and standalone call-to-action buttons.' },
      { title: '1-Tap Action Chips', desc: 'Suggested reply chips, click-to-dial buttons, Google Maps location viewers, and calendar event additions.' },
      { title: '1-Tap OTP Copy', desc: 'Rich verification cards featuring a dedicated Copy OTP action chip that boosts authentication conversion by over 35%.' },
      { title: 'Automated Carrier SMS Fallback', desc: 'Intelligent device inspection—if an end-user has an older non-RCS device or iOS, messages seamlessly deliver as SMS.' },
      { title: 'Rich Analytical Telemetry', desc: 'Gain insights with verified read receipts, button tap analytics, carousel swipe counts, and user interaction rates.' }
    ],
    specs: [
      { label: 'Brand Security', value: 'Google Verified', desc: 'Cryptographically signed brand certificate' },
      { label: 'Carrier Mesh', value: 'Jio, Airtel, Vi', desc: 'Native Google Jibe infrastructure in India' },
      { label: 'Handset Support', value: 'Android 8.0+', desc: 'Over 85% of active Indian smartphones' },
      { label: 'Fallback Engine', value: 'Zero-Delay SMS', desc: 'Instant automatic failover on data offline' }
    ],
    useCases: [
      { title: 'Interactive Product Showcases', desc: 'Retail brands can launch interactive seasonal lookbooks where customers can view products and tap Buy Now inside their inbox.' },
      { title: 'Flight & Transit Notifications', desc: 'Airlines deliver rich boarding passes complete with gate change chips, interactive seat maps, and baggage claim carousels.' },
      { title: 'Banking & Loan Approvals', desc: 'Financial institutions send personalized loan pre-approvals with clickable Accept Offer and Calculate EMI chips.' },
      { title: 'Rich Verification & 2FA', desc: 'Replace boring alphanumeric text with branded, verified OTP security cards with 1-tap Copy Code functionality.' }
    ],
    faqs: [
      {
        q: 'What happens if a recipient phone does not support RCS?',
        a: 'Our platform automatically detects handset compatibility in real time. If a user does not have RCS active (such as on iOS or older devices), the message is instantly routed as an approved TRAI DLT SMS with zero delay.'
      },
      {
        q: 'Does the customer need to install a special app to receive RCS?',
        a: 'No. RCS delivers directly into the pre-installed Google Messages app on Android smartphones, which is the default messaging app on over 85% of Android devices in India.'
      },
      {
        q: 'What are the branding requirements for Google RBM verification?',
        a: 'You will need your corporate domain, high-resolution square brand logo, brand hex color code, and privacy policy URL. Our telecom team manages the complete Google verification process.'
      }
    ],
    cta: 'Ready to Supercharge Your Mobile Inbox?',
    ctaSub: 'Deliver interactive, verified brand experiences with Nexora enterprise RCS gateway.'
  },

  voice: {
    title: 'Voice Solutions & OBD',
    subtitle: 'Pan-India Outbound Dialer & Automated Voice Broadcast',
    description: 'Enterprise-grade cloud telephony and automated Outbound Dialers (OBD) built for massive scale across all 22 Indian telecom circles. Broadcast pre-recorded voice alerts, conduct multi-lingual surveys, enable call masking, and trigger automated click-to-call flows.',
    features: [
      { title: 'High-Capacity Outbound Dialer (OBD)', desc: 'Blast hundreds of thousands of simultaneous voice calls with multi-channel PRI lines and SIP trunking.' },
      { title: 'Multi-Lingual Audio Support', desc: 'Play dynamic Text-to-Speech (TTS) or pre-recorded audio files across Hindi, English, and regional Indian languages.' },
      { title: 'Intelligent Retry Logic', desc: 'Automated multi-attempt dialers with configurable retry windows if a subscriber is busy, unanswered, or out of coverage.' },
      { title: 'Real-Time DTMF Input Capture', desc: 'Gather instant customer inputs (e.g. Press 1 to confirm, 2 to reschedule) with millisecond webhook sync.' },
      { title: 'Call Masking & Privacy', desc: 'Protect customer and delivery agent privacy by bridging calls through masked virtual numbers.' },
      { title: 'Detailed Call Records (CDR)', desc: 'Download pulse-level billing, call duration logs, listening percentages, and operator response codes.' }
    ],
    specs: [
      { label: 'Voice Concurrency', value: '10,000+ Lines', desc: 'Simultaneous PRI & SIP trunk capacity' },
      { label: 'Pulse Billing', value: 'Configurable', desc: 'TRAI compliant 30s/60s pulse options' },
      { label: 'Telecom Circles', value: 'All 22 Circles', desc: 'Direct interconnects with Indian telcos' },
      { label: 'API Response', value: '< 20ms Dispatch', desc: 'RESTful call origination triggers' }
    ],
    useCases: [
      { title: 'Critical Emergency & Service Alerts', desc: 'Broadcast urgent municipal announcements, banking maintenance downtime, or critical service notifications.' },
      { title: 'Automated Payment & EMI Reminders', desc: 'Trigger personalized voice calls with outstanding balance information and 1-tap payment link SMS dispatch.' },
      { title: 'Delivery Confirmation & COD Verification', desc: 'E-commerce drivers trigger automated voice calls to confirm customer availability before dispatching parcels.' },
      { title: 'Lead Verification & Click-to-Call', desc: 'Connect prospective website leads with available sales representatives within 5 seconds of form submission.' }
    ],
    faqs: [
      {
        q: 'Are promotional voice broadcasts permitted under TRAI regulations?',
        a: 'Yes, however promotional voice calls can only be transmitted between 10:00 AM and 9:00 PM IST to non-DND numbers. Transactional service calls (like emergency alerts or OTP verification) can be transmitted 24x7.'
      },
      {
        q: 'Can we capture customer responses during the call?',
        a: 'Yes. Our voice platform supports dual-tone multi-frequency (DTMF) keypress capture. When a caller presses a key on their keypad, our webhook sends the response to your server in real time.'
      },
      {
        q: 'What audio formats are supported for voice broadcasts?',
        a: 'We support standard WAV (8kHz, 16-bit Mono, PCM) and MP3 formats, as well as AI-powered multi-lingual Text-to-Speech (TTS) engines for dynamic personalization.'
      }
    ],
    cta: 'Ready to Scale Your Enterprise Voice Outreach?',
    ctaSub: 'Connect with millions of customers across India using high-capacity voice broadcasting and intelligent dialers.'
  },

  ivr: {
    title: 'Smart IVR Systems',
    subtitle: 'Multi-Level Cloud Telephony & Intent-Based Routing',
    description: 'Automate inbound customer inquiries and streamline call distribution with intelligent multi-level Interactive Voice Response (IVR). Provide seamless self-service menus in regional languages, connect customers to the right department, and route to remote agents.',
    features: [
      { title: 'Drag-and-Drop IVR Flow Builder', desc: 'Visual logic designer to construct complex multi-branch call trees, office hours routing, and holiday schedules.' },
      { title: 'Multi-Lingual Regional Menus', desc: 'Welcome customers with automated voice prompts in Hindi, English, Tamil, Telugu, Marathi, and regional languages.' },
      { title: 'Skill-Based Agent Forwarding', desc: 'Intelligently forward incoming calls to agents based on language proficiency, department, or customer value tier.' },
      { title: 'Virtual Toll-Free & DID Numbers', desc: 'Provision dedicated 1800 Toll-Free numbers or 10-digit virtual Indian landline/mobile DIDs in under 24 hours.' },
      { title: 'Call Recording & Quality Auditing', desc: '100% cloud-stored call audio recordings with bank-grade encryption and supervisor monitoring tools.' },
      { title: 'Real-Time CRM & Helpdesk Sync', desc: 'Instant caller ID popups in Zoho, Salesforce, or LeadSquared with auto-generated call tickets and recordings.' }
    ],
    specs: [
      { label: 'Number Types', value: '1800 Toll-Free', desc: 'Pan-India virtual business numbers' },
      { label: 'Agent Routing', value: 'Unlimited Lines', desc: 'Parallel ring, sequential, or sticky agent' },
      { label: 'Audio Encryption', value: 'AES-256 Cloud', desc: 'Secure Indian cloud storage with access logs' },
      { label: 'Uptime SLA', value: '99.99% Carrier', desc: 'Redundant telecom gateways across Mumbai' }
    ],
    useCases: [
      { title: 'Enterprise Customer Support Desks', desc: 'Route callers to technical support, billing inquiries, or executive escalations based on numeric keypad choices.' },
      { title: 'Automated Banking & Account Balances', desc: 'Allow banking customers to enter their account PIN to hear account balances and recent transactions automatically.' },
      { title: 'Order Status & Tracking Inquiries', desc: 'Callers enter their order ID to receive real-time shipping updates without speaking to an agent.' },
      { title: 'Multi-Branch Corporate Switchboards', desc: 'Direct callers to specific regional office branches or individual employee extensions across India.' }
    ],
    faqs: [
      {
        q: 'How quickly can we get an 1800 Toll-Free or Virtual DID number activated?',
        a: 'Once your standard KYC and business entity documentation is submitted, our telecom team typically provisions and activates your toll-free number within 24 to 48 hours.'
      },
      {
        q: 'Can our agents answer customer calls on their mobile phones?',
        a: 'Yes. Our cloud IVR forwards incoming calls directly to any agent’s mobile phone, landline, or WebRTC browser softphone, allowing remote teams to work from anywhere in India.'
      },
      {
        q: 'Does the IVR system support sticky agent routing?',
        a: 'Yes. If a customer calls back, the system can automatically recognize their phone number and route them directly to the agent who assisted them last.'
      }
    ],
    cta: 'Ready to Modernize Your Business Telephony?',
    ctaSub: 'Set up intelligent multi-level IVR with virtual 1800 toll-free numbers and automated agent routing.'
  },

  smpp: {
    title: 'SMPP Carrier Gateway',
    subtitle: 'High-Throughput SMPP 3.4 Direct Carrier Sockets',
    description: 'Direct carrier-grade Short Message Peer-to-Peer (SMPP) protocol infrastructure engineered for banks, telecom aggregators, and high-volume enterprises. Achieve sustained throughput of 10,000+ TPS with sub-10ms session binds, TLS encryption, and 24x7 Mumbai NOC supervision.',
    features: [
      { title: 'SMPP v3.4 & v5.0 Full Compliance', desc: 'Native support for TX (Transmitter), RX (Receiver), and TRX (Transceiver) asynchronous bind sessions.' },
      { title: 'Massive Throughput (10,000+ TPS)', desc: 'Dedicated enterprise socket pools capable of processing immense sustained messaging volumes without queuing.' },
      { title: 'Sub-10ms Gateway Response', desc: 'Low-latency carrier routing engineered for mission-critical OTPs, trading confirmations, and banking alerts.' },
      { title: 'Direct Carrier Binds (Jio, Airtel, Vi)', desc: 'Direct Tier-1 carrier interconnects across all Indian telecom circles with dynamic carrier fallback.' },
      { title: 'Custom DLR Delivery Recipes', desc: 'Real-time delivery receipt callbacks with granular error diagnostics (DLR message status, error code, timestamp).' },
      { title: 'Enterprise IP Whitelisting & TLS 1.3', desc: 'Strict perimeter security with dual-end IP whitelisting, VPN tunnels, and TLS 1.3 cryptographic protection.' }
    ],
    specs: [
      { label: 'Protocol Versions', value: 'SMPP v3.4 / v5.0', desc: 'Supports TX, RX, and TRX asynchronous modes' },
      { label: 'Throughput', value: '10,000+ TPS', desc: 'High-speed multi-socket connection pools' },
      { label: 'Security Layer', value: 'TLS 1.3 / IPsec', desc: 'Bank-grade secure socket layer and VPN' },
      { label: 'Bind Latency', value: '< 10ms', desc: 'Direct Mumbai datacenter peering' }
    ],
    useCases: [
      { title: 'Banking & Core Financial Systems', desc: 'Real-time core banking alerts, NEFT/RTGS transaction confirmations, and credit card fraud prevention alerts.' },
      { title: 'Stock Broking & Trading Platforms', desc: 'Sub-millisecond trade execution notifications, margin call warnings, and market order status updates.' },
      { title: 'Global CPaaS & Telecom Resellers', desc: 'Aggregators and messaging brokers requiring robust, scalable carrier endpoints for white-label routing.' },
      { title: 'Government & Utility Dispatchers', desc: 'National identity verification, election announcements, and critical emergency broadcasting services.' }
    ],
    faqs: [
      {
        q: 'What SMPP bind modes are supported?',
        a: 'We support all standard SMPP modes: Transmitter (TX) for sending messages, Receiver (RX) for receiving delivery receipts and inbound messages, and Transceiver (TRX) for simultaneous bidirectional traffic.'
      },
      {
        q: 'Can we establish dedicated IPsec VPN tunnels for our SMPP sessions?',
        a: 'Yes. For banks and regulated financial institutions, we support dedicated site-to-site IPsec VPN tunnels directly terminating in our Tier-4 Mumbai data center.'
      },
      {
        q: 'What are the testing and sandbox onboarding procedures?',
        a: 'Our engineering team provisions testing credentials within 2 hours. You can test bind establishment, submit_sm requests, and deliver_sm receipt callbacks in our staging sandbox before moving live.'
      }
    ],
    cta: 'Ready to Connect Direct Carrier SMPP Sockets?',
    ctaSub: 'Request test credentials and establish carrier-grade SMPP binds with dedicated Mumbai NOC engineering support.'
  }
};
