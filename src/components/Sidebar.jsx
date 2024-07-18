import React, { useState } from 'react';

const Sidebar = ({ onFilterChange, onSortChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        filterProducts({ searchTerm: e.target.value, minPrice, maxPrice });
    };

    const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
        filterProducts({ searchTerm, minPrice: e.target.value, maxPrice });
    };

    const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
        filterProducts({ searchTerm, minPrice, maxPrice: e.target.value });
    };

    const filterProducts = ({ searchTerm, minPrice, maxPrice }) => {
        onFilterChange({
            searchTerm,
            priceRange: [minPrice, maxPrice].map(price => (price === '' ? undefined : parseFloat(price)))
        });
    };

    const handleSortChange = (e) => {
        onSortChange(e.target.value);
    };

    return (
        <div className="bg-gray-200 p-4">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="border border-gray-300 rounded px-2 py-1 mb-2 w-full"
            />
            <div className="mb-2">
                <label className="block text-sm font-bold mb-2">Price Range</label>
                <input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    className="border border-gray-300 rounded px-2 py-1 mr-2"
                />
                <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    className="border border-gray-300 rounded px-2 py-1"
                />
            </div>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                onClick={() => filterProducts({ searchTerm, minPrice, maxPrice })}
            >
                Apply Filters
            </button>
            <div className="mt-4">
                <label className="block text-sm font-bold mb-2">Sort By Category</label>
                <select className="border border-gray-300 rounded px-2 py-1 w-full" onChange={handleSortChange}>
                    <option value="">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="books">Books</option>
                    {/* Add more options based on your product categories */}
                </select>
            </div>
        </div>
    );
};

export default Sidebar;
