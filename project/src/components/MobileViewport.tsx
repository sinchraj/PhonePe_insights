import { ReactNode } from 'react';

interface MobileViewportProps {
  children: ReactNode;
}

export function MobileViewport({ children }: MobileViewportProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
      <div className="relative w-full max-w-[375px] h-[812px] bg-white rounded-[40px] shadow-2xl overflow-hidden border-8 border-slate-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-800 rounded-b-3xl z-50" />
        <div className="w-full h-full overflow-y-auto scrollbar-hide">
          {children}
        </div>
      </div>
    </div>
  );
}
