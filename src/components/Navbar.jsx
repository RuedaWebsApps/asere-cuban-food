import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function Navbar({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#menu', label: 'Menú' },
    { href: '#guarniciones', label: 'Acompañamientos' },
    { href: '#nosotros', label: 'Nuestra Cocina' },
    { href: '#ubicacion', label: 'Ubicación & Horarios' },
  ];

  return (
    <>
      <div className="bg-[#991b1b] border-b border-[#d9a441]/25 text-stone-100 text-xs font-semibold py-2 px-4 text-center tracking-wide">
        <span>GRAN APERTURA: {RESTAURANT_INFO.openingDate}</span>
        <span className="hidden sm:inline text-stone-300 mx-2">•</span>
        <span className="hidden sm:inline text-[#f3d18a]">{RESTAURANT_INFO.address}</span>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#070d19]/95 backdrop-blur-md border-b border-[#d9a441]/20 py-2.5 shadow-xl'
            : 'bg-[#070d19]/85 backdrop-blur-sm border-b border-white/5 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt={RESTAURANT_INFO.name}
              className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-wider text-stone-50 font-heading leading-none">
                ASERE
              </span>
              <span className="text-[10px] font-bold text-[#d9a441] tracking-[0.22em] uppercase mt-1">
                Cocina Cubana
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest font-semibold text-stone-300 hover:text-[#d9a441] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-stone-100 transition-colors border border-[#d9a441]/20 cursor-pointer"
              title="Ver Pedido"
              aria-label="Ver Pedido"
            >
              <ShoppingBag className="w-5 h-5 text-[#d9a441]" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#c82829] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </button>

            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#c82829] hover:bg-[#b01f20] text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl transition-colors shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Pedir por WhatsApp</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-200 hover:text-white cursor-pointer"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a1324] border-b border-[#d9a441]/20 px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-sm font-semibold text-stone-200 hover:text-[#d9a441] border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#c82829] text-white font-bold text-sm py-3 rounded-xl"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp: {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
