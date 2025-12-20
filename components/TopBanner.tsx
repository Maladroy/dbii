import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const TopBanner: React.FC = () => {
  return (
    <div className="relative bg-white border-b border-gray-200 hidden md:block">
      <div className="container mx-auto px-4 h-10 flex items-center justify-between text-sm text-gray-700">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-blue-800 font-semibold">
            <span className="mr-2">🇻🇳</span> Hàng Việt Nam Chất Lượng Cao
          </div>
          <div className="flex items-center space-x-1">
            <MapPin size={14} className="text-red-600" />
            <span className="truncate max-w-lg">
              TRỤ SỞ CHÍNH: Số 123, Đường ABC, Quận XYZ, TP. Hà Nội
            </span>
          </div>
        </div>
        <div className="flex items-center">
            <div className="bg-red-600 text-white px-3 py-1 rounded-full flex items-center shadow-sm">
                <Phone size={14} className="mr-1" />
                <span className="font-bold">Hotline: 1900.123.456</span>
            </div>
        </div>
      </div>
      {/* Decorative gradient strip representing the flag/banner style in the image */}
      <div className="h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600"></div>
    </div>
  );
};

export default TopBanner;