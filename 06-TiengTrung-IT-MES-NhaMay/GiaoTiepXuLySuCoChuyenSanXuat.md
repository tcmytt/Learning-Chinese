# Tiếng Trung Xử Lý Sự Cố Dây Chuyền & Giao Tiếp Hiện Trường Cho Kỹ Sư IT MES

> Trong môi trường sản xuất công nghiệp 24/7, sự cố hệ thống MES có thể khiến hàng trăm công nhân phải ngừng làm việc (**停线 - Dừng chuyền**). Mỗi phút dừng chuyền gây tổn thất hàng nghìn USD. Là kỹ sư IT MES, bạn cần phản xạ nhanh, xác định lỗi chính xác và giao tiếp mạch lạc bằng tiếng Trung với **Chủ quản sản xuất (主管)**, **Tổ trưởng (领班)** và **Kỹ sư thiết bị (设备/PE)**.

---

## 1. Các Tình Huống Sự Cố Điển Hình (产线常见异常) & Cách Diễn Đạt

### 1.1. Sự cố quét mã & Lỗi logic MES (扫码报错)
| Lỗi Hiện Trường | Câu Nói Báo Lỗi Tiếng Trung | Phiên Âm Pinyin | Dịch Nghĩa |
| :--- | :--- | :--- | :--- |
| **Không quét được mã** | **扫码枪扫不上码，红光有但是没反应。** | *Sǎomǎqiāng sǎo bu shàng mǎ, hóngguāng yǒu dànshì méi fǎnyìng.* | Máy quét không nhận mã, có tia đỏ nhưng không có phản hồi gì. |
| **Báo nhảy trạm** | **系统提示“跳站”，说这个主板还没过ICT测试。** | *Xìtǒng tíshì "tiàozhàn", shuō zhè gè zhǔbǎn hái méi guò ICT cèshì.* | Hệ thống báo lỗi "Nhảy trạm", bảo là bo mạch này chưa qua test ICT. |
| **Trùng số S/N** | **条码重复了，系统提示“SN已存在”。** | *Tiáomǎ chóngfù le, xìtǒng tíshì "SN yǐ cúnzài".* | Bị trùng mã rồi, hệ thống báo "Số S/N đã tồn tại trong DB". |
| **Sai công đoạn / model** | **料号不匹配，工单选错了。** | *Liàohào bù pǐpèi, gōngdān xuǎn cuò le.* | Mã linh kiện không khớp, chọn nhầm lệnh sản xuất rồi. |

### 1.2. Sự cố giao tiếp dữ liệu & Máy kiểm tra (测试接口异常)
| Lỗi Hiện Trường | Câu Nói Tiếng Trung | Phiên Âm Pinyin | Dịch Nghĩa |
| :--- | :--- | :--- | :--- |
| **Dữ liệu không đẩy lên** | **测试机测完了，但是测试结果传不到MES系统里。** | *Cèshìjī cè wán le, dànshì cèshì jiéguǒ chuán bú dào MES xìtǒng lǐ.* | Máy test chạy xong rồi, nhưng kết quả không truyền được vào hệ thống MES. |
| **Lỗi kết nối API** | **接口报错超时 (Timeout)，网络是不是断了？** | *Jiēkǒu bàocuò chāoshí, wǎngluò shì bu shì duàn le?* | API báo lỗi quá thời gian (Timeout), mạng có bị đứt không? |
| **PLC không mở cửa** | **MES判定为OK，但是PLC没有收到放行信号，治具打不开。** | *MES pàndìng wéi OK, dànshì PLC méiyǒu shōudào fàngxíng xìnhào...* | MES báo kết quả OK, nhưng PLC không nhận được tín hiệu nhả hàng, đồ gá không mở ra. |

### 1.3. Sự cố máy in tem nhãn (打印机故障)
| Lỗi Máy In | Câu Nói Tiếng Trung | Phiên Âm Pinyin | Dịch Nghĩa |
| :--- | :--- | :--- | :--- |
| **Kẹt giấy / Hết ruy-băng** | **斑马打印机卡纸了，而且碳带快用完了。** | *Bānmǎ dǎyìnjī kǎzhǐ le, érqiě tàndài kuài yòng wán le.* | Máy in Zebra bị kẹt giấy, ruy-băng mực cũng sắp hết rồi. |
| **Mã in bị mờ / Đứt nét** | **打印出来的条码很模糊，扫码枪识别不了。** | *Dǎyìn chūlái de tiáomǎ hěn móhu, sǎomǎqiāng shíbié bù liǎo.* | Mã in ra mờ quá, máy quét không nhận dạng được. |
| **Lệch khổ giấy** | **打印位置偏移了，麻烦校准一下传感器。** | *Dǎyìn wèizhi piānyí le, máfan jiàozhǔn yíxià chuángǎnqì.* | Vị trí in bị lệch rồi, phiền bạn hiệu chuẩn (calibrate) lại cảm biến. |

---

## 2. Các Mẫu Hội Thoại Thực Tế Giữa Kỹ Sư IT MES & Hiện Trường

### Tình huống 1: Dừng chuyền khẩn cấp (产线停线叫修)
* **Tổ trưởng (领班 - Lǐngbān):**
  > IT吗？快来1号组装线看一下！MES系统整个卡死了，所有工位都扫不进，产线已经停了5分钟了！
  > *(IT hả? Mau qua dây chuyền lắp ráp số 1 xem giúp với! Hệ thống MES đơ toàn bộ rồi, tất cả các trạm đều không quét mã được, chuyền đã dừng 5 phút rồi đấy!)*

* **Kỹ sư IT MES:**
  > 收到，我马上带电脑过去！请问工控机右下角的网络图标是正常的吗？系统弹出了什么错误代码？
  > *(Nhận thông tin rồi, tôi xách máy tính qua ngay! Cho tôi hỏi biểu tượng mạng góc dưới bên phải máy tính công nghiệp có bình thường không? Hệ thống hiện mã lỗi gì thế?)*

* **Tổ trưởng:**
  > 提示“无法连接到数据库服务器，连接超时”。
  > *(Nó báo "Không thể kết nối đến máy chủ cơ sở dữ liệu, kết nối quá thời gian".)*

* **Kỹ sư IT MES (Sau khi kiểm tra switch mạng):**
  > 查到原因了，是产线交换机电源插头松了。我已经重新插好了，服务重启完毕。请叫作业员重新扫一个试试。
  > *(Tìm ra nguyên nhân rồi, là do phích cắm nguồn switch mạng của chuyền bị lỏng. Tôi cắm lại và khởi động lại dịch vụ rồi. Bác gọi công nhân quét thử lại 1 cái xem được chưa.)*

* **Tổ trưởng:**
  > 扫进去了！OK rồi, 谢谢啊！
  > *(Quét vào được rồi! OK rồi, cảm ơn nhé!)*

---

### Tình huống 2: Mở khóa chuyền & Hỗ trợ sửa hàng (解锁与返工)
* **Chủ quản chất lượng (品保主管 - QA Manager):**
  > IT工程师，今天这条产线直通率太低了，系统自动触发了“防呆锁线”。现在品质问题已经排查清楚了，麻烦你把线解锁一下。
  > *(Kỹ sư IT ơi, hôm nay tỷ lệ FPY của chuyền này thấp quá, hệ thống tự động kích hoạt "khóa chuyền chống sai sót". Bây giờ lỗi chất lượng đã điều tra xong rồi, phiền bạn mở khóa chuyền giùm tôi.)*

* **Kỹ sư IT MES:**
  > 好的，主管。请您在MES系统里先发起“异常解锁申请”，品质主管签完核准流程后，我后台马上给您放开权限。
  > *(Vâng thưa chủ quản. Phiền anh lên hệ thống MES tạo "Đơn xin mở khóa bất thường" trước, sau khi Chủ quản chất lượng ký duyệt xong, tôi ở back-end sẽ lập tức mở quyền cho anh ngay.)*

---

## 3. Mẫu Sổ Bàn Giao Ca Trực IT MES (IT MES 交接班记录)

Trong nhà máy làm việc theo ca Ngày (白班) và ca Đêm (夜班), kỹ sư IT phải ghi chép nhật ký bàn giao ca rõ ràng:

```text
=============================================================
             IT MES 现场运维交接班日志 (NHẬT KÝ GIAO CA)
=============================================================
日期 (Ngày): 2026年11月14日
班次 (Ca trực): 白班 (Ca ngày: 08:00 - 20:00) ➔ 交接给: 夜班 (Ca đêm)
交接人 (Người giao ca): 阮工程师 (Kỹ sư Nguyễn)
接班人 (Người nhận ca): 陈工程师 (Kỹ sư Trần)

1. 产线运行概况 (Tình hình vận hành chuyền):
   - 组装1线 (Chuyền lắp ráp 1): 正常运行 (Bình thường), 无停线 (Không dừng chuyền).
   - SMT 2线 (Chuyền SMT 2): 14:20 发生接口超时，停线8分钟。已排查为网络交换机端口松动，修复后恢复正常。

2. 待跟进事项 (Các việc tồn đọng cần ca đêm theo dõi):
   - 包装站 Zebra 打印机 (11号工位) 打印头有轻微断针，已向设备科申请备件，夜班请留意更换。
   - 工单 WO20261114008 预计凌晨02:00 完成，需协助生产主管切换新工单 (换线 / Change Model)。

3. 服务器与数据库状态 (Trạng thái Server & Database):
   - MES 应用服务器 CPU 使用率: 35%，运行良好。
   - Oracle 数据库备份正常，存储空间剩余 42%。
=============================================================
```

---

## 4. Báo Cáo Phân Tích Nguyên Nhân Gốc Rễ Sự Cố (RCA 报告 / 8D 模板)

Khi sự cố làm dừng chuyền trên 15 phút, bạn sẽ phải viết báo cáo nguyên nhân bằng tiếng Trung:

| Đề Mục Báo Cáo | Tiếng Trung Chuẩn Mực | Mẫu Điền Thông Tin |
| :--- | :--- | :--- |
| **Tên sự cố** | **异常事件名称** | SMT线MES数据上传失败导致停线异常 |
| **Thời gian dừng chuyền** | **停线时长** | 2026-11-14 10:15 至 10:35（共20分钟） |
| **Mô tả hiện tượng** | **现象描述** | AOI检测设备测试完毕后，数据无法调用WebService接口，提示HTTP 500错误。 |
| **Nguyên nhân gốc rễ (Root Cause)** | **根本原因分析** | MES中间件服务器连接池 (Connection Pool) 耗尽，未及时释放数据库连接。 |
| **Biện pháp khẩn cấp (Containment)** | **应急临时措施** | 重启 MES 中间件服务，临时将连接池最大连接数从200调整至500。 |
| **Biện pháp phòng ngừa (Long-term Action)**| **长期改善预防措施** | 优化测试数据上传的存储过程代码，增加连接自动超时回收机制，并在下周三低峰期发布补丁。 |
