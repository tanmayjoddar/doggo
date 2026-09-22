'use client';

import React, { useState } from 'react';
import { ProductWithVisuals, PRODUCTS } from '../data/products';
import { CheckCircle2, ArrowRight, ShieldCheck, Sun, CloudRain, Wind, Check } from 'lucide-react';
import { triggerLuxuryConfetti } from '../lib/confetti';

interface InteractiveRoutineProps {
  onAddMultipleToCart?: (products: ProductWithVisuals[]) => void;
}

export const InteractiveRoutine: React.FC<InteractiveRoutineProps> = ({
  onAddMultipleToCart,
}) => {
  const [breed, setBreed] = useState<'indie' | 'golden' | 'shihtzu' | 'gsd'>('indie');
  const [climate, setClimate] = useState<'monsoon' | 'summer' | 'winter'>('monsoon');
  const [activity, setActivity] = useState<'zoomies' | 'stroller' | 'couch'>('zoomies');
  const [addedAll, setAddedAll] = useState(false);

  const breeds = [
    { id: 'indie', label: 'Indie / Desi Hound', coat: 'Weather-Tough Short Coat', subtitle: 'High stamina, resilient digestion' },
    { id: 'golden', label: 'Golden / Labrador', coat: 'Dense Double Coat', subtitle: 'Heavy shedding, hip support' },
    { id: 'shihtzu', label: 'Shih Tzu / Lhasa', coat: 'Long Silky Fur', subtitle: 'Sensitive skin, delicate appetite' },
    { id: 'gsd', label: 'German Shepherd / Hound', coat: 'Athletic Muscle Frame', subtitle: 'Joint agility & muscle demand' },
  ];

  const climates = [
    { id: 'monsoon', label: 'Monsoon / Humid', desc: 'Damp paws, tick season, skin flare-ups', icon: CloudRain },
    { id: 'summer', label: 'Peak Summer (38-44°C)', desc: 'Heavy panting, coat shedding, hydration', icon: Sun },
    { id: 'winter', label: 'Winter / Dry Season', desc: 'Chapped paw pads, dry dander', icon: Wind },
  ];

  const activities = [
    { id: 'zoomies', label: 'High Activity', sub: '2+ hours active trails, runs & fetch' },
    { id: 'stroller', label: 'Moderate Walks', sub: '45-60 min neighbourhood walks' },
    { id: 'couch', label: 'Lounge Companion', sub: 'Indoor gentle play & rest' },
  ];

  const getRecommendedProducts = (): ProductWithVisuals[] => {
    const list: ProductWithVisuals[] = [];
    const yak = PRODUCTS.find((p) => p.id === 'himalayan-yak-chew')!;
    const chicken = PRODUCTS.find((p) => p.id === 'desi-chicken-pumpkin')!;
    const neem = PRODUCTS.find((p) => p.id === 'neem-coconut-elixir')!;
    const broth = PRODUCTS.find((p) => p.id === 'malabar-fish-broth')!;
    const bed = PRODUCTS.find((p) => p.id === 'cloud-bolster-bed')!;
    const collar = PRODUCTS.find((p) => p.id === 'rajputana-leather-collar')!;

    if (climate === 'monsoon') {
      list.push(neem, chicken, yak);
    } else if (climate === 'summer') {
      list.push(broth, neem, yak);
    } else {
      list.push(chicken, broth, bed);
    }

    if (activity === 'zoomies' && !list.includes(collar)) {
      list[2] = collar;
    }

    return list;
  };

  const recommended = getRecommendedProducts();
  const totalPrice = recommended.reduce((sum, p) => sum + p.price, 0);
  const totalOriginal = recommended.reduce((sum, p) => sum + (p.originalPrice || p.price), 0);
  const savings = totalOriginal - totalPrice;

  const handleAddBundle = () => {
    triggerLuxuryConfetti();
    if (onAddMultipleToCart) {
      onAddMultipleToCart(recommended);
    }
    setAddedAll(true);
    setTimeout(() => setAddedAll(false), 2500);
  };

  return (
    <section id="protocol" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto hairline-b">
      {/* Section Header */}
      <div className="max-w-3xl mb-12 space-y-2">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#E63E26] block">
          02 / CANINE DIAGNOSTIC MATRIX
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#141413] uppercase leading-[1.1]">
          Canine Biology Routine Calculator
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#63635E]">
          Select your dog’s breed profile, Indian climate condition, and daily activity level to generate a custom Ayurvedic meal, coat shield, and chew routine.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side Selectors */}
        <div className="lg:col-span-7 space-y-8 bg-white p-6 sm:p-8 rounded-3xl border border-black/10 shadow-sm">
          {/* Step 1: Breed Profile */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-display text-sm font-bold uppercase tracking-wider text-[#141413] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#141413] text-white flex items-center justify-center font-mono text-[11px] font-bold">
                  1
                </span>
                Select Canine Breed Profile
              </span>
              <span className="font-mono text-[10px] text-[#8E8E88] uppercase">Coat Morphology</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {breeds.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setBreed(b.id as any)}
                  className={`p-4 rounded-2xl text-left border transition-all duration-200 active:scale-98 cursor-pointer ${
                    breed === b.id
                      ? 'border-[#E63E26] bg-[#FFF0EE] ring-2 ring-[#E63E26]/20'
                      : 'border-black/10 bg-[#FBFBF9] hover:bg-neutral-100'
                  }`}
                >
                  <div className="font-display font-bold text-sm sm:text-base text-[#141413]">{b.label}</div>
                  <div className="font-mono text-xs text-[#E63E26] font-semibold mt-0.5">{b.coat}</div>
                  <div className="font-sans text-[11px] text-[#63635E] mt-1">{b.subtitle}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Indian Climate */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-display text-sm font-bold uppercase tracking-wider text-[#141413] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#141413] text-white flex items-center justify-center font-mono text-[11px] font-bold">
                  2
                </span>
                Current Regional Climate & Season
              </span>
              <span className="font-mono text-[10px] text-[#8E8E88] uppercase">Weather Factor</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {climates.map((c) => {
                const IconComponent = c.icon;
                return (
                  <button
                    key={c.id}
                    onClick={() => setClimate(c.id as any)}
                    className={`p-4 rounded-2xl text-left border transition-all duration-200 active:scale-98 flex flex-col justify-between min-h-[110px] cursor-pointer ${
                      climate === c.id
                        ? 'border-[#E63E26] bg-[#FFF0EE] ring-2 ring-[#E63E26]/20'
                        : 'border-black/10 bg-[#FBFBF9] hover:bg-neutral-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display font-bold text-sm text-[#141413]">{c.label}</span>
                      <IconComponent className={`w-4 h-4 ${climate === c.id ? 'text-[#E63E26]' : 'text-[#8E8E88]'}`} />
                    </div>
                    <div className="font-sans text-[11px] text-[#63635E] leading-snug">{c.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Activity Level */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-display text-sm font-bold uppercase tracking-wider text-[#141413] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#141413] text-white flex items-center justify-center font-mono text-[11px] font-bold">
                  3
                </span>
                Daily Activity & Walking Intensity
              </span>
              <span className="font-mono text-[10px] text-[#8E8E88] uppercase">Metabolic Demand</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {activities.map((a) => (
                <button
                  key={a.id}
                  onClick={() => setActivity(a.id as any)}
                  className={`p-4 rounded-2xl text-left border transition-all duration-200 active:scale-98 cursor-pointer ${
                    activity === a.id
                      ? 'border-[#E63E26] bg-[#FFF0EE] ring-2 ring-[#E63E26]/20'
                      : 'border-black/10 bg-[#FBFBF9] hover:bg-neutral-100'
                  }`}
                >
                  <div className="font-display font-bold text-sm text-[#141413]">{a.label}</div>
                  <div className="font-sans text-[11px] text-[#63635E] mt-1 leading-snug">{a.sub}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output Deck — Matching Light Theme */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-black/10 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-black/10">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#141413]">
                Calculated Daily Regimen
              </span>
              <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                100% Vet Balanced
              </span>
            </div>

            {/* Morning Bowl */}
            <div className="p-4 rounded-2xl bg-[#FBFBF9] border border-black/5 space-y-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#E63E26] font-bold">08:00 AM • MORNING BOWL</span>
                <span className="text-[#141413] font-bold font-display text-base">₹{recommended[0].price}</span>
              </div>
              <div className="font-display font-bold text-base text-[#141413]">{recommended[0].name}</div>
              <div className="font-mono text-xs text-[#63635E]">{recommended[0].origin}</div>
            </div>

            {/* Midday Topical Defense */}
            <div className="p-4 rounded-2xl bg-[#FBFBF9] border border-black/5 space-y-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#C99839] font-bold">02:00 PM • TOPICAL COAT DEFENSE</span>
                <span className="text-[#141414] font-bold font-display text-base">₹{recommended[1].price}</span>
              </div>
              <div className="font-display font-bold text-base text-[#141413]">{recommended[1].name}</div>
              <div className="font-mono text-xs text-[#63635E]">{recommended[1].formula}</div>
            </div>

            {/* Evening Rest & Chew */}
            <div className="p-4 rounded-2xl bg-[#FBFBF9] border border-black/5 space-y-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#2D8A5E] font-bold">08:30 PM • EVENING REST & CHEW</span>
                <span className="text-[#141413] font-bold font-display text-base">₹{recommended[2].price}</span>
              </div>
              <div className="font-display font-bold text-base text-[#141413]">{recommended[2].name}</div>
              <div className="font-mono text-xs text-[#63635E]">{recommended[2].weightOrSize}</div>
            </div>
          </div>

          {/* Pricing & 1-Click Action */}
          <div className="pt-4 border-t border-black/10 space-y-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-[#63635E]">Total Regimen Price:</span>
              <div className="flex items-baseline gap-2">
                <span className="text-[#8E8E88] line-through text-xs">₹{totalOriginal}</span>
                <span className="font-display text-3xl font-extrabold text-[#141413]">₹{totalPrice}</span>
              </div>
            </div>

            {savings > 0 && (
              <div className="text-xs font-mono text-emerald-700 flex items-center justify-between font-semibold">
                <span>Routine Protocol Savings:</span>
                <span>You Save ₹{savings}</span>
              </div>
            )}

            <button
              onClick={handleAddBundle}
              disabled={addedAll}
              className={`w-full py-4 rounded-full font-display text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 cursor-pointer ${
                addedAll
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-[#E63E26] hover:bg-[#FF4D36] text-white shadow-md'
              }`}
            >
              {addedAll ? (
                <>
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  <span>ALL 3 PROVISIONS ADDED TO BAG!</span>
                </>
              ) : (
                <>
                  <span>ADD FULL REGIMEN TO BAG (₹{totalPrice})</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
