import { useState, useEffect } from 'react';
import { Activity, Radio, ChevronRight } from 'lucide-react';

const chapters = [
  { id: 'hero', label: '01 Core Monolith', name: 'Intelligent Core' },
  { id: 'carrier-mesh', label: '02 Carrier Mesh', name: '22 Circles Highway' },
  { id: 'omni-channel', label: '03 Omni Array', name: '6-Channel Engine' },
  { id: 'delivery-model', label: '04 Delivery Model', name: 'Structured Pipeline' },
  { id: 'architecture', label: '05 Architecture', name: 'Telecom Superiority' },
  { id: 'enterprise-proof', label: '06 Ecosystem', name: '5,000+ Brands' },
  { id: 'developer-terminal', label: '07 Developer NOC', name: 'Live API Console' },
  { id: 'gateway-onboarding', label: '08 Gateway HQ', name: 'Direct Onboarding' }
];

export function JourneyHUD() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const percent = Math.min(100, Math.max(0, Math.round((scrollY / maxScroll) * 100)));
      setScrollPercent(percent);

      // Determine active chapter by section offsets
      for (let i = chapters.length - 1; i >= 0; i--) {
        const el = document.getElementById(chapters[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveChapter(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Right Desktop Floating 3D Journey HUD */}
      <aside 
        aria-label="3D Journey Timeline"
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3 select-none"
      >
        <div className="bg-[#030712]/80 backdrop-blur-2xl border border-white/10 p-3.5 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex flex-col gap-2.5">
          <div className="flex items-center justify-between gap-3 pb-2 border-b border-white/10 text-[10px] font-mono uppercase tracking-wider text-slate-400">
            <span className="flex items-center gap-1.5 text-[#00F5FF]">
              <Radio className="w-3 h-3 text-[#00F5FF] animate-pulse" />
              <span>3D Journey</span>
            </span>
            <span className="text-white font-bold">{scrollPercent}%</span>
          </div>

          <div className="flex flex-col gap-1.5">
            {chapters.map((ch, idx) => {
              const isActive = activeChapter === idx;
              return (
                <button
                  key={ch.id}
                  onClick={() => scrollToChapter(ch.id)}
                  className={`group flex items-center justify-between gap-3 px-2.5 py-1.5 rounded-lg text-left text-xs font-mono transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#00F5FF]/15 to-[#8B5CF6]/15 text-[#00F5FF] border border-[#00F5FF]/30 font-bold shadow-[0_0_12px_rgba(0,245,255,0.2)]' 
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full transition-transform ${
                      isActive ? 'bg-[#00F5FF] scale-125 shadow-[0_0_8px_#00F5FF]' : 'bg-slate-600 group-hover:bg-slate-400'
                    }`} />
                    <span className="truncate max-w-[110px]">{ch.name}</span>
                  </div>
                  <ChevronRight className={`w-3 h-3 transition-transform ${isActive ? 'text-[#00F5FF] translate-x-0.5' : 'text-slate-600 opacity-0 group-hover:opacity-100'}`} />
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span className="flex items-center gap-1 text-emerald-400">
              <Activity className="w-3 h-3" /> Mumbai NOC Live
            </span>
            <span className="text-slate-500">&lt;14ms</span>
          </div>
        </div>
      </aside>

      {/* Mobile / Tablet Bottom Progress Ticker */}
      <div className="fixed bottom-3 left-4 right-4 z-40 xl:hidden flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#030712]/90 backdrop-blur-2xl border border-white/10 shadow-2xl text-xs font-mono">
        <div className="flex items-center gap-2 text-[#00F5FF]">
          <span className="w-2 h-2 rounded-full bg-[#00F5FF] animate-pulse" />
          <span className="font-bold truncate max-w-[180px]">
            {chapters[activeChapter]?.name || '3D Journey'}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-20 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#00F5FF] via-[#3B82F6] to-[#8B5CF6] transition-all duration-150"
              style={{ width: `${scrollPercent}%` }}
            />
          </div>
          <span className="text-white font-bold text-[11px]">{scrollPercent}%</span>
        </div>
      </div>
    </>
  );
}
