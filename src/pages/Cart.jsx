import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cart = ({ cart, removeFromCart }) => {
    const navigate = useNavigate();
    const total = cart.reduce((acc, item) => acc + item.price, 0);

    const handleOrder = () => {
        navigate('/payment');
    };

    return (
        <div>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Cart</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index} className="mb-4 flex items-center">
                                    <img src={item.image} alt={item.title} className="w-20 h-20 object-cover mr-4" />
                                    <div>
                                        <h2 className="text-xl font-semibold">{item.title}</h2>
                                        <p className="text-gray-600">${item.price}</p>
                                    </div>
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded ml-auto"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove from Cart
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <h2 className="text-2xl font-bold mt-4">Total: ${total.toFixed(2)}</h2>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                            onClick={handleOrder}
                        >
                            Order
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
