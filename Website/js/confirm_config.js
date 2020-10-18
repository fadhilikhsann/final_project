function checkConfirm() {
    if (document.getElementById("idInputPassword").value !== "" && document.getElementById(
        "idInputConfirmPassword").value !== "") {
        if (document.getElementById("idInputPassword").value === document.getElementById(
            "idInputConfirmPassword").value) {
                alert("masuk")
            updatePassword(document.getElementById("idInputConfirmPassword").value);
        } else {
            alert("Konfirmasi password masih belum sesuai");
        }
    } else {
        alert("Masih terdapat input yang kosong");
    }
}

function updatePassword(newPass) {
    var query = mainRef.ref("user").orderByChild("id_user").equalTo(Cookies.get("id_plp"));
    query.once("value").then(function (snapshot) {
        if (snapshot.exists()) {
            var key = "";
            snapshot.forEach(function (childSnapshot) {
                key = childSnapshot.key;
            });
            var confirmPass = CryptoJS.MD5(newPass);
            mainRef.ref("user/" + key).child("password").set(confirmPass.toString());
            mainRef.ref("user/" + key).child("confirm").set("TRUE");

            setCookie(Cookies.get("id_plp"), Cookies.get("nama_plp"), Cookies.get("email_plp"),  Cookies.get("telp_plp"), "TRUE", Cookies.get("status"));
            alert("Password Berhasil diubah");
            location.href = "index.php";
        } else {
            alert('Data tidak ditemukan');
        }
    });
}
function setCookie(id_plp, nama_plp, email_plp, telp_plp, confirm, status) {
    Cookies.set('id_plp', id_plp, {
        expires: 7, path: ''
    });
    Cookies.set('nama_plp', nama_plp, {
        expires: 7, path: ''
    });
    Cookies.set('email_plp', email_plp, {
        expires: 7, path: ''
    });
    Cookies.set('telp_plp', telp_plp, {
        expires: 7, path: ''
    });
    Cookies.set('confirm', confirm, {
        expires: 7, path: ''
    });
    Cookies.set('status', status, {
        expires: 7, path: ''
    });
}