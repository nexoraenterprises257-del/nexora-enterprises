import { getAssetUrl } from '../../lib/utils';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  theme?: 'light' | 'dark';
}

export function BrandLogo({ className = '', size = 'md', showSubtitle = true, theme = 'light' }: BrandLogoProps) {
  const imgSizes = {
    sm: 'h-8 w-auto',
    md: 'h-8 sm:h-10 w-auto',
    lg: 'h-12 w-auto',
    xl: 'h-14 w-auto',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-lg sm:text-[22px]',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      <div className="relative shrink-0 flex items-center justify-center">
        <img 
          src={getAssetUrl('/logo.png')} 
          alt="Nexora Enterprise" 
          className={`${imgSizes[size]} object-contain filter drop-shadow-[0_4px_12px_rgba(37,99,235,0.15)] group-hover:scale-105 transition-transform duration-300`}
        />
      </div>
      <div className="flex flex-col leading-none w-fit">
        <div className={`font-black tracking-tight flex items-center gap-0.5 ${textSizes[size]} ${theme === 'dark' ? 'text-white' : 'text-[#0A0F1C]'}`}>
          <span>Nexora</span>
          <span className="text-[#2563EB]">.</span>
        </div>
        {showSubtitle && (
          <span className={`mt-1 flex justify-between w-full text-[8.5px] font-bold tracking-[0.2em] uppercase ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
            Enterprise Communications
          </span>
        )}
      </div>
    </div>
  );
}
