import { Product, Review } from '../types';

export interface ProductWithVisuals extends Product {
  accentColor: string;
  badgeBg: string;
  badgeColor: string;
  highlightStat: string;
  highlightLabel: string;
}

export const PRODUCTS: ProductWithVisuals[] = [
  {
    id: 'himalayan-yak-chew',
    name: 'Himalayan Golden Yak Churpi Chew',
    subtitle: 'High-Altitude Hard Cheese Dental Provision',
    category: 'treats',
    price: 699,
    originalPrice: 849,
    rating: 4.9,
    reviewCount: 342,
    tag: '01',
    isBestseller: true,
    origin: 'Singalila Ridge, Sikkim (12,000 ft)',
    formula: '100% Sun-Cured Yak & Cow Milk, Organic Lime',
    weightOrSize: 'Pack of 3 (Medium/Large)',
    description: 'Ancient Himalayan smoked hard cheese recipe hand-crafted by artisan pastoralists. Completely grain-free, odor-free, non-staining, and rich in natural bio-available casein protein. Promotes dental tartar scraping during long chew sessions.',
    keyBenefits: [
      'Over 65% crude bio-digestible protein for muscle tone',
      'Naturally scrapes plaque & strengthens jaw musculature',
      'Microwave remaining small nubs for 45s to make a crunchy puff snack',
      'Completely free from synthetic binders, grains, & artificial preservatives'
    ],
    ingredients: ['Whole Yak Milk', 'Free-Grazing Zebu Cow Milk', 'Himalayan Spring Salt (0.01%)', 'Organic Lime Extract'],
    feedingOrUsageGuide: 'Give under supervision. When chewed down to a small nugget, microwave for 45-60 seconds until it puffs up like popcorn, cool, and serve as a crunchy puff.',
    badge: 'HIMALAYAN ARTISANAL',
    dietaryTags: ['Grain-Free', 'High-Protein', 'Long-Lasting', 'Single-Farm'],
    accentColor: '#D4A017',
    badgeBg: '#FFF8E7',
    badgeColor: '#9B740E',
    highlightStat: '65%+',
    highlightLabel: 'Bio-Protein'
  },
  {
    id: 'desi-chicken-pumpkin',
    name: 'Desi Free-Range Chicken & Turmeric Feast',
    subtitle: 'Freeze-Dried Raw Meal Mixer & High-Reward Morsels',
    category: 'treats',
    price: 1299,
    originalPrice: 1499,
    rating: 4.95,
    reviewCount: 289,
    tag: '02',
    isBestseller: true,
    origin: 'Panchgani Foothills, Maharashtra',
    formula: '85% Single-Source Country Chicken, 15% Organic Pumpkin & Turmeric',
    weightOrSize: '250g (Rehydrates to 1.1 kg)',
    description: 'Human-grade antibiotic-free country fowl gently flash-frozen at -40°C to lock in live enzymes, whole organ nutrition, and natural taurine. Infused with Lakadong high-curcumin turmeric to soothe sensitive Indian canine digestion.',
    keyBenefits: [
      'Freeze-dried raw nutrition preserves 97% of natural micronutrients',
      'Lakadong Turmeric (7.8% Curcumin) reduces systemic inflammation',
      'Prebiotic dietary fiber from solar-dried local orange pumpkins',
      'Serve dry as high-value training bits or rehydrated with warm bone broth'
    ],
    ingredients: ['Boneless Desi Fowl', 'Chicken Liver & Gizzard', 'Meghalaya Lakadong Turmeric', 'Solar-Dehydrated Pumpkin', 'Cold-Pressed Flaxseed'],
    feedingOrUsageGuide: 'Feed 10-15 pieces daily as high-value rewards, or crumble 2 tablespoons over regular kibble/rice bowl with warm water.',
    badge: 'RAW FREEZE-DRIED',
    dietaryTags: ['100% Raw', 'No Preservatives', 'Antibiotic-Free', 'Hypoallergenic'],
    accentColor: '#E63E26',
    badgeBg: '#FFF0EE',
    badgeColor: '#B02613',
    highlightStat: '85%',
    highlightLabel: 'Whole Raw Fowl'
  },
  {
    id: 'neem-coconut-elixir',
    name: 'No. 04 Ayurvedic Neem & Virgin Coconut Elixir',
    subtitle: 'Cold-Pressed Topical Coat & Anti-Tick Shield',
    category: 'coat',
    price: 849,
    originalPrice: 999,
    rating: 4.88,
    reviewCount: 412,
    tag: '03',
    isBestseller: true,
    origin: 'Pollachi Groves, Tamil Nadu & Malabar, Kerala',
    formula: 'Traditional Taila Paka Vidhi Slow Herbal Infusion',
    weightOrSize: '200ml Glass Amber Dropper Bottle',
    description: 'Potent botanical coat infusion formulated specifically for tropical Indian weather. Combines cold-pressed wild neem leaf extract, organic extra-virgin coconut oil, and holy basil (tulsi) to deter fleas, calm hot-spots, and nourish shedding undercoats.',
    keyBenefits: [
      'Natural botanical shield against ticks, fleas, and tropical mites',
      'Restores epidermal moisture barrier without heavy greasy residue',
      '100% lick-safe, edible-grade Ayurvedic veterinary formulation',
      'UV-blocking amber apothecary glass with precision dropper'
    ],
    ingredients: ['Cold-Pressed Cocos Nucifera (Coconut) Oil', 'Azadirachta Indica (Wild Neem) Extract', 'Ocimum Sanctum (Tulsi) Distillate', 'Cedrus Deodara (Himalayan Cedarwood) Oil', 'Black Sesame Oil'],
    feedingOrUsageGuide: 'Massage 5-10 drops directly into skin, armpits, and paw pads twice weekly before outdoor walks or brush sessions.',
    badge: 'VETERINARY AYURVEDA',
    dietaryTags: ['100% Vegan', 'Lick-Safe', 'Cold-Pressed', 'Chemical-Free'],
    accentColor: '#2D8A5E',
    badgeBg: '#EEF8F2',
    badgeColor: '#1B6442',
    highlightStat: '100%',
    highlightLabel: 'Lick-Safe'
  },
  {
    id: 'rajputana-leather-collar',
    name: 'Royal Rajputana Bridle Leather Collar',
    subtitle: 'Kanpur Full-Grain Saddlery with Solid Brass Hardware',
    category: 'saddlery',
    price: 2499,
    originalPrice: 2899,
    rating: 4.96,
    reviewCount: 178,
    tag: '04',
    origin: 'Master Saddlers of Jajmau, Kanpur',
    formula: '4mm Vegetable-Tanned Drum-Dyed Cowhide & Sand-Cast Brass',
    weightOrSize: 'Sizes S (12-16"), M (16-20"), L (20-25")',
    description: 'Bench-crafted by third-generation harness makers using heavy 4mm English-bridle vegetable tanned leather. Hand-beveled and burnished with natural beeswax. Fitted with non-corrosive solid sand-cast brass D-rings and buckle hardware.',
    keyBenefits: [
      'Develops a deep, rich custom patina over years of daily walks',
      'Hand-stitched with rot-resistant waxed poly-cord thread',
      'Ergonomic chamfered inner edges prevent fur snagging and chafing',
      'Lifetime warranty on all brass buckles and rivets'
    ],
    ingredients: ['Vegetable-Tanned Full-Grain Leather', 'Solid Sand-Cast Brass D-Rings', 'Pure Natural Beeswax Edge Sealant', 'Waxed Saddlers Thread'],
    feedingOrUsageGuide: 'Condition every 6 months with natural leather balm. Wipe dry with soft cotton if exposed to heavy monsoon rains.',
    badge: 'HERITAGE LEATHER',
    dietaryTags: ['Handcrafted', 'Solid Brass', 'Lifetime Hardware Guarantee'],
    accentColor: '#945D34',
    badgeBg: '#F8F1EB',
    badgeColor: '#6B3E1C',
    highlightStat: '4mm',
    highlightLabel: 'Bridle Hide'
  },
  {
    id: 'malabar-fish-broth',
    name: 'Malabar Wild Fish & Moringa Bone Broth',
    subtitle: 'Joint Collagen & Hydration Meal Topper',
    category: 'treats',
    price: 749,
    originalPrice: 899,
    rating: 4.91,
    reviewCount: 204,
    tag: '05',
    origin: 'Kochi Deep Waters & Wayanad Moringa Estates',
    formula: '24-Hour Low-Simmer Marine Collagen Reduction',
    weightOrSize: '350ml Concentrated Glass Jar',
    description: 'Slow-simmered for 24 hours using wild-caught Arabian Sea mackerel and reef fish bones. Fortified with shade-dried Moringa Oleifera leaves to deliver dense EPA/DHA omega-3 fatty acids, glucosamine, and chondroitin for active agility.',
    keyBenefits: [
      'Boosts synovial joint fluid and eases stiffness in active and senior dogs',
      'Entices picky eaters to clean their whole food bowl',
      'Supplies bio-available marine type-I and type-III collagen',
      'Low sodium formulation suitable for daily hydration'
    ],
    ingredients: ['Wild Mackerel & Sardine Bone Extract', 'Organic Shade-Dried Moringa Oleifera', 'Fresh Ginger Root (0.05%)', 'Purified Spring Water'],
    feedingOrUsageGuide: 'Pour 2-3 tablespoons warm or room temperature directly over daily meals, or freeze into cooling summer ice cubes.',
    badge: 'SLOW-SIMMERED',
    dietaryTags: ['Marine Omega-3', 'Glucosamine-Rich', 'No Added Salt', 'Grain-Free'],
    accentColor: '#3B7A9E',
    badgeBg: '#EDF5F9',
    badgeColor: '#245975',
    highlightStat: '24 Hr',
    highlightLabel: 'Low Simmer'
  },
  {
    id: 'cloud-bolster-bed',
    name: 'Vedic Cloud Orthopedic Bolster Bed',
    subtitle: 'Dual-Layer Memory Foam with Cooling Khadi-Cotton Cover',
    category: 'beds',
    price: 4999,
    originalPrice: 5800,
    rating: 4.98,
    reviewCount: 145,
    tag: '06',
    origin: 'Jaipur Textile Mills & Bangalore Ergonomics Lab',
    formula: '40D High-Density Orthopedic Foam + 350 GSM Organic Cotton',
    weightOrSize: 'Sizes: M (75x60cm), L (90x75cm), XL (115x90cm)',
    description: 'Engineered for optimal spine alignment and pressure-point relief. High-density medical grade base foam prevents bottoming out, while 360-degree raised bolsters give an ergonomic headrest. Wrapped in breathable, machine-washable heavy Indian organic canvas.',
    keyBenefits: [
      'Waterproof internal breathable antimicrobial liner',
      'Keeps dogs 3-4°C cooler than synthetic polyester beds during Indian summers',
      'Removable, machine-washable heavy-duty YKK zippered covers',
      'Non-skid silicone studded bottom base for marble and tile floors'
    ],
    ingredients: ['40D High-Resilience Orthopedic Foam', '100% Organic Indian Cotton Canvas Cover', 'Recycled Poly-Fiber Bolster Core', 'YKK Brass-Tone Zippers'],
    feedingOrUsageGuide: 'Unzip outer cover and machine wash on gentle cold cycle. Tumble dry low or air dry in shade.',
    badge: 'ORTHOPEDIC MASTER',
    dietaryTags: ['Orthopedic', 'Machine-Washable', 'Cooling Canvas', 'Anti-Skid'],
    accentColor: '#7A6296',
    badgeBg: '#F3EEF8',
    badgeColor: '#543F6E',
    highlightStat: '40D',
    highlightLabel: 'Medical Foam'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Ananya Deshmukh',
    petName: 'Sheru',
    petBreed: 'Indie Hound Mix (3 yrs)',
    city: 'Bandra West, Mumbai',
    rating: 5,
    date: 'February 14, 2026',
    title: 'Finally an authentic Indian pet brand that respects biology',
    content: 'Sheru used to chew through standard imported dental sticks in 4 minutes flat. The Himalayan Yak Chew keeps him completely mesmerized for 4-5 days straight! Plus the No. 04 Neem oil stopped his monsoon itching within 48 hours.',
    verifiedPurchase: true,
    productName: 'Himalayan Golden Yak Churpi Chew'
  },
  {
    id: 'rev-2',
    author: 'Vikramaditya Rathore',
    petName: 'Kallu & Simba',
    petBreed: 'Golden Retriever (4 yrs)',
    city: 'Vasant Vihar, New Delhi',
    rating: 5,
    date: 'January 28, 2026',
    title: 'The Rajputana Collar is true saddlery heirloom craft',
    content: 'The leather thickness and solid sand-cast brass hardware is extraordinary. You can smell the real vegetable-tanning process. It looks magnificent against Simba’s golden double coat.',
    verifiedPurchase: true,
    productName: 'Royal Rajputana Bridle Leather Collar'
  },
  {
    id: 'rev-3',
    author: 'Pooja & Arvind Sundaram',
    petName: 'Milo',
    petBreed: 'Shih Tzu (2 yrs)',
    city: 'Indiranagar, Bengaluru',
    rating: 5,
    date: 'February 2, 2026',
    title: 'Transformed our fussy eater into an excited pup',
    content: 'Milo is notoriously finicky with his dinner. We crumble half a chunk of the Freeze-Dried Desi Chicken over his bowl with warm Malabar fish broth and the bowl is licked spotless within 60 seconds.',
    verifiedPurchase: true,
    productName: 'Desi Free-Range Chicken & Turmeric Feast'
  },
  {
    id: 'rev-4',
    author: 'Kabir Mukherjee',
    petName: 'Bagheera',
    petBreed: 'German Shepherd (5 yrs)',
    city: 'Alipore, Kolkata',
    rating: 5,
    date: 'January 19, 2026',
    title: 'Orthopedic bed solved his morning hip stiffness',
    content: 'Bagheera loves stretching his head over the bolster rim. The organic canvas does not trap heat like his old foam bed used to in humid Kolkata weather. Exceptional craftsmanship.',
    verifiedPurchase: true,
    productName: 'Vedic Cloud Orthopedic Bolster Bed'
  }
];

export const BOTANICAL_INGREDIENTS = [
  {
    name: 'Cold-Pressed Virgin Coconut Oil',
    origin: 'Pollachi Groves, Tamil Nadu',
    property: 'Lauric Acid 52% • Cellular Lipid Barrier',
    description: 'Fresh wet-milled within 4 hours of harvest to preserve active triglycerides. Deeply hydrates cracked paws and prevents dander.'
  },
  {
    name: 'Wild Forest Neem Extract',
    origin: 'Dharapuram, Western Ghats',
    property: 'Azadirachtin Bio-Shield • Anti-Tick Barrier',
    description: 'Traditional wood-pressed bitter neem leaves that create an invisible repellent aura against tropical ectoparasites and fungus.'
  },
  {
    name: 'Lakadong High-Curcumin Turmeric',
    origin: 'Jaintia Hills, Meghalaya',
    property: '7.8% Natural Curcuminoid • Systemic Anti-Inflammatory',
    description: 'Grown in pristine organic soil with zero chemical fertilizers, soothing digestive tracts and supporting canine joint cartilage.'
  },
  {
    name: 'Himalayan Seabuckthorn Berry Oil',
    origin: 'Spiti Valley, Himachal Pradesh',
    property: 'Rare Omega-7 Fatty Acids • Coat Luster',
    description: 'Wild harvested at 13,000 feet, restoring cellular coat shine and repairing sun-damaged or patchy fur.'
  }
];
