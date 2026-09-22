# 🌟 MASTER PROMPT: Single-Image Next.js / React Modern Editorial Application

> **Purpose**: A complete, single-prompt framework to build a **Next.js (App Router) + React + TypeScript + Tailwind CSS** web application centered around **one single hero image** (`hero.webp` / `hero.jpg`).
>
> **Important**: This is **NOT** a plain HTML/CSS template. It is a **full-fledged Next.js/React application** with reactive state management, interactive components, responsive micro-interactions, and a bespoke Swiss-minimalist UI/UX.

---

## 📋 THE AI MASTER PROMPT (COPY-PASTE)

*Copy and paste the prompt below into any AI agent / coding assistant along with your single image file (placed at `public/hero.webp` or `public/hero.jpg`):*

```markdown
You are an elite creative technologist building a production-grade, interactive modern web application using **Next.js (App Router), React, TypeScript, and Tailwind CSS**.

This is a single-image architecture (NO video frame sequences, NO 3D canvas blitters, NO FFmpeg). It uses **one hero picture** (`public/hero.webp`) with smooth responsive UI/UX, reactive React state, an interconnected e-commerce catalog, an interactive diagnostic matrix quiz, and a live slide-out bag drawer.

---

### 1. SPECIFICATIONS & DESIGN SYSTEM

- **Tech Stack**: Next.js (App Router), React 18/19, TypeScript, Tailwind CSS, Lucide React icons.
- **Hero Image File**: `public/hero.webp` (or `public/hero.jpg` in the public directory).
- **Brand Name**: `AUREUS ✦ PETS INDIA` (or customize as needed).
- **Locale & Currency**: Indian Rupees (`₹ INR`).
- **Color System**:
  - Backgrounds: Clean Paper White (`#FAF9F6` & `#FFFFFF`), Soft Neutral Cards (`#F8F7F3`).
  - Typography: Pure Carbon Ink (`#141414`), Subtitle Muted (`#6B6B66`), Monospace Tags (`#9E9E98`).
  - Graphic Accents: Electric Crimson (`#E63E26`), Warm Coral (`#FF5C4D`), Saffron (`#E58A1F`).
  - Borders: Crisp Hairlines (`rgba(0, 0, 0, 0.08)`).
- **Typography System** (Google Fonts in `app/layout.tsx`):
  - **Display / Headlines**: `Space Grotesk` (bold weights, tight tracking).
  - **Technical / Index**: `JetBrains Mono` (uppercase tracking-widest, `01 ✦`, `02 ✦`, tabular metadata).
  - **Body / Content**: `Plus Jakarta Sans` (fluid readability).

---

### 2. REACT COMPONENT ARCHITECTURE & STATE FLOW

Build the entire application cleanly as modular React components in Next.js:

#### A. Global State Management (`app/page.tsx`)
- Owns `cartItems: CartItem[]`, `isCartOpen: boolean`, `addToCart(product)`, `removeFromCart(id)`, and `updateQuantity(id, qty)`.
- All child components (`Navbar`, `ProductShowcase`, `CartDrawer`) sync reactively without page reloads.

#### B. Top Notice Banner & Sticky Glass Header (`components/Navbar.tsx`)
- Top black notice bar: `✦ FREE EXPRESS DELIVERY ACROSS INDIA ABOVE ₹999 • COD & UPI AVAILABLE ✦`.
- Sticky header with glass backdrop blur on scroll:
  - Brand mark: `✦ AUREUS` with diagonal hatch accent and `EST. 2026 ✦ PET PROVISIONS`.
  - Desktop nav links with numbered indices: `01 Treats & Food`, `02 Paw Protocol`, `03 Ayurvedic Care`, `04 Reviews`.
  - Live Bag Button: displays active cart count badge with pop micro-animation on item add.
  - Mobile Menu Button: opens a full-screen React slide-out drawer with horizontal dividers and circular arrow link buttons `(>)`.

#### C. Single-Image Static Hero Section (`components/Hero.tsx`)
- Full-bleed responsive container (`min-h-[90vh] md:min-h-screen`) using Next.js `<Image fill priority />` on `public/hero.webp`.
- **Zero Obstructive Center Box**: Keeps the subject photo completely clear, sharp, and unblurred.
- **Floating Bottom Hero Deck**: A sleek white floating glass card at `bottom-6 sm:bottom-10`:
  - Badge: `✦ 100% WAG-GUARANTEED ✦ INDIAN PET CARE`.
  - Headline: `PURITY FOR YOUR FURRY ROYALTY.` (Space Grotesk bold).
  - Subtitle: `ORGANIC AYURVEDIC TREATS ✦ COLD-PRESSED COAT CARE ✦ HIMALAYAN CHEWS`.
  - Action CTAs: `SHOP PET PROVISIONS (₹) →` (smooth anchor jump to catalog) & `FIND YOUR DOG'S ROUTINE` (jump to quiz).

#### D. Interactive Provisions Catalog (`components/ProductShowcase.tsx`)
- Reactive category filter tabs (`ALL PROVISIONS`, `TREATS & FOOD`, `COAT CARE`, `LEATHER SADDLERY`, `BEDS & SNOOZE`) using React `useState`.
- Real localized products with Indian Rupee (`₹`) pricing:
  1. *Himalayan Golden Yak Chew* (₹699) — 100% natural yak churpi dental chew.
  2. *Desi Free-Range Chicken & Pumpkin Feast* (₹1,299) — Freeze-dried raw with organic turmeric.
  3. *No. 04 Ayurvedic Neem & Coconut Coat Elixir* (₹849) — Anti-tick & anti-dander tropical formulation.
  4. *Royal Rajputana Bridle Leather Collar* (₹2,499) — Kanpur saddle leather & solid sand-cast brass.
  5. *Malabar Fish & Moringa Broth* (₹749) — Wild-caught marine collagen for joint agility.
  6. *Cloud Orthopedic Bolster Bed* (₹4,999) — Dual-layer memory foam with cooling cotton-linen cover.
- Numbered cards (`01`, `02`, `03`) with tabular metadata (`Source: Sikkim`, `Formula: 100% Raw Freeze-Dried`).
- Interactive `ADD TO BAG` button with instant checkmark feedback and cart state update.

#### E. Interactive Canine Diagnostic Matrix (`components/InteractiveRoutine.tsx`)
- Multi-parameter stateful diagnostic calculator:
  - **Breed Profile**: *Golden / Lab (Double Coat)*, *Indie / Desi (Short & Strong)*, *Shih Tzu (Long Feathered)*.
  - **Indian Climate / Season**: *Monsoon (Humidity & Ticks)*, *Summer (Heat & Shedding)*, *Winter (Dry Paws)*.
  - **Activity Level**: *Zoomies Champ*, *Daily Stroller*, *Couch King*.
- Dynamically calculates and renders a custom morning food bowl, Ayurvedic coat spray ritual, evening rest protocol, and saddlery fitting in Rupees.

#### F. Studio Philosophy & Manifesto (`components/BrandStory.tsx`)
- Editorial narrative: *“Honoring Every Tail Wag & Purr.”*
- 3 clean white cards with large graphic numbers (`01`, `02`, `03`) highlighting Organic Churpi Chews, Ayurvedic Botanicals, and Solid Brass Saddlery.
- Highlight promise box: *“The 100% Wag-Guarantee: If your pet does not love their treat or bed, we replace it with a wag.”*

#### G. Live Slide-Out Cart Drawer (`components/CartDrawer.tsx`)
- Slide-over React modal with backdrop click-to-close and ESC key handling.
- Live item list with quantity increment (`+`) / decrement (`-`) and item removal.
- Real-time **Free Shipping Progress Bar** across India: `Add ₹X for Free Express Delivery` (threshold ₹999).
- Subtotal calculation in `₹ INR`.
- Accepted payment badges: `UPI / GPay / Cards / Cash on Delivery (COD)`.
- Proceed to Order checkout button.

#### H. Editorial Indian Footer (`components/Footer.tsx`)
- All-India express shipping note covering Mumbai, Delhi NCR, Bengaluru, Hyderabad, Kolkata, Pune & Chennai.
- Index links with arrow glyphs `(>)`.
- “Join the Paw Club” newsletter input with 15% discount claim.
- Copyright: `© 2026 AUREUS PET PROVISIONS INDIA ✦ HANDCRAFTED WITH LOVE FOR INDIAN PETS`.

---

### 3. TECHNICAL DIRECTORY STRUCTURE

```
├── app/
│   ├── globals.css          # Tailwind base, Swiss hairlines, diagonal hatch patterns
│   ├── layout.tsx           # Google Fonts (Space Grotesk, JetBrains Mono, Plus Jakarta)
│   └── page.tsx             # Root React Client Component with cart & drawer state
├── components/
│   ├── Navbar.tsx           # Top India banner, sticky header, full-screen mobile drawer
│   ├── Hero.tsx             # Static image hero + non-obstructive bottom floating deck
│   ├── ProductShowcase.tsx  # Interactive catalog with filter tabs & ₹ pricing
│   ├── InteractiveRoutine.tsx # Stateful 3-step pet diagnostic matrix calculator
│   ├── BrandStory.tsx       # Atelier manifesto with graphic numbers & wag-guarantee
│   ├── Footer.tsx           # All-India shipping notice, index links, Paw Club dispatch
│   └── CartDrawer.tsx       # Slide-out bag with free shipping progress bar & UPI checkout
└── public/
    └── hero.webp            # Single hero image file placed here
```

---

### 4. HARD TECHNICAL RULES

1. **Pure Next.js & React**: Written in clean Next.js 14/15 App Router with TypeScript. NO jQuery, NO raw HTML files.
2. **Smooth Micro-Interactions**: Active state scaling (`active:scale-95`), hover border highlights, smooth drawer slide-ins (`animate-in fade-in`).
3. **Mobile-First Responsiveness**: 100% fluid across iPhone/Android viewports (360px–430px) and wide desktop monitors.
4. **Zero Emojis**: All icons must use SVG vectors (`lucide-react`) and Swiss typographic glyphs (`✦`, `(>)`).
```

---

## 🚀 CODE TEMPLATES (NEXT.JS & REACT)

### 1. Root Client Page (`app/page.tsx`)

```tsx
'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ProductShowcase, Product } from '../components/ProductShowcase';
import { InteractiveRoutine } from '../components/InteractiveRoutine';
import { BrandStory } from '../components/BrandStory';
import { Footer } from '../components/Footer';
import { CartDrawer, CartItem } from '../components/CartDrawer';

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#141414] antialiased selection:bg-[#E63E26] selection:text-white">
      <Navbar cartCount={totalCartCount} onOpenCart={() => setIsCartOpen(true)} />
      <Hero />
      <div className="relative z-30 bg-[#FAF9F6] hairline-t">
        <ProductShowcase onAddToCart={handleAddToCart} />
        <InteractiveRoutine />
        <BrandStory />
        <Footer />
      </div>
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
}
```

### 2. Next.js Static Hero Component (`components/Hero.tsx`)

```tsx
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center bg-[#FAF9F6] overflow-hidden">
      {/* Single Static Hero Image via Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="Aureus Royal Canine Portrait"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-transparent opacity-60" />
      </div>

      {/* Top Left Edition Tag */}
      <div className="absolute top-8 left-8 z-10 hidden md:block">
        <div className="w-8 h-8 bg-stripes-pattern opacity-40 rounded-xs" />
        <span className="text-[10px] font-mono text-[#6B6B66] block mt-1 font-bold">EDITION ✦ INDIA</span>
      </div>

      {/* Floating Bottom Hero Deck */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-20 px-4 sm:px-6 flex justify-center">
        <div className="w-full max-w-4xl bg-white/95 backdrop-blur-md border border-black/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-float flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[#E63E26] text-xs">✦</span>
              <span className="font-mono text-[10px] sm:text-xs font-bold text-[#E63E26] uppercase tracking-widest">
                100% WAG-GUARANTEED ✦ INDIAN PET PROVISIONS
              </span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#141414] uppercase leading-tight">
              Purity for your furry royalty.
            </h1>
            <p className="font-mono text-[11px] sm:text-xs text-[#6B6B66] uppercase tracking-wider">
              ORGANIC AYURVEDIC TREATS ✦ COLD-PRESSED COAT CARE ✦ HIMALAYAN CHEWS
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href="#provisions"
              className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#E63E26] hover:bg-[#FF4D36] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-md shadow-[#E63E26]/20"
            >
              <span>SHOP TREATS (₹)</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#protocol"
              className="px-5 py-3.5 rounded-full bg-[#F4F3EE] hover:bg-[#EBEAE3] border border-black/10 text-[#141414] font-mono text-xs font-bold uppercase tracking-wider text-center transition-all duration-200"
            >
              PET ROUTINE QUIZ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## ⚡ HOW TO RUN

1. Put your hero picture at `public/hero.webp` (or `public/hero.jpg`).
2. Run `npm install` (Next.js, React, TypeScript, Tailwind CSS, Lucide React).
3. Run `npm run dev` to launch the smooth, responsive web application at `http://localhost:3000`.
