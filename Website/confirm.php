<!doctype html>
<html lang="en">

<head>
    <title>Konfirmasi Akun</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    </script>
    <script src="https://www.gstatic.com/firebasejs/6.2.0/firebase.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"
        integrity="sha256-6rXZCnFzbyZ685/fMsqoxxZz/QZwMnmwHg+SsNe+C/w=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/config.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>
    <script>
        if (!Cookies.get('id_plp') && !Cookies.get('status') && !Cookies.get('confirm')) {
            location.href = "login.php";
        } else if (Cookies.get('id_plp') && Cookies.get('status') === "plp" && Cookies.get(
                'confirm') ===
            "TRUE") {
            location.href = "index.php";
        } else if (Cookies.get('id_plp') && Cookies.get('status') === "admin" && Cookies.get(
                'confirm') ===
            "TRUE") {
            location.href = "admin.php";
        }
    </script>
</head>

<body style="background:#f6f6f6;">
    <div class="container-fluid" style="display: flex;justify-content: center;align-items: center;min-height: 640px;">

        <div class="card" style="width: 24rem;margin:0 auto;border:0;">

            <div class="card-body" style="padding:32px 32px 32px 32px;">
                <h5 class="card-title mb-4" style="text-align:center;">Silahkan Ubah Password Anda</h5>
                <hr>
                <div class="card mt-4">
                    <div class="card-body">
                        <p style="text-align: center;" class="mb-2"><small class="text-muted mb-0">Hal ini bertujuan
                                agar anda memiliki password yang hanya diketahui oleh anda sendiri tanpa diketahui oleh
                                siapapun termasuk admin.
                                <hr>
                                <p style="text-align: center;">Pastikan bahwa password baru anda masih dapat anda ingat
                                    untuk kedepannya karena setelah ini <br><b>password tidak akan dapat diubah
                                        kembali.</b></p>
                            </small></p>
                    </div>
                </div>
                <div class="form-group mt-4">
                    <input type="password" class="form-control rounded-pill" id="idInputPassword"
                        aria-describedby="emailHelp" style="text-align:center;"
                        placeholder="Masukkan password baru anda">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control rounded-pill" id="idInputConfirmPassword"
                        placeholder="Konfirmasi password baru" style="text-align:center;">
                </div>
                <button type="submit" class="btn btn-warning btn-block rounded-pill"
                    style="color:#fff;text-align:center;" onclick="checkConfirm()">Submit</button>


            </div>

        </div>

    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->

    <script type="text/javascript" src="js/confirm_config.js"></script>

</body>

</html>