import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../utils/api';
import Footer from '../components/Footer';

const ProductDetail = ({ addToCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getProductById(id);
            setProduct(data);
        };

        fetchProduct();
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
                <p className="text-xl font-semibold mb-4">${product.price}</p>
                <p>{product.description}</p>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetail;
