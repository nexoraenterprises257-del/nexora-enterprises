import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Activity, MessagesSquare, MessageSquare, Phone, Sparkles, Copy, Check, Wifi, Battery, Volume2, PhoneCall, PhoneOff, MoreVertical, Lock, Send, MapPin, ChevronLeft, MoreHorizontal, Image as ImageIcon, Mic, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MetaBadge, IsoBadge, Soc2Badge, TraiBadge } from '../ui/TrustBadges';
import { getAssetUrl } from '../../lib/utils';

type ChannelType = 'whatsapp' | 'sms' | 'rcs' | 'voice';

export function Hero() {
  const [activeChannel, setActiveChannel] = useState<ChannelType>('whatsapp');
  const [copied, setCopied] = useState(false);
  const [rcsView, setRcsView] = useState<'card' | 'carousel'>('card');
  const [rcsClaimed, setRcsClaimed] = useState(false);
  const [isAutoCycle, setIsAutoCycle] = useState(true);

  // Auto-cycle through channels every 6 seconds if user is idle
  useEffect(() => {
    if (!isAutoCycle) return;
    const channels: ChannelType[] = ['whatsapp', 'sms', 'rcs', 'voice'];
    const timer = setInterval(() => {
      setActiveChannel((prev) => {
        const nextIndex = (channels.indexOf(prev) + 1) % channels.length;
        return channels[nextIndex];
      });
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoCycle]);

  const handleCopy = () => {
    navigator.clipboard.writeText('582910');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="aurora-bg pt-24 pb-8 md:pt-28 md:pb-12 lg:pt-28 lg:pb-12 relative overflow-hidden flex items-center bg-white">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle, Actions, Trust Strip */}
          <div className="max-w-[620px] relative z-20">
            
            {/* Live Status Pill with Crisp Vector India Flag */}
            <div className="mb-4 flex items-center">
              <div className="badge-pill inline-flex items-center gap-2 py-1 px-3 max-w-full">
                <span className="w-3.5 h-3.5 rounded-full overflow-hidden inline-flex border border-slate-200 shrink-0 shadow-2xs">
                  <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
                    <path fill="#f93" d="M0 0h640v160H0z"/>
                    <path fill="#fff" d="M0 160h640v160H0z"/>
                    <path fill="#128807" d="M0 320h640v160H0z"/>
                    <circle cx="320" cy="240" r="40" fill="#008"/>
                  </svg>
                </span>
                <span className="text-[11px] sm:text-xs truncate">India's Intelligent CPaaS • Pan-India Carrier Mesh</span>
              </div>
            </div>

            {/* Massive Bold Headline (2 Clean Unclipped Lines at 100% Zoom) */}
            <div className="mb-4">
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-black text-[#0A0F1C] leading-[1.12] sm:leading-[1.08] tracking-[-0.03em]">
                <span className="block">Smart Communication,</span>
                <span className="block text-logo-gradient pb-0.5">
                  Stronger Business.
                </span>
              </h1>
            </div>

            {/* Concise Subtitle */}
            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed mb-6 font-medium max-w-[530px]">
              Powering <strong className="text-slate-900">10B+ verified conversations</strong> across India. Deploy WhatsApp, SMS, RCS, and Voice on direct carrier infrastructure with guaranteed 99.99% uptime.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-3.5 mb-7 w-full sm:w-auto">
              <Link 
                to="/contact" 
                className="btn-primary w-full sm:w-auto text-sm sm:text-base py-3 sm:py-3.5 px-6 sm:px-7"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a 
                href="tel:+918175950586"
                className="btn-secondary w-full sm:w-auto text-sm sm:text-base py-3 sm:py-3.5 px-6 sm:px-7 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#2563EB]" />
                <span>+91 81759 50586</span>
              </a>
            </div>

            {/* Ultra-Refined Trust Badges (2x2 Grid on Mobile, Flex on Desktop) */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-2.5 pt-5 border-t border-slate-200/80 w-full">
              <MetaBadge />
              <IsoBadge />
              <Soc2Badge />
              <TraiBadge />
            </div>

          </div>

          {/* Right Column: Ultra-Sleek Flagship Smartphone Live Experience */}
          <div className="relative w-full max-w-[480px] mx-auto lg:mr-0 flex flex-col items-center">
            
            {/* Interactive Channel Selector Deck */}
            <div className="w-full max-w-[300px] mb-3 p-1 rounded-2xl bg-slate-100/90 border border-slate-200/90 flex items-center gap-1 shadow-2xs backdrop-blur-md">
              <button
                onClick={() => { setActiveChannel('whatsapp'); setIsAutoCycle(false); }}
                className={`flex-1 py-1.5 px-1 rounded-xl text-[10.5px] font-bold flex items-center justify-center gap-1 transition-all cursor-pointer ${
                  activeChannel === 'whatsapp'
                    ? 'bg-white text-emerald-700 shadow-xs border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <MessagesSquare className="w-3 h-3 text-[#25D366] shrink-0" />
                <span>WhatsApp</span>
              </button>

              <button
                onClick={() => { setActiveChannel('sms'); setIsAutoCycle(false); }}
                className={`flex-1 py-1.5 px-1 rounded-xl text-[10.5px] font-bold flex items-center justify-center gap-1 transition-all cursor-pointer ${
                  activeChannel === 'sms'
                    ? 'bg-white text-blue-700 shadow-xs border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <MessageSquare className="w-3 h-3 text-[#2563EB] shrink-0" />
                <span>SMS</span>
              </button>

              <button
                onClick={() => { setActiveChannel('rcs'); setIsAutoCycle(false); }}
                className={`flex-1 py-1.5 px-1 rounded-xl text-[10.5px] font-bold flex items-center justify-center gap-1 transition-all cursor-pointer ${
                  activeChannel === 'rcs'
                    ? 'bg-white text-purple-700 shadow-xs border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3 h-3 text-[#9333EA] shrink-0" />
                <span>RCS</span>
              </button>

              <button
                onClick={() => { setActiveChannel('voice'); setIsAutoCycle(false); }}
                className={`flex-1 py-1.5 px-1 rounded-xl text-[10.5px] font-bold flex items-center justify-center gap-1 transition-all cursor-pointer ${
                  activeChannel === 'voice'
                    ? 'bg-white text-sky-700 shadow-xs border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Phone className="w-3 h-3 text-[#0284C7] shrink-0" />
                <span>Voice</span>
              </button>
            </div>

            {/* True Smartphone Device (Flagship 19.5:9 Golden Ratio, Balanced for 100% Zoom) */}
            <div className="relative w-[285px] sm:w-[300px] h-[515px] sm:h-[525px]">
              
              {/* Outer Phone Hardware Chasis */}
              <div className="relative w-full h-full rounded-[42px] p-[5px] bg-[#0A0E17] shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35),0_0_0_1px_rgba(255,255,255,0.12)_inset] border border-slate-700/80 flex flex-col">
                
                {/* Speaker Ear-Piece Micro-Grill */}
                <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-9 h-[2px] bg-slate-700 rounded-full z-30 pointer-events-none opacity-80" />

                {/* Inner Screen */}
                <div className="relative rounded-[37px] overflow-hidden bg-white w-full h-full flex flex-col justify-between shadow-inner">
                  
                  {/* Top Mobile Status Bar & Dynamic Island */}
                  <div className="relative bg-slate-50/95 pt-1.5 px-3.5 pb-1 border-b border-slate-200/50 flex items-center justify-between text-[10px] font-bold text-slate-800 select-none">
                    <span className="font-semibold tracking-tight">9:41</span>
                    
                    {/* Centered Dynamic Island */}
                    <div className="w-[66px] h-3.5 bg-black rounded-full flex items-center justify-end px-1.5 gap-1 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="w-1 h-1 rounded-full bg-slate-800" />
                    </div>

                    <div className="flex items-center gap-1 text-slate-700">
                      <span className="text-[8.5px] font-mono font-bold">5G</span>
                      <Wifi className="w-2.5 h-2.5" />
                      <Battery className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Dynamic Native Screen Based on Active Channel */}
                  <div className="flex-1 flex flex-col justify-between overflow-hidden">
                    <AnimatePresence mode="wait">
                      
                      {/* 1. WHATSAPP BUSINESS API SCREEN */}
                      {activeChannel === 'whatsapp' && (
                        <motion.div
                          key="whatsapp"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-1 flex flex-col justify-between bg-[#EFEAE2]"
                        >
                          {/* WhatsApp Header */}
                          <div className="bg-[#008069] text-white px-3 py-2 flex items-center justify-between shadow-xs">
                            <div className="flex items-center gap-2">
                              <span className="text-xs">‹</span>
                              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs shrink-0 overflow-hidden">
                                <img src={getAssetUrl('/logo.png')} alt="Nexora" className="w-4 h-auto" />
                              </div>
                              <div className="overflow-hidden">
                                <div className="flex items-center gap-1 leading-none">
                                  <span className="text-[11px] font-bold truncate">Nexora Bank</span>
                                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] text-white text-[7px] flex items-center justify-center font-black shrink-0">✓</span>
                                </div>
                                <span className="text-[8px] text-emerald-100 block">Official Business Account</span>
                              </div>
                            </div>
                            <span className="text-[7.5px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-white/20 text-white">
                              Meta BSP
                            </span>
                          </div>

                          {/* WhatsApp Realistic 2-Way Chat Experience */}
                          <div className="p-2.5 space-y-2 flex-1 flex flex-col justify-end overflow-hidden">
                            <div className="text-center my-0.5">
                              <span className="text-[8px] bg-white/80 text-slate-500 px-2 py-0.5 rounded-full font-medium shadow-2xs">
                                TODAY
                              </span>
                            </div>

                            {/* Outgoing User Trigger Message */}
                            <div className="self-end bg-[#D9FDD3] rounded-xl rounded-tr-xs p-2 max-w-[210px] shadow-2xs border border-emerald-100/60">
                              <p className="text-[10px] text-slate-800 leading-tight">
                                Hi, authenticate ₹14,500 for Flight PNR #NX9482
                              </p>
                              <div className="flex items-center justify-end gap-1 mt-0.5 text-[7.5px] text-slate-500">
                                <span>12:41 PM</span>
                                <span className="text-sky-500 font-bold">✓✓</span>
                              </div>
                            </div>

                            {/* Incoming Verified 2FA OTP Card */}
                            <div className="self-start bg-white rounded-xl rounded-tl-xs p-2.5 max-w-[235px] shadow-2xs border border-slate-200/60">
                              <div className="flex items-center gap-1 mb-1 pb-1 border-b border-slate-100">
                                <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                                <span className="text-[9px] font-bold text-slate-900">Nexora Secure 2FA</span>
                              </div>
                              <p className="text-[10px] text-slate-800 leading-snug mb-1.5 font-normal">
                                Dear Customer, your OTP is <strong className="font-mono text-emerald-600 font-black text-xs">582910</strong> for payment ₹14,500. Valid 10m.
                              </p>

                              {/* Interactive Action Button */}
                              <button
                                onClick={handleCopy}
                                className="w-full py-1.5 px-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-[#008069] text-[9.5px] font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                              >
                                {copied ? (
                                  <>
                                    <Check className="w-3 h-3 text-emerald-600" />
                                    <span>Code Copied!</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3" />
                                    <span>Copy OTP: 582910</span>
                                  </>
                                )}
                              </button>

                              <div className="flex items-center justify-end gap-1 mt-1 text-[7.5px] text-slate-400">
                                <span>12:42 PM</span>
                                <span className="text-sky-500 font-bold">✓✓</span>
                              </div>
                            </div>

                            {/* Confirmation Card */}
                            <div className="self-start bg-white rounded-xl rounded-tl-xs p-2 max-w-[225px] shadow-2xs border border-slate-200/60">
                              <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-700 mb-0.5">
                                <span>🎉</span>
                                <span>Payment Confirmed!</span>
                              </div>
                              <p className="text-[8.5px] text-slate-600 leading-tight">
                                PNR #NX9482 confirmed • BOM ✈ DEL
                              </p>
                              <div className="flex gap-1 mt-1.5">
                                <span className="text-[8px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 font-medium">📄 View Ticket</span>
                                <span className="text-[8px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 font-medium">💬 Support</span>
                              </div>
                            </div>

                          </div>

                          {/* Bottom Chat Input Bar */}
                          <div className="bg-[#F0F2F5] px-2.5 py-1.5 flex items-center gap-1.5 border-t border-slate-200/50 text-[10px] text-slate-400">
                            <span className="text-xs">😊</span>
                            <div className="flex-1 bg-white rounded-full px-2.5 py-1 text-slate-400 text-[9.5px] border border-slate-200">Message...</div>
                            <span className="text-xs">📎</span>
                            <span className="text-xs">🎙️</span>
                          </div>
                        </motion.div>
                      )}

                      {/* 2. BULK SMS SCREEN */}
                      {activeChannel === 'sms' && (
                        <motion.div
                          key="sms"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-1 flex flex-col justify-between bg-[#F8FAFC]"
                        >
                          {/* SMS Header */}
                          <div className="bg-white border-b border-slate-200/80 px-3 py-2 flex items-center justify-between shadow-2xs">
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-blue-600">‹</span>
                              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-[10px]">
                                NX
                              </div>
                              <div>
                                <span className="text-[11px] font-black text-slate-900 block leading-tight">NX-NEXORA</span>
                                <span className="text-[7.5px] text-slate-500 block">TRAI DLT: 14015572910</span>
                              </div>
                            </div>
                            <span className="text-[7.5px] bg-emerald-50 border border-emerald-200 text-emerald-700 px-1.5 py-0.5 rounded-full font-bold">
                              142ms Direct Route
                            </span>
                          </div>

                          {/* SMS Body */}
                          <div className="p-2.5 space-y-2 flex-1 flex flex-col justify-center">
                            
                            {/* OTP SMS */}
                            <div className="bg-white rounded-xl rounded-tl-xs p-2.5 text-slate-800 text-[10px] leading-snug border border-slate-200 max-w-[235px] shadow-2xs">
                              <div className="flex items-center justify-between text-[8px] text-slate-400 mb-1 pb-1 border-b border-slate-100">
                                <span>TRAI Approved Header</span>
                                <span className="text-blue-600 font-bold">Priority Route</span>
                              </div>
                              <p className="font-normal mb-1.5">
                                NX-NEXORA: <strong className="font-mono text-blue-600 font-black text-xs">849201</strong> is your OTP to complete transaction of INR 14,500. Valid for 10 mins.
                              </p>
                              <button 
                                onClick={handleCopy}
                                className="w-full py-1 rounded bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-[9px] font-bold flex items-center justify-center gap-1 cursor-pointer transition-colors"
                              >
                                {copied ? <Check className="w-2.5 h-2.5 text-blue-600" /> : <Copy className="w-2.5 h-2.5" />}
                                <span>{copied ? 'Code Copied!' : 'Copy Code: 849201'}</span>
                              </button>
                              <div className="pt-1 mt-1 text-[7.5px] text-slate-400 flex justify-between">
                                <span>DLT: 140716892019</span>
                                <span className="text-emerald-600 font-bold">Delivered in 142ms</span>
                              </div>
                            </div>

                            {/* Transaction Debit Alert */}
                            <div className="bg-white rounded-xl rounded-tl-xs p-2 text-slate-800 text-[9.5px] leading-snug border border-slate-200 max-w-[235px] shadow-2xs">
                              <p className="font-normal">
                                NX-NEXORA: A/c *4892 debited for INR 14,500 on 14-Oct. Avail Bal: INR 1,84,200. Info: nexoraenterprise.in
                              </p>
                              <span className="text-[7.5px] text-slate-400 block mt-1">12:43 PM • Delivered</span>
                            </div>

                            {/* Carrier Health Status Card */}
                            <div className="bg-emerald-50/80 rounded-lg p-1.5 border border-emerald-200/80 text-[8px] text-emerald-800 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                              <span>22 Circles: Direct Jio, Airtel, Vi & BSNL Mesh</span>
                            </div>

                          </div>

                          <div className="bg-white px-3 py-1.5 flex items-center border-t border-slate-200/60 text-[10px] text-slate-400">
                            <div className="flex-1 bg-slate-100 rounded-full px-2.5 py-1 text-slate-400 text-[9.5px]">Text Message</div>
                          </div>
                        </motion.div>
                      )}

                      {/* 3. RCS BUSINESS MESSAGING (Official Google Messages RBM UI) */}
                      {activeChannel === 'rcs' && (
                        <motion.div
                          key="rcs"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-1 flex flex-col justify-between bg-white select-none"
                        >
                          {/* Google Messages RCS Top Header (Exact Match to User Reference) */}
                          <div className="bg-white border-b border-slate-100 px-2.5 py-1.5 flex items-center justify-between shrink-0 shadow-2xs">
                            <div className="flex items-center gap-1.5">
                              <button 
                                onClick={() => setRcsView('card')}
                                className="text-slate-700 hover:text-slate-900 cursor-pointer p-0.5"
                                title="Back"
                              >
                                <ChevronLeft className="w-4 h-4 stroke-[2.4]" />
                              </button>
                              
                              {/* Brand Avatar with Nexora Logo Gradient */}
                              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#0066FF] to-[#7000FF] p-[1.5px] shrink-0 shadow-2xs">
                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                  <span className="text-[10px] font-black bg-gradient-to-r from-[#0066FF] to-[#7000FF] bg-clip-text text-transparent">
                                    N
                                  </span>
                                </div>
                              </div>

                              {/* Brand Name */}
                              <div className="flex items-center gap-1">
                                <span className="text-[11px] font-bold text-slate-900 tracking-tight">
                                  Nexora Business
                                </span>
                              </div>
                            </div>
                            
                            {/* Verified Badge & Options Menu (Exact Match to Reference Image) */}
                            <div className="flex items-center gap-2 pr-1">
                              {/* Solid Dark Shield with Checkmark (Official RBM Verified Badge) */}
                              <div className="w-3.5 h-3.5 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-2xs" title="Verified RBM Account">
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </div>
                              <MoreHorizontal className="w-3.5 h-3.5 text-slate-600 cursor-pointer hover:text-slate-900" />
                            </div>
                          </div>

                          {/* Conversation Scrollable Body */}
                          <div className="p-2 space-y-1.5 flex-1 flex flex-col justify-center overflow-y-auto no-scrollbar">
                            
                            <AnimatePresence mode="wait">
                              {rcsView === 'card' ? (
                                /* VIEW 1: STANDALONE RICH CARD & BRAND BIO (SCREEN 1 IN REFERENCE) */
                                <motion.div
                                  key="view-card"
                                  initial={{ opacity: 0, y: 6 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -6 }}
                                  transition={{ duration: 0.18 }}
                                  className="space-y-1.5"
                                >
                                  {/* Centered Brand Profile Welcome (Google Messages RBM Identity Card) */}
                                  <div className="text-center px-2 pt-0.5 pb-0.5">
                                    <div className="relative inline-block mb-1">
                                      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#0066FF] to-[#7000FF] p-[2px] shadow-xs mx-auto">
                                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                          <span className="text-xs font-black bg-gradient-to-r from-[#0066FF] to-[#7000FF] bg-clip-text text-transparent">
                                            N
                                          </span>
                                        </div>
                                      </div>
                                      {/* Verified Blue Check Badge Overlapping Avatar Bottom-Right */}
                                      <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#1A73E8] border-[1.5px] border-white flex items-center justify-center text-white shadow-xs">
                                        <Check className="w-2 h-2 stroke-[3]" />
                                      </div>
                                    </div>
                                    <p className="text-[7.5px] text-slate-500 leading-tight max-w-[210px] mx-auto font-medium">
                                      Nexora is India's verified enterprise communications platform powering rich omnichannel messaging at scale.
                                    </p>
                                  </div>

                                  {/* Standalone RCS Rich Card (Exact Card Format from Reference) */}
                                  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs max-w-[245px] mx-auto w-full">
                                    
                                    {/* High-Impact Visual Banner (Rich Media Header) */}
                                    <div className="h-[74px] bg-gradient-to-br from-[#E11D48] via-[#F43F5E] to-[#9333EA] p-2 flex flex-col justify-between text-white relative overflow-hidden">
                                      <div className="absolute -right-3 -top-3 w-16 h-16 rounded-full bg-white/10 blur-sm pointer-events-none" />
                                      <div className="absolute -left-3 -bottom-3 w-12 h-12 rounded-full bg-black/10 pointer-events-none" />
                                      
                                      <div className="flex items-center justify-between z-10">
                                        <span className="text-[7px] font-black uppercase tracking-wider bg-black/25 backdrop-blur-md px-1.5 py-0.5 rounded-full border border-white/20">
                                          ⚡ NEXORA FESTIVE
                                        </span>
                                        <span className="text-[7px] font-black bg-yellow-400 text-slate-950 px-1.5 py-0.5 rounded-full shadow-2xs">
                                          60% OFF
                                        </span>
                                      </div>
                                      
                                      <div className="z-10">
                                        <span className="text-[10.5px] font-black leading-tight block tracking-tight">
                                          MEGA CPaaS TECH SALE
                                        </span>
                                        <span className="text-[7px] text-rose-100 font-medium">
                                          WhatsApp • RCS • Cloud APIs
                                        </span>
                                      </div>
                                    </div>

                                    {/* White Card Section: Title & Subtitle */}
                                    <div className="pt-2 px-2 pb-1 text-center">
                                      <h4 className="text-[10px] font-black text-slate-900 leading-tight tracking-tight">
                                        Empower Your Brand with Verified RCS!
                                      </h4>
                                      <p className="text-[7.5px] text-slate-500 leading-snug mt-0.5 font-normal">
                                        Exclusive festive pricing! Get verified sender ID & guaranteed 99.99% direct carrier delivery.
                                      </p>
                                    </div>

                                    {/* Stacked Full-Width Action Buttons (Exact Match to Reference Image) */}
                                    <div className="border-t border-slate-100 divide-y divide-slate-100">
                                      <button
                                        onClick={() => { setRcsView('carousel'); setIsAutoCycle(false); }}
                                        className="w-full py-1.5 text-center text-[8.5px] font-bold text-[#E11D48] hover:bg-rose-50/50 transition-colors cursor-pointer flex items-center justify-center gap-1"
                                      >
                                        <span>Explore Enterprise Offers</span>
                                        <ArrowRight className="w-2.5 h-2.5" />
                                      </button>

                                      <button
                                        onClick={() => {
                                          setRcsClaimed(true);
                                          setTimeout(() => setRcsClaimed(false), 2500);
                                        }}
                                        className="w-full py-1.5 text-center text-[8.5px] font-bold text-[#E11D48] hover:bg-rose-50/50 transition-colors cursor-pointer flex items-center justify-center gap-1"
                                      >
                                        {rcsClaimed ? (
                                          <span className="text-emerald-600 flex items-center gap-1 font-bold">
                                            <Check className="w-2.5 h-2.5" /> ₹2,000 Credits Claimed!
                                          </span>
                                        ) : (
                                          <span>Claim ₹2,000 Promo Code</span>
                                        )}
                                      </button>
                                    </div>

                                  </div>

                                  {/* Delivery Timestamp */}
                                  <div className="text-right pr-2 text-[7px] text-slate-400">
                                    <span>14:02 ✓✓ • RCS</span>
                                  </div>
                                </motion.div>
                              ) : (
                                /* VIEW 2: INTERACTIVE CAROUSEL FLOW (SCREEN 2 IN REFERENCE) */
                                <motion.div
                                  key="view-carousel"
                                  initial={{ opacity: 0, y: 6 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -6 }}
                                  transition={{ duration: 0.18 }}
                                  className="space-y-1.5"
                                >
                                  {/* User Reply Bubble 1 */}
                                  <div className="flex justify-end">
                                    <div className="bg-[#1A73E8] text-white text-[8px] font-bold py-1 px-2.5 rounded-2xl rounded-tr-xs shadow-2xs">
                                      Explore Enterprise Offers
                                    </div>
                                  </div>

                                  {/* Horizontal Carousel (PS5 Style from Reference) */}
                                  <div className="flex items-center gap-2 overflow-x-auto py-0.5 px-0.5 no-scrollbar">
                                    
                                    {/* Carousel Card 1: WhatsApp API */}
                                    <div className="w-[122px] shrink-0 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs flex flex-col justify-between">
                                      <div className="h-14 bg-gradient-to-tr from-[#008069] to-[#25D366] p-1.5 flex flex-col justify-between text-white relative">
                                        <div className="flex justify-between items-start">
                                          <span className="text-[6.5px] font-bold bg-white/20 px-1 py-0.2 rounded">API</span>
                                          <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                                        </div>
                                        <div>
                                          <span className="text-[8.5px] font-black leading-tight block">WhatsApp Official</span>
                                          <span className="text-[6.5px] opacity-90">Cloud Business API</span>
                                        </div>
                                      </div>
                                      <div className="p-1.5 text-center">
                                        <div className="text-[8px] font-bold text-slate-900">Green Tick Suite</div>
                                        <div className="text-[7px] text-slate-500 font-mono mt-0.5">₹0.12 / msg</div>
                                      </div>
                                      <button 
                                        onClick={() => { setRcsClaimed(true); setTimeout(() => setRcsClaimed(false), 2000); }}
                                        className="border-t border-slate-100 py-1 text-center text-[8px] font-bold text-[#E11D48] hover:bg-slate-50 cursor-pointer"
                                      >
                                        Deploy Now
                                      </button>
                                    </div>

                                    {/* Carousel Card 2: RCS Business */}
                                    <div className="w-[122px] shrink-0 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs flex flex-col justify-between">
                                      <div className="h-14 bg-gradient-to-tr from-[#1A73E8] to-[#4285F4] p-1.5 flex flex-col justify-between text-white relative">
                                        <div className="flex justify-between items-start">
                                          <span className="text-[6.5px] font-bold bg-white/20 px-1 py-0.2 rounded">RBM</span>
                                          <Sparkles className="w-2.5 h-2.5 text-white" />
                                        </div>
                                        <div>
                                          <span className="text-[8.5px] font-black leading-tight block">Google RCS Agent</span>
                                          <span className="text-[6.5px] opacity-90">Rich Interactive Cards</span>
                                        </div>
                                      </div>
                                      <div className="p-1.5 text-center">
                                        <div className="text-[8px] font-bold text-slate-900">Verified Sender ID</div>
                                        <div className="text-[7px] text-slate-500 font-mono mt-0.5">Included in Plan</div>
                                      </div>
                                      <button 
                                        onClick={() => { setRcsClaimed(true); setTimeout(() => setRcsClaimed(false), 2000); }}
                                        className="border-t border-slate-100 py-1 text-center text-[8px] font-bold text-[#E11D48] hover:bg-slate-50 cursor-pointer"
                                      >
                                        Deploy RCS
                                      </button>
                                    </div>

                                  </div>

                                  {/* User Reply Bubble 2 */}
                                  <div className="flex justify-end">
                                    <div className="bg-[#1A73E8] text-white text-[8px] font-bold py-1 px-2.5 rounded-2xl rounded-tr-xs shadow-2xs">
                                      Claim ₹2,000 Promo Code
                                    </div>
                                  </div>

                                  {/* Promo Code Response Banner (Bottom Banner in Reference) */}
                                  <div className="bg-gradient-to-r from-[#E11D48] to-[#F43F5E] rounded-xl p-1.5 text-white flex items-center justify-between shadow-2xs max-w-[210px] ml-auto">
                                    <div>
                                      <div className="text-[6.5px] font-bold uppercase tracking-wider text-rose-200">PROMO CODE</div>
                                      <div className="text-[8.5px] font-black">NEXORA2000 • 60% OFF</div>
                                    </div>
                                    <button 
                                      onClick={() => { setRcsView('card'); }}
                                      className="text-[7px] bg-white text-[#E11D48] px-1.5 py-0.5 rounded font-black cursor-pointer hover:bg-rose-50"
                                    >
                                      ‹ Back
                                    </button>
                                  </div>

                                </motion.div>
                              )}
                            </AnimatePresence>

                          </div>

                          {/* Google Messages Bottom Composer Bar (Exact Match to Reference) */}
                          <div className="bg-white px-2 py-1 flex items-center gap-1.5 border-t border-slate-100 shrink-0">
                            {/* (+) Add icon */}
                            <div className="w-5 h-5 rounded-full border border-slate-300 text-slate-600 flex items-center justify-center text-xs font-bold shrink-0 cursor-pointer hover:bg-slate-50">
                              +
                            </div>
                            
                            {/* [🖼️] Image gallery icon */}
                            <ImageIcon className="w-3.5 h-3.5 text-slate-500 shrink-0 cursor-pointer hover:text-slate-700" />

                            {/* Pill Composer Input */}
                            <div className="flex-1 bg-slate-50 border border-slate-200/90 rounded-full px-2.5 py-1 flex items-center justify-between text-[8px]">
                              <span className="text-slate-400 font-medium">RCS message</span>
                              <span className="text-[10px]">😊</span>
                            </div>

                            {/* Microphone icon */}
                            <Mic className="w-3.5 h-3.5 text-slate-500 shrink-0 cursor-pointer hover:text-slate-700" />
                          </div>

                          {/* Android 3-Button System Navigation Bar (Bottom of Screen) */}
                          <div className="bg-slate-50/90 border-t border-slate-150 py-1 px-8 flex items-center justify-between text-slate-400 select-none shrink-0">
                            {/* Recents icon ||| */}
                            <span className="text-[9px] font-black tracking-tighter leading-none cursor-pointer hover:text-slate-600">
                              |||
                            </span>
                            {/* Home icon (rounded square) */}
                            <span className="w-2.5 h-2.5 rounded-sm border border-slate-400 inline-block cursor-pointer hover:border-slate-600" />
                            {/* Back chevron < */}
                            <ChevronLeft className="w-3 h-3 stroke-[2.2] cursor-pointer hover:text-slate-600" />
                          </div>

                        </motion.div>
                      )}

                      {/* 4. CLOUD VOICE SCREEN */}
                      {activeChannel === 'voice' && (
                        <motion.div
                          key="voice"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-1 flex flex-col justify-between bg-gradient-to-b from-slate-900 via-[#0A0F1C] to-black text-white p-4"
                        >
                          <div className="text-center pt-2">
                            <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mx-auto mb-2 text-[#00D2FF]">
                              <PhoneCall className="w-5 h-5 animate-pulse" />
                            </div>
                            <h3 className="text-xs font-black text-white">Nexora AI Voice Gateway</h3>
                            <p className="text-[8.5px] text-emerald-400 font-mono mt-0.5">Call Connected • 00:24</p>
                            <span className="text-[7.5px] text-slate-400">24-bit Opus HD Voice • Mumbai NOC</span>
                          </div>

                          {/* Sound wave visualizer animation */}
                          <div className="flex items-center justify-center gap-0.5 my-3">
                            {[40, 75, 55, 90, 60, 100, 70, 45, 80, 50, 65, 30, 85, 45, 60].map((h, i) => (
                              <motion.span
                                key={i}
                                animate={{ height: [`${h * 0.22}px`, `${h * 0.4}px`, `${h * 0.22}px`] }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.06 }}
                                className="w-0.5 bg-gradient-to-t from-cyan-400 to-blue-500 rounded-full"
                              />
                            ))}
                          </div>

                          {/* IVR Interactive Prompt */}
                          <div className="bg-white/10 rounded-lg p-2 border border-white/10 text-center mb-2">
                            <span className="text-[8px] text-slate-300 block mb-1">IVR Intent Recognition:</span>
                            <span className="text-[9px] text-cyan-300 font-bold font-mono">"Key 1 Pressed: WhatsApp Business API"</span>
                          </div>

                          {/* In-Call Controls */}
                          <div className="grid grid-cols-3 gap-2 text-center pb-2">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mx-auto text-xs">
                              <Volume2 className="w-3.5 h-3.5" />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center mx-auto text-xs">
                              <PhoneOff className="w-3.5 h-3.5" />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mx-auto text-xs">
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            </div>
                          </div>
                        </motion.div>
                      )}

                    </AnimatePresence>
                  </div>

                  {/* Bottom Home Indicator Bar */}
                  <div className="bg-white py-1 flex justify-center border-t border-slate-100">
                    <div className="w-20 h-1 bg-slate-300 rounded-full" />
                  </div>

                </div>
              </div>

            </div>

            {/* Clean Carrier Telemetry Strip Below Phone */}
            <div className="mt-3 flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-[9.5px] sm:text-[10px] font-semibold text-slate-700 shadow-2xs max-w-[95%] text-center">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Direct Carrier Mesh: Jio, Airtel & Vi</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="font-mono text-emerald-600 font-bold">142ms OTP Latency</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
