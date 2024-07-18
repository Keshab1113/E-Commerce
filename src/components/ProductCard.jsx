import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p className="text-gray-600">${product.price}</p>
                <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">View Details</Link>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
