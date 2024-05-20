function validateForm() {
    var nama = document.forms["form_validasi"]["nama"].value;
    var nim = document.forms["form_validasi"]["nim"].value;
    var password = document.forms["form_validasi"]["password"].value;

    if (nama === "") {
        alert("Nama harus diisi");
        return false;
    }

    if (nim === "") {
        alert("NIM harus diisi");
        return false;
    }

    if (password.length < 6) {
        alert("Password harus terdiri dari minimal 6 karakter");
        return false;
    }

    return true; 
}
