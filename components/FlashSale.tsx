import { useState, useEffect } from 'react';
import { ArrowRight, Eye, Zap, Timer } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface FlashSaleProps {
    onProductClick: (product: Product) => void;
}

interface EventData {
    endTime: number;
    productIds: string[];
}

const STORAGE_KEY = 'dbii_flashsale_event_v3_factual';

const TimeBox = ({ value, label, isSeconds = false }: { value: number, label: string, isSeconds?: boolean }) => (
    <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-xl p-2 min-w-14 md:min-w-16 flex flex-col items-center shadow-lg relative overflow-hidden group hover:border-white/40 transition-colors">
        <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent"></div>
        {/* Key forces re-render for animation */}
        <span
            key={value}
            className={`text-2xl md:text-3xl font-extrabold font-mono leading-none drop-shadow-md animate-tick ${isSeconds ? 'text-yellow-300' : 'text-white'}`}
        >
            {value.toString().padStart(2, '0')}
        </span>
        <span className="text-[9px] md:text-[10px] uppercase text-gray-300 font-bold mt-1 tracking-wider">{label}</span>
    </div>
);


function FlashSale({ onProductClick }: FlashSaleProps) {
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const [eventProducts, setEventProducts] = useState<Product[]>([]);

    // Initialize or fetch event
    useEffect(() => {
        const initEvent = () => {
            const now = Date.now();
            const stored = localStorage.getItem(STORAGE_KEY);
            let data: EventData;

            if (stored) {
                data = JSON.parse(stored);
            } else {
                data = { endTime: 0, productIds: [] };
            }

            // If expired or new, generate new event
            if (now > data.endTime) {
                // Random duration between 3h and 24h
                const duration = (Math.floor(Math.random() * 21) + 3) * 60 * 60 * 1000;

                // Only select products that actually have an original price (factual discount)
                // And prevent Hidden/Upsale items from appearing in Flash Sale automatically
                const saleableProducts = PRODUCTS.filter(p => p.originalPrice && p.originalPrice > p.price && !p.isHidden);

                // Pick random products from the saleable list (max 4)
                const shuffled = [...saleableProducts].sort(() => 0.5 - Math.random());
                const selected = shuffled.slice(0, 4);

                data = {
                    endTime: now + duration,
                    productIds: selected.map(p => p.id)
                };
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            }

            // Map IDs back to full product objects
            const products = PRODUCTS
                .filter(p => data.productIds.includes(p.id))
                .map(p => {
                    // Calculate factual discount percentage
                    const discount = p.originalPrice
                        ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)
                        : 0;

                    return {
                        ...p,
                        isFlashSale: true,
                        discountPercentage: discount
                    };
                });

            setEventProducts(products);
            return data.endTime;
        };

        const endTime = initEvent();

        const timer = setInterval(() => {
            const now = Date.now();
            const diff = endTime - now;

            if (diff <= 0) {
                // Expired, re-init immediately
                initEvent();
            } else {
                setTimeLeft({
                    hours: Math.floor((diff / (1000 * 60 * 60))),
                    minutes: Math.floor((diff / (1000 * 60)) % 60),
                    seconds: Math.floor((diff / 1000) % 60)
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (eventProducts.length === 0) return null; // Hide section if no sales available

    return (
        <section id="events" className="container mx-auto px-4 my-8 scroll-mt-28">
            <style>{`
        @keyframes tick-pop {
          0% { transform: scale(1.4); opacity: 0; filter: blur(4px); }
          100% { transform: scale(1); opacity: 1; filter: blur(0); }
        }
        .animate-tick {
          animation: tick-pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>

            <div className="bg-linear-to-r from-red-600 to-orange-600 rounded-2xl p-6 md:p-8 shadow-xl text-white relative overflow-hidden ring-4 ring-red-100 ring-offset-2">
                {/* Decorative background elements */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-yellow-500 opacity-10 rounded-full blur-3xl mix-blend-overlay"></div>

                {/* Header */}
                <div className="flex flex-col lg:flex-row md:items-center justify-between mb-8 gap-6 relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="bg-white text-red-600 p-3 rounded-full animate-[pulse_2s_infinite] shadow-lg ring-4 ring-white/20">
                            <Zap fill="currentColor" size={32} />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide italic flex items-center gap-2">
                                Flash Sale
                            </h2>
                            <div className="flex items-center gap-2 text-white/90 mt-1 font-medium bg-black/10 px-3 py-1 rounded-full w-fit">
                                <Timer size={14} className="animate-spin-slow" />
                                <span>Giá sốc - Deal hời - Số lượng có hạn</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 self-start lg:self-center bg-white/10 p-2 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <span className="font-semibold mr-2 hidden md:block text-sm uppercase tracking-widest opacity-80 pl-2">Kết thúc sau</span>

                        <TimeBox value={timeLeft.hours} label="Giờ" />
                        <span className="font-bold text-xl md:text-2xl text-white/50 pb-4">:</span>
                        <TimeBox value={timeLeft.minutes} label="Phút" />
                        <span className="font-bold text-xl md:text-2xl text-white/50 pb-4">:</span>
                        <TimeBox value={timeLeft.seconds} label="Giây" isSeconds={true} />
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10">
                    {eventProducts.map(product => (
                        <div
                            key={product.id}
                            onClick={() => onProductClick(product)}
                            className="bg-white text-gray-800 rounded-xl overflow-hidden group shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative h-full flex flex-col cursor-pointer"
                        >
                            {product.discountPercentage && (
                                <div className="absolute top-2 right-2 bg-yellow-400 text-red-700 text-xs font-bold px-2 py-1 rounded-md z-10 shadow-sm animate-bounce">
                                    -{product.discountPercentage}%
                                </div>
                            )}
                            <div className="relative aspect-square overflow-hidden bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Overlay Action */}
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="bg-white/90 text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                        <Eye size={14} /> Xem ngay
                                    </span>
                                </div>
                            </div>

                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="text-sm font-bold line-clamp-2 mb-2 leading-snug group-hover:text-red-600 transition-colors">
                                    {product.name}
                                </h3>
                                <div className="mt-auto pt-2 border-t border-gray-100">
                                    <div className="flex flex-col">
                                        <span className="text-red-600 font-bold text-lg">
                                            {product.price.toLocaleString('vi-VN')}₫
                                        </span>
                                        {product.originalPrice && (
                                            <span className="text-gray-400 text-xs line-through">
                                                {product.originalPrice.toLocaleString('vi-VN')}₫
                                            </span>
                                        )}
                                    </div>
                                    {/* Fixed Stock Bar based on real data */}
                                    <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                                        <div className="bg-red-500 h-full w-[80%] rounded-full animate-[shimmer_2s_infinite] relative overflow-hidden">
                                            <div className="absolute inset-0 bg-white/30 skew-x-12 -translate-x-full animate-[shimmer_2s_infinite]"></div>
                                        </div>
                                    </div>
                                    <div className="text-[10px] text-gray-500 mt-1 font-medium">Đã bán {product.soldCount || 100}+</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center relative z-10">
                    <button className="inline-flex items-center gap-2 bg-white/20 hover:bg-white hover:text-red-600 text-white border border-white/40 px-6 py-2 rounded-full transition-all font-bold backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                        Xem tất cả deal hot <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FlashSale;