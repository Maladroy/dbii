import React, { useState } from 'react';
import { X, Phone, Check, ZoomIn, Share2, Copy } from 'lucide-react';
import { Product } from '../types';
import MarkdownRenderer from './Markdown';
import { obscurePrice } from '../utils';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onOpenContact: () => void;
}

function ProductDetailModal({ product, onClose, onOpenContact }: ProductDetailModalProps) {
  const [activeImage, setActiveImage] = useState(product.image);
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({
    transformOrigin: 'center center',
    transform: 'scale(1)'
  });
  const [isHovering, setIsHovering] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  // Combine main image and gallery for thumbnails
  const allImages = [product.image, ...(product.images || [])];
  // Remove duplicates just in case
  const uniqueImages = Array.from(new Set(allImages));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    // Normalize coordinates (0 to 1)
    let x = (e.clientX - left) / width;
    let y = (e.clientY - top) / height;

    // Add a buffer so user sees the edge of the image before the cursor hits the edge of the container.
    // This prevents accidental mouseleave and makes corner viewing easier.
    // 0.15 = 15% buffer zone at edges
    const buffer = 0.15;

    // Map [buffer, 1-buffer] input range to [0, 1] output range
    x = (x - buffer) / (1 - 2 * buffer);
    y = (y - buffer) / (1 - 2 * buffer);

    // Clamp between 0 and 100%
    const xPercent = Math.max(0, Math.min(1, x)) * 100;
    const yPercent = Math.max(0, Math.min(1, y)) * 100;

    setZoomStyle({
      transformOrigin: `${xPercent}% ${yPercent}%`,
      transform: 'scale(2)', // Zoom level
    });
  };

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => {
    setIsHovering(false);
    setZoomStyle({
      transformOrigin: 'center center',
      transform: 'scale(1)',
    });
  };

  const handleShare = async () => {
    // Construct URL with query param for deep linking
    const url = new URL(window.location.href);
    url.searchParams.set('product', product.id);
    const shareUrl = url.toString();

    const shareData = {
      title: product.name,
      text: `Xem ngay ${product.name} tại D-Bii Grocery!`,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled sharing
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(shareUrl);
        setShowShareTooltip(true);
        setTimeout(() => setShowShareTooltip(false), 2000);
      } catch (err) {
        console.error('Failed to copy', err);
      }
    }
  };

  // Calculate percentage correctly if data present
  const calcDiscount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const isCombo = product.category.toLowerCase().includes('combo');

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative flex flex-col md:flex-row animate-scale-in">

        {/* Close Button Only */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white hover:text-red-600 p-2 rounded-full transition-all shadow-md border border-gray-100"
        >
          <X size={24} className="text-gray-700" />
        </button>

        {/* Gallery Section with Zoom */}
        <div className="w-full md:w-1/2 bg-gray-50 p-6 flex flex-col justify-center relative">
          {/* Main Image Container */}
          <div
            className="aspect-square rounded-xl overflow-hidden bg-white shadow-sm mb-4 relative group cursor-crosshair"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-100 ease-out"
              style={zoomStyle}
            />

            {/* Zoom Hint */}
            {!isHovering && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
                <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                  <ZoomIn size={14} /> Phóng to
                </span>
              </div>
            )}

            {/* Discount Tag */}
            {(calcDiscount > 0 || isCombo) && (
              <div className="absolute top-4 left-4 z-10 bg-red-600 text-white font-bold px-3 py-1 rounded-md shadow-md pointer-events-none">
                {isCombo ? "??%" : `-${calcDiscount}%`}
              </div>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {uniqueImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${activeImage === img ? 'border-blue-600 opacity-100 ring-2 ring-blue-100' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
              >
                <img src={img} alt={`Thumbnail ${idx}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col">
          <div className="flex-1">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">{product.category}</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2 mb-4 leading-tight">
              {product.name}
            </h2>

            <div className="flex items-end gap-3 mb-6 border-b border-gray-100 pb-6">

              <span className="text-3xl font-bold text-red-600">
                {isCombo ? obscurePrice(product.price) : product.price.toLocaleString('vi-VN')}₫
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through mb-1 font-medium">
                  {product.originalPrice.toLocaleString('vi-VN')}₫
                </span>
              )}

            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Mô tả sản phẩm</h3>
                <div className="text-gray-600 leading-relaxed text-sm md:text-base">
                  <MarkdownRenderer content={product.description || "Đang cập nhật mô tả..."} />
                </div>
              </div>

              {product.details && (
                <div className="prose prose-sm prose-blue max-w-none text-gray-600 bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div dangerouslySetInnerHTML={{ __html: product.details }} />
                </div>
              )}
            </div>
          </div>

          <div className="sticky bottom-0 bg-white pt-4 border-t border-gray-100 mt-4 space-y-3 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.1)]">
            <button
              onClick={onOpenContact}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3.5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-blue-200 transition-all active:scale-[0.98]"
            >
              <Phone className="animate-pulse" />
              {isCombo ? "Liên hệ nhận báo giá" : "Liên hệ đặt hàng ngay"}
            </button>

            <button
              onClick={handleShare}
              className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 py-3 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all"
            >
              {showShareTooltip ? <Check size={18} className="text-green-600" /> : <Share2 size={18} />}
              {showShareTooltip ? "Đã sao chép liên kết" : "Chia sẻ sản phẩm này"}
            </button>

            <p className="text-center text-xs text-gray-400 mt-2 flex items-center justify-center gap-1 font-medium">
              <Check size={12} className="text-green-500" />
              Sản phẩm chính hãng 100%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
