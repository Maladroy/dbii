import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8 text-sm" id="contact">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
        
        {/* Brand Info */}
        <div>
          <h3 className="text-3xl font-extrabold text-white mb-6 italic tracking-tight">D-Bii</h3>
          <p className="mb-6 text-gray-400 leading-relaxed">
            Hộ kinh doanh D-Bii. Chuyên cung cấp các sản phẩm tẩy rửa công nghệ sinh học, an toàn cho sức khỏe và thân thiện với môi trường.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-blue-600 text-white p-2.5 rounded-lg hover:bg-blue-500 transition-colors">
                <Facebook size={20} />
            </a>
            <a href="#" className="bg-pink-600 text-white p-2.5 rounded-lg hover:bg-pink-500 transition-colors">
                <Instagram size={20} />
            </a>
            <a href="#" className="bg-red-600 text-white p-2.5 rounded-lg hover:bg-red-500 transition-colors">
                <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Contact Info - Expanded */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            <div>
               <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm border-b border-gray-800 pb-2 inline-block">Địa chỉ trụ sở</h4>
               <ul className="space-y-4">
                 <li className="flex items-start gap-3">
                   <div className="mt-1 bg-gray-800 p-1.5 rounded text-blue-400">
                      <MapPin size={18} />
                   </div>
                   <span className="leading-relaxed">Số nhà 13, ngách 2/1 tổ 5 Quang Lãm, Phường Phú Lãm, Quận Hà Đông, Thành phố Hà Nội, Việt Nam</span>
                 </li>
               </ul>
            </div>

            <div>
               <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm border-b border-gray-800 pb-2 inline-block">Liên Hệ Ngay</h4>
               <ul className="space-y-4">
                 <li className="flex items-center gap-3">
                   <div className="bg-gray-800 p-1.5 rounded text-green-400">
                      <Phone size={18} />
                   </div>
                   <div>
                       <div className="text-xs text-gray-500">Hotline tư vấn</div>
                       <span className="font-bold text-xl text-white">0964.186.768</span>
                   </div>
                 </li>
                 <li className="flex items-center gap-3">
                   <div className="bg-gray-800 p-1.5 rounded text-yellow-400">
                      <Mail size={18} />
                   </div>
                   <span>contact@dbii.vn</span>
                 </li>
               </ul>
            </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 mt-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2024 D-Bii. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
                <span>Thiết kế bởi D-Bii</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;