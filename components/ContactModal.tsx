import React from 'react';
import { X, Phone, MapPin, MessageCircle, Copy, Check } from 'lucide-react';

interface ContactModalProps {
    onClose: () => void;
}

function ContactModal({ onClose }: ContactModalProps) {
    const [copied, setCopied] = React.useState(false);
    const phoneNumber = "0352881369";
    const displayPhone = "0352.88.1369";

    const handleCopyPhone = () => {
        navigator.clipboard.writeText(phoneNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="fixed inset-0 z-70 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative animate-scale-in overflow-hidden">
                {/* Header */}
                <div className="bg-blue-800 p-6 text-white text-center relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>
                    <h3 className="text-2xl font-extrabold mb-2">Liên Hệ Tư Vấn</h3>
                    <p className="text-blue-100 text-sm">Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7</p>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">

                    {/* Hotline Section */}
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 text-center">
                        <p className="text-gray-500 text-sm font-medium mb-1 uppercase tracking-wider">Hotline / Zalo</p>
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <span className="text-3xl font-extrabold text-blue-700">{displayPhone}</span>
                            <button
                                onClick={handleCopyPhone}
                                className="text-gray-400 hover:text-blue-600 transition-colors"
                                title="Sao chép số điện thoại"
                            >
                                {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                            </button>
                        </div>
                        <div className="flex gap-3 justify-center">
                            <a
                                href={`tel:${phoneNumber}`}
                                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors shadow-lg shadow-blue-200"
                            >
                                <Phone size={16} /> Gọi Ngay
                            </a>
                            <a
                                href={`https://zalo.me/${phoneNumber}`}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 px-4 py-2 rounded-lg font-bold text-sm transition-colors"
                            >
                                <MessageCircle size={16} /> Chat Zalo
                            </a>
                        </div>
                    </div>

                    {/* Address Section */}
                    <div>
                        <div className="flex items-start gap-3">
                            <div className="mt-1 bg-gray-100 p-2 rounded-full text-red-500">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Địa chỉ trụ sở</h4>
                                <p className="text-gray-600 text-sm leading-relaxed mt-1">
                                    Số nhà 13, ngách 2/1 tổ 5 Quang Lãm, Phường Phú Lãm, Quận Hà Đông, Thành phố Hà Nội
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Note */}
                    <div className="bg-yellow-50 p-4 rounded-lg text-xs text-yellow-800 border border-yellow-100 italic text-center">
                        "D-Bii cam kết tư vấn tận tâm, cung cấp thông tin chính xác về sản phẩm công nghệ sinh học."
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;