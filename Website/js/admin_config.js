function forceLower(strInput) {
    strInput.value = strInput.value.toLowerCase();
}
getData();
function getData() {
    var query = mainRef.ref("lab");
    query.on('value', function (snapshot) {
        $('#idTableData tbody').empty();
        if (snapshot.exists()) {

            var auth = "";
            var kode_lab = "";
            var nama_lab = "";

            snapshot.forEach(function (childSnapshot) {
                auth = childSnapshot.key;
                kode_lab = childSnapshot.child("id_lab").val();
                nama_lab = childSnapshot.child("nama_lab").val();
                getDataChild(auth, kode_lab, nama_lab);
            });
        }
    });
}
function getDataChild(auth, kode_lab, nama_lab) {
    var id_user = "";
    var nama_user = "";
    var email_user = "";
    var telp_user = "";
    var pass_user = "";
    var queryChild = mainRef.ref("user").orderByChild("id_lab").equalTo(kode_lab.toString());
    queryChild.once("value").then(function (snapshotChild) {
        if (snapshotChild.exists()) {
            snapshotChild.forEach(function (childSnapshotChild) {
                id_user = childSnapshotChild.child("id_user").val();
                nama_user = childSnapshotChild.child("nama_lengkap").val();
                email_user = childSnapshotChild.child("email").val();
                telp_user = childSnapshotChild.child("no_hp").val();
                if (childSnapshotChild.child("confirm").val() === "FALSE") {
                    pass_user = childSnapshotChild.child("password").val();
                } else {
                    pass_user = "<span style='color:#00826c;'>Sudah konfirmasi</span>";
                }
            });
            $('#idTableData tbody').prepend('<tr />').children('tr:first').append('<td class="align-middle"><small>' + auth + '</small></td><td class="align-middle"><small>' + kode_lab + '</small></td><td class="align-middle"><small>' + nama_lab + '</small></td><td class="align-middle"><small>' + id_user + '</small></td><td class="align-middle"><small>' + nama_user + '</small></td><td class="align-middle"><small>' + email_user + '</small></td><td class="align-middle"><small>' + telp_user + '</small></td><td class="align-middle"><small>' + pass_user + '</small></td><td class="align-middle"><button type="button" style="color:#fff;width:100px;" class="mr-2 mt-0 btn btn-secondary btn-sm rounded-pill" onclick="deletePLP(\'' + id_user + '\');"><span style="color:#fff;" >Hapus PLP</span></button><button type="button" style="width:100px;" class=" mt-0 btn btn-danger btn-sm rounded-pill" onclick="deleteLab(\'' + kode_lab + '\');" ><span>Hapus Lab</span></button></td>');
        }
        else {
            id_user = "-";
            nama_user = "-";
            email_user = "-";
            telp_user = "-";
            pass_user = "-";
            $('#idTableData tbody').prepend('<tr />').children('tr:first').append('<td class="align-middle"><small>' + auth + '</small></td><td class="align-middle"><small>' + kode_lab + '</small></td><td class="align-middle"><small>' + nama_lab + '</small></td><td class="align-middle"><small>' + id_user + '</small></td><td class="align-middle"><small>' + nama_user + '</small></td><td class="align-middle"><small>' + email_user + '</small></td><td class="align-middle"><small>' + telp_user + '</small></td><td class="align-middle"><small>' + pass_user + '</small></td><td class="align-middle"><button type="button" onclick="" style="color:#fff;width:100px;" class="mr-2 mt-0 btn btn-info btn-sm rounded-pill"><span style="color:#fff;">Tambah PLP</span></button><button type="button" style="width:100px;" class=" mt-0 btn btn-danger btn-sm rounded-pill" onclick="deleteLab(\'' + kode_lab + '\');"><span>Hapus Lab</span></button></td>');
        }

    });
}
function deletePLP(user_id) {
    var r = confirm("Apakah anda yakin akan menghapus data PLP dengan ID " + user_id + "?");
    if (r == true) {
        var query = mainRef.ref("user").orderByChild("id_user").equalTo(user_id.toString());
        query.once("value").then(function (snapshot) {
            if (snapshot.exists()) {
                var queryChild = mainRef.ref("lab").orderByChild("id_plp").equalTo(user_id.toString());
                queryChild.once("value").then(function (snapshot) {
                    if (snapshot.exists()) {
                        var keyChild = "";
                        snapshot.forEach(function (childSnapshot) {
                            keyChild = childSnapshot.key;
                        });
                        mainRef.ref("lab/" + keyChild).child("id_plp").set("null");
                    } else {
                        alert('Data lab tidak ditemukan');
                    }
                });
                var key = "";
                snapshot.forEach(function (childSnapshot) {
                    key = childSnapshot.key;
                });
                mainRef.ref("user/" + key).remove();
                alert('Data user dengan ID ' + user_id + ' telah dihapus');
            }
            else {
                alert('User dengan ID ' + user_id + ' tidak ditemukan');
            }
        });
    } else {
    }
    //getData();
}
function deleteLab(kode_lab) {
    var r = confirm("Apakah anda yakin akan menghapus data Lab dengan Kode " + kode_lab + "?\nHal ini juga akan menghapus data PLP pada Lab tersebut.");
    if (r == true) {
        var query = mainRef.ref("lab").orderByChild("id_lab").equalTo(kode_lab.toString());
        query.once("value").then(function (snapshot) {
            if (snapshot.exists()) {
                var queryChild = mainRef.ref("user").orderByChild("id_lab").equalTo(kode_lab.toString());
                queryChild.once("value").then(function (snapshot) {
                    if (snapshot.exists()) {
                        var keyChild = "";
                        snapshot.forEach(function (childSnapshot) {
                            keyChild = childSnapshot.key;
                        });
                        mainRef.ref("user/" + keyChild).remove();
                    } else {
                        alert('Data PLP lab ' + kode_lab + ' akan terhapus');
                    }
                });
                var key = "";
                snapshot.forEach(function (childSnapshot) {
                    key = childSnapshot.key;
                });
                mainRef.ref("lab/" + key).remove();
                alert('Data lab ' + kode + ' telah dihapus');
            }
            else {
                alert('Data lab ' + kode_lab + ' tidak ada');
            }
        });
    }
}

function checkForm() {
    if (checkFormLab() && checkFormPLP()) {
        checkLab();
    }
}
function checkFormLab() {
    if (
        document.getElementById("idInputKodeLab").value !== "" &&
        document.getElementById("idInputNamaLab").value !== ""
    ) {
        return true;
    } else {
        alert('Masih terdapat input pada data lab yang kosong');
        return false;
    }
}
function checkFormPLP() {
    if (
        document.getElementById("idInputIdPlp").value !== "" &&
        document.getElementById("idInputNamaLengkap").value !== "" &&
        document.getElementById("idInputEmail").value !== "" &&
        document.getElementById("idInputAlamat").value !== "" &&
        document.getElementById("idInputNoHp").value !== ""
    ) {
        return true;
    } else {
        alert('Masih terdapat input pada data PLP yang kosong');
        return false;
    }
}
function checkLab() {

    var query = mainRef.ref("lab").orderByChild("id_lab").equalTo(document.getElementById("idInputKodeLab").value);
    query.once("value").then(function (snapshot) {
        if (snapshot.exists()) {
            alert('Lab dengan kode ' + document.getElementById("idInputKodeLab").value + ' sudah ada');
        }
        else {
            checkPLP(true);
        }
    });

}
function checkPLP(labFirst) {
    var query = mainRef.ref("user").orderByChild("id_user").equalTo(document.getElementById("idInputIdPlp").value);
    query.once("value").then(function (snapshot) {
        if (snapshot.exists()) {
            alert('User dengan ID ' + document.getElementById("idInputIdPlp").value + ' sudah ada');

        }
        else {

            if (labFirst) {

                addData(true, true);
            } else {
                addData(false, true);
            }
        }
    });

}
function addData(addLab, addPLP) {
    var firstPass = CryptoJS.MD5(document.getElementById("idInputIdPlp").value + document.getElementById("idInputKodeLab").value + document.getElementById("idInputEmail").value);
    if (addLab && addPLP) {

        var refKey = mainRef.ref("lab").push({
            id_lab: document.getElementById("idInputKodeLab").value,
            nama_lab: document.getElementById("idInputNamaLab").value,
            id_plp: document.getElementById("idInputIdPlp").value

        });
        mainRef.ref("user").push({
            id_user: document.getElementById("idInputIdPlp").value,
            email: document.getElementById("idInputEmail").value,
            password: (firstPass.toString()).substring(8, 15),
            nama_lengkap: document.getElementById("idInputNamaLengkap").value,
            id_lab: document.getElementById("idInputKodeLab").value,
            no_hp: document.getElementById("idInputNoHp").value,
            alamat: document.getElementById("idInputAlamat").value,
            status: "plp",
            confirm: "FALSE"
        });
    } else if (!addLab && addPLP) {
        mainRef.ref("user").push({
            id_user: document.getElementById("idInputIdPlp").value,
            email: document.getElementById("idInputEmail").value,
            password: md5(document.getElementById("idInputIdPlp").value + document.getElementById("idInputKodeLab").value + document.getElementById("idInputEmail").value),
            nama_lengkap: document.getElementById("idInputNamaLengkap").value,
            id_lab: document.getElementById("idInputKodeLab").value,
            no_hp: document.getElementById("idInputNoHp").value,
            alamat: document.getElementById("idInputAlamat").value,
            status: "plp",
            confirm: "FALSE"
        });
    }

    alert("Data berhasil ditambahkan");
}
function logout() {
    var r = confirm("Apakah anda yakin ingin keluar dari halaman ini?");
    if (r == true) {
        Cookies.remove('id_plp', {
            path: ''
        });
        Cookies.remove('nama_plp', {
            path: ''
        });
        Cookies.remove('email_plp', {
            path: ''
        });
        Cookies.remove('telp_plp', {
            path: ''
        });
        Cookies.remove('confirm', {
            path: ''
        });
        Cookies.remove('status', {
            path: ''
        });
        location.href = "login.php";
    }
}