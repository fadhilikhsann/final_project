<!doctype html>
<html lang="en">

<head>
    <title>Masuk</title>
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

</head>

<body style="background:#f6f6f6;">
    <center>
        <button type="submit" class="btn btn-warning btn-lg rounded-pill"
            style="margin:64px;color:#fff;text-align:center;" onclick="addDummy()">Add Dummy</button>
    </center>


    <script>
        function addDummy() {
            mainRef.ref("lab/-MAL9z-qqnt5TkYRBz8Z/data_listrik").push({
                tegangan: "227.00",
                arus: "0.40",
                daya: "56.20",
                energi: "2.00",
                waktu: "2020-06-22 20:00:00"
            });
        }
    </script>

</body>

</html>