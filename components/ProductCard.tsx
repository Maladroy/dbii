import React from 'react';
import { Phone, Tag, Eye, Package } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
  onOpenContact: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, onOpenContact }) => {
  const isCombo = product.category.toLowerCase().includes('combo');
  
  // Calculate discount dynamically if not provided
  const discount = product.discountPercentage || 
    (product.originalPrice && product.originalPrice > product.price 
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
      : 0);

  return (
    <div 
        onClick={() => onClick(product)}
        className={`bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden cursor-pointer relative ${
            isCombo ? 'border-2 border-yellow-400' : 'border border-gray-100'
        }`}
    >
        {isCombo && (
             <div className="absolute top-0 right-0 bg-yellow-400 text-red-900 text-[10px] font-extrabold px-3 py-1 z-20 rounded-bl-lg shadow-sm flex items-center gap-1">
                <Package size={12} /> COMBO HOT
             </div>
        )}

        <div className="relative aspect-square">
            <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {product.tag && (
                <div className="absolute top-3 left-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-r-full shadow-md z-10">
                    {product.tag}
                </div>
            )}
            {discount > 0 && (
                <div className={`absolute top-3 ${isCombo ? 'right-auto left-0 top-10' : 'right-3'} bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-md z-10`}>
                    -{discount}%
                </div>
            )}
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="bg-white text-blue-600 px-3 py-1.5 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all shadow-md flex items-center gap-1">
                    <Eye size={14} /> Chi tiết
                </span>
            </div>
        </div>
        
        <div className={`p-4 flex flex-col flex-1 ${isCombo ? 'bg-yellow-50/30' : ''}`}>
            <div className="flex items-center gap-1 text-[11px] text-gray-500 mb-2 uppercase tracking-wide font-medium">
                <Tag size={12} />
                <span>{product.category}</span>
            </div>
            <h3 className="text-base font-bold text-gray-800 mb-2 line-clamp-2 leading-snug group-hover:text-blue-700 transition-colors">
                {product.name}
            </h3>
            
            <div className="mt-auto pt-3 border-t border-gray-50">
                <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-red-600 font-bold text-lg">
                        {product.price.toLocaleString('vi-VN')}₫
                    </span>
                    {product.originalPrice && (
                        <span className="text-gray-400 text-xs line-through decoration-1">
                            {product.originalPrice.toLocaleString('vi-VN')}₫
                        </span>
                    )}
                </div>
                
                {/* Action Button */}
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        onOpenContact();
                    }}
                    className="w-full block text-center bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2"
                >
                    <Phone size={16} /> Liên hệ tư vấn
                </button>
            </div>
        </div>
    </div>
  );
};

export default ProductCard;