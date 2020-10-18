var labRef = mainRef.ref("lab/");//IKI GANTIEN
var childLabRef = "";
var listener = "";
var authLab = "";
var lastView = 0;
var indexData=1;
var startMonitor = true;
setData();
function setData() {
  document.getElementById("hiUser").innerHTML = "Hi, Mr. " + Cookies.get("nama_plp") + " -";
  var query = mainRef.ref("lab").orderByChild("id_plp").equalTo(Cookies.get("id_plp"));
  query.once("value").then(function (snapshot) {

    if (snapshot.exists()) {
      var auth = "";
      var kode_lab = "";
      var nama_lab = "";
      snapshot.forEach(function (childSnapshot) {
        auth = childSnapshot.key;
        kode_lab = childSnapshot.child("id_lab").val();
        nama_lab = childSnapshot.child("nama_lab").val();
      });

      document.getElementById("enterAs").innerHTML = "PLP Lab " + kode_lab + " " + nama_lab;
      setRef(auth);
    }
  });
}

function setRef(auth) {
  authLab = auth;
  setNewGraphTable(true, 60);
}

//Begin of Voltage Chart
var ctxVoltage = document.getElementById('myVoltage');
ctxVoltage.height = '80';
var chartVoltage = new Chart(ctxVoltage, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Tegangan (V)',
      data: [],
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: '#ffa500',
      borderWidth: 2
    }]
  },
  options: {
    title: {
      display: false,
      fontSize: 24,
      text: 'Grafik Tegangan vs Waktu'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        },
        scaleLabel: {
          display: true,
          labelString: 'Tegangan (V)'
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero: false
        },
        scaleLabel: {
          display: true,
          labelString: 'Waktu (Tahun-Bulan-Tanggal Jam:Menit:Detik)'
        }
      }]
    }
  }
});


//End of Voltage Chart
//Begin of Current Chart
var ctxCurrent = document.getElementById('myCurrent'); //ganti
ctxCurrent.height = '80'; //ganti
var chartCurrent = new Chart(ctxCurrent, { //ganti
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Arus (A)', //ganti
      data: [],
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: '#00b3a2', //ganti
      borderWidth: 2
    }]
  },
  options: {
    title: {
      display: false,
      fontSize: 24,
      text: 'Grafik Arus vs Waktu' //ganti
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        },
        scaleLabel: {
          display: true,
          labelString: 'Arus (A)' //ganti
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero: false
        },
        scaleLabel: {
          display: true,
          labelString: 'Waktu (Tahun-Bulan-Tanggal Jam:Menit:Detik)'
        }
      }]
    }
  }
});


//End of Current Chart
//Begin of Power Chart
var ctxPower = document.getElementById('myPower'); //ganti
ctxPower.height = '80'; //ganti
var chartPower = new Chart(ctxPower, { //ganti
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Daya (W)', //ganti
      data: [],
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: '#ff0066', //ganti
      borderWidth: 2
    }]
  },
  options: {
    title: {
      display: false,
      fontSize: 24,
      text: 'Grafik Daya vs Waktu' //ganti
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        },
        scaleLabel: {
          display: true,
          labelString: 'Daya (W)' //ganti
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero: false
        },
        scaleLabel: {
          display: true,
          labelString: 'Waktu (Tahun-Bulan-Tanggal Jam:Menit:Detik)'
        }
      }]
    }
  }
});

//End of Power Chart
//Begin of Energy Chart
var ctxEnergy = document.getElementById('myEnergy'); //ganti
ctxEnergy.height = '80'; //ganti
var chartEnergy = new Chart(ctxEnergy, { //ganti
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Energi (Wh)', //ganti
      data: [],
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: '#2ab731', //ganti
      borderWidth: 2
    }]
  },
  options: {
    title: {
      display: false,
      fontSize: 24,
      text: 'Grafik Energi vs Waktu' //ganti
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        },
        scaleLabel: {
          display: true,
          labelString: 'Energi (Wh)' //ganti
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero: false
        },
        scaleLabel: {
          display: true,
          labelString: 'Waktu (Tahun-Bulan-Tanggal Jam:Menit:Detik)'
        }
      }]
    }
  }
});


//Begin of Data Chart
var ctxData = document.getElementById('myData'); //ganti
ctxData.height = '80'; //ganti
var chartData = new Chart(ctxData, { //ganti
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Durasi (s)', //ganti
      data: [],
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: '#6b7db3', //ganti
      borderWidth: 2
    }]
  },
  options: {
    title: {
      display: false,
      fontSize: 24,
      text: 'Grafik Perkiraan Delay Pengiriman Data' //ganti
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        },
        scaleLabel: {
          display: true,
          labelString: 'Perkiraan Durasi Pengiriman Data (s)' //ganti
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero: false
        },
        scaleLabel: {
          display: true,
          labelString: 'Indeks Data'
        }
      }]
    }
  }
});


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd
}
if (mm < 10) {
  mm = '0' + mm
}
today = yyyy + '-' + mm + '-' + dd;
$("#idInputDate").attr('max', today);
$("#idInputDate").attr('value', "");

document.getElementById("idSelectLastHours").onchange = function () {
  if (this.selectedIndex == 0) {
    setNewGraphTable(false, 60);
  } else if (this.selectedIndex == 1) {
    setNewGraphTable(false, 180);
  } else if (this.selectedIndex == 2) {
    setNewGraphTable(false, 360);
  } else if (this.selectedIndex == 3) {
    setNewGraphTable(false, 720);
  }
}

initGraph();
var isGraph = true;
function toGraph() {
  if (!isGraph) {
    initGraph();
    $("#buttonGraph").attr('class', 'btn btn-info btn-block rounded-pill');
    $("#buttonTable").attr('class', 'btn btn-light btn-block rounded-pill');
    isGraph = true;
  }
}
function toTable() {
  if (isGraph) {
    $("#idShowTable").show();
    $("#idShowGraphVoltage").hide();
    $("#idShowGraphCurrent").hide();
    $("#idShowGraphPower").hide();
    $("#idShowGraphEnergy").hide();
    $("#idShowGraphData").hide();
    $("#buttonGraph").attr('class', 'btn btn-light btn-block rounded-pill');
    $("#buttonTable").attr('class', 'btn btn-info btn-block rounded-pill');
    isGraph = false;
  }
}
function initGraph() {
  $("#idShowTable").hide();
  $("#idShowGraphVoltage").show();
  $("#idShowGraphCurrent").show();
  $("#idShowGraphPower").show();
  $("#idShowGraphEnergy").show();
  $("#idShowGraphData").show();
}


function viewSpecific() {
  var getDate = document.getElementById("idInputDate").value;
  filterByTime(getDate)
}


function setNewGraphTable(statInit, limitNum) {
  if (!statInit) {
    childLabRef.off('value', listener);
  }
  if (limitNum == 60) {
    lastView = 1;
  }
  else if (limitNum == 180) {
    lastView = 3;
  }
  else if (limitNum == 360) {
    lastView = 6;
  }
  else if (limitNum == 720) {
    lastView = 12;
  }
  $("#idInputDate").attr('value', "");
  childLabRef = labRef.child(authLab + "/data_listrik").orderByChild("waktu").limitToLast(limitNum);
  listener = childLabRef.on('value', function (snapshot) {
    getData(snapshot);
  });
}


function filterByTime(getDate) {
  childLabRef.off('value', listener);
  childLabRef = labRef.child(authLab + "/data_listrik").orderByChild("waktu").startAt(String(getDate) + " 00:00:00").endAt(String(getDate) + " 23:59:59");
  listener = childLabRef.on('value', function (snapshot) {
    if (snapshot.exists()) {
      document.getElementById('idSelectLastHours').selectedIndex = "3";
      getData(snapshot);
    } else {
      alert('Data tidak ditemukan pada ' + document.getElementById("idInputDate").value);
      if (lastView == 1) {
        setNewGraphTable(false, 60);
      }
      else if (lastView == 3) {
        setNewGraphTable(false, 180);
      }
      else if (lastView == 6) {
        setNewGraphTable(false, 360);
      }
      else if (lastView == 12) {
        setNewGraphTable(false, 720);
      }
    }

  });
}


function export2csv() {

  const rows = [
    ["Waktu", "Tegangan (V)", "Arus (A)", "Daya (W)", "Energi (Wh)"]
  ];
  childLabRef.off('value', listener);
  childLabRef = labRef.child(authLab + "/data_listrik").orderByChild("waktu");

  listener = childLabRef.on('value', function (snapshot) {
    if (snapshot.exists()) {
      snapshot.forEach(function (childSnapshot) {
        rows.push([childSnapshot.child("waktu").val(), childSnapshot.child("tegangan").val(), childSnapshot.child("arus").val(), childSnapshot.child("daya").val(), childSnapshot.child("energi").val()]);
      });
      let csvContent = "data:text/csv;charset=utf-8,"
        + rows.map(e => e.join(",")).join("\n");
      var encodedUri = encodeURI(csvContent);
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "data_listrik.csv");
      document.body.appendChild(link); // Required for FF
      link.click();
    } else {
      alert('Tidak terdapat data');
    }
    if (lastView == 1) {
      setNewGraphTable(false, 60);
    }
    else if (lastView == 3) {
      setNewGraphTable(false, 180);
    }
    else if (lastView == 6) {
      setNewGraphTable(false, 360);
    }
    else if (lastView == 12) {
      setNewGraphTable(false, 720);
    }

  });

}

function timeSending(waktu, date2) {
  var match = waktu.match(/^(\d+)-(\d+)-(\d+) (\d+)\:(\d+)\:(\d+)$/);
  var date1 = new Date(match[1], match[2] - 1, match[3], match[4], match[5], match[6]);
  var res = ((date2 - date1.getTime()) / 1000).toString();
  chartData.data.datasets.forEach((dataset) => {
    chartData.data.labels.push("Data ke-"+indexData);
    dataset.data.push(res.split(".")[0]);
    if(dataset.data.length>=60){
      dataset.data.shift();
      chartData.data.labels.shift();
    }
  });
  chartData.update({ //ganti
    duration: 800,
    lazy: true,
    easing: 'easeOutBounce'
  });
  indexData++;
}

function getData(snapshot) {
  var currentDate = new Date();
  var date2 = currentDate.getTime();
  var totData = 0;
  var ydataVoltage = [];
  var xdata = [];
  var ydataCurrent = []; //ganti
  var ydataPower = []; //ganti
  var ydataEnergy = []; //ganti
  if (snapshot.exists()) {
    $('#idTableData tbody').empty();
    snapshot.forEach(function (childSnapshot) {
      xdata.push(childSnapshot.child("waktu").val());
      ydataVoltage.push(childSnapshot.child("tegangan").val());
      ydataCurrent.push(childSnapshot.child("arus").val()); //ganti
      ydataPower.push(childSnapshot.child("daya").val()); //ganti
      ydataEnergy.push(childSnapshot.child("energi").val()); //ganti
      $('#idTableData tbody').prepend('<tr />').children('tr:first').append('<td>' + childSnapshot.child("waktu").val() + '</td><td>' + childSnapshot.child("tegangan").val() + '</td><td>' + childSnapshot.child("arus").val() + '</td><td>' + childSnapshot.child("daya").val() + '</td><td>' + childSnapshot.child("energi").val() + '</td>');
      totData++;
    });
    if (!startMonitor) {
      timeSending(xdata[totData - 1].toString(), date2);
    }
    startMonitor = false;
    //$("#idInputDate").attr('min', xdata[0].substring(0, 10));
    chartVoltage.data.datasets[0].data = ydataVoltage;
    chartVoltage.data.labels = xdata;
    chartVoltage.update({
      duration: 800,
      lazy: true,
      easing: 'easeOutBounce'
    });
    chartCurrent.data.datasets[0].data = ydataCurrent; //ganti
    chartCurrent.data.labels = xdata; //ganti
    chartCurrent.update({ //ganti
      duration: 800,
      lazy: true,
      easing: 'easeOutBounce'
    });
    chartPower.data.datasets[0].data = ydataPower; //ganti
    chartPower.data.labels = xdata; //ganti
    chartPower.update({ //ganti
      duration: 800,
      lazy: true,
      easing: 'easeOutBounce'
    });
    chartEnergy.data.datasets[0].data = ydataEnergy; //ganti
    chartEnergy.data.labels = xdata; //ganti
    chartEnergy.update({ //ganti
      duration: 800,
      lazy: true,
      easing: 'easeOutBounce'
    });
  } else {
    alert('Data tidak ditemukan');
  }


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
  } else {

  }
}

//End of Energy Chart