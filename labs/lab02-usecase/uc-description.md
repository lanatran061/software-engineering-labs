# Use Case Descriptions – ATM System

## UC-01: Đăng nhập
- **Actor:** Khách hàng
- **Mục tiêu:** Vào được hệ thống ATM bằng thẻ và mã PIN
- **Tiền điều kiện:**
  - Thẻ ATM hợp lệ
  - Máy ATM hoạt động bình thường
  - Mã PIN chính xác
- **Hậu điều kiện:**
  - Người dùng vào được menu chính
  - Hoặc thẻ bị khóa sau 3 lần nhập PIN sai
- **Luồng sự kiện chính:**
  1. Khách hàng đưa thẻ vào khe máy
  2. ATM yêu cầu nhập PIN
  3. Khách hàng nhập PIN
  4. ATM gửi yêu cầu xác thực tới Ngân hàng
  5. Ngân hàng xác nhận → hiển thị menu chính
- **Ngoại lệ:**
  - PIN sai → cho nhập lại thêm 2 lần, sau đó khóa thẻ
  - Thẻ không hợp lệ → từ chối đăng nhập

## UC-02: Rút tiền
- **Actor:** Khách hàng
- **Mục tiêu:** Rút tiền mặt từ tài khoản
- **Tiền điều kiện:**
  - Người dùng đã đăng nhập
  - ATM còn đủ tiền, hoạt động bình thường
- **Hậu điều kiện:**
  - Tài khoản bị trừ số tiền rút
  - ATM nhả tiền và in biên lai
  - Ngân hàng lưu giao dịch
- **Luồng sự kiện chính:**
  1. Khách hàng chọn “Rút tiền”
  2. Nhập số tiền cần rút
  3. ATM gửi yêu cầu tới Ngân hàng
  4. Kiểm tra số dư → xác nhận nếu đủ, nhả tiền, in biên lai
- **Ngoại lệ:**
  - Không đủ số dư → báo lỗi, hủy giao dịch
  - ATM hết tiền → báo lỗi, hủy giao dịch
