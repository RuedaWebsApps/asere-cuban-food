import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlateGallery from './components/PlateGallery';
import Menu from './components/Menu';
import About from './components/About';
import LocationHours from './components/LocationHours';
import Footer from './components/Footer';
import OrderDrawer from './components/OrderDrawer';
import { ShoppingBag, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from './data/menuData';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (newItem) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === newItem.id);
      if (existing) {
        return prevItems.map((i) =>
          i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...newItem, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQty = (itemId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((i) => (i.id === itemId ? { ...i, quantity: newQty } : i))
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prev) => prev.filter((i) => i.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#060e1d] text-slate-100 flex flex-col font-sans">
      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Hero Section */}
      <Hero onExploreMenu={scrollToMenu} />

      {/* Plated Dishes Visual Gallery */}
      <PlateGallery />

      {/* Interactive Digital Menu */}
      <Menu onAddToCart={handleAddToCart} />

      {/* About & Cuban Tradition */}
      <About />

      {/* Location, Contact & Hours */}
      <LocationHours />

      {/* Footer */}
      <Footer />

      {/* Order Cart Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Action Button (Mobile) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {totalCartCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2.5 bg-gradient-to-r from-red-600 to-amber-600 text-white font-extrabold text-sm px-5 py-3.5 rounded-full shadow-[0_4px_20px_rgba(220,38,38,0.5)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Ver Pedido ({totalCartCount})</span>
          </button>
        )}

        <a
          href={RESTAURANT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_4px_20px_rgba(16,185,129,0.5)] transition-all hover:scale-110 active:scale-95"
          title="Contactar por WhatsApp"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
