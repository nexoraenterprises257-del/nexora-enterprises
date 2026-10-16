import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { transition } from '../../lib/animation';
import { Book, Code, Download, Compass, Server, Grid, ArrowRight, Terminal, Copy, Check, ShieldCheck, Zap } from 'lucide-react';

const resources = [
  { idx: '01', icon: Book, title: 'API Documentation', desc: 'Complete API reference with examples, endpoints, and authentication guides.', link: '#code-preview', color: 'text-[#0284C7]', bg: 'bg-sky-50 border-sky-100' },
  { idx: '02', icon: Code, title: 'SMPP Code Samples', desc: 'Sample codes and libraries for SMPP integration in multiple languages.', link: '/products/smpp', color: 'text-[#2563EB]', bg: 'bg-blue-50 border-blue-100' },
  { idx: '03', icon: Download, title: 'SDKs & Libraries', desc: 'Official SDKs for Python, PHP, Java, Node.js, and more languages.', link: '#languages-section', color: 'text-[#7C3AED]', bg: 'bg-purple-50 border-purple-100' },
  { idx: '04', icon: Compass, title: 'Integration Guide', desc: 'Step-by-step guides to integrate our APIs into your applications.', link: '#code-preview', color: 'text-[#C026D3]', bg: 'bg-fuchsia-50 border-fuchsia-100' },
  { idx: '05', icon: Server, title: 'Status Page', desc: 'Real-time platform status, uptime history, and incident reports.', link: '/contact', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-100' },
  { idx: '06', icon: Grid, title: 'Platform Collection', desc: 'Ready-to-use code snippets, templates, and integration examples.', link: '#code-preview', color: 'text-[#4F46E5]', bg: 'bg-indigo-50 border-indigo-100' }
];

function PythonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.914 0C5.82 0 6.183 2.644 6.183 2.644l.006 2.74h5.82v.823H3.88S0 5.753 0 11.898c0 6.146 3.4 5.925 3.4 5.925h2.029v-2.846s-.11-3.4 3.344-3.4h5.762s3.235.053 3.235-3.13V3.13S18.318 0 11.914 0zm-1.685 1.706a1.055 1.055 0 1 1 0 2.11 1.055 1.055 0 0 1 0-2.11zm1.857 22.294c6.094 0 5.731-2.644 5.731-2.644l-.006-2.74h-5.82v-.823h8.129s3.88.454 3.88-5.691c0-6.146-3.4-5.925-3.4-5.925h-2.029v2.846s.11 3.4-3.344 3.4H9.048s-3.235-.053-3.235 3.13v5.314s-.55 3.133 5.854 3.133zm1.685-1.706a1.055 1.055 0 1 1 0-2.11 1.055 1.055 0 0 1 0 2.11z"/>
    </svg>
  );
}

function PhpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C5.372 2 0 6.478 0 12s5.372 10 12 10 12-4.478 12-10S18.628 2 12 2zm0 1.6c5.744 0 10.4 3.76 10.4 8.4s-4.656 8.4-10.4 8.4-10.4-3.76-10.4-8.4 4.656-8.4 10.4-8.4zm-5.76 12.32h-1.6l1.28-7.84h2.56c1.6 0 2.48.88 2.24 2.4-.24 1.52-1.36 2.48-2.8 2.48h-1.12l-.56 2.96zm1.04-4.56h.88c.8 0 1.28-.48 1.44-1.12.08-.56-.24-.96-.88-.96h-.96l-.48 2.08zm5.68 4.56h-1.6l1.28-7.84h1.6l-.56 3.04h1.84c1.6 0 2.48.88 2.24 2.4-.24 1.52-1.36 2.48-2.8 2.48h-1.84l-.56 2.96zm1.04-4.56h.88c.8 0 1.28-.48 1.44-1.12.08-.56-.24-.96-.88-.96h-.96l-.48 2.08zm5.68 4.56h-1.6l1.28-7.84h2.56c1.6 0 2.48.88 2.24 2.4-.24 1.52-1.36 2.48-2.8 2.48h-1.12l-.56 2.96zm1.04-4.56h.88c.8 0 1.28-.48 1.44-1.12.08-.56-.24-.96-.88-.96h-.96l-.48 2.08z" />
    </svg>
  );
}

function JavaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.16 16.5c-.24.04-.47.07-.7.07-2.2 0-3.16-1.07-3.16-1.07s.9.37 2.6.37c1.58 0 2.75-.55 4.22-.55 1.34 0 1.9.37 2.96.37 1.1 0 1.72-.37 1.72-.37s-.76.5-2.09.67c-1.81.23-3.5-.08-5.55.51zm-1.23 2.1c-1.5 0-2.15-.41-2.15-.41s.6.23 1.79.23c1.23 0 2.27-.34 3.5-.34 1.09 0 2.1.34 3.28.34 1.34 0 2.1-.42 2.1-.42s-.84.6-2.62.6c-1.55 0-2.7-.41-4-.41-.69 0-1.36.41-1.9.41zm6.76-7.08c.61 1.2-.46 2.3-1.6 3.23.91-.55 1.7-1.33 1.6-3.23zm-2.83-3.66c.42.8.02 1.57-.75 2.37.75-.46 1.36-1.24 1.13-2.5-.12-.68-.38-1.31-.38-2.1 0-.45.15-1.07.36-1.5-.44.7-.63 1.54-.36 3.73zm-1.93 1.87c-.36.71-.28 1.42.32 2.13-.61-.5-.92-1.21-.71-2.13.17-.77.61-1.48.61-2.25 0-.56-.19-1.09-.38-1.53.41.65.54 1.41.16 3.78zm-2.37 8.98c2.33.19 4.87-.07 7.1-.83.4-.13.78-.3 1.17-.49-1.26-.4-2.71-.66-4.24-.66-1.85 0-3.5.36-4.84.9.26.36.54.73.81 1.08zm8.02 2.43c-.57.08-1.19.11-1.83.11-2.97 0-5.49-.8-7.19-2-.76.34-1.44.73-2.04 1.17 1.81 1.38 5.14 2.29 8.94 2.29 1 0 1.96-.07 2.86-.2-.25-.45-.51-.9-.74-1.37z"/>
    </svg>
  );
}

function NodeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8.5 4.9v9.8L12 21.5l-8.5-4.8V6.9L12 2z" />
      <path d="M9 10v4a1.5 1.5 0 0 0 3 0v-4" />
      <path d="M15 10.5c-.3-.3-.7-.5-1.2-.5-.8 0-1.3.5-1.3 1.2 0 1.3 2.5 1 2.5 2.3 0 .8-.7 1.5-1.5 1.5-.6 0-1.1-.3-1.4-.7" />
    </svg>
  );
}

function RubyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12l4 7-10 11L2 10l4-7z" />
      <path d="M2 10h20" />
      <path d="M12 21L7.5 10 10 3" />
      <path d="M12 21l4.5-11L14 3" />
    </svg>
  );
}

function JavascriptIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="3.5" />
      <path fill="white" d="M7.8 17.2v-4.2h1.6v4.2c0 1-.5 1.5-1.4 1.5-.4 0-.8-.1-1.1-.3l.3-1.3c.2.1.4.2.6.2.4 0 .6-.2.6-.6zm6.3-.3c.3.2.7.4 1.2.4.6 0 .9-.3.9-.7 0-.4-.3-.6-.8-.8l-.5-.2c-1.1-.4-1.5-1.1-1.5-1.8 0-1.2.9-2.1 2.3-2.1.6 0 1.2.2 1.5.4l-.4 1.3c-.3-.2-.7-.3-1.1-.3-.6 0-.8.3-.8.7 0 .3.2.5.7.7l.5.2c1.2.4 1.7 1.1 1.7 1.9 0 1.3-1 2.2-2.5 2.2-.7 0-1.4-.2-1.8-.5l.5-1.4z"/>
    </svg>
  );
}

const sdkLanguages = [
  {
    name: 'Python',
    icon: PythonIcon,
    color: 'text-slate-700 group-hover:text-[#3776AB]',
  },
  {
    name: 'PHP',
    icon: PhpIcon,
    color: 'text-slate-700 group-hover:text-[#777BB4]',
  },
  {
    name: 'Java',
    icon: JavaIcon,
    color: 'text-slate-700 group-hover:text-[#EA2D2E]',
  },
  {
    name: 'Node.js',
    icon: NodeIcon,
    color: 'text-slate-700 group-hover:text-[#5FA04E]',
  },
  {
    name: 'Ruby',
    icon: RubyIcon,
    color: 'text-slate-700 group-hover:text-[#CC342D]',
  },
  {
    name: 'JavaScript',
    icon: JavascriptIcon,
    color: 'text-slate-700 group-hover:text-[#F59E0B]',
  }
];

export function Developers() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'curl' | 'node' | 'python'>('curl');

  const codeSnippets = {
    curl: `curl -X POST https://api.nexoracpass.in/v2/sms/dispatch \\
  -H "Authorization: Bearer nx_live_sec_9941a87b" \\
  -H "Content-Type: application/json" \\
  -d '{
    "sender_id": "NX-NEXORA",
    "dlt_entity_id": "14015572910",
    "dlt_template_id": "1407168920194821",
    "recipient": "+919876543210",
    "message": "Your Nexora OTP is 582910. Valid for 10 mins.",
    "route": "tier1_direct_otp"
  }'`,
    node: `import { NexoraClient } from '@nexora/sdk-india';

const client = new NexoraClient({
  apiKey: process.env.NEXORA_API_KEY,
  region: 'ap-south-mumbai' // 100% Indian Data Center
});

const response = await client.sms.sendOTP({
  senderId: 'NX-NEXORA',
  dltTemplateId: '1407168920194821',
  to: '+919876543210',
  otp: '582910',
  validityMinutes: 10
});

console.log('Dispatched in 14ms:', response.messageId);`,
    python: `from nexora import NexoraIndiaGateway

nexora = NexoraIndiaGateway(
    api_key="nx_live_sec_9941a87b",
    datacenter="mumbai_central"
)

response = nexora.sms.send(
    sender_id="NX-NEXORA",
    dlt_template_id="1407168920194821",
    to="+919876543210",
    message="Your Nexora OTP is 582910. Valid for 10 mins."
)

print(f"Status: {response.status} | Latency: {response.latency_ms}ms")`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-36 pb-28 bg-white min-h-screen text-slate-900 relative overflow-hidden">
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-blue-100/40 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-100/40 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="badge-pill mb-5 inline-flex">
            <Terminal className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Developer Hub • India Telecom Gateway</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0A0F1C] mb-6 tracking-tight">
            Developer <span className="text-logo-gradient">Resources</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Everything you need to build scalable, high-throughput communication experiences with our carrier-grade APIs and developer SDKs.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-6 border-t border-slate-200 text-xs text-slate-600">
            <span className="flex items-center gap-1.5 font-semibold">
              <span className="text-xs">🇮🇳</span> 100% Indian Data Localization (DPDP Act)
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
              <Zap className="w-3.5 h-3.5" /> Sub-14ms API Response
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 text-[#2563EB] font-bold">
              <ShieldCheck className="w-3.5 h-3.5" /> Direct SMPP 3.4 Binds
            </span>
          </div>
        </motion.div>

        {/* Interactive Code Console */}
        <div id="code-preview" className="mb-24 max-w-4xl mx-auto scroll-mt-28">
          <div className="rounded-2xl border border-slate-800 bg-[#0A0F1C] shadow-2xl overflow-hidden text-white">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0F172A]">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-4 w-px bg-slate-700 mx-2" />
                
                {/* Tabs */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('curl')}
                    className={`px-3 py-1 rounded-md text-xs font-mono font-bold transition-colors ${
                      activeTab === 'curl' 
                        ? 'bg-[#2563EB] text-white' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    cURL (REST)
                  </button>
                  <button
                    onClick={() => setActiveTab('node')}
                    className={`px-3 py-1 rounded-md text-xs font-mono font-bold transition-colors ${
                      activeTab === 'node' 
                        ? 'bg-[#2563EB] text-white' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Node.js
                  </button>
                  <button
                    onClick={() => setActiveTab('python')}
                    className={`px-3 py-1 rounded-md text-xs font-mono font-bold transition-colors ${
                      activeTab === 'python' 
                        ? 'bg-[#2563EB] text-white' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Python
                  </button>
                </div>
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Snippet</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Body */}
            <div className="p-6 overflow-x-auto font-mono text-xs sm:text-sm text-slate-300 leading-relaxed">
              <pre>
                <code>{codeSnippets[activeTab]}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="mb-24 max-w-6xl mx-auto">
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#2563EB] mb-2 block">Quick Start</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A0F1C]">Developer Tooling</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((res, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={transition(i * 0.08)}
                className="fc-card p-8 group flex flex-col justify-between relative overflow-hidden"
              >
                <div className="text-slate-100 font-black text-6xl absolute top-3 right-5 pointer-events-none select-none">
                  {res.idx}
                </div>

                <div>
                  <div className={`w-12 h-12 rounded-xl ${res.bg} border flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                    <res.icon className={`w-5 h-5 ${res.color}`} />
                  </div>
                  <h3 className="text-xl font-black text-[#0A0F1C] mb-2 group-hover:text-[#2563EB] transition-colors">{res.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">{res.desc}</p>
                </div>

                {res.link.startsWith('#') ? (
                  <a 
                    href={res.link} 
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] group-hover:translate-x-1 transition-transform pt-4 border-t border-slate-100"
                  >
                    <span>Explore Documentation</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <Link 
                    to={res.link} 
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] group-hover:translate-x-1 transition-transform pt-4 border-t border-slate-100"
                  >
                    <span>Explore Documentation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Supported Languages - Styled like reference image in Nexora Theme */}
        <div id="languages-section" className="mb-16 max-w-6xl mx-auto text-center scroll-mt-28">
          {/* Top Pill Badge in Nexora Theme */}
          <div className="badge-pill mb-4 inline-flex">
            <span>Official Client SDKs</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0F1C] tracking-tight mb-4">
            Supported <span className="text-logo-gradient">Languages</span>
          </h2>

          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed mb-12">
            Pre-built, enterprise-grade client libraries with native async support, retries, and Indian carrier fallback logic.
          </p>

          {/* 6 Elevated White Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
            {sdkLanguages.map((sdk, i) => (
              <motion.div
                key={sdk.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={transition(i * 0.06)}
                className="group relative bg-white border border-slate-200/80 hover:border-[#2563EB]/40 rounded-2xl p-6 sm:py-8 sm:px-4 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(37,99,235,0.12)] transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                {/* Top accent gradient line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

                {/* Centered Icon */}
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100/90 flex items-center justify-center mb-4 group-hover:bg-blue-50/60 group-hover:border-blue-100 transition-all duration-300 group-hover:scale-110">
                  <sdk.icon className={`w-8 h-8 ${sdk.color} transition-all duration-300`} />
                </div>

                {/* Language Name */}
                <span className="text-base font-bold text-slate-800 group-hover:text-[#2563EB] transition-colors duration-200">
                  {sdk.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
