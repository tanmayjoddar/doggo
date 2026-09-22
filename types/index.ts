export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'treats' | 'coat' | 'saddlery' | 'beds';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  tag: string;
  isBestseller?: boolean;
  isNew?: boolean;
  origin: string;
  formula: string;
  weightOrSize: string;
  description: string;
  keyBenefits: string[];
  ingredients: string[];
  feedingOrUsageGuide: string;
  badge: string;
  dietaryTags: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant?: string;
}

export interface QuizState {
  breed: string;
  climate: string;
  activity: string;
  coatGoal: string;
}

export interface Review {
  id: string;
  author: string;
  petName: string;
  petBreed: string;
  city: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verifiedPurchase: boolean;
  productName: string;
}
