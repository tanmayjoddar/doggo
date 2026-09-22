'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Provisions', href: '#provisions', tag: '01' },
    { name: 'Canine Matrix', href: '#protocol', tag: '02' },
    { name: 'Ayurvedic Care', href: '#ayurveda', tag: '03' },
    { name: 'Field Reviews', href: '#reviews', tag: '04' },
    { name: 'Our Atelier', href: '#story', tag: '05' },
  ];

  return (
    <>
      {/* Fixed Header: 100% Transparent on Hero, Glass on Scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-white/95 backdrop-blur-md shadow-sm border-b border-black/10'
            : 'py-4 sm:py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Mark — Pure Clean AUREUS */}
          <a href="#" className="flex items-center group shrink-0">
            <span className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-[#141413] group-hover:text-[#E63E26] transition-colors">
              AUREUS
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group flex items-center gap-1.5 font-display text-sm font-medium text-[#141413] hover:text-[#E63E26] transition-colors py-1 relative whitespace-nowrap"
              >
                <span className="text-[10px] font-mono text-[#8E8E88] group-hover:text-[#E63E26] transition-colors">
                  {link.tag}
                </span>
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E63E26] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#protocol"
              className={`hidden md:flex items-center px-4 py-2 rounded-full border text-[#141413] hover:text-[#E63E26] font-mono text-xs font-semibold tracking-wide transition-all shadow-xs whitespace-nowrap ${
                isScrolled ? 'bg-white border-black/10' : 'bg-white/80 backdrop-blur-xs border-black/15'
              }`}
            >
              <span>ROUTINE MATRIX</span>
            </a>

            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-[#141413] text-[#FBFBF9] hover:bg-[#E63E26] transition-colors font-mono text-xs font-bold uppercase tracking-wider active:scale-95 shadow-sm cursor-pointer whitespace-nowrap"
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 stroke-[2]" />
              <span className="hidden sm:inline">BAG</span>
              <motion.span
                key={cartCount}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="min-w-[18px] h-[18px] px-1 bg-[#E63E26] text-white text-[10px] font-mono font-bold rounded-full flex items-center justify-center"
              >
                {cartCount}
              </motion.span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-white/90 border border-black/10 text-[#141413] hover:bg-neutral-100 transition-colors cursor-pointer"
              aria-label="Open Navigation"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#141413]/60 backdrop-blur-sm lg:hidden flex justify-end"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full max-w-xs bg-[#FBFBF9] h-full p-6 flex flex-col justify-between border-l border-black/10 shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between pb-4 hairline-b">
                  <span className="font-display font-extrabold text-xl text-[#141413]">AUREUS</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-full hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-6 flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-3 px-3.5 rounded-xl hover:bg-white hairline-b text-[#141413] group transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#E63E26] font-bold">{link.tag}</span>
                        <span className="font-display font-bold text-base">{link.name}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#8E8E88] group-hover:text-[#E63E26] transition-colors" />
                    </a>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-2xl bg-white border border-black/5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E63E26]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>100% WAG-GUARANTEE</span>
                  </div>
                  <p className="text-xs text-[#63635E] leading-relaxed">
                    If your companion does not instinctively love their treat or balm, we replace or refund with zero fuss.
                  </p>
                </div>
              </div>

              <div className="pt-4 hairline-t">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCart();
                  }}
                  className="w-full py-4 bg-[#141413] text-white rounded-full font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>VIEW BAG ({cartCount})</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
