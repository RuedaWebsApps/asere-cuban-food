import React, { useState } from 'react';
import { Search, Plus, Check, Sparkles, UtensilsCrossed, AlertCircle, ShoppingBag } from 'lucide-react';
import { MENU_ITEMS, CATEGORIES, FREE_SIDES, RESTAURANT_INFO } from '../data/menuData';

export default function Menu({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Track selected portion for each main dish: { [itemId]: 'half' | 'full' }
  const [selectedPortions, setSelectedPortions] = useState({});
  // Track selected free side for each main dish: { [itemId]: 'Arroz Congrí' }
  const [selectedSides, setSelectedSides] = useState({});

  // Filter items
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handlePortionChange = (itemId, portionKey) => {
    setSelectedPortions((prev) => ({
      ...prev,
      [itemId]: portionKey
    }));
  };

  const handleSideChange = (itemId, sideName) => {
    setSelectedSides((prev) => ({
      ...prev,
      [itemId]: sideName
    }));
  };

  const handleAddItem = (item) => {
    const isMain = item.category === 'principales';
    const portionKey = selectedPortions[item.id] || 'half';
    const price = isMain ? item.prices[portionKey] : item.price;
    const portionLabel = isMain ? (portionKey === 'half' ? '½ lb' : '1 lb') : null;
    const side = isMain ? (selectedSides[item.id] || FREE_SIDES[1]) : null;

    onAddToCart({
      id: `${item.id}-${portionKey}-${side || 'noside'}`,
      baseId: item.id,
      name: item.name,
      portionLabel,
      side,
      price,
      image: item.image
    });
  };

  return (
    <section id="menu" className="py-20 bg-cuban-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/70 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-widest">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Nuestra Carta Digital</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading">
            Menú Tradicional Cubano
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Selecciona el tamaño de tu porción (½ lb o 1 lb). Recuerda que cada plato principal incluye <span className="text-amber-400 font-bold">1 acompañamiento gratis</span> a tu elección.
          </p>

          {/* Search bar */}
          <div className="relative max-w-md mx-auto pt-2">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar plato, ingrediente o especialidad..."
              className="w-full bg-[#0b1a33] border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_4px_16px_rgba(220,38,38,0.4)] scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const isMain = item.category === 'principales';
            const portionKey = selectedPortions[item.id] || 'half';
            const currentPrice = isMain ? item.prices[portionKey] : item.price;
            const currentSide = selectedSides[item.id] || FREE_SIDES[1]; // defaults to Arroz Congrí

            return (
              <div
                key={item.id}
                className="card-glass rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px] relative group"
              >
                {/* Floating Tag */}
                {item.tag && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-amber-600 text-white text-[10px] sm:text-[11px] font-black uppercase px-2.5 py-1 rounded-full shadow-md z-10 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{item.tag}</span>
                  </div>
                )}

                <div>
                  {/* Dish Image Showcase */}
                  <div className="w-full h-48 sm:h-52 rounded-2xl bg-gradient-to-b from-[#0a1529] to-[#040914] border border-white/10 overflow-hidden flex items-center justify-center p-3 relative mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Dish Title & Description */}
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-red-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Portion Switcher for Main Dishes */}
                  {isMain && (
                    <div className="mt-4 pt-3 border-t border-white/10 space-y-2">
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <span className="font-semibold text-slate-400 uppercase tracking-wider text-[11px]">
                          Selecciona Tamaño:
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => handlePortionChange(item.id, 'half')}
                          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                            portionKey === 'half'
                              ? 'bg-red-600 text-white shadow-md border border-red-400'
                              : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                          }`}
                        >
                          <span>½ Libra</span>
                          <span className={portionKey === 'half' ? 'text-white' : 'text-amber-400'}>
                            ${item.prices.half.toFixed(2)}
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handlePortionChange(item.id, 'full')}
                          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                            portionKey === 'full'
                              ? 'bg-red-600 text-white shadow-md border border-red-400'
                              : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                          }`}
                        >
                          <span>1 Libra</span>
                          <span className={portionKey === 'full' ? 'text-white' : 'text-amber-400'}>
                            ${item.prices.full.toFixed(2)}
                          </span>
                        </button>
                      </div>

                      {/* Free Side Selector */}
                      <div className="pt-2">
                        <label className="block text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1">
                          ✓ Acompañamiento Gratis:
                        </label>
                        <select
                          value={currentSide}
                          onChange={(e) => handleSideChange(item.id, e.target.value)}
                          className="w-full bg-[#071326] border border-emerald-500/30 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400"
                        >
                          {FREE_SIDES.map((side, sIdx) => (
                            <option key={sIdx} value={side}>
                              {side}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer: Price & Add to Cart button */}
                <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-semibold">
                      Total porción
                    </span>
                    <span className="text-2xl font-black text-amber-400">
                      ${currentPrice.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddItem(item)}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-[0_4px_14px_rgba(220,38,38,0.35)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Agregar</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty state if search has no results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white/[0.02] border border-white/10 rounded-3xl max-w-md mx-auto">
            <AlertCircle className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No encontramos platos con ese nombre</h3>
            <p className="text-xs text-slate-400 mt-1">
              Prueba con otro término como "pernil", "arroz", "tamal" o revisa nuestras categorías.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
