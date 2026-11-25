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
    <div className="min-h-screen bg-[#070d19] text-stone-100 flex flex-col">
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <Hero onExploreMenu={scrollToMenu} />

      <Menu onAddToCart={handleAddToCart} />

      <PlateGallery />

      <About />

      <LocationHours />

      <Footer />

      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {totalCartCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2.5 bg-[#c82829] hover:bg-[#b01f20] text-white font-bold text-sm px-5 py-3.5 rounded-full shadow-xl transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Ver Pedido ({totalCartCount})</span>
          </button>
        )}

        <a
          href={RESTAURANT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl transition-colors"
          title="Contactar por WhatsApp"
          aria-label="Contactar por WhatsApp"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
