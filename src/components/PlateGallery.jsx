import React from 'react';
import { Camera, Eye, Sparkles } from 'lucide-react';

const PLATED_DISHES = [
  {
    title: "Pernil Asado Criollo",
    category: "Plato Principal",
    description: "Servido en plato de porcelana con cuerito dorado crujiente y aroma a naranja agria.",
    image: "/images/pernil-asado-plate.png",
    portion: "½ lb o 1 lb"
  },
  {
    title: "Tamales Cubanos Tradicionales",
    category: "Antojito Casero",
    description: "Masa tierna de maíz al vapor en vajilla blanca con tierno sofrito y masitas de cerdo.",
    image: "/images/tamales-plate.png",
    portion: "Pieza completa"
  },
  {
    title: "Sándwich Cubano Clásico",
    category: "Especialidad",
    description: "Prensado y tostado a la perfección en plancha, cortado en diagonal sobre plato cerámico.",
    image: "/images/sandwich-plate.png",
    portion: "Entero"
  },
  {
    title: "Yuca con Mojo Criollo",
    category: "Guarnición",
    description: "Yuca cocida mantequillosa con mojo de ajo dorado, chicharrones y toque de cilantro.",
    image: "/images/yuca-plate.png",
    portion: "Porción generosa"
  },
  {
    title: "Ajiaco Cubano Criollo",
    category: "Sopa Tradicional",
    description: "Servido en cuenco blanco hondo, rebosante de viandas campesinas y carnes tiernas.",
    image: "/images/ajiaco-plate.png",
    portion: "Tazón 12 oz"
  },
  {
    title: "Arroz Congrí (Moros y Cristianos)",
    category: "Acompañamiento",
    description: "Arroz grano a grano sazonado con frijoles negros y sofrito cubano de la casa.",
    image: "/images/congri-plate.png",
    portion: "Incluido Gratis con principales"
  }
];

export default function PlateGallery() {
  return (
    <section id="galeria" className="py-20 bg-[#071326] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/40 text-blue-300 text-xs font-bold uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5" />
            <span>Galería de Emplatados Profesionales</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading">
            Nuestros Platos al Detalle
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Así servimos nuestra comida: emplatada con esmero, ingredientes frescos y la presentación que merece la auténtica gastronomía cubana.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PLATED_DISHES.map((dish, index) => (
            <div
              key={index}
              className="group bg-[#0c1c38]/80 border border-white/10 rounded-3xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px] flex flex-col"
            >
              {/* Image Frame */}
              <div className="h-64 sm:h-72 bg-gradient-to-b from-[#0a1529] to-[#040914] p-4 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="max-h-full max-w-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-slate-300 text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-white/10">
                  {dish.category}
                </span>
              </div>

              {/* Text Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3 bg-[#0a1830]">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-red-400 transition-colors">
                    {dish.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-amber-400 font-bold">
                    {dish.portion}
                  </span>
                  <span className="text-slate-400 font-medium">
                    Servido fresco a diario
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
