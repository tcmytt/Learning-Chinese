# Sổ Tay Thuật Ngữ IT MES & Sản Xuất Thông Minh Trong Nhà Máy (智能制造)

> **MES (Manufacturing Execution System - 制造执行系统)** là cầu nối cốt lõi giữa hệ thống hoạch định doanh nghiệp (ERP) và tầng điều khiển tự động hóa dưới xưởng (PLC, SCADA). Trong các tập đoàn sản xuất điện tử, linh kiện bán dẫn và cơ khí chính xác của Trung Quốc và Đài Loan (như Foxconn, Luxshare, Goertek, Pegatron, BYD, Compal...) tại các khu công nghiệp Việt Nam, kỹ sư IT MES là vị trí then chốt, đòi hỏi giao tiếp kỹ thuật tiếng Trung cực kỳ chuẩn xác.

---

## 1. Cấu Trúc Tổng Thể Hệ Thống MES & Tầng Sản Xuất

```
[ ERP / SAP: Kế hoạch kinh doanh & Đơn hàng ]
                     │
                     ▼
[ MES (制造执行系统): Quản lý & Điều hành sản xuất thời gian thực ]
   ├── 工单管理 (Quản lý Work Order)
   ├── 产线追溯 (Truy xuất nguồn gốc S/N)
   ├── 防呆机制 (Cơ chế chống sai sót Poka-Yoke)
   └── 质量控制 (Kiểm soát chất lượng SPC)
                     │
                     ▼
[ SCADA / PLC / 设备层: Máy móc thiết bị tự động hóa dưới xưởng ]
```

---

## 2. Bảng Thuật Ngữ Cốt Lõi Về Đơn Hàng & Mã Định Danh

| Thuật Ngữ Tiếng Trung | Phiên Âm Pinyin | Dịch Nghĩa Kỹ Thuật (Tiếng Việt) | Tiếng Anh Chuyên Ngành |
| :--- | :--- | :--- | :--- |
| **工单** | *gōngdān* | Lệnh sản xuất / Đơn hàng sản xuất | Work Order (WO) |
| **料号** | *liàohào* | Mã linh kiện / Mã vật tư | Part Number (P/N) |
| **批次号** | *pīcì hào* | Số lô sản xuất | Lot Number / Batch No. |
| **序列号** | *xùliè hào* | Số sê-ri định danh từng sản phẩm | Serial Number (S/N) |
| **条码** | *tiáomǎ* | Mã vạch (1D barcode) | Barcode |
| **二维码** | *èrwèimǎ* | Mã ma trận QR / DataMatrix (2D) | QR Code / 2D Matrix |
| **工序 / 站位** | *gōngxù / zhànwèi* | Công đoạn / Trạm sản xuất | Operation / Station |
| **路线 / 流程** | *lùxiàn / liúchéng* | Quy trình công nghệ / Lộ trình sản xuất | Routing / Workflow |
| **在制品** | *zàizhìpǐn* | Bán thành phẩm đang chạy trên chuyền | Work In Process (WIP) |
| **成品** | *chéngpǐn* | Thành phẩm hoàn chỉnh | Finished Goods (FG) |

---

## 3. Thuật Ngữ Các Công Đoạn Sản Xuất (SMT ➔ Lắp Ráp ➔ Đóng Gói)

1. **SMT (表面贴装技术 / Biǎomiàn tiēzhuāng jìshù)**: Công nghệ dán bề mặt linh kiện điện tử lên bo mạch PCB:
   * **印刷机 (*yìnshuājī*)**: Máy in kem hàn (Solder Paste Printer).
   * **贴片机 (*tiēpiànjī*)**: Máy gắp đặt linh kiện (Pick & Place Machine).
   * **回流焊 (*huíliúhàn*)**: Lò hàn đối lưu (Reflow Oven).
   * **AOI (自动光学检测 / Zìdòng guāngxué jiǎncè)**: Máy kiểm tra quang học tự động.
2. **DIP (插件 / Chājiàn)**: Công đoạn cắm linh kiện xuyên lỗ:
   * **波峰焊 (*bōfēnghàn*)**: Hàn sóng (Wave Soldering).
3. **组装 (Assembly - 组装线 / Zǔzhuāng xiàn)**: Dây chuyền lắp ráp cơ khí & linh kiện:
   * **打螺丝 (*dǎ luósī*)**: Bắt vít (tô-vít điện thông minh có kết nối MES).
   * **点胶 (*diǎnjiāo*)**: Tra keo / Bơm keo chống nước.
4. **测试 (Testing - 测试站 / Cèshì zhàn)**:
   * **ICT (在线测试)**: Đo kiểm tra mạch hở, ngắn mạch.
   * **FCT (功能测试)**: Kiểm tra toàn bộ chức năng hoạt động của sản phẩm.
   * **老化测试 (*lǎohuà cèshì*)**: Test lão hóa / Burn-in test (chạy tải nhiệt độ cao).
5. **包装 (Packaging - 包装线 / Bāozhuāng xiàn)**:
   * **彩盒 (*cǎihé*)**: Hộp màu đựng sản phẩm đơn lẻ.
   * **外箱 / 卡通箱 (*wàixiāng / kǎtōngxiāng*)**: Thùng carton lớn (Carton box).
   * **栈板 / 托盘 (*zhànbǎn / tuōpán*)**: Pallet xếp thùng hàng.

---

## 4. Thuật Ngữ Kiểm Soát Chất Lượng & Đo Lường Hiệu Suất (KPI)

| Thuật Ngữ | Pinyin | Dịch Nghĩa | Ý Nghĩa Thực Tế |
| :--- | :--- | :--- | :--- |
| **良品** | *liángpǐn* | Hàng đạt chuẩn (Pass / OK) | Sản phẩm đạt tiêu chuẩn chất lượng. |
| **不良品** | *bùliángpǐn* | Hàng lỗi (NG / Defect) | Sản phẩm không đạt tiêu chuẩn. |
| **报废** | *bàofèi* | Phế phẩm (Scrap) | Hàng hỏng nặng không thể sửa chữa, phải hủy. |
| **重工 / 返工** | *zhònggōng / fǎngōng* | Sửa lại hàng lỗi (Rework) | Đưa sản phẩm quay lại công đoạn trước để làm lại. |
| **直通率** | *zhítōng lǜ* | Tỷ lệ đạt ngay lần đầu (FPY) | Tỷ lệ sản phẩm qua hết các trạm mà không bị lỗi lần nào. |
| **稼动率** | *jiàdòng lǜ* | Hiệu suất sử dụng máy móc (OEE) | Tỷ lệ thời gian máy chạy thực tế so với kế hoạch. |
| **产能 / 产出** | *chǎnnéng / chǎnchū* | Năng lực sản xuất / Sản lượng thực tế | Số lượng đơn vị sản phẩm làm ra trong ca/ngày. |
| **节拍时间** | *jiépāi shíjiān* | Thời gian chu kỳ (Takt Time / Cycle Time) | Thời gian để hoàn thành 1 sản phẩm tại trạm. |

---

## 5. Thuật Ngữ Phần Cứng & Thiết Bị Ngoại Vi IT MES

* **扫码枪 (*sǎomǎ qiāng*)**: Máy quét mã vạch cầm tay (hoặc cố định trên dây chuyền).
* **条码打印机 (*tiáomǎ dǎyìnjī*)**: Máy in mã vạch (phổ biến nhất là hãng Zebra, TSC, Sato).
* **碳带 (*tàndài*)**: Ruy-băng mực in nhiệt (Ribbon).
* **标签纸 (*biāoqiān zhǐ*)**: Giấy in tem nhãn (Decal mã vạch).
* **治具 (*zhìjù*)**: Gá đặt, đồ gá (Jig) dùng để định vị sản phẩm khi test hoặc lắp ráp.
* **载具 (*zǎijù*)**: Khay chứa di chuyển bo mạch dọc theo băng chuyền (Carrier / Tray).
* **工控机 (*gōngkòngjī*)**: Máy tính công nghiệp (IPC - Industrial PC đặt tại trạm sản xuất).
* **看板 (*kànbǎn*)**: Màn hình điện tử hiển thị sản lượng, tiến độ và tỷ lệ lỗi thời gian thực (Kanban / Andon).

---

## 6. Thuật Ngữ Phần Mềm, Cơ Sở Dữ Liệu & Giao Thức Kết Nối

* **防呆 (*fángdāi* - Poka-Yoke)**: Cơ chế kiểm tra chống sai sót của MES:
  * Ví dụ: Nếu bo mạch chưa qua trạm Test mà công nhân quét mã ở trạm Đóng gói, hệ thống MES sẽ **báo đỏ và chặn lại (跳站 / Tiàozhàn - Nhảy trạm trái phép)**.
* **锁线 (*suǒxiàn* - Khóa chuyền)**: Khi tỷ lệ lỗi vượt ngưỡng cho phép (SPC Alarm), hệ thống MES tự động khóa toàn bộ trạm không cho quét mã tiếp tục để tránh sản xuất hàng loạt sản phẩm lỗi.
* **追溯 (*zhuīsù* - Traceability)**: Quét mã S/N để tra ra: ai làm, máy nào sản xuất, linh kiện lô nào, thời gian test lúc mấy giờ.
* **数据库 (*shùjùkù*)**: Cơ sở dữ liệu (Oracle, Microsoft SQL Server, PostgreSQL, MySQL).
* **存储过程 (*cúnchǔ guòchéng*)**: Stored Procedure xử lý logic MES trong Database.
* **接口 (*jiēkǒu*)**: API, Web Service kết nối giữa MES với máy kiểm tra hoặc PLC.
* **掉线 (*diàoxiàn*) / 网络中断 (*wǎngluò zhōngduàn*)**: Mất mạng, rớt kết nối mạng.
* **卡单 (*kǎdān*)**: Lệnh sản xuất bị treo, không cập nhật được trạng thái.
