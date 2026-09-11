import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

function Reveal({ children, className = '', delay = '' }: { children: React.ReactNode; className?: string; delay?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} ${inView ? `animate-fade-up ${delay}` : 'opacity-0'}`}>
      {children}
    </div>
  );
}

const SERVICES = [
  {
    title: 'Kitchen Counter Tops',
    img: 'https://i.imgur.com/rBPNMKo.jpeg',
    desc: 'Transform your kitchen with stunning stone countertops. We fabricate and install granite, marble, quartz, and porcelain countertops that are both beautiful and highly functional. Our surfaces are heat-resistant, scratch-resistant, and easy to maintain.',
    features: ['Custom edge profiles', 'Precision cut-outs for sinks & cooktops', 'Seamless joins', 'Full polish & seal'],
  },
  {
    title: 'Bar Tops',
    img: 'https://i.imgur.com/bYZtqnQ.jpeg',
    desc: 'Create the ultimate bar experience with a premium stone bar top. Whether it\'s a home entertainment bar or a commercial bar setup, our stone surfaces provide an elegant and durable solution that impresses guests and withstands heavy use.',
    features: ['Waterfall edges', 'Overhang seating designs', 'Commercial grade sealing', 'Custom shapes available'],
  },
  {
    title: 'Reception Counter Tops',
    img: 'https://i.imgur.com/9uJGT7h.jpeg',
    desc: 'Make a powerful first impression with a stunning stone reception counter. Our commercial stone counters project professionalism and quality. Perfect for offices, hotels, salons, medical practices, and retail environments.',
    features: ['Commercial grade materials', 'Large format slabs available', 'Branded inlays possible', 'Fast installation'],
  },
  {
    title: 'Wall Cladding',
    img: 'https://i.imgur.com/4QFhhOU.jpeg',
    desc: 'Elevate any interior or exterior wall with premium stone cladding. Wall cladding using granite, marble, or porcelain creates dramatic focal points and adds lasting value to any property. Ideal for feature walls, fireplace surrounds, and building facades.',
    features: ['Interior & exterior applications', 'Fireplace surrounds', 'Feature wall design', 'Textured & polished finishes'],
  },
  {
    title: 'Bathroom Vanities',
    img: 'https://i.imgur.com/BYZAp69.jpeg',
    desc: 'Bring spa-quality luxury to your bathroom with a custom stone vanity top. Our bathroom vanities are crafted to fit your space perfectly, with basin cut-outs, undercount installations, and beautiful edge profiles to suit any design style.',
    features: ['Single & double basin options', 'Undermount & drop-in basins', 'Waterproof sealing', 'Matching splashbacks'],
  },
  {
    title: 'Custom Projects',
    img: 'https://i.imgur.com/k8syAx0.jpeg',
    desc: 'Have a unique vision? Our team works with architects, interior designers, and homeowners to bring bespoke stone installations to life. From feature staircases to outdoor entertainment areas, we handle projects of any complexity.',
    features: ['Staircase treads & risers', 'Outdoor entertainment areas', 'Swimming pool surrounds', 'Commercial fit-outs'],
  },
];

const MATERIALS = [
  { name: 'Granite', img: 'https://i.imgur.com/bYZtqnQ.jpeg', desc: 'A natural igneous rock prized for its durability and unique patterns. Every slab is one-of-a-kind.' },
  { name: 'Marble', img: 'https://i.imgur.com/4QFhhOU.jpeg', desc: 'Classic elegance with veining patterns that have adorned palaces for centuries.' },
  { name: 'Quartz', img: 'https://i.imgur.com/BYZAp69.jpeg', desc: 'Engineered stone with consistent colour and pattern. Non-porous and virtually maintenance-free.' },
  { name: 'Porcelain', img: 'https://i.imgur.com/k8syAx0.jpeg', desc: 'Ultra-hard and versatile. Perfect for large format applications and high-traffic areas.' },
];

export default function Services() {
  return (
    <div className="page-enter pt-24">
      {/* Header */}
      <section className="relative py-20 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://i.imgur.com/7dTi44k.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag text-amber-400">What We Do</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Our Services</h1>
          <div className="gold-bar mx-auto" />
          <p className="text-stone-300 max-w-2xl mx-auto mt-4">
            From kitchen countertops to wall cladding — we supply and install premium stone surfaces for every application.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-24">
          {SERVICES.map((svc, i) => (
            <Reveal key={svc.title}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="gallery-item rounded-3xl overflow-hidden shadow-xl h-[360px]">
                    <img src={svc.img} alt={svc.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
                <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                  <span className="section-tag">Service 0{i + 1}</span>
                  <h2 className="section-heading mb-4">{svc.title}</h2>
                  <div className="gold-bar" />
                  <p className="text-stone-500 leading-relaxed mt-4 mb-6">{svc.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-stone-700 text-sm">
                        <CheckCircle size={16} className="text-amber-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-gold">
                    Get a Quote <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-14">
            <span className="section-tag">Materials</span>
            <h2 className="section-heading text-center">Stone Materials We Work With</h2>
            <div className="gold-bar mx-auto" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MATERIALS.map((mat, i) => (
              <Reveal key={mat.name} delay={`delay-${(i + 1) * 100}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="gallery-item h-40">
                    <img src={mat.img} alt={mat.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-stone-800 mb-2">{mat.name}</h3>
                    <p className="text-stone-500 text-xs leading-relaxed">{mat.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-amber-100 mb-8">Contact us for a free consultation and no-obligation quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+27833522647" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-amber-600 font-semibold rounded-xl hover:bg-amber-50 transition-colors">
              Call 083 352 2647
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
              Request a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
