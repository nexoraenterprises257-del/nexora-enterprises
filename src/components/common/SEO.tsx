import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface RouteSEO {
  title: string;
  description: string;
  keywords: string;
}

const SEO_DATA: Record<string, RouteSEO> = {
  '/': {
    title: "Nexora Enterprise | India's Intelligent CPaaS & Carrier Communications",
    description: "Powering 10B+ verified conversations across India. Deploy WhatsApp Business API, Bulk SMS (TRAI DLT), RCS, Voice, and SMPP on direct carrier infrastructure with 99.99% SLA.",
    keywords: "cpaas india, bulk sms api, whatsapp business api bsp, rcs messaging india, trai dlt compliant, smpp gateway, voice obd dialer, nexora enterprise"
  },
  '/products/whatsapp': {
    title: "WhatsApp Business API Solution Provider (Official Meta BSP) | Nexora",
    description: "Scale customer conversations with verified green tick WhatsApp numbers, multi-agent support inboxes, automated chatbots, and catalogs via official Meta BSP infrastructure.",
    keywords: "whatsapp business api, official meta bsp india, green tick verification, whatsapp chatbots, multi agent support inbox, click to whatsapp ads"
  },
  '/products/bulk-sms': {
    title: "Enterprise Bulk SMS Gateway (TRAI DLT Approved) | Nexora",
    description: "Sub-400ms high-speed OTP and transactional SMS delivery across Jio, Airtel, Vi, and BSNL. Automated TRAI DLT scrubbing with 99.99% carrier availability SLA.",
    keywords: "bulk sms provider india, trai dlt registration, otp sms gateway, transactional sms, promotional sms, smpp sms api"
  },
  '/products/rcs': {
    title: "RCS Business Messaging Platform (Next-Gen SMS) | Nexora",
    description: "Transform standard SMS into interactive verified brand conversations with verified sender badges, rich media carousels, 1-tap quick action chips, and metrics.",
    keywords: "rcs business messaging, google verified sms, rich communication services india, rcs carousels, verified brand messaging"
  },
  '/products/voice': {
    title: "Cloud Voice Solutions & Outbound Dialer (OBD) | Nexora",
    description: "Enterprise outbound dialer, automated voice broadcasts, interactive voice response, and call masking across Indian telecom circles with real-time call telemetry.",
    keywords: "voice obd india, outbound dialer api, cloud telephony, call masking, automated voice broadcast, virtual numbers"
  },
  '/products/ivr': {
    title: "Smart Cloud IVR Systems & Intelligent Call Routing | Nexora",
    description: "Multi-lingual automated telephony, visual drag-and-drop IVR builder, NLP intent routing, and intelligent agent forwarding with real-time CRM webhooks.",
    keywords: "smart ivr system, cloud ivr provider india, toll free ivr, automated call routing, multi language ivr, crm integration ivr"
  },
  '/products/smpp': {
    title: "Carrier-Grade SMPP 3.4 Gateway & Direct Telco Binds | Nexora",
    description: "Ultra-low latency SMPP v3.4 server connects with dedicated throughput up to 10,000+ TPS across all 22 Indian telecom circles with TLS 1.3 encryption.",
    keywords: "smpp gateway, smpp 3.4 server, direct telco binds, high throughput sms gateway, enterprise smpp india"
  },
  '/about': {
    title: "About Us | Nexora Enterprise Communications Infrastructure",
    description: "Learn about Nexora Enterprise — India's telecom-first CPaaS platform engineered for high-availability enterprise communications, DPDP compliance, and carrier reliability.",
    keywords: "about nexora enterprise, indian cpaas company, telecom infrastructure india, noida enterprise tech"
  },
  '/developers': {
    title: "Developer Hub & Telecom APIs (REST, SDKs, SMPP) | Nexora",
    description: "Build and scale enterprise messaging with clean RESTful APIs, cURL, Node.js, and Python code snippets, comprehensive API docs, and sub-14ms API response times.",
    keywords: "telecom apis, developer documentation, rest api sms, whatsapp api sdk, python sms api, nodejs sms api"
  },
  '/contact': {
    title: "Contact Enterprise Sales & Telecom Support | Nexora",
    description: "Speak directly with our enterprise telecom engineers in India. Call +91 81759 50586 or email info@nexoracpass.in for custom routing and SLA agreements.",
    keywords: "contact nexora, enterprise telecom support, cpaas sales india, nexora phone number"
  },
  '/privacy': {
    title: "Privacy Policy & Indian Data Protection (DPDP Act) | Nexora",
    description: "Nexora's commitment to Indian Data Protection (DPDP Act 2023), ISO/IEC 27001 data isolation, and enterprise confidentiality across all communications channels.",
    keywords: "privacy policy, dpdp act compliance, indian data sovereignty, data security"
  },
  '/terms': {
    title: "Terms of Service & SLA Agreements | Nexora Enterprise",
    description: "Review the enterprise service terms, carrier uptime guarantees, TRAI regulatory guidelines, and platform usage policies for Nexora Enterprise.",
    keywords: "terms of service, trai compliance terms, enterprise telecom agreement, cpaas terms"
  }
};

export function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const cleanPath = pathname.replace(/^\/nexora-enterprises/, '') || '/';
    const data = SEO_DATA[cleanPath] || SEO_DATA['/'];

    // 1. Update Document Title
    document.title = data.title;

    // 2. Helper to set or create meta tag
    const setMeta = (nameAttr: string, key: string, content: string) => {
      let meta = document.querySelector(`meta[${nameAttr}="${key}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(nameAttr, key);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Standard SEO Meta
    setMeta('name', 'description', data.description);
    setMeta('name', 'keywords', data.keywords);
    setMeta('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large');

    // Open Graph
    setMeta('property', 'og:title', data.title);
    setMeta('property', 'og:description', data.description);
    setMeta('property', 'og:url', window.location.href);

    // Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', data.title);
    setMeta('name', 'twitter:description', data.description);

    // Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://nexoracpass.in' + (cleanPath === '/' ? '/' : cleanPath);
  }, [pathname]);

  return null;
}
