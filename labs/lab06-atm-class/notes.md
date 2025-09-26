# Báo cáo Lab 06 – Thiết kế Class & Package Diagram ATM

## 1. Class Diagram
- **ATM**: quản lý hoạt động (xác thực, rút tiền, nạp tiền, chuyển tiền).  
- **Card**: thông tin thẻ (số thẻ, PIN hash, trạng thái).  
- **Account**: quản lý số dư, hỗ trợ nạp/rút.  
- **Transaction**: ghi nhận chi tiết giao dịch (id, loại, số tiền, thời gian, trạng thái).  

### Quan hệ
- ATM → Card (xác thực)  
- ATM → Transaction (tạo giao dịch)  
- Card → Account (liên kết tài khoản)  
- Account → Transaction (ghi nhận giao dịch)  

## 2. Package Diagram
- **UI**: giao diện giao tiếp người dùng (LoginForm, WithdrawForm, Display).  
- **Controller**: điều phối ATM (ATMController).  
- **BankService**: xác thực & xử lý giao dịch (AuthService, TransactionService).  
- **Hardware**: phần cứng ATM (CardReader, CashDispenser, Printer).  

### Luồng xử lý
UI → Controller → BankService/Hardware  

---

## 3. Kết luận
- Hoàn thành **Class Diagram** và **Package Diagram** cho hệ thống ATM.  
- Các sơ đồ thể hiện rõ cấu trúc, quan hệ và là nền tảng cho Lab tiếp theo (phát triển module giao dịch).  

---

## 4. Artifacts nộp
- `class-atm.puml`  
- `class-atm.png`  
- `package-diagram.puml`  
- `package-diagram.png`  
- `notes.md`  
