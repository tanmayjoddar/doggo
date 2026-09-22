'use client';

import React from 'react';
import { SealStamp } from './EditorialIllustrations';
import { ShieldCheck } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="w-full bg-[#FBFBF9] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto hairline-b">
      {/* Manifesto Headline Banner */}
      <div className="max-w-4xl space-y-3 pb-12 sm:pb-16">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#E63E26] block">
          05 / ATELIER PHILOSOPHY & ETHICS
        </span>
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#141413] leading-[1.05] uppercase">
          Honoring the wild instincts, <br />
          <span className="text-[#E63E26]">dignity & biology of Indian pets.</span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#63635E] max-w-2xl leading-relaxed">
          For decades, Indian pet nutrition was relegated to grain-heavy factory extruded kibble imported from overseas climates. Aureus was founded in 2026 to revive single-origin Himalayan dairy heritage, ancient Vedic taila formulations, and handcrafted Kanpur leather work.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pb-12 sm:pb-16">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/10 shadow-sm space-y-3">
          <span className="font-mono text-xs font-bold text-[#C99839] uppercase tracking-wider block">
            № 01 • PROVENANCE
          </span>
          <h3 className="font-display font-bold text-2xl text-[#141413]">Singalila Pastoralists</h3>
          <p className="font-sans text-xs sm:text-sm text-[#63635E] leading-relaxed">
            Our yak cheese is sourced directly from indigenous nomadic families grazing on high-altitude medicinal herbs along the Indo-Nepal ridge at 12,000 feet.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/10 shadow-sm space-y-3">
          <span className="font-mono text-xs font-bold text-[#E63E26] uppercase tracking-wider block">
            № 02 • PURITY
          </span>
          <h3 className="font-display font-bold text-2xl text-[#141414]">Classical Ayurveda</h3>
          <p className="font-sans text-xs sm:text-sm text-[#63635E] leading-relaxed">
            Zero chemical preservatives or synthetic binders. Every recipe is certified by veterinary Ayurvedic vaidyas and batch-tested for heavy metals and purity.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/10 shadow-sm space-y-3">
          <span className="font-mono text-xs font-bold text-[#7A6296] uppercase tracking-wider block">
            № 03 • HEIRLOOM CRAFT
          </span>
          <h3 className="font-display font-bold text-2xl text-[#141413]">Master Saddlery</h3>
          <p className="font-sans text-xs sm:text-sm text-[#63635E] leading-relaxed">
            Crafted with heavy vegetable-tanned drum-dyed bridle hide and solid sand-cast brass hardware made to outlive years of vigorous daily walks.
          </p>
        </div>
      </div>

      {/* Wag Guarantee Seal Strip — Luxury High-Contrast Black Card */}
      <div className="bg-[#141413] text-[#FBFBF9] p-8 sm:p-12 rounded-3xl shadow-luxury-hover border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E63E26] uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>THE 100% WAG-GUARANTEE</span>
          </div>
          <h4 className="font-display font-bold text-2xl sm:text-3xl text-white leading-snug">
            "If your dog does not instinctively love their treat or elixir, we replace it or refund your order with zero hassle."
          </h4>
          <p className="font-mono text-xs text-neutral-400">
            Backed by our 30-Day Royal Companion Promise across India.
          </p>
        </div>

        <SealStamp text="WAG GUARANTEE — 100% PURE" className="w-24 h-24 text-white shrink-0" />
      </div>
    </section>
  );
};
