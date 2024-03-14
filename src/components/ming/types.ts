// types.ts
export type Coupon = {
  id: string;
  description: string;
  discountPercentage: number;
};

export type Reward = {
  points: number;
  description: string;
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};