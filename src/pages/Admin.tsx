import {useState} from 'react';
import PageHero from '../components/PageHero';
import {defaultRates,getRates} from '../data';
import {KeyRound,Save,LogOut,ShieldAlert,RefreshCw,RotateCcw} from 'lucide-react';

const PASSWORD='280385';

export default function Admin(){
  const [logged,setLogged]=useState(()=>sessionStorage.getItem('rnb-admin')==='yes');
  const [pw,setPw]=useState('');
  const [error,setError]=useState('');
  const [rates,setRates]=useState(getRates());
  const [notice,setNotice]=useState('');

  const login=(e:React.FormEvent)=>{e.preventDefault();if(pw===PASSWORD){sessionStorage.setItem('rnb-admin','yes');setLogged(true);setError('');setPw('')}else setError('Incorrect password')};
  const save=(e:React.FormEvent)=>{e.preventDefault();const next={...rates,updatedAt:new Date().toISOString()};localStorage.setItem('rnb-rates',JSON.stringify(next));setRates(next);window.dispatchEvent(new Event('rates-updated'));setNotice('Rates saved successfully on this device.');setTimeout(()=>setNotice(''),2800)};
  const refresh=()=>{const latest=getRates();setRates(latest);window.dispatchEvent(new Event('rates-updated'));setNotice('Rates refreshed from saved browser data.');setTimeout(()=>setNotice(''),2500)};
  const reset=()=>{const next={...defaultRates,updatedAt:new Date().toISOString()};localStorage.setItem('rnb-rates',JSON.stringify(next));setRates(next);window.dispatchEvent(new Event('rates-updated'));setNotice('Rates reset to the default values.');setTimeout(()=>setNotice(''),2500)};

  if(!logged)return <><PageHero eyebrow="Administration" title="Rate management login" text="Authorised administrators can update the rates displayed on this browser/device."/><section className="py-20"><form onSubmit={login} className="card max-w-md mx-auto"><KeyRound className="text-emerald-600" size={34}/><h2 className="text-2xl font-black mt-4">Admin Login</h2><input type="password" className="form-input mt-5" placeholder="Password" value={pw} onChange={e=>setPw(e.target.value)} autoFocus/><button className="btn-dark w-full mt-4">Login</button>{error&&<p className="text-red-600 font-bold text-sm mt-3">{error}</p>}<div className="mt-6 p-4 bg-amber-50 rounded-xl text-xs text-amber-900 flex gap-2"><ShieldAlert size={18} className="shrink-0"/>Browser-only admin. Changes are stored on this device only. A shared live rate system requires a secure backend/database.</div></form></section></>;

  return <><PageHero eyebrow="Administration" title="Update today's rates" text="Edit, save, refresh or reset the rates displayed on this browser/device."/><section className="py-20"><form onSubmit={save} className="card max-w-2xl mx-auto">
    <div className="grid sm:grid-cols-2 gap-4"><label className="font-bold text-sm">Rate with commission<input type="number" className="form-input mt-2" value={rates.withCommission} onChange={e=>setRates({...rates,withCommission:Number(e.target.value)})}/></label><label className="font-bold text-sm">Rate without commission<input type="number" className="form-input mt-2" value={rates.withoutCommission} onChange={e=>setRates({...rates,withoutCommission:Number(e.target.value)})}/></label></div>
    <label className="font-bold text-sm block mt-4">Straight banking / agent reduction (%)<input type="number" step="0.1" className="form-input mt-2" value={rates.bankReduction} onChange={e=>setRates({...rates,bankReduction:Number(e.target.value)})}/></label>
    <div className="flex flex-wrap gap-3 mt-6"><button type="submit" className="btn-primary"><Save size={18}/> Save Rates</button><button type="button" onClick={refresh} className="btn-outline"><RefreshCw size={18}/> Refresh Saved Rates</button><button type="button" onClick={reset} className="btn-outline"><RotateCcw size={18}/> Reset Defaults</button></div>
    {notice&&<p className="text-emerald-700 font-bold mt-4">{notice}</p>}
    <button type="button" onClick={()=>{sessionStorage.removeItem('rnb-admin');setLogged(false)}} className="mt-8 text-sm font-bold text-slate-500 inline-flex items-center gap-2"><LogOut size={16}/> Log out</button>
  </form></section></>;
}
