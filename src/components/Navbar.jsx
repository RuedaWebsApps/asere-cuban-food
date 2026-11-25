import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu as MenuIcon, X, ShoppingBag, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function Navbar({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner - Gran Apertura */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-amber-600 text-white text-xs sm:text-sm font-semibold py-2 px-4 text-center shadow-md flex items-center justify-center gap-2">
        <span className="inline-block animate-pulse">🎉</span>
        <span>¡GRAN APERTURA! Este {RESTAURANT_INFO.openingDate} en Pflugerville, TX</span>
        <span className="hidden sm:inline">| ¡Ven y prueba el auténtico sabor cubano!</span>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#071326]/95 backdrop-blur-md shadow-xl border-b border-white/10 py-2.5'
            : 'bg-[#071326]/80 backdrop-blur-sm py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt={RESTAURANT_INFO.name}
              className="h-12 sm:h-14 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-wider text-white font-heading">
                ASERE
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-red-400 tracking-widest uppercase -mt-1">
                Cuban Food
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#menu"
              className="text-sm font-medium text-slate-200 hover:text-red-400 transition-colors"
            >
              Menú Digital
            </a>
            <a
              href="#galeria"
              className="text-sm font-medium text-slate-200 hover:text-red-400 transition-colors"
            >
              Nuestros Platos
            </a>
            <a
              href="#nosotros"
              className="text-sm font-medium text-slate-200 hover:text-red-400 transition-colors"
            >
              Tradición Cubana
            </a>
            <a
              href="#ubicacion"
              className="text-sm font-medium text-slate-200 hover:text-red-400 transition-colors"
            >
              Ubicación & Horarios
            </a>
          </nav>

          {/* Actions & WhatsApp CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 flex items-center justify-center cursor-pointer"
              title="Ver Pedido"
            >
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm px-4 py-2.5 rounded-xl shadow-[0_4px_14px_rgba(220,38,38,0.4)] transition-all hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Pedir por WhatsApp</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-200 hover:text-white"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#071326] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 hover:text-red-400"
            >
              Menú Digital
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 hover:text-red-400"
            >
              Nuestros Platos
            </a>
            <a
              href="#nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 hover:text-red-400"
            >
              Tradición Cubana
            </a>
            <a
              href="#ubicacion"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 hover:text-red-400"
            >
              Ubicación & Horarios
            </a>
            <div className="pt-2">
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-3 rounded-xl shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Pedir por WhatsApp: {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
