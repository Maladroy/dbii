import { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductListProps {
    onProductClick: (product: Product) => void;
    onOpenContact: () => void;
    onViewAll: () => void;
}

function ProductList({ onProductClick, onOpenContact, onViewAll }: ProductListProps) {
    const [activeCategory, setActiveCategory] = useState("Tất cả");
    const visibleCount = 10; // Only show top 10 on home page

    // Filter logic: Match category AND exclude hidden items
    const filteredProducts = PRODUCTS.filter(p => {
        const isCategoryMatch = activeCategory === "Tất cả" ? true : p.category === activeCategory;
        const isVisible = !p.isHidden;
        return isCategoryMatch && isVisible;
    });

    const displayProducts = filteredProducts.slice(0, visibleCount);

    return (
        <section id="products" className="container mx-auto px-4 py-12 scroll-mt-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4 border-b border-gray-200 pb-4">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase flex items-center gap-3">
                        <span className="w-2 h-8 bg-blue-600 rounded-sm"></span>
                        Sản Phẩm Của Chúng Tôi
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm">Chăm sóc toàn diện cho ngôi nhà của bạn</p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {displayProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {displayProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onClick={onProductClick}
                            onOpenContact={onOpenContact}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                    <p className="text-gray-500">Không tìm thấy sản phẩm nào trong danh mục này.</p>
                </div>
            )}

            <div className="text-center mt-12">
                <button
                    onClick={onViewAll}
                    className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                >
                    <span>Xem tất cả sản phẩm</span>
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40"></div>
                </button>
            </div>
        </section>
    );
};

export default ProductList;