<!doctype html>
<html lang="en">

<head>
  <title>Title</title>
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

  <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"
    integrity="sha256-6rXZCnFzbyZ685/fMsqoxxZz/QZwMnmwHg+SsNe+C/w=" crossorigin="anonymous"></script>
  <script src="https://www.gstatic.com/firebasejs/7.14.4/firebase.js"></script>
  <script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-performance.js"></script>
</head>

<body>

  <script>
    var firebaseConfig = {
      apiKey: "AIzaSyBNx49MNM4rT5OGMHc2aStUu5aOdPwth0Y",
      authDomain: "proyek-akhir-5b2d1.firebaseapp.com",
      databaseURL: "https://proyek-akhir-5b2d1.firebaseio.com",
      projectId: "proyek-akhir-5b2d1",
      storageBucket: "proyek-akhir-5b2d1.appspot.com",
      messagingSenderId: "529577807896",
      appId: "1:529577807896:web:ce1edba2f4cfc30cc8b36d",
      measurementId: "G-GW8DTPPSEH"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var mainRef = firebase.database();

    var queryChild = mainRef.ref("lab/").child("-MAdNJe41py9ln2-xOQk/data_listrik").orderByChild("waktu");
    queryChild.once("value").then(function(snapshotChild) {
      if (snapshotChild.exists()) {
        alert("Huehehe");
      } else {

      }

    });
  </script>
  <script>

  </script>


  <body>
  </body>

</html>