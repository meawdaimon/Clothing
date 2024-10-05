function validateForm() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    
    if (password !== confirmPassword) {
        alert("รหัสผ่านไม่ตรงกัน");
        return false;
    }

    
    alert("ลงทะเบียนสำเร็จ! คุณสามารถเข้าสู่ระบบได้เลย");
    return true;
}
