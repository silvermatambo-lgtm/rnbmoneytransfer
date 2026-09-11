export default function PageHero({eyebrow,title,text}:{eyebrow:string,title:string,text:string}){
 return <section className="pt-32 pb-16 bg-gradient-to-br from-[#071b12] via-[#0c3824] to-[#071b12] text-white"><div className="max-w-7xl mx-auto px-4"><span className="text-xs uppercase tracking-[.22em] font-black text-amber-300">{eyebrow}</span><h1 className="text-4xl md:text-6xl font-black mt-3 max-w-4xl">{title}</h1><p className="text-emerald-50/80 max-w-3xl mt-5 text-lg leading-relaxed">{text}</p></div></section>
}
