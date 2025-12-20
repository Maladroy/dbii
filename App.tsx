import React, { useState } from 'react';
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

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'all-products'>('home');

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