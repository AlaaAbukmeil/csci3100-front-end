// api.ts
import { CartItem, Coupon, Reward } from './types';

export const fetchCoupons = async (): Promise<Coupon[]> => {
return [
    { id: 'coupon1', description: '10% Off', discountPercentage: 10 },
];
};

export const applyCoupon = async (couponId: string, cartItems: CartItem[]): Promise<number> => {
  const discountPercentage = 10;
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (totalAmount * (100 - discountPercentage)) / 100;
};

export const calculateRewards = (totalAmount: number): Reward => {
  const pointsEarned = Math.floor(totalAmount / 10);
return {
    points: pointsEarned,
    description: `You earned ${pointsEarned} points!`,
};
};


export const createCoupon = async (description: string, discountPercentage: number): Promise<Coupon> => {
return { id: 'newcoupon', description, discountPercentage };
};