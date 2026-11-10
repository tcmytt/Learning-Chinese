# 0.md — Bản Thiết Kế Khung Chương Trình & Quy Chuẩn Từ Vựng Tiếng Trung Toàn Diện (Master Blueprint)

> **Vai trò của tài liệu này (`0.md`)**: Đây là bản thiết kế gốc (Master Specification & Curriculum Blueprint) định nghĩa toàn bộ cấu trúc, tiêu chuẩn ngôn ngữ 4 tầng, bố cục 8 phần bắt buộc và lộ trình **60 chủ đề từ vựng tiếng Trung thông dụng nhất** (chia thành 10 đại mảng). Khi tạo từng chủ đề chi tiết (`1.md`, `2.md`, ..., `60.md`), mô hình thực thi (như **3.8 Flash**) bắt buộc phải tuân thủ nghiêm ngặt toàn bộ quy chuẩn trong tài liệu này.

---

## PHẦN I. QUY CHUẨN BẮT BUỘC DÀNH CHO AI THỰC THI (`1.md` → `60.md`)

Khi nhận lệnh tạo bất kỳ file chủ đề nào (ví dụ: `1.md`, `15.md`), AI thực thi phải tuân thủ tuyệt đối **4 nguyên tắc cốt lõi** dưới đây:

### 1. Quy tắc "4 Tầng Ngôn Ngữ" (4-Layer Linguistic Standard)
Mọi từ vựng, cụm từ cố định, thành ngữ, câu giao tiếp và đoạn văn mẫu xuất hiện trong bài **ĐỀU BẮT BUỘC** phải hiển thị đầy đủ 4 thành phần:
1. **Chữ Hán (汉字)**: Chữ Hán giản thể chuẩn (có thể mở ngoặc chữ phồn thể nếu chữ gốc mang ý nghĩa tượng hình/chiết tự đáng chú ý).
2. **Phiên âm Pinyin (拼音)**: Đánh dấu thanh điệu chuẩn xác trên nguyên âm; ghi chú rõ quy tắc biến điệu (như biến điệu thanh 3, biến điệu của `一` và `不`) ngay bên cạnh nếu có.
3. **Âm Hán Việt (汉越音)**: Viết hoa chữ cái đầu hoặc in hoa toàn bộ âm Hán Việt chuẩn xác cho từng chữ Hán để người học hiểu rõ gốc từ và liên hệ với từ Hán Việt trong tiếng Việt.
4. **Nghĩa Tiếng Việt & Từ loại (越文释义)**: Giải thích nghĩa sát ngữ cảnh, ghi rõ từ loại (`Danh từ - 名`, `Động từ - 动`, `Tính từ - 形`, `Lượng từ - 量`, `Phó từ - 副`) và sắc thái sử dụng (trang trọng, khẩu ngữ, văn viết).

### 2. Quy tắc Chiết tự, Bộ thủ & Lượng từ (Radicals & Measure Words)
* **Danh từ luôn đi kèm Lượng từ**: Bất kỳ danh từ nào đưa vào bảng từ vựng đều phải ghi rõ lượng từ đặc trưng đi kèm (ví dụ: con chim → `一只鸟 / yī zhī niǎo / nhất chích điểu`, con ngựa → `一匹马 / yī pǐ mǎ / nhất thất mã`, bức tranh phong cảnh → `一幅风景画 / yī fú fēngjǐnghuà / nhất phúc phong cảnh họa`).
* **Giải mã Bộ thủ & Chiết tự**: Trong mỗi chủ đề, phải chỉ ra các bộ thủ chủ đạo (như bộ Khuyển `犭`, bộ Điểu `鸟`, bộ Thảo `艹`, bộ Thủy `氵`, bộ Tâm `忄`) và giải thích cấu tạo chữ để người học nhìn chữ đoán nghĩa, nhớ lâu không quên.

### 3. Quy tắc Đoạn văn Thực chiến & Bóc tách Đa tầng
Không bao giờ chỉ liệt kê từ rời rạc. Mỗi chủ đề phải có các câu ứng dụng và **2 đoạn văn hoàn chỉnh** (1 đoạn văn miêu tả sinh động + 1 đoạn văn kể chuyện/tình huống thực tế) sử dụng tối thiểu **15–20 từ vựng** trong bài. Mỗi đoạn văn phải được trình bày ở cả 2 dạng:
* **Dạng 1 (Đọc tổng thể)**: Đoạn văn chữ Hán liền mạch để luyện mắt nhìn mặt chữ.
* **Dạng 2 (Bóc tách từng câu 4 tầng)**: Tách từng câu trong đoạn văn ra đủ 4 dòng: `Chữ Hán` → `Pinyin` → `Âm Hán Việt từng chữ` → `Dịch nghĩa Tiếng Việt + Phân tích từ vựng/ngữ pháp trọng tâm`.

### 4. Quy tắc Định dạng File (`.md`)
* Mỗi chủ đề là một file Markdown độc lập, đặt tên theo số thứ tự: `1.md`, `2.md`, ..., `60.md`.
* Sử dụng bảng Markdown chuẩn (`| Cột |`) cho danh sách từ vựng và bộ thủ; sử dụng `>` blockquote cho các đoạn văn mẫu và hộp kiến thức văn hóa.
* Tuyệt đối không cắt bớt, không dùng dấu `...` hay viết tắt kiểu *"tương tự như trên"* khi sinh nội dung cho từng chủ đề.

---

## PHẦN II. CẤU TRÚC 8 MỤC BẮT BUỘC BÊN TRONG MỖI FILE CHỦ ĐỀ (`N.md`)

Mỗi file `N.md` do AI 3.8 Flash tạo ra phải đi theo đúng khung sườn **8 mục** sau đây:

### Mục 1: Tổng quan Chủ đề & Hệ thống Bộ thủ Cốt lõi
* **Giới thiệu chủ đề**: Tầm quan trọng và tần suất xuất hiện của chủ đề trong giao tiếp đời sống, phim ảnh và kỳ thi HSK.
* **Bản đồ phân nhánh từ vựng (Sub-categories)**: Chia chủ đề lớn thành 3–4 nhóm nhỏ logic để não bộ dễ gom nhóm (chunking).
* **Bảng Bộ thủ chủ đạo của chủ đề (3–5 bộ thủ)**: Giải thích bộ thủ nào thường xuất hiện trong chủ đề này (Tên bộ thủ, Chữ Hán, Pinyin, Hán Việt, Ý nghĩa gốc và 3 chữ ví dụ).

### Mục 2: Bảng Từ vựng Trọng tâm Phân tầng (35 – 45 từ/chủ đề)
Chia từ vựng thành 3 bảng nhỏ theo nhóm con hoặc theo cấp độ từ dễ đến khó (Sơ cấp → Trung cấp → Mở rộng thực tế). Mỗi bảng phải có đúng **7 cột**:

| STT | Chữ Hán | Pinyin | Âm Hán Việt | Từ loại & Lượng từ | Nghĩa Tiếng Việt | Chiết tự / Mẹo nhớ & Từ ghép mở rộng |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 01 | 鸟 | niǎo | Điểu | Danh từ (Lượng từ: 只 - zhī / 群 - qún) | Con chim | Chữ tượng hình vẽ dáng con chim có mắt (dấu chấm) và lông đuôi. Từ ghép: 小鸟 (xiǎoniǎo - tiểu điểu: chú chim nhỏ), 鸟巢 (niǎocháo - điểu sào: tổ chim). |

### Mục 3: Cụm từ Cố định (Collocations), Cặp Động - Tân & Thành ngữ (8 – 12 cụm)
* **Cụm Động từ + Tân ngữ / Tính từ + Danh từ hay đi chung**: Giúp người học nói tự nhiên như người bản xứ, tránh ghép từ kiểu "word-by-word" từ tiếng Việt sang.
* **3–4 Thành ngữ (成语 - Chéngyǔ) hoặc Tục ngữ gắn với chủ đề**: Trình bày đủ Chữ Hán, Pinyin, Âm Hán Việt, Nghĩa đen, Nghĩa bóng và 1 câu ví dụ hoàn chỉnh (đủ 4 tầng).

### Mục 4: 10 Mẫu câu Giao tiếp & Miêu tả Cốt lõi
10 câu tiêu biểu nhất từ ngắn đến dài dùng để hỏi đáp, miêu tả, nhận xét về chủ đề. Mỗi câu trình bày theo mẫu:
* **Câu số X**:
  * **Chữ Hán**: ...
  * **Pinyin**: ...
  * **Hán Việt**: ...
  * **Nghĩa Việt**: ...
  * **Điểm ngữ pháp / Cách dùng**: ...

### Mục 5: Đoạn văn Mẫu Ứng dụng & Bóc tách Chi tiết (Trọng tâm)
Bao gồm **2 đoạn văn** (mỗi đoạn dài 5–7 câu, lồng ghép đậm đặc từ vựng vừa học):
* **Đoạn văn 5.1 — Đoạn văn Miêu tả Sâu (Descriptive Passage)**: Tập trung miêu tả chi tiết một đối tượng/khung cảnh tiêu biểu của chủ đề (ví dụ: miêu tả hình dáng, màu lông, tiếng hót và cảnh bay lượn của loài chim vào buổi sớm; hoặc miêu tả khung cảnh sân trường giờ ra chơi).
* **Đoạn văn 5.2 — Đoạn văn Tình huống / Kể chuyện Đời thực (Narrative / Situational Passage)**: Đặt từ vựng vào một trải nghiệm cá nhân, câu chuyện ngắn hoặc đoạn hội thoại thực tế.

*(Mỗi đoạn văn đều phải có: **1. Bản chữ Hán liền mạch** → **2. Bản bóc tách từng câu đủ 4 tầng: Hán - Pinyin - Hán Việt - Dịch nghĩa & Ghi chú từ mới**).*

### Mục 6: Phân biệt Từ Dễ Nhầm Lẫn & Lỗi Sai Người Việt Hay Mắc
So sánh chi tiết 2–3 cặp từ gần nghĩa hoặc dễ dùng sai trong chủ đề (kèm ví dụ câu Đúng `[✓]` và câu Sai `[✗]` đủ 4 tầng ngôn ngữ).

### Mục 7: Góc Văn hóa, Điển tích, Biểu tượng & Tiếng lóng Hiện đại (Cultural & Fun Facts)
* Giải thích chiều sâu văn hóa Trung Hoa liên quan đến chủ đề (quan niệm dân gian, biểu tượng may mắn/kiêng kỵ, sự khác biệt văn hóa Việt – Trung).
* 2–3 từ lóng mạng xã hội (Internet slang) hoặc cách nói trẻ trung của giới trẻ Trung Quốc hiện nay gắn với chủ đề đó.

### Mục 8: Bài tập Phản xạ Nhanh & Đáp án Chi tiết (Active Recall Mini-Quiz)
* **Bài tập 1**: Chọn lượng từ / từ vựng đúng điền vào chỗ trống (5 câu).
* **Bài tập 2**: Thử thách dịch 3 câu thực tế từ Tiếng Việt sang Tiếng Trung.
* **Đáp án & Giải thích chi tiết** (đặt ở cuối file, có đầy đủ 4 tầng: Hán - Pinyin - Hán Việt - Giải thích).

---

## PHẦN III. MẪU CHUẨN MINH HỌA ("BẢN MẪU VÀNG" CHO AI 3.8 FLASH)

Dưới đây là một trích đoạn mẫu thu nhỏ (lấy ví dụ từ chủ đề **Động vật — Loài Chim**) để AI thực thi nhìn thấy chính xác độ sâu và cách trình bày 4 tầng cần đạt được:

> **Ví dụ Bóc tách Đoạn văn Miêu tả (Trích Mục 5.1 - Chủ đề Động vật):**
>
> **【Bản đọc liền mạch】**
> 清晨的树林里非常热闹。一只羽毛鲜艳的小鸟站在树枝上，用清脆的声音欢快地唱歌。当温暖的阳光照亮大地时，它便张开翅膀，自由自在地飞向蔚蓝的天空。
>
> **【Bản bóc tách chi tiết 4 tầng từng câu】**
>
> **Câu 1:**
> * **Chữ Hán**: 清晨的树林里非常热闹。
> * **Pinyin**: Qīngchén de shùlín lǐ fēicháng rènào.
> * **Hán Việt**: Thanh thần đích thụ lâm lý phi thường nhiệt náo.
> * **Nghĩa Việt**: Trong khu rừng lúc sáng sớm vô cùng nhộn nhịp.
> * **Từ vựng cốt lõi**: `清晨` (qīngchén - thanh thần: sáng sớm), `树林` (shùlín - thụ lâm: khu rừng), `热闹` (rènào - nhiệt náo: nhộn nhịp, náo nhiệt).
>
> **Câu 2:**
> * **Chữ Hán**: 一只羽毛鲜艳的小鸟站在树枝上，用清脆的声音欢快地唱歌。
> * **Pinyin**: Yī zhī yǔmáo xiānyàn de xiǎoniǎo zhàn zài shùzhī shàng, yòng qīngcuì de shēngyīn huānkuài de chànggē.
> * **Hán Việt**: Nhất chích vũ mao tiên diễm đích tiểu điểu trạm tại thụ chi thượng, dụng thanh thúy đích thanh âm hoan khoái địa xướng ca.
> * **Nghĩa Việt**: Một chú chim nhỏ có bộ lông rực rỡ đậu trên cành cây, cất tiếng hát vui tươi bằng giọng hót trong trẻo.
> * **Từ vựng cốt lõi**: `只` (zhī - chích: lượng từ cho chim/thú nhỏ), `羽毛` (yǔmáo - vũ mao: lông vũ), `鲜艳` (xiānyàn - tiên diễm: tươi tắn, rực rỡ), `树枝` (shùzhī - thụ chi: cành cây), `清脆` (qīngcuì - thanh thúy: trong trẻo, lanh lảnh).
>
> **Câu 3:**
> * **Chữ Hán**: 当温暖的阳光照亮大地时，它便张开翅膀，自由自在地飞向蔚蓝的天空。
> * **Pinyin**: Dāng wēnnuǎn de yángguāng zhàoliàng dàdì shí, tā biàn zhāngkāi chìbǎng, zìyóu zìzài de fēi xiàng wèilán de tiānkōng.
> * **Hán Việt**: Đương ôn noãn đích dương quang chiếu lượng đại địa thời, tha tiện trương khai sí bàng, tự do tự tại địa phi hướng úy lam đích thiên không.
> * **Nghĩa Việt**: Khi ánh nắng ấm áp chiếu sáng mặt đất, nó liền sải đôi cánh, tự do tự tại bay về phía bầu trời xanh thẳm.
> * **Từ vựng cốt lõi**: `张开` (zhāngkāi - trương khai: dang rộng, sải ra), `翅膀` (chìbǎng - sí bàng: đôi cánh), `自由自在` (zìyóu zìzài - tự do tự tại: tự do thoải mái), `蔚蓝` (wèilán - úy lam: xanh thẳm).

---

## PHẦN IV. DANH MỤC TỔNG THỂ 60 CHỦ ĐỀ TỪ VỰNG TIẾNG TRUNG (`1.md` → `60.md`)

Hệ thống được chia làm **10 Đại Mảng (Macro Domains)** với **60 Chủ đề (60 Files)** bao phủ toàn diện từ cuộc sống hàng ngày, thiên nhiên, học tập, công việc đến văn hóa và xã hội hiện đại.

---

### ĐẠI MẢNG 1: CON NGƯỜI, GIA ĐÌNH & CẢM XÚC CÁ NHÂN (Files `1.md` – `6.md`)

| Mã File | Tên Chủ đề (Việt / Hán / Pinyin / Hán Việt) | Các Nhánh Từ vựng Trọng tâm & Lượng từ | Định hướng Đoạn văn Mẫu & Kiến thức Thú vị |
| :--- | :--- | :--- | :--- |
| **`1.md`** | **Cơ thể người & Cử chỉ hoạt động**<br>人体与动作 / Réntǐ yǔ dòngzuò / Nhân thể dữ động tác | Các bộ phận đầu-mặt, ngũ quan, tứ chi, nội tạng cơ bản; động từ chỉ hoạt động của mắt, tay, chân; bộ Nhục (`月/肉`), bộ Thủ (`扌`), bộ Túc (`足`). | **Đoạn văn**: Miêu tả các hoạt động phối hợp của cơ thể khi tập thể dục buổi sáng và biểu cảm khuôn mặt.<br>**Thú vị**: Các thành ngữ dùng bộ phận cơ thể để chỉ tâm trạng (như `手舞足蹈` - thủ vũ túc đạo). |
| **`2.md`** | **Ngoại hình, Khí chất & Diện mạo**<br>外貌与气质 / Wàimào yǔ qìzhì / Ngoại mạo dữ khí chất | Chiều cao, vóc dáng, kiểu tóc, làn da, đường nét khuôn mặt, thần thái; tính từ khen ngợi nam/nữ ở từng độ tuổi. | **Đoạn văn**: Miêu tả chân dung một người bạn thân hoặc một nhân vật có khí chất thanh lịch.<br>**Thú vị**: Tiêu chuẩn thẩm mỹ cổ đại và hiện đại của người Trung Quốc (`浓眉大眼`, `白富美`, `高富帅`). |
| **`3.md`** | **Tính cách, Phẩm chất & Thái độ sống**<br>性格与品质 / Xìnggé yǔ pǐnzhì / Tính cách dữ phẩm chất | Hướng nội/hướng ngoại, ưu điểm (kiên trì, khiêm tốn, hài hước), nhược điểm (nóng nảy, bướng bỉnh, bất cẩn); bộ Tâm (`心/忄`). | **Đoạn văn**: Tự giới thiệu bản thân trong buổi phỏng vấn hoặc miêu tả hai người bạn có tính cách trái ngược.<br>**Thú vị**: Từ lóng chỉ tính cách thời hiện đại (`社恐` - sợ giao tiếp xã hội, `社牛` - thánh giao tiếp, `佛系` - hệ Phật). |
| **`4.md`** | **Cảm xúc, Tâm trạng & Trạng thái tinh thần**<br>情绪与心理 / Qíngxù yǔ xīnlǐ / Tình tự dữ tâm lý | Hỉ - Nộ - Ái - Ố (vui mừng, giận dữ, buồn bã, lo âu, xúc động, tự hào, cô đơn); các phó từ chỉ mức độ cảm xúc. | **Đoạn văn**: Kể lại diễn biến tâm trạng từ hồi hộp, lo lắng đến vỡ òa hạnh phúc khi nhận kết quả thi/công việc.<br>**Thú vị**: Thất tình lục dục trong văn hóa Á Đông và cách nói giảm nói tránh khi buồn. |
| **`5.md`** | **Gia đình, Họ hàng & Xưng hô Truyền thống**<br>家庭与亲属 / Jiātíng yǔ qīnshǔ / Gia đình dữ thân thuộc | Thành viên gia đình hạt nhân, phân biệt rõ họ Nội (`堂/爷爷/奶奶`) và họ Ngoại (`表/外公/外婆`), thứ bậc anh chị em; bộ Nữ (`女`). | **Đoạn văn**: Giới thiệu đại gia đình sum họp trong bữa cơm đoàn viên cuối tuần.<br>**Thú vị**: Giải mã hệ thống xưng hô họ hàng siêu chi tiết của Trung Quốc (tại sao chú, bác, cậu, dì, cô đều có từ riêng biệt). |
| **`6.md`** | **Tình yêu, Hôn nhân & Các giai đoạn cuộc đời**<br>恋爱、婚姻与人生阶段 / Liàn'ài, hūnyīn yǔ rénshēng jiēduàn / Luyến ái, hôn nhân dữ nhân sinh giai đoạn | Tuổi thơ, trưởng thành, hẹn hò, tỏ tình, kết hôn, sinh con, tuổi già; các trạng thái độc thân, đính hôn, kỷ niệm. | **Đoạn văn**: Kể câu chuyện tình yêu từ lúc quen nhau ở giảng đường đến khi nắm tay bước vào lễ đường.<br>**Thú vị**: Văn hóa xem mắt (`相亲`), sính lễ (`彩礼`) và mật mã số tình yêu (`520`, `1314`). |

---

### ĐẠI MẢNG 2: ĐỜI SỐNG HẰNG NGÀY, NHÀ CỬA & SINH HOẠT (Files `7.md` – `12.md`)

| Mã File | Tên Chủ đề (Việt / Hán / Pinyin / Hán Việt) | Các Nhánh Từ vựng Trọng tâm & Lượng từ | Định hướng Đoạn văn Mẫu & Kiến thức Thú vị |
| :--- | :--- | :--- | :--- |
| **`7.md`** | **Nhà cửa, Kiến trúc & Không gian sống**<br>房屋与居住空间 / Fángwū yǔ jūzhù kōngjiān / Phòng ốc dữ cư trú không gian | Các phòng trong nhà (phòng khách, phòng ngủ, ban công, bếp), loại hình nhà ở (chung cư, biệt thự, tứ hợp viện), thuê/mua nhà; lượng từ `套`, `间`, `栋`. | **Đoạn văn**: Miêu tả căn hộ mơ ước tràn ngập ánh nắng và cách bố trí từng góc nhỏ trong nhà.<br>**Thú vị**: Kiến trúc Tứ hợp viện (`四合院`) Bắc Kinh và quan niệm hướng nhà (`坐北朝南` - tọa bắc triều nam). |
| **`8.md`** | **Nội thất, Đồ gia dụng & Thiết bị trong nhà**<br>家具与家用电器 / Jiājù yǔ jiāyòng diànqì / Gia cụ dữ gia dụng điện khí | Bàn ghế, tủ quần áo, giường nệm, rèm cửa, điều hòa, tủ lạnh, máy giặt, đồ dùng nhà bếp; lượng từ `张`, `把`, `台`, `件`. | **Đoạn văn**: Kể lại một ngày cuối tuần chuyển vào nhà mới và đi sắm sửa, sắp xếp đồ nội thất.<br>**Thú vị**: Sự khác biệt giữa từ vựng đồ gia dụng miền Bắc và miền Nam Trung Quốc. |
| **`9.md`** | **Lịch trình Sinh hoạt & Thói quen Hằng ngày**<br>日常作息与习惯 / Rìcháng zuòxī yǔ xíguàn / Nhật thường tác tức dữ tập quán | Thức dậy, vệ sinh cá nhân, ăn sáng, đi làm/đi học, nghỉ trưa, dọn dẹp nhà cửa, thức khuya (`熬夜`), đi ngủ. | **Đoạn văn**: Thuật lại trọn vẹn một ngày bận rộn nhưng規 luật từ 6 giờ sáng đến 11 giờ đêm.<br>**Thú vị**: Khái niệm dưỡng sinh (`养生`) của người Trung Quốc: uống nước ấm, ngâm chân buổi tối. |
| **`10.md`** | **Trang phục, Thời trang & Phụ kiện**<br>服装与时尚配饰 / Fúzhuāng yǔ shíshàng pèishì / Phục trang dữ thời thượng phối sức | Quần áo bốn mùa, chất liệu vải (cotton, lụa, len), màu sắc, họa tiết, giày dép, mũ, kính, trang sức; động từ mặc/đội/đeo (`穿`, `戴`, `系`). | **Đoạn văn**: Miêu tả cách phối đồ đi dự tiệc hoặc đi dạo phố mùa thu.<br>**Thú vị**: Cách phân biệt chuẩn xác nhóm động từ "mặc/đeo" (`穿` vs `戴` vs `佩` vs `披`) và trào lưu Hán phục (`汉服`). |
| **`11.md`** | **Chăm sóc Cá nhân, Làm đẹp & Thẩm mỹ**<br>个人护理与美容 / Gèrén hùlǐ yǔ měiróng / Cá nhân hộ lý dữ mỹ dung | Chăm sóc da (`护肤`), trang điểm (`化妆`), mỹ phẩm, cắt/uốn/nhuộm tóc, nước hoa, giữ dáng. | **Đoạn văn**: Quy trình chăm sóc da buổi tối và buổi đi làm tóc thay đổi diện mạo ở salon.<br>**Thú vị**: Các thuật ngữ làm đẹp hot trên Xiaohongshu (Tiểu Hồng Thư - `小红书`) như `早C晚A`, `素颜` (mặt mộc). |
| **`12.md`** | **Vật nuôi, Thú cưng & Chăm sóc Thú cưng**<br>宠物与照料 / Chǒngwù yǔ zhàoliào / Sủng vật dữ chiếu liệu | Chó, mèo, cá cảnh, hamster; thức ăn thú cưng, dắt chó đi dạo (`遛狗`), tiêm phòng, tính cách và hành động đáng yêu của thú cưng. | **Đoạn văn**: Miêu tả chú mèo/chú chó cưng ở nhà, từ bộ lông mềm mại đến thói quen đón chủ về mỗi chiều.<br>**Thú vị**: Văn hóa "con sen" (`铲屎官` - sạn sử quan) và "hoàng thượng" (`主子`), thuật ngữ `撸猫` (vuốt mèo). |

---

### ĐẠI MẢNG 3: ẨM THỰC, NẤU NƯỚNG & MUA SẮM TIÊU DÙNG (Files `13.md` – `18.md`)

| Mã File | Tên Chủ đề (Việt / Hán / Pinyin / Hán Việt) | Các Nhánh Từ vựng Trọng tâm & Lượng từ | Định hướng Đoạn văn Mẫu & Kiến thức Thú vị |
| :--- | :--- | :--- | :--- |
| **`13.md`** | **Nguyên liệu Thực phẩm: Rau củ, Trái cây & Thịt cá**<br>食材：蔬果与肉类 / Shícái: Shūguǒ yǔ ròulèi / Thực tài: Sơ quả dữ nhục loại | Rau xanh, củ quả, trái cây nhiệt đới & ôn đới, các loại thịt, hải sản, ngũ cốc; bộ Thảo (`艹`), lượng từ `颗`, `根`, `串`, `斤`. | **Đoạn văn**: Buổi sáng đi chợ truyền thống chọn mua rau củ tươi ngon và trái cây chín mọng.<br>**Thú vị**: Đơn vị cân đo `斤` (cân Trung Quốc = 500g) và `两` (lạng = 50g) khi đi chợ ở Trung Quốc. |
| **`14.md`** | **Gia vị, Phương pháp Chế biến & Nấu nướng**<br>调味品与烹饪方法 / Tiáowèipǐn yǔ pēngrèn fāngfǎ / Điều vị phẩm dữ phanh nhẫm phương pháp | Ngũ vị (chua, cay, mặn, ngọt, đắng), gia vị (xì dầu, giấm, hoa tiêu, ớt), động từ nấu nướng (`炒`, `煮`, `蒸`, `炸`, `烤`, `炖`, `红烧`); bộ Hỏa (`火/灬`). | **Đoạn văn**: Hướng dẫn chi tiết từng bước nấu một món ăn thơm lừng trong gian bếp gia đình.<br>**Thú vị**: Bát đại thái hệ (8 trường phái ẩm thực lớn của Trung Quốc) và khẩu vị "Nam ngọt, Bắc mặn, Đông cay, Tây chua". |
| **`15.md`** | **Món ăn Trung Hoa Nổi tiếng & Ẩm thực Đường phố**<br>中华名菜与街头小吃 / Zhōnghuá míngcài yǔ jiētóu xiǎochī / Trung Hoa danh thái dữ nhai đầu tiểu thực | Lẩu (`火锅`), vịt quay Bắc Kinh, tiểu long bao, đậu phụ Tứ Xuyên, mì kéo sợi, kẹo hồ lô, trà sữa, đồ nướng đêm (`烧烤`). | **Đoạn văn**: Trải nghiệm dạo phố đêm ẩm thực, thưởng thức xiên nướng cay tê và lẩu bốc khói nghi ngút.<br>**Thú vị**: Nguồn gốc tên gọi các món ăn thú vị (như `蚂蚁上树` - Kiến leo cây, `夫妻肺片` - Phổi vợ chồng). |
| **`16.md`** | **Nhà hàng, Gọi món & Văn hóa Bàn tiệc**<br>餐厅点餐与餐桌文化 / Cāntīng diǎncān yǔ cānzhuō wénhuà / Xan sảnh điểm xan dữ xan trác văn hóa | Đặt bàn, xem thực đơn, gọi món, yêu cầu độ cay/đá/đường, phục vụ, thanh toán (`买单`), đóng gói mang về (`打包`). | **Đoạn văn**: Tình huống đi ăn nhà hàng cùng bạn bè, từ lúc gọi món đến lúc nâng ly chúc mừng.<br>**Thú vị**: Nghi thức gõ ngón tay cảm ơn khi người khác rót trà (`叩手礼`) và văn hóa giành trả tiền (`抢着买单`). |
| **`17.md`** | **Trà đạo, Cà phê & Đồ uống Giải khát**<br>茶艺、咖啡与饮品 / Cháyì, kāfēi yǔ yǐnpǐn / Trà nghệ, cà phê dữ ẩm phẩm | Các loại trà (trà xanh, trà ô long, trà phổ nhĩ), dụng cụ pha trà, các loại cà phê, trà sữa trân châu (tùy chọn lượng đường/đá: `少冰`, `半糖`). | **Đoạn văn**: Buổi chiều yên tĩnh thưởng trà ngắm mưa hoặc gọi một ly trà sữa theo đúng sở thích cá nhân.<br>**Thú vị**: Lịch sử lục đại trà loại Trung Hoa và bảng thuật ngữ order trà sữa thực chiến tại Trung Quốc. |
| **`18.md`** | **Mua sắm, Siêu thị & Thương mại Điện tử**<br>购物、超市与电子商务 / Gòuwù, chāoshì yǔ diànzǐ shāngwù / Cấu vật, siêu thị dữ điện tử thương vụ | Giá cả, mặc cả, giảm giá (`打折`), khuyến mãi, giỏ hàng, đặt hàng online (`网购`), chuyển phát nhanh (`快递`), đổi trả hàng, thanh toán điện tử. | **Đoạn văn**: Niềm vui săn sale trực tuyến và cảm giác bóc kiện hàng chuyển phát nhanh (`拆快递`).<br>**Thú vị**: Lễ hội mua sắm `双十一` (Double 11 - 11/11), văn hóa livestream bán hàng (`直播带货`) và cụm từ `剁手` (chặt tay vì mua sắm quá đà). |

---

### ĐẠI MẢNG 4: THIÊN NHIÊN, ĐỘNG THỰC VẬT & PHONG CẢNH (Files `19.md` – `24.md`)

| Mã File | Tên Chủ đề (Việt / Hán / Pinyin / Hán Việt) | Các Nhánh Từ vựng Trọng tâm & Lượng từ | Định hướng Đoạn văn Mẫu & Kiến thức Thú vị |
| :--- | :--- | :--- | :--- |
| **`19.md`** | **Thế giới Động vật: Thú rừng, Gia súc & Côn trùng**<br>动物世界：走兽与昆虫 / Dòngwù shìjiè: Zǒushòu yǔ kūnchóng / Động vật thế giới: Tẩu thú dữ côn trùng | Động vật hoang dã (hổ, sư tử, gấu trúc, voi, khỉ), gia súc (trâu, bò, ngựa, cừu), côn trùng (ong, bướm, đom đóm); bộ Khuyển (`犭`), bộ Trùng (`虫`), lượng từ `只`, `头`, `匹`, `群`. | **Đoạn văn**: Miêu tả chuyến tham quan khu bảo tồn thiên nhiên, ngắm gấu trúc ăn trúc và đàn hươu chạy trên thảo nguyên.<br>**Thú vị**: Ý nghĩa biểu tượng của 12 con giáp (`十二生肖`) và quốc bảo Gấu trúc (`大熊猫`). |
| **`20.md`** | **Loài Chim, Sinh vật Biển & Bò sát**<br>飞鸟、海洋生物与爬行动物 / Fēiniǎo, hǎiyáng shēngwù yǔ páxíng dòngwù / Phi điểu, hải dương sinh vật dữ bà hành động vật | Các loài chim (đại bàng, chim én, thiên nga, chim sẻ, công), bộ phận của chim (mỏ, cánh, lông vũ); cá heo, cá voi, rùa, san hô; bộ Điểu (`鸟`), bộ Ngư (`鱼`), lượng từ `只`, `条`, `尾`. | **Đoạn văn**: Miêu tả chi tiết một chú chim nhỏ hót vang trên cành cây buổi sớm và cảnh đàn hải âu bay lượn trên mặt biển.<br>**Thú vị**: Hình tượng chim Hạc (`仙鹤` - trường thọ), chim Én (`燕子` - báo tin mùa xuân) và cá Chép vượt Vũ Môn (`鲤鱼跳龙门`). |
| **`21.md`** | **Thực vật, Hoa cỏ & Cây cối**<br>植物、花草与树木 / Zhíwù, huācǎo yǔ shùmù / Thực vật, hoa thảo dữ thụ mục | Các bộ phận của cây (rễ, thân, cành, lá, nụ, cánh hoa, quả), các loài hoa nổi tiếng (hoa mai, mẫu đơn, sen, đào, cúc), cây cổ thụ, tre trúc; bộ Mộc (`木`), bộ Thảo (`艹`), lượng từ `棵`, `朵`, `束`. | **Đoạn văn**: Miêu tả khu vườn mùa xuân trăm hoa đua nở, hương hoa thoang thoảng trong gió.<br>**Thú vị**: "Tứ quân tử" trong hội họa và thi ca Trung Hoa: Mai, Lan, Trúc, Cúc (`梅兰竹菊`) cùng Quốc hoa Mẫu đơn (`牡丹`). |
| **`22.md`** | **Phong cảnh Thiên nhiên: Sơn thủy & Địa hình**<br>自然风景与山川地貌 / Zìrán fēngjǐng yǔ shānchuān dìmào / Tự nhiên phong cảnh dữ sơn xuyên địa mạo | Núi non, thác nước, sông hồ, biển cả, thung lũng, thảo nguyên, sa mạc, rừng rậm; các tính từ miêu tả cảnh đẹp hùng vĩ, thơ mộng (`壮观`, `秀丽`, `迷人`); bộ Sơn (`山`), bộ Thủy (`氵`). | **Đoạn văn**: Miêu tả bức tranh phong cảnh non nước hữu tình lúc bình minh và hoàng hôn buông xuống mặt hồ.<br>**Thú vị**: Câu nói nổi tiếng *"Quế Lâm sơn thủy giáp thiên hạ"* (`桂林山水甲天下`) và nghệ thuật thưởng ngoạn sơn thủy. |
| **`23.md`** | **Thời tiết, Khí hậu & Bốn mùa trong năm**<br>天气、气候与四季 / Tiānqì, qìhòu yǔ sìjì / Thiên khí, khí hậu dữ tứ quý | Nắng, mưa, gió, tuyết, sương mù, cầu vồng, sấm chớp; đặc trưng Xuân ấm - Hạ nóng - Thu mát - Đông lạnh; bộ Vũ (`雨`). | **Đoạn văn**: Miêu tả sự chuyển giao kỳ diệu của thiên nhiên qua bốn mùa Xuân - Hạ - Thu - Đông.<br>**Thú vị**: Hệ thống 24 Tiết khí (`二十四节气`) cổ truyền của phương Đông (Lập xuân, Thanh minh, Hạ chí, Đông chí...). |
| **`24.md`** | **Vũ trụ, Bầu trời & Bảo vệ Môi trường**<br>宇宙星空与环境保护 / Yǔzhòu xīngkōng yǔ huánjìng bǎohù / Vũ trụ tinh không dữ hoàn cảnh bảo hộ | Mặt trời, mặt trăng, ngôi sao, ngân hà; sinh thái, ô nhiễm, biến đổi khí hậu, phân loại rác (`垃圾分类`), năng lượng xanh, bảo vệ thiên nhiên; bộ Nhật (`日`), bộ Nguyệt (`月`). | **Đoạn văn**: Ngước nhìn bầu trời đầy sao nơi ngoại ô và suy ngẫm về lối sống xanh bảo vệ hành tinh.<br>**Thú vị**: Truyền thuyết Hằng Nga奔月 (bay lên cung trăng) được đặt tên cho tàu thăm dò mặt trăng `嫦娥` của Trung Quốc. |

---

### ĐẠI MẢNG 5: TRƯỜNG HỌC, GIÁO DỤC & HỌC THUẬT (Files `25.md` – `30.md`)

| Mã File | Tên Chủ đề (Việt / Hán / Pinyin / Hán Việt) | Các Nhánh Từ vựng Trọng tâm & Lượng từ | Định hướng Đoạn văn Mẫu & Kiến thức Thú vị |
| :--- | :--- | :--- | :--- |
| **`25.md`** | **Trường học, Cơ sở vật chất & Đời sống Học đường**<br>学校与校园生活 / Xuéxiào yǔ xiàoyuán shēnghuó / Học hiệu dữ hiệu viên sinh hoạt | Cấp học (mầm non đến đại học), khuôn viên trường, giảng đường, thư viện, ký túc xá, nhà ăn, sân vận động, thầy cô, bạn cùng lớp/cùng phòng (`同桌`, `室友`). | **Đoạn văn**: Miêu tả khung cảnh trường đại học rợp bóng cây và kỷ niệm đáng nhớ thời thanh xuân trên ghế nhà trường.<br>**Thú vị**: Văn hóa "bạn cùng bàn" (`同桌`) trong phim thanh xuân vườn trường Trung Quốc. |
| **`26.md`** | **Các Môn học, Chuyên ngành & Đồ dùng Học tập**<br>学科专业与学习用品 / Xuékē zhuānyè yǔ xuéxí yòngpǐn / Học khoa chuyên nghiệp dữ học tập dụng phẩm | Toán, Lý, Hóa, Văn, Sử, Địa, Ngoại ngữ; các ngành đại học (Kinh tế, CNTT, Y khoa, Ngôn ngữ); sách vở, bút, cặp sách, máy tính; lượng từ `本`, `支`, `门` (môn học). | **Đoạn văn**: Giới thiệu môn học yêu thích nhất và góc bàn học ngăn nắp của bản thân.<br>**Thú vị**: Tứ bảo văn phòng cổ truyền (`文房四宝`: Bút, Mặc, Giấy, Nghiên - `笔墨纸砚`). |
| **`27.md`** | **Phương pháp Học tập, Thi cử & Điểm số**<br>学习方法、考试与成绩 / Xuéxí fāngfǎ, kǎoshì yǔ chéngjì / Học tập phương pháp, khảo thí dữ thành tích | Chuẩn bị bài (`预习`), nghe giảng (`听讲`), ghi chép (`记笔记`), ôn tập (`复习`), thuộc lòng (`背诵`), thi cử, điểm số, học bổng, tốt nghiệp. | **Đoạn văn**: Chia sẻ bí quyết tự học ngoại ngữ hiệu quả và quá trình ôn luyện vượt qua kỳ thi quan trọng.<br>**Thú vị**: Kỳ thi Đại học khốc liệt nhất Trung Quốc (`高考` - Cao khảo) và các từ `学霸` (học bá), `学渣` (học tra). |
| **`28.md`** | **Ngôn ngữ học & Chinh phục Tiếng Trung**<br>语言学习与汉语进阶 / Yǔyán xuéxí yǔ Hànyǔ jìnjiē / Ngữ ngôn học tập dữ Hán ngữ tiến giai | Phát âm, thanh điệu, nét chữ Hán (`笔画`), bộ thủ, ngữ pháp, nghe - nói - đọc - viết - dịch, khẩu ngữ, tiếng phổ thông (`普通话`). | **Đoạn văn**: Kể về hành trình bắt đầu học chữ Hán, niềm vui khi hiểu được chiết tự và giao tiếp được với người bản xứ.<br>**Thú vị**: Quy tắc viết chữ Hán "Ngang trước sổ sau, phẩy trước mác sau" (`先横后竖，先撇后捺`). |
| **`29.md`** | **Đọc sách, Văn học & Tri thức**<br>阅读、文学与知识 / Yuèdú, wénxué yǔ zhīshi / Duyệt độc, văn học dữ tri thức | Tiểu thuyết, thơ ca, tản văn, truyện tranh; tác giả, độc giả, chương/hồi, cốt truyện, triết lý, suy ngẫm, hiệu sách. | **Đoạn văn**: Miêu tả thói quen đọc sách mỗi tối bên tách trà và cảm nhận sâu sắc về một cuốn sách hay.<br>**Thú vị**: Tứ đại danh tác Trung Hoa (`四大名著`: Tây Du Ký, Tam Quốc Diễn Nghĩa, Thủy Hử, Hồng Lâu Mộng). |
| **`30.md`** | **Khoa học Tự nhiên, Toán học & Tư duy Logic**<br>自然科学、数学与逻辑 / Zìrán kēxué, shùxué yǔ luójí / Tự nhiên khoa học, toán học dữ lô-gíc | Con số, phép tính (cộng, trừ, nhân, chia), tỷ lệ phần trăm, hình học, thí nghiệm, phát minh, nguyên lý, phân tích, chứng minh. | **Đoạn văn**: Giải thích cách ứng dụng tư duy logic và con số vào việc giải quyết các vấn đề thực tiễn hằng ngày.<br>**Thú vị**: Tứ đại phát minh của Trung Quốc cổ đại (`四大发明`: Nghề làm giấy, Thuốc súng, La bàn, Kỹ thuật in). |

---

### ĐẠI MẢNG 6: GIAO THÔNG, ĐÔ THỊ & DU LỊCH KHÁM PHÁ (Files `31.md` – `36.md`)

| Mã File | Tên Chủ đề (Việt / Hán / Pinyin / Hán Việt) | Các Nhánh Từ vựng Trọng tâm & Lượng từ | Định hướng Đoạn văn Mẫu & Kiến thức Thú vị |
| :--- | :--- | :--- | :--- |
| **`31.md`** | **Phương tiện Giao thông & Di chuyển Đô thị**<br>交通工具与出行 / Jiāotōng gōngjù yǔ chūxíng / Giao thông công cụ dữ xuất hành | Tàu điện ngầm (`地铁`), tàu cao tốc (`高铁`), xe buýt, taxi, xe đạp công cộng (`共享单车`), ô tô, đèn giao thông, tắc đường (`堵车`); động từ `坐`, `骑`, `开`. | **Đoạn văn**: Cảnh đi làm giờ cao điểm bằng tàu điện ngầm và trải nghiệm êm ái trên chuyến tàu cao tốc.<br>**Thú vị**: Mạng lưới đường sắt cao tốc (`高铁`) hiện đại bậc nhất thế giới của Trung Quốc. |
| **`32.md`** | **Phương hướng, Vị trí & Hỏi đường**<br>方向、位置与问路 / Fāngxiàng, wèizhì yǔ wènlù / Phương hướng, vị trí dữ vấn lộ | Đông - Tây - Nam - Bắc, trái - phải - trước - sau - đối diện - bên cạnh; ngã tư (`十字路口`), rẽ trái/phải (`往左拐`), đi thẳng (`一直往前走`), khoảng cách. | **Đoạn văn**: Đoạn hội thoại và miêu tả tình huống chỉ đường chi tiết cho một du khách nước ngoài trên phố.<br>**Thú vị**: Tại sao người Bắc Kinh thích chỉ đường bằng "Đông - Tây - Nam - Bắc" thay vì "Trái - Phải". |
| **`33.md`** | **Không gian Đô thị, Công trình & Địa điểm Công cộng**<br>城市建筑与公共场所 / Chéngshì jiànzhù yǔ gōnggòng chǎngsuǒ / Thành thị kiến trúc dữ công cộng trường sở | Quảng trường, công viên, bảo tàng, ngân hàng, bưu điện, bệnh viện, trung tâm thương mại, tòa nhà chọc trời, cầu vượt, phố cổ. | **Đoạn văn**: Miêu tả vẻ đẹp giao thoa giữa những tòa nhà chọc trời rực rỡ ánh đèn và khu phố cổ bình yên.<br>**Thú vị**: Sự phân cấp đô thị Trung Quốc: Thành phố tuyến 1 (`一线城市`: Bắc - Thượng - Quảng - Thâm). |
| **`34.md`** | **Du lịch, Lập lịch trình & Danh lam Thắng cảnh**<br>旅游、行程与名胜古迹 / Lǚyóu, xíngchéng yǔ míngshèng gǔjì / Lữ du, hành trình dữ danh thắng cổ tích | Lên kế hoạch, đặt vé, hướng dẫn viên, di sản văn hóa, chụp ảnh check-in (`打卡`), đặc sản địa phương, quà lưu niệm. | **Đoạn văn**: Kể lại chuyến du lịch tự túc khám phá một cố đô cổ kính và những danh thắng lịch sử.<br>**Thú vị**: Trào lưu "Du lịch kiểu lính đặc chủng" (`特种兵式旅游` - đi cực nhiều điểm trong thời gian ngắn) của giới trẻ. |
| **`35.md`** | **Khách sạn, Lưu trú & Dịch vụ Nghỉ dưỡng**<br>酒店住宿与度假服务 / Jiǔdiàn zhùsù yǔ dùjià fúwù / Tửu điếm trú túc dữ độ giả phục vụ | Đặt phòng (`预订`), nhận phòng (`办理入住`), trả phòng (`退房`), phòng đơn/đôi, lễ tân (`前台`), tiền cọc (`押金`), homestay (`民宿`). | **Đoạn văn**: Trải nghiệm nghỉ dưỡng tại một homestay yên bình trên sườn núi, mở cửa sổ ra là thấy biển mây.<br>**Thú vị**: Văn hóa homestay (`民宿`) ở các cổ trấn như Lệ Giang, Đại Lý, Ô Trấn. |
| **`36.md`** | **Sân bay, Hàng không & Xuất nhập cảnh**<br>机场航空与出入境 / Jīchǎng hángkōng yǔ chūrùjìng / Cơ trường hàng không dữ xuất nhập cảnh | Hộ chiếu (`护照`), thị thực (`签证`), vé máy bay, thẻ lên tàu (`登机牌`), hành lý ký gửi (`托运行李`), kiểm tra an ninh (`安检`), hải quan, quá cảnh (`转机`). | **Đoạn văn**: Toàn bộ hành trình từ lúc làm thủ tục tại sân bay quốc tế đến khi máy bay cất cánh xuyên qua tầng mây.<br>**Thú vị**: Các câu thông báo song ngữ thường nghe nhất tại sân bay Trung Quốc. |

---

### ĐẠI MẢNG 7: CÔNG VIỆC, SỰ NGHIỆP & KINH DOANH TÀI CHÍNH (Files `37.md` – `42.md`)

| Mã File | Tên Chủ đề (Việt / Hán / Pinyin / Hán Việt) | Các Nhánh Từ vựng Trọng tâm & Lượng từ | Định hướng Đoạn văn Mẫu & Kiến thức Thú vị |
| :--- | :--- | :--- | :--- |
| **`37.md`** | **Nghề nghiệp, Ngành nghề & Định hướng Sự nghiệp**<br>职业、行业与职业规划 / Zhíyè, hángyè yǔ zhíyè guīhuà / Chức nghiệp, ngành nghiệp dữ chức nghiệp quy hoạch | Bác sĩ, giáo viên, kỹ sư, luật sư, lập trình viên, thiết kế, kinh doanh tự do (`自由职业`); ước mơ nghề nghiệp, năng lực chuyên môn. | **Đoạn văn**: Chia sẻ về công việc hiện tại, lý do theo đuổi ngành nghề đó và mục tiêu phát triển trong 5 năm tới.<br>**Thú vị**: Quan niệm "Bát cơm sắt" (`铁饭碗` - công việc biên chế ổn định) xưa và nay. |
| **`38.md`** | **Tuyển dụng, Hồ sơ Xin việc (CV) & Phỏng vấn**<br>招聘、简历与求职面试 / Zhāopìn, jiǎnlì yǔ qiúzhí miànshì / Chiêu sính, giản lịch dữ cầu chức diện thí | Sơ yếu lý lịch (`简历`), kinh nghiệm làm việc, phỏng vấn (`面试`), lương thưởng (`薪资待遇`), phúc lợi (`五险一金`), thử việc (`试用期`), trúng tuyển (`录用`). | **Đoạn văn**: Tình huống đối đáp tự tin, chuyên nghiệp trong một buổi phỏng vấn tại công ty đa quốc gia.<br>**Thú vị**: Giải thích chế độ phúc lợi `五险一金` (5 loại bảo hiểm và 1 quỹ nhà ở) tại Trung Quốc. |
| **`39.md`** | **Văn phòng, Họp hành & Giao tiếp Công sở**<br>办公、会议与职场沟通 / Bàngōng, huìyì yǔ zhíchǎng gōutōng / Biện công, hội nghị dữ chức trường câu thông | Đồng nghiệp (`同事`), cấp trên (`领导/上司`), phòng ban, báo cáo (`汇报`), họp bàn, gửi email, tăng ca (`加班`), đi công tác (`出差`), xin nghỉ phép (`请假`). | **Đoạn văn**: Không khí làm việc khẩn trương trong một buổi họp triển khai dự án mới tại văn phòng.<br>**Thú vị**: Từ lóng chốn công sở Trung Quốc: `打工人` (người đi làm), `内卷` (cạnh tranh khốc liệt), `摸鱼` (trốn việc/lướt web giờ làm). |
| **`40.md`** | **Thương mại, Đàm phán & Hợp tác Kinh doanh**<br>商务谈判与商业合作 / Shāngwù tánpàn yǔ shāngyè hézuò / Thương vụ đàm phán dữ thương nghiệp hợp tác | Khách hàng (`客户`), đối tác (`合作伙伴`), hợp đồng (`合同`), báo giá (`报价`), ký kết, thị trường, thương hiệu, uy tín, đôi bên cùng có lợi (`双赢`). | **Đoạn văn**: Buổi gặp gỡ đàm phán thương mại thành công và lễ ký kết hợp tác chiến lược giữa hai doanh nghiệp.<br>**Thú vị**: Khái niệm `关系` (Quan hệ) và `面子` (Thể diện) trong văn hóa kinh doanh Trung Hoa. |
| **`41.md`** | **Tài chính Cá nhân, Ngân hàng & Đầu tư**<br>个人理财、银行与投资 / Gèrén lǐcái, yínháng yǔ tóuzī / Cá nhân lý tài, ngân hàng dữ đầu tư | Tài khoản ngân hàng, tiết kiệm (`存款`), chuyển khoản (`转账`), tỷ giá (`汇率`), cổ phiếu, bất động sản, thu nhập, chi tiêu, ngân sách. | **Đoạn văn**: Cách quản lý tài chính cá nhân thông minh, phân bổ thu nhập hàng tháng giữa chi tiêu, tiết kiệm và đầu tư.<br>**Thú vị**: Xã hội không tiền mặt (`无现金社会`) tại Trung Quốc với WeChat Pay (`微信支付`) và Alipay (`支付宝`). |
| **`42.md`** | **Nhà máy, Sản xuất, Xuất nhập khẩu & Chuỗi cung ứng**<br>生产制造、外贸与供应链 / Shēngchǎn zhìzào, wàimào yǔ gōngyìngliàn / Sản xuất chế tạo, ngoại mậu dữ cung ứng liên | Dây chuyền sản xuất, kiểm định chất lượng (`质检`), kho bãi (`仓库`), vận chuyển hàng hóa (`物流`), giao hàng, đơn đặt hàng (`订单`), xuất khẩu/nhập khẩu. | **Đoạn văn**: Quy trình từ lúc nhận đơn đặt hàng quốc tế, sản xuất tại nhà máy đến khi đóng công-ten-nơ xuất cảng.<br>**Thú vị**: Tại sao tiếng Trung thương mại - công xưởng lại là mảng từ vựng được săn đón nhất tại Việt Nam hiện nay. |

---

### ĐẠI MẢNG 8: SỨC KHỎE, Y TẾ & THỂ DỤC THỂ THAO (Files `43.md` – `46.md`)

| Mã File | Tên Chủ đề (Việt / Hán / Pinyin / Hán Việt) | Các Nhánh Từ vựng Trọng tâm & Lượng từ | Định hướng Đoạn văn Mẫu & Kiến thức Thú vị |
| :--- | :--- | :--- | :--- |
| **`43.md`** | **Triệu chứng Bệnh, Khám chữa bệnh & Bệnh viện**<br>疾病症状与医院看病 / Jíbìng zhèngzhuàng yǔ yīyuàn kànbìng / Tật bệnh chứng trạng dữ y viện khán bệnh | Cảm cúm, sốt (`发烧`), ho (`咳嗽`), đau đầu, dị ứng; đăng ký khám (`挂号`), bác sĩ, y tá, kê đơn (`开药`), tiêm, truyền dịch; bộ Nạch (`疒`). | **Đoạn văn**: Tình huống đi khám bệnh tại bệnh viện khi bị cảm sốt do thay đổi thời tiết và lời dặn dò của bác sĩ.<br>**Thú vị**: Bộ Nạch (`疒`) — cứ thấy bộ thủ này là biết chữ Hán đó liên quan đến bệnh tật hoặc cơn đau (`病`, `疼`, `痛`, `瘦`). |
| **`44.md`** | **Dược phẩm, Đông y & Chăm sóc Sức khỏe Dưỡng sinh**<br>医药、中医与养生保健 / Yīyào, Zhōngyī yǔ yǎngshēng bǎojiàn / Y dược, Trung y dữ dưỡng sinh bảo kiện | Thuốc tây, thuốc Đông y (`中药`), châm cứu (`针灸`), bấm huyệt (`按摩`), bắt mạch (`把脉`), vitamin, dinh dưỡng, sức đề kháng (`免疫力`). | **Đoạn văn**: Sự kết hợp giữa y học hiện đại và phương pháp dưỡng sinh Đông y để giữ cơ thể khỏe mạnh.<br>**Thú vị**: Triết lý Âm Dương - Hàn Nhiệt (`上火` - nóng trong người) trong ẩm thực và y học cổ truyền Trung Hoa. |
| **`45.md`** | **Thể dục Thể thao, Các môn Thi đấu & Vận động**<br>体育运动与竞技比赛 / Tǐyù yùndòng yǔ jìngjì bǐsài / Thể dục vận động dữ cạnh kỹ tỷ tái | Bóng đá, bóng rổ, cầu lông (`羽毛球`), bóng bàn (`乒乓球`), bơi lội, chạy bộ; sân vận động, trọng tài, huấn luyện viên, vô địch (`冠军`), cổ vũ (`加油`). | **Đoạn văn**: Không khí sôi động của một trận thi đấu thể thao kịch tính và tinh thần đồng đội trên sân.<br>**Thú vị**: "Quốc cầu" của Trung Quốc — Bóng bàn (`乒乓球`) và ngoại giao bóng bàn trong lịch sử. |
| **`46.md`** | **Phòng Gym, Yoga, Giữ dáng & Lối sống Lành mạnh**<br>健身、瑜伽与健康生活 / Jiànshēn, yújiā yǔ jiànkāng shēnghuó / Kiện thân, du già dữ kiện khang sinh hoạt | Tập thể hình (`健身`), cơ bắp (`肌肉`), giảm cân (`减肥`), đốt mỡ (`燃脂`), calo, chạy bộ, yoga, thiền định (`冥想`), cân bằng thân - tâm. | **Đoạn văn**: Thói quen đến phòng tập sau giờ làm việc để giải tỏa căng thẳng và rèn luyện vóc dáng dẻo dai.<br>**Thú vị**: Trào lưu tập thể dục theo livestream (như bài tập nhảy của Lưu Canh Hoành - `刘畊宏女孩`). |

---

### ĐẠI MẢNG 9: VĂN HÓA, NGHỆ THUẬT, GIẢI TRÍ & CÔNG NGHỆ SỐ (Files `47.md` – `54.md`)

| Mã File | Tên Chủ đề (Việt / Hán / Pinyin / Hán Việt) | Các Nhánh Từ vựng Trọng tâm & Lượng từ | Định hướng Đoạn văn Mẫu & Kiến thức Thú vị |
| :--- | :--- | :--- | :--- |
| **`47.md`** | **Âm nhạc, Nhạc cụ & Ca hát**<br>音乐、乐器与歌唱 / Yīnyuè, yuèqì yǔ gēchàng / Âm nhạc, nhạc khí dữ ca xướng | Thể loại nhạc (nhạc trẻ, cổ phong `古风`, nhạc cổ điển), giai điệu (`旋律`), ca từ (`歌词`), ca sĩ, buổi hòa nhạc (`演唱会`), nhạc cụ (piano, guitar, đàn tranh `古筝`, sáo trúc); động từ `弹`, `拉`, `吹`. | **Đoạn văn**: Cảm xúc đắm chìm trong giai điệu du dương của một bản nhạc cổ phong hoặc không khí cuồng nhiệt tại buổi concert.<br>**Thú vị**: Cách phân biệt động từ chơi nhạc cụ trong tiếng Trung (`弹` dùng cho đàn gảy/bấm phím, `拉` dùng cho đàn kéo vĩ, `吹` dùng cho nhạc cụ hơi). |
| **`48.md`** | **Điện ảnh, Phim truyền hình & Thế giới Giải trí**<br>电影、电视剧与娱乐圈 / Diànyǐng, diànshìjù yǔ yúlèquān / Điện ảnh, điện thị kịch dữ ngu nhạc khuyên | Phim cổ trang (`古装剧`), tiên hiệp, hiện đại, hành động, hoạt hình; đạo diễn, diễn viên, vai chính/phụ (`主角/配角`), kịch bản, kỹ xảo, phòng vé (`票房`), thần tượng (`偶像`). | **Đoạn văn**: Giới thiệu bộ phim tiếng Trung yêu thích nhất, phân tích diễn xuất của diễn viên và thông điệp của bộ phim.<br>**Thú vị**: Từ vựng chuyên ngành "đu idol" và xem phim (`追剧` - cày phim, `烂尾` - phim đầu voi đuôi chuột, `路透` - ảnh hậu trường rò rỉ). |
| **`49.md`** | **Hội họa, Nhiếp ảnh, Thư pháp & Nghệ thuật**<br>绘画、摄影与书法艺术 / Huìhuà, shèyǐng yǔ shūfǎ yìshù / Hội họa, nhiếp ảnh dữ thư pháp nghệ thuật | Tranh thủy mặc (`水墨画`), tranh sơn dầu, bố cục (`构图`), ánh sáng, ống kính (`镜头`), chụp ảnh, thư pháp (`书法`), triển lãm nghệ thuật (`艺术展`). | **Đoạn văn**: Buổi chiều dạo bước trong bảo tàng mỹ thuật, ngắm nhìn những bức họa thủy mặc và tác phẩm thư pháp.<br>**Thú vị**: Nghệ thuật để khoảng trắng (`留白` - lưu bạch) trong tranh thủy mặc và triết lý sống của người phương Đông. |
| **`50.md`** | **Trò chơi Điện tử, Thể thao Điện tử (Esports) & Sở thích**<br>电子游戏、电竞与业余爱好 / Diànzǐ yóuxì, diànjìng yǔ yèyú àihào / Điện tử du hí, điện cạnh dữ nghiệp dư ái hảo | Game nhập vai, đồng đội, nâng cấp (`升级`), trang bị (`装备`), chiến thuật, cờ tướng (`象棋`), cờ vây (`围棋`), sưu tầm, làm đồ thủ công (`手工`). | **Đoạn văn**: Niềm vui thư giãn cùng bạn bè trong một ván cờ hoặc trận đấu đồng đội cuối tuần.<br>**Thú vị**: Cờ vây (`围棋`) và Cờ tướng (`象棋`) — trên mặt quân cờ tướng đều là những chữ Hán rất quen thuộc (`車`, `馬`, `炮`, `將`, `帥`). |
| **`51.md`** | **Mạng xã hội, Truyền thông & Xu hướng Internet**<br>社交媒体与网络潮流 / Shèjiāo méitǐ yǔ wǎngluò cháoliú / Xã giao môi thể dữ võng lạc trào lưu | Video ngắn (`短视频`), blogger/KOL (`博主`), người hâm mộ (`粉丝`), lượt thích (`点赞`), bình luận (`评论`), chia sẻ (`转发`), xu hướng tìm kiếm (`热搜`). | **Đoạn văn**: Cách mạng xã hội và các nền tảng video ngắn kết nối con người và lan tỏa những câu chuyện truyền cảm hứng.<br>**Thú vị**: Hệ sinh thái mạng xã hội Trung Quốc (Douyin `抖音`, Weibo `微博`, WeChat `微信`, Bilibili `B站`). |
| **`52.md`** | **Công nghệ Thông tin, Điện thoại & Trí tuệ Nhân tạo (AI)**<br>信息技术、智能手机与人工智能 / Xìnxī jìshù, zhìnéng shǒujī yǔ réngōng zhìnéng / Tín tức kỹ thuật, trí năng thủ cơ dữ nhân công trí năng | Phần cứng, phần mềm (`软件`), ứng dụng (`应用/App`), mật khẩu, tải xuống (`下载`), dữ liệu (`数据`), thuật toán (`算法`), trí tuệ nhân tạo (`人工智能`), robot. | **Đoạn văn**: Miêu tả cách công nghệ thông minh và trí tuệ nhân tạo đang hỗ trợ việc học tập và đời sống hàng ngày.<br>**Thú vị**: Cách người Trung Quốc dịch tên các khái niệm công nghệ sang chữ Hán cực kỳ giàu hình ảnh (như `蓝牙` - răng xanh = Bluetooth, `防火墙` - tường chống lửa = Firewall). |
| **`53.md`** | **Lễ hội Truyền thống & Phong tục Tập quán Trung Hoa**<br>传统节日与民俗文化 / Chuántǒng jiérì yǔ mínsú wénhuà / Truyền thống tiết nhật dữ dân tục văn hóa | Tết Nguyên Đán (`春节`), Tết Nguyên Tiêu, Thanh Minh, Đoan Ngọ (`端午节`), Trung Thu (`中秋节`); lì xì (`红包`), câu đối (`春联`), đốt pháo, múa lân, bánh chưng/bánh ú (`粽子`), bánh trung thu (`月饼`). | **Đoạn văn**: Khung cảnh ấm áp đêm Giao thừa, cả gia đình quây quần gói sủi cảo, dán chữ Phúc và đón năm mới.<br>**Thú vị**: Tại sao người Trung Quốc lại dán chữ Phúc ngược (`福倒了` đồng âm với `福到了` - Phúc đến rồi). |
| **`54.md`** | **Lịch sử, Triều đại, Triết học & Văn hóa Cổ phong**<br>历史朝代、哲学与古风文化 / Lìshǐ cháodài, zhéxué yǔ gǔfēng wénhuà / Lịch sử triều đại, triết học dữ cổ phong văn hóa | Hoàng đế, cung điện (`宫殿`), triều đại (Tần, Hán, Đường, Tống, Minh, Thanh), Nho giáo (`儒家`), Đạo giáo, Phật giáo, di tích cổ, kinh kịch (`京剧`). | **Đoạn văn**: Chuyến tham quan Tử Cấm Thành (Cố Cung), lắng nghe tiếng vọng lịch sử qua những bức tường đỏ mái ngói vàng.<br>**Thú vị**: Bài vè 4 câu giúp nhớ trọn vẹn thứ tự các triều đại lịch sử Trung Quốc. |

---

### ĐẠI MẢNG 10: XÃ HỘI, PHÁP LUẬT, TƯ DUY & DIỄN ĐẠT NÂNG CAO (Files `55.md` – `60.md`)

| Mã File | Tên Chủ đề (Việt / Hán / Pinyin / Hán Việt) | Các Nhánh Từ vựng Trọng tâm & Lượng từ | Định hướng Đoạn văn Mẫu & Kiến thức Thú vị |
| :--- | :--- | :--- | :--- |
| **`55.md`** | **Giao tiếp Xã hội, Lễ nghi & Ứng xử Khéo léo**<br>社交礼仪与人际交往 / Shèjiāo lǐyí yǔ rénjì jiāowǎng / Xã giao lễ nghi dữ nhân tế giao vãng | Chào hỏi trang trọng, mời khách, tặng quà (`送礼`), khen ngợi (`赞美`), từ chối khéo (`委婉拒绝`), xin lỗi, cảm ơn, giữ thể diện, sự chân thành. | **Đoạn văn**: Cách ứng xử tinh tế, lịch thiệp khi đến thăm nhà một người bạn hoặc đối tác Trung Quốc.<br>**Thú vị**: Những món quà kiêng kỵ tuyệt đối không được tặng trong văn hóa Trung Quốc (như tặng đồng hồ `送钟` đồng âm với `送终`, tặng ô `送伞` đồng âm với `散`). |
| **`56.md`** | **Các Vấn đề Xã hội, Đời sống Đô thị & Dân sinh**<br>社会问题与民生热点 / Shèhuì wèntí yǔ mínshēng rèdiǎn / Xã hội vấn đề dữ dân sinh nhiệt điểm | Dân số, già hóa dân số (`老龄化`), việc làm, áp lực cuộc sống (`生活压力`), giáo dục con cái, an sinh xã hội, thiện nguyện (`公益慈善`). | **Đoạn văn**: Nghị luận ngắn về nhịp sống hối hả nơi đô thị hiện đại và cách người trẻ tìm kiếm sự cân bằng.<br>**Thú vị**: Các thuật ngữ xã hội phản ánh tâm lý thế hệ trẻ như `躺平` (nằm thẳng - buông bỏ áp lực). |
| **`57.md`** | **Pháp luật, Quy định, An ninh & Trật tự Công cộng**<br>法律法规与公共安全 / Fǎlǜ fǎguī yǔ gōnggòng ānquán / Pháp luật pháp quy dữ công cộng an toàn | Luật pháp, quyền lợi (`权利`), nghĩa vụ (`义务`), cảnh sát, quy tắc giao thông, bảo vệ người tiêu dùng, phòng chống lừa đảo (`防诈骗`), tình huống khẩn cấp. | **Đoạn văn**: Nêu cao ý thức tuân thủ quy định nơi công cộng và kỹ năng xử lý khi gặp tình huống khẩn cấp ở nước ngoài.<br>**Thú vị**: Các số điện thoại khẩn cấp cần nhớ tại Trung Quốc (`110` Cảnh sát, `120` Cấp cứu, `119` Cứu hỏa). |
| **`58.md`** | **Thời gian, Không gian & Các Khái niệm Trừu tượng**<br>时间、空间与抽象概念 / Shíjiān, kōngjiān yǔ chōuxiàng gàiniàn / Thời gian, không gian dữ trừu tượng khái niệm | Quá khứ - Hiện tại - Tương lai, khoảnh khắc (`瞬间`), vĩnh cửu (`永恒`), nguyên nhân - kết quả (`因果`), bản chất (`本质`), cơ hội (`机遇`), định mệnh (`缘分`). | **Đoạn văn**: Đoạn tản văn triết lý nhẹ nhàng về giá trị của thời gian, chữ "Duyên" (`缘分`) và sự trân trọng hiện tại.<br>**Thú vị**: Quan niệm về chữ `缘` (Duyên) và `危机` (Nguy cơ = Nguy hiểm `危` + Cơ hội `机`) trong tư duy Hán ngữ. |
| **`59.md`** | **Từ nối, Liên từ & Cấu trúc Lập luận Sắc bén**<br>关联词与逻辑表达 / Guānliáncí yǔ luójí biǎodá / Quan liên từ dữ lô-gíc biểu đạt | Các cặp liên từ kinh điển: `因为…所以…`, `虽然…但是…`, `不仅…而且…`, `无论…都…`, `与其…不如…`, `之所以…是因为…`; từ chuyển ý, tổng kết. | **Đoạn văn**: Một bài phát biểu ngắn thuyết phục, mạch lạc sử dụng chuỗi các cấu trúc liên từ nâng cao để bảo vệ quan điểm.<br>**Thú vị**: Bí quyết dùng liên từ để nâng điểm phần Nói và Viết từ HSK 3 lên thẳng HSK 5–6. |
| **`60.md`** | **Tinh hoa Thành ngữ (成语), Tục ngữ & Điển cố Thông dụng**<br>常用成语、俗语与典故精华 / Chángyòng chéngyǔ, súyǔ yǔ diǎngù jīnghuá / Thường dụng thành ngữ, tục ngữ dữ điển cố tinh hoa | Các thành ngữ 4 chữ dùng nhiều nhất trong đời sống (về sự kiên trì, học tập, tình bạn, thành công), tục ngữ dân gian, câu nói truyền cảm hứng (`励志名言`). | **Đoạn văn**: Kể lại điển tích nổi tiếng đằng sau một câu thành ngữ (như `画蛇添足` - Vẽ rắn thêm chân, hoặc `塞翁失马` - Tái ông thất mã) và bài học ứng dụng.<br>**Thú vị**: Tại sao người Trung Quốc đánh giá rất cao trình độ của người nước ngoài khi biết lồng ghép đúng 1 câu thành ngữ 4 chữ vào giao tiếp. |

---

## PHẦN V. PROMPT MẪU ĐỂ BẠN GIAO VIỆC CHO AI 3.8 FLASH

Khi bạn muốn tạo bất kỳ chủ đề nào (ví dụ `1.md`, `20.md`, `25.md`...), bạn chỉ cần đính kèm file `0.md` này và gửi câu lệnh dưới đây cho **3.8 Flash**:

> **Câu lệnh (Prompt) mẫu gửi cho 3.8 Flash:**
>
> *"Dựa trên bản thiết kế gốc `0.md`, hãy viết chi tiết toàn bộ nội dung cho file **`[Số thứ tự].md`** (Chủ đề: **`[Tên chủ đề]`**).
> Yêu cầu bắt buộc:
> 1. Đi đầy đủ và sâu sắc cả **8 Mục** như đã quy định tại Phần II của `0.md`.
> 2. Tuân thủ tuyệt đối **Quy tắc 4 Tầng Ngôn Ngữ** (Chữ Hán - Pinyin chuẩn dấu - Âm Hán Việt từng chữ - Nghĩa Tiếng Việt & Từ loại/Lượng từ) cho toàn bộ bảng từ vựng (35–45 từ), cụm từ cố định, 10 mẫu câu và 2 đoạn văn mẫu (cả bản đọc liền mạch lẫn bản bóc tách từng câu 4 tầng như mẫu ở Phần III của `0.md`).
> 3. Viết đầy đủ, chi tiết, trình bày bảng biểu và blockquote rõ ràng, tuyệt đối không viết tắt hay lược bỏ."*
