import React from 'react';
import { ChefHat, Flame, Utensils, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO, FREE_SIDES } from '../data/menuData';

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-[#071326] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual: Plated composition */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-3xl blur-xl" />
              
              <div className="relative bg-[#0c1c38] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
                
                <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center text-white shadow-lg">
                    <ChefHat className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white font-heading">
                      {RESTAURANT_INFO.chef}
                    </h4>
                    <p className="text-sm text-red-400 font-semibold">
                      Fundador & Sazón de la Casa
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  "Nuestra cocina nace del respeto a las recetas que aprendimos en Cuba: el sofrito paciente de ajo y cebolla, la naranja agria en el mojo para el lechón asado, y los tamales hechos a mano con maíz fresco. No usamos atajos, cocinamos con el corazón."
                </p>

                {/* Free Sides Callout Card */}
                <div className="bg-gradient-to-br from-red-950/60 to-blue-950/60 border border-red-500/30 rounded-2xl p-4 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-extrabold text-amber-400">
                      Incluido con tu Plato Principal
                    </span>
                    <span className="text-[11px] font-black bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                      GRATIS
                    </span>
                  </div>
                  <h5 className="text-sm font-bold text-white">
                    Elige 1 de nuestros 4 Acompañamientos:
                  </h5>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-200 pt-1">
                    {FREE_SIDES.map((side, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{side}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                  <span>📍 Pflugerville, Texas</span>
                  <span>❤️ Pasión por la Tradición</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <span>Nuestra Historia & Compromiso</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading leading-tight">
              De Nuestra Tierra a tu Mesa: <br />
              <span className="text-gradient-red-gold">El Verdadero Sabor Criollo</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              En <strong className="text-white">ASERE Cuban Food</strong> celebramos la gastronomía cubana tradicional en Pflugerville y el área de Austin. Cada preparación sigue el legado criollo: carnes tiernas adobadas por horas, cocción lenta y salsas reducidas con tomate maduro, vino seco y hierbas aromáticas.
            </p>

            {/* Feature points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="p-2.5 rounded-xl bg-red-600/20 text-red-400 shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-heading">
                    Asados y Frituras al Punto
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Cuerito crujiente en el pernil y chicharrones dorados con textura inigualable.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 shrink-0">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-heading">
                    Porciones por Libra
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Pide exactamente lo que necesitas: ½ lb para disfrutar al momento o 1 lb para compartir en familia.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote banner */}
            <div className="border-l-4 border-red-500 pl-4 py-1 text-slate-300 italic text-sm">
              "Comida hecha con paciencia, sazón de hogar y el orgullo de nuestras raíces cubanas."
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
