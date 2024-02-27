function openRegisterForm() {
  window.location.href = "register.html";
}

function validateLoginForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Vui lòng nhập tên đăng nhập và mật khẩu.");
    return false;
  }

  return true;
}

function validateRegisterForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  if (username === "" || password === "" || confirmPassword === "") {
    alert("Vui lòng điền đầy đủ thông tin.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Mật khẩu xác nhận không khớp.");
    return false;
  }

  return true;
}
