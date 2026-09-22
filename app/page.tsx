'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { EditorialCards } from '../components/EditorialCards';
import { ProductShowcase } from '../components/ProductShowcase';
import { InteractiveRoutine } from '../components/InteractiveRoutine';
import { AyurvedicCoatCare } from '../components/AyurvedicCoatCare';
import { ReviewsSection } from '../components/ReviewsSection';
import { BrandStory } from '../components/BrandStory';
import { Footer } from '../components/Footer';
import { CartDrawer } from '../components/CartDrawer';
import { QuickViewModal } from '../components/QuickViewModal';
import { ProductWithVisuals } from '../data/products';
import { CartItem } from '../types';

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<ProductWithVisuals | null>(null);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (product: ProductWithVisuals, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleAddMultipleToCart = (products: ProductWithVisuals[]) => {
    setCartItems((prev) => {
      let updated = [...prev];
      products.forEach((p) => {
        const existing = updated.find((item) => item.product.id === p.id);
        if (existing) {
          updated = updated.map((item) =>
            item.product.id === p.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          updated.push({ product: p, quantity: 1 });
        }
      });
      return updated;
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#141413] antialiased selection:bg-[#E63E26] selection:text-white">
      {/* Luxury Sticky Navbar */}
      <Navbar cartCount={totalCartCount} onOpenCart={() => setIsCartOpen(true)} />

      {/* Hero Section with Dog Portrait & Confetti Easter Egg */}
      <Hero />

      {/* Editorial Split Cards */}
      <EditorialCards />

      {/* High-End Product Catalog with Visual Headers */}
      <ProductShowcase
        onAddToCart={(product) => handleAddToCart(product, 1)}
        onQuickView={(product) => setQuickViewProduct(product)}
      />

      {/* Interactive Canine Diagnostic Matrix Quiz */}
      <InteractiveRoutine onAddMultipleToCart={handleAddMultipleToCart} />

      {/* Ayurvedic Botanical Chemistry */}
      <AyurvedicCoatCare />

      {/* Verified Indian Pet Parent Reviews */}
      <ReviewsSection />

      {/* Atelier Story & 100% Wag-Guarantee */}
      <BrandStory />

      {/* Footer & Dispatch Ledger */}
      <Footer />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Live Slide-Out Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
