import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_BANNERS, SIDE_BANNERS } from '../constants';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_BANNERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_BANNERS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_BANNERS.length) % HERO_BANNERS.length);
  };

  return (
    <section id="home" className="container mx-auto px-4 py-6 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main Slider */}
        <div className="lg:col-span-2 relative group rounded-2xl overflow-hidden shadow-md h-50 md:h-87.5 lg:h-105">
          <div
            className="flex transition-transform duration-500 ease-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {HERO_BANNERS.map((banner) => (
              <div key={banner.id} className="min-w-full h-full relative">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-6 md:p-10">
                  <h2 className="text-white text-xl md:text-3xl font-bold leading-tight drop-shadow-lg">{banner.title}</h2>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all text-white hover:text-gray-800"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all text-white hover:text-gray-800"
          >
            <ChevronRight size={28} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {HERO_BANNERS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-6 md:w-8' : 'bg-white/50 hover:bg-white'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Side Banners */}
        <div className="hidden lg:flex flex-col gap-4 h-105">
          {SIDE_BANNERS.map((banner) => (
            <div key={banner.id} className="flex-1 rounded-2xl overflow-hidden shadow-md relative group cursor-pointer">
              <img src={banner.image} alt="Promotion" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;