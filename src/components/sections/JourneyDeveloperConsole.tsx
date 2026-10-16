import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, Copy, Check, Play, Activity, ShieldCheck, Zap } from 'lucide-react';

const snippets = {
  curl: `curl -X POST https://api.nexoracpaas.in/v2/sms/dispatch \\
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

export function JourneyDeveloperConsole() {
  const [activeTab, setActiveTab] = useState<'curl' | 'node' | 'python'>('curl');
  const [copied, setCopied] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedResponse, setSimulatedResponse] = useState<string | null>(
    JSON.stringify({
      status: "DELIVERED",
      message_id: "nx_msg_9948271039",
      recipient: "+919876543210",
      carrier_bind: "JIO_MUM_PRI_01",
      dlt_scrubbing: "PASSED_INSTANT",
      dispatch_latency_ms: 12.4,
      circle: "MAHARASHTRA_MUMBAI",
      timestamp: new Date().toISOString()
    }, null, 2)
  );

  // Automated Zero-Click Language Tab Cycling
  useEffect(() => {
    const tabs: ('curl' | 'node' | 'python')[] = ['curl', 'node', 'python'];
    const timer = setInterval(() => {
      setActiveTab((prev) => {
        const nextIdx = (tabs.indexOf(prev) + 1) % tabs.length;
        return tabs[nextIdx];
      });
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulate = () => {
    setIsSimulating(true);
    setSimulatedResponse(null);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulatedResponse(JSON.stringify({
        status: "DELIVERED",
        message_id: "nx_msg_9948271039",
        recipient: "+919876543210",
        carrier_bind: "JIO_MUM_PRI_01",
        dlt_scrubbing: "PASSED_INSTANT",
        dispatch_latency_ms: 12.4,
        circle: "MAHARASHTRA_MUMBAI",
        timestamp: new Date().toISOString()
      }, null, 2));
    }, 600);
  };

  return (
    <section 
      id="developer-terminal" 
      className="py-28 lg:py-36 relative overflow-hidden text-white"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Chapter Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#00F5FF]/30 text-[#00F5FF] text-xs font-mono font-bold tracking-wider uppercase mb-5 backdrop-blur-xl">
            <Terminal className="w-3.5 h-3.5 text-[#00F5FF]" />
            <span>Chapter 07 // Live NOC & Developer Studio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5">
            Developer APIs Built for <br />
            <span className="text-gradient">Instant Production Deployment</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Integrate in minutes with intuitive REST APIs and SDKs. Backed by comprehensive TRAI DLT parameter compliance and 100% Indian data residency.
          </p>
        </div>

        {/* Live Interactive Terminal Window */}
        <div className="max-w-5xl mx-auto rounded-[2.5rem] bg-[#060A14] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-2xl">
          
          {/* Terminal Title Bar */}
          <div className="px-6 py-4 bg-white/[0.03] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400">
                api.nexoracpaas.in — v3.8 (Indian Telecom Gateway)
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <div className="flex bg-white/[0.04] p-1 rounded-xl border border-white/10 text-xs">
                {(['curl', 'node', 'python'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded-lg font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === tab 
                        ? 'bg-[#00F5FF] text-black font-bold shadow-md' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
                title="Copy code"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-300" />}
              </button>

              {/* Live Run Test Button */}
              <button
                onClick={handleSimulate}
                disabled={isSimulating}
                className="px-3.5 py-1.5 rounded-xl btn-cyan font-mono text-xs font-bold flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isSimulating ? 'Dispatching...' : 'Test Dispatch'}</span>
              </button>
            </div>
          </div>

          {/* Code Body Area */}
          <div className="p-6 md:p-8 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed bg-[#060A14]">
            <pre className="text-[#00F5FF]/90">
              <code>{snippets[activeTab]}</code>
            </pre>

            {/* Simulated Live Response Viewport */}
            {simulatedResponse && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 rounded-2xl bg-white/[0.03] border border-emerald-500/30 text-emerald-400 text-xs font-mono"
              >
                <div className="flex items-center justify-between pb-2 border-b border-emerald-500/20 mb-2">
                  <span className="font-bold flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> 200 OK — Pan-India Dispatch Successful
                  </span>
                  <span className="text-white text-[10px]">Latency: 12.4ms</span>
                </div>
                <pre className="text-slate-300 text-[11px] overflow-x-auto">
                  <code>{simulatedResponse}</code>
                </pre>
              </motion.div>
            )}
          </div>

          {/* Edge Latency Status Bar */}
          <div className="px-6 md:px-8 py-4 bg-black/50 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-semibold">Mumbai Primary (BOM)</span>
              <span className="text-[#00F5FF] font-bold">1.4ms Latency</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-semibold">Delhi NCR (DEL)</span>
              <span className="text-emerald-400 font-bold">7.2ms Latency</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-semibold">Bengaluru (BLR)</span>
              <span className="text-[#3B82F6] font-bold">4.8ms Latency</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-semibold">Hyderabad (HYD)</span>
              <span className="text-[#8B5CF6] font-bold">5.6ms Latency</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
