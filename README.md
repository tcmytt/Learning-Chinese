# 🇨🇳 Kho Tài Liệu & Giáo Trình Học Tiếng Trung Toàn Diện

<p align="center">
  <a href="https://tcmytt.github.io/Learning-Chinese/">
    <img src="https://img.shields.io/badge/🌐_ĐỌC_TRỰC_TUYẾN-GIÁO_TRÌNH_WEB_APP-c0392b?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Web App" />
  </a>
  <img src="https://img.shields.io/badge/Chủ_Đề-60_Topics_Hoàn_Chỉnh-0d9488?style=for-the-badge" alt="60 Topics" />
  <img src="https://img.shields.io/badge/Quy_Chuẩn-4_Tầng_Ngôn_Ngữ-d97706?style=for-the-badge" alt="4-Layer Linguistic Standard" />
  <img src="https://img.shields.io/badge/Bộ_Thủ-214_Radicals-2563eb?style=for-the-badge" alt="214 Radicals" />
  <img src="https://img.shields.io/badge/Chuẩn_Mới-HSK_3.0-7c3aed?style=for-the-badge" alt="HSK 3.0" />
  <img src="https://img.shields.io/badge/Thực_Chiến-Taobao_&_Công_Sở-ea580c?style=for-the-badge" alt="Practical Chinese" />
</p>

---

## 🌟 Trải Nghiệm Học Tập Tương Tác Trên Web

Toàn bộ hệ thống bài giảng và 60 chủ đề từ vựng đã được tích hợp sẵn thành **ứng dụng web tĩnh hiện đại**, cho phép bạn đọc, tra cứu và luyện tập mượt mà trên cả máy tính lẫn điện thoại:

👉 **[NHẤP VÀO ĐÂY ĐỂ MỞ TRANG WEB HỌC TIẾNG TRUNG (GITHUB PAGES)](https://tcmytt.github.io/Learning-Chinese/)**

---

### ✨ Các Tính Năng Nổi Bật Của Bản Web Tĩnh:
* 🔊 **Phát âm tiếng Trung tức thì (Text-to-Speech)**: Nhấp vào chữ Hán, mẫu câu hoặc nút loa 🔊 để nghe phát âm giọng bản xứ chuẩn Bắc Kinh (`zh-CN`).
* 🌓 **Giao diện Kép (Dark Mode & Light Mode)**: Tùy biến tông màu Giấy xuyến cổ điển hoặc Đá nghiên trầm tĩnh, chống mỏi mắt khi học lâu.
* 👁️ **Chế độ Luyện nhớ Mặt chữ**: Công tắc bật/tắt linh hoạt **Hiện/Ẩn Pinyin** và **Hiện/Ẩn Âm Hán Việt** giúp kiểm tra trí nhớ mặt chữ Hán.
* 📝 **Bài tập Tự luyện Tương tác**: Toàn bộ phần **Đáp án & Phân tích chi tiết (Mục 8)** được gấp gọn thông minh trong nút mở rộng `[ 👁️ Xem Đáp Án ]`, giúp bạn tự làm bài tập trước khi tra cứu.
* 📊 **Theo dõi Tiến độ Học tập (Progress Tracker)**: Nút `[ Đánh dấu đã học ]` lưu trực tiếp trên trình duyệt cùng thanh phần trăm tiến độ học tập.
* 📱 **Thiết kế Responsive Toàn diện**: Tương thích hoàn hảo từ màn hình máy tính lớn, máy tính bảng đến điện thoại di động (có menu drawer tiện lợi).
* 🔍 **Tìm kiếm Thời gian thực**: Tra cứu tức thì bất kỳ chủ đề, từ vựng hay quy tắc ngữ pháp nào trong tích tắc.

---

## 🧭 Cấu Trúc Thư Mục Kho Tri Thức

Toàn bộ tài liệu gốc `.md` được bảo lưu nguyên vẹn 100% nội dung và được phân loại khoa học vào các phân hệ:

```text
Learning-Chinese/
├── index.html                           # Trang chủ ứng dụng Web Reader (Deploy GitHub Pages)
├── README.md                            # Tài liệu giới thiệu & Hướng dẫn học
├── assets/                              # Tài nguyên giao diện (CSS, JS, Fonts, Vendor)
│   ├── css/style.css                    # Bảng kiểu thiết kế chuẩn Hán tự, Dark/Light Mode
│   ├── js/manifest.js                   # Danh mục mục lục cấu trúc toàn diện
│   ├── js/app.js                        # Bộ máy xử lý Markdown, TTS, Quiz, Bộ đếm tiến độ
│   └── vendor/marked.min.js             # Bộ phân giải Markdown offline
│
├── 01-LoTrinh-PhuongPhap/               # Lộ trình học, Ngữ âm Pinyin & Phương pháp
│   ├── HuongDan.md                      # Lộ trình học tiếng Trung toàn diện (Master Checklist)
│   ├── BangPinyinVaPhatAm.md             # Bảng Pinyin, Thanh mẫu, Vận mẫu & Quy tắc phát âm
│   ├── QuyTacBienDieu.md                # Quy tắc biến điệu thực chiến (2 thanh 3, 一, 不, 儿 hóa)
│   └── HocNhuNao.md                     # Phương pháp học & Chiến lược 2500 chữ Hán
│
├── 02-ChuHan-BoThu/                     # Nền tảng Chữ Hán, Bút thuận & Bộ thủ
│   ├── QuyTacButThuan.md                # 8 Nét cơ bản & 7 Quy tắc bút thuận viết chữ Hán
│   ├── 214BoThu.md                      # Chiết tự 214 Bộ thủ Hán tự & Ví dụ chi tiết
│   ├── 2500ChuPhoBien.md                # 2500 Chữ Hán thông dụng nhất (98% ngữ liệu)
│   ├── ChuHanDeNham.md                  # Chữ Hán có hình thể dễ gây nhầm lẫn
│   └── ChuHanDongAm.md                  # Chữ Hán đồng âm khác nghĩa
│
├── 03-NguPhap-ThanhPhanCau/             # Hệ thống Ngữ pháp & Cú pháp
│   ├── ngu_phap_tieng_trung.md          # Tổng quan từ loại & các cấu trúc câu cơ bản
│   ├── ThanhPhanCau.md                  # Phân tích chuyên sâu 6 Thành phần câu (Chủ, Vị, Tân, Định, Trạng, Bổ)
│   └── NguPhap.md                       # Sổ tay ghi chú ngữ pháp
│
├── 04-ThanhNgu-DienCo/                  # Tiếng Trung Thực Chiến, Đời Sống & Thành Ngữ
│   ├── TiengLongVaKhauNguMang.md        # Tiếng lóng Internet, hot trend Douyin/Weibo & Mật mã số
│   ├── TiengTrungKinhDoanhTaobao.md     # Cẩm nang đàm phán, chat shop Taobao, 1688 & Logistics
│   ├── TiengTrungVanPhongEmailCV.md     # Mẫu viết CV, soạn thảo Email & Khẩu ngữ công sở
│   ├── CumTuVaThanhNgu.md               # Cụm từ cố định & Thành ngữ bốn chữ
│   ├── DienTichDienCo.md                # Điển tích điển cố và văn hóa lịch sử Trung Hoa
│   ├── topic_购物.md                     # Tình huống giao tiếp thực chiến: Mua sắm
│   └── TuVung.md                        # Sổ tay từ vựng mở rộng
│
├── 05-ChungChi-HSK/                     # Luyện Thi Chứng Chỉ Quốc Tế
│   └── TongQuanHSK3.0VaChienLuocOnThi.md # Khung chuẩn 3 Đẳng 9 Cấp HSK 3.0 & Chiến lược thi HSK/HSKK
│
└── TiengTrungTheoChuDe/                 # Hệ thống 60 Chủ đề Master (Chuẩn 4 tầng & 8 mục)
    ├── 0-tong-quan.md                   # Master Blueprint & Quy chuẩn khung chương trình
    │
    ├── [Đại Mảng 1: Con Người, Gia Đình & Cảm Xúc]
    ├── 1-co-the-nguoi-va-cu-chi-hoat-dong.md
    ├── 2-ngoai-hinh-khi-chat-va-dien-mao.md
    ├── 3-tinh-cach-pham-chat-va-thai-do-song.md
    ├── 4-cam-xuc-tam-trang-va-trang-thai-tinh-than.md
    ├── 5-gia-dinh-ho-hang-va-xung-ho-truyen-thong.md
    ├── 6-tinh-yeu-hon-nhan-va-cac-giai-doan-cuoc-doi.md
    │
    ├── [Đại Mảng 2: Đời Sống Hằng Ngày & Nhà Cửa]
    ├── 7-nha-cua-kien-truc-va-khong-gian-song.md
    ├── 8-noi-that-do-gia-dung-va-thiet-bi-trong-nha.md
    ├── 9-lich-trinh-sinh-hoat-va-thoi-quen-hang-ngay.md
    ├── 10-trang-phuc-thoi-trang-va-phu-kien.md
    ├── 11-cham-soc-ca-nhan-lam-dep-va-tham-my.md
    ├── 12-vat-nuoi-thu-cung-va-cham-soc-thu-cung.md
    │
    ├── [Đại Mảng 3: Ẩm Thực, Nấu Nướng & Mua Sắm]
    ├── 13-nguyen-lieu-thuc-pham-rau-cu-trai-cay-thit-ca.md
    ├── 14-gia-vi-che-bien-va-nau-nuong.md
    ├── 15-mon-an-trung-hoa-va-am-thuc-duong-pho.md
    ├── 16-nha-hang-goi-mon-va-van-hoa-ban-tiec.md
    ├── 17-tra-dao-ca-phe-va-do-uong-giai-khat.md
    ├── 18-mua-sam-sieu-thi-va-thuong-mai-dien-tu.md
    │
    ├── [Đại Mảng 4: Thiên Nhiên, Động Thực Vật & Phong Cảnh]
    ├── 19-the-gioi-dong-vat-thu-rung-gia-suc-con-trung.md
    ├── 20-loai-chim-sinh-vat-bien-va-bo-sat.md
    ├── 21-thuc-vat-hoa-co-va-cay-coi.md
    ├── 22-phong-canh-thien-nhien-son-thuy-dia-hinh.md
    ├── 23-thoi-tiet-khi-hau-va-bon-mua.md
    ├── 24-vu-tru-bau-troi-va-bao-ve-moi-truong.md
    │
    ├── [Đại Mảng 5: Trường Học, Giáo Dục & Học Thuật]
    ├── 25-truong-hoc-va-doi-song-hoc-duong.md
    ├── 26-mon-hoc-chuyen-nganh-va-do-dung-hoc-tap.md
    ├── 27-phuong-phap-hoc-tap-thi-cu-va-diem-so.md
    ├── 28-ngon-ngu-hoc-va-chinh-phuc-tieng-trung.md
    ├── 29-doc-sach-van-hoc-va-tri-thuc.md
    ├── 30-khoa-hoc-tu-nhien-toan-hoc-va-tu-duy-logic.md
    │
    ├── [Đại Mảng 6: Giao Thông, Đô Thị & Du Lịch]
    ├── 31-phuong-tien-giao-thong-va-di-chuyen-do-thi.md
    ├── 32-phuong-huong-vi-tri-va-hoi-duong.md
    ├── 33-khong-gian-do-thi-va-cong-trinh-cong-cong.md
    ├── 34-du-lich-va-danh-lam-thang-canh.md
    ├── 35-khach-san-luu-tru-va-nghi-duong.md
    ├── 36-san-bay-hang-khong-va-xuat-nhap-canh.md
    │
    ├── [Đại Mảng 7: Công Việc, Sự Nghiệp & Kinh Doanh Tài Chính]
    ├── 37-nghe-nghiep-va-dinh-huong-su-nghiep.md
    ├── 38-tuyen-dung-cv-va-phong-van.md
    ├── 39-van-phong-hop-hanh-va-giao-tiep-cong-so.md
    ├── 40-thuong-mai-dam-phan-va-hop-tac-kinh-doanh.md
    ├── 41-tai-chinh-ca-nhan-ngan-hang-va-dau-tu.md
    ├── 42-nha-may-san-xuat-va-xuat-nhap-khau.md
    │
    ├── [Đại Mảng 8: Sức Khỏe, Y Tế & Thể Dục Thể Thao]
    ├── 43-trieu-chung-benh-va-kham-chua-benh.md
    ├── 44-duoc-pham-dong-y-va-duong-sinh.md
    ├── 45-the-duc-the-thao-va-thi-dau.md
    ├── 46-phong-gym-yoga-va-loi-song-lanh-manh.md
    │
    ├── [Đại Mảng 9: Văn Hóa, Nghệ Thuật, Giải Trí & Công Nghệ Số]
    ├── 47-am-nhac-nhac-cu-va-ca-hat.md
    ├── 48-dien-anh-phim-truyen-hinh-va-giai-tri.md
    ├── 49-hoi-hoa-nhiep-anh-va-thu-phap.md
    ├── 50-tro-choi-dien-tu-va-esports.md
    ├── 51-mang-xa-hoi-va-truyen-thong-internet.md
    ├── 52-cong-nghe-thong-tin-va-ai.md
    ├── 53-le-hoi-truyen-thong-va-phong-tuc-tap-quan.md
    ├── 54-lich-su-trieu-dai-va-van-hoa-co-phong.md
    │
    └── [Đại Mảng 10: Xã Hội, Pháp Luật, Tư Duy & Diễn Đạt Nâng Cao]
        ├── 55-giao-tiep-xa-hoi-le-nghi-ung-xu.md
        ├── 56-van-de-xa-hoi-va-dan-sinh.md
        ├── 57-phap-luat-an-ninh-va-trat-tu-cong-cong.md
        ├── 58-thoi-gian-khong-gian-va-khai-niem-truu-tuong.md
        ├── 59-tu-noi-lien-tu-va-cau-truc-lap-luan.md
        └── 60-thanh-ngu-tuc-ngu-va-dien-co.md
```

---

## 🚀 Hướng Dẫn Kích Hoạt GitHub Pages (Chỉ mất 30 giây)

Nếu trang web chưa tự động kích hoạt trên GitHub, bạn chỉ cần thực hiện 3 bước đơn giản sau:

1. Vào repository của bạn trên GitHub: `https://github.com/tcmytt/Learning-Chinese`.
2. Bấm vào tab **Settings** (Cài đặt) ở trên cùng $\rightarrow$ Chọn mục **Pages** ở danh mục bên trái.
3. Tại phần **Build and deployment**:
   * **Source**: Chọn `Deploy from a branch`.
   * **Branch**: Chọn nhánh `main` và thư mục `/ (root)`.
   * Bấm nút **Save**.
4. Chờ khoảng 1–2 phút, GitHub sẽ hoàn tất triển khai và hiển thị link xanh:  
   👉 `https://tcmytt.github.io/Learning-Chinese/`

---

## 💻 Trải Nghiệm Offline Trên Máy Tính Của Bạn

Để đọc trực tiếp trên máy tính mà không cần Internet, bạn có thể khởi chạy một web server nội bộ đơn giản bằng bất kỳ cách nào dưới đây:

* **Cách 1 (Dùng VS Code)**: Cài đặt extension **Live Server**, nhấp chuột phải vào file `index.html` chọn **Open with Live Server**.
* **Cách 2 (Dùng Python)**:
  ```bash
  python -m http.server 8000
  ```
  Sau đó mở trình duyệt truy cập: `http://localhost:8000`.
* **Cách 3 (Dùng Node.js)**:
  ```bash
  npx serve .
  ```

---

## 📜 Bản Quyền & Giấy Phép
Dự án được xây dựng và chia sẻ hoàn toàn phi thương mại nhằm mục đích hỗ trợ cộng đồng người học tiếng Trung chinh phục Hán ngữ một cách khoa học, sâu sắc và bền vững.
