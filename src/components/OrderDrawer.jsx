import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, ShoppingBag, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function OrderDrawer({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem, onClearCart }) {
  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState('Para Recoger (Takeout)');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSendWhatsApp = () => {
    if (cartItems.length === 0) return;

    let message = `¡Hola *${RESTAURANT_INFO.name}*! Quisiera hacer el siguiente pedido:\n\n`;

    cartItems.forEach((item, index) => {
      const portionStr = item.portionLabel ? ` (${item.portionLabel})` : '';
      const sideStr = item.side ? `\n   - Acompañamiento: ${item.side}` : '';
      message += `${index + 1}. *${item.quantity}x* ${item.name}${portionStr} - $${(item.price * item.quantity).toFixed(2)}${sideStr}\n`;
    });

    message += `\n*Total Estimado:* $${totalAmount.toFixed(2)}`;
    message += `\n*Modalidad:* ${orderType}`;
    if (customerName.trim()) {
      message += `\n*Cliente:* ${customerName.trim()}`;
    }
    if (notes.trim()) {
      message += `\n*Notas:* ${notes.trim()}`;
    }
    message += `\n\n¿Me confirman disponibilidad y tiempo de entrega? ¡Muchas gracias!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${RESTAURANT_INFO.rawPhone}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0a1222] border-l border-[#d9a441]/20 shadow-2xl flex flex-col justify-between">

          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#070d19]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#d9a441]/15 text-[#d9a441] flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-50 font-heading">
                  Tu Pedido
                </h3>
                <span className="text-xs text-stone-400">
                  {cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Cerrar pedido"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <ShoppingBag className="w-12 h-12 text-stone-600 mx-auto" />
                <h4 className="text-base font-bold text-stone-200 font-heading">
                  Tu pedido está vacío
                </h4>
                <p className="text-xs text-stone-400 max-w-xs mx-auto leading-relaxed">
                  Explora nuestro menú tradicional y agrega tus platos favoritos para enviarlos por WhatsApp.
                </p>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#0d1628] border border-white/10 rounded-xl p-3.5 flex items-start gap-3"
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover shrink-0 border border-white/10"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-lg bg-[#132038] border border-[#d9a441]/20 flex items-center justify-center shrink-0 text-[#d9a441]">
                        <UtensilsCrossed className="w-5 h-5" />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-stone-100 leading-tight truncate">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-stone-500 hover:text-red-400 p-1 transition-colors cursor-pointer"
                          aria-label="Eliminar producto"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {item.portionLabel && (
                        <span className="inline-block text-[11px] font-semibold text-[#d9a441] mt-0.5">
                          Tamaño: {item.portionLabel}
                        </span>
                      )}

                      {item.side && (
                        <span className="block text-[11px] text-emerald-400 font-medium">
                          + {item.side}
                        </span>
                      )}

                      <div className="flex items-center justify-between mt-2.5">
                        <div className="flex items-center gap-2 bg-[#070d19] rounded-lg p-1 border border-white/10">
                          <button
                            onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                            className="p-1 text-stone-300 hover:text-white cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-stone-100 px-1 tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                            className="p-1 text-stone-300 hover:text-white cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-sm font-bold text-[#d9a441] tabular-nums">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Customer Details */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Tu Nombre
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Ej. Carlos Mendoza"
                      className="w-full bg-[#0d1628] border border-white/10 rounded-xl px-3 py-2 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-[#d9a441]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Modalidad del Pedido
                    </label>
                    <select
                      value={orderType}
                      onChange={(e) => setOrderType(e.target.value)}
                      className="w-full bg-[#0d1628] border border-white/10 rounded-xl px-3 py-2 text-xs text-stone-100 focus:outline-none focus:border-[#d9a441]"
                    >
                      <option value="Para Recoger (Takeout)">Para Recoger (Takeout)</option>
                      <option value="Para Comer en el Lugar">Para Comer en el Lugar</option>
                      <option value="Cotización para Catering / Evento">Cotización para Catering / Evento</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Instrucciones Especiales
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ej. Hora aproximada de llegada..."
                      className="w-full bg-[#0d1628] border border-white/10 rounded-xl px-3 py-2 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-[#d9a441] resize-none"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-[#070d19] space-y-3">
              <div className="flex items-center justify-between text-base">
                <span className="font-semibold text-stone-300">Total Estimado:</span>
                <span className="text-2xl font-bold text-[#d9a441] tabular-nums">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleSendWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3.5 px-4 rounded-xl transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Pedido por WhatsApp</span>
              </button>

              <button
                onClick={onClearCart}
                className="w-full text-center text-xs text-stone-500 hover:text-stone-300 pt-1 transition-colors cursor-pointer"
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
