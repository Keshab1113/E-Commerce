import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Payment = ({ cart }) => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Payment</h1>
                <p>Total Amount: ${total.toFixed(2)}</p>
                <form className="mt-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
                            Card Number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="cardNumber"
                            type="text"
                            placeholder="1234 5678 9012 3456"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
                            Expiry Date
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="expiryDate"
                            type="text"
                            placeholder="MM/YY"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                            CVV
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="cvv"
                            type="text"
                            placeholder="123"
                        />
                    </div>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                        type="submit"
                    >
                        Pay Now
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Payment;
