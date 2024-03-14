    // Admin.tsx
    import React, { useState } from 'react';
import { createCoupon } from './api';

    const Admin: React.FC = () => {
    const [description, setDescription] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState(0);

    const handleCreateCoupon = async () => {
        const newCoupon = await createCoupon(description, discountPercentage);
        // Handle the new coupon (e.g., display a message or add it to a list of coupons)
    };

    return (
        <div>
        <h2>Admin - Create Coupon</h2>
        <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Coupon Description"
        />
        <input
            type="number"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(Number(e.target.value))}
            placeholder="Discount Percentage"
        />
        <button onClick={handleCreateCoupon}>Create Coupon</button>
        </div>
    );
    };

    export default Admin;