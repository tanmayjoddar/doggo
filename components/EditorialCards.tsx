import React from 'react';
import { BottleLineArt, CeramicBowlLineArt, BotanicalBranch } from './EditorialIllustrations';
import { ArrowRight, ShieldCheck, Leaf } from 'lucide-react';

export const EditorialCards: React.FC = () => {
  return (
    <section id="education" className="w-full bg-[#FBFBF9] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto hairline-b">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
        {/* Card 1: Soft Lavender Education Card */}
        <div className="md:col-span-4 bg-[#E9E4F5] p-8 sm:p-10 rounded-3xl border border-black/10 shadow-sm flex flex-col justify-between min-h-[400px]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase tracking-widest text-[#141413]">
              <Leaf className="w-3 h-3 text-emerald-700" />
              <span>EDUCATION — CANINE VEDIC CARE</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#141413] leading-[1.05] uppercase">
              Journey Into <br />
              the World of <br />
              <span className="text-[#7A6296]">Ayurvedic Biology</span>
            </h2>

            <p className="font-sans text-xs text-[#543F6E] leading-relaxed pt-2">
              Discover how cold-pressed native herbs, wood-pressed neem, and high-curcumin Lakadong turmeric restore tropical coat immunity and soothe sensitive digestion.
            </p>
          </div>

          <div className="pt-6">
            <a
              href="#ayurveda"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#141413] text-white font-display text-xs font-bold uppercase tracking-wider hover:bg-[#2B2B28] transition-all"
            >
              <span>Explore Formulations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Card 2: Pure White Manifesto */}
        <div className="md:col-span-4 bg-white p-8 sm:p-10 rounded-3xl border border-black/10 shadow-sm flex flex-col justify-between min-h-[400px]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#F4F4EE] px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase tracking-widest text-[#141413]">
              <span>OUR PROMISE — ZERO SHORTCUTS</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#141413] uppercase leading-tight">
              Together towards <br />
              <span className="text-[#C99839]">a Wilder Life</span>
            </h3>

            {/* Botanical Center Motif */}
            <div className="py-3 flex items-center justify-center">
              <div className="w-20 h-20 border border-black/15 rounded-full flex items-center justify-center">
                <div className="w-14 h-14 bg-[#FFF8EB] border border-[#C99839]/30 rounded-full flex items-center justify-center">
                  <BotanicalBranch className="w-7 h-7 text-[#C99839]" />
                </div>
              </div>
            </div>
          </div>

          <p className="font-sans text-xs text-[#63635E] leading-relaxed pt-4 hairline-t">
            We partner with Singalila yak herders and Kerala spice growers to preserve ancient superfood recipes that honor ancestral carnivore biology.
          </p>
        </div>

        {/* Card 3: Deep Obsidian Card */}
        <div className="md:col-span-4 bg-[#141413] text-[#FBFBF9] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-sm flex flex-col justify-between min-h-[400px]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase tracking-widest text-[#FBFBF9]">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>72-HOUR HERBAL EXTRACTION</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white uppercase leading-tight">
              Traditional <br />
              <span className="text-[#E63E26]">Taila Paka Vidhi</span>
            </h3>

            <p className="font-sans text-xs text-[#8E8E88] leading-relaxed">
              Herbs are slow-decocted in pure cold-pressed coconut and black sesame oils over mild flame, unlocking lipid-soluble micronutrients that shield against ticks and shedding.
            </p>
          </div>

          <div className="pt-6 hairline-t border-white/10 flex items-center justify-between">
            <BottleLineArt className="w-12 h-16 text-white" />
            <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase">
              100% Lick-Safe & Edible
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
