function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === null || username.trim() === "") {
        alert("กรุณากรอก 'ชื่อผู้ใช้'");
        return false;
    }

    if (username !== "admin" || password !== "123") {
        alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
        return false;
    }

    window.location.href = "shop.html";
    return true;
}
