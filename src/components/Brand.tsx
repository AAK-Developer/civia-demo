import { Sparkles } from 'lucide-react'

export default function Brand({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return <div className="flex items-center gap-3">
    <div className={`grid place-items-center rounded-2xl ${compact ? 'h-10 w-10' : 'h-12 w-12'} ${light ? 'bg-white text-civic-900' : 'bg-civic-900 text-white'}`}>
      <Sparkles size={compact ? 20 : 24} strokeWidth={2.2}/>
    </div>
    <div>
      <div className={`font-black tracking-tight ${compact ? 'text-xl' : 'text-2xl'} ${light ? 'text-white' : 'text-civic-900'}`}>Civ<span className="text-amberx">IA</span></div>
      {!compact && <div className={`text-[10px] uppercase tracking-[.24em] ${light ? 'text-white/60' : 'text-civic-600'}`}>Ciudad inteligente</div>}
    </div>
  </div>
}
