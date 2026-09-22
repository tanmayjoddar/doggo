'use client';

import React, { useState } from 'react';
import { REVIEWS } from '../data/products';
import { Star, ShieldCheck, MapPin, ThumbsUp } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [likedReviews, setLikedReviews] = useState<Record<string, number>>({});

  const handleLike = (id: string) => {
    setLikedReviews((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto hairline-b">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 sm:pb-12 hairline-b gap-6">
        <div className="space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#C99839] block">
            04 / VERIFIED INDIAN PET PARENTS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#141413] uppercase leading-[1.1]">
            Loved by 12,000+ Indian Dogs
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#63635E] max-w-2xl leading-relaxed">
            Real field dispatches from companion owners across Mumbai, Bengaluru, Delhi NCR, Pune, Kolkata, and Hyderabad.
          </p>
        </div>

        {/* Rating Scoreboard */}
        <div className="bg-white p-5 rounded-3xl border border-black/10 shadow-sm flex items-center gap-6 shrink-0 self-start md:self-auto">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-4xl font-extrabold text-[#141413]">4.94</span>
              <span className="font-mono text-xs text-[#8E8E88]">/ 5.0</span>
            </div>
            <div className="flex items-center gap-1 mt-1 text-[#C99839]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>
          <div className="hairline-l pl-6 space-y-1">
            <div className="font-mono text-xs font-bold text-[#141413]">1,280+ Reviews</div>
            <div className="font-mono text-xs text-emerald-600 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Verified Buyers
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {REVIEWS.map((rev) => (
          <div
            key={rev.id}
            className="bg-white p-8 sm:p-10 rounded-3xl border border-black/10 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-all duration-300"
          >
            <div className="space-y-4">
              {/* Reviewer Header */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="font-display font-bold text-lg text-[#141413]">
                      {rev.author}
                    </span>
                    <span className="bg-[#FFF0EE] text-[#E63E26] text-xs font-mono font-bold px-2.5 py-0.5 rounded-full">
                      {rev.petName}’s Parent
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-[#63635E] mt-1.5">
                    <span>{rev.petBreed}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[#141413] font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-[#E63E26]" /> {rev.city}
                    </span>
                  </div>
                </div>

                <div className="flex items-center text-[#C99839]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              {/* Product Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FBFBF9] border border-black/5 font-mono text-xs text-[#63635E]">
                <span>Purchased: <strong className="text-[#141413] font-bold">{rev.productName}</strong></span>
              </div>

              {/* Title & Review Content */}
              <div>
                <h4 className="font-display font-bold text-xl text-[#141413] leading-snug">
                  “{rev.title}”
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#4A4A45] leading-relaxed mt-2.5">
                  {rev.content}
                </p>
              </div>
            </div>

            {/* Review Footer */}
            <div className="pt-4 hairline-t flex items-center justify-between text-xs font-mono text-[#8E8E88]">
              <span>{rev.date}</span>

              <button
                onClick={() => handleLike(rev.id)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F4F4EE] hover:bg-neutral-200 text-[#141413] transition-colors active:scale-95 cursor-pointer font-bold"
              >
                <ThumbsUp className="w-3.5 h-3.5 text-[#63635E]" />
                <span>Helpful ({(likedReviews[rev.id] || 0) + 12})</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
