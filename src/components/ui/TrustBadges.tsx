interface TrustBadgeProps {
  className?: string;
  size?: 'sm' | 'md';
}

export function MetaBadge({ className = '' }: TrustBadgeProps) {
  return (
    <div className={`flex items-center gap-2 px-2.5 sm:px-3 py-2 h-10 sm:h-11 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-400 hover:shadow-xs transition-all select-none group w-full sm:w-auto min-w-0 ${className}`}>
      {/* Official Meta Vector Logo */}
      <svg viewBox="0 0 32 32" className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none">
        <path 
          d="M16 11.4C13.8 8.6 10.9 7 8.1 7 4.2 7 1.2 9.9 1.2 14.7c0 5.6 4.1 10.6 8.9 10.6 3.3 0 5.5-1.9 6.8-3.7 1.3 1.8 3.5 3.7 6.8 3.7 4.8 0 8.9-5 8.9-10.6 0-4.8-3-7.7-6.9-7.7-2.8 0-5.7 1.6-7.9 4.4zm-7.9 11.5c-3.3 0-5.9-3.9-5.9-8.2 0-3.3 1.9-5.2 4.4-5.2 2.3 0 4.6 1.7 6.4 4.5-1.5 5.2-3.4 8.9-4.9 8.9zm15.8 0c-1.5 0-3.4-3.7-4.9-8.9 1.8-2.8 4.1-4.5 6.4-4.5 2.5 0 4.4 1.9 4.4 5.2 0 4.3-2.6 8.2-5.9 8.2z" 
          fill="#0668E1"
        />
      </svg>
      <div className="flex flex-col leading-tight min-w-0">
        <span className="text-[11px] sm:text-xs font-black text-slate-900 tracking-tight truncate">Meta</span>
        <span className="text-[8.5px] sm:text-[9px] font-bold text-blue-600 uppercase tracking-wider truncate">Business Partner</span>
      </div>
    </div>
  );
}

export function IsoBadge({ className = '' }: TrustBadgeProps) {
  return (
    <div className={`flex items-center gap-2 px-2.5 sm:px-3 py-2 h-10 sm:h-11 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-400 hover:shadow-xs transition-all select-none group w-full sm:w-auto min-w-0 ${className}`}>
      {/* Official ISO Style Circular Seal */}
      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[7.5px] sm:text-[8.5px] font-black text-blue-700 font-mono shrink-0">
        ISO
      </div>
      <div className="flex flex-col leading-tight min-w-0">
        <span className="text-[11px] sm:text-xs font-black text-slate-900 tracking-tight truncate">ISO/IEC 27001</span>
        <span className="text-[8.5px] sm:text-[9px] font-bold text-blue-600 uppercase tracking-wider truncate">Certified ISMS</span>
      </div>
    </div>
  );
}

export function Soc2Badge({ className = '' }: TrustBadgeProps) {
  return (
    <div className={`flex items-center gap-2 px-2.5 sm:px-3 py-2 h-10 sm:h-11 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-amber-400 hover:shadow-xs transition-all select-none group w-full sm:w-auto min-w-0 ${className}`}>
      {/* Official SOC 2 Style Shield */}
      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
        <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      </div>
      <div className="flex flex-col leading-tight min-w-0">
        <span className="text-[11px] sm:text-xs font-black text-slate-900 tracking-tight truncate">SOC 2 Type II</span>
        <span className="text-[8.5px] sm:text-[9px] font-bold text-amber-600 uppercase tracking-wider truncate">AICPA Audited</span>
      </div>
    </div>
  );
}

export function TraiBadge({ className = '' }: TrustBadgeProps) {
  return (
    <div className={`flex items-center gap-2 px-2.5 sm:px-3 py-2 h-10 sm:h-11 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-emerald-400 hover:shadow-xs transition-all select-none group w-full sm:w-auto min-w-0 ${className}`}>
      <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
      </span>
      <div className="flex flex-col leading-tight min-w-0">
        <span className="text-[11px] sm:text-xs font-black text-slate-900 tracking-tight truncate">TRAI DLT</span>
        <span className="text-[8.5px] sm:text-[9px] font-bold text-emerald-600 uppercase tracking-wider truncate">100% Compliant</span>
      </div>
    </div>
  );
}

export function TrustBadgesRow({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto ${className}`}>
      <MetaBadge />
      <IsoBadge />
      <Soc2Badge />
      <TraiBadge />
    </div>
  );
}
