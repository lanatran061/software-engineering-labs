# Sequence Diagram – Rút tiền ATM

## Đối tượng
- **Khách hàng**: Người thao tác trực tiếp với máy ATM
- **ATM**: Máy nhận yêu cầu, hiển thị giao diện, menu, nhả tiền và biên lái
- **Ngân hàng**: Hệ thống backend xác thực PIN và xử lý giao dịch
- **Tài khoản**: Lưu và kiểm tra số dư, cập nhật khi rút tiền

## Luồng chính
1. Khách hàng đưa thẻ, nhập PIN
2. ATM gửi thông tin sang Ngân hàng để xác thực
3. Ngân hàng trả kết quả xác thực
4. Khách hàng chọn “Rút tiền”, nhập số tiền
5. ATM gửi yêu cầu kiểm tra số dư tới Ngân hàng
6. Ngân hàng kiểm tra với Tài khoản → trả kết quả
7. Nếu hợp lệ → ATM trừ số dư, nhả tiền, in biên lai

## Thông điệp trao đổi
- **Khách hàng → ATM**: Đút thẻ, nhập PIN, chọn “Rút tiền”, nhập số tiền  
- **ATM → Ngân hàng**: Yêu cầu xác thực PIN, yêu cầu kiểm tra số dư  
- **Ngân hàng → ATM**: Trả kết quả xác thực PIN, trả xác nhận số dư hợp lệ  
- **Ngân hàng ↔ Tài khoản**: Kiểm tra số dư, cập nhật trừ tiền  
- **ATM → Khách hàng**: Nhả tiền mặt, in biên lai