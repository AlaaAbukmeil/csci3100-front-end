    // Checkout.tsx
import React, { useEffect, useState } from 'react';
import { applyCoupon, calculateRewards, fetchCoupons } from './api';
import { CartItem, Coupon, Reward } from './types';

    const Checkout: React.FC = () => {
    const [coupons, setCoupons] = useState<Coupon[]>([]);
    const [selectedCouponId, setSelectedCouponId] = useState<string | null>(null);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [reward, setReward] = useState<Reward | null>(null);

    useEffect(() => {
        const getCoupons = async () => {
        const availableCoupons = await fetchCoupons();
        setCoupons(availableCoupons);
        };

        getCoupons();
    }, []);

    const handleSelectCoupon = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCouponId(event.target.value);
    };

    const handleCheckout = async () => {
        if (selectedCouponId) {
        const discountedTotal = await applyCoupon(selectedCouponId, cartItems);
        setTotalAmount(discountedTotal);
        }
        const rewards = calculateRewards(totalAmount);
        setReward(rewards);
    };
    function reRoute(event: any, location: string){
        window.location.href = location;
    }
    return (
        <div>
        <h2>Checkout</h2>
        <select value={selectedCouponId || ''} onChange={handleSelectCoupon}>
            <option value="">Select a coupon</option>
            {coupons.map((coupon) => (
            <option key={coupon.id} value={coupon.id}>
                {coupon.description}
            </option>
            ))}
        </select>
        <button onClick={handleCheckout}>Checkout</button>
        {reward && <p>{reward.description}</p>}
        <button onClick = {(event: any) => {
            reRoute(event, "/credit");
        }}>credit</button>
        </div>

    );
    };

    export default Checkout;