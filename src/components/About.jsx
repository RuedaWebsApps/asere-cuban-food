import React from 'react';
import { ChefHat, Flame, Utensils, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO, FREE_SIDES } from '../data/menuData';

export default function About() {
  return (
    <section id="nosotros" className="py-16 lg:py-24 bg-[#091120] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Real Kitchen Photo + Chef Card */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-5">
            <div className="bistro-card rounded-2xl overflow-hidden">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/images/tamales-about.jpg"
                  alt="Tamales cubanos recién preparados en ASERE Cuban Food"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1322] via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-semibold text-stone-200">
                  Tamales artesanales envueltos en hoja de maíz
                </span>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3.5 border-b border-white/10 pb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c82829]/20 border border-[#c82829]/40 flex items-center justify-center text-[#f3d18a]">
                    <ChefHat className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-stone-50 font-heading">
                      {RESTAURANT_INFO.chef}
                    </h4>
                    <p className="text-xs text-[#d9a441] font-semibold uppercase tracking-wider">
                      Chef & Fundador
                    </p>
                  </div>
                </div>

                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed italic">
                  "Nuestra cocina nace del respeto a las recetas tradicionales de Cuba: sofrito paciente de ajo y cebolla, mojo de naranja agria para el pernil, y tamales hechos a mano con maíz fresco."
                </p>
              </div>
            </div>
          </div>

          {/* Right Story Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#d9a441]">
              Nuestra Historia & Compromiso
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-50 font-heading leading-tight">
              De Nuestra Tierra a tu Mesa: <br />
              <span className="text-[#d9a441] italic">El Verdadero Sabor Criollo</span>
            </h2>

            <p className="text-stone-300 text-base leading-relaxed">
              En <strong className="text-stone-100">ASERE Cuban Food</strong> celebramos la gastronomía cubana tradicional en Pflugerville y el área de Austin. Cada preparación respeta el sazón casero: carnes marinadas por horas, cocción lenta y guisos reducidos con especias de la isla.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-[#0d1628] border border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#c82829]/20 text-[#f87171] shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-100">Asados al Punto</h4>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                    Cuerito dorado y crujiente en el pernil asado y chicharrones frescos.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0d1628] border border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#d9a441]/15 text-[#d9a441] shrink-0">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-100">Porciones por Libra</h4>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                    Ordena ½ lb para disfrutar al momento o 1 lb para compartir en familia.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1628] border border-[#d9a441]/20 rounded-xl p-4 space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                Cada plato principal incluye gratis 1 acompañamiento:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-200">
                {FREE_SIDES.map((side, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{side}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
