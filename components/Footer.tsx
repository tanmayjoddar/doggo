'use client';

import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#FBFBF9] text-[#141413] border-t border-black/10">
      {/* Top Newsletter & Dispatch Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20 border-b border-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#E63E26] block">
              CANINE DISPATCH — NEWSLETTER
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#141413] leading-tight">
              Receive Seasonal Harvest Notes <br />
              <span className="text-[#63635E] font-medium">& Veterinary Formulations</span>
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#63635E] max-w-md leading-relaxed">
              Join our quiet monthly correspondence on Himalayan foraging, cold-pressed coat rituals, and canine health.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white border border-black/15 rounded-xl font-mono text-xs placeholder:text-[#8E8E88] focus:outline-none focus:border-[#141413]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#141413] text-white rounded-xl font-display text-xs uppercase font-bold tracking-wider hover:bg-[#2B2B28] transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>

            {subscribed && (
              <p className="font-mono text-xs text-emerald-800 font-semibold">
                ✓ Thank you. You have been added to our private dispatch ledger.
              </p>
            )}

            <div className="pt-2 font-mono text-[11px] text-[#63635E] flex flex-wrap gap-x-3 gap-y-1">
              <span>Express Dispatch:</span>
              <span>Mumbai</span>
              <span>•</span>
              <span>Bengaluru</span>
              <span>•</span>
              <span>Delhi NCR</span>
              <span>•</span>
              <span>Kolkata</span>
              <span>•</span>
              <span>Hyderabad</span>
              <span>•</span>
              <span>Pune</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-xs border-b border-black/10">
        <div className="space-y-3">
          <span className="text-[#8E8E88] uppercase text-[10px] tracking-widest font-bold block">Provisions</span>
          <ul className="space-y-2 text-[#141413]">
            <li><a href="#provisions" className="hover:underline">Himalayan Yak Chews</a></li>
            <li><a href="#provisions" className="hover:underline">Raw Country Fowl</a></li>
            <li><a href="#provisions" className="hover:underline">Ayurvedic Coat Oil</a></li>
            <li><a href="#provisions" className="hover:underline">Kanpur Leather Collar</a></li>
          </ul>
        </div>

        <div className="space-y-3">
          <span className="text-[#8E8E88] uppercase text-[10px] tracking-widest font-bold block">Canine Ayurveda</span>
          <ul className="space-y-2 text-[#141414]">
            <li><a href="#ayurveda" className="hover:underline">Taila Paka Vidhi</a></li>
            <li><a href="#ayurveda" className="hover:underline">Lakadong Turmeric</a></li>
            <li><a href="#ayurveda" className="hover:underline">Wild Forest Neem</a></li>
            <li><a href="#protocol" className="hover:underline">Diagnostic Matrix</a></li>
          </ul>
        </div>

        <div className="space-y-3">
          <span className="text-[#8E8E88] uppercase text-[10px] tracking-widest font-bold block">Atelier</span>
          <ul className="space-y-2 text-[#141414]">
            <li><a href="#story" className="hover:underline">Our Story & Ethics</a></li>
            <li><a href="#story" className="hover:underline">Singalila Heritage</a></li>
            <li><a href="#story" className="hover:underline">100% Wag-Guarantee</a></li>
            <li><a href="#reviews" className="hover:underline">Field Testimonials</a></li>
          </ul>
        </div>

        <div className="space-y-3">
          <span className="text-[#8E8E88] uppercase text-[10px] tracking-widest font-bold block">Provenance & Legal</span>
          <ul className="space-y-2 text-[#141414]">
            <li><span className="text-[#63635E]">AYUSH Approved Standard</span></li>
            <li><span className="text-[#63635E]">Plastic-Neutral Certified</span></li>
            <li><a href="#" className="hover:underline">Terms of Dispatch</a></li>
            <li><a href="#" className="hover:underline">Privacy Protocol</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Brand Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#63635E]">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-base text-[#141413]">AUREUS</span>
          <span>—</span>
          <span>EST. 2026 • ROYAL PET PROVISIONS INDIA</span>
        </div>

        <div>
          © 2026 AUREUS PETS INDIA • HANDCRAFTED WITH RESPECT FOR COMPANION BIOLOGY
        </div>
      </div>
    </footer>
  );
};
