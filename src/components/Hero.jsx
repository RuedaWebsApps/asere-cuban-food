import React from 'react';
import { MapPin, Phone, ArrowRight, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function Hero({ onExploreMenu }) {
  return (
    <section className="relative overflow-hidden py-12 lg:py-20 bg-havana-surface border-b border-[#d9a441]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Editorial Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d9a441]/10 border border-[#d9a441]/30 text-[#f3d18a] text-xs font-bold uppercase tracking-[0.18em]">
              <Utensils className="w-3.5 h-3.5" />
              <span>Auténtica Cocina Cubana • Pflugerville, TX</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-50 leading-[1.1] font-heading">
              Tradición & Sazón <br />
              <span className="text-[#d9a441] italic">de la Cocina Cubana</span>
            </h1>

            <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Preparamos cada plato al momento siguiendo recetas familiares de la isla: <strong className="text-stone-100">Pernil Asado</strong> de cuerito crujiente, <strong className="text-stone-100">Ropa Vieja</strong>, <strong className="text-stone-100">Tamales</strong> hechos a mano y <strong className="text-stone-100">Yuca con Mojo</strong>.
            </p>

            {/* Value Propositions */}
            <div className="grid grid-cols-3 gap-3 pt-1 max-w-lg mx-auto lg:mx-0">
              <div className="bg-[#0d1628] border border-white/10 rounded-xl p-3.5 text-center">
                <span className="block text-lg sm:text-xl font-bold text-[#d9a441] tabular-nums">½ lb · 1 lb</span>
                <span className="text-[11px] text-stone-400 font-medium">Porciones a elegir</span>
              </div>
              <div className="bg-[#0d1628] border border-white/10 rounded-xl p-3.5 text-center">
                <span className="block text-lg sm:text-xl font-bold text-emerald-400">1 Gratis</span>
                <span className="text-[11px] text-stone-400 font-medium">Acompañamiento</span>
              </div>
              <div className="bg-[#0d1628] border border-white/10 rounded-xl p-3.5 text-center">
                <span className="block text-lg sm:text-xl font-bold text-stone-100">Fresco</span>
                <span className="text-[11px] text-stone-400 font-medium">Hecho cada día</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#c82829] hover:bg-[#b01f20] text-white font-bold text-sm uppercase tracking-wider px-7 py-4 rounded-xl shadow-lg transition-all cursor-pointer"
              >
                <span>Ver Menú Completo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0d1628] hover:bg-[#14223c] text-stone-100 font-bold text-sm uppercase tracking-wider px-6 py-4 rounded-xl border border-[#d9a441]/30 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Ordenar por WhatsApp</span>
              </a>
            </div>

            {/* Address & Phone */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-stone-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c82829]" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#d9a441]" />
                <span>{RESTAURANT_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Right Photography Feature */}
          <div className="lg:col-span-5">
            <div className="bistro-card rounded-2xl overflow-hidden">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/images/pernil-hero.jpg"
                  alt="Pernil Asado Criollo de ASERE Cuban Food"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1322] via-transparent to-black/20" />
                <span className="absolute top-3.5 left-3.5 bg-[#070d19]/85 backdrop-blur-sm border border-[#d9a441]/40 text-[#f3d18a] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Especialidad de la Casa
                </span>
              </div>

              <div className="p-5 sm:p-6 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-stone-50 font-heading">
                    Pernil Asado Criollo
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-300 mt-1 leading-relaxed">
                    Horneado lentamente con mojo cubano de ajo y naranja agria hasta lograr un cuerito dorado y crujiente.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-baseline gap-3 tabular-nums">
                    <span className="text-xs text-stone-400">
                      ½ lb <strong className="text-base text-[#d9a441] font-bold ml-0.5">$8.99</strong>
                    </span>
                    <span className="text-stone-600">|</span>
                    <span className="text-xs text-stone-400">
                      1 lb <strong className="text-base text-[#d9a441] font-bold ml-0.5">$16.99</strong>
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/25 px-2.5 py-1 rounded-lg">
                    + 1 Acompañamiento Gratis
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
