'use client';

import React, { useState } from 'react';
import { BOTANICAL_INGREDIENTS } from '../data/products';
import { Leaf, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';

export const AyurvedicCoatCare: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  return (
    <section id="ayurveda" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto hairline-b">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 sm:pb-12 hairline-b gap-6">
        <div className="space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1B6442] block">
            03 / SINGLE-ESTATE BOTANICAL ALCHEMY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#141413] uppercase leading-[1.1]">
            Pure Indian Plant Alchemy
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#63635E] max-w-2xl leading-relaxed">
            No synthetic silicones. No artificial fragrances. Pure hand-harvested native botanicals infused using the classical Ayurvedic Taila Paka Vidhi method.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-black/10 font-mono text-xs font-bold text-[#141413] shadow-xs shrink-0 self-start md:self-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>100% EDIBLE & LICK-SAFE</span>
        </div>
      </div>

      {/* Grid of 4 Ingredients */}
      <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {BOTANICAL_INGREDIENTS.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedIdx(idx)}
            className={`cursor-pointer p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between min-h-[320px] ${
              selectedIdx === idx
                ? 'bg-white border-[#E63E26] shadow-md ring-2 ring-[#E63E26]/20'
                : 'bg-white border-black/10 hover:border-black/30 shadow-xs'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#E63E26] bg-[#FFF0EE] px-2 py-0.5 rounded">
                  0{idx + 1}
                </span>
                <span className="text-[10px] font-mono text-[#8E8E88] uppercase tracking-wider font-semibold">
                  SINGLE-ESTATE
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-[#141413] leading-snug">
                {item.name}
              </h3>

              <div className="flex items-center gap-1 font-mono text-xs text-[#E63E26] font-semibold">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>{item.origin}</span>
              </div>

              <div className="p-3 bg-[#FBFBF9] rounded-xl border border-black/5 font-mono text-xs font-medium text-[#141413]">
                {item.property}
              </div>

              <p className="font-sans text-xs text-[#63635E] leading-relaxed pt-1">
                {item.description}
              </p>
            </div>

            <div className="pt-4 mt-4 hairline-t flex items-center justify-between text-xs font-mono font-bold text-[#141413]">
              <span>LAB TESTED PURITY</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
