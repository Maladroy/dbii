import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FlashSale from './components/FlashSale';
import ProductList from './components/ProductList';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';
import StoryModal from './components/StoryModal';
import ContactModal from './components/ContactModal';
import AllProductsPage from './components/AllProductsPage';
import { Product } from './types';
import { PRODUCTS } from './constants';

const createSlug = (name: string) => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'all-products'>('home');

  // Deep linking: Check URL for product ID or Slug on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('product');

    if (productId) {
      const found = PRODUCTS.find(p => p.id === productId);
      if (found) {
        setSelectedProduct(found);
      }
    } else {
      const slug = window.location.pathname.substring(1);
      if (slug) {
        const found = PRODUCTS.find(p => createSlug(p.name) === slug);
        if (found) {
          setSelectedProduct(found);
        }
      }
    }
  }, []);

  // Update URL when selectedProduct changes
  useEffect(() => {
    if (selectedProduct) {
      const slug = createSlug(selectedProduct.name);
      const newUrl = `/${slug}`;
      if (window.location.pathname !== newUrl) {
        window.history.pushState({ productId: selectedProduct.id }, '', newUrl);
      }
    } else {
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
      }
    }
  }, [selectedProduct]);

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      const slug = window.location.pathname.substring(1);
      if (!slug) {
        setSelectedProduct(null);
      } else {
        const found = PRODUCTS.find(p => createSlug(p.name) === slug);
        if (found) {
          setSelectedProduct(found);
        } else {
          setSelectedProduct(null);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const navigateTo = (view: 'home' | 'all-products') => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header
        onProductSelect={handleProductClick}
        currentView={currentView}
        onNavigate={navigateTo}
      />

      {currentView === 'home' ? (
        <main className="space-y-6 pb-12">
          <Hero />

          {/* Flash Sale Section */}
          <FlashSale onProductClick={handleProductClick} />

          {/* Main Products */}
          <ProductList
            onProductClick={handleProductClick}
            onOpenContact={() => setIsContactOpen(true)}
            onViewAll={() => navigateTo('all-products')}
          />

          {/* Company Info / Mission */}
          <Features onOpenStory={() => setIsStoryOpen(true)} />

          {/* Reviews */}
          <Reviews />
        </main>
      ) : (
        <AllProductsPage
          onBack={() => navigateTo('home')}
          onProductClick={handleProductClick}
          onOpenContact={() => setIsContactOpen(true)}
        />
      )}

      <Footer />

      {/* Modals */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onOpenContact={() => {
            setSelectedProduct(null);
            setIsContactOpen(true);
          }}
        />
      )}

      {isStoryOpen && (
        <StoryModal onClose={() => setIsStoryOpen(false)} />
      )}

      {isContactOpen && (
        <ContactModal onClose={() => setIsContactOpen(false)} />
      )}
    </div>
  );
}

export default App;
