<!doctype html>
<html lang="en">

<head>
    <title>Admin</title>
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
    <script src="https://www.gstatic.com/firebasejs/6.2.0/firebase.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"
        integrity="sha256-6rXZCnFzbyZ685/fMsqoxxZz/QZwMnmwHg+SsNe+C/w=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/config.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>
    <script>
        if (!Cookies.get("id_plp") && !Cookies.get("status") && !Cookies.get("confirm")) {
            location.href = "login.php";
        } else if (Cookies.get("id_plp") && Cookies.get("status") === "plp" && Cookies.get(
                "confirm") ===
            "TRUE") {
            location.href = "index.php";
        }
    </script>

</head>

<body style="background:#f6f6f6;">

    <nav class="navbar navbar-light" style="background:#fff;">
        <a class="navbar-brand mt-2 mb-2" href="#">
            <img src="img/logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
            &nbsp;Laboratory
        </a>
        <form class="form-inline my-2 my-lg-0">
            <span class="navbar-text mr-2" style="text-align:right;">
                <b>Hi, Admin -</b>
            </span>
            <button class="btn btn-outline-danger btn-sm rounded-pill" type="submit"
                style="padding-left:16px;padding-right: 16px;" onclick="logout()">LOGOUT</button>
        </form>
    </nav>

    <!-- Tabel !-->
    <div class="container-fluid mt-4" id="idShowTable">
        <div style="float:right;">
            <button type="button" style="padding-left: 16px;padding-right:16px;"
                class=" mt-0 btn btn-dark btn-sm rounded-pill" data-toggle="modal" data-target="#exampleModal">
                <div style="display: flex;align-items:center;"><img src="img/icon_add.svg" alt=""><span>&nbsp;Data
                        Lab dan PLP</span></div>
            </button>
        </div>
        <br>
        <div class="card text-center rounded mt-4" style="border:0;">
            <div class="card-body">
                <h5 class="card-title mt-2">DAFTAR PLP LABORATORIUM</h5>
                <table id="idTableData" class="table table-striped table-bordered mt-4">
                    <thead>
                        <tr>
                            <th colspan="3" scope="col">
                                <h6 style="margin:0;">Laboratorium</h6>
                            </th>
                            <th colspan="5" scope="col">
                                <h6 style="margin:0;">Pranata Laboratorium Pendidikan (PLP)</h6>
                            </th>
                            <th scope="col">
                                <h6 style="margin:0;">Lainnya</h6>
                            </th>
                        </tr>
                        <tr>
                            <th scope="col">
                                <h6 style="margin:0;">Autentikasi Hardware</h6>
                            </th>
                            <th scope="col">
                                <h6 style="margin:0;">Kode</h6>
                            </th>
                            <th scope="col">
                                <h6 style="margin:0;">Nama</h6>
                            </th>
                            <th scope="col">
                                <h6 style="margin:0;">ID PLP</h6>
                            </th>
                            <th scope="col">
                                <h6 style="margin:0;">Nama</h6>
                            </th>
                            <th scope="col">
                                <h6 style="margin:0;">Email</h6>
                            </th>
                            <th scope="col">
                                <h6 style="margin:0;">Telepon</h6>
                            </th>
                            <th scope="col">
                                <h6 style="margin:0;">Password</h6>
                            </th>
                            <th scope="col">
                                <h6 style="margin:0;">Aksi</h6>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- Tabel !-->

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Tambah Data Lab dan PLP</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Kode Lab</label>
                            <input type="text" class="form-control form-control-sm" id="idInputKodeLab" required
                                aria-describedby="emailHelp">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Nama Lab</label>
                            <input type="text" class="form-control form-control-sm" id="idInputNamaLab" required
                                aria-describedby="emailHelp">
                        </div>

                        <h5 class="mt-4">Data PLP</h5>
                        <hr>
                        <div class="form-group mt-2">
                            <label for="exampleInputEmail1">ID PLP</label>
                            <input type="text" class="form-control form-control-sm" id="idInputIdPlp" required
                                aria-describedby="emailHelp">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Nama Lengkap</label>
                            <input type="text" class="form-control form-control-sm" id="idInputNamaLengkap" required
                                aria-describedby="emailHelp">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" class="form-control form-control-sm" id="idInputEmail" required
                                aria-describedby="emailHelp" onkeyup="return forceLower(this);">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">No. Telepon</label>
                            <input type="number" class="form-control form-control-sm" id="idInputNoHp" required
                                aria-describedby="emailHelp">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Alamat</label>
                            <input type="text" class="form-control form-control-sm" id="idInputAlamat" required
                                aria-describedby="emailHelp">
                        </div>
                        <div class="row mt-4">
                            <div class="col-6">
                                <button type="button" class="btn btn-secondary btn-block"
                                    data-dismiss="modal">Batal</button>
                            </div>
                            <div class="col-6">
                                <button type="button" onclick="checkForm()"
                                    class="btn btn-info btn-block">Simpan</button>
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    </div>



    <script type="text/javascript" src="js/admin_config.js"></script>
    <footer class="" style="text-align:center;">
        <p class="mt-4 mb-4">Copyright &copy; 2020 Final Project by Fadhil Ikhsanta
        </p>
    </footer>
</body>

</html>