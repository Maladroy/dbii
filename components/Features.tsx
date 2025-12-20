import React from 'react';
import { CORE_VALUES } from '../constants';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface FeaturesProps {
    onOpenStory: () => void;
}

const Features: React.FC<FeaturesProps> = ({ onOpenStory }) => {
  return (
    <section id="intro" className="bg-white py-16 scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Intro/Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 animate-fade-in-up">
                <span className="inline-block py-1 px-3 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-wider uppercase">
                    Về Chúng Tôi
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Sứ mệnh mang <span className="text-blue-600">Sạch Thơm</span> đến mọi gia đình Việt
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                    D-Bii Grocery cam kết cung cấp các sản phẩm tẩy rửa và vệ sinh nhà cửa sử dụng công nghệ sinh học tiên tiến. Chúng tôi nói không với hóa chất độc hại, hướng tới một cuộc sống xanh, an toàn và bền vững cho cộng đồng.
                </p>
                <div className="pl-6 border-l-4 border-blue-600 italic text-gray-700 bg-gray-50 py-4 rounded-r-lg">
                    "Công nghệ Đức - Chất lượng Việt - An toàn tuyệt đối."
                </div>
                <button 
                    onClick={onOpenStory}
                    className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                    Tìm hiểu câu chuyện của D-Bii
                </button>
            </div>
            <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
                <img 
                    src="https://picsum.photos/600/400?random=88" 
                    alt="D-Bii Store Mission" 
                    className="relative rounded-2xl shadow-2xl w-full object-cover transform rotate-2 hover:rotate-0 transition-transform duration-700 border-4 border-white"
                />
            </div>
        </div>

        {/* Core Values */}
        <div>
            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900">Giá Trị Cốt Lõi</h3>
                <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {CORE_VALUES.map((value, idx) => {
                    // Dynamic icon rendering
                    const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[value.icon] || Icons.Star;
                    
                    return (
                        <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            
                            <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <IconComponent size={32} />
                            </div>
                            <h4 className="font-bold text-xl text-gray-900 mb-3">{value.title}</h4>
                            <p className="text-gray-500 leading-relaxed">{value.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;