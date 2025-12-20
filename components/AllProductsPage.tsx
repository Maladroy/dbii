import React, { useState, useEffect } from 'react';
import { ArrowLeft, Filter, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface AllProductsPageProps {
  onBack: () => void;
  onProductClick: (product: Product) => void;
  onOpenContact: () => void;
}

const AllProductsPage: React.FC<AllProductsPageProps> = ({ onBack, onProductClick, onOpenContact }) => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [sortOption, setSortOption] = useState<"default" | "price-asc" | "price-desc">("default");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter and Sort Logic
  const filteredProducts = PRODUCTS
    .filter(p => !p.isHidden) // Hide secret items
    .filter(p => activeCategory === "Tất cả" || p.category === activeCategory)
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      return 0; // Default order (as defined in constants)
    });

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      {/* Breadcrumb / Back Navigation */}
      <div className="flex items-center gap-2 mb-8 text-sm text-gray-500">
        <button 
          onClick={onBack}
          className="flex items-center gap-1 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={16} /> Trang chủ
        </button>
        <span>/</span>
        <span className="text-gray-800 font-bold">Tất cả sản phẩm</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters (Desktop) */}
        <div className="hidden lg:block w-64 flex-shrink-0 space-y-8">
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Filter size={20} /> Danh mục
            </h3>
            <ul className="space-y-2">
              {CATEGORIES.map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex justify-between items-center ${
                      activeCategory === cat 
                        ? 'bg-blue-50 text-blue-700 font-bold' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className="text-xs bg-gray-200 text-gray-500 px-2 py-0.5 rounded-full">
                      {cat === "Tất cả" 
                        ? PRODUCTS.filter(p => !p.isHidden).length 
                        : PRODUCTS.filter(p => p.category === cat && !p.isHidden).length
                      }
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4 flex justify-between items-center">
             <button 
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium"
             >
                 <SlidersHorizontal size={18} /> Bộ lọc
             </button>
             <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as any)}
                className="bg-gray-100 border-none rounded-lg text-sm px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
            >
                <option value="default">Mới nhất</option>
                <option value="price-asc">Giá: Thấp đến Cao</option>
                <option value="price-desc">Giá: Cao đến Thấp</option>
            </select>
        </div>
        
        {/* Mobile Filter Drawer */}
        {isMobileFilterOpen && (
            <div className="lg:hidden mb-6 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <h4 className="font-bold mb-3 text-sm uppercase text-gray-500">Danh mục</h4>
                <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => {
                                setActiveCategory(cat);
                                setIsMobileFilterOpen(false);
                            }}
                            className={`px-3 py-1.5 text-xs rounded-full border ${
                                activeCategory === cat 
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-white text-gray-600 border-gray-200'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        )}

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-extrabold text-gray-900">
                {activeCategory} <span className="text-gray-400 font-normal text-lg">({filteredProducts.length} sản phẩm)</span>
            </h1>
            
            {/* Desktop Sort */}
            <div className="hidden lg:flex items-center gap-2">
                <span className="text-sm text-gray-500">Sắp xếp theo:</span>
                <select 
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value as any)}
                    className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 outline-none"
                >
                    <option value="default">Mới nhất</option>
                    <option value="price-asc">Giá: Thấp đến Cao</option>
                    <option value="price-desc">Giá: Cao đến Thấp</option>
                </select>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        onClick={onProductClick}
                        onOpenContact={onOpenContact}
                    />
                ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                <p className="text-gray-500 text-lg">Không tìm thấy sản phẩm nào.</p>
                <button 
                    onClick={() => setActiveCategory("Tất cả")}
                    className="mt-4 text-blue-600 hover:underline"
                >
                    Xem tất cả sản phẩm
                </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;