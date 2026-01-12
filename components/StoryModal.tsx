import { X } from 'lucide-react';

interface StoryModalProps {
  onClose: () => void;
}

function StoryModal({ onClose }: StoryModalProps) {
  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
        >
          <X size={24} className="text-gray-800" />
        </button>

        <div className="h-48 bg-blue-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-blue-900 to-blue-600 opacity-90"></div>
          <img
            src="https://picsum.photos/800/400?random=88"
            alt="Story Banner"
            className="w-full h-full object-cover mix-blend-overlay opacity-50"
          />
          <div className="absolute bottom-6 left-6 text-white">
            <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">Câu chuyện thương hiệu</span>
            <h2 className="text-3xl font-extrabold">Hành Trình Của D-Bii Grocery</h2>
          </div>
        </div>

        <div className="p-8 space-y-6 text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Khởi nguồn từ sự an tâm</h3>
            <p>
              D-Bii được thành lập với một mong muốn giản dị nhưng mãnh liệt: mang đến sự an tâm tuyệt đối cho các bà nội trợ Việt Nam. Chúng tôi hiểu rằng, trong thế giới hiện đại, sức khỏe của gia đình là điều quý giá nhất. Vì vậy, D-Bii lựa chọn con đường khó khăn nhưng bền vững - phát triển các sản phẩm tẩy rửa và vệ sinh nhà cửa dựa trên <strong>Công nghệ Sinh học</strong>.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
            <h3 className="text-lg font-bold text-blue-800 mb-2">Sứ mệnh của chúng tôi</h3>
            <p className="italic">
              "Chúng tôi cam kết loại bỏ hóa chất độc hại khỏi không gian sống của bạn, thay thế bằng sức mạnh làm sạch từ thiên nhiên và enzyme sinh học."
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Chất lượng chuẩn Đức - Tinh hoa Việt</h3>
            <p>
              Các sản phẩm của D-Bii là sự kết hợp hoàn hảo giữa công nghệ sản xuất tiên tiến của Đức và sự thấu hiểu thói quen, nhu cầu của người tiêu dùng Việt Nam.
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-5">
              <li><strong>An toàn:</strong> Không gây kích ứng da, an toàn cho trẻ nhỏ.</li>
              <li><strong>Hiệu quả:</strong> Enzyme sinh học đánh bay vết bẩn cứng đầu mà không bào mòn bề mặt.</li>
              <li><strong>Bền vững:</strong> Thân thiện với môi trường, nước thải có thể dùng tưới cây.</li>
            </ul>
          </div>

          <div className="pt-6 border-t border-gray-200 text-center">
            <p className="font-medium text-gray-900">Cảm ơn bạn đã tin tưởng và đồng hành cùng D-Bii!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;