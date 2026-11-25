import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, QrCode, Calendar, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function LocationHours() {
  return (
    <section id="ubicacion" className="py-16 lg:py-24 bg-[#070d19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#d9a441]">
            Visítanos en Pflugerville
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-stone-50 font-heading">
            Ubicación & Horarios
          </h2>
          <p className="text-stone-300 text-sm sm:text-base">
            Listos para atenderte con servicio para llevar, pedidos por WhatsApp y comida hecha al día.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="bistro-card rounded-2xl p-6 sm:p-7 border-[#c82829]/30">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#c82829] flex items-center justify-center text-white shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#d9a441]">
                    Apertura Oficial
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-50 font-heading mt-0.5">
                    {RESTAURANT_INFO.openingDate}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 mt-1.5 leading-relaxed">
                    Ven a celebrar con nosotros: pernil asado recién horneado, tamales hechos a mano y toda nuestra carta criolla.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bistro-card rounded-2xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-400 uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-[#c82829]" />
                  <span>Dirección</span>
                </div>
                <p className="text-sm font-bold text-stone-100 leading-snug">
                  {RESTAURANT_INFO.address}
                </p>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#d9a441] hover:underline pt-1"
                >
                  <span>Abrir en Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="bistro-card rounded-2xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-400 uppercase tracking-wider">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Teléfono & WhatsApp</span>
                </div>
                <p className="text-lg font-bold text-stone-100 tabular-nums">
                  {RESTAURANT_INFO.phone}
                </p>
                <div className="flex items-center gap-3 pt-1 text-xs font-semibold">
                  <a href={`tel:${RESTAURANT_INFO.rawPhone}`} className="text-emerald-400 hover:underline">
                    Llamar ahora
                  </a>
                  <span className="text-stone-600">•</span>
                  <a href={RESTAURANT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="bistro-card rounded-2xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-400 uppercase tracking-wider">
                  <InstagramIcon className="w-4 h-4 text-[#d9a441]" />
                  <span>Instagram</span>
                </div>
                <p className="text-sm font-bold text-stone-100">
                  {RESTAURANT_INFO.instagram}
                </p>
                <a
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#d9a441] hover:underline pt-1"
                >
                  <span>Seguir cuenta oficial</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="bistro-card rounded-2xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-400 uppercase tracking-wider">
                  <Mail className="w-4 h-4 text-[#d9a441]" />
                  <span>Correo</span>
                </div>
                <p className="text-sm font-bold text-stone-100 break-all">
                  {RESTAURANT_INFO.email}
                </p>
                <span className="text-xs text-stone-400 block pt-1">
                  Catering & eventos privados
                </span>
              </div>
            </div>

            <div className="bistro-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-stone-100 font-bold text-lg font-heading">
                <Clock className="w-5 h-5 text-[#d9a441]" />
                <span>Horarios de Atención</span>
              </div>
              <div className="divide-y divide-white/10 text-sm">
                {RESTAURANT_INFO.hours.map((h, i) => (
                  <div key={i} className="py-2.5 flex items-center justify-between gap-4">
                    <span className="text-stone-300">{h.days}</span>
                    <span className="text-stone-100 font-bold tabular-nums">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bistro-card rounded-2xl p-6 text-center space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#d9a441]/15 text-[#d9a441] flex items-center justify-center mx-auto">
                <QrCode className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-stone-50 font-heading">
                Escanea Nuestro Menú
              </h3>
              <p className="text-xs text-stone-300 max-w-xs mx-auto leading-relaxed">
                Escanea con tu cámara para abrir el menú digital o guardar nuestro contacto directo.
              </p>

              <div className="p-3 bg-white rounded-2xl inline-block shadow-xl">
                <img
                  src="/images/qr.png"
                  alt="Código QR ASERE Cuban Food"
                  className="w-44 h-44 object-contain"
                />
              </div>

              <div className="text-xs text-stone-400">
                {RESTAURANT_INFO.name} • {RESTAURANT_INFO.phone}
              </div>
            </div>

            <div className="bistro-card rounded-2xl p-6 space-y-4">
              <h4 className="text-base font-bold text-stone-50 font-heading flex items-center gap-2">
                <Navigation className="w-4 h-4 text-emerald-400" />
                <span>Cómo Llegar</span>
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Ubicados en Pflugerville con acceso rápido y estacionamiento amplio.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#c82829] hover:bg-[#b01f20] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl text-center transition-colors"
                >
                  Google Maps
                </a>
                <a
                  href={`https://waze.com/ul?q=${encodeURIComponent(RESTAURANT_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/10 hover:bg-white/15 text-stone-100 font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl text-center border border-white/10 transition-colors"
                >
                  Waze
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
