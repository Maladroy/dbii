import React, { useState, useEffect, useRef } from 'react';
import { Search, Menu, X, PhoneCall, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface HeaderProps {
    onProductSelect: (product: Product) => void;
    currentView: 'home' | 'all-products';
    onNavigate: (view: 'home' | 'all-products') => void;
}

const removeAccents = (str: string) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
};

const Header: React.FC<HeaderProps> = ({ onProductSelect, currentView, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    
    if (currentView !== 'home') {
        onNavigate('home');
        // Wait for render then scroll
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    } else {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  const handleNavClick = (type: 'home' | 'products' | 'section', sectionId?: string) => {
      if (type === 'home') {
          onNavigate('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (type === 'products') {
          onNavigate('all-products');
      } else if (type === 'section' && sectionId) {
          scrollToSection(sectionId);
      }
      setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const trimmedInput = inputValue.trim();
    
    // Secret search logic
    if (trimmedInput === '#upsale') {
        const secretResults = PRODUCTS.filter(p => p.tag === 'Up Sale');
        setSearchResults(secretResults);
        setShowDropdown(true);
        return;
    }

    if (trimmedInput) {
        const normalizedInput = removeAccents(trimmedInput.toLowerCase());
        
        const results = PRODUCTS.filter(p => {
            // Exclude hidden items from normal search
            if (p.isHidden) return false;

            const normalizedName = removeAccents(p.name.toLowerCase());
            const normalizedCategory = removeAccents(p.category.toLowerCase());
            
            return normalizedName.includes(normalizedInput) || 
                   normalizedCategory.includes(normalizedInput);
        });
        setSearchResults(results);
        setShowDropdown(true);
    } else {
        setSearchResults([]);
        setShowDropdown(false);
    }
  }, [inputValue]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectProduct = (product: Product) => {
      onProductSelect(product);
      setInputValue("");
      setShowDropdown(false);
      setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg font-sans">
      {/* Main Header Row */}
      <div className="bg-blue-800 text-white py-3">
        <div className="container mx-auto px-4 flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
            <button 
                className="md:hidden p-1 hover:bg-blue-700 rounded transition-colors"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsMobileMenuOpen(true);
                }}
            >
                <Menu size={24} />
            </button>
            <div className="text-2xl md:text-3xl font-extrabold tracking-tighter italic">
              D-Bii
            </div>
          </div>

          {/* Search Bar - Centered and Sleek */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-auto relative" ref={searchRef}>
            <div className="flex w-full bg-white rounded-full overflow-hidden shadow-inner focus-within:ring-2 focus-within:ring-yellow-400 transition-all">
              <input 
                type="text" 
                placeholder="Tìm kiếm sản phẩm..." 
                className="flex-1 px-5 py-2.5 bg-transparent outline-none text-gray-800 placeholder-gray-400"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => inputValue.trim() && setShowDropdown(true)}
              />
              <button 
                className="px-6 bg-gray-100 hover:bg-gray-200 text-blue-800 transition-colors border-l border-gray-200"
              >
                <Search size={20} />
              </button>
            </div>

            {/* Search Dropdown */}
            {showDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden max-h-[400px] overflow-y-auto animate-fade-in z-50">
                    {searchResults.length > 0 ? (
                        <ul>
                            {searchResults.map(product => (
                                <li key={product.id}>
                                    <button 
                                        onClick={() => handleSelectProduct(product)}
                                        className="w-full text-left p-3 hover:bg-blue-50 flex items-center gap-4 transition-colors border-b border-gray-50 last:border-0 group"
                                    >
                                        <img 
                                            src={product.image} 
                                            alt={product.name} 
                                            className="w-12 h-12 rounded-md object-cover border border-gray-200"
                                        />
                                        <div className="flex-1">
                                            <h4 className="text-sm font-bold text-gray-800 group-hover:text-blue-700 line-clamp-1">
                                                {product.name}
                                                {product.tag === 'Up Sale' && <span className="ml-2 text-[10px] bg-gray-800 text-white px-1 rounded">SECRET</span>}
                                            </h4>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-red-600 font-bold">{product.price.toLocaleString('vi-VN')}₫</span>
                                                {product.originalPrice && (
                                                    <span className="text-[10px] text-gray-400 line-through">{product.originalPrice.toLocaleString('vi-VN')}₫</span>
                                                )}
                                            </div>
                                        </div>
                                        <ChevronRight size={16} className="text-gray-300 group-hover:text-blue-500" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="p-6 text-center text-gray-500">
                            <p className="text-sm">Không tìm thấy sản phẩm nào.</p>
                        </div>
                    )}
                </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center gap-3 pl-4 border-l border-blue-600">
             <div className="bg-white/10 p-2 rounded-full">
                <PhoneCall size={20} className="text-yellow-300" />
             </div>
             <div className="flex flex-col text-xs leading-tight">
                <span className="opacity-80 font-light">Hotline hỗ trợ</span>
                <span className="font-bold text-base text-yellow-300 tracking-wide">0964.186.768</span>
             </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar (Desktop) - Clean Single Row below */}
      <nav className="bg-white hidden md:block border-b border-gray-100">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-12 py-3 font-semibold text-sm text-gray-600 tracking-wide uppercase">
            <li>
                <button 
                    onClick={() => handleNavClick('home')} 
                    className={`transition-colors py-2 border-b-2 ${currentView === 'home' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-blue-600 hover:border-blue-600'}`}
                >
                    Trang Chủ
                </button>
            </li>
            <li>
                <button onClick={() => scrollToSection('intro')} className="hover:text-blue-600 transition-colors py-2 border-b-2 border-transparent hover:border-blue-600">
                    Giới Thiệu
                </button>
            </li>
            <li>
                <button 
                    onClick={() => handleNavClick('products')}
                    className={`transition-colors py-2 border-b-2 flex items-center gap-1 ${currentView === 'all-products' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-blue-600 hover:border-blue-600'}`}
                >
                    Sản Phẩm
                </button>
            </li>
            <li>
                <button onClick={() => scrollToSection('events')} className="text-red-600 hover:text-red-700 transition-colors py-2 border-b-2 border-transparent hover:border-red-600 flex items-center gap-1">
                    Sự Kiện
                </button>
            </li>
            <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 transition-colors py-2 border-b-2 border-transparent hover:border-blue-600">
                    Liên Hệ
                </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="relative bg-white w-4/5 max-w-xs h-full shadow-2xl flex flex-col animate-slide-in">
            <div className="p-5 bg-blue-800 text-white flex justify-between items-center shadow-md">
              <span className="font-bold text-xl italic">D-Bii Grocery</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="hover:bg-blue-700 p-1 rounded">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-4">
               <div className="px-5 mb-6">
                 {/* Mobile Search with Dropdown Logic */}
                 <div className="relative">
                    <div className="flex w-full border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                        <input 
                            type="text" 
                            placeholder="Tìm kiếm..." 
                            className="w-full p-2 outline-none text-sm"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button 
                            className="bg-gray-100 px-3 text-gray-600"
                        >
                            <Search size={18} />
                        </button>
                    </div>
                     {/* Mobile Dropdown */}
                    {inputValue.trim() && (
                        <div className="mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
                            {searchResults.length > 0 ? (
                                <ul>
                                    {searchResults.map(product => (
                                        <li key={product.id}>
                                            <button 
                                                onClick={() => handleSelectProduct(product)}
                                                className="w-full text-left p-3 border-b border-gray-100 last:border-0 flex items-center gap-3 active:bg-blue-50"
                                            >
                                                 <img 
                                                    src={product.image} 
                                                    alt={product.name} 
                                                    className="w-10 h-10 rounded object-cover"
                                                />
                                                <div>
                                                    <div className="text-sm font-medium text-gray-800 line-clamp-1">{product.name}</div>
                                                    <div className="text-xs text-red-600 font-bold">{product.price.toLocaleString('vi-VN')}₫</div>
                                                </div>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="p-4 text-center text-xs text-gray-500">
                                    Không có kết quả.
                                </div>
                            )}
                        </div>
                    )}
                 </div>
               </div>
               
               <ul className="space-y-1">
                 <li>
                    <button onClick={() => handleNavClick('home')} className="w-full text-left px-6 py-3 hover:bg-blue-50 text-gray-700 font-medium">Trang Chủ</button>
                 </li>
                 <li>
                    <button onClick={() => scrollToSection('intro')} className="w-full text-left px-6 py-3 hover:bg-blue-50 text-gray-700 font-medium">Giới Thiệu</button>
                 </li>
                 <li>
                    <button onClick={() => handleNavClick('products')} className="w-full text-left px-6 py-3 hover:bg-blue-50 text-gray-700 font-medium">Sản Phẩm</button>
                 </li>
                 <li>
                    <button onClick={() => scrollToSection('events')} className="w-full text-left px-6 py-3 hover:bg-red-50 text-red-600 font-bold">Sự Kiện Hot</button>
                 </li>
                 <li>
                    <button onClick={() => scrollToSection('contact')} className="w-full text-left px-6 py-3 hover:bg-blue-50 text-gray-700 font-medium">Liên Hệ</button>
                 </li>
               </ul>
            </div>
            
            <div className="p-5 border-t border-gray-100 bg-gray-50">
                <div className="flex items-center gap-3 text-blue-800">
                    <PhoneCall size={20} />
                    <span className="font-bold text-lg">0964.186.768</span>
                </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;