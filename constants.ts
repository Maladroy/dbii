import { Product, Review, CoreValue, Banner } from './types';

export const HERO_BANNERS: Banner[] = [
  { id: '1', image: 'https://picsum.photos/1200/400?random=101', title: 'Công Nghệ Sinh Học - An Toàn Cho Cả Gia Đình' },
  { id: '2', image: 'https://picsum.photos/1200/400?random=102', title: 'D-Bii: Sạch Thơm - Tinh Khiết' },
  { id: '3', image: 'https://picsum.photos/1200/400?random=103', title: 'Giải Pháp Vệ Sinh Nhà Cửa Toàn Diện' },
];

export const SIDE_BANNERS: Banner[] = [
  { id: 's1', image: 'https://picsum.photos/400/195?random=104' },
  { id: 's2', image: 'https://picsum.photos/400/195?random=105' },
];

const DESC_TAY_BON_CAU = `
# TẨY BỒN CẦU D-Bii

Vệ sinh bồn cầu thường xuyên là một phần quan trọng trong việc duy trì sức khỏe và vệ sinh cá nhân. Điều này không chỉ giúp ngăn ngừa bệnh tật, mà còn giữ cho không gian phòng tắm luôn sạch sẽ và thoải mái. Bồn cầu, nếu không được vệ sinh đều đặn, có thể trở thành nguồn lây nhiễm vi khuẩn và gây ra mùi hôi khó chịu. Đặc biệt, việc vệ sinh thường xuyên là cực kỳ quan trọng khi có trẻ nhỏ trong gia đình để đảm bảo sự an toàn cho các con. Vì vậy, Tẩy bồn cầu thế hệ mới Dbii sẽ là giải pháp hoàn hảo cho gia đình bạn.

## 1. THÔNG TIN CHI TIẾT SẢN PHẨM
* **Tên sản phẩm:** Tẩy bồn cầu D-Bii (500ml)
* **Thương hiệu:** D-bii
* **Dung tích:** 500g
* **Xuất xứ:** Việt Nam
* **Thành phần:** Acid clohydric, hương liệu, Nonyl phenol ethoxylate.

## 2. CƠ CHẾ HOẠT ĐỘNG CỦA CÁC CHẤT TRONG THÀNH PHẦN
Để có thể trở thành một “trợ thủ đắc lực” của chị em nội trợ, Tẩy bồn cầu Dbii phải là sự kết hợp hoàn hảo giữa các thành phần quan trọng như:

* **Axit clohydric:** Hòa tan cặn khoáng, rỉ sét và các vết bẩn cứng đầu khác. Khi axit clohydric được thêm vào nước, nó sẽ phân tách thành các ion hydro (H+) và ion clorua (Cl-), phản ứng với các khoáng chất kiềm trong vết bẩn để phân hủy chúng thành các hợp chất hòa tan có thể dễ dàng rửa sạch.
* **Hương liệu:** Hương liệu có nguồn gốc từ các nguồn tự nhiên được thêm vào với nồng độ rất thấp.
* **Nonyl phenol ethoxylate:** Đây là chất hoạt động bề mặt được sử dụng phổ biến trong các sản phẩm tẩy rửa vì nó giúp giảm sức căng bề mặt của nước và cải thiện khả năng thấm ướt, dàn trải của sản phẩm. Trong chất tẩy rửa bồn cầu, nonyl phenol ethoxylate giúp phân tán đều các thành phần khác trên bề mặt bồn cầu và thấm sâu vào vết bẩn để làm sạch hiệu quả hơn.

## 3. ĐẶC ĐIỂM NỔI BẬT CỦA TẨY BỒN CẦU DBii 
Tẩy bồn cầu sinh học D-bii là phương pháp tẩy cầu tiên tiến, sử dụng các sản phẩm sinh học và không gây hại cho môi trường. Những lợi ích của phương pháp tẩy bồn cầu sinh học bao gồm:

* **Phiên bản nâng cấp hơn, tinh khiết hơn:** Đẳng cấp hơn với Cơ chế làm sạch bằng công nghệ đa enzyme tiên tiến giúp sạch khuẩn trắng sáng mà không sử dụng hóa chất độc hại, không có mùi Javen khó chịu, không làm tổn thương hệ hô hấp, cả không phải đi găng tay.
* **Chiết xuất thiên nhiên, hương thơm dịu nhẹ:** Hương thơm từ những tinh chất thiên nhiên vô cùng dễ chịu, khoan khoái.
* **Khử trùng hiệu quả đến 99,9% bằng công nghệ đa enzyme:** Sản phẩm chứa Enzyme sinh học lên men từ vỏ dứa, phân tách, loại bỏ và đánh bay các vết bẩn cáu cặn từ 5 đến 10 năm chỉ sau vài phút. Công nghệ đa enzyme thông minh đột phá giúp ngăn ngừa các phân tử mùi hôi, vết bẩn và vi khuẩn bám dính trên bề mặt, cho nhà tắm trắng sáng sạch khuẩn, ngăn mùi hôi suốt nhiều ngày liền.
* **Thiết kế tiện lợi, dễ dàng làm sạch mọi ngóc ngách:** Thiết kế dạng chai tiện lợi, đầu vòi thiết kế thông minh giúp phân tán nhanh chất lỏng đều trên tất cả các bề mặt và tiêu diệt 99,9% virus vi khuẩn gây bệnh.
* **Bảo vệ bề mặt thiết bị:** Bổ sung chất bảo vệ giúp bảo vệ bề mặt toilet, nhà vệ sinh, không sùi bọt ăn mòn bề mặt thiết bị.

## 4. HƯỚNG DẪN SỬ DỤNG
* Lắc đều trước khi sử dụng.
* **Vệ sinh bồn cầu:** Đặt đầu chai ngay mặt dưới trong khe bồn cầu và ấn chai trực tiếp lên khe. Khoảng 5-10 phút sau đó dùng bàn chải chuyên dùng chà bồn cầu và xả nước.
* **Vệ sinh các bề mặt khác:** Cho một lượng vừa đủ trực tiếp lên bề mặt cần vệ sinh, để yên trong vòng vài phút, sau đó xả nước để rửa sạch. 
* **Hướng dẫn bảo quản:** Nơi thoáng mát, tránh ánh nắng trực tiếp.

## 5. KHUYẾN CÁO
* Đối các vết rỉ trên bề mặt inox thì cho vào tối đa 1 phút rồi cọ sạch/lau sạch. Nếu để dung dịch lâu trên thiết bị, kiểu inox pha tạp sẽ dễ bị phản ứng đen (cháy inox).
* Đối với bề mặt tường gạch thì nên pha sau đó dùng chổi vệ sinh cọ sát, không đổ trực tiếp tạo thành vết loang.
`;

const DESC_TAY_DA_NANG = `
# TẨY ĐA NĂNG SIÊU TỐC

## 1. THÔNG TIN SẢN PHẨM
* **Loại sản phẩm:** TẨY ĐA NĂNG SIÊU TỐC D-bii
* **Thương hiệu:** D-bii
* **Dung tích:** 500ml
* **Xuất xứ:** Việt Nam
* **Thành phần:** Sodium benzene sulfonate, natri hydroxit, sinopol 1110, donwaol emulsatis, silicate, các hương khác

## 2. CƠ CHẾ HOẠT ĐỘNG CỦA CÁC THÀNH PHẦN
* **Sodium benzene sulfonate:** Là chất hoạt động bề mặt có thể giúp giảm sức căng bề mặt của nước và cải thiện khả năng thấm ướt của sản phẩm. Điều này có thể giúp sản phẩm thâm nhập và phá vỡ bụi bẩn và vết bẩn.
* **Natri hydroxit:** Là một hợp chất kiềm mạnh có thể giúp hòa tan và phân hủy các chất dầu hoặc nhờn. Nó cũng có thể giúp trung hòa các chất có tính axit có thể có trên bề mặt được làm sạch.
* **Natri lauryl ether sulfat (sinopol 1110):** Là một chất hoạt động bề mặt khác có thể giúp giảm sức căng bề mặt của nước và cải thiện khả năng làm sạch của sản phẩm.
* **Donwaol emulsatis:** Là một loại chất nhũ hóa khác có thể giúp trộn và phân tán các thành phần khác nhau trong sản phẩm.
* **Silicat:** Là một thành phần phổ biến trong các sản phẩm làm sạch có thể giúp ngăn ngừa sự tích tụ của các ion canxi và magiê trên bề mặt được làm sạch.

## 3. ĐẶC ĐIỂM NỔI BẬT CỦA TẨY ĐA NĂNG SIÊU TỐC D-bii
**Tẩy sạch siêu nhanh, siêu hiệu quả**
Tẩy đa năng siêu tốc sở hữu công thức enzyme sinh học và hoạt chất làm sạch tiên tiến, dễ dàng đánh bay mọi vết bẩn cứng đầu chỉ sau 1 lần lau. Từ vết cháy khét trên đáy nồi, rỉ sét trên kim loại, đến lớp dầu mỡ lâu ngày bám trên bề mặt bếp, xoong nồi hay thiết bị nhà bếp - tất cả đều được làm sạch nhanh chóng mà không cần chà mạnh tay.
Đặc biệt là Tẩy đa năng siêu tốc D-bii có thể làm sạch hiệu quả trên đa dạng chất liệu như kim loại, nhựa, men sứ và da tự nhiên mà không gây xước, không bào mòn hay hư hại bề mặt. Đây là giải pháp làm sạch tối ưu, vừa tiết kiệm thời gian vừa đảm bảo độ bền đẹp của vật dụng trong gia đình.

**Không còn mùi khó chịu - Hương thơm tự nhiên, dễ chịu**
Khác biệt hoàn toàn với các dòng tẩy rửa thông thường có mùi hoá chất nồng và gắt như Javen, Tẩy đa năng siêu tốc D-bii mang đến trải nghiệm dễ chịu với khứu giác, an toàn cho hệ hô hấp của cả gia đình, kể cả với trẻ nhỏ.

**Thành phần an toàn, thân thiện với môi trường**
Tẩy đa năng siêu tốc D-bii được tạo nên từ các thành phần gốc thực vật kết hợp với vi sinh vật, có khả năng phân huỷ sinh học tự nhiên. Điều này giúp sản phẩm sau khi sử dụng sẽ không để lại hoá chất tồn dư, gây hại cho môi trường, an toàn cho sức khoẻ người dùng.

**An toàn cho sức khoẻ gia đình**
Tẩy đa năng siêu tốc D-bii không chứa hoá chất độc hại, Tẩy đa năng siêu tốc D-Bii chính là lựa chọn hoàn hảo để bảo vệ sức khoẻ gia đình bạn.

## 4. HƯỚNG DẪN SỬ DỤNG
Cách sử dụng sản phẩm vô cùng đơn giản, bạn chỉ cần thực hiện những bước sau : 
(lưu ý: Trong quá trình sử dụng phải đeo gang tay)
* **Bước 1:** Mở nắp chai xịt.
* **Bước 2:** Phun lên trực tiếp bề mặt cần làm sạch.
* **Bước 3:** Đợi trong 10-15 phút (thời gian siêu tốc).
* **Bước 4:** Dùng khăn lau nhẹ, mọi vết bẩn sẽ biến mất tức thì.

## 5. KHUYẾN CÁO
* Đối các vết rỉ trên bề mặt inox thì cho vào tối đa 1 phút rồi cọ sạch/lau sạch. Nếu để dung dịch lâu trên thiết bị, kiểu inox pha tạp sẽ dễ bị phản ứng đen (cháy inox).
* Đối với bề mặt tường gạch thì nên pha sau đó dùng chổi vệ sinh cọ sát, không đổ trực tiếp tạo thành vết loang.
`;

const DESC_GIAT_XA = `
# Nước Giặt Xả Công Nghệ Sinh Học D-bii 

Giải pháp giặt giũ hiện đại giúp đánh bay vết bẩn cứng đầu, lưu hương thơm dài lâu và bảo vệ sợi vải. Công thức sinh học an toàn với làn da nhạy cảm, thân thiện với môi trường. Chỉ với một bước giặt xả, quần áo sạch thơm, mềm mại và bền màu hơn.

## 1. Thông Tin Sản Phẩm
* **Tên sản phẩm:** Nước giặt xả công nghệ sinh học D-bii
* **Dung tích:** 1kg
* **Thương Hiệu:** D-bii
* **Xuất xứ:** Việt Nam

## 2. Thành Phần Chính
* **Linear Alkylbenzene Sulphonic Acids (LABSA):** Chất hoạt động bề mặt chính trong nước giặt, có khả năng tẩy rửa mạnh. Thành phần này giúp loại bỏ dầu mỡ, bụi bẩn và các vết bám cứng đầu trên quần áo. Ngoài ra, LABSA còn giúp tạo bọt ổn định, hỗ trợ quá trình giặt sạch hiệu quả hơn.
* **Sodium Lauryl Ether Sulfate (SLES):** Giúp giảm độ căng bề mặt của nước, giúp dung dịch thấm sâu vào sợi vải và cuốn trôi bụi bẩn dễ dàng hơn. Thành phần này cũng có tác dụng làm mềm vải nhẹ nhàng và ít gây kích ứng hơn.
* **Sodium Hydroxide (NaOH):** Điều chỉnh độ pH, đảm bảo độ kiềm phù hợp để tẩy sạch vết bẩn mà không làm hư hại sợi vải. Hỗ trợ phân hủy các vết bẩn chứa dầu mỡ.
* **Sodium Sulfate:** Chất làm loãng, giúp kiểm soát độ nhớt của nước giặt, tránh tình trạng dung dịch quá đặc hoặc bị vón cục.
* **Natri Benzoate:** Chất bảo quản, giúp ngăn ngừa sự phát triển của vi khuẩn và nấm mốc.
* **Hydroxypropyl Cellulose:** Chất làm dày, giúp nước giặt có độ sệt phù hợp.
* **Hương thơm (Bồ Hòn, Nước Hoa…):** Mang lại mùi hương dễ chịu cho quần áo.
* **Color (Màu sắc):** Tạo màu cho nước giặt.

## 3. Công Dụng Nổi Bật
* **Công nghệ enzyme sinh học tiên tiến:** Giúp phá vỡ và loại bỏ vết bẩn cứng đầu như dầu mỡ, hôi hôi, bùn đất một cách nhanh chóng mà không cần ngâm lâu.
* **Giặt xả 2 trong 1:** Không chỉ làm sạch mà còn giúp sợi vải mềm mại, không bị thô ráp sau khi phơi. Quần áo sau khi giặt vẫn giữ được độ bông, thoải mái khi mặc.
* **Hương thơm thiên nhiên:** Quần áo luôn tỏa hương thơm dịu nhẹ, dễ chịu, mang lại cảm giác thư giãn và thoải mái suốt cả ngày dài.
* **An toàn:** Sản phẩm không chứa chất tẩy rửa mạnh, không gây kích ứng hay khô da. Công thức lành tính giúp nước sạch an toàn cho cả gia đình.
* **Bảo vệ môi trường:** Công thức sinh học giúp giảm thiểu tác động đến môi trường.

## 4. Hướng Dẫn Sử Dụng Chi Tiết
* **Giặt máy:** Dùng 50ml nước giặt xả cho 7-8kg quần áo. Đổ trực tiếp vào khay chứa nước giặt của máy.
* **Giặt tay:** Hòa tan 30ml nước giặt vào 4-5L nước, ngâm quần áo trong 5-10 phút rồi giặt và xả sạch.
* **Lưu ý:** Không cần dùng thêm nước xả vải.

## 5. Bảo Quản Chi Tiết
* Bảo quản ở khu vực khô ráo, thoáng mát. Tránh ánh nắng trực tiếp hoặc gần nguồn nhiệt cao.
* Sau mỗi lần sử dụng, hãy nắp chặt túi để ngăn không khí và bụi bẩn.
* Để xa tầm tay trẻ em.
`;

const DESC_TINH_DAU = `
# Hộp tỏa hương D-bii

## 🌿 Thông Tin Sản Phẩm 🌿
* **Tên sản phẩm:** Hộp tỏa hương D-bii. 
* **Thương hiệu:** D-bii. 
* **Dung tích và xuất xứ:** Việt Nam. 
* Sản phẩm này sử dụng chiết suất từ thiên nhiên, an toàn và lành tính, không gây khó chịu khi sử dụng.

## 🌿 Đặc Điểm Nổi Bật 🌿
* Các sản phẩm thông thường sử dụng chất hóa học và hương liệu tổng hợp, độc hại khi sử dụng lâu dài.
* Hộp tỏa hương D-bii an toàn, không gây khó chịu.

## 🌿 Công Dụng 🌿
* Xua đuổi muỗi và côn trùng.
* Mùi hương thơm mát giúp giảm stress và căng thẳng.
* Khử mùi hôi và ẩm mốc nhờ hoạt chất khử mùi thực vật.
* Mùi hương hoa quả dịu nhẹ, kích thích não bộ thư giãn, làm việc hiệu quả và ngủ ngon hơn.

## 🌿 Hướng Dẫn Sử Dụng 🌿
1. Xé phần bao bì dọc theo đường chấm nổi.
2. Tháo nắp chai bên ngoài.
3. Tháo nắp bên trong và điều chỉnh độ dài dây khuếch tán.
4. Đặt miếng bông khuếch tán và đóng nắp chai.

## 🌿 Phạm Vi Sử Dụng 🌿
Thiết kế tiện lợi, phù hợp với nhiều không gian như: Phòng tắm, Phòng ngủ, Phòng khách, Phòng làm việc, Kệ giày, Văn phòng, Ô tô...

## 🌿 Thời Gian Sử Dụng 🌿
Một hộp tỏa hương D-bii có thể sử dụng liên tục trong khoảng 1-2 tháng, tùy thuộc vào nhiệt độ và điều kiện không gian sử dụng.
`;

const DESC_COC_THA = `
# CỐC THẢ BỒN CẦU

Cốc thả bồn cầu - Công nghệ sinh học D-bii giúp tẩy rửa vết bẩn trên thành toilet làm sạch vi khuẩn, vệ sinh tự động tinh khiết và đậm đặc. Sản phẩm công nghệ Đức , công nghệ sinh học an toàn - bí quyết bảo vệ bồn cầu sạch sẽ, thơm tho.

## 1. THÔNG TIN CHI TIẾT SẢN PHẨM: 
* **Tên sản phẩm:** Cốc thả bồn cầu công nghệ sinh học D-bii 
* **Thương hiệu:** D-bii
* **Thành phần:** Water, sodium lauryl ether sulfat, soda, cetyl alcohol, acid blue, natri sunfat, tinh dầu (chanh xả, quế, bạc hà,.q..)
* nano bạc
* **Dung tích:** 180g
* **Xuất xứ:** Việt Nam 

## 2. CƠ CHẾ HOẠT ĐỘNG CỦA CÁC THÀNH PHẦN 
Để có thể trở thành một “trợ thủ đắc lực” của chị em phụ nữ, Cốc thả bồn cầu nhà Dbii phải là sự kết hợp hoàn hảo giữa các thành phần quan trọng như:
* **Nước:** Dung môi hòa tan các thành phần khác và đưa chúng lên bề mặt sàn.
* **Sodium lauryl ether sulfat:** Hoạt động bề mặt, tạo bọt để làm sạch và trôi các vi khuẩn/chất bẩn.
* **Cetyl alcohol:** Chất hoạt động bề mặt, giúp làm giảm sức căng bề mặt.
* **Natri sunfat khan:** Phân ly trong nước tạo thành ion natri và ion sunfat.
* **Nano bạc:** Kháng khuẩn mạnh mẽ nhờ ion bạc.

## 3. ĐẶC BIỆT NỔI BẬT CỦA CỐC THẢ BỒN CẦU CÔNG NGHỆ SINH HỌC D-bii
* **Chỉ bằng 1 lần xả giúp phòng vệ sinh trở lên sạch sẽ:** Trước khi dùng vi khuẩn sinh sôi, khó làm sạch. Sau khi dùng bồn cầu sáng bóng dễ chịu.
* **Vệ sinh tự động:** 1 chai dùng được 90 ngày tiện lợi và tiết kiệm. Công nghệ giải phóng bền vững khoa học, đậm đặc giúp phân tán chậm, hiệu quả và làm sạch lâu dài.
* **Công nghệ sinh học đa enzyme vượt trội:** Nhờ có công nghệ enzyme giúp bảo vệ bề mặt thiết bị luôn như mới và tăng cường hoạt động làm sạch bề mặt và các lớp sâu bên trong. 
* **Kỷ nguyên mới của phương pháp vệ sinh tự động:** Sử dụng được lâu không để lại cặn hay bám dính.
* **Chiết xuất thiên nhiên giúp an toàn:** Hương thơm dịu giúp nhà vệ sinh không gây bí tắc, mùi hôi khó chịu. 

## 4. HƯỚNG DẪN SỬ DỤNG 
Dưới đây là 3 bước hướng dẫn sử dụng cốc thả bồn cầu công nghệ sinh học Dbii:
* **Bước 1:** Bóc lớp bọc cốc. Điều chỉnh độ màu màu sắc của nước với núm xoay thông minh trên nắp chai.
* **Bước 2:** Mở nắp bồn chứa nước, xả hết nước trong bồn.
* **Bước 3:** Đợi lượng nước trong bồn rút hết, thả nguyên cả cốc vào góc bồn nước ở vị trí xa van xả. Sau khoảng 10 phút, nước trong bồn sẽ chuyển sang màu xanh nước biển.

**Lưu ý:** Thay cốc khác khi nước không còn màu.
`;

const DESC_XA_VAI = `
# Nước Xả Vải Công Nghệ Sinh Học D-bii

## ✨ Ưu Điểm Nổi Bật:
- Nước xả vải D-bii sử dụng công nghệ sinh học Đức.
- Thành phần tự nhiên và enzyme thay thế hóa chất độc hại.
- Làm mềm vải, diệt khuẩn nhờ công nghệ Nano Bạc.
- Lưu hương lâu dài, an toàn cho da nhạy cảm, trẻ em và phụ nữ mang thai.

## Thành Phần & Công Nghệ
* **Dịch lên men tự nhiên (vỏ dứa, bồ hòn), enzyme, tinh dầu, Nano bạc, chất làm mềm, chống nhăn.**
* **Enzyme:** Phân hủy vết bẩn hiệu quả.
* **Nano bạc:** Diệt khuẩn, kháng khuẩn mạnh mẽ, khử mùi hôi.
* **Công nghệ "khoá hương":** Giữ mùi thơm lâu.

## Công Dụng
* Làm mềm vải, chống nhăn, chống tĩnh điện.
* Diệt khuẩn, khử mùi hôi, ẩm mốc, mồ hôi.
* Lưu hương thơm lâu từ 3 đến 5 ngày.
* Hương thơm dịu dễ chịu như nước hoa.

## Bảo Vệ & An Toàn
* Bảo vệ sợi vải, giữ màu quần áo.
* Thân thiện môi trường: Nước thải có thể tái sử dụng tưới cây.
* Không hóa chất độc hại, an toàn cho da nhạy cảm.

## Hướng Dẫn Sử Dụng
**Đối với Giặt Tay:**
1. Pha loãng nước xả vải với nước.
2. Ngâm quần áo khoảng 10-20 phút.
3. Lấy ra, vắt khô và phơi.

**Đối với Giặt Máy:**
1. Đổ nước xả vải vào khay chứa nước máy giặt.
2. Máy giặt sẽ tự động thông báo khi hoàn thành.
3. Lấy quần áo ra và phơi.
`;

const DESC_NUOC_SUC_MIENG = `
# NƯỚC SÚC MIỆNG THẢO MỘC DBii PHYTO SMILE

**Giải pháp xanh cho hơi thở thơm mát và răng chắc khỏe từ gốc**

Sự kết hợp hoàn hảo từ các thảo mộc tự nhiên giúp bảo vệ khoang miệng toàn diện, an toàn và lành tính.

---

## 1. Thành phần đột phá & Công dụng

**Phyto Smile** chắt lọc tinh hoa từ **5 thành phần thảo mộc và hoạt chất quý giá**:

- **Lá Neem (Sầu đâu)**: *“Khắc tinh” của vi khuẩn*. Kháng khuẩn mạnh mẽ, giúp tiêu diệt ký sinh trùng, ngăn ngừa sâu răng, chữa viêm lợi và chống chảy máu chân răng hiệu quả.
- **Bạc hà**: Mang lại cảm giác sảng khoái tức thì. Chứa hoạt chất *Rosmarinic acid* giúp kháng viêm, khử mùi hôi miệng, đồng thời hỗ trợ sát khuẩn đường hô hấp trên.
- **Cam thảo**: Chứa hơn 300 hợp chất chống viêm và kháng virus. Đặc biệt, hoạt chất *Glycyrrhizin* giúp làm dịu niêm mạc, hỗ trợ lành các vết loét miệng (nhiệt miệng) và bảo vệ vòm họng.
- **Trà xanh**: Giàu chất chống oxy hóa (*EGCG*) và *Florua tự nhiên*. Giúp kìm hãm vi khuẩn gây mùi, ngăn ngừa sâu răng, bảo vệ nướu và tăng cường độ chắc khỏe cho hệ xương răng.
- **Xylitol**: Chất tạo ngọt tự nhiên không gây sâu răng. Giúp giảm vi khuẩn *Streptococcus mutans*, ngăn mảng bám và cân bằng độ pH trong khoang miệng.

---

## 2. Lợi ích nổi bật của DBii PHYTO SMILE

- **Làm sạch sâu**: Loại bỏ mảng bám và thức ăn thừa tại các kẽ răng mà bàn chải không chạm tới.
- **Kháng khuẩn & Chống viêm**: Hỗ trợ điều trị nhiệt miệng, viêm lợi, chảy máu chân răng và giảm sưng nướu.
- **Khử mùi vượt trội**: Loại bỏ mùi hôi miệng do thực phẩm hoặc vi khuẩn, duy trì hơi thở thơm mát tự nhiên suốt nhiều giờ.
- **An toàn & Lành tính**: Thành phần từ thảo mộc thiên nhiên, phù hợp cho người muốn chăm sóc răng miệng bền vững, không gây kích ứng niêm mạc.
- **Bảo vệ toàn diện**: Hỗ trợ ngăn ngừa các bệnh lý đường hô hấp trên nhờ đặc tính kháng khuẩn từ Bạc hà và Cam thảo.

---

## 3. Hướng dẫn sử dụng

- Lấy một lượng vừa đủ (**khoảng 10–15 ml**) súc kỹ trong khoang miệng từ **30–60 giây** rồi nhổ đi.
- Sử dụng **2–3 lần/ngày** sau khi đánh răng hoặc sau khi ăn.

---

**DBii PHYTO SMILE – Tinh túy thảo mộc, nụ cười tự tin!**
`;

export const PRODUCTS: Product[] = [
  // --- SINGLE PRODUCTS ---
  {
    id: '1',
    name: 'Tẩy bồn cầu D-Bii (500g)',
    price: 55000,
    originalPrice: 60000,
    image: '/assets/products/dbii_taytoilet.webp',
    images: ['/assets/products/dbii_taytoilet_2.webp', '/assets/products/dbii_taytoilet_3.webp', '/assets/products/dbii_taytoilet_4.webp', '/assets/products/dbii_taytoilet_5.webp'],
    category: 'Vệ sinh nhà cửa',
    description: DESC_TAY_BON_CAU,
    details: '',
    soldCount: 1250,
  },
  {
    id: '2',
    name: 'Siêu tẩy đa năng D-Bii (500g)',
    price: 95000,
    originalPrice: 150000,
    image: '/assets/products/dbii_taydanang.webp',
    images: ['/assets/products/dbii_taydanang_2.webp', '/assets/products/dbii_taydanang_3.webp', '/assets/products/dbii_taydanang_4.webp', '/assets/products/dbii_taydanang_5.webp'],
    category: 'Vệ sinh nhà cửa',
    description: DESC_TAY_DA_NANG,
    details: '',
    soldCount: 890,
  },
  {
    id: '3',
    name: 'Nước giặt xả công nghệ sinh học D-bii (1kg)',
    price: 50000,
    originalPrice: 60000,
    image: '/assets/products/dbii_giatxa.webp',
    images: ['/assets/products/dbii_giatxa_2.webp', '/assets/products/dbii_giatxa_3.webp', '/assets/products/dbii_giatxa_4.webp', '/assets/products/dbii_giatxa_5.webp'],
    category: 'Giặt giũ',
    description: DESC_GIAT_XA,
    details: '',
    soldCount: 3400,
  },
  {
    id: '4',
    name: 'Tinh dầu tỏa hương (270g)',
    price: 79000,
    originalPrice: 95000,
    image: '/assets/products/dbii_tinhdau.webp',
    images: ['/assets/products/dbii_tinhdau_2.webp', '/assets/products/dbii_tinhdau_3.webp', '/assets/products/dbii_tinhdau_4.webp', '/assets/products/dbii_tinhdau_5.webp', '/assets/products/dbii_tinhdau_6.webp', '/assets/products/dbii_tinhdau_7.webp', '/assets/products/dbii_tinhdau_8.webp', '/assets/products/dbii_tinhdau_9.webp'],
    category: 'Khử mùi',
    description: DESC_TINH_DAU,
    details: '',
    soldCount: 560,
  },
  {
    id: '5',
    name: 'Cốc thả bồn cầu D-bii (180g)',
    price: 70000,
    originalPrice: 85000,
    image: '/assets/products/dbii_thaboncau.webp',
    images: ['/assets/products/dbii_thaboncau_2.webp', '/assets/products/dbii_thaboncau_3.webp', '/assets/products/dbii_thaboncau_4.webp', '/assets/products/dbii_thaboncau_5.webp'],
    category: 'Vệ sinh nhà cửa',
    tag: 'Bán chạy',
    description: DESC_COC_THA,
    details: '',
    soldCount: 5200,
  },
  {
    id: '6',
    name: 'Xả vải công nghệ sinh học D-bii (1kg)',
    price: 60000,
    originalPrice: 65000,
    image: '/assets/products/dbii_xavai.webp',
    images: ['/assets/products/dbii_xavai_2.webp', '/assets/products/dbii_xavai_3.webp', '/assets/products/dbii_xavai_4.webp', '/assets/products/dbii_xavai_5.webp', '/assets/products/dbii_xavai_6.webp', '/assets/products/dbii_xavai_7.webp', '/assets/products/dbii_xavai_8.webp', '/assets/products/dbii_xavai_9.webp'],
    category: 'Giặt giũ',
    description: DESC_XA_VAI,
    details: '',
    soldCount: 1100,
  },
  {
    id: '7',
    name: 'Nước súc miệng thảo mộc D-bii Phyto Smile (500ml)',
    price: 165000,
    originalPrice: 195000,
    image: '/assets/products/dbii_nuocsucmieng.webp',
    images: ['/assets/products/dbii_nuocsucmieng_1.webp', '/assets/products/dbii_nuocsucmieng_2.webp', '/assets/products/dbii_nuocsucmieng_4.webp', '/assets/products/dbii_nuocsucmieng_5.webp'],
    category: 'Chăm sóc răng miệng',
    description: DESC_NUOC_SUC_MIENG,
    details: '',
    soldCount: 750,
  },

  // --- PUBLIC COMBOS (c1 - c4) ---
  {
    id: 'c1',
    name: 'Combo 3 chai tẩy Toilet',
    price: 95000,
    originalPrice: 180000,
    image: '/assets/products/Combo_C1.webp',
    images: ['/assets/products/dbii_taytoilet.webp', '/assets/products/dbii_taytoilet_2.webp', '/assets/products/dbii_taytoilet_3.webp', '/assets/products/dbii_taytoilet_4.webp', '/assets/products/dbii_taytoilet_5.webp'],
    category: 'Combo Tiết Kiệm',
    tag: 'Hot Deal',
    description: '# Combo 3 Chai Tẩy Bồn Cầu\n\nMua combo để tiết kiệm chi phí cho gia đình bạn!\n\n' + DESC_TAY_BON_CAU,
    soldCount: 320,
  },
  {
    id: 'c2',
    name: 'Combo 3 tinh dầu tỏa hương',
    price: 115000,
    originalPrice: 285000,
    image: '/assets/products/Combo_C2.webp',
    images: ['/assets/products/dbii_tinhdau.webp', '/assets/products/dbii_tinhdau_2.webp', '/assets/products/dbii_tinhdau_3.webp', '/assets/products/dbii_tinhdau_4.webp', '/assets/products/dbii_tinhdau_5.webp'],
    category: 'Combo Tiết Kiệm',
    description: '# Combo 3 Tinh Dầu Tỏa Hương\n\nHương thơm lan tỏa khắp ngôi nhà của bạn.\n\n' + DESC_TINH_DAU,
    soldCount: 150,
  },
  {
    id: 'c3',
    name: 'Combo 3 cốc thả bồn cầu',
    price: 95000,
    originalPrice: 255000,
    image: '/assets/products/Combo_C3.webp',
    images: ['/assets/products/dbii_thaboncau.webp', '/assets/products/dbii_thaboncau_2.webp', '/assets/products/dbii_thaboncau_3.webp', '/assets/products/dbii_thaboncau_4.webp', '/assets/products/dbii_thaboncau_5.webp'],
    category: 'Combo Tiết Kiệm',
    tag: 'Siêu rẻ',
    description: '# Combo 3 Cốc Thả Bồn Cầu\n\nGiải pháp vệ sinh tự động cho bồn cầu luôn sạch sẽ.\n\n' + DESC_COC_THA,
    soldCount: 880,
  },
  {
    id: 'c4',
    name: 'Combo 5 tẩy bồn cầu',
    price: 135000,
    originalPrice: 300000,
    image: '/assets/products/Combo_C4.webp',
    images: ['/assets/products/dbii_taytoilet.webp', '/assets/products/dbii_taytoilet_2.webp', '/assets/products/dbii_taytoilet_3.webp', '/assets/products/dbii_taytoilet_4.webp', '/assets/products/dbii_taytoilet_5.webp'],
    category: 'Combo Tiết Kiệm',
    description: '# Combo 5 Chai Tẩy Bồn Cầu\n\nMua nhiều giảm sâu! Tiết kiệm tối đa.\n\n' + DESC_TAY_BON_CAU,
    soldCount: 210,
  },

  // --- HIDDEN UP SALE ITEMS (no1 - no10) ---
  {
    id: 'no1',
    name: 'Nước giặt xả + toả hương + tẩy Toilet',
    price: 98000,
    originalPrice: 215000,
    image: '/assets/products/Combo_No01.webp',
    images: ['/assets/products/dbii_giatxa.webp', '/assets/products/dbii_tinhdau.webp', '/assets/products/dbii_taytoilet.webp'],
    category: 'Combo Tiết Kiệm',
    tag: 'Up Sale',
    isHidden: false,
    description: '# Combo: Nước giặt xả + Tỏa hương + Tẩy Toilet\n\nSự kết hợp hoàn hảo cho ngôi nhà của bạn.\n\n' + DESC_GIAT_XA + '\n\n---\n\n' + DESC_TINH_DAU + '\n\n---\n\n' + DESC_TAY_BON_CAU,
    soldCount: 50,
  },
  {
    id: 'no2',
    name: 'Nước giặt xả + tẩy Toilet + thả bồn cầu',
    price: 96000,
    originalPrice: 205000,
    image: '/assets/products/Combo_No02.webp',
    images: ['/assets/products/dbii_giatxa.webp', '/assets/products/dbii_taytoilet.webp', '/assets/products/dbii_thaboncau.webp'],
    category: 'Combo Tiết Kiệm',
    tag: 'Up Sale',
    isHidden: false,
    description: '# Combo: Nước giặt xả + Tẩy Toilet + Cốc thả bồn cầu\n\n' + DESC_GIAT_XA + '\n\n---\n\n' + DESC_TAY_BON_CAU + '\n\n---\n\n' + DESC_COC_THA,
    soldCount: 45,
  },
  {
    id: 'no3',
    name: 'Siêu tẩy đa năng + tẩy Toilet + toả hương',
    price: 120000,
    originalPrice: 305000,
    image: '/assets/products/Combo_No03.webp',
    images: ['/assets/products/dbii_taydanang.webp', '/assets/products/dbii_taytoilet.webp', '/assets/products/dbii_tinhdau.webp'],
    category: 'Combo Tiết Kiệm',
    tag: 'Up Sale',
    isHidden: false,
    description: '# Combo: Siêu tẩy đa năng + Tẩy Toilet + Tỏa hương\n\n' + DESC_TAY_DA_NANG + '\n\n---\n\n' + DESC_TAY_BON_CAU + '\n\n---\n\n' + DESC_TINH_DAU,
    soldCount: 60,
  },
  {
    id: 'no4',
    name: 'Siêu tẩy + nước giặt xả + tẩy Toilet',
    price: 130000,
    originalPrice: 270000,
    image: '/assets/products/Combo_No04.webp',
    images: ['/assets/products/dbii_taydanang.webp', '/assets/products/dbii_giatxa.webp', '/assets/products/dbii_taytoilet.webp'],
    category: 'Combo Tiết Kiệm',
    tag: 'Up Sale',
    isHidden: false,
    description: '# Combo: Siêu tẩy đa năng + Nước giặt xả + Tẩy Toilet\n\n' + DESC_TAY_DA_NANG + '\n\n---\n\n' + DESC_GIAT_XA + '\n\n---\n\n' + DESC_TAY_BON_CAU,
    soldCount: 30,
  },
  {
    id: 'no5',
    name: 'Siêu tẩy + tẩy Toilet + thả bồn cầu',
    price: 118000,
    originalPrice: 295000,
    image: '/assets/products/Combo_No05.webp',
    images: ['/assets/products/dbii_taydanang.webp', '/assets/products/dbii_taytoilet.webp', '/assets/products/dbii_thaboncau.webp'],
    category: 'Combo Tiết Kiệm',
    tag: 'Up Sale',
    isHidden: false,
    description: '# Combo: Siêu tẩy đa năng + Tẩy Toilet + Cốc thả bồn cầu\n\n' + DESC_TAY_DA_NANG + '\n\n---\n\n' + DESC_TAY_BON_CAU + '\n\n---\n\n' + DESC_COC_THA,
    soldCount: 42,
  },
  {
    id: 'no6',
    name: '4 túi nước giặt xả + 2 túi nước xả',
    price: 170000,
    originalPrice: 370000,
    image: '/assets/products/Combo_No06.webp',
    images: ['/assets/products/dbii_giatxa.webp', '/assets/products/dbii_xavai.webp'],
    category: 'Combo Tiết Kiệm',
    tag: 'Up Sale',
    isHidden: false,
    description: '# Combo 4 túi giặt xả + 2 túi nước xả\n\n' + DESC_GIAT_XA + '\n\n---\n\n' + DESC_XA_VAI,
    soldCount: 120,
  },
  {
    id: 'no7',
    name: '6 túi giặt 1kg (tổng 6kg)',
    price: 165000,
    originalPrice: 360000,
    image: '/assets/products/Combo_No07.webp',
    images: ['/assets/products/dbii_giatxa.webp', '/assets/products/dbii_giatxa_2.webp', '/assets/products/dbii_giatxa_3.webp', '/assets/products/dbii_giatxa_4.webp', '/assets/products/dbii_giatxa_5.webp'],
    category: 'Combo Tiết Kiệm',
    tag: 'Up Sale',
    isHidden: false,
    description: '# Combo 6 túi nước giặt xả (Tổng 6kg)\n\n' + DESC_GIAT_XA,
    soldCount: 200,
  },
  {
    id: 'no8',
    name: '6 túi giặt xả 1kg + 6 túi xả vải 1kg',
    price: 295000,
    originalPrice: 750000,
    image: '/assets/products/Combo_No08.webp',
    images: ['/assets/products/dbii_giatxa.webp', '/assets/products/dbii_xavai.webp'],
    category: 'Combo Tiết Kiệm',
    tag: 'Up Sale',
    isHidden: false,
    description: '# Combo 6 túi giặt xả + 6 túi xả vải\n\n' + DESC_GIAT_XA + '\n\n---\n\n' + DESC_XA_VAI,
    soldCount: 85,
  },
  {
    id: 'no9',
    name: '1 túi giặt xả 1kg + 1 túi xả vải 1kg',
    price: 85000,
    originalPrice: 125000,
    image: '/assets/products/Combo_No09.webp',
    images: ['/assets/products/dbii_giatxa.webp', '/assets/products/dbii_xavai.webp'],
    category: 'Combo Tiết Kiệm',
    tag: 'Up Sale',
    isHidden: false,
    description: '# Combo 1 túi giặt xả + 1 túi xả vải\n\n' + DESC_GIAT_XA + '\n\n---\n\n' + DESC_XA_VAI,
    soldCount: 600,
  },
  {
    id: 'no10',
    name: '1 thùng xả vải (tổng 6kg)',
    price: 175000,
    originalPrice: 390000,
    image: '/assets/products/Combo_No10.webp',
    images: ['/assets/products/dbii_xavai.webp', '/assets/products/dbii_xavai_2.webp', '/assets/products/dbii_xavai_3.webp', '/assets/products/dbii_xavai_4.webp', '/assets/products/dbii_xavai_5.webp'],
    category: 'Combo Tiết Kiệm',
    tag: 'Up Sale',
    isHidden: false,
    description: '# Combo 1 thùng nước xả vải (Tổng 6kg)\n\n' + DESC_XA_VAI,
    soldCount: 90,
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    user: 'Nguyễn Thu Hà',
    avatar: 'https://picsum.photos/100/100?random=220',
    rating: 5,
    comment: 'Cốc thả bồn cầu dùng rất thích, nước xanh và thơm mát, không còn mùi hôi khó chịu nữa.'
  },
  {
    id: '2',
    user: 'Trần Văn Minh',
    avatar: 'https://picsum.photos/100/100?random=221',
    rating: 5,
    comment: 'Tẩy đa năng siêu tốc làm sạch bếp rất nhanh, vết dầu mỡ lâu ngày cũng đi hết. Rất đáng tiền.'
  },
  {
    id: '3',
    user: 'Lê Thị Mai',
    avatar: 'https://picsum.photos/100/100?random=222',
    rating: 4,
    comment: 'Nước giặt xả thơm dịu, quần áo mềm mại, an toàn cho da tay. Sẽ ủng hộ shop dài dài.'
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    icon: 'FlaskConical',
    title: 'Công Nghệ Sinh Học',
    description: 'Sử dụng enzyme và nano bạc, an toàn tuyệt đối cho sức khỏe và môi trường.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Công Nghệ Đức',
    description: 'Quy trình sản xuất tiên tiến, đạt chuẩn chất lượng Châu Âu.'
  },
  {
    icon: 'Leaf',
    title: 'Thành Phần Thiên Nhiên',
    description: 'Chiết xuất từ thiên nhiên, hương thơm dịu nhẹ, không hóa chất độc hại.'
  },
  {
    icon: 'Sparkles',
    title: 'Làm Sạch Vượt Trội',
    description: 'Đánh bay vết bẩn cứng đầu nhanh chóng, bảo vệ bề mặt vật dụng.'
  }
];

export const CATEGORIES = [
  "Tất cả",
  "Combo Tiết Kiệm",
  "Vệ sinh nhà cửa",
  "Giặt giũ",
  "Khử mùi"
];
