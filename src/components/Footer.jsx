import React from 'react';
import { Heart, Phone, MapPin, Mail } from 'lucide-react';
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
    <footer className="bg-[#040a15] border-t border-white/10 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt={RESTAURANT_INFO.name}
                className="h-12 w-auto object-contain"
              />
              <div>
                <span className="text-xl font-black text-white font-heading block">
                  ASERE
                </span>
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest block -mt-1">
                  Cuban Food
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Auténtica cocina tradicional cubana en Pflugerville, Texas. Recetas criollas familiares preparadas a diario con los mejores ingredientes.
            </p>
            <div className="pt-1">
              <span className="inline-block px-3 py-1 bg-red-950/70 border border-red-500/30 text-red-300 text-xs font-bold rounded-lg">
                🎉 Gran Apertura: {RESTAURANT_INFO.openingDate}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-heading">
              Navegación Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#menu" className="hover:text-red-400 transition-colors">
                  Menú Digital Interactivo
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-red-400 transition-colors">
                  Galería de Platos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-red-400 transition-colors">
                  Tradición & Chef Sergio Regueira
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-red-400 transition-colors">
                  Ubicación & Horarios
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-heading">
              Contacto Directo
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.rawPhone}`} className="hover:text-white">
                  {RESTAURANT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:text-white">
                  {RESTAURANT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-pink-400 shrink-0" />
                <a href={RESTAURANT_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {RESTAURANT_INFO.instagram}
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-heading">
              Horario de Atención
            </h4>
            <div className="text-xs space-y-1.5 text-slate-300">
              <p><strong className="text-white">Lun - Jue:</strong> 11:00 AM - 9:00 PM</p>
              <p><strong className="text-white">Vie - Sáb:</strong> 11:00 AM - 10:00 PM</p>
              <p><strong className="text-amber-400">Domingo:</strong> 12:00 PM - 8:00 PM</p>
              <p className="text-[11px] text-slate-400 pt-1">
                Servicio para llevar, pedidos anticipados y eventos.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} {RESTAURANT_INFO.name}. Todos los derechos reservados.</p>
          
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Desarrollado con pasión para</span>
            <span className="font-bold text-white">Rueda la Rola Media</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
