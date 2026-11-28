import React from 'react';
import { Check } from 'lucide-react';
import { FREE_SIDES_DETAILS } from '../data/menuData';

export default function PlateGallery() {
  return (
    <section id="guarniciones" className="py-16 lg:py-20 bg-[#091120] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#d9a441]/15">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d9a441]">
              Incluido en cada plato principal
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-50 font-heading">
              Acompañamientos de la Casa
            </h2>
          </div>
          <p className="text-sm text-stone-400 max-w-md">
            Elige gratis 1 de estas 4 guarniciones tradicionales al ordenar cualquiera de nuestros platos principales por ½ lb o 1 lb.
          </p>
        </div>

        {/* Sides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FREE_SIDES_DETAILS.map((side) => (
            <div
              key={side.id}
              className="bistro-card rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              {side.image ? (
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={side.image}
                    alt={side.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1322]/70 via-transparent to-transparent" />
                </div>
              ) : null}

              <div className={`p-5 flex-1 flex flex-col justify-between ${!side.image ? 'pt-6' : ''}`}>
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    <Check className="w-3.5 h-3.5" />
                    <span>{side.badge}</span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-50 font-heading leading-snug">
                    {side.name}
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {side.description}
                  </p>
                </div>

                {!side.image && (
                  <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-stone-400 font-medium">
                    Disponible con ½ lb o 1 lb
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
