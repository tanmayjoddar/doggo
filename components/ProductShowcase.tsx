'use client';

import React, { useState } from 'react';
import { ProductWithVisuals, PRODUCTS } from '../data/products';
import { Plus, Check, Eye, Star, MapPin } from 'lucide-react';
import { triggerLuxuryConfetti } from '../lib/confetti';

interface ProductShowcaseProps {
  onAddToCart: (product: ProductWithVisuals) => void;
  onQuickView?: (product: ProductWithVisuals) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  onAddToCart,
  onQuickView,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'All Provisions' },
    { id: 'treats', label: 'Yak Chews & Raw Food' },
    { id: 'coat', label: 'Ayurvedic Coat Care' },
    { id: 'saddlery', label: 'Bridle Saddlery' },
    { id: 'beds', label: 'Orthopedic Beds' },
  ];

  const filteredProducts = PRODUCTS.filter((item) => {
    return activeCategory === 'all' || item.category === activeCategory;
  });

  const handleAdd = (product: ProductWithVisuals) => {
    onAddToCart(product);
    triggerLuxuryConfetti();
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1200);
  };

  return (
    <section id="provisions" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Headline Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 sm:pb-12 hairline-b gap-6">
        <div className="space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#E63E26] block">
            01 / AUTONOMOUS ATELIER BATCHES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#141413] uppercase leading-[1.1]">
            Curated Provisions for Indian Pets
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#63635E] max-w-2xl leading-relaxed">
            Single-source Himalayan Churpi, raw freeze-dried mountain fowls, and wild Western Ghats botanicals crafted with zero chemical shortcuts.
          </p>
        </div>

        {/* Count Badge */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#141413] bg-white px-4 py-2 rounded-full border border-black/10 shadow-xs shrink-0 self-start md:self-auto">
          <span className="font-bold">{filteredProducts.length} PROVISIONS IN STOCK</span>
        </div>
      </div>

      {/* Category Navigation Pills */}
      <div className="pt-6 pb-10 flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full font-display text-xs sm:text-sm font-bold tracking-wider whitespace-nowrap transition-all duration-200 active:scale-95 cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-[#141413] text-white shadow-sm'
                : 'bg-white text-[#63635E] hover:text-[#141413] border border-black/10 hover:border-black/30'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product Cards Grid — Reliable Direct Render */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProducts.map((product) => {
          const isAdded = addedIds[product.id];

          return (
            <div
              key={product.id}
              className="group bg-white rounded-3xl border border-black/10 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Visual Card Header */}
              <div
                className="p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between min-h-[180px] border-b border-black/5"
                style={{
                  backgroundColor: product.badgeBg,
                }}
              >
                {/* Top Row: Tag & Review Rating */}
                <div className="relative z-10 flex items-center justify-between">
                  <span
                    className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-white/90 shadow-xs"
                    style={{ color: product.badgeColor }}
                  >
                    № {product.tag} — {product.badge}
                  </span>

                  <div className="flex items-center gap-1 font-mono text-xs font-bold bg-white/90 px-2.5 py-1 rounded-full text-[#141413] shadow-xs">
                    <Star className="w-3.5 h-3.5 fill-[#C99839] text-[#C99839]" />
                    <span>{product.rating}</span>
                    <span className="text-[#8E8E88] text-[10px]">({product.reviewCount})</span>
                  </div>
                </div>

                {/* Key Metric Feature */}
                <div className="relative z-10 pt-4 flex items-baseline justify-between">
                  <div>
                    <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#141413]">
                      {product.highlightStat}
                    </span>
                    <span className="font-mono text-xs font-semibold block text-[#63635E] uppercase tracking-wider mt-0.5">
                      {product.highlightLabel}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="font-mono text-[10px] text-[#8E8E88] uppercase block font-semibold">Pack / Size</span>
                    <span className="font-mono text-xs font-bold text-[#141413]">{product.weightOrSize}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#141413] group-hover:text-[#E63E26] transition-colors leading-tight">
                    {product.name}
                  </h3>
                  <p className="font-mono text-xs text-[#63635E] font-medium">
                    {product.subtitle}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-[#4A4A45] leading-relaxed line-clamp-3 pt-1">
                    {product.description}
                  </p>
                </div>

                {/* Tabular Specs */}
                <div className="p-3.5 bg-[#FBFBF9] rounded-2xl border border-black/5 space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[#8E8E88] uppercase text-[10px]">Origin:</span>
                    <span className="text-[#141413] font-semibold text-right flex items-center gap-1 truncate max-w-[200px]">
                      <MapPin className="w-3 h-3 text-[#E63E26] shrink-0" /> {product.origin.split(',')[0]}
                    </span>
                  </div>
                  <div className="hairline-b" />
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[#8E8E88] uppercase text-[10px]">Formula:</span>
                    <span className="text-[#141414] font-semibold text-right truncate max-w-[200px]">
                      {product.formula}
                    </span>
                  </div>
                </div>

                {/* Dietary Filter Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {product.dietaryTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#F4F4EE] text-[#63635E]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Price & Add to Bag */}
              <div className="p-6 sm:p-7 pt-4 hairline-t bg-[#FBFBF9]/50 flex items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[10px] text-[#8E8E88] block uppercase font-medium">
                    Price (₹ INR)
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-2xl sm:text-3xl font-bold text-[#141413]">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="font-mono text-xs text-[#8E8E88] line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {onQuickView && (
                    <button
                      onClick={() => onQuickView(product)}
                      className="p-3 rounded-full bg-white hover:bg-neutral-100 border border-black/10 text-[#141413] transition-colors shadow-xs cursor-pointer"
                      title="Inspect full ingredient sheet & feeding guide"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  )}

                  <button
                    onClick={() => handleAdd(product)}
                    disabled={isAdded}
                    className={`flex items-center gap-2 px-6 py-3.5 rounded-full font-display text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer active:scale-95 ${
                      isAdded
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-[#141413] hover:bg-[#E63E26] text-white shadow-sm'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4 stroke-[2.5]" />
                        <span>ADDED</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                        <span>ADD TO BAG</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
