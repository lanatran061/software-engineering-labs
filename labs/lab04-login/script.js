const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Ngăn trang reload sau khi submit

  // Lấy giá trị username và password, xóa khoảng trắng nếu có
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim(); 

  if (username === "" || password === "") {
    errorMsg.textContent = "Lỗi! Vui lòng nhập đầy đủ thông tin Username và Password!";
  } else {
    errorMsg.textContent = "";
    alert("Xin chào " + username + "! Bạn đã đăng nhập thành công.");
  }
});

function cancelLogin() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("remember").checked = false;
  errorMsg.textContent = "";
  alert("Form đã được reset!");

}
