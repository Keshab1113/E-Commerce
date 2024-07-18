import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cart = [] }) => {
    const cartItemCount = cart.length;

    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">E-Commerce</Link>
            <div>
                <Link to="/" className="px-4">Home</Link>
                <Link to="/cart" className="px-4 relative">
                    Cart
                    {cartItemCount > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">
                            {cartItemCount}
                        </span>
                    )}
                </Link>
            </div>
        </header>
    );
};

export default Header;
