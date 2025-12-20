import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section className="bg-blue-900 py-16 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Khách Hàng Nói Gì Về Dbii?</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Sự hài lòng của quý khách là động lực phát triển lớn nhất của chúng tôi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl relative">
              <Quote className="absolute top-4 right-6 text-blue-400 opacity-20" size={48} />
              
              <div className="flex items-center gap-1 mb-4 text-yellow-400">
                 {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} stroke="currentColor" />
                 ))}
              </div>
              
              <p className="text-gray-100 italic mb-6 leading-relaxed">
                "{review.comment}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                <img 
                    src={review.avatar} 
                    alt={review.user} 
                    className="w-12 h-12 rounded-full border-2 border-white/30 object-cover"
                />
                <div>
                    <h4 className="font-bold text-white">{review.user}</h4>
                    <span className="text-xs text-blue-200">Khách hàng thân thiết</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;