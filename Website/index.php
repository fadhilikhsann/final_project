<!doctype html>
<html lang="en">

<head>
  <title>Beranda</title>
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
  <!-- <script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js"></script> !-->
  <script src="https://www.gstatic.com/firebasejs/6.2.0/firebase.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-GW8DTPPSEH"></script>
  <!-- <script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-performance.js"></script> !-->
  <script type="text/javascript" src="js/config_performance.js"></script>
  <script type="text/javascript" src="js/config.js"></script>
  <script>
    if (!Cookies.get("id_plp") && !Cookies.get("status") && !Cookies.get("confirm")) {
      location.href = "login.php";
    } else if (Cookies.get("id_plp") && Cookies.get("status") === "admin" && Cookies.get(
        "confirm") ===
      "TRUE") {
      location.href = "admin.php";
    }
  </script>
</head>

<body style="background:#f6f6f6;">
  <script type="text/javascript">
    if (!Cookies.get('id_plp') && !Cookies.get('status') && !Cookies.get('confirm')) {
      location.href = "login.php";
    }
  </script>

  <nav class="navbar navbar-light" style="background:#fff;">
    <a class="navbar-brand mt-2 mb-2" href="#">
      <img src="img/logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
      &nbsp;Laboratory
    </a>
    <form class="form-inline my-2 my-lg-0">
      <span class="navbar-text mr-2" style="text-align:right;">
        <b id="hiUser">Hi</b>
      </span>
      <button class="btn btn-outline-danger btn-sm rounded-pill" type="submit"
        style="padding-left:16px;padding-right: 16px;" onclick="logout()">LOGOUT</button>
    </form>
  </nav>

  <!--Keterangan Lab!-->
  <div class="container-fluid mt-4">
    <div class="alert alert-success" style="border:0;" role="alert">
      Anda masuk sebagai <b id="enterAs">-</b>
    </div>
  </div>

  <!--Keterangan Grafik!-->
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-md-6 col-12">
        <div class="card text-center rounded" style="background:#5a6268;border:0;color:#fff;">
          <div class="card-body">
            <div class="row">
              <div class="col-12 col-md-6">
                <label>Tampilkan data </label>
                <div class="input-group d-flex justify-content-center input-group-sm">
                  <select class="custom-select" id="idSelectLastHours" style="border:0;">
                    <option selected>1</option>
                    <option>3</option>
                    <option>6</option>
                    <option>12</option>
                  </select>
                  <div class="input-group-append">
                    <label class="input-group-text" style="border:0;" for="inputGroupSelect02">jam terakhir</label>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <label>Tampilkan data dalam bentuk</label>
                <div class="btn-toolbar d-flex justify-content-center" role="toolbar"
                  aria-label="Toolbar with button groups">
                  <div class="btn-group mr-2" role="group" aria-label="Third group">
                    <button onclick="toGraph()" id="buttonGraph" type="button"
                      class="btn btn-info btn-block rounded-pill" style="padding:0 24px 0 24px;">Grafik</button>
                  </div>
                  <div class="btn-group" role="group" aria-label="Third group">
                    <button onclick="toTable()" id="buttonTable" type="button"
                      class="btn btn-light btn-block rounded-pill" style="padding:0 24px 0 24px;">Tabel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-12">
        <div class="card text-center rounded" style="background:#5a6268;border:0;color:#fff;">
          <div class="card-body">
            <label>Lihat data 12 jam pada tanggal</label>
            <div class="input-group input-group-sm">
              <input id="idInputDate" style="border:0;" type="date" class="form-control" min="2001-01-01"
                max="2012-12-12" placeholder="Recipient's username" aria-label="Recipient's username"
                aria-describedby="button-addon2">
              <div class="input-group-append">
                <button style="border:0;" class="btn btn-info" type="button" id="button-addon2"
                  onclick="viewSpecific()"><img src="img/icon_search.svg" alt=""></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-12">
        <div class="card text-center rounded" style="background:#5a6268;border:0;color:#fff;height: 100%;">
          <div class="card-body">
            <label>Ekspor semua data ke bentuk .csv</label>
            <button type="button" class="btn btn-info rounded-pill" style="padding:0 24px 0 24px;"
              onclick="export2csv()">Ekspor</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Tabel !-->
  <div class="container-fluid mt-4" id="idShowTable">
    <div class="card text-center rounded" style="border:0;">
      <div class="card-body">
        <h5 class="card-title mt-2">Tabel Data Penggunaan Listrik</h5>
        <table id="idTableData" class="table table-striped table-bordered mt-4">
          <thead>
            <tr>
              <th scope="col">Waktu</th>
              <th scope="col">Tegangan (V)</th>
              <th scope="col">Arus (A)</th>
              <th scope="col">Daya (W)</th>
              <th scope="col">Energi (Wh)</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- Tabel !-->



  <!-- Grafik Tegangan !-->
  <div class="container-fluid mt-4" id="idShowGraphVoltage">
    <div class="card text-center rounded" style="border:0;">
      <div class="card-body">
        <h5 class="card-title mt-2">Grafik Tegangan vs Waktu</h5>
        <canvas id="myVoltage" class="mt-2"></canvas><br>
        <!--ganti!-->
      </div>
    </div>
  </div>
  <!-- Grafik Tegangan !-->
  <!-- Grafik Arus !-->
  <div class="container-fluid mt-4" id="idShowGraphCurrent">
    <div class="card text-center rounded" style="border:0;">
      <div class="card-body">
        <h5 class="card-title mt-2">Grafik Arus vs Waktu</h5>
        <canvas id="myCurrent" class="mt-2"></canvas><br>
        <!--ganti!-->
      </div>
    </div>
  </div>
  <!-- Grafik Arus !-->
  <!-- Grafik Daya !-->
  <div class="container-fluid mt-4" id="idShowGraphPower">
    <div class="card text-center rounded" style="border:0;">
      <div class="card-body">
        <h5 class="card-title mt-2">Grafik Daya vs Waktu</h5>
        <canvas id="myPower" class="mt-2"></canvas><br>
        <!--ganti!-->

      </div>
    </div>
  </div>
  <!-- Grafik Daya !-->
  <!-- Grafik Energi !-->
  <div class="container-fluid mt-4" id="idShowGraphEnergy">
    <div class="card text-center rounded" style="border:0;">
      <div class="card-body">
        <h5 class="card-title mt-2">Grafik Energi vs Waktu</h5>
        <canvas id="myEnergy" class="mt-2"></canvas><br>
        <!--ganti!-->

      </div>
    </div>
  </div>
  <!-- Grafik Data !-->
  <div class="container-fluid mt-4" id="idShowGraphData">
    <div class="card text-center rounded" style="border:0;">
      <div class="card-body">
        <h5 class="card-title mt-2">Grafik Perkiraan Delay Pengiriman Data dari Hardware</h5>
        <canvas id="myData" class="mt-2"></canvas><br>
        <!--ganti!-->

      </div>
    </div>
  </div>
  <!-- Grafik Data !-->

  <script type="text/javascript" src="js/index_config.js"></script>
  <footer class="" style="text-align:center;">
    <p class="mt-4 mb-4">Copyright &copy; 2020 Final Project by Fadhil Ikhsanta
    </p>
  </footer>
</body>

</html>