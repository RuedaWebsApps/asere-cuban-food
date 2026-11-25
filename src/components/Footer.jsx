import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#050912] border-t border-[#d9a441]/15 pt-14 pb-10 text-stone-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt={RESTAURANT_INFO.name}
                className="h-11 w-auto object-contain"
              />
              <div>
                <span className="text-xl font-bold text-stone-50 font-heading block leading-none">
                  ASERE
                </span>
                <span className="text-[10px] font-bold text-[#d9a441] uppercase tracking-[0.2em] block mt-1">
                  Cocina Cubana
                </span>
              </div>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Auténtica cocina tradicional cubana en Pflugerville, Texas. Recetas criollas familiares preparadas a diario.
            </p>
            <span className="inline-block px-3 py-1 bg-[#c82829]/15 border border-[#c82829]/30 text-stone-200 text-xs font-semibold rounded-lg">
              Apertura: {RESTAURANT_INFO.openingDate}
            </span>
          </div>

          <div className="space-y-3">
            <h4 className="text-stone-100 font-bold text-xs uppercase tracking-widest">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#menu" className="hover:text-[#d9a441] transition-colors">Menú Digital</a></li>
              <li><a href="#guarniciones" className="hover:text-[#d9a441] transition-colors">Acompañamientos Gratis</a></li>
              <li><a href="#nosotros" className="hover:text-[#d9a441] transition-colors">Chef Sergio Regueira</a></li>
              <li><a href="#ubicacion" className="hover:text-[#d9a441] transition-colors">Ubicación & Horarios</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-stone-100 font-bold text-xs uppercase tracking-widest">
              Contacto Directo
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c82829] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d9a441] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.rawPhone}`} className="hover:text-white">
                  {RESTAURANT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d9a441] shrink-0" />
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:text-white">
                  {RESTAURANT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-[#d9a441] shrink-0" />
                <a href={RESTAURANT_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {RESTAURANT_INFO.instagram}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-stone-100 font-bold text-xs uppercase tracking-widest">
              Horario
            </h4>
            <div className="text-xs space-y-1.5 text-stone-300">
              <p><strong className="text-stone-100">Lun - Jue:</strong> 11:00 AM - 9:00 PM</p>
              <p><strong className="text-stone-100">Vie - Sáb:</strong> 11:00 AM - 10:00 PM</p>
              <p><strong className="text-[#d9a441]">Domingo:</strong> 12:00 PM - 8:00 PM</p>
              <p className="text-[11px] text-stone-500 pt-1">
                Takeout, pedidos anticipados y eventos.
              </p>
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} {RESTAURANT_INFO.name}. Todos los derechos reservados.</p>
          <span>Pflugerville, Texas</span>
        </div>
      </div>
    </footer>
  );
}
