import {useEffect,useState} from 'react';
import {Coins,Landmark,RefreshCw} from 'lucide-react';
import {getRates,Rates} from '../data';

export default function RateBoard({compact=false}:{compact?:boolean}){
  const [r,setR]=useState<Rates>(getRates());
  const [spinning,setSpinning]=useState(false);
  const refresh=()=>{setSpinning(true);setR(getRates());setTimeout(()=>setSpinning(false),450)};
  useEffect(()=>{const fn=()=>setR(getRates());addEventListener('storage',fn);addEventListener('rates-updated',fn as EventListener);return()=>{removeEventListener('storage',fn);removeEventListener('rates-updated',fn as EventListener)}},[]);
  return <div className={`rounded-[2rem] overflow-hidden shadow-2xl border border-emerald-100 bg-white ${compact?'':'max-w-4xl mx-auto'}`}>
    <div className="bg-gradient-to-r from-emerald-700 to-emerald-500 text-white px-6 py-4 flex items-center justify-between"><div><div className="text-xs uppercase tracking-widest font-black text-emerald-100">Today's Transfer Rates</div><div className="font-black text-xl">ZAR → MWK</div></div><button onClick={refresh} type="button" aria-label="Refresh rates" title="Refresh rates" className="p-2 rounded-xl hover:bg-white/10 transition"><RefreshCw size={22} className={spinning?'animate-spin':''}/></button></div>
    <div className={`grid ${compact?'grid-cols-2':'md:grid-cols-3'} divide-x divide-slate-100`}><div className="p-6 text-center"><Coins className="mx-auto text-emerald-600"/><div className="text-xs uppercase font-black text-slate-400 mt-3">With Commission</div><div className="text-4xl font-black text-slate-950 mt-1">{r.withCommission}</div><div className="text-xs text-slate-500">MWK per ZAR</div></div><div className="p-6 text-center"><Coins className="mx-auto text-amber-500"/><div className="text-xs uppercase font-black text-slate-400 mt-3">Without Commission</div><div className="text-4xl font-black text-slate-950 mt-1">{r.withoutCommission}</div><div className="text-xs text-slate-500">MWK per ZAR</div></div>{!compact&&<div className="p-6 text-center"><Landmark className="mx-auto text-sky-600"/><div className="text-xs uppercase font-black text-slate-400 mt-3">Straight Banking / Agent</div><div className="text-4xl font-black text-slate-950 mt-1">-{r.bankReduction}%</div><div className="text-xs text-slate-500">Rate adjustment</div></div>}</div>
    <div className="px-6 py-3 bg-slate-50 text-xs text-slate-500 text-center">Rates may change during the day. Confirm the current rate with Ben before sending funds.</div>
  </div>;
}
