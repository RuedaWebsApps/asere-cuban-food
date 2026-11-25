import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function OrderDrawer({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem, onClearCart }) {
  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState('Para Recoger (Takeout)');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSendWhatsApp = () => {
    if (cartItems.length === 0) return;

    let message = `¡Hola *${RESTAURANT_INFO.name}*! 👋 Quisiera hacer el siguiente pedido:\n\n`;

    cartItems.forEach((item, index) => {
      const portionStr = item.portionLabel ? ` (${item.portionLabel})` : '';
      const sideStr = item.side ? `\n   ↳ Acompañamiento: _${item.side}_` : '';
      message += `${index + 1}. *${item.quantity}x* ${item.name}${portionStr} - $${(item.price * item.quantity).toFixed(2)}${sideStr}\n`;
    });

    message += `\n💰 *Total Estimado:* $${totalAmount.toFixed(2)}`;
    message += `\n📦 *Modalidad:* ${orderType}`;
    if (customerName.trim()) {
      message += `\n👤 *Cliente:* ${customerName.trim()}`;
    }
    if (notes.trim()) {
      message += `\n📝 *Notas:* ${notes.trim()}`;
    }
    message += `\n\n¿Me confirman disponibilidad y tiempo de entrega? ¡Muchas gracias!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${RESTAURANT_INFO.rawPhone}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0a1529] border-l border-white/10 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#071326]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-heading">
                  Tu Pedido
                </h3>
                <span className="text-xs text-slate-400">
                  {cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <ShoppingBag className="w-16 h-16 text-slate-600 mx-auto" />
                <h4 className="text-base font-bold text-slate-300">
                  Tu pedido está vacío
                </h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Explora nuestro menú tradicional y agrega tus platos cubanos favoritos con un solo clic.
                </p>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white/[0.03] border border-white/10 rounded-2xl p-3.5 flex items-start gap-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-contain bg-black/40 p-1 shrink-0 border border-white/5"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-white leading-tight truncate">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-slate-500 hover:text-red-400 p-1 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {item.portionLabel && (
                        <span className="inline-block text-[11px] font-semibold text-amber-400 mt-0.5">
                          Tamaño: {item.portionLabel}
                        </span>
                      )}

                      {item.side && (
                        <span className="block text-[10px] text-emerald-400 font-medium">
                          ↳ {item.side}
                        </span>
                      )}

                      <div className="flex items-center justify-between mt-2 pt-1">
                        <div className="flex items-center gap-2 bg-black/40 rounded-lg p-1 border border-white/5">
                          <button
                            onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                            className="p-1 text-slate-300 hover:text-white cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-white px-1">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                            className="p-1 text-slate-300 hover:text-white cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-sm font-black text-amber-400">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Additional Inputs */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Tu Nombre:
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Modalidad del Pedido:
                    </label>
                    <select
                      value={orderType}
                      onChange={(e) => setOrderType(e.target.value)}
                      className="w-full bg-[#071326] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
                    >
                      <option value="Para Recoger (Takeout)">Para Recoger (Takeout)</option>
                      <option value="Para Comer en el Lugar">Para Comer en el Lugar</option>
                      <option value="Cotización para Catering / Evento">Cotización para Catering / Evento</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Instrucciones o Notas Especiales:
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ej. Salsa picante aparte, hora estimada de llegada..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500 resize-none"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer & WhatsApp CTA */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-[#071326] space-y-3">
              <div className="flex items-center justify-between text-base">
                <span className="font-bold text-slate-300">Total Estimado:</span>
                <span className="text-2xl font-black text-amber-400">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleSendWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-extrabold text-sm py-3.5 px-4 rounded-xl shadow-[0_4px_16px_rgba(16,185,129,0.35)] transition-all hover:scale-102 active:scale-98 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Pedido por WhatsApp</span>
              </button>

              <button
                onClick={onClearCart}
                className="w-full text-center text-[11px] text-slate-500 hover:text-slate-300 pt-1 transition-colors cursor-pointer"
              >
                Vaciar Pedido
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
