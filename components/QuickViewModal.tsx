'use client';

import React, { useState } from 'react';
import { ProductWithVisuals } from '../data/products';
import { X, Check, ShoppingBag, MapPin, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { triggerLuxuryConfetti } from '../lib/confetti';

interface QuickViewModalProps {
  product: ProductWithVisuals | null;
  onClose: () => void;
  onAddToCart: (product: ProductWithVisuals, quantity: number) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    triggerLuxuryConfetti();
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#FBFBF9] border border-black/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-6 sm:px-8 py-5 bg-white hairline-b flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#E63E26]">№ {product.tag}</span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#63635E]">
                — {product.badge}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-[#141413]" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#141413] leading-tight">
                {product.name}
              </h3>
              <p className="font-mono text-xs text-[#63635E] font-medium mt-1">
                {product.subtitle}
              </p>
            </div>

            {/* Pricing & Key Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-white rounded-2xl border border-black/5 shadow-xs">
              <div>
                <span className="font-mono text-[10px] text-[#8E8E88] uppercase block">Price (INR)</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="font-display text-2xl font-bold text-[#141413]">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="font-mono text-xs text-[#8E8E88] line-through">₹{product.originalPrice}</span>
                  )}
                </div>
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#8E8E88] uppercase block">Pack / Spec</span>
                <span className="font-mono text-xs font-bold text-[#141413] block mt-1">{product.weightOrSize}</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="font-mono text-[10px] text-[#8E8E88] uppercase block">Verified Origin</span>
                <span className="font-mono text-xs font-bold text-[#141413] flex items-center gap-1 mt-1 truncate">
                  <MapPin className="w-3.5 h-3.5 text-[#E63E26] shrink-0" /> {product.origin.split(',')[0]}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#141413] mb-2">
                Atelier Formula Narrative
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#4A4A45] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Key Benefits */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#141413] mb-2">
                Biological & Health Benefits
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.keyBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 bg-white rounded-xl border border-black/5 text-xs text-[#2B2B28] font-medium shadow-xs">
                    <span className="text-[#E63E26] font-bold mt-0.5">•</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#141413] mb-2">
                Disclosed Natural Ingredients
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {product.ingredients.map((ing, i) => (
                  <span key={i} className="px-3 py-1.5 bg-[#F4F4EE] rounded-lg font-mono text-xs text-[#4A4A45] font-medium">
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Feeding / Usage */}
            <div className="p-4 bg-[#FFF8EB] rounded-2xl border border-[#C99839]/30 text-xs text-[#7A540E]">
              <div className="font-bold font-mono text-xs uppercase mb-1">
                Veterinary Feeding / Usage Protocol
              </div>
              <p className="font-sans leading-relaxed">{product.feedingOrUsageGuide}</p>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-5 sm:p-6 bg-white hairline-t flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#63635E] font-medium">Quantity:</span>
              <div className="flex items-center border border-black/10 rounded-full bg-[#FBFBF9]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center font-mono font-bold text-sm hover:text-[#E63E26] cursor-pointer"
                >
                  -
                </button>
                <span className="w-8 text-center font-mono text-xs font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center font-mono font-bold text-sm hover:text-[#E63E26] cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              disabled={added}
              className={`w-full sm:w-auto px-8 py-4 rounded-full font-display text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#E63E26] hover:bg-[#FF4D36] text-white shadow-md active:scale-95'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  <span>ADDED TO BAG (₹{product.price * quantity})</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 stroke-[2]" />
                  <span>ADD TO BAG • ₹{product.price * quantity}</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
