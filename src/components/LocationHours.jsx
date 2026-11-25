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
    <section id="ubicacion" className="py-20 bg-cuban-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/70 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visítanos en Pflugerville</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading">
            Ubicación, Contacto & Horarios
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Estamos convenientemente ubicados en Pflugerville, listos para recibirte con el auténtico sabor y calidez cubana.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Schedule */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Opening Celebration Card */}
            <div className="bg-gradient-to-r from-red-900/60 via-red-800/40 to-amber-900/40 border border-red-500/40 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center text-white shrink-0 shadow-lg">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                    Apertura Oficial
                  </span>
                  <h3 className="text-2xl font-black text-white font-heading mt-0.5">
                    {RESTAURANT_INFO.openingDate}
                  </h3>
                  <p className="text-sm text-slate-200 mt-2 leading-relaxed">
                    ¡Ven a celebrar con nosotros! Tendremos pernil asado recién salido del horno, música cubana, tamales y todas las delicias de nuestra carta.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Address Card */}
              <div className="card-glass rounded-2xl p-5 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                  Dirección
                </h4>
                <p className="text-base font-bold text-white leading-snug">
                  {RESTAURANT_INFO.address}
                </p>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 pt-1"
                >
                  <span>Abrir en Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="card-glass rounded-2xl p-5 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                  Teléfono / Pedidos
                </h4>
                <p className="text-xl font-black text-white">
                  {RESTAURANT_INFO.phone}
                </p>
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={`tel:${RESTAURANT_INFO.rawPhone}`}
                    className="text-xs font-bold text-emerald-400 hover:text-emerald-300"
                  >
                    Llamar ahora
                  </a>
                  <span className="text-slate-600">•</span>
                  <a
                    href={RESTAURANT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-400 hover:text-emerald-300"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="card-glass rounded-2xl p-5 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-pink-600/20 text-pink-400 flex items-center justify-center">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                  Instagram Oficial
                </h4>
                <p className="text-base font-bold text-white">
                  {RESTAURANT_INFO.instagram}
                </p>
                <a
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-pink-400 hover:text-pink-300 pt-1"
                >
                  <span>Síguenos para novedades</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Email Card */}
              <div className="card-glass rounded-2xl p-5 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                  Correo Electrónico
                </h4>
                <p className="text-sm font-bold text-white break-all">
                  {RESTAURANT_INFO.email}
                </p>
                <span className="text-xs text-slate-400 block pt-1">
                  Catering & Eventos privados
                </span>
              </div>

            </div>

            {/* Hours Table */}
            <div className="card-glass rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2.5 text-white font-bold text-lg font-heading">
                <Clock className="w-5 h-5 text-amber-400" />
                <span>Horarios de Atención</span>
              </div>
              <div className="divide-y divide-white/10 text-sm">
                {RESTAURANT_INFO.hours.map((h, i) => (
                  <div key={i} className="py-2.5 flex items-center justify-between">
                    <span className="text-slate-300 font-medium">{h.days}</span>
                    <span className="text-white font-bold">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: QR Code & Map Embed Link */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* QR Code Card */}
            <div className="bg-[#0c1c38] border border-white/10 rounded-3xl p-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-600/20 text-red-400 flex items-center justify-center mx-auto">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">
                Escanea Nuestro Menú & Contacto
              </h3>
              <p className="text-xs text-slate-300 max-w-xs mx-auto">
                Apunta con la cámara de tu teléfono para guardar nuestro contacto directo y revisar el menú en tu móvil.
              </p>

              <div className="p-3 bg-white rounded-2xl inline-block shadow-2xl">
                <img
                  src="/images/qr.png"
                  alt="QR Code Asere Cuban Food"
                  className="w-48 h-48 object-contain"
                />
              </div>

              <div className="text-xs text-slate-400">
                <span>{RESTAURANT_INFO.name} • {RESTAURANT_INFO.phone}</span>
              </div>
            </div>

            {/* Map Card */}
            <div className="card-glass rounded-3xl p-6 space-y-4">
              <h4 className="text-base font-bold text-white font-heading flex items-center gap-2">
                <Navigation className="w-4 h-4 text-emerald-400" />
                <span>Cómo Llegar</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ubicados en la zona de Pflugerville con fácil acceso y estacionamiento amplio para clientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-red-600 hover:bg-red-500 text-white font-bold text-xs py-3 px-4 rounded-xl text-center shadow-md transition-colors"
                >
                  Abrir en Google Maps
                </a>
                <a
                  href={`https://waze.com/ul?q=${encodeURIComponent(RESTAURANT_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/10 hover:bg-white/15 text-white font-bold text-xs py-3 px-4 rounded-xl text-center border border-white/10 transition-colors"
                >
                  Abrir en Waze
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
