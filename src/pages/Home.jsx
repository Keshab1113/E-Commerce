import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { getProducts } from '../utils/api';

const Home = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({});

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
            setFilteredProducts(data);
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        filterProducts(filters);
    }, [filters]);

    const filterProducts = ({ searchTerm = '', priceRange = [] }) => {
        let filtered = [...products];

        // Filter by search term
        filtered = filtered.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Filter by price range
        if (priceRange && priceRange.length === 2 && !isNaN(priceRange[0]) && !isNaN(priceRange[1])) {
            filtered = filtered.filter(product =>
                product.price >= priceRange[0] && product.price <= priceRange[1]
            );
        }

        setFilteredProducts(filtered);
    };

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    const handleSortChange = (sortType) => {
        let sorted = [...products];
        if (sortType) {
            sorted = sorted.filter(product => product.category === sortType);
        }
        setFilteredProducts(sorted);
    };

    return (
        <div>
            <div className="flex">
                <Sidebar onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
                <div className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold mb-4">Products</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} addToCart={addToCart} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
