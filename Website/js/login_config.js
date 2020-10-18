function checkLogin() {
    if (document.getElementById("idInputEmail").value !== "" && document.getElementById("idInputPassword").value !== "") {
        login();
    } else {
        alert("Terdapat input yang masih kosong");
    }
}

function login() {
    var query = mainRef.ref("user").orderByChild("email").equalTo(document.getElementById("idInputEmail").value);
    query.once("value").then(function (snapshot) {
        var password = "";
        var status = "";
        var confirm = "";
        var id_plp = "";
        var nama_plp = "";
        var email_plp = "";
        var telp_plp = "";
        if (snapshot.exists()) {
            snapshot.forEach(function (childSnapshot) {
                password = childSnapshot.child("password").val();
                status = childSnapshot.child("status").val();
                confirm = childSnapshot.child("confirm").val();
                id_plp = childSnapshot.child("id_user").val();
                nama_plp = childSnapshot.child("nama_lengkap").val();
                email_plp = childSnapshot.child("email").val();
                telp_plp = childSnapshot.child("no_hp").val();
            });
            if (confirm === "FALSE") {
                if (document.getElementById("idInputPassword").value === password) {
                    //Masuk ke halaman set password

                    setCookie(id_plp, nama_plp, email_plp, telp_plp, confirm, status);
                    location.href = "confirm.php";
                } else {
                    alert('Password masih belum benar');
                }
            } else if (confirm === "TRUE") {
                if (CryptoJS.MD5(document.getElementById("idInputPassword").value).toString() === password) {
                    if (status === "admin") {
                        //Masuk ke halaman admin
                        setCookie(id_plp, nama_plp, email_plp, telp_plp, confirm, status);
                        location.href = "admin.php";
                    }
                    else if (status === "plp") {
                        //Masuk ke halaman monitoring lab
                        setCookie(id_plp, nama_plp, email_plp, telp_plp, confirm, status);
                        location.href = "index.php";
                    }
                } else {
                    alert('Password masih belum benar');
                }
            }


        }
        else {
            alert('Akun tidak terdaftar');
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
