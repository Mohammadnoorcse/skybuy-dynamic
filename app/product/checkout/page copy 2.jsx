'use client';
import React, { useState } from 'react';
import { IoMdSend } from "react-icons/io";
import { useCartWishlist } from "@/app/components/global/CartWishlistContext";

const CheckoutPage = () => {
    const { cartItems, clearCart } = useCartWishlist();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        emergency_phone: '',
        country: '',
        district: '',
        city: '',
        address: '',
        delivery_method: '',
        note: ''
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!cartItems.length) {
            setMessage('Your cart is empty!');
            return;
        }

        const payload = {
            ...formData,
            total_amount: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
            items: cartItems.map(item => ({
                product_id: item.id,
                product_name: item.name,
                quantity: item.quantity,
                price: item.price
            }))
        };

        setLoading(true);
        setMessage('');

        try {
            const res = await fetch('http://127.0.0.1:8000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await res.json();

            if (res.ok) {
                setMessage('Order placed successfully!');
                clearCart(); // clear cart after order
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    emergency_phone: '',
                    country: '',
                    district: '',
                    city: '',
                    address: '',
                    delivery_method: '',
                    note: ''
                });
            } else {
                setMessage(data.message || 'Something went wrong!');
            }
        } catch (error) {
            console.error(error);
            setMessage('Network error!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='w-full flex flex-col gap-4'>

            <form className='w-full flex flex-col gap-2' onSubmit={handleSubmit}>
                <div className='w-full flex flex-col md:flex-row gap-4'>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className='w-full p-2 border border-gray-200 rounded-md outline-none'
                        required
                    />
                    <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone / Email"
                        className='w-full p-2 border border-gray-200 rounded-md outline-none'
                        required
                    />
                </div>

                <div className='w-full flex flex-col md:flex-row gap-4'>
                    <input
                        name="emergency_phone"
                        value={formData.emergency_phone}
                        onChange={handleChange}
                        placeholder="Emergency Phone *"
                        className='w-full p-2 border border-gray-200 rounded-md outline-none'
                        required
                    />
                    <input
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Country *"
                        className='w-full p-2 border border-gray-200 rounded-md outline-none'
                        required
                    />
                </div>

                <div className='w-full flex flex-col md:flex-row gap-4'>
                    <input
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        placeholder="District *"
                        className='w-full p-2 border border-gray-200 rounded-md outline-none'
                        required
                    />
                    <input
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City / Upazila *"
                        className='w-full p-2 border border-gray-200 rounded-md outline-none'
                        required
                    />
                </div>

                <div className='w-full flex flex-col md:flex-row gap-4'>
                    <input
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address *"
                        className='w-full p-2 border border-gray-200 rounded-md outline-none'
                        required
                    />
                    <input
                        name="delivery_method"
                        value={formData.delivery_method}
                        onChange={handleChange}
                        placeholder="Delivery Method *"
                        className='w-full p-2 border border-gray-200 rounded-md outline-none'
                        required
                    />
                </div>

                <textarea
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    placeholder="Note"
                    className='w-full p-2 border border-gray-200 rounded-md outline-none'
                    rows={5}
                />

                <button
                    type="submit"
                    className='mt-3 w-full bg-[#167389] text-white p-2 rounded-md'
                    disabled={loading}
                >
                    {loading ? 'Placing Order...' : 'Place Order'}
                </button>
            </form>

            {message && <p className='mt-2 text-center text-red-500'>{message}</p>}
        </div>
    );
};

export default CheckoutPage;
