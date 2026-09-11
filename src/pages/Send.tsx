import {useState} from 'react';
import PageHero from '../components/PageHero';
import {MessageCircle,Send as SendIcon} from 'lucide-react';

const BEN_WHATSAPP='27642643742';

export default function Send(){
  const [form,setForm]=useState({name:'',phone:'',amount:'',recipient:'',destination:'',method:'Mobile Money',notes:''});
  const submit=(e:React.FormEvent)=>{
    e.preventDefault();
    const message=`Hello Ben, I would like to send money to Malawi.\n\nName: ${form.name}\nPhone: ${form.phone}\nAmount to send (ZAR): ${form.amount}\nRecipient name: ${form.recipient}\nDestination / Area: ${form.destination}\nReceiving method: ${form.method}\nNotes: ${form.notes||'None'}\n\nPlease confirm today's rate and transfer instructions.`;
    window.open(`https://wa.me/${BEN_WHATSAPP}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');
  };
  return <><PageHero eyebrow="Send Money" title="Start your transfer with Ben." text="Complete the secure enquiry form below. No card, PIN or bank-login details are collected. Your transfer request will open directly in WhatsApp to Ben for confirmation and instructions."/>
  <section className="py-20"><div className="max-w-4xl mx-auto px-4"><form onSubmit={submit} className="card">
    <div className="grid md:grid-cols-2 gap-4">
      <label className="font-bold text-sm">Your full name<input required className="form-input mt-2" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full name"/></label>
      <label className="font-bold text-sm">Your phone number<input required className="form-input mt-2" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Phone / WhatsApp"/></label>
      <label className="font-bold text-sm">Amount to send (ZAR)<input required type="number" min="1" step="0.01" className="form-input mt-2" value={form.amount} onChange={e=>setForm({...form,amount:e.target.value})} placeholder="e.g. 1000"/></label>
      <label className="font-bold text-sm">Recipient name<input required className="form-input mt-2" value={form.recipient} onChange={e=>setForm({...form,recipient:e.target.value})} placeholder="Recipient in Malawi"/></label>
      <label className="font-bold text-sm">Destination / area<input required className="form-input mt-2" value={form.destination} onChange={e=>setForm({...form,destination:e.target.value})} placeholder="City / district"/></label>
      <label className="font-bold text-sm">Receiving method<select className="form-input mt-2" value={form.method} onChange={e=>setForm({...form,method:e.target.value})}><option>Mobile Money</option><option>Banking</option><option>Agent Number / Collection</option><option>Not sure - advise me</option></select></label>
    </div>
    <label className="font-bold text-sm block mt-4">Notes (optional)<textarea className="form-input mt-2 min-h-28" value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} placeholder="Any extra transfer information"/></label>
    <button type="submit" className="btn-primary mt-6 w-full md:w-auto"><SendIcon size={18}/> Send Request to Ben on WhatsApp</button>
    <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-200 p-5 text-sm text-amber-950"><b>Safety:</b> do not enter or send passwords, PINs, OTPs or online-banking login details. Ben will confirm the final rate and payment instructions directly.</div>
  </form>
  <div className="mt-6 text-center"><a href="https://wa.me/27642643742?text=Hello%20Ben,%20I%20would%20like%20help%20with%20a%20money%20transfer." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-black text-emerald-700"><MessageCircle size={18}/> WhatsApp Ben directly: 064 264 3742</a></div>
  </div></section></>;
}
