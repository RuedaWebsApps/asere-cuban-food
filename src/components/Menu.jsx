import React, { useState } from 'react';
import { Search, Plus, AlertCircle } from 'lucide-react';
import { MENU_ITEMS, CATEGORIES, FREE_SIDES } from '../data/menuData';

export default function Menu({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPortions, setSelectedPortions] = useState({});
  const [selectedSides, setSelectedSides] = useState({});

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const handlePortionChange = (itemId, portionKey) => {
    setSelectedPortions((prev) => ({ ...prev, [itemId]: portionKey }));
  };

  const handleSideChange = (itemId, sideName) => {
    setSelectedSides((prev) => ({ ...prev, [itemId]: sideName }));
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
    <section id="menu" className="py-16 lg:py-24 bg-[#070d19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#d9a441]">
            Nuestra Carta Digital
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-stone-50 font-heading">
            Menú Tradicional Cubano
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Elige porciones de ½ lb o 1 lb en platos principales. Cada plato principal incluye <span className="text-emerald-400 font-semibold">1 acompañamiento gratis</span>.
          </p>

          {/* Search bar */}
          <div className="relative max-w-md mx-auto pt-3">
            <Search className="w-4 h-4 absolute left-4 top-[calc(50%+6px)] -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar plato o ingrediente..."
              className="w-full bg-[#0d1628] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-[#d9a441] transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#c82829] text-white shadow-md'
                  : 'bg-[#0d1628] hover:bg-[#132038] text-stone-300 border border-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* 2-Column Editorial Bistro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredItems.map((item) => {
            const isMain = item.category === 'principales';
            const portionKey = selectedPortions[item.id] || 'half';
            const currentPrice = isMain ? item.prices[portionKey] : item.price;
            const currentSide = selectedSides[item.id] || FREE_SIDES[1];
            const hasImage = Boolean(item.image);

            return (
              <article
                key={item.id}
                className={`bistro-card rounded-2xl overflow-hidden flex flex-col ${
                  hasImage ? 'sm:flex-row' : ''
                }`}
              >
                {/* Only render photo panel when item has an authorized photo */}
                {hasImage && (
                  <div className="sm:w-48 md:w-52 shrink-0 relative aspect-[16/10] sm:aspect-auto overflow-hidden bg-[#0a1220]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        {item.tag && (
                          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#d9a441]">
                            {item.tag}
                          </span>
                        )}
                        <h3 className="text-xl font-bold text-stone-50 font-heading leading-snug">
                          {item.name}
                        </h3>
                      </div>

                      <span className="text-xl font-bold text-[#d9a441] tabular-nums shrink-0">
                        ${currentPrice.toFixed(2)}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Controls for Main Dishes */}
                    {isMain && (
                      <div className="mt-4 pt-3.5 border-t border-white/10 space-y-3">
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => handlePortionChange(item.id, 'half')}
                            className={`py-2 px-3 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between cursor-pointer tabular-nums ${
                              portionKey === 'half'
                                ? 'bg-[#c82829] text-white'
                                : 'bg-white/5 hover:bg-white/10 text-stone-300 border border-white/10'
                            }`}
                          >
                            <span>½ Libra</span>
                            <span>${item.prices.half.toFixed(2)}</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => handlePortionChange(item.id, 'full')}
                            className={`py-2 px-3 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between cursor-pointer tabular-nums ${
                              portionKey === 'full'
                                ? 'bg-[#c82829] text-white'
                                : 'bg-white/5 hover:bg-white/10 text-stone-300 border border-white/10'
                            }`}
                          >
                            <span>1 Libra</span>
                            <span>${item.prices.full.toFixed(2)}</span>
                          </button>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                          <label className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider shrink-0">
                            Acompañamiento Gratis:
                          </label>
                          <select
                            value={currentSide}
                            onChange={(e) => handleSideChange(item.id, e.target.value)}
                            className="w-full bg-[#070d19] border border-white/15 rounded-lg px-2.5 py-1.5 text-xs text-stone-100 focus:outline-none focus:border-[#d9a441]"
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

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] text-stone-400 font-medium">
                      {isMain ? `Porción ${portionKey === 'half' ? '½ lb' : '1 lb'} + guarnición` : 'Porción individual'}
                    </span>

                    <button
                      onClick={() => handleAddItem(item)}
                      className="inline-flex items-center gap-1.5 bg-[#c82829] hover:bg-[#b01f20] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Agregar</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-14 bistro-card rounded-2xl max-w-md mx-auto">
            <AlertCircle className="w-10 h-10 text-stone-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-stone-100 font-heading">
              No encontramos platos con ese nombre
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              Prueba con términos como "pernil", "tamales", "yuca" o cambia de categoría.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
