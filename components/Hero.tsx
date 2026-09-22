'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-[#D9E8F5] border-b border-black/10 overflow-hidden pt-20 sm:pt-28 pb-12 sm:pb-16 flex items-center min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Column: Bold Headline, Action Buttons & Checkpoints */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7 z-10 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3">
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight text-[#141413] uppercase leading-[1.05] sm:leading-[0.98]">
                Purity for Your <br />
                <span className="text-[#E63E26]">Furry Royalty.</span>
              </h1>
            </div>

            {/* Action Buttons: Sleek side-by-side row on both mobile and desktop */}
            <div className="flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 pt-1 max-w-md mx-auto lg:mx-0">
              <a
                href="#provisions"
                className="flex-1 sm:flex-initial px-4 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#E63E26] hover:bg-[#FF4D36] text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer active:scale-95 whitespace-nowrap"
              >
                <span>Explore Provisions</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              </a>
              <a
                href="#protocol"
                className="flex-1 sm:flex-initial px-4 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white hover:bg-neutral-100 border border-black/15 text-[#141413] font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-center transition-all shadow-xs cursor-pointer active:scale-95 whitespace-nowrap"
              >
                Routine Matrix
              </a>
            </div>

            {/* 4 Feature Checkpoints Grid */}
            <div className="pt-4 grid grid-cols-2 gap-2 sm:gap-3.5 font-mono text-[11px] sm:text-xs text-[#24333D] border-t border-black/10 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 shrink-0" />
                <span className="font-medium">Human-Grade Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 shrink-0" />
                <span className="font-medium">100% Grain-Free</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 shrink-0" />
                <span className="font-medium">Singalila 12,000 ft</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 shrink-0" />
                <span className="font-medium">AYUSH Standard</span>
              </div>
            </div>
          </div>

          {/* Right Column: Cute Puppy Face — Bespoke Staged Frame (Clean, Large, & Uncut) */}
          <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full flex items-center justify-center">
              {/* Cute Clean Arch & Halo Backdrop */}
              <div className="relative w-[240px] sm:w-[360px] lg:w-[440px] h-[240px] sm:h-[360px] lg:h-[440px] rounded-full bg-white/50 border-4 border-white shadow-2xl flex items-center justify-center p-2 sm:p-3 overflow-hidden">
                <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src="/hero.webp"
                    alt="Aureus Royal Dog Companion"
                    fill
                    priority
                    className="object-cover object-center transform scale-105 select-none"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
