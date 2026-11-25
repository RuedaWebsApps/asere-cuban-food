import React from 'react';
import { Calendar, Clock, MapPin, Phone, ArrowRight, Sparkles, Award } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function Hero({ onExploreMenu }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-cuban-pattern">
      {/* Radial ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-red-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Opening Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-950/70 border border-red-500/40 text-red-200 text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(220,38,38,0.25)]">
              <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-ping" />
              <span>GRAN APERTURA • DOMINGO 29 DE NOVIEMBRE 12:00 PM</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight font-heading">
              Auténtico Sabor & <br />
              <span className="text-gradient-red-gold">Tradición Cubana</span> <br />
              en Pflugerville, TX
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              El verdadero sazón de la cocina criolla de la isla: <strong className="text-white">Pernil Asado</strong> con cuerito crujiente, <strong className="text-white">Ropa Vieja</strong> jugosa, <strong className="text-white">Tamales</strong> caseros y el legendario <strong className="text-white">Sándwich Cubano</strong>.
            </p>

            {/* Key Value Propositions */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <span className="block text-xl font-black text-amber-400">½ lb y 1 lb</span>
                <span className="text-xs text-slate-300">Porciones a tu gusto</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <span className="block text-xl font-black text-emerald-400">¡GRATIS!</span>
                <span className="text-xs text-slate-300">1 Acompañamiento</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center col-span-2 sm:col-span-1">
                <span className="block text-xl font-black text-red-400">100%</span>
                <span className="text-xs text-slate-300">Sazón tradicional</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-[0_6px_25px_rgba(220,38,38,0.45)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Ver Menú Digital</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-bold text-base px-6 py-4 rounded-xl border border-white/15 transition-all hover:border-white/30"
              >
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>Pedir por WhatsApp</span>
              </a>
            </div>

            {/* Quick Location Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-red-400" />
                <span>15608 Spring Hill Ln, Suite 105, Pflugerville, TX</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>(832) 414-5930</span>
              </div>
            </div>

          </div>

          {/* Right Hero Image / Dish Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Visual Plate Card Showcase */}
            <div className="relative w-full max-w-md">
              {/* Backglow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/30 to-amber-500/20 rounded-3xl blur-2xl -z-10 transform scale-95" />

              {/* Main Plate Showcase Container */}
              <div className="relative bg-[#0c1b33]/90 border border-white/15 rounded-3xl p-6 shadow-2xl backdrop-blur-xl overflow-hidden">
                
                <div className="pt-2 pb-1 text-center">
                  <div className="inline-flex items-center gap-1.5 bg-red-600 text-white font-black text-xs uppercase px-3.5 py-1.5 rounded-full shadow-lg mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Especial de la Casa</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                    Pernil Asado Criollo
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Marinado en naranja agria, ajo y orégano cubano
                  </p>
                </div>

                {/* Plated Image */}
                <div className="my-2 relative flex items-center justify-center">
                  <img
                    src="/images/pernil-asado-plate.png"
                    alt="Pernil Asado en plato de restaurante"
                    className="w-full h-64 sm:h-72 object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Dish Highlights / Side choice badge */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 flex items-center justify-between text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-400 block text-[11px] uppercase tracking-wider font-semibold">Precios</span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="font-bold text-white">½ lb: <strong className="text-amber-400 font-black text-base">$8.99</strong></span>
                      <span className="text-slate-500">•</span>
                      <span className="font-bold text-white">1 lb: <strong className="text-amber-400 font-black text-base">$16.99</strong></span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 font-bold bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-1 rounded-lg inline-block">
                      + Acompañamiento Gratis
                    </span>
                  </div>
                </div>

                {/* Additional thumbnail preview row */}
                <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/10">
                  <div className="bg-black/30 rounded-xl p-1.5 text-center flex flex-col items-center">
                    <img src="/images/tamales-plate.png" alt="Tamal Cubano" className="w-12 h-10 object-contain" />
                    <span className="text-[10px] text-slate-300 font-semibold mt-1">Tamales</span>
                  </div>
                  <div className="bg-black/30 rounded-xl p-1.5 text-center flex flex-col items-center">
                    <img src="/images/sandwich-plate.png" alt="Sándwich Cubano" className="w-12 h-10 object-contain" />
                    <span className="text-[10px] text-slate-300 font-semibold mt-1">Sándwich</span>
                  </div>
                  <div className="bg-black/30 rounded-xl p-1.5 text-center flex flex-col items-center">
                    <img src="/images/yuca-plate.png" alt="Yuca con Mojo" className="w-12 h-10 object-contain" />
                    <span className="text-[10px] text-slate-300 font-semibold mt-1">Yuca con Mojo</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
