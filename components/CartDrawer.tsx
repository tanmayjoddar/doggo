'use client';

import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Plus, Minus, Trash2, ShoppingBag, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { triggerLuxuryConfetti } from '../lib/confetti';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onClearCart?: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onUpdateQuantity,
  onClearCart,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoError, setPromoError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 999;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingFee = subtotal >= freeShippingThreshold || items.length === 0 ? 0 : 99;
  const discountAmount = Math.round(subtotal * appliedDiscount);
  const grandTotal = Math.max(0, subtotal - discountAmount + (items.length > 0 ? shippingFee : 0));

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const code = promoCode.trim().toUpperCase();
    if (code === 'ROYALPAW15' || code === 'WAG15') {
      setAppliedDiscount(0.15);
      triggerLuxuryConfetti();
    } else if (code === 'DESIPAW10' || code === 'FIRST10') {
      setAppliedDiscount(0.1);
      triggerLuxuryConfetti();
    } else {
      setPromoError('Invalid coupon. Try: ROYALPAW15');
    }
  };

  const handlePlaceOrder = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderPlaced(true);
      triggerLuxuryConfetti();
      if (onClearCart) onClearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs">
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 26, stiffness: 220 }}
        className="w-full max-w-md bg-[#FBFBF9] h-full flex flex-col justify-between border-l border-black/10 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-black/10 bg-white flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#E63E26] font-bold block">
              DISPATCH LEDGER
            </span>
            <h3 className="font-display font-extrabold text-2xl text-[#141413]">Shopping Bag</h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Close Shopping Bag"
          >
            <X className="w-5 h-5 text-[#141413]" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-[#FFF0EE]/60 px-6 py-3 border-b border-black/5 font-mono text-xs">
          {amountNeededForFreeShipping > 0 && items.length > 0 ? (
            <div className="space-y-1.5">
              <div className="flex justify-between text-[#141413]">
                <span>Express Shipping across India</span>
                <span className="font-bold text-[#E63E26]">Add ₹{amountNeededForFreeShipping}</span>
              </div>
              <div className="w-full h-1.5 bg-black/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#E63E26] transition-all duration-300 rounded-full"
                  style={{
                    width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`,
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="text-emerald-800 font-bold flex items-center gap-1.5">
              <Check className="w-4 h-4 stroke-[3]" />
              <span>Unlocked: Complimentary All-India Express Dispatch</span>
            </div>
          )}
        </div>

        {/* Content Body */}
        {orderPlaced ? (
          <div className="p-8 flex-1 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-display font-bold text-2xl shadow-sm">
              ✓
            </div>
            <h4 className="font-display font-bold text-3xl text-[#141413]">Order Confirmed!</h4>
            <p className="font-sans text-xs text-[#63635E]">
              Order № AUR-2026-8942 has been dispatched to our Himalayan & Ayurvedic preparation unit.
            </p>
            <div className="p-4 bg-white rounded-2xl border border-black/10 font-mono text-xs text-left w-full space-y-1.5 shadow-xs">
              <div>Estimated Delivery: <strong className="text-[#141413]">2-3 Business Days</strong></div>
              <div>Dispatch Hub: <strong className="text-[#141413]">Singalila & Bangalore</strong></div>
              <div>Payment Mode: <strong className="text-[#141413]">{paymentMethod.toUpperCase()} (₹{grandTotal})</strong></div>
            </div>
            <button
              onClick={() => {
                setOrderPlaced(false);
                onClose();
              }}
              className="mt-4 px-8 py-3.5 bg-[#141413] text-white rounded-full font-display text-xs uppercase font-bold tracking-wider hover:bg-[#2B2B28] cursor-pointer"
            >
              Continue Browsing
            </button>
          </div>
        ) : items.length === 0 ? (
          <div className="p-8 flex-1 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-neutral-100 text-[#8E8E88] flex items-center justify-center">
              <ShoppingBag className="w-7 h-7" />
            </div>
            <h4 className="font-display font-bold text-2xl text-[#141413]">
              Your Bag is Empty
            </h4>
            <p className="font-sans text-xs text-[#63635E] max-w-xs">
              Explore our Himalayan yak chews, raw freeze-dried country fowls, and cold-pressed coat elixirs.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full bg-[#141413] text-white font-display text-xs font-bold uppercase tracking-wider hover:bg-[#2B2B28] transition-colors cursor-pointer"
            >
              Explore Provisions
            </button>
          </div>
        ) : (
          <div className="p-6 flex-1 overflow-y-auto divide-y divide-black/5 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="pt-4 first:pt-0 flex items-start justify-between gap-4">
                <div className="space-y-1 flex-1">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#E63E26] font-bold">
                    {item.product.origin.split(',')[0]}
                  </span>
                  <h4 className="font-display font-bold text-base text-[#141413] leading-snug">
                    {item.product.name}
                  </h4>
                  <div className="font-mono text-xs text-[#141413] font-semibold">
                    ₹{item.product.price} <span className="text-[#8E8E88] text-[10px] font-normal">each</span>
                  </div>

                  {/* Quantity Controls */}
                  <div className="pt-2 flex items-center gap-3">
                    <div className="flex items-center border border-black/10 rounded-full bg-white shadow-xs">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center text-xs font-mono font-bold hover:text-[#E63E26] cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-mono font-bold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center text-xs font-mono font-bold hover:text-[#E63E26] cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="font-mono text-xs text-[#8E8E88] hover:text-red-600 transition-colors cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="font-display text-xl font-bold text-[#141413] text-right">
                  ₹{item.product.price * item.quantity}
                </div>
              </div>
            ))}

            {/* Promo Code Form */}
            <div className="pt-6">
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Coupon (e.g. ROYALPAW15)"
                  className="flex-1 px-4 py-2.5 bg-white border border-black/10 rounded-xl font-mono text-xs placeholder:text-[#8E8E88] focus:outline-none focus:border-[#141413] shadow-xs"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#141413] text-white rounded-xl font-display text-xs font-bold uppercase tracking-wider hover:bg-[#2B2B28] cursor-pointer"
                >
                  Apply
                </button>
              </form>
              {promoError && (
                <p className="font-mono text-xs text-red-600 mt-1">{promoError}</p>
              )}
              {appliedDiscount > 0 && (
                <p className="font-mono text-xs text-emerald-700 font-bold mt-1">
                  ✓ {appliedDiscount * 100}% Royal Paw discount applied!
                </p>
              )}
            </div>
          </div>
        )}

        {/* Footer Billing Breakdown */}
        {!orderPlaced && items.length > 0 && (
          <div className="p-6 border-t border-black/10 bg-white space-y-4">
            <div className="space-y-1.5 font-mono text-xs">
              <div className="flex justify-between text-[#63635E]">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>Discount ({appliedDiscount * 100}%)</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between text-[#63635E]">
                <span>Express Dispatch (India)</span>
                <span>{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</span>
              </div>
              <div className="pt-2 border-t border-black/10 flex justify-between text-sm font-bold text-[#141413]">
                <span className="uppercase">Grand Total</span>
                <span className="font-display text-2xl font-extrabold text-[#141413]">₹{grandTotal}</span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="pt-1">
              <span className="font-mono text-[10px] uppercase text-[#8E8E88] block mb-1 font-semibold">
                Select Payment Mode
              </span>
              <div className="grid grid-cols-3 gap-2 font-mono text-xs text-center">
                <button
                  onClick={() => setPaymentMethod('upi')}
                  className={`py-2 rounded-lg border font-medium cursor-pointer ${
                    paymentMethod === 'upi' ? 'border-[#141413] bg-[#141413] text-white font-bold' : 'border-black/10 bg-[#FBFBF9]'
                  }`}
                >
                  UPI / GPay
                </button>
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`py-2 rounded-lg border font-medium cursor-pointer ${
                    paymentMethod === 'card' ? 'border-[#141413] bg-[#141413] text-white font-bold' : 'border-black/10 bg-[#FBFBF9]'
                  }`}
                >
                  Card / Net
                </button>
                <button
                  onClick={() => setPaymentMethod('cod')}
                  className={`py-2 rounded-lg border font-medium cursor-pointer ${
                    paymentMethod === 'cod' ? 'border-[#141413] bg-[#141413] text-white font-bold' : 'border-black/10 bg-[#FBFBF9]'
                  }`}
                >
                  Cash on Delivery
                </button>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={isCheckingOut}
              className="w-full py-4 bg-[#E63E26] hover:bg-[#FF4D36] text-white rounded-full font-display text-xs font-bold uppercase tracking-widest shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
            >
              {isCheckingOut ? (
                <span>Generating Order...</span>
              ) : (
                <>
                  <span>PROCEED TO ORDER • ₹{grandTotal}</span>
                  <span>→</span>
                </>
              )}
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
